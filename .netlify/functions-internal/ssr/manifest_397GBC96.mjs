import './chunks/astro_dTm8oGhI.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.2.4_@types+node@20.11.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=e=>{e.ariaLabel=\"closed\",e.style.transform=\"translateX(500px)\",setTimeout(()=>{e.classList.add(\"invisible\")},300)};document.getElementById(\"mobile-display-button\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"closed\"&&(e.classList.remove(\"invisible\"),e.ariaLabel=\"open\",e.style.transform=\"translateX(0px)\"),e?.ariaLabel===\"open\"&&document.getElementById(\"mobile-menu-close-button\")?.addEventListener(\"click\",()=>{t(e)})});document.getElementById(\"mobile-menu\")?.addEventListener(\"mouseleave\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-contact\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-services\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});\n"}],"styles":[{"type":"external","src":"/_astro/gallery.-j4CaPyE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=e=>{e.ariaLabel=\"closed\",e.style.transform=\"translateX(500px)\",setTimeout(()=>{e.classList.add(\"invisible\")},300)};document.getElementById(\"mobile-display-button\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"closed\"&&(e.classList.remove(\"invisible\"),e.ariaLabel=\"open\",e.style.transform=\"translateX(0px)\"),e?.ariaLabel===\"open\"&&document.getElementById(\"mobile-menu-close-button\")?.addEventListener(\"click\",()=>{t(e)})});document.getElementById(\"mobile-menu\")?.addEventListener(\"mouseleave\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-contact\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-services\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});\n"}],"styles":[{"type":"external","src":"/_astro/gallery.-j4CaPyE.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=e=>{e.ariaLabel=\"closed\",e.style.transform=\"translateX(500px)\",setTimeout(()=>{e.classList.add(\"invisible\")},300)};document.getElementById(\"mobile-display-button\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"closed\"&&(e.classList.remove(\"invisible\"),e.ariaLabel=\"open\",e.style.transform=\"translateX(0px)\"),e?.ariaLabel===\"open\"&&document.getElementById(\"mobile-menu-close-button\")?.addEventListener(\"click\",()=>{t(e)})});document.getElementById(\"mobile-menu\")?.addEventListener(\"mouseleave\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-contact\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});document.getElementById(\"mobile-services\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"mobile-menu\");e?.ariaLabel===\"open\"&&t(e)});\n"}],"styles":[{"type":"external","src":"/_astro/gallery.-j4CaPyE.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/zacharysemaan/code/zuker-building/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/zacharysemaan/code/zuker-building/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/zacharysemaan/code/zuker-building/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/gallery.astro":"chunks/pages/gallery_uKxDtmYb.mjs","/node_modules/.pnpm/astro@4.2.4_@types+node@20.11.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_l6B-L5_g.mjs","/src/pages/index.astro":"chunks/pages/index_OJLUGl9e.mjs","\u0000@astrojs-manifest":"manifest_397GBC96.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.2.4_@types+node@20.11.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_XgMTO33u.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_6qz4-BbM.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_foRhRAzP.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"chunks/gallery_e8TTsnSU.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.b0C7pwqP.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/5.lokVlqVo.jpg","/_astro/gallery.-j4CaPyE.css","/1736378301507.jpg","/1736380122307.jpg","/1736380190405.jpg","/20240918_150852.jpg","/20240918_150855.jpg","/20241115_111235.jpg","/20241115_111248.jpg","/20250119_165849.jpg","/3d Transparent.png","/5.jpg","/Facetune_ (1).jpg","/Facetune_.jpg","/FunPic_20240919_105832717.jpg","/FunPic_20241125_220714978.jpg","/IMG_2206.jpg","/IMG_2207.jpg","/IMG_2209.jpg","/IMG_2210.jpg","/IMG_2215.jpg","/IMG_2216.jpg","/IMG_2217.jpg","/IMG_3628.jpg","/artwork.png","/facebook-f.svg","/favicon.svg","/instagram.svg","/logo jpg-01.jpg","/logo png for web.png","/Matey Pics/IMG_2206.jpg","/Matey Pics/IMG_2207.jpg","/Matey Pics/IMG_2209.jpg","/Matey Pics/IMG_2210.jpg","/Matey Pics/IMG_2215.jpg","/Matey Pics/IMG_2216.jpg","/Matey Pics/IMG_2217.jpg","/admin/index.html","/admin/assets/SchemaReference.es-9e86ec53.js","/admin/assets/brace-fold.es-f2e3735d.js","/admin/assets/closebrackets.es-e969742b.js","/admin/assets/codemirror.es-52e8b92d.js","/admin/assets/codemirror.es2-5884f31a.js","/admin/assets/comment.es-39699bae.js","/admin/assets/dialog.es-dffe62e7.js","/admin/assets/dialog.es2-02b3b4e7.js","/admin/assets/foldgutter.es-b6cee46a.js","/admin/assets/forEachState.es-b2033c2b.js","/admin/assets/hint.es-76436230.js","/admin/assets/hint.es2-68d8f2a3.js","/admin/assets/index-25353a80.js","/admin/assets/index-2a14ca04.css","/admin/assets/index-4b0599c1.js","/admin/assets/info-addon.es-c9b2027b.js","/admin/assets/info.es-8d150248.js","/admin/assets/javascript.es-3c6957c5.js","/admin/assets/jump-to-line.es-d901ea33.js","/admin/assets/jump.es-35f9c8e4.js","/admin/assets/lint.es-fe7166bb.js","/admin/assets/lint.es2-a2463226.js","/admin/assets/lint.es3-81e24f37.js","/admin/assets/matchbrackets.es-97d2e827.js","/admin/assets/matchbrackets.es2-f53f57e6.js","/admin/assets/mode-indent.es-057a4f6a.js","/admin/assets/mode.es-d4eefceb.js","/admin/assets/mode.es2-709fdf0c.js","/admin/assets/mode.es3-66383cce.js","/admin/assets/search.es-1c15f5ea.js","/admin/assets/searchcursor.es-b1a352a2.js","/admin/assets/searchcursor.es2-cbfe7cae.js","/admin/assets/show-hint.es-b981493e.js","/admin/assets/sublime.es-e2a3eb60.js"],"buildFormat":"directory"});

export { manifest };
