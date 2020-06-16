//Required for Bootstrap
import * as $ from 'jquery'
import * as popper from 'popper.js'
import * as bootstrap from 'bootstrap'
export { $, popper, bootstrap }

import { renderCats } from '../cats'
import { getArticles } from './articles'
import { renderNav } from './nav'
import { renderLoginForm } from './loginForm'
import { renderArticleForm } from './articleForm'
import { Category } from './categories'


// renderCats()
renderNav()

const page = window.location.href.split('#')[1]

console.log('Rendering page...', page)

switch (page) {
    case 'Home':
        getArticles()
        break
    case 'Login':
        renderLoginForm()
        break
    case 'ArticleForm':
        renderArticleForm()
        break
    case Category.Poetry:
        getArticles(Category.Poetry)
        break
    case Category.Fiction:
        getArticles(Category.Fiction)
        break
    case Category.NonFiction:
        getArticles(Category.NonFiction)
        break
    case Category.ScienceFiction:
        getArticles(Category.ScienceFiction)
        break
    default:
        getArticles()
}