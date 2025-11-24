//export default ({ router, isServer }) => {
//    if (isServer) return;
//	
//    window.Villanova = window.Villanova || {};
//	
//	    window.Villanova.versionedLink = async function(path) {
//	        var pathname = window.location.pathname;
//	        var versionPos = pathname.indexOf("/v");
//	        var nextPos = pathname.indexOf("/next/");
//	        var target = path;
//	
//	        // Riutilizza la parte di versione dell'URL (/vX.Y o /next)
//	        if ((versionPos >= 0) || (nextPos >= 0)) {
//	            var start = (versionPos >= 0) ? versionPos : nextPos;
//	            var pos = pathname.indexOf("/", start + 2);
//	            var activeVersion = pathname.substring(start, pos);
//	            target = activeVersion + path;
//	        }
//	
//	        try {
//	            await router.push(target);
//	        } catch (err) {
//	            // no-op
//	        }
//	    };
//	};
	
// plugins/villanova-nav-version/enhanceAppFile.js
export default ({ router, isServer }) => {
    if (isServer) return;

    window.Villanova = window.Villanova || {};

    window.Villanova.versionedLink = async function(path) {
        try {
            var pathname = window.location.pathname || "";
            // Lista delle versioni che vuoi riconoscere (aggiungi future versioni qui)
            var versions = ["/villanova10", "/villanova09"];

            // Se il path passato già contiene una version (es. "/villanova09/docs"), usalo così com'è
            var pathHasVersion = versions.some(v => path.startsWith(v + "/") || path === v || path.startsWith(v));

            if (pathHasVersion) {
                // il path è già versioned: naviga direttamente
                await router.push(path);
                return;
            }

            // Altrimenti prova a ricavare la versione dall'URL corrente
            var activeVersion = versions.find(v => pathname.startsWith(v)) || "";

            var target = activeVersion ? (activeVersion + path) : path;

            // assicurati che target abbia lo slash iniziale
            if (!target.startsWith("/")) {
                target = "/" + target;
            }

            await router.push(target);
        } catch (err) {
            // Log utile per capire cosa è andato storto
            console.error("Villanova.versionedLink - errore di navigazione. path input:", path, "computed target:", typeof target !== 'undefined' ? target : '(non calcolato)', err);
        }
    };
};

