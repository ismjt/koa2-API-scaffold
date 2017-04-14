/**
 * Created by Majt on 2017/4/9.
 */
let {query} = require('../lib/mysql')

export let Get = (ctx) => {
  query('select * from `mock_user`').then(rows => {
    ctx.body = {
      result: rows
    }
  })
}
