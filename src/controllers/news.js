/**
 * Created by Majt on 2017/4/9.
 */
let {query} = require('../lib/mysql')

export let Get = (ctx) => {
  query('select id,title,description,hits,updatetime from met_news where id>80').then(rows => {
    ctx.body = {
      result: rows
    }
  })
}
