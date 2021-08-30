# Lipsum Dosimet

This site is for personal use. If you own any of these books, and want to restrict it's visibility, then please DM me. However, I can assure you that this website is only used by a bunch of people. It is mainly for storing books that I read ( and liked ) and want to share with friends and family. Thanks for understanding!
If you are interested in collaborating with me, please contact me!

<br>

## How to add an eBook

<br>

Let's say you want to add Harry Potter to this website:

<br>

1. Go to src/assets/eBooks and add a new folder named `HarryPotter`

2. Add five files in there:

```ts
HarryPotter_Cover.jpg // Cover of the book
HarryPotter_PDF.pdf // PDF version
HarryPotter_Kindle.mobi // Kindle version
HarryPotter_EPUB.epub // EPUB version

// To convert a PDF file to MOBI or EPUB, head to https://cloudconvert.com


HarryPotter.ts // For now, this file should be empty
```

3. Add four imports at the top of `HarryPotter.ts`

```ts
import HarryPotter_Cover from "./HarryPotter_Cover.jpg";
import HarryPotter_PDF from "./HarryPotter_PDF.pdf";
import HarryPotter_Kindle from "./HarryPotter_Kindle.mobi";
import HarryPotter_EPUB from "./HarryPotter_EPUB.epub";
```

4. And now, create a `HarryPotter` object and fill it with details about your book

```ts
const HarryPotter = {
  title: "Harry Potter Saga",
  author: "J.K. Rowling",
  category: "Fantasy Fiction",
  language: "english",
  description: "...",
  summary: "...",
  /* link your imported files here */
  cover: HarryPotter_Cover, 
  downloadPDF: HarryPotter_PDF,
  downloadKindle: HarryPotter_Kindle,
  downloadEPUB: HarryPotter_EPUB,
}

export default HarryPotter;
```

5. Go to src/assets/library.ts and import your `HarryPotter` object. Finally, add it in the LIBRARY array and you're done!