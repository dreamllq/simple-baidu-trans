import axios from 'axios';
import md5 from 'md5';

export default class BaiduTrans {
  appid: string;
  key: string;
  from: string;
  to: string;

  constructor({ appid, key, from, to }) {
    this.appid = appid;
    this.key = key;
    this.from = from;
    this.to = to;
  }

  async tran(query: string): Promise<string> {
    const salt = (new Date).getTime();
    const str1 = this.appid + query + salt + this.key;
    const sign = md5(str1);
    const url = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${query}&appid=${this.appid}&salt=${salt}&from=${this.from}&to=${this.to}&sign=${sign}`;
    const res = await axios.get(url);
    return res.data.trans_result[0].dst;
  }
}
