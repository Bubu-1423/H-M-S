# GitHub Pages 404 fix (Admin/TV)

## Problem

Aapka frontend `/admin` aur `/tv` links par jaata hai, lekin **GitHub Pages** sirf static files serve karta hai.
Isliye `/admin` aur `/tv` routes (HTML files) exist na hone ki wajah se **404** aa jata hai.

## Why it happens

- GitHub Pages par aapke pages typically `index.html`, `tv.html`, etc. ki tarah files hoti hain.
- Lekin `/admin` URL ka corresponding static file (jaise `admin.html`) GitHub Pages par present nahi hai.

## Solution (recommended)

### 1) Landing page links change karein

`PUBLIC/index.html` me:

- `href="/admin"` ko `href="/index.html"` (ya `admin.html` create karne par `admin.html`)
- `href="/tv"` ko `href="/tv.html"`

### 2) Assets paths correct rakhein

GitHub Pages subpath (Project name) pe bhi kaam kare, isliye `PUBLIC/*.html` me scripts/styles ka base path `/` se avoid karein.
Example: `href="style.css"` (relative) already sahi hai.

### 3) Admin route ke liye simple approach

Aap `PUBLIC/index.html` ko hi Admin page bana chuke ho (Admin UI hidden/visible logic client-side).
So landing se `/` (index.html) redirect karna best hai.

## Expected URLs after fix

- Home + Admin UI: `https://<username>.github.io/<repo>/` (index.html)
- TV page: `https://<username>.github.io/<repo>/tv.html`

## Optional: CNAME / base path

Agar aap project name ke andar hosted ho (not root domain), browser `base` issue aa sakta hai. Us case me `router.html` se relative routing handle ki jaati hai.

---

If you want, main aapke `PUBLIC/index.html` ke exact lines modify karke links fix kar dunga (taaki /admin aur /tv pe 404 band ho).
