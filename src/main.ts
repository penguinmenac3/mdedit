import './style.css'
import testText from './test.md?raw'
import { MDEdit } from "./mdedit/mdedit"

let EDIT = true

let appDiv = document.querySelector<HTMLDivElement>('#app')!
let saveFn = null
if (EDIT) {
  saveFn = (text: string) => {
    console.log(text)
    alert("Saved!")
    return true
  }
}

let simpleMD = new MDEdit(appDiv, saveFn)
simpleMD.load(testText)
