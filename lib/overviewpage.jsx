import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import styles from '../styles/overview.module.css'


const overviewDirectory = path.join(process.cwd(), 'overview')
export function getAllOverviewIds() {
    const fileNames = fs.readdirSync(overviewDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
  
  export async function getOverviewPageData(id) {
    const fullPath = path.join(overviewDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and content Html
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }
  
  