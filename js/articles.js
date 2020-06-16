import * as $ from 'jquery'

const api = 'https://api-us-west-2.graphcms.com/v2/ckb72baq00and01wk1wql78le/master'

export function getArticles(category) {
    let filter = ''
    if (category) {
        filter = `(where: {category: ${category}})`    
    }
    $.post(api, JSON.stringify({
        operationName: 'GetArticles',
        query: `
        query GetArticles {
            articles${filter} {
              title
              content {
                html
              }
              category
              publishedAt
            }
          }`,
        variables: null
    })).then(function(response) {
        const articles = response.data.articles
        const content = $('#content')

        console.log(articles)
        
        let articleListHtml = '<div class="row">'
        
        articles.forEach((article, index) => {
            if (index % 3 === 0) {articleListHtml += '</div><div class="row">'

            }
            articleListHtml += `
                <article class="col">
                     <h3>${article.title}</h3>
                     <small>Published: ${article.publishedAt}</small>
                     <section>
                        <p>
                        ${article.content.html}
                        </p>
                    </section>
                </article>
            `
        })
        
        articleListHtml += '</div>'

        content.html(articleListHtml)
        
        console.log(response.data.articles)
    })
}