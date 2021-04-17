import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const implementationsDirectory = path.join(process.cwd(), 'implementations')
export function getAllImplementationsIds() {
    const fileNames = fs.readdirSync(implementationsDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
  
  export async function getImplementationsPageData(id) {
    const fullPath = path.join(implementationsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .use(gfm)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and content Html
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }
  