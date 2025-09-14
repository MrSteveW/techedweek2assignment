## :dart: Requirements achieved

- [x] Implemented a responsive design. I made a wireframe design for mobile first, then a desktop version. I tested these with Chrome developer tools on desktops and mobile... :computer: :iphone:
- [x] Implemented a media query so that the full desktop version has left and right thumbnails, the mobile version does not. I used **display:none** in CSS, I would like to know if this is 'proper' way to do this. For example, are the images still loading for a mobile, just not showing, therefore still taking up bandwidth?... :iphone:
- [x] All the main images have appropriate **alt text** attributes for accesibility. This is done by passing in the alt description into the **aria-label** for each photo. I would like to know: is there any point creating an ARIA label for each image, if there is also a caption, which the screen reader can read out... :thinking:
- [x] Used event handlers. I wrapped the code for moving images left/right into separate functions, so that you can call that function based on either left icon click on left button click.

## :dart: Stretch goals

- [x] I am so pleased that I remembered how to use the modulo operator to create an infinite loop of an array of images - I had previously used this approach in Python to encode/decode a Caesar cipher. I had so much fun thinking about this programmatically!!! :smiley: :bulb:
- [x] I used JavaScript to add an **aria-label** to each main image :sound:
- [x] Arrow keys do move images left and right. Although I cannot get these keys to work combined with using the Windows Narrator - I would like to know how this is possible. :arrow_backward: :arrow_forward:
- [x] I wanted to implement Bootstrap for this week's assignment, as I had already used Font Awesome icons last week. I know Bootstrap & Tailwind offer huge libraries for quick and effective styling; but it's a bit clunky using it in HTML so I would like to know better ways of using these in the future (React, anyone :wink:)

## :pushpin: Unable to achieve

- [ ] I aimed to add a caption for each image underneath the background image. I got the JavaScript adding a caption fine, but the CSS styling became too unwieldy (having 2 rows within the same column... approaching Grid territory!!) I compromised with the caption overlaying the image. :thinking:
- [ ] Source set. I don't think this is a deal-breaker here :open_mouth: My current understanding is, source set is possible when adding images using **img** tags directly in HTML. I can't see how source set can be used in this app as I am inserting images using **CSS background-image**. I also understand that there are better ways of implementing this image gallery, eg using a React image gallery https://www.npmjs.com/package/react-image-gallery, that will give a smooth, professional look :sunglasses:

## :computer: External sources I used

Wireframe layed out in Figma  
Google fonts https://fonts.google.com/  
Bootstrap https://icons.getbootstrap.com/  
With thanks for these images [
Sanni Sahil https://unsplash.com/photos/green-plant-on-white-ceramic-pot-LEaK1Lmd1a8,
Annie Spratt https://unsplash.com/photos/red-and-green-leaves-on-white-background-IcxBbmxecEM,
Annie Spratt https://unsplash.com/photos/green-leaves-on-white-background-iWu70dv9vSM,
Nadiye-Odabaşı https://pixabay.com/photos/cactus-botanical-plant-houseplant-6851297/,
lnitsyk https://pixabay.com/photos/houseplant-potted-plant-decor-7367379/,
Denley Photography https://unsplash.com/photos/a-plant-in-a-pot-GNdLc38zNjU,
]
