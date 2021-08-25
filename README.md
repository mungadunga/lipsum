# Lipsum Dosimet

My goal is to deliver free eBooks to anyone on the internet safely and without ads. 
If you are interested in collaborating with me, please contact me!

To add an eBook:

1. Go to src/assets/eBooks

2. Make a new folder (name it by the name of your book)

3. Add four files in there: one PDF file, one MOBI file, one image (book cover) and an empty typescript file

4. Add the details of your book in the typescript file.

5. It should look like this:

```ts
import NewYork2140_Cover from "./NewYork2140_Cover.jpg";
import NewYork2140_PDF from "./NewYork2140_PDF.pdf";
import NewYork2140_Kindle from "./NewYork2140_Kindle.mobi";

const NewYork2140 = {
  title: "New York 2140",
  author: "Kim Stanley Robinson",
  category: "Science Fiction & Fantasy",
  language: "english",
  description: "description...",
  summary: "summary...",
  cover: NewYork2140_Cover,
  downloadPDF: NewYork2140_PDF,
  downloadKindle: NewYork2140_Kindle,
};

export default NewYork2140;
```

6. You're done!