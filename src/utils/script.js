export const GTM_SCRIPT = (
  <>
    <link
      rel='icon'
      href='https://www.cubeton.ru/favicon.ico/favicon.ico'
      type='image/x-icon'
    />

    <script
      dangerouslySetInnerHTML={{
        __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();
		for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
		k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
	 
		ym(93377857, "init", {
			 clickmap:true,
			 trackLinks:true,
			 accurateTrackBounce:true,
			 webvisor:true
		});`,
      }}
    ></script>

    <noscript>
      <iframe
        src='https://mc.yandex.ru/watch/93377857'
        style={{ position: 'absolute', left: '-9999px' }}
      ></iframe>
    </noscript>
  </>
);
