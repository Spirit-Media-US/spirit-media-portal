import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CE8Lg1Vy.mjs';
import 'clsx';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/deploy/Sites/spirit-media-portal/","cacheDir":"file:///home/deploy/Sites/spirit-media-portal/node_modules/.astro/","outDir":"file:///home/deploy/Sites/spirit-media-portal/dist/","srcDir":"file:///home/deploy/Sites/spirit-media-portal/src/","publicDir":"file:///home/deploy/Sites/spirit-media-portal/public/","buildClientDir":"file:///home/deploy/Sites/spirit-media-portal/dist/","buildServerDir":"file:///home/deploy/Sites/spirit-media-portal/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth.ts","pathname":"/api/auth","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DQrI273v.css"}],"routeData":{"route":"/clients","isIndex":false,"type":"page","pattern":"^\\/clients\\/?$","segments":[[{"content":"clients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clients.astro","pathname":"/clients","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DQrI273v.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}html{font-family:IBM Plex Sans,sans-serif}:root{--color-navy: #0f172a;--color-gold: #d4a843}body{background-color:var(--color-navy);background-image:radial-gradient(circle at 20% 50%,rgba(212,168,67,.05) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(212,168,67,.03) 0%,transparent 50%)}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#d4a8430d}::-webkit-scrollbar-thumb{background:#d4a8434d;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#d4a84380}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DQrI273v.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}html{font-family:IBM Plex Sans,sans-serif}:root{--color-navy: #0f172a;--color-gold: #d4a843}body{background-color:var(--color-navy);background-image:radial-gradient(circle at 20% 50%,rgba(212,168,67,.05) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(212,168,67,.03) 0%,transparent 50%)}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#d4a8430d}::-webkit-scrollbar-thumb{background:#d4a8434d;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#d4a84380}\n"}],"routeData":{"route":"/developers","isIndex":false,"type":"page","pattern":"^\\/developers\\/?$","segments":[[{"content":"developers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/developers.astro","pathname":"/developers","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DQrI273v.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}html{font-family:IBM Plex Sans,sans-serif}body{background-color:#0f172a;background-image:radial-gradient(circle at 20% 50%,rgba(212,168,67,.1) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(212,168,67,.05) 0%,transparent 50%)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/logout","isIndex":false,"type":"page","pattern":"^\\/logout\\/?$","segments":[[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/logout.astro","pathname":"/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DQrI273v.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}html{font-family:IBM Plex Sans,sans-serif}:root{--color-navy: #0f172a;--color-gold: #d4a843}body{background-color:var(--color-navy);background-image:radial-gradient(circle at 20% 50%,rgba(212,168,67,.05) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(212,168,67,.03) 0%,transparent 50%)}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#d4a8430d}::-webkit-scrollbar-thumb{background:#d4a8434d;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#d4a84380}\n"}],"routeData":{"route":"/playbook","isIndex":false,"type":"page","pattern":"^\\/playbook\\/?$","segments":[[{"content":"playbook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/playbook.astro","pathname":"/playbook","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://spirit-media-portal.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/deploy/Sites/spirit-media-portal/src/pages/clients.astro",{"propagation":"none","containsHead":true}],["/home/deploy/Sites/spirit-media-portal/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro",{"propagation":"none","containsHead":true}],["/home/deploy/Sites/spirit-media-portal/src/pages/playbook.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth@_@ts":"pages/api/auth.astro.mjs","\u0000@astro-page:src/pages/clients@_@astro":"pages/clients.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/developers@_@astro":"pages/developers.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/logout@_@astro":"pages/logout.astro.mjs","\u0000@astro-page:src/pages/playbook@_@astro":"pages/playbook.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DQJUmkVi.mjs","/home/deploy/Sites/spirit-media-portal/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts":"_astro/dashboard.astro_astro_type_script_index_0_lang.nm8M6Hro.js","/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro?astro&type=script&index=0&lang.ts":"_astro/developers.astro_astro_type_script_index_0_lang.B1zUnrdv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".copy-slug\").forEach(t=>{t.addEventListener(\"click\",function(){const e=this.getAttribute(\"data-slug\");navigator.clipboard.writeText(e).then(()=>{const n=this.textContent;this.textContent=\"Copied!\",setTimeout(()=>{this.textContent=n},2e3)})})});"],["/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".copy-btn\").forEach(t=>{t.addEventListener(\"click\",function(){const e=this.getAttribute(\"data-copy\");navigator.clipboard.writeText(e).then(()=>{const n=this.textContent;this.textContent=\"Copied!\",setTimeout(()=>{this.textContent=n},2e3)})})});"]],"assets":["/_astro/dashboard.DQrI273v.css"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"cNGDDtTNvE2kcRcTnoAld8xGR6uFhQYFNUCP6vFutCE=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
