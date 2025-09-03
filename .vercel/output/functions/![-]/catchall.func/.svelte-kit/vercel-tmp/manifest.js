export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["scfavicon.png","scfavicon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CA1gdPTO.js",app:"_app/immutable/entry/app.BKQcGQ-p.js",imports:["_app/immutable/entry/start.CA1gdPTO.js","_app/immutable/chunks/B4R7MhLh.js","_app/immutable/chunks/DaoAKokp.js","_app/immutable/entry/app.BKQcGQ-p.js","_app/immutable/chunks/DaoAKokp.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DNmT_gaO.js","_app/immutable/chunks/BLz1e_bf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
