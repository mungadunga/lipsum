# Lipsum Dosimet

My goal is to deliver free eBooks to anyone on the internet safely and without ads. 
If you are interested in collaborating with me, please contact me!

<br>

## How to add an eBook

<br>

Let's say you want to add Harry Potter to this website:

<br>

1. Go to src/assets/eBooks and add a new folder named `HarryPotter`

2. Add four files in there:

```ts
HarryPotter_Cover.jpg // Cover of the book
HarryPotter_PDF.pdf // PDF version of the book
HarryPotter_Kindle.mobi // Kindle version of the book. To convert a PDF file to MOBI, head to https://cloudconvert.com

HarryPotter.ts // For now, this file should be empty
```

3. Add three imports at the top of `HarryPotter.ts`

```ts
import HarryPotter_Cover from "./HarryPotter_Cover.jpg";
import HarryPotter_PDF from "./HarryPotter_PDF.pdf";
import HarryPotter_Kindle from "./HarryPotter_Kindle.mobi";
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
  cover: HarryPotter_Cover, // link your imported files here
  downloadPDF: HarryPotter_PDF,
  downloadKindle: HarryPotter_Kindle,
}

export default NewYork2140;
```

5. Go to src/assets/library.ts and import your `HarryPotter` object. Finally, add it in the LIBRARY array and you're done!