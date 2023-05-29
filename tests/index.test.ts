// https://jestjs.io/zh-Hans/docs/api
import { BaiduTrans } from '@/index';
test('demo', async () => {
  const bt = new BaiduTrans({
    appid: '20230526001690403',
    key: 'HoI5zDsepSzvcjrLJ0bY',
    from: 'zh',
    to: 'jp' 
  });
  const res = await bt.tran('新增');
  console.log(res);
});