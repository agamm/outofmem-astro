import { writeFile } from "fs/promises";
import { join } from "path";

const createMarkdownFile = async (index) => {
  const frontMatter = `---
title: "Title ${index}"
date: "2024-03-19"
---\n`;
  const content = `# Title ${index}\n\nContent for file ${index}.`;
  const fullPath = join("src", "pages", "blog", `file${index}.md`);

  await writeFile(fullPath, frontMatter + content, "utf8");
};

const createMarkdownFiles = async () => {
  try {
    for (let i = 1; i <= 200000; i++) {
      await createMarkdownFile(i);
    }
    console.log("Markdown files have been created.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

createMarkdownFiles();
