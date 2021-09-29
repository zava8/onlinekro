1.  some scripts.js (themes/hugo-serif-theme/assets/js/scripts.js)

```
var font_selektr = document.querySelector('#fontselectid');
var font_selektr_mobaIl = document.querySelector('#fontselectidmobile');
font_selektr.onchange = function() {
    document.body.style.fontFamily = font_selektr.value;
    document.footer.style.fontFamily = font_selektr.value;
    // if ( this.value === "Hnskrit")
    if ( ['HinDi', 'Hnskrit'].includes(this.value) )
    {
        document.body.style.fontSize = "xx-large";
        document.footer.style.fontSize = "xx-large";
    }
}
font_selektr_mobaIl.onchange = function() {
    document.body.style.fontFamily = font_selektr_mobaIl.value;
    document.footer.style.fontFamily = font_selektr_mobaIl.value;
    if ( ['HinDi', 'Hnskrit'].includes(this.value) )
    {
        document.body.style.fontSize = "xx-large";
        document.footer.style.fontSize = "xx-large";
    }
}
```
1. some partials html (themes/hugo-serif-theme/layouts/partials/main-menu.html)
```
<li>
<select id="fontselectidmobile">
  <option value="u5" selected>INglis1</option>
  <option value="u5cdot" selected>INglis2</option>
  <option value="HinDi">HinDi1</option>
  <option value="Hnskrit">HinDi2</option>
</select>
</li>
```

1. partials/google-fonts.html
```
<!-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"> -->
<link rel="preload" type="font/woff2" href="{{ "veb8fonts/u5.woff2" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff" href="{{ "veb8fonts/u5.woff" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/ttf" href="{{ "veb8fonts/u5.ttf" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff2" href="{{ "veb8fonts/u5cdot.woff2" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff" href="{{ "veb8fonts/u5cdot.woff" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/ttf" href="{{ "veb8fonts/u5cdot.ttf" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff2" href="{{ "veb8fonts/HinDi.woff2" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff" href="{{ "veb8fonts/HinDi.woff" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/ttf" href="{{ "veb8fonts/HinDi.ttf" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff2" href="{{ "veb8fonts/Hnskrit.woff2" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/woff" href="{{ "veb8fonts/Hnskrit.woff" | relURL }}" as="font" crossorigin>
<link rel="preload" type="font/ttf" href="{{ "veb8fonts/Hnskrit.ttf" | relURL }}" as="font" crossorigin>
```

1.  in themes/hugo-serif-theme/layouts/_default/baseof.html
```
{{ partial "google-fonts.html" . }}
```

1. veb8fonts.css in assets/[css/scss/sass]
2. static/veb8fonts
