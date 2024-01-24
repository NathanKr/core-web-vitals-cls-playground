<h2>Motivation</h2>
<p>Cumulative layout shift - CLS is a core web vitals metric and is part of page speed insight performance score. In particular image might cause layout shift when its width\height is not known to the browser before the page is rendered ---> check the tab clsProblem (url cls-problem)</p>
<p>So the the basic question is how to eliminate layout shift</p>

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

And click on the menu for different use cases

<h3>Production</h3>

<p>Push and take the <a href='https://core-web-vitals-cls-playground.vercel.app'>vercel url</a> and put in <a href='https://pagespeed.web.dev/'>page speed insight</a> per page and check the solution . CLS should be 0 </p>
<p>Check for interesting results regarding LCP below in 'Points of Interests'

<h2>Leading questions</h2>
So here are few questions that answers can shed light on this metric
<ol>
<li>How to create a page with cls problem using image</li>
<li>How to solve it by providing width and height ==> brut force might not always be enough</li>
<li>Is it possible to solve this by providing the image aspect ratio instead of width and height</li>
<li>How to solve the use case of img width smaller than parent without image distortion</li>
<li>Does Image component of next.js make it easy to solve this problem</li>
</ol>

<h2>Bounded width</h2>
<p>If the image is not bound in width \ height by its parent then this is non issue - simply provide width \ height to the img element --> check tab simpleSolution (url simple-no-parent-bound)</p> 
More interesting probem is when the parent has pre defined width ==> brut force using the img width \ height may solve the cls problem but cause the image to be distorted thus reduce the user experience and may reduce the page speed insight 'best practice' score. check tab uiProblemWithBoundParent (url ui-problem-fixed-parent-width)

<h2>Solution</h2>
<h3>html img elemnt</h3>
tab aspectRatioHtmlImgFixedParent (url img-aspect-ratio-fixed-parent-width)</p>
<h3>next.js Image component</h3>
tab aspectRatioNextImageFixedParent (url next.js-image-aspect-ratio-fixed-parent-width)

<h3>This is the basic idea</h3>
<ul>
<li><h4>Parent side</h4> By providing the parent width and the image aspect ratio the browser can prepare the layout for the parent in terms of bounding reactangle so no layout shift</li>
<li><h4>Image side</h4> we took care of the width and height via the parent and now the image simply need to fill the parent using width 100% for html img element or fill for next.js Image component</li>
<li><h4> image width < parent width</h4> fill the parent react is ok for image width > parent width because no UI distortion in this case (infoBig) . However filling the parent in case the image width < parent width might cause distortion. To eliminate it you can bound the parent max-width to the image width and this is done by providing imgWidthPx in IImageWithAspectRatio  </li>
</ul>

<h3>Implementation</h3>

<h4>html img element</h4>

```tsx
interface IProps {
  info: IImageWithAspectRatioFixedParentWidth;
}

const ImgWithAspectRatioFixedParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getFixedParentStyle(info);

  return (
    <div style={style}>
      <img style={{ width: "100%" }} src={`/${imgSrc}`} alt={title} />
    </div>
  );
};
```

<h4>next.js Image component</h4>

```tsx
interface IProps {
  info: IImageWithAspectRatioFixedParentWidth;
}

const NextImageWithAspectRatioFixedParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getFixedParentStyle(info);

  return (
    <div style={style}>
      <Image src={`/${imgSrc}`} alt={title} fill={true} />
    </div>
  );
};
```

<h2>Conclusions</h2>
<ul>
<li>Using the css aspect-ratio property is realy helpfull when you want to keep the image aspect ratio and eliminate layout shift problem. Both will improve the UI experience </li>
<li>You need to apply the aspect-ratio on the image bounding element from one side and instruct the image to fill its parent width and height on the other side. use 100% for html img and fill true for next.js Image component</li>
<li>Using the above technique allow the browser to know the bounding rect before rendering and this elimeinate layput shift ==> CLS is zero in tems of core web vitals</li>
<li>The suggested solution work nicely when the image width is bigger than the parent width (infoBig) but it also works without object-fit when the image width is smaller than the parent width (infoSmall) and here you have two options as explained above</li>
</ul>

<h2>Fixed parent width \ Variable width</h2>
<p>All the above relate to fixed parent width e.g 800px but this is not responsive in terms of the parent width</p>
<p>To allow the parent width to be responsive you need to use max-width and providing img width is meaning less so small has the parent size not like for fixed parent width</p>

<h3>Relevant tabs for variable parent width</h3>
<h4>html img element</h4>
tab aspectRatioHtmlImgVariableParent (url img-aspect-ratio-variable-parent-width)

```tsx
interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
}

const ImgWithAspectRatioVariableParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const parentStyle = getVariableParentStyle(info);
  
  return (
    <div style={parentStyle}>
      <img style={{ width: "100%" }} src={imgSrc} alt={title} />
    </div>
  );
};
```

<h4>next.js Image component</h4>
tab aspectRatioNextImageVariableParent (url next.js-image-aspect-ratio-variable-parent-width)

```tsx
interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
}

const NextImageWithAspectRatioVariableParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const parentStyle = getVariableParentStyle(info);

  return (
    <div style={parentStyle}>
      <Image src={`/${imgSrc}`} alt={title} fill={true} />
    </div>
  );
};
```

<h2>Points of interest</h2>
<ul>
<li>LCP is good for all use cases ~ 2sec beside img variable parent width ~ 4sec.
<ul>
<li>next.js-image-aspect-ratio-fixed-parent-width : the first image is small and keep its width so image is small --> low LCP</li>
<li>img-aspect-ratio-fixed-parent-width : same as next.js-image-aspect-ratio-fixed-parent-width</li>
<li>next.js-image-aspect-ratio-variable-parent-width : the first image is small but stertch to the parent width so image dowloaded is big. But WebP format is used by next.js Image --> low LCP</li>
<li>img-aspect-ratio-variable-parent-width : the first image is small but stertch to the parent width so image dowloaded is big  --> high LCP</li>
</ul>
<img src='/figs/average-lcp.png'/>
</li>
</ul>

<h2>Open issues</h2>
<ul>
<li>i was able to eliminate ui distortion for small image fixed parent width. is it possible also for variable parent width</li>
<li>for both html img and next.js Image i dont get a 100 score for page speed insight 'best practices' due to 'Serves images with low resolution' currently i dont understand why - may be <a href='https://web.dev/articles/serve-responsive-images?utm_source=lighthouse&utm_medium=lr'>serve-responsive-images</a> will help</li>
</ul>
