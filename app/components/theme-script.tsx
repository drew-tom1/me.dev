const code = `(function(){try{var k='me.dev-theme',s=localStorage.getItem(k),d=document.documentElement;
if(s==='dark'){d.classList.add('dark');}
else if(s==='light'){d.classList.remove('dark');}
else if(window.matchMedia('(prefers-color-scheme: dark)').matches){d.classList.add('dark');}
else{d.classList.remove('dark');}
}catch(e){}})();`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
      suppressHydrationWarning
    />
  );
}
