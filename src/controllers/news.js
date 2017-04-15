/**
 * Created by Majt on 2017/4/9.
 */
let {query} = require('../lib/mysql')

export let Get = async (ctx) => {
  let data;
  try {
    data = await query('select id,title,description,imgurl,hits,updatetime from met_news where id>80');
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
  ctx.body = {
		payload: data,
	}
}
