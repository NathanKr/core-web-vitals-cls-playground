<h2>Motivation</h2>
<p>Cumulative layout shift - CLS is a core web vitals metric and is part of page speed insight performance score. In particular image might cause layout shift when its width\height is not known to the browser before the page is rendered</p>
<p>So the the basic question is how to do it</p>

<h2>Installation</h2>

```
pnpm i
```

You can also use npm


<h2>Usage</h2>

<h3>Development</h3>

```
npm run dev
```

And click on the menu for different use cases :
<ul>
<li>cls-problem</li>
<li>simple-solution-no-parent-bound</li>
<li>ui-problem-with-bound-parent</li>
<li>next.js-image-pseudo-aspect-ratio-solution-with-bound-parent</li>
<li>next.js-image-real-aspect-ratio-solution-with-bound-parent</li>
<li>img-aspect-ratio-solution-with-bound-parent</li>
</ul>

The pages with final solution for CLS are the last two

<h3>Production</h3>

push and take the <a href='https://core-web-vitals-cls-playground.vercel.app'>vercel url</a> and put in <a href='https://pagespeed.web.dev/'>page speed insight</a> per page and check for CLS --> should be 0 and LCP which is ~ 1 sec for the next.js Image solution and ~ 2 sec for the img html element

<h2>Leading questions</h2>
So here are few questions that answers can shed light on this metric
<ol>
<li>How to create a page with cls problem using image</li>
<li>How to solve it by providing width and height ==> brut force might not always be enough</li>
<li>Is it possible to solve this by providing the image aspect ratio instead of width and height</li>
<li>How to solve the use case of img width smaller than parent without picture distortion</li>
<li>Does Image component of next.js make it easy to solve this problem</li>
</ol>

<h2>Bounded width</h2>
If the image is not bound in width \ height by its parent then this is non issue - simply provide width \ height to the img element. More interesting probem is when the parent has pre defined width ==> brut force using the img width \ height may solve the cls problem but cause the image to be distorted thus reduce the user experience and may reduce the page speed insight 'best practice' score

<h2>Solution</h2>
This is the basic idea
<ul>
<li>Parent side : By providing the parent width and the image aspect ratio the browser can prepare the layout for the parent in terms of bounding reactangle so no layout shift</li>
<li>Image side : we took care of the width and height via the parent and now the image simply need to fill the parent using width 100% for html img element or fill for next.js Image component</li>
</ul>

<h3>html img element</h3>

```tsx
<div
  style={{
    width: `${parentWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  }}
>
  <img
    style={{ width: "100%"  }}
    src={`/${imgSrc}`}
    alt={title}
  />
</div>
```

<h3>next.js Image component</h3>

```tsx
<div
  style={{
    width: `${parentWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  }}
>
  <Image src={`/${imgSrc}`} alt={title} fill={true} />
</div>
```

<h2>Conclusions</h2>
<ul>
<li>Using the css aspect-ratio property is realy helpfull when you want to keep the image aspect ratio and eliminate layout shift problem. Both will improve the UI experience </li>
<li>You need to apply the aspect-ratio on the image bounding element from one side and instruct the image to fill its parent width and height on the other side. use 100% for html img and fill true for next.js Image component</li>
<li>Using the above technique allow the browser to know the bounding rect before rendering and this elimeinate layput shift ==> CLS is zero in tems of core web vitals</li>
<li>The suggested solution work nicely when the image width is bigger than the parent width (infoBig) but it also works without object-fit when the image width is smaller than the parent width (infoSmall)</li>
<li>Altough using aspect-ratio and img we made CLS=0 , this is not true for LCP. The LCP is smaller when you replace html img with next.js Image. You may check the reasons by looking on the errors in page speed insight . one possible reason is the fact that next.js serve images in 'Image formats like WebP and AVIF often provide better compression than PNG or JPEG'. In this respect Image component of next.js is better than img html element</li>
</ul>


<h2>Open issues</h2>
Altough this solution handle a use case of image width < parent width the end result is that the image occupy the whole parent width and height and this might cause some distortion altough it is not evedance with infoSmall. I wonder if for this use case the image will keep its width thus no distortion. The solution used in <a href='https://web.dev/learn/design/responsive-images'>web.dev</a> is to used object-fit but it is not working here for some reason