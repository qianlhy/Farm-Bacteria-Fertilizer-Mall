const defaultLocations = [
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  },
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  },
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  },
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  },
  {
    "name": "???",
    "detail": "???",
    "value": "??? / ???"
  },
  {
    "name": "????",
    "detail": "???",
    "value": "??? / ????"
  },
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  },
  {
    "name": "???",
    "detail": "??? / ???",
    "value": "??? / ??? / ???"
  }
];

const entries = [
  {
    "code": "110000",
    "name": "北京市",
    "detail": "?????",
    "value": "北京市",
    "rank": 1,
    "normalizedName": "北京",
    "normalizedValue": "北京",
    "normalizedSearchText": "北京北京"
  },
  {
    "code": "110101",
    "name": "东城区",
    "detail": "北京市",
    "value": "北京市 / 东城区",
    "rank": 3,
    "normalizedName": "东城",
    "normalizedValue": "北京东城",
    "normalizedSearchText": "北京东城东城北京"
  },
  {
    "code": "110102",
    "name": "西城区",
    "detail": "北京市",
    "value": "北京市 / 西城区",
    "rank": 3,
    "normalizedName": "西城",
    "normalizedValue": "北京西城",
    "normalizedSearchText": "北京西城西城北京"
  },
  {
    "code": "110105",
    "name": "朝阳区",
    "detail": "北京市",
    "value": "北京市 / 朝阳区",
    "rank": 3,
    "normalizedName": "朝阳",
    "normalizedValue": "北京朝阳",
    "normalizedSearchText": "北京朝阳朝阳北京"
  },
  {
    "code": "110106",
    "name": "丰台区",
    "detail": "北京市",
    "value": "北京市 / 丰台区",
    "rank": 3,
    "normalizedName": "丰台",
    "normalizedValue": "北京丰台",
    "normalizedSearchText": "北京丰台丰台北京"
  },
  {
    "code": "110107",
    "name": "石景山区",
    "detail": "北京市",
    "value": "北京市 / 石景山区",
    "rank": 3,
    "normalizedName": "石景山",
    "normalizedValue": "北京石景山",
    "normalizedSearchText": "北京石景山石景山北京"
  },
  {
    "code": "110108",
    "name": "海淀区",
    "detail": "北京市",
    "value": "北京市 / 海淀区",
    "rank": 3,
    "normalizedName": "海淀",
    "normalizedValue": "北京海淀",
    "normalizedSearchText": "北京海淀海淀北京"
  },
  {
    "code": "110109",
    "name": "门头沟区",
    "detail": "北京市",
    "value": "北京市 / 门头沟区",
    "rank": 3,
    "normalizedName": "门头沟",
    "normalizedValue": "北京门头沟",
    "normalizedSearchText": "北京门头沟门头沟北京"
  },
  {
    "code": "110111",
    "name": "房山区",
    "detail": "北京市",
    "value": "北京市 / 房山区",
    "rank": 3,
    "normalizedName": "房山",
    "normalizedValue": "北京房山",
    "normalizedSearchText": "北京房山房山北京"
  },
  {
    "code": "110112",
    "name": "通州区",
    "detail": "北京市",
    "value": "北京市 / 通州区",
    "rank": 3,
    "normalizedName": "通州",
    "normalizedValue": "北京通州",
    "normalizedSearchText": "北京通州通州北京"
  },
  {
    "code": "110113",
    "name": "顺义区",
    "detail": "北京市",
    "value": "北京市 / 顺义区",
    "rank": 3,
    "normalizedName": "顺义",
    "normalizedValue": "北京顺义",
    "normalizedSearchText": "北京顺义顺义北京"
  },
  {
    "code": "110114",
    "name": "昌平区",
    "detail": "北京市",
    "value": "北京市 / 昌平区",
    "rank": 3,
    "normalizedName": "昌平",
    "normalizedValue": "北京昌平",
    "normalizedSearchText": "北京昌平昌平北京"
  },
  {
    "code": "110115",
    "name": "大兴区",
    "detail": "北京市",
    "value": "北京市 / 大兴区",
    "rank": 3,
    "normalizedName": "大兴",
    "normalizedValue": "北京大兴",
    "normalizedSearchText": "北京大兴大兴北京"
  },
  {
    "code": "110116",
    "name": "怀柔区",
    "detail": "北京市",
    "value": "北京市 / 怀柔区",
    "rank": 3,
    "normalizedName": "怀柔",
    "normalizedValue": "北京怀柔",
    "normalizedSearchText": "北京怀柔怀柔北京"
  },
  {
    "code": "110117",
    "name": "平谷区",
    "detail": "北京市",
    "value": "北京市 / 平谷区",
    "rank": 3,
    "normalizedName": "平谷",
    "normalizedValue": "北京平谷",
    "normalizedSearchText": "北京平谷平谷北京"
  },
  {
    "code": "110118",
    "name": "密云区",
    "detail": "北京市",
    "value": "北京市 / 密云区",
    "rank": 3,
    "normalizedName": "密云",
    "normalizedValue": "北京密云",
    "normalizedSearchText": "北京密云密云北京"
  },
  {
    "code": "110119",
    "name": "延庆区",
    "detail": "北京市",
    "value": "北京市 / 延庆区",
    "rank": 3,
    "normalizedName": "延庆",
    "normalizedValue": "北京延庆",
    "normalizedSearchText": "北京延庆延庆北京"
  },
  {
    "code": "120000",
    "name": "天津市",
    "detail": "?????",
    "value": "天津市",
    "rank": 1,
    "normalizedName": "天津",
    "normalizedValue": "天津",
    "normalizedSearchText": "天津天津"
  },
  {
    "code": "120101",
    "name": "和平区",
    "detail": "天津市",
    "value": "天津市 / 和平区",
    "rank": 3,
    "normalizedName": "和平",
    "normalizedValue": "天津和平",
    "normalizedSearchText": "天津和平和平天津"
  },
  {
    "code": "120102",
    "name": "河东区",
    "detail": "天津市",
    "value": "天津市 / 河东区",
    "rank": 3,
    "normalizedName": "河东",
    "normalizedValue": "天津河东",
    "normalizedSearchText": "天津河东河东天津"
  },
  {
    "code": "120103",
    "name": "河西区",
    "detail": "天津市",
    "value": "天津市 / 河西区",
    "rank": 3,
    "normalizedName": "河西",
    "normalizedValue": "天津河西",
    "normalizedSearchText": "天津河西河西天津"
  },
  {
    "code": "120104",
    "name": "南开区",
    "detail": "天津市",
    "value": "天津市 / 南开区",
    "rank": 3,
    "normalizedName": "南开",
    "normalizedValue": "天津南开",
    "normalizedSearchText": "天津南开南开天津"
  },
  {
    "code": "120105",
    "name": "河北区",
    "detail": "天津市",
    "value": "天津市 / 河北区",
    "rank": 3,
    "normalizedName": "河北",
    "normalizedValue": "天津河北",
    "normalizedSearchText": "天津河北河北天津"
  },
  {
    "code": "120106",
    "name": "红桥区",
    "detail": "天津市",
    "value": "天津市 / 红桥区",
    "rank": 3,
    "normalizedName": "红桥",
    "normalizedValue": "天津红桥",
    "normalizedSearchText": "天津红桥红桥天津"
  },
  {
    "code": "120110",
    "name": "东丽区",
    "detail": "天津市",
    "value": "天津市 / 东丽区",
    "rank": 3,
    "normalizedName": "东丽",
    "normalizedValue": "天津东丽",
    "normalizedSearchText": "天津东丽东丽天津"
  },
  {
    "code": "120111",
    "name": "西青区",
    "detail": "天津市",
    "value": "天津市 / 西青区",
    "rank": 3,
    "normalizedName": "西青",
    "normalizedValue": "天津西青",
    "normalizedSearchText": "天津西青西青天津"
  },
  {
    "code": "120112",
    "name": "津南区",
    "detail": "天津市",
    "value": "天津市 / 津南区",
    "rank": 3,
    "normalizedName": "津南",
    "normalizedValue": "天津津南",
    "normalizedSearchText": "天津津南津南天津"
  },
  {
    "code": "120113",
    "name": "北辰区",
    "detail": "天津市",
    "value": "天津市 / 北辰区",
    "rank": 3,
    "normalizedName": "北辰",
    "normalizedValue": "天津北辰",
    "normalizedSearchText": "天津北辰北辰天津"
  },
  {
    "code": "120114",
    "name": "武清区",
    "detail": "天津市",
    "value": "天津市 / 武清区",
    "rank": 3,
    "normalizedName": "武清",
    "normalizedValue": "天津武清",
    "normalizedSearchText": "天津武清武清天津"
  },
  {
    "code": "120115",
    "name": "宝坻区",
    "detail": "天津市",
    "value": "天津市 / 宝坻区",
    "rank": 3,
    "normalizedName": "宝坻",
    "normalizedValue": "天津宝坻",
    "normalizedSearchText": "天津宝坻宝坻天津"
  },
  {
    "code": "120116",
    "name": "滨海新区",
    "detail": "天津市",
    "value": "天津市 / 滨海新区",
    "rank": 3,
    "normalizedName": "滨海新",
    "normalizedValue": "天津滨海新",
    "normalizedSearchText": "天津滨海新滨海新天津"
  },
  {
    "code": "120117",
    "name": "宁河区",
    "detail": "天津市",
    "value": "天津市 / 宁河区",
    "rank": 3,
    "normalizedName": "宁河",
    "normalizedValue": "天津宁河",
    "normalizedSearchText": "天津宁河宁河天津"
  },
  {
    "code": "120118",
    "name": "静海区",
    "detail": "天津市",
    "value": "天津市 / 静海区",
    "rank": 3,
    "normalizedName": "静海",
    "normalizedValue": "天津静海",
    "normalizedSearchText": "天津静海静海天津"
  },
  {
    "code": "120119",
    "name": "蓟州区",
    "detail": "天津市",
    "value": "天津市 / 蓟州区",
    "rank": 3,
    "normalizedName": "蓟州",
    "normalizedValue": "天津蓟州",
    "normalizedSearchText": "天津蓟州蓟州天津"
  },
  {
    "code": "130000",
    "name": "河北省",
    "detail": "?????",
    "value": "河北省",
    "rank": 1,
    "normalizedName": "河北",
    "normalizedValue": "河北",
    "normalizedSearchText": "河北河北"
  },
  {
    "code": "130100",
    "name": "石家庄市",
    "detail": "河北省",
    "value": "河北省 / 石家庄市",
    "rank": 2,
    "normalizedName": "石家庄",
    "normalizedValue": "河北石家庄",
    "normalizedSearchText": "河北石家庄石家庄河北"
  },
  {
    "code": "130102",
    "name": "长安区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 长安区",
    "rank": 3,
    "normalizedName": "长安",
    "normalizedValue": "河北石家庄长安",
    "normalizedSearchText": "河北石家庄长安长安河北石家庄"
  },
  {
    "code": "130104",
    "name": "桥西区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 桥西区",
    "rank": 3,
    "normalizedName": "桥西",
    "normalizedValue": "河北石家庄桥西",
    "normalizedSearchText": "河北石家庄桥西桥西河北石家庄"
  },
  {
    "code": "130105",
    "name": "新华区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 新华区",
    "rank": 3,
    "normalizedName": "新华",
    "normalizedValue": "河北石家庄新华",
    "normalizedSearchText": "河北石家庄新华新华河北石家庄"
  },
  {
    "code": "130107",
    "name": "井陉矿区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 井陉矿区",
    "rank": 3,
    "normalizedName": "井陉矿",
    "normalizedValue": "河北石家庄井陉矿",
    "normalizedSearchText": "河北石家庄井陉矿井陉矿河北石家庄"
  },
  {
    "code": "130108",
    "name": "裕华区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 裕华区",
    "rank": 3,
    "normalizedName": "裕华",
    "normalizedValue": "河北石家庄裕华",
    "normalizedSearchText": "河北石家庄裕华裕华河北石家庄"
  },
  {
    "code": "130109",
    "name": "藁城区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 藁城区",
    "rank": 3,
    "normalizedName": "藁城",
    "normalizedValue": "河北石家庄藁城",
    "normalizedSearchText": "河北石家庄藁城藁城河北石家庄"
  },
  {
    "code": "130110",
    "name": "鹿泉区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 鹿泉区",
    "rank": 3,
    "normalizedName": "鹿泉",
    "normalizedValue": "河北石家庄鹿泉",
    "normalizedSearchText": "河北石家庄鹿泉鹿泉河北石家庄"
  },
  {
    "code": "130111",
    "name": "栾城区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 栾城区",
    "rank": 3,
    "normalizedName": "栾城",
    "normalizedValue": "河北石家庄栾城",
    "normalizedSearchText": "河北石家庄栾城栾城河北石家庄"
  },
  {
    "code": "130121",
    "name": "井陉县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 井陉县",
    "rank": 3,
    "normalizedName": "井陉",
    "normalizedValue": "河北石家庄井陉",
    "normalizedSearchText": "河北石家庄井陉井陉河北石家庄"
  },
  {
    "code": "130123",
    "name": "正定县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 正定县",
    "rank": 3,
    "normalizedName": "正定",
    "normalizedValue": "河北石家庄正定",
    "normalizedSearchText": "河北石家庄正定正定河北石家庄"
  },
  {
    "code": "130125",
    "name": "行唐县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 行唐县",
    "rank": 3,
    "normalizedName": "行唐",
    "normalizedValue": "河北石家庄行唐",
    "normalizedSearchText": "河北石家庄行唐行唐河北石家庄"
  },
  {
    "code": "130126",
    "name": "灵寿县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 灵寿县",
    "rank": 3,
    "normalizedName": "灵寿",
    "normalizedValue": "河北石家庄灵寿",
    "normalizedSearchText": "河北石家庄灵寿灵寿河北石家庄"
  },
  {
    "code": "130127",
    "name": "高邑县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 高邑县",
    "rank": 3,
    "normalizedName": "高邑",
    "normalizedValue": "河北石家庄高邑",
    "normalizedSearchText": "河北石家庄高邑高邑河北石家庄"
  },
  {
    "code": "130128",
    "name": "深泽县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 深泽县",
    "rank": 3,
    "normalizedName": "深泽",
    "normalizedValue": "河北石家庄深泽",
    "normalizedSearchText": "河北石家庄深泽深泽河北石家庄"
  },
  {
    "code": "130129",
    "name": "赞皇县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 赞皇县",
    "rank": 3,
    "normalizedName": "赞皇",
    "normalizedValue": "河北石家庄赞皇",
    "normalizedSearchText": "河北石家庄赞皇赞皇河北石家庄"
  },
  {
    "code": "130130",
    "name": "无极县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 无极县",
    "rank": 3,
    "normalizedName": "无极",
    "normalizedValue": "河北石家庄无极",
    "normalizedSearchText": "河北石家庄无极无极河北石家庄"
  },
  {
    "code": "130131",
    "name": "平山县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 平山县",
    "rank": 3,
    "normalizedName": "平山",
    "normalizedValue": "河北石家庄平山",
    "normalizedSearchText": "河北石家庄平山平山河北石家庄"
  },
  {
    "code": "130132",
    "name": "元氏县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 元氏县",
    "rank": 3,
    "normalizedName": "元氏",
    "normalizedValue": "河北石家庄元氏",
    "normalizedSearchText": "河北石家庄元氏元氏河北石家庄"
  },
  {
    "code": "130133",
    "name": "赵县",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 赵县",
    "rank": 3,
    "normalizedName": "赵",
    "normalizedValue": "河北石家庄赵",
    "normalizedSearchText": "河北石家庄赵赵河北石家庄"
  },
  {
    "code": "130181",
    "name": "辛集市",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 辛集市",
    "rank": 3,
    "normalizedName": "辛集",
    "normalizedValue": "河北石家庄辛集",
    "normalizedSearchText": "河北石家庄辛集辛集河北石家庄"
  },
  {
    "code": "130183",
    "name": "晋州市",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 晋州市",
    "rank": 3,
    "normalizedName": "晋州",
    "normalizedValue": "河北石家庄晋州",
    "normalizedSearchText": "河北石家庄晋州晋州河北石家庄"
  },
  {
    "code": "130184",
    "name": "新乐市",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 新乐市",
    "rank": 3,
    "normalizedName": "新乐",
    "normalizedValue": "河北石家庄新乐",
    "normalizedSearchText": "河北石家庄新乐新乐河北石家庄"
  },
  {
    "code": "130101",
    "name": "市辖区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北石家庄辖",
    "normalizedSearchText": "河北石家庄辖辖河北石家庄"
  },
  {
    "code": "130171",
    "name": "石家庄高新技术产业开发区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 石家庄高新技术产业开发区",
    "rank": 3,
    "normalizedName": "石家庄高新技术产业开发",
    "normalizedValue": "河北石家庄石家庄高新技术产业开发",
    "normalizedSearchText": "河北石家庄石家庄高新技术产业开发石家庄高新技术产业开发河北石家庄"
  },
  {
    "code": "130172",
    "name": "石家庄循环化工园区",
    "detail": "河北省 / 石家庄市",
    "value": "河北省 / 石家庄市 / 石家庄循环化工园区",
    "rank": 3,
    "normalizedName": "石家庄循环化工园",
    "normalizedValue": "河北石家庄石家庄循环化工园",
    "normalizedSearchText": "河北石家庄石家庄循环化工园石家庄循环化工园河北石家庄"
  },
  {
    "code": "130200",
    "name": "唐山市",
    "detail": "河北省",
    "value": "河北省 / 唐山市",
    "rank": 2,
    "normalizedName": "唐山",
    "normalizedValue": "河北唐山",
    "normalizedSearchText": "河北唐山唐山河北"
  },
  {
    "code": "130202",
    "name": "路南区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 路南区",
    "rank": 3,
    "normalizedName": "路南",
    "normalizedValue": "河北唐山路南",
    "normalizedSearchText": "河北唐山路南路南河北唐山"
  },
  {
    "code": "130203",
    "name": "路北区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 路北区",
    "rank": 3,
    "normalizedName": "路北",
    "normalizedValue": "河北唐山路北",
    "normalizedSearchText": "河北唐山路北路北河北唐山"
  },
  {
    "code": "130204",
    "name": "古冶区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 古冶区",
    "rank": 3,
    "normalizedName": "古冶",
    "normalizedValue": "河北唐山古冶",
    "normalizedSearchText": "河北唐山古冶古冶河北唐山"
  },
  {
    "code": "130205",
    "name": "开平区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 开平区",
    "rank": 3,
    "normalizedName": "开平",
    "normalizedValue": "河北唐山开平",
    "normalizedSearchText": "河北唐山开平开平河北唐山"
  },
  {
    "code": "130207",
    "name": "丰南区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 丰南区",
    "rank": 3,
    "normalizedName": "丰南",
    "normalizedValue": "河北唐山丰南",
    "normalizedSearchText": "河北唐山丰南丰南河北唐山"
  },
  {
    "code": "130208",
    "name": "丰润区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 丰润区",
    "rank": 3,
    "normalizedName": "丰润",
    "normalizedValue": "河北唐山丰润",
    "normalizedSearchText": "河北唐山丰润丰润河北唐山"
  },
  {
    "code": "130209",
    "name": "曹妃甸区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 曹妃甸区",
    "rank": 3,
    "normalizedName": "曹妃甸",
    "normalizedValue": "河北唐山曹妃甸",
    "normalizedSearchText": "河北唐山曹妃甸曹妃甸河北唐山"
  },
  {
    "code": "130224",
    "name": "滦南县",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 滦南县",
    "rank": 3,
    "normalizedName": "滦南",
    "normalizedValue": "河北唐山滦南",
    "normalizedSearchText": "河北唐山滦南滦南河北唐山"
  },
  {
    "code": "130225",
    "name": "乐亭县",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 乐亭县",
    "rank": 3,
    "normalizedName": "乐亭",
    "normalizedValue": "河北唐山乐亭",
    "normalizedSearchText": "河北唐山乐亭乐亭河北唐山"
  },
  {
    "code": "130227",
    "name": "迁西县",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 迁西县",
    "rank": 3,
    "normalizedName": "迁西",
    "normalizedValue": "河北唐山迁西",
    "normalizedSearchText": "河北唐山迁西迁西河北唐山"
  },
  {
    "code": "130229",
    "name": "玉田县",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 玉田县",
    "rank": 3,
    "normalizedName": "玉田",
    "normalizedValue": "河北唐山玉田",
    "normalizedSearchText": "河北唐山玉田玉田河北唐山"
  },
  {
    "code": "130281",
    "name": "遵化市",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 遵化市",
    "rank": 3,
    "normalizedName": "遵化",
    "normalizedValue": "河北唐山遵化",
    "normalizedSearchText": "河北唐山遵化遵化河北唐山"
  },
  {
    "code": "130283",
    "name": "迁安市",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 迁安市",
    "rank": 3,
    "normalizedName": "迁安",
    "normalizedValue": "河北唐山迁安",
    "normalizedSearchText": "河北唐山迁安迁安河北唐山"
  },
  {
    "code": "130284",
    "name": "滦州市",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 滦州市",
    "rank": 3,
    "normalizedName": "滦州",
    "normalizedValue": "河北唐山滦州",
    "normalizedSearchText": "河北唐山滦州滦州河北唐山"
  },
  {
    "code": "130201",
    "name": "市辖区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北唐山辖",
    "normalizedSearchText": "河北唐山辖辖河北唐山"
  },
  {
    "code": "130271",
    "name": "河北唐山芦台经济开发区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 河北唐山芦台经济开发区",
    "rank": 3,
    "normalizedName": "河北唐山芦台经济开发",
    "normalizedValue": "河北唐山河北唐山芦台经济开发",
    "normalizedSearchText": "河北唐山河北唐山芦台经济开发河北唐山芦台经济开发河北唐山"
  },
  {
    "code": "130272",
    "name": "唐山市汉沽管理区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 唐山市汉沽管理区",
    "rank": 3,
    "normalizedName": "唐山汉沽管理",
    "normalizedValue": "河北唐山唐山汉沽管理",
    "normalizedSearchText": "河北唐山唐山汉沽管理唐山汉沽管理河北唐山"
  },
  {
    "code": "130273",
    "name": "唐山高新技术产业开发区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 唐山高新技术产业开发区",
    "rank": 3,
    "normalizedName": "唐山高新技术产业开发",
    "normalizedValue": "河北唐山唐山高新技术产业开发",
    "normalizedSearchText": "河北唐山唐山高新技术产业开发唐山高新技术产业开发河北唐山"
  },
  {
    "code": "130274",
    "name": "河北唐山海港经济开发区",
    "detail": "河北省 / 唐山市",
    "value": "河北省 / 唐山市 / 河北唐山海港经济开发区",
    "rank": 3,
    "normalizedName": "河北唐山海港经济开发",
    "normalizedValue": "河北唐山河北唐山海港经济开发",
    "normalizedSearchText": "河北唐山河北唐山海港经济开发河北唐山海港经济开发河北唐山"
  },
  {
    "code": "130300",
    "name": "秦皇岛市",
    "detail": "河北省",
    "value": "河北省 / 秦皇岛市",
    "rank": 2,
    "normalizedName": "秦皇岛",
    "normalizedValue": "河北秦皇岛",
    "normalizedSearchText": "河北秦皇岛秦皇岛河北"
  },
  {
    "code": "130302",
    "name": "海港区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 海港区",
    "rank": 3,
    "normalizedName": "海港",
    "normalizedValue": "河北秦皇岛海港",
    "normalizedSearchText": "河北秦皇岛海港海港河北秦皇岛"
  },
  {
    "code": "130303",
    "name": "山海关区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 山海关区",
    "rank": 3,
    "normalizedName": "山海关",
    "normalizedValue": "河北秦皇岛山海关",
    "normalizedSearchText": "河北秦皇岛山海关山海关河北秦皇岛"
  },
  {
    "code": "130304",
    "name": "北戴河区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 北戴河区",
    "rank": 3,
    "normalizedName": "北戴河",
    "normalizedValue": "河北秦皇岛北戴河",
    "normalizedSearchText": "河北秦皇岛北戴河北戴河河北秦皇岛"
  },
  {
    "code": "130306",
    "name": "抚宁区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 抚宁区",
    "rank": 3,
    "normalizedName": "抚宁",
    "normalizedValue": "河北秦皇岛抚宁",
    "normalizedSearchText": "河北秦皇岛抚宁抚宁河北秦皇岛"
  },
  {
    "code": "130321",
    "name": "青龙满族自治县",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 青龙满族自治县",
    "rank": 3,
    "normalizedName": "青龙满族自治",
    "normalizedValue": "河北秦皇岛青龙满族自治",
    "normalizedSearchText": "河北秦皇岛青龙满族自治青龙满族自治河北秦皇岛"
  },
  {
    "code": "130322",
    "name": "昌黎县",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 昌黎县",
    "rank": 3,
    "normalizedName": "昌黎",
    "normalizedValue": "河北秦皇岛昌黎",
    "normalizedSearchText": "河北秦皇岛昌黎昌黎河北秦皇岛"
  },
  {
    "code": "130324",
    "name": "卢龙县",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 卢龙县",
    "rank": 3,
    "normalizedName": "卢龙",
    "normalizedValue": "河北秦皇岛卢龙",
    "normalizedSearchText": "河北秦皇岛卢龙卢龙河北秦皇岛"
  },
  {
    "code": "130301",
    "name": "市辖区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北秦皇岛辖",
    "normalizedSearchText": "河北秦皇岛辖辖河北秦皇岛"
  },
  {
    "code": "130371",
    "name": "秦皇岛市经济技术开发区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 秦皇岛市经济技术开发区",
    "rank": 3,
    "normalizedName": "秦皇岛经济技术开发",
    "normalizedValue": "河北秦皇岛秦皇岛经济技术开发",
    "normalizedSearchText": "河北秦皇岛秦皇岛经济技术开发秦皇岛经济技术开发河北秦皇岛"
  },
  {
    "code": "130372",
    "name": "北戴河新区",
    "detail": "河北省 / 秦皇岛市",
    "value": "河北省 / 秦皇岛市 / 北戴河新区",
    "rank": 3,
    "normalizedName": "北戴河新",
    "normalizedValue": "河北秦皇岛北戴河新",
    "normalizedSearchText": "河北秦皇岛北戴河新北戴河新河北秦皇岛"
  },
  {
    "code": "130400",
    "name": "邯郸市",
    "detail": "河北省",
    "value": "河北省 / 邯郸市",
    "rank": 2,
    "normalizedName": "邯郸",
    "normalizedValue": "河北邯郸",
    "normalizedSearchText": "河北邯郸邯郸河北"
  },
  {
    "code": "130402",
    "name": "邯山区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 邯山区",
    "rank": 3,
    "normalizedName": "邯山",
    "normalizedValue": "河北邯郸邯山",
    "normalizedSearchText": "河北邯郸邯山邯山河北邯郸"
  },
  {
    "code": "130403",
    "name": "丛台区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 丛台区",
    "rank": 3,
    "normalizedName": "丛台",
    "normalizedValue": "河北邯郸丛台",
    "normalizedSearchText": "河北邯郸丛台丛台河北邯郸"
  },
  {
    "code": "130404",
    "name": "复兴区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 复兴区",
    "rank": 3,
    "normalizedName": "复兴",
    "normalizedValue": "河北邯郸复兴",
    "normalizedSearchText": "河北邯郸复兴复兴河北邯郸"
  },
  {
    "code": "130406",
    "name": "峰峰矿区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 峰峰矿区",
    "rank": 3,
    "normalizedName": "峰峰矿",
    "normalizedValue": "河北邯郸峰峰矿",
    "normalizedSearchText": "河北邯郸峰峰矿峰峰矿河北邯郸"
  },
  {
    "code": "130407",
    "name": "肥乡区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 肥乡区",
    "rank": 3,
    "normalizedName": "肥",
    "normalizedValue": "河北邯郸肥",
    "normalizedSearchText": "河北邯郸肥肥河北邯郸"
  },
  {
    "code": "130408",
    "name": "永年区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 永年区",
    "rank": 3,
    "normalizedName": "永年",
    "normalizedValue": "河北邯郸永年",
    "normalizedSearchText": "河北邯郸永年永年河北邯郸"
  },
  {
    "code": "130423",
    "name": "临漳县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 临漳县",
    "rank": 3,
    "normalizedName": "临漳",
    "normalizedValue": "河北邯郸临漳",
    "normalizedSearchText": "河北邯郸临漳临漳河北邯郸"
  },
  {
    "code": "130424",
    "name": "成安县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 成安县",
    "rank": 3,
    "normalizedName": "成安",
    "normalizedValue": "河北邯郸成安",
    "normalizedSearchText": "河北邯郸成安成安河北邯郸"
  },
  {
    "code": "130425",
    "name": "大名县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 大名县",
    "rank": 3,
    "normalizedName": "大名",
    "normalizedValue": "河北邯郸大名",
    "normalizedSearchText": "河北邯郸大名大名河北邯郸"
  },
  {
    "code": "130426",
    "name": "涉县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 涉县",
    "rank": 3,
    "normalizedName": "涉",
    "normalizedValue": "河北邯郸涉",
    "normalizedSearchText": "河北邯郸涉涉河北邯郸"
  },
  {
    "code": "130427",
    "name": "磁县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 磁县",
    "rank": 3,
    "normalizedName": "磁",
    "normalizedValue": "河北邯郸磁",
    "normalizedSearchText": "河北邯郸磁磁河北邯郸"
  },
  {
    "code": "130430",
    "name": "邱县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 邱县",
    "rank": 3,
    "normalizedName": "邱",
    "normalizedValue": "河北邯郸邱",
    "normalizedSearchText": "河北邯郸邱邱河北邯郸"
  },
  {
    "code": "130431",
    "name": "鸡泽县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 鸡泽县",
    "rank": 3,
    "normalizedName": "鸡泽",
    "normalizedValue": "河北邯郸鸡泽",
    "normalizedSearchText": "河北邯郸鸡泽鸡泽河北邯郸"
  },
  {
    "code": "130432",
    "name": "广平县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 广平县",
    "rank": 3,
    "normalizedName": "广平",
    "normalizedValue": "河北邯郸广平",
    "normalizedSearchText": "河北邯郸广平广平河北邯郸"
  },
  {
    "code": "130433",
    "name": "馆陶县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 馆陶县",
    "rank": 3,
    "normalizedName": "馆陶",
    "normalizedValue": "河北邯郸馆陶",
    "normalizedSearchText": "河北邯郸馆陶馆陶河北邯郸"
  },
  {
    "code": "130434",
    "name": "魏县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 魏县",
    "rank": 3,
    "normalizedName": "魏",
    "normalizedValue": "河北邯郸魏",
    "normalizedSearchText": "河北邯郸魏魏河北邯郸"
  },
  {
    "code": "130435",
    "name": "曲周县",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 曲周县",
    "rank": 3,
    "normalizedName": "曲周",
    "normalizedValue": "河北邯郸曲周",
    "normalizedSearchText": "河北邯郸曲周曲周河北邯郸"
  },
  {
    "code": "130481",
    "name": "武安市",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 武安市",
    "rank": 3,
    "normalizedName": "武安",
    "normalizedValue": "河北邯郸武安",
    "normalizedSearchText": "河北邯郸武安武安河北邯郸"
  },
  {
    "code": "130401",
    "name": "市辖区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北邯郸辖",
    "normalizedSearchText": "河北邯郸辖辖河北邯郸"
  },
  {
    "code": "130471",
    "name": "邯郸经济技术开发区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 邯郸经济技术开发区",
    "rank": 3,
    "normalizedName": "邯郸经济技术开发",
    "normalizedValue": "河北邯郸邯郸经济技术开发",
    "normalizedSearchText": "河北邯郸邯郸经济技术开发邯郸经济技术开发河北邯郸"
  },
  {
    "code": "130473",
    "name": "邯郸冀南新区",
    "detail": "河北省 / 邯郸市",
    "value": "河北省 / 邯郸市 / 邯郸冀南新区",
    "rank": 3,
    "normalizedName": "邯郸冀南新",
    "normalizedValue": "河北邯郸邯郸冀南新",
    "normalizedSearchText": "河北邯郸邯郸冀南新邯郸冀南新河北邯郸"
  },
  {
    "code": "130500",
    "name": "邢台市",
    "detail": "河北省",
    "value": "河北省 / 邢台市",
    "rank": 2,
    "normalizedName": "邢台",
    "normalizedValue": "河北邢台",
    "normalizedSearchText": "河北邢台邢台河北"
  },
  {
    "code": "130502",
    "name": "襄都区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 襄都区",
    "rank": 3,
    "normalizedName": "襄都",
    "normalizedValue": "河北邢台襄都",
    "normalizedSearchText": "河北邢台襄都襄都河北邢台"
  },
  {
    "code": "130503",
    "name": "信都区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 信都区",
    "rank": 3,
    "normalizedName": "信都",
    "normalizedValue": "河北邢台信都",
    "normalizedSearchText": "河北邢台信都信都河北邢台"
  },
  {
    "code": "130505",
    "name": "任泽区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 任泽区",
    "rank": 3,
    "normalizedName": "任泽",
    "normalizedValue": "河北邢台任泽",
    "normalizedSearchText": "河北邢台任泽任泽河北邢台"
  },
  {
    "code": "130506",
    "name": "南和区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 南和区",
    "rank": 3,
    "normalizedName": "南和",
    "normalizedValue": "河北邢台南和",
    "normalizedSearchText": "河北邢台南和南和河北邢台"
  },
  {
    "code": "130522",
    "name": "临城县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 临城县",
    "rank": 3,
    "normalizedName": "临城",
    "normalizedValue": "河北邢台临城",
    "normalizedSearchText": "河北邢台临城临城河北邢台"
  },
  {
    "code": "130523",
    "name": "内丘县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 内丘县",
    "rank": 3,
    "normalizedName": "内丘",
    "normalizedValue": "河北邢台内丘",
    "normalizedSearchText": "河北邢台内丘内丘河北邢台"
  },
  {
    "code": "130524",
    "name": "柏乡县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 柏乡县",
    "rank": 3,
    "normalizedName": "柏",
    "normalizedValue": "河北邢台柏",
    "normalizedSearchText": "河北邢台柏柏河北邢台"
  },
  {
    "code": "130525",
    "name": "隆尧县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 隆尧县",
    "rank": 3,
    "normalizedName": "隆尧",
    "normalizedValue": "河北邢台隆尧",
    "normalizedSearchText": "河北邢台隆尧隆尧河北邢台"
  },
  {
    "code": "130528",
    "name": "宁晋县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 宁晋县",
    "rank": 3,
    "normalizedName": "宁晋",
    "normalizedValue": "河北邢台宁晋",
    "normalizedSearchText": "河北邢台宁晋宁晋河北邢台"
  },
  {
    "code": "130529",
    "name": "巨鹿县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 巨鹿县",
    "rank": 3,
    "normalizedName": "巨鹿",
    "normalizedValue": "河北邢台巨鹿",
    "normalizedSearchText": "河北邢台巨鹿巨鹿河北邢台"
  },
  {
    "code": "130530",
    "name": "新河县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 新河县",
    "rank": 3,
    "normalizedName": "新河",
    "normalizedValue": "河北邢台新河",
    "normalizedSearchText": "河北邢台新河新河河北邢台"
  },
  {
    "code": "130531",
    "name": "广宗县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 广宗县",
    "rank": 3,
    "normalizedName": "广宗",
    "normalizedValue": "河北邢台广宗",
    "normalizedSearchText": "河北邢台广宗广宗河北邢台"
  },
  {
    "code": "130532",
    "name": "平乡县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 平乡县",
    "rank": 3,
    "normalizedName": "平",
    "normalizedValue": "河北邢台平",
    "normalizedSearchText": "河北邢台平平河北邢台"
  },
  {
    "code": "130533",
    "name": "威县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 威县",
    "rank": 3,
    "normalizedName": "威",
    "normalizedValue": "河北邢台威",
    "normalizedSearchText": "河北邢台威威河北邢台"
  },
  {
    "code": "130534",
    "name": "清河县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 清河县",
    "rank": 3,
    "normalizedName": "清河",
    "normalizedValue": "河北邢台清河",
    "normalizedSearchText": "河北邢台清河清河河北邢台"
  },
  {
    "code": "130535",
    "name": "临西县",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 临西县",
    "rank": 3,
    "normalizedName": "临西",
    "normalizedValue": "河北邢台临西",
    "normalizedSearchText": "河北邢台临西临西河北邢台"
  },
  {
    "code": "130581",
    "name": "南宫市",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 南宫市",
    "rank": 3,
    "normalizedName": "南宫",
    "normalizedValue": "河北邢台南宫",
    "normalizedSearchText": "河北邢台南宫南宫河北邢台"
  },
  {
    "code": "130582",
    "name": "沙河市",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 沙河市",
    "rank": 3,
    "normalizedName": "沙河",
    "normalizedValue": "河北邢台沙河",
    "normalizedSearchText": "河北邢台沙河沙河河北邢台"
  },
  {
    "code": "130501",
    "name": "市辖区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北邢台辖",
    "normalizedSearchText": "河北邢台辖辖河北邢台"
  },
  {
    "code": "130571",
    "name": "河北邢台经济开发区",
    "detail": "河北省 / 邢台市",
    "value": "河北省 / 邢台市 / 河北邢台经济开发区",
    "rank": 3,
    "normalizedName": "河北邢台经济开发",
    "normalizedValue": "河北邢台河北邢台经济开发",
    "normalizedSearchText": "河北邢台河北邢台经济开发河北邢台经济开发河北邢台"
  },
  {
    "code": "130600",
    "name": "保定市",
    "detail": "河北省",
    "value": "河北省 / 保定市",
    "rank": 2,
    "normalizedName": "保定",
    "normalizedValue": "河北保定",
    "normalizedSearchText": "河北保定保定河北"
  },
  {
    "code": "130602",
    "name": "竞秀区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 竞秀区",
    "rank": 3,
    "normalizedName": "竞秀",
    "normalizedValue": "河北保定竞秀",
    "normalizedSearchText": "河北保定竞秀竞秀河北保定"
  },
  {
    "code": "130606",
    "name": "莲池区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 莲池区",
    "rank": 3,
    "normalizedName": "莲池",
    "normalizedValue": "河北保定莲池",
    "normalizedSearchText": "河北保定莲池莲池河北保定"
  },
  {
    "code": "130607",
    "name": "满城区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 满城区",
    "rank": 3,
    "normalizedName": "满城",
    "normalizedValue": "河北保定满城",
    "normalizedSearchText": "河北保定满城满城河北保定"
  },
  {
    "code": "130608",
    "name": "清苑区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 清苑区",
    "rank": 3,
    "normalizedName": "清苑",
    "normalizedValue": "河北保定清苑",
    "normalizedSearchText": "河北保定清苑清苑河北保定"
  },
  {
    "code": "130609",
    "name": "徐水区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 徐水区",
    "rank": 3,
    "normalizedName": "徐水",
    "normalizedValue": "河北保定徐水",
    "normalizedSearchText": "河北保定徐水徐水河北保定"
  },
  {
    "code": "130623",
    "name": "涞水县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 涞水县",
    "rank": 3,
    "normalizedName": "涞水",
    "normalizedValue": "河北保定涞水",
    "normalizedSearchText": "河北保定涞水涞水河北保定"
  },
  {
    "code": "130624",
    "name": "阜平县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 阜平县",
    "rank": 3,
    "normalizedName": "阜平",
    "normalizedValue": "河北保定阜平",
    "normalizedSearchText": "河北保定阜平阜平河北保定"
  },
  {
    "code": "130626",
    "name": "定兴县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 定兴县",
    "rank": 3,
    "normalizedName": "定兴",
    "normalizedValue": "河北保定定兴",
    "normalizedSearchText": "河北保定定兴定兴河北保定"
  },
  {
    "code": "130627",
    "name": "唐县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 唐县",
    "rank": 3,
    "normalizedName": "唐",
    "normalizedValue": "河北保定唐",
    "normalizedSearchText": "河北保定唐唐河北保定"
  },
  {
    "code": "130628",
    "name": "高阳县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 高阳县",
    "rank": 3,
    "normalizedName": "高阳",
    "normalizedValue": "河北保定高阳",
    "normalizedSearchText": "河北保定高阳高阳河北保定"
  },
  {
    "code": "130629",
    "name": "容城县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 容城县",
    "rank": 3,
    "normalizedName": "容城",
    "normalizedValue": "河北保定容城",
    "normalizedSearchText": "河北保定容城容城河北保定"
  },
  {
    "code": "130630",
    "name": "涞源县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 涞源县",
    "rank": 3,
    "normalizedName": "涞源",
    "normalizedValue": "河北保定涞源",
    "normalizedSearchText": "河北保定涞源涞源河北保定"
  },
  {
    "code": "130631",
    "name": "望都县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 望都县",
    "rank": 3,
    "normalizedName": "望都",
    "normalizedValue": "河北保定望都",
    "normalizedSearchText": "河北保定望都望都河北保定"
  },
  {
    "code": "130632",
    "name": "安新县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 安新县",
    "rank": 3,
    "normalizedName": "安新",
    "normalizedValue": "河北保定安新",
    "normalizedSearchText": "河北保定安新安新河北保定"
  },
  {
    "code": "130633",
    "name": "易县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 易县",
    "rank": 3,
    "normalizedName": "易",
    "normalizedValue": "河北保定易",
    "normalizedSearchText": "河北保定易易河北保定"
  },
  {
    "code": "130634",
    "name": "曲阳县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 曲阳县",
    "rank": 3,
    "normalizedName": "曲阳",
    "normalizedValue": "河北保定曲阳",
    "normalizedSearchText": "河北保定曲阳曲阳河北保定"
  },
  {
    "code": "130635",
    "name": "蠡县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 蠡县",
    "rank": 3,
    "normalizedName": "蠡",
    "normalizedValue": "河北保定蠡",
    "normalizedSearchText": "河北保定蠡蠡河北保定"
  },
  {
    "code": "130636",
    "name": "顺平县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 顺平县",
    "rank": 3,
    "normalizedName": "顺平",
    "normalizedValue": "河北保定顺平",
    "normalizedSearchText": "河北保定顺平顺平河北保定"
  },
  {
    "code": "130637",
    "name": "博野县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 博野县",
    "rank": 3,
    "normalizedName": "博野",
    "normalizedValue": "河北保定博野",
    "normalizedSearchText": "河北保定博野博野河北保定"
  },
  {
    "code": "130638",
    "name": "雄县",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 雄县",
    "rank": 3,
    "normalizedName": "雄",
    "normalizedValue": "河北保定雄",
    "normalizedSearchText": "河北保定雄雄河北保定"
  },
  {
    "code": "130681",
    "name": "涿州市",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 涿州市",
    "rank": 3,
    "normalizedName": "涿州",
    "normalizedValue": "河北保定涿州",
    "normalizedSearchText": "河北保定涿州涿州河北保定"
  },
  {
    "code": "130682",
    "name": "定州市",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 定州市",
    "rank": 3,
    "normalizedName": "定州",
    "normalizedValue": "河北保定定州",
    "normalizedSearchText": "河北保定定州定州河北保定"
  },
  {
    "code": "130683",
    "name": "安国市",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 安国市",
    "rank": 3,
    "normalizedName": "安国",
    "normalizedValue": "河北保定安国",
    "normalizedSearchText": "河北保定安国安国河北保定"
  },
  {
    "code": "130684",
    "name": "高碑店市",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 高碑店市",
    "rank": 3,
    "normalizedName": "高碑店",
    "normalizedValue": "河北保定高碑店",
    "normalizedSearchText": "河北保定高碑店高碑店河北保定"
  },
  {
    "code": "130601",
    "name": "市辖区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北保定辖",
    "normalizedSearchText": "河北保定辖辖河北保定"
  },
  {
    "code": "130671",
    "name": "保定高新技术产业开发区",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 保定高新技术产业开发区",
    "rank": 3,
    "normalizedName": "保定高新技术产业开发",
    "normalizedValue": "河北保定保定高新技术产业开发",
    "normalizedSearchText": "河北保定保定高新技术产业开发保定高新技术产业开发河北保定"
  },
  {
    "code": "130672",
    "name": "保定白沟新城",
    "detail": "河北省 / 保定市",
    "value": "河北省 / 保定市 / 保定白沟新城",
    "rank": 3,
    "normalizedName": "保定白沟新城",
    "normalizedValue": "河北保定保定白沟新城",
    "normalizedSearchText": "河北保定保定白沟新城保定白沟新城河北保定"
  },
  {
    "code": "130700",
    "name": "张家口市",
    "detail": "河北省",
    "value": "河北省 / 张家口市",
    "rank": 2,
    "normalizedName": "张家口",
    "normalizedValue": "河北张家口",
    "normalizedSearchText": "河北张家口张家口河北"
  },
  {
    "code": "130702",
    "name": "桥东区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 桥东区",
    "rank": 3,
    "normalizedName": "桥东",
    "normalizedValue": "河北张家口桥东",
    "normalizedSearchText": "河北张家口桥东桥东河北张家口"
  },
  {
    "code": "130703",
    "name": "桥西区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 桥西区",
    "rank": 3,
    "normalizedName": "桥西",
    "normalizedValue": "河北张家口桥西",
    "normalizedSearchText": "河北张家口桥西桥西河北张家口"
  },
  {
    "code": "130705",
    "name": "宣化区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 宣化区",
    "rank": 3,
    "normalizedName": "宣化",
    "normalizedValue": "河北张家口宣化",
    "normalizedSearchText": "河北张家口宣化宣化河北张家口"
  },
  {
    "code": "130706",
    "name": "下花园区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 下花园区",
    "rank": 3,
    "normalizedName": "下花园",
    "normalizedValue": "河北张家口下花园",
    "normalizedSearchText": "河北张家口下花园下花园河北张家口"
  },
  {
    "code": "130708",
    "name": "万全区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 万全区",
    "rank": 3,
    "normalizedName": "万全",
    "normalizedValue": "河北张家口万全",
    "normalizedSearchText": "河北张家口万全万全河北张家口"
  },
  {
    "code": "130709",
    "name": "崇礼区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 崇礼区",
    "rank": 3,
    "normalizedName": "崇礼",
    "normalizedValue": "河北张家口崇礼",
    "normalizedSearchText": "河北张家口崇礼崇礼河北张家口"
  },
  {
    "code": "130722",
    "name": "张北县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 张北县",
    "rank": 3,
    "normalizedName": "张北",
    "normalizedValue": "河北张家口张北",
    "normalizedSearchText": "河北张家口张北张北河北张家口"
  },
  {
    "code": "130723",
    "name": "康保县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 康保县",
    "rank": 3,
    "normalizedName": "康保",
    "normalizedValue": "河北张家口康保",
    "normalizedSearchText": "河北张家口康保康保河北张家口"
  },
  {
    "code": "130724",
    "name": "沽源县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 沽源县",
    "rank": 3,
    "normalizedName": "沽源",
    "normalizedValue": "河北张家口沽源",
    "normalizedSearchText": "河北张家口沽源沽源河北张家口"
  },
  {
    "code": "130725",
    "name": "尚义县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 尚义县",
    "rank": 3,
    "normalizedName": "尚义",
    "normalizedValue": "河北张家口尚义",
    "normalizedSearchText": "河北张家口尚义尚义河北张家口"
  },
  {
    "code": "130726",
    "name": "蔚县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 蔚县",
    "rank": 3,
    "normalizedName": "蔚",
    "normalizedValue": "河北张家口蔚",
    "normalizedSearchText": "河北张家口蔚蔚河北张家口"
  },
  {
    "code": "130727",
    "name": "阳原县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 阳原县",
    "rank": 3,
    "normalizedName": "阳原",
    "normalizedValue": "河北张家口阳原",
    "normalizedSearchText": "河北张家口阳原阳原河北张家口"
  },
  {
    "code": "130728",
    "name": "怀安县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 怀安县",
    "rank": 3,
    "normalizedName": "怀安",
    "normalizedValue": "河北张家口怀安",
    "normalizedSearchText": "河北张家口怀安怀安河北张家口"
  },
  {
    "code": "130730",
    "name": "怀来县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 怀来县",
    "rank": 3,
    "normalizedName": "怀来",
    "normalizedValue": "河北张家口怀来",
    "normalizedSearchText": "河北张家口怀来怀来河北张家口"
  },
  {
    "code": "130731",
    "name": "涿鹿县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 涿鹿县",
    "rank": 3,
    "normalizedName": "涿鹿",
    "normalizedValue": "河北张家口涿鹿",
    "normalizedSearchText": "河北张家口涿鹿涿鹿河北张家口"
  },
  {
    "code": "130732",
    "name": "赤城县",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 赤城县",
    "rank": 3,
    "normalizedName": "赤城",
    "normalizedValue": "河北张家口赤城",
    "normalizedSearchText": "河北张家口赤城赤城河北张家口"
  },
  {
    "code": "130701",
    "name": "市辖区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北张家口辖",
    "normalizedSearchText": "河北张家口辖辖河北张家口"
  },
  {
    "code": "130771",
    "name": "张家口经济开发区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 张家口经济开发区",
    "rank": 3,
    "normalizedName": "张家口经济开发",
    "normalizedValue": "河北张家口张家口经济开发",
    "normalizedSearchText": "河北张家口张家口经济开发张家口经济开发河北张家口"
  },
  {
    "code": "130772",
    "name": "张家口市察北管理区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 张家口市察北管理区",
    "rank": 3,
    "normalizedName": "张家口察北管理",
    "normalizedValue": "河北张家口张家口察北管理",
    "normalizedSearchText": "河北张家口张家口察北管理张家口察北管理河北张家口"
  },
  {
    "code": "130773",
    "name": "张家口市塞北管理区",
    "detail": "河北省 / 张家口市",
    "value": "河北省 / 张家口市 / 张家口市塞北管理区",
    "rank": 3,
    "normalizedName": "张家口塞北管理",
    "normalizedValue": "河北张家口张家口塞北管理",
    "normalizedSearchText": "河北张家口张家口塞北管理张家口塞北管理河北张家口"
  },
  {
    "code": "130800",
    "name": "承德市",
    "detail": "河北省",
    "value": "河北省 / 承德市",
    "rank": 2,
    "normalizedName": "承德",
    "normalizedValue": "河北承德",
    "normalizedSearchText": "河北承德承德河北"
  },
  {
    "code": "130802",
    "name": "双桥区",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 双桥区",
    "rank": 3,
    "normalizedName": "双桥",
    "normalizedValue": "河北承德双桥",
    "normalizedSearchText": "河北承德双桥双桥河北承德"
  },
  {
    "code": "130803",
    "name": "双滦区",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 双滦区",
    "rank": 3,
    "normalizedName": "双滦",
    "normalizedValue": "河北承德双滦",
    "normalizedSearchText": "河北承德双滦双滦河北承德"
  },
  {
    "code": "130804",
    "name": "鹰手营子矿区",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 鹰手营子矿区",
    "rank": 3,
    "normalizedName": "鹰手营子矿",
    "normalizedValue": "河北承德鹰手营子矿",
    "normalizedSearchText": "河北承德鹰手营子矿鹰手营子矿河北承德"
  },
  {
    "code": "130821",
    "name": "承德县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 承德县",
    "rank": 3,
    "normalizedName": "承德",
    "normalizedValue": "河北承德承德",
    "normalizedSearchText": "河北承德承德承德河北承德"
  },
  {
    "code": "130822",
    "name": "兴隆县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 兴隆县",
    "rank": 3,
    "normalizedName": "兴隆",
    "normalizedValue": "河北承德兴隆",
    "normalizedSearchText": "河北承德兴隆兴隆河北承德"
  },
  {
    "code": "130824",
    "name": "滦平县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 滦平县",
    "rank": 3,
    "normalizedName": "滦平",
    "normalizedValue": "河北承德滦平",
    "normalizedSearchText": "河北承德滦平滦平河北承德"
  },
  {
    "code": "130825",
    "name": "隆化县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 隆化县",
    "rank": 3,
    "normalizedName": "隆化",
    "normalizedValue": "河北承德隆化",
    "normalizedSearchText": "河北承德隆化隆化河北承德"
  },
  {
    "code": "130826",
    "name": "丰宁满族自治县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 丰宁满族自治县",
    "rank": 3,
    "normalizedName": "丰宁满族自治",
    "normalizedValue": "河北承德丰宁满族自治",
    "normalizedSearchText": "河北承德丰宁满族自治丰宁满族自治河北承德"
  },
  {
    "code": "130827",
    "name": "宽城满族自治县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 宽城满族自治县",
    "rank": 3,
    "normalizedName": "宽城满族自治",
    "normalizedValue": "河北承德宽城满族自治",
    "normalizedSearchText": "河北承德宽城满族自治宽城满族自治河北承德"
  },
  {
    "code": "130828",
    "name": "围场满族蒙古族自治县",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 围场满族蒙古族自治县",
    "rank": 3,
    "normalizedName": "围场满族蒙古族自治",
    "normalizedValue": "河北承德围场满族蒙古族自治",
    "normalizedSearchText": "河北承德围场满族蒙古族自治围场满族蒙古族自治河北承德"
  },
  {
    "code": "130881",
    "name": "平泉市",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 平泉市",
    "rank": 3,
    "normalizedName": "平泉",
    "normalizedValue": "河北承德平泉",
    "normalizedSearchText": "河北承德平泉平泉河北承德"
  },
  {
    "code": "130801",
    "name": "市辖区",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北承德辖",
    "normalizedSearchText": "河北承德辖辖河北承德"
  },
  {
    "code": "130871",
    "name": "承德高新技术产业开发区",
    "detail": "河北省 / 承德市",
    "value": "河北省 / 承德市 / 承德高新技术产业开发区",
    "rank": 3,
    "normalizedName": "承德高新技术产业开发",
    "normalizedValue": "河北承德承德高新技术产业开发",
    "normalizedSearchText": "河北承德承德高新技术产业开发承德高新技术产业开发河北承德"
  },
  {
    "code": "130900",
    "name": "沧州市",
    "detail": "河北省",
    "value": "河北省 / 沧州市",
    "rank": 2,
    "normalizedName": "沧州",
    "normalizedValue": "河北沧州",
    "normalizedSearchText": "河北沧州沧州河北"
  },
  {
    "code": "130902",
    "name": "新华区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 新华区",
    "rank": 3,
    "normalizedName": "新华",
    "normalizedValue": "河北沧州新华",
    "normalizedSearchText": "河北沧州新华新华河北沧州"
  },
  {
    "code": "130903",
    "name": "运河区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 运河区",
    "rank": 3,
    "normalizedName": "运河",
    "normalizedValue": "河北沧州运河",
    "normalizedSearchText": "河北沧州运河运河河北沧州"
  },
  {
    "code": "130921",
    "name": "沧县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 沧县",
    "rank": 3,
    "normalizedName": "沧",
    "normalizedValue": "河北沧州沧",
    "normalizedSearchText": "河北沧州沧沧河北沧州"
  },
  {
    "code": "130922",
    "name": "青县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 青县",
    "rank": 3,
    "normalizedName": "青",
    "normalizedValue": "河北沧州青",
    "normalizedSearchText": "河北沧州青青河北沧州"
  },
  {
    "code": "130923",
    "name": "东光县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 东光县",
    "rank": 3,
    "normalizedName": "东光",
    "normalizedValue": "河北沧州东光",
    "normalizedSearchText": "河北沧州东光东光河北沧州"
  },
  {
    "code": "130924",
    "name": "海兴县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 海兴县",
    "rank": 3,
    "normalizedName": "海兴",
    "normalizedValue": "河北沧州海兴",
    "normalizedSearchText": "河北沧州海兴海兴河北沧州"
  },
  {
    "code": "130925",
    "name": "盐山县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 盐山县",
    "rank": 3,
    "normalizedName": "盐山",
    "normalizedValue": "河北沧州盐山",
    "normalizedSearchText": "河北沧州盐山盐山河北沧州"
  },
  {
    "code": "130926",
    "name": "肃宁县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 肃宁县",
    "rank": 3,
    "normalizedName": "肃宁",
    "normalizedValue": "河北沧州肃宁",
    "normalizedSearchText": "河北沧州肃宁肃宁河北沧州"
  },
  {
    "code": "130927",
    "name": "南皮县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 南皮县",
    "rank": 3,
    "normalizedName": "南皮",
    "normalizedValue": "河北沧州南皮",
    "normalizedSearchText": "河北沧州南皮南皮河北沧州"
  },
  {
    "code": "130928",
    "name": "吴桥县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 吴桥县",
    "rank": 3,
    "normalizedName": "吴桥",
    "normalizedValue": "河北沧州吴桥",
    "normalizedSearchText": "河北沧州吴桥吴桥河北沧州"
  },
  {
    "code": "130929",
    "name": "献县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 献县",
    "rank": 3,
    "normalizedName": "献",
    "normalizedValue": "河北沧州献",
    "normalizedSearchText": "河北沧州献献河北沧州"
  },
  {
    "code": "130930",
    "name": "孟村回族自治县",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 孟村回族自治县",
    "rank": 3,
    "normalizedName": "孟回族自治",
    "normalizedValue": "河北沧州孟回族自治",
    "normalizedSearchText": "河北沧州孟回族自治孟回族自治河北沧州"
  },
  {
    "code": "130981",
    "name": "泊头市",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 泊头市",
    "rank": 3,
    "normalizedName": "泊头",
    "normalizedValue": "河北沧州泊头",
    "normalizedSearchText": "河北沧州泊头泊头河北沧州"
  },
  {
    "code": "130982",
    "name": "任丘市",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 任丘市",
    "rank": 3,
    "normalizedName": "任丘",
    "normalizedValue": "河北沧州任丘",
    "normalizedSearchText": "河北沧州任丘任丘河北沧州"
  },
  {
    "code": "130983",
    "name": "黄骅市",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 黄骅市",
    "rank": 3,
    "normalizedName": "黄骅",
    "normalizedValue": "河北沧州黄骅",
    "normalizedSearchText": "河北沧州黄骅黄骅河北沧州"
  },
  {
    "code": "130984",
    "name": "河间市",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 河间市",
    "rank": 3,
    "normalizedName": "河间",
    "normalizedValue": "河北沧州河间",
    "normalizedSearchText": "河北沧州河间河间河北沧州"
  },
  {
    "code": "130901",
    "name": "市辖区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北沧州辖",
    "normalizedSearchText": "河北沧州辖辖河北沧州"
  },
  {
    "code": "130971",
    "name": "河北沧州经济开发区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 河北沧州经济开发区",
    "rank": 3,
    "normalizedName": "河北沧州经济开发",
    "normalizedValue": "河北沧州河北沧州经济开发",
    "normalizedSearchText": "河北沧州河北沧州经济开发河北沧州经济开发河北沧州"
  },
  {
    "code": "130972",
    "name": "沧州高新技术产业开发区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 沧州高新技术产业开发区",
    "rank": 3,
    "normalizedName": "沧州高新技术产业开发",
    "normalizedValue": "河北沧州沧州高新技术产业开发",
    "normalizedSearchText": "河北沧州沧州高新技术产业开发沧州高新技术产业开发河北沧州"
  },
  {
    "code": "130973",
    "name": "沧州渤海新区",
    "detail": "河北省 / 沧州市",
    "value": "河北省 / 沧州市 / 沧州渤海新区",
    "rank": 3,
    "normalizedName": "沧州渤海新",
    "normalizedValue": "河北沧州沧州渤海新",
    "normalizedSearchText": "河北沧州沧州渤海新沧州渤海新河北沧州"
  },
  {
    "code": "131000",
    "name": "廊坊市",
    "detail": "河北省",
    "value": "河北省 / 廊坊市",
    "rank": 2,
    "normalizedName": "廊坊",
    "normalizedValue": "河北廊坊",
    "normalizedSearchText": "河北廊坊廊坊河北"
  },
  {
    "code": "131002",
    "name": "安次区",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 安次区",
    "rank": 3,
    "normalizedName": "安次",
    "normalizedValue": "河北廊坊安次",
    "normalizedSearchText": "河北廊坊安次安次河北廊坊"
  },
  {
    "code": "131003",
    "name": "广阳区",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 广阳区",
    "rank": 3,
    "normalizedName": "广阳",
    "normalizedValue": "河北廊坊广阳",
    "normalizedSearchText": "河北廊坊广阳广阳河北廊坊"
  },
  {
    "code": "131022",
    "name": "固安县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 固安县",
    "rank": 3,
    "normalizedName": "固安",
    "normalizedValue": "河北廊坊固安",
    "normalizedSearchText": "河北廊坊固安固安河北廊坊"
  },
  {
    "code": "131023",
    "name": "永清县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 永清县",
    "rank": 3,
    "normalizedName": "永清",
    "normalizedValue": "河北廊坊永清",
    "normalizedSearchText": "河北廊坊永清永清河北廊坊"
  },
  {
    "code": "131024",
    "name": "香河县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 香河县",
    "rank": 3,
    "normalizedName": "香河",
    "normalizedValue": "河北廊坊香河",
    "normalizedSearchText": "河北廊坊香河香河河北廊坊"
  },
  {
    "code": "131025",
    "name": "大城县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 大城县",
    "rank": 3,
    "normalizedName": "大城",
    "normalizedValue": "河北廊坊大城",
    "normalizedSearchText": "河北廊坊大城大城河北廊坊"
  },
  {
    "code": "131026",
    "name": "文安县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 文安县",
    "rank": 3,
    "normalizedName": "文安",
    "normalizedValue": "河北廊坊文安",
    "normalizedSearchText": "河北廊坊文安文安河北廊坊"
  },
  {
    "code": "131028",
    "name": "大厂回族自治县",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 大厂回族自治县",
    "rank": 3,
    "normalizedName": "大厂回族自治",
    "normalizedValue": "河北廊坊大厂回族自治",
    "normalizedSearchText": "河北廊坊大厂回族自治大厂回族自治河北廊坊"
  },
  {
    "code": "131081",
    "name": "霸州市",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 霸州市",
    "rank": 3,
    "normalizedName": "霸州",
    "normalizedValue": "河北廊坊霸州",
    "normalizedSearchText": "河北廊坊霸州霸州河北廊坊"
  },
  {
    "code": "131082",
    "name": "三河市",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 三河市",
    "rank": 3,
    "normalizedName": "三河",
    "normalizedValue": "河北廊坊三河",
    "normalizedSearchText": "河北廊坊三河三河河北廊坊"
  },
  {
    "code": "131001",
    "name": "市辖区",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北廊坊辖",
    "normalizedSearchText": "河北廊坊辖辖河北廊坊"
  },
  {
    "code": "131071",
    "name": "廊坊经济技术开发区",
    "detail": "河北省 / 廊坊市",
    "value": "河北省 / 廊坊市 / 廊坊经济技术开发区",
    "rank": 3,
    "normalizedName": "廊坊经济技术开发",
    "normalizedValue": "河北廊坊廊坊经济技术开发",
    "normalizedSearchText": "河北廊坊廊坊经济技术开发廊坊经济技术开发河北廊坊"
  },
  {
    "code": "131100",
    "name": "衡水市",
    "detail": "河北省",
    "value": "河北省 / 衡水市",
    "rank": 2,
    "normalizedName": "衡水",
    "normalizedValue": "河北衡水",
    "normalizedSearchText": "河北衡水衡水河北"
  },
  {
    "code": "131102",
    "name": "桃城区",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 桃城区",
    "rank": 3,
    "normalizedName": "桃城",
    "normalizedValue": "河北衡水桃城",
    "normalizedSearchText": "河北衡水桃城桃城河北衡水"
  },
  {
    "code": "131103",
    "name": "冀州区",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 冀州区",
    "rank": 3,
    "normalizedName": "冀州",
    "normalizedValue": "河北衡水冀州",
    "normalizedSearchText": "河北衡水冀州冀州河北衡水"
  },
  {
    "code": "131121",
    "name": "枣强县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 枣强县",
    "rank": 3,
    "normalizedName": "枣强",
    "normalizedValue": "河北衡水枣强",
    "normalizedSearchText": "河北衡水枣强枣强河北衡水"
  },
  {
    "code": "131122",
    "name": "武邑县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 武邑县",
    "rank": 3,
    "normalizedName": "武邑",
    "normalizedValue": "河北衡水武邑",
    "normalizedSearchText": "河北衡水武邑武邑河北衡水"
  },
  {
    "code": "131123",
    "name": "武强县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 武强县",
    "rank": 3,
    "normalizedName": "武强",
    "normalizedValue": "河北衡水武强",
    "normalizedSearchText": "河北衡水武强武强河北衡水"
  },
  {
    "code": "131124",
    "name": "饶阳县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 饶阳县",
    "rank": 3,
    "normalizedName": "饶阳",
    "normalizedValue": "河北衡水饶阳",
    "normalizedSearchText": "河北衡水饶阳饶阳河北衡水"
  },
  {
    "code": "131125",
    "name": "安平县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 安平县",
    "rank": 3,
    "normalizedName": "安平",
    "normalizedValue": "河北衡水安平",
    "normalizedSearchText": "河北衡水安平安平河北衡水"
  },
  {
    "code": "131126",
    "name": "故城县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 故城县",
    "rank": 3,
    "normalizedName": "故城",
    "normalizedValue": "河北衡水故城",
    "normalizedSearchText": "河北衡水故城故城河北衡水"
  },
  {
    "code": "131127",
    "name": "景县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 景县",
    "rank": 3,
    "normalizedName": "景",
    "normalizedValue": "河北衡水景",
    "normalizedSearchText": "河北衡水景景河北衡水"
  },
  {
    "code": "131128",
    "name": "阜城县",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 阜城县",
    "rank": 3,
    "normalizedName": "阜城",
    "normalizedValue": "河北衡水阜城",
    "normalizedSearchText": "河北衡水阜城阜城河北衡水"
  },
  {
    "code": "131182",
    "name": "深州市",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 深州市",
    "rank": 3,
    "normalizedName": "深州",
    "normalizedValue": "河北衡水深州",
    "normalizedSearchText": "河北衡水深州深州河北衡水"
  },
  {
    "code": "131101",
    "name": "市辖区",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河北衡水辖",
    "normalizedSearchText": "河北衡水辖辖河北衡水"
  },
  {
    "code": "131171",
    "name": "河北衡水高新技术产业开发区",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 河北衡水高新技术产业开发区",
    "rank": 3,
    "normalizedName": "河北衡水高新技术产业开发",
    "normalizedValue": "河北衡水河北衡水高新技术产业开发",
    "normalizedSearchText": "河北衡水河北衡水高新技术产业开发河北衡水高新技术产业开发河北衡水"
  },
  {
    "code": "131172",
    "name": "衡水滨湖新区",
    "detail": "河北省 / 衡水市",
    "value": "河北省 / 衡水市 / 衡水滨湖新区",
    "rank": 3,
    "normalizedName": "衡水滨湖新",
    "normalizedValue": "河北衡水衡水滨湖新",
    "normalizedSearchText": "河北衡水衡水滨湖新衡水滨湖新河北衡水"
  },
  {
    "code": "140000",
    "name": "山西省",
    "detail": "?????",
    "value": "山西省",
    "rank": 1,
    "normalizedName": "山西",
    "normalizedValue": "山西",
    "normalizedSearchText": "山西山西"
  },
  {
    "code": "140100",
    "name": "太原市",
    "detail": "山西省",
    "value": "山西省 / 太原市",
    "rank": 2,
    "normalizedName": "太原",
    "normalizedValue": "山西太原",
    "normalizedSearchText": "山西太原太原山西"
  },
  {
    "code": "140105",
    "name": "小店区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 小店区",
    "rank": 3,
    "normalizedName": "小店",
    "normalizedValue": "山西太原小店",
    "normalizedSearchText": "山西太原小店小店山西太原"
  },
  {
    "code": "140106",
    "name": "迎泽区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 迎泽区",
    "rank": 3,
    "normalizedName": "迎泽",
    "normalizedValue": "山西太原迎泽",
    "normalizedSearchText": "山西太原迎泽迎泽山西太原"
  },
  {
    "code": "140107",
    "name": "杏花岭区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 杏花岭区",
    "rank": 3,
    "normalizedName": "杏花岭",
    "normalizedValue": "山西太原杏花岭",
    "normalizedSearchText": "山西太原杏花岭杏花岭山西太原"
  },
  {
    "code": "140108",
    "name": "尖草坪区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 尖草坪区",
    "rank": 3,
    "normalizedName": "尖草坪",
    "normalizedValue": "山西太原尖草坪",
    "normalizedSearchText": "山西太原尖草坪尖草坪山西太原"
  },
  {
    "code": "140109",
    "name": "万柏林区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 万柏林区",
    "rank": 3,
    "normalizedName": "万柏林",
    "normalizedValue": "山西太原万柏林",
    "normalizedSearchText": "山西太原万柏林万柏林山西太原"
  },
  {
    "code": "140110",
    "name": "晋源区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 晋源区",
    "rank": 3,
    "normalizedName": "晋源",
    "normalizedValue": "山西太原晋源",
    "normalizedSearchText": "山西太原晋源晋源山西太原"
  },
  {
    "code": "140121",
    "name": "清徐县",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 清徐县",
    "rank": 3,
    "normalizedName": "清徐",
    "normalizedValue": "山西太原清徐",
    "normalizedSearchText": "山西太原清徐清徐山西太原"
  },
  {
    "code": "140122",
    "name": "阳曲县",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 阳曲县",
    "rank": 3,
    "normalizedName": "阳曲",
    "normalizedValue": "山西太原阳曲",
    "normalizedSearchText": "山西太原阳曲阳曲山西太原"
  },
  {
    "code": "140123",
    "name": "娄烦县",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 娄烦县",
    "rank": 3,
    "normalizedName": "娄烦",
    "normalizedValue": "山西太原娄烦",
    "normalizedSearchText": "山西太原娄烦娄烦山西太原"
  },
  {
    "code": "140181",
    "name": "古交市",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 古交市",
    "rank": 3,
    "normalizedName": "古交",
    "normalizedValue": "山西太原古交",
    "normalizedSearchText": "山西太原古交古交山西太原"
  },
  {
    "code": "140101",
    "name": "市辖区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西太原辖",
    "normalizedSearchText": "山西太原辖辖山西太原"
  },
  {
    "code": "140171",
    "name": "山西转型综合改革示范区",
    "detail": "山西省 / 太原市",
    "value": "山西省 / 太原市 / 山西转型综合改革示范区",
    "rank": 3,
    "normalizedName": "山西转型综合改革示范",
    "normalizedValue": "山西太原山西转型综合改革示范",
    "normalizedSearchText": "山西太原山西转型综合改革示范山西转型综合改革示范山西太原"
  },
  {
    "code": "140200",
    "name": "大同市",
    "detail": "山西省",
    "value": "山西省 / 大同市",
    "rank": 2,
    "normalizedName": "大同",
    "normalizedValue": "山西大同",
    "normalizedSearchText": "山西大同大同山西"
  },
  {
    "code": "140212",
    "name": "新荣区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 新荣区",
    "rank": 3,
    "normalizedName": "新荣",
    "normalizedValue": "山西大同新荣",
    "normalizedSearchText": "山西大同新荣新荣山西大同"
  },
  {
    "code": "140213",
    "name": "平城区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 平城区",
    "rank": 3,
    "normalizedName": "平城",
    "normalizedValue": "山西大同平城",
    "normalizedSearchText": "山西大同平城平城山西大同"
  },
  {
    "code": "140214",
    "name": "云冈区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 云冈区",
    "rank": 3,
    "normalizedName": "云冈",
    "normalizedValue": "山西大同云冈",
    "normalizedSearchText": "山西大同云冈云冈山西大同"
  },
  {
    "code": "140215",
    "name": "云州区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 云州区",
    "rank": 3,
    "normalizedName": "云州",
    "normalizedValue": "山西大同云州",
    "normalizedSearchText": "山西大同云州云州山西大同"
  },
  {
    "code": "140221",
    "name": "阳高县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 阳高县",
    "rank": 3,
    "normalizedName": "阳高",
    "normalizedValue": "山西大同阳高",
    "normalizedSearchText": "山西大同阳高阳高山西大同"
  },
  {
    "code": "140222",
    "name": "天镇县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 天镇县",
    "rank": 3,
    "normalizedName": "天",
    "normalizedValue": "山西大同天",
    "normalizedSearchText": "山西大同天天山西大同"
  },
  {
    "code": "140223",
    "name": "广灵县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 广灵县",
    "rank": 3,
    "normalizedName": "广灵",
    "normalizedValue": "山西大同广灵",
    "normalizedSearchText": "山西大同广灵广灵山西大同"
  },
  {
    "code": "140224",
    "name": "灵丘县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 灵丘县",
    "rank": 3,
    "normalizedName": "灵丘",
    "normalizedValue": "山西大同灵丘",
    "normalizedSearchText": "山西大同灵丘灵丘山西大同"
  },
  {
    "code": "140225",
    "name": "浑源县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 浑源县",
    "rank": 3,
    "normalizedName": "浑源",
    "normalizedValue": "山西大同浑源",
    "normalizedSearchText": "山西大同浑源浑源山西大同"
  },
  {
    "code": "140226",
    "name": "左云县",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 左云县",
    "rank": 3,
    "normalizedName": "左云",
    "normalizedValue": "山西大同左云",
    "normalizedSearchText": "山西大同左云左云山西大同"
  },
  {
    "code": "140201",
    "name": "市辖区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西大同辖",
    "normalizedSearchText": "山西大同辖辖山西大同"
  },
  {
    "code": "140271",
    "name": "山西大同经济开发区",
    "detail": "山西省 / 大同市",
    "value": "山西省 / 大同市 / 山西大同经济开发区",
    "rank": 3,
    "normalizedName": "山西大同经济开发",
    "normalizedValue": "山西大同山西大同经济开发",
    "normalizedSearchText": "山西大同山西大同经济开发山西大同经济开发山西大同"
  },
  {
    "code": "140300",
    "name": "阳泉市",
    "detail": "山西省",
    "value": "山西省 / 阳泉市",
    "rank": 2,
    "normalizedName": "阳泉",
    "normalizedValue": "山西阳泉",
    "normalizedSearchText": "山西阳泉阳泉山西"
  },
  {
    "code": "140302",
    "name": "城区",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 城区",
    "rank": 3,
    "normalizedName": "城",
    "normalizedValue": "山西阳泉城",
    "normalizedSearchText": "山西阳泉城城山西阳泉"
  },
  {
    "code": "140303",
    "name": "矿区",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 矿区",
    "rank": 3,
    "normalizedName": "矿",
    "normalizedValue": "山西阳泉矿",
    "normalizedSearchText": "山西阳泉矿矿山西阳泉"
  },
  {
    "code": "140311",
    "name": "郊区",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 郊区",
    "rank": 3,
    "normalizedName": "郊",
    "normalizedValue": "山西阳泉郊",
    "normalizedSearchText": "山西阳泉郊郊山西阳泉"
  },
  {
    "code": "140321",
    "name": "平定县",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 平定县",
    "rank": 3,
    "normalizedName": "平定",
    "normalizedValue": "山西阳泉平定",
    "normalizedSearchText": "山西阳泉平定平定山西阳泉"
  },
  {
    "code": "140322",
    "name": "盂县",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 盂县",
    "rank": 3,
    "normalizedName": "盂",
    "normalizedValue": "山西阳泉盂",
    "normalizedSearchText": "山西阳泉盂盂山西阳泉"
  },
  {
    "code": "140301",
    "name": "市辖区",
    "detail": "山西省 / 阳泉市",
    "value": "山西省 / 阳泉市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西阳泉辖",
    "normalizedSearchText": "山西阳泉辖辖山西阳泉"
  },
  {
    "code": "140400",
    "name": "长治市",
    "detail": "山西省",
    "value": "山西省 / 长治市",
    "rank": 2,
    "normalizedName": "长治",
    "normalizedValue": "山西长治",
    "normalizedSearchText": "山西长治长治山西"
  },
  {
    "code": "140403",
    "name": "潞州区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 潞州区",
    "rank": 3,
    "normalizedName": "潞州",
    "normalizedValue": "山西长治潞州",
    "normalizedSearchText": "山西长治潞州潞州山西长治"
  },
  {
    "code": "140404",
    "name": "上党区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 上党区",
    "rank": 3,
    "normalizedName": "上党",
    "normalizedValue": "山西长治上党",
    "normalizedSearchText": "山西长治上党上党山西长治"
  },
  {
    "code": "140405",
    "name": "屯留区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 屯留区",
    "rank": 3,
    "normalizedName": "屯留",
    "normalizedValue": "山西长治屯留",
    "normalizedSearchText": "山西长治屯留屯留山西长治"
  },
  {
    "code": "140406",
    "name": "潞城区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 潞城区",
    "rank": 3,
    "normalizedName": "潞城",
    "normalizedValue": "山西长治潞城",
    "normalizedSearchText": "山西长治潞城潞城山西长治"
  },
  {
    "code": "140423",
    "name": "襄垣县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 襄垣县",
    "rank": 3,
    "normalizedName": "襄垣",
    "normalizedValue": "山西长治襄垣",
    "normalizedSearchText": "山西长治襄垣襄垣山西长治"
  },
  {
    "code": "140425",
    "name": "平顺县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 平顺县",
    "rank": 3,
    "normalizedName": "平顺",
    "normalizedValue": "山西长治平顺",
    "normalizedSearchText": "山西长治平顺平顺山西长治"
  },
  {
    "code": "140426",
    "name": "黎城县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 黎城县",
    "rank": 3,
    "normalizedName": "黎城",
    "normalizedValue": "山西长治黎城",
    "normalizedSearchText": "山西长治黎城黎城山西长治"
  },
  {
    "code": "140427",
    "name": "壶关县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 壶关县",
    "rank": 3,
    "normalizedName": "壶关",
    "normalizedValue": "山西长治壶关",
    "normalizedSearchText": "山西长治壶关壶关山西长治"
  },
  {
    "code": "140428",
    "name": "长子县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 长子县",
    "rank": 3,
    "normalizedName": "长子",
    "normalizedValue": "山西长治长子",
    "normalizedSearchText": "山西长治长子长子山西长治"
  },
  {
    "code": "140429",
    "name": "武乡县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 武乡县",
    "rank": 3,
    "normalizedName": "武",
    "normalizedValue": "山西长治武",
    "normalizedSearchText": "山西长治武武山西长治"
  },
  {
    "code": "140430",
    "name": "沁县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 沁县",
    "rank": 3,
    "normalizedName": "沁",
    "normalizedValue": "山西长治沁",
    "normalizedSearchText": "山西长治沁沁山西长治"
  },
  {
    "code": "140431",
    "name": "沁源县",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 沁源县",
    "rank": 3,
    "normalizedName": "沁源",
    "normalizedValue": "山西长治沁源",
    "normalizedSearchText": "山西长治沁源沁源山西长治"
  },
  {
    "code": "140401",
    "name": "市辖区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西长治辖",
    "normalizedSearchText": "山西长治辖辖山西长治"
  },
  {
    "code": "140471",
    "name": "山西长治高新技术产业园区",
    "detail": "山西省 / 长治市",
    "value": "山西省 / 长治市 / 山西长治高新技术产业园区",
    "rank": 3,
    "normalizedName": "山西长治高新技术产业园",
    "normalizedValue": "山西长治山西长治高新技术产业园",
    "normalizedSearchText": "山西长治山西长治高新技术产业园山西长治高新技术产业园山西长治"
  },
  {
    "code": "140500",
    "name": "晋城市",
    "detail": "山西省",
    "value": "山西省 / 晋城市",
    "rank": 2,
    "normalizedName": "晋城",
    "normalizedValue": "山西晋城",
    "normalizedSearchText": "山西晋城晋城山西"
  },
  {
    "code": "140502",
    "name": "城区",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 城区",
    "rank": 3,
    "normalizedName": "城",
    "normalizedValue": "山西晋城城",
    "normalizedSearchText": "山西晋城城城山西晋城"
  },
  {
    "code": "140521",
    "name": "沁水县",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 沁水县",
    "rank": 3,
    "normalizedName": "沁水",
    "normalizedValue": "山西晋城沁水",
    "normalizedSearchText": "山西晋城沁水沁水山西晋城"
  },
  {
    "code": "140522",
    "name": "阳城县",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 阳城县",
    "rank": 3,
    "normalizedName": "阳城",
    "normalizedValue": "山西晋城阳城",
    "normalizedSearchText": "山西晋城阳城阳城山西晋城"
  },
  {
    "code": "140524",
    "name": "陵川县",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 陵川县",
    "rank": 3,
    "normalizedName": "陵川",
    "normalizedValue": "山西晋城陵川",
    "normalizedSearchText": "山西晋城陵川陵川山西晋城"
  },
  {
    "code": "140525",
    "name": "泽州县",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 泽州县",
    "rank": 3,
    "normalizedName": "泽州",
    "normalizedValue": "山西晋城泽州",
    "normalizedSearchText": "山西晋城泽州泽州山西晋城"
  },
  {
    "code": "140581",
    "name": "高平市",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 高平市",
    "rank": 3,
    "normalizedName": "高平",
    "normalizedValue": "山西晋城高平",
    "normalizedSearchText": "山西晋城高平高平山西晋城"
  },
  {
    "code": "140501",
    "name": "市辖区",
    "detail": "山西省 / 晋城市",
    "value": "山西省 / 晋城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西晋城辖",
    "normalizedSearchText": "山西晋城辖辖山西晋城"
  },
  {
    "code": "140600",
    "name": "朔州市",
    "detail": "山西省",
    "value": "山西省 / 朔州市",
    "rank": 2,
    "normalizedName": "朔州",
    "normalizedValue": "山西朔州",
    "normalizedSearchText": "山西朔州朔州山西"
  },
  {
    "code": "140602",
    "name": "朔城区",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 朔城区",
    "rank": 3,
    "normalizedName": "朔城",
    "normalizedValue": "山西朔州朔城",
    "normalizedSearchText": "山西朔州朔城朔城山西朔州"
  },
  {
    "code": "140603",
    "name": "平鲁区",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 平鲁区",
    "rank": 3,
    "normalizedName": "平鲁",
    "normalizedValue": "山西朔州平鲁",
    "normalizedSearchText": "山西朔州平鲁平鲁山西朔州"
  },
  {
    "code": "140621",
    "name": "山阴县",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 山阴县",
    "rank": 3,
    "normalizedName": "山阴",
    "normalizedValue": "山西朔州山阴",
    "normalizedSearchText": "山西朔州山阴山阴山西朔州"
  },
  {
    "code": "140622",
    "name": "应县",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 应县",
    "rank": 3,
    "normalizedName": "应",
    "normalizedValue": "山西朔州应",
    "normalizedSearchText": "山西朔州应应山西朔州"
  },
  {
    "code": "140623",
    "name": "右玉县",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 右玉县",
    "rank": 3,
    "normalizedName": "右玉",
    "normalizedValue": "山西朔州右玉",
    "normalizedSearchText": "山西朔州右玉右玉山西朔州"
  },
  {
    "code": "140681",
    "name": "怀仁市",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 怀仁市",
    "rank": 3,
    "normalizedName": "怀仁",
    "normalizedValue": "山西朔州怀仁",
    "normalizedSearchText": "山西朔州怀仁怀仁山西朔州"
  },
  {
    "code": "140601",
    "name": "市辖区",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西朔州辖",
    "normalizedSearchText": "山西朔州辖辖山西朔州"
  },
  {
    "code": "140671",
    "name": "山西朔州经济开发区",
    "detail": "山西省 / 朔州市",
    "value": "山西省 / 朔州市 / 山西朔州经济开发区",
    "rank": 3,
    "normalizedName": "山西朔州经济开发",
    "normalizedValue": "山西朔州山西朔州经济开发",
    "normalizedSearchText": "山西朔州山西朔州经济开发山西朔州经济开发山西朔州"
  },
  {
    "code": "140700",
    "name": "晋中市",
    "detail": "山西省",
    "value": "山西省 / 晋中市",
    "rank": 2,
    "normalizedName": "晋中",
    "normalizedValue": "山西晋中",
    "normalizedSearchText": "山西晋中晋中山西"
  },
  {
    "code": "140702",
    "name": "榆次区",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 榆次区",
    "rank": 3,
    "normalizedName": "榆次",
    "normalizedValue": "山西晋中榆次",
    "normalizedSearchText": "山西晋中榆次榆次山西晋中"
  },
  {
    "code": "140703",
    "name": "太谷区",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 太谷区",
    "rank": 3,
    "normalizedName": "太谷",
    "normalizedValue": "山西晋中太谷",
    "normalizedSearchText": "山西晋中太谷太谷山西晋中"
  },
  {
    "code": "140721",
    "name": "榆社县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 榆社县",
    "rank": 3,
    "normalizedName": "榆社",
    "normalizedValue": "山西晋中榆社",
    "normalizedSearchText": "山西晋中榆社榆社山西晋中"
  },
  {
    "code": "140722",
    "name": "左权县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 左权县",
    "rank": 3,
    "normalizedName": "左权",
    "normalizedValue": "山西晋中左权",
    "normalizedSearchText": "山西晋中左权左权山西晋中"
  },
  {
    "code": "140723",
    "name": "和顺县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 和顺县",
    "rank": 3,
    "normalizedName": "和顺",
    "normalizedValue": "山西晋中和顺",
    "normalizedSearchText": "山西晋中和顺和顺山西晋中"
  },
  {
    "code": "140724",
    "name": "昔阳县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 昔阳县",
    "rank": 3,
    "normalizedName": "昔阳",
    "normalizedValue": "山西晋中昔阳",
    "normalizedSearchText": "山西晋中昔阳昔阳山西晋中"
  },
  {
    "code": "140725",
    "name": "寿阳县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 寿阳县",
    "rank": 3,
    "normalizedName": "寿阳",
    "normalizedValue": "山西晋中寿阳",
    "normalizedSearchText": "山西晋中寿阳寿阳山西晋中"
  },
  {
    "code": "140727",
    "name": "祁县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 祁县",
    "rank": 3,
    "normalizedName": "祁",
    "normalizedValue": "山西晋中祁",
    "normalizedSearchText": "山西晋中祁祁山西晋中"
  },
  {
    "code": "140728",
    "name": "平遥县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 平遥县",
    "rank": 3,
    "normalizedName": "平遥",
    "normalizedValue": "山西晋中平遥",
    "normalizedSearchText": "山西晋中平遥平遥山西晋中"
  },
  {
    "code": "140729",
    "name": "灵石县",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 灵石县",
    "rank": 3,
    "normalizedName": "灵石",
    "normalizedValue": "山西晋中灵石",
    "normalizedSearchText": "山西晋中灵石灵石山西晋中"
  },
  {
    "code": "140781",
    "name": "介休市",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 介休市",
    "rank": 3,
    "normalizedName": "介休",
    "normalizedValue": "山西晋中介休",
    "normalizedSearchText": "山西晋中介休介休山西晋中"
  },
  {
    "code": "140701",
    "name": "市辖区",
    "detail": "山西省 / 晋中市",
    "value": "山西省 / 晋中市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西晋中辖",
    "normalizedSearchText": "山西晋中辖辖山西晋中"
  },
  {
    "code": "140800",
    "name": "运城市",
    "detail": "山西省",
    "value": "山西省 / 运城市",
    "rank": 2,
    "normalizedName": "运城",
    "normalizedValue": "山西运城",
    "normalizedSearchText": "山西运城运城山西"
  },
  {
    "code": "140802",
    "name": "盐湖区",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 盐湖区",
    "rank": 3,
    "normalizedName": "盐湖",
    "normalizedValue": "山西运城盐湖",
    "normalizedSearchText": "山西运城盐湖盐湖山西运城"
  },
  {
    "code": "140821",
    "name": "临猗县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 临猗县",
    "rank": 3,
    "normalizedName": "临猗",
    "normalizedValue": "山西运城临猗",
    "normalizedSearchText": "山西运城临猗临猗山西运城"
  },
  {
    "code": "140822",
    "name": "万荣县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 万荣县",
    "rank": 3,
    "normalizedName": "万荣",
    "normalizedValue": "山西运城万荣",
    "normalizedSearchText": "山西运城万荣万荣山西运城"
  },
  {
    "code": "140823",
    "name": "闻喜县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 闻喜县",
    "rank": 3,
    "normalizedName": "闻喜",
    "normalizedValue": "山西运城闻喜",
    "normalizedSearchText": "山西运城闻喜闻喜山西运城"
  },
  {
    "code": "140824",
    "name": "稷山县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 稷山县",
    "rank": 3,
    "normalizedName": "稷山",
    "normalizedValue": "山西运城稷山",
    "normalizedSearchText": "山西运城稷山稷山山西运城"
  },
  {
    "code": "140825",
    "name": "新绛县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 新绛县",
    "rank": 3,
    "normalizedName": "新绛",
    "normalizedValue": "山西运城新绛",
    "normalizedSearchText": "山西运城新绛新绛山西运城"
  },
  {
    "code": "140826",
    "name": "绛县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 绛县",
    "rank": 3,
    "normalizedName": "绛",
    "normalizedValue": "山西运城绛",
    "normalizedSearchText": "山西运城绛绛山西运城"
  },
  {
    "code": "140827",
    "name": "垣曲县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 垣曲县",
    "rank": 3,
    "normalizedName": "垣曲",
    "normalizedValue": "山西运城垣曲",
    "normalizedSearchText": "山西运城垣曲垣曲山西运城"
  },
  {
    "code": "140828",
    "name": "夏县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 夏县",
    "rank": 3,
    "normalizedName": "夏",
    "normalizedValue": "山西运城夏",
    "normalizedSearchText": "山西运城夏夏山西运城"
  },
  {
    "code": "140829",
    "name": "平陆县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 平陆县",
    "rank": 3,
    "normalizedName": "平陆",
    "normalizedValue": "山西运城平陆",
    "normalizedSearchText": "山西运城平陆平陆山西运城"
  },
  {
    "code": "140830",
    "name": "芮城县",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 芮城县",
    "rank": 3,
    "normalizedName": "芮城",
    "normalizedValue": "山西运城芮城",
    "normalizedSearchText": "山西运城芮城芮城山西运城"
  },
  {
    "code": "140881",
    "name": "永济市",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 永济市",
    "rank": 3,
    "normalizedName": "永济",
    "normalizedValue": "山西运城永济",
    "normalizedSearchText": "山西运城永济永济山西运城"
  },
  {
    "code": "140882",
    "name": "河津市",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 河津市",
    "rank": 3,
    "normalizedName": "河津",
    "normalizedValue": "山西运城河津",
    "normalizedSearchText": "山西运城河津河津山西运城"
  },
  {
    "code": "140801",
    "name": "市辖区",
    "detail": "山西省 / 运城市",
    "value": "山西省 / 运城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西运城辖",
    "normalizedSearchText": "山西运城辖辖山西运城"
  },
  {
    "code": "140900",
    "name": "忻州市",
    "detail": "山西省",
    "value": "山西省 / 忻州市",
    "rank": 2,
    "normalizedName": "忻州",
    "normalizedValue": "山西忻州",
    "normalizedSearchText": "山西忻州忻州山西"
  },
  {
    "code": "140902",
    "name": "忻府区",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 忻府区",
    "rank": 3,
    "normalizedName": "忻府",
    "normalizedValue": "山西忻州忻府",
    "normalizedSearchText": "山西忻州忻府忻府山西忻州"
  },
  {
    "code": "140921",
    "name": "定襄县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 定襄县",
    "rank": 3,
    "normalizedName": "定襄",
    "normalizedValue": "山西忻州定襄",
    "normalizedSearchText": "山西忻州定襄定襄山西忻州"
  },
  {
    "code": "140922",
    "name": "五台县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 五台县",
    "rank": 3,
    "normalizedName": "五台",
    "normalizedValue": "山西忻州五台",
    "normalizedSearchText": "山西忻州五台五台山西忻州"
  },
  {
    "code": "140923",
    "name": "代县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 代县",
    "rank": 3,
    "normalizedName": "代",
    "normalizedValue": "山西忻州代",
    "normalizedSearchText": "山西忻州代代山西忻州"
  },
  {
    "code": "140924",
    "name": "繁峙县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 繁峙县",
    "rank": 3,
    "normalizedName": "繁峙",
    "normalizedValue": "山西忻州繁峙",
    "normalizedSearchText": "山西忻州繁峙繁峙山西忻州"
  },
  {
    "code": "140925",
    "name": "宁武县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 宁武县",
    "rank": 3,
    "normalizedName": "宁武",
    "normalizedValue": "山西忻州宁武",
    "normalizedSearchText": "山西忻州宁武宁武山西忻州"
  },
  {
    "code": "140926",
    "name": "静乐县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 静乐县",
    "rank": 3,
    "normalizedName": "静乐",
    "normalizedValue": "山西忻州静乐",
    "normalizedSearchText": "山西忻州静乐静乐山西忻州"
  },
  {
    "code": "140927",
    "name": "神池县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 神池县",
    "rank": 3,
    "normalizedName": "神池",
    "normalizedValue": "山西忻州神池",
    "normalizedSearchText": "山西忻州神池神池山西忻州"
  },
  {
    "code": "140928",
    "name": "五寨县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 五寨县",
    "rank": 3,
    "normalizedName": "五寨",
    "normalizedValue": "山西忻州五寨",
    "normalizedSearchText": "山西忻州五寨五寨山西忻州"
  },
  {
    "code": "140929",
    "name": "岢岚县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 岢岚县",
    "rank": 3,
    "normalizedName": "岢岚",
    "normalizedValue": "山西忻州岢岚",
    "normalizedSearchText": "山西忻州岢岚岢岚山西忻州"
  },
  {
    "code": "140930",
    "name": "河曲县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 河曲县",
    "rank": 3,
    "normalizedName": "河曲",
    "normalizedValue": "山西忻州河曲",
    "normalizedSearchText": "山西忻州河曲河曲山西忻州"
  },
  {
    "code": "140931",
    "name": "保德县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 保德县",
    "rank": 3,
    "normalizedName": "保德",
    "normalizedValue": "山西忻州保德",
    "normalizedSearchText": "山西忻州保德保德山西忻州"
  },
  {
    "code": "140932",
    "name": "偏关县",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 偏关县",
    "rank": 3,
    "normalizedName": "偏关",
    "normalizedValue": "山西忻州偏关",
    "normalizedSearchText": "山西忻州偏关偏关山西忻州"
  },
  {
    "code": "140981",
    "name": "原平市",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 原平市",
    "rank": 3,
    "normalizedName": "原平",
    "normalizedValue": "山西忻州原平",
    "normalizedSearchText": "山西忻州原平原平山西忻州"
  },
  {
    "code": "140901",
    "name": "市辖区",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西忻州辖",
    "normalizedSearchText": "山西忻州辖辖山西忻州"
  },
  {
    "code": "140971",
    "name": "五台山风景名胜区",
    "detail": "山西省 / 忻州市",
    "value": "山西省 / 忻州市 / 五台山风景名胜区",
    "rank": 3,
    "normalizedName": "五台山风景名胜",
    "normalizedValue": "山西忻州五台山风景名胜",
    "normalizedSearchText": "山西忻州五台山风景名胜五台山风景名胜山西忻州"
  },
  {
    "code": "141000",
    "name": "临汾市",
    "detail": "山西省",
    "value": "山西省 / 临汾市",
    "rank": 2,
    "normalizedName": "临汾",
    "normalizedValue": "山西临汾",
    "normalizedSearchText": "山西临汾临汾山西"
  },
  {
    "code": "141002",
    "name": "尧都区",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 尧都区",
    "rank": 3,
    "normalizedName": "尧都",
    "normalizedValue": "山西临汾尧都",
    "normalizedSearchText": "山西临汾尧都尧都山西临汾"
  },
  {
    "code": "141021",
    "name": "曲沃县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 曲沃县",
    "rank": 3,
    "normalizedName": "曲沃",
    "normalizedValue": "山西临汾曲沃",
    "normalizedSearchText": "山西临汾曲沃曲沃山西临汾"
  },
  {
    "code": "141022",
    "name": "翼城县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 翼城县",
    "rank": 3,
    "normalizedName": "翼城",
    "normalizedValue": "山西临汾翼城",
    "normalizedSearchText": "山西临汾翼城翼城山西临汾"
  },
  {
    "code": "141023",
    "name": "襄汾县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 襄汾县",
    "rank": 3,
    "normalizedName": "襄汾",
    "normalizedValue": "山西临汾襄汾",
    "normalizedSearchText": "山西临汾襄汾襄汾山西临汾"
  },
  {
    "code": "141024",
    "name": "洪洞县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 洪洞县",
    "rank": 3,
    "normalizedName": "洪洞",
    "normalizedValue": "山西临汾洪洞",
    "normalizedSearchText": "山西临汾洪洞洪洞山西临汾"
  },
  {
    "code": "141025",
    "name": "古县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 古县",
    "rank": 3,
    "normalizedName": "古",
    "normalizedValue": "山西临汾古",
    "normalizedSearchText": "山西临汾古古山西临汾"
  },
  {
    "code": "141026",
    "name": "安泽县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 安泽县",
    "rank": 3,
    "normalizedName": "安泽",
    "normalizedValue": "山西临汾安泽",
    "normalizedSearchText": "山西临汾安泽安泽山西临汾"
  },
  {
    "code": "141027",
    "name": "浮山县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 浮山县",
    "rank": 3,
    "normalizedName": "浮山",
    "normalizedValue": "山西临汾浮山",
    "normalizedSearchText": "山西临汾浮山浮山山西临汾"
  },
  {
    "code": "141028",
    "name": "吉县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 吉县",
    "rank": 3,
    "normalizedName": "吉",
    "normalizedValue": "山西临汾吉",
    "normalizedSearchText": "山西临汾吉吉山西临汾"
  },
  {
    "code": "141029",
    "name": "乡宁县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 乡宁县",
    "rank": 3,
    "normalizedName": "宁",
    "normalizedValue": "山西临汾宁",
    "normalizedSearchText": "山西临汾宁宁山西临汾"
  },
  {
    "code": "141030",
    "name": "大宁县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 大宁县",
    "rank": 3,
    "normalizedName": "大宁",
    "normalizedValue": "山西临汾大宁",
    "normalizedSearchText": "山西临汾大宁大宁山西临汾"
  },
  {
    "code": "141031",
    "name": "隰县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 隰县",
    "rank": 3,
    "normalizedName": "隰",
    "normalizedValue": "山西临汾隰",
    "normalizedSearchText": "山西临汾隰隰山西临汾"
  },
  {
    "code": "141032",
    "name": "永和县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 永和县",
    "rank": 3,
    "normalizedName": "永和",
    "normalizedValue": "山西临汾永和",
    "normalizedSearchText": "山西临汾永和永和山西临汾"
  },
  {
    "code": "141033",
    "name": "蒲县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 蒲县",
    "rank": 3,
    "normalizedName": "蒲",
    "normalizedValue": "山西临汾蒲",
    "normalizedSearchText": "山西临汾蒲蒲山西临汾"
  },
  {
    "code": "141034",
    "name": "汾西县",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 汾西县",
    "rank": 3,
    "normalizedName": "汾西",
    "normalizedValue": "山西临汾汾西",
    "normalizedSearchText": "山西临汾汾西汾西山西临汾"
  },
  {
    "code": "141081",
    "name": "侯马市",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 侯马市",
    "rank": 3,
    "normalizedName": "侯马",
    "normalizedValue": "山西临汾侯马",
    "normalizedSearchText": "山西临汾侯马侯马山西临汾"
  },
  {
    "code": "141082",
    "name": "霍州市",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 霍州市",
    "rank": 3,
    "normalizedName": "霍州",
    "normalizedValue": "山西临汾霍州",
    "normalizedSearchText": "山西临汾霍州霍州山西临汾"
  },
  {
    "code": "141001",
    "name": "市辖区",
    "detail": "山西省 / 临汾市",
    "value": "山西省 / 临汾市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西临汾辖",
    "normalizedSearchText": "山西临汾辖辖山西临汾"
  },
  {
    "code": "141100",
    "name": "吕梁市",
    "detail": "山西省",
    "value": "山西省 / 吕梁市",
    "rank": 2,
    "normalizedName": "吕梁",
    "normalizedValue": "山西吕梁",
    "normalizedSearchText": "山西吕梁吕梁山西"
  },
  {
    "code": "141102",
    "name": "离石区",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 离石区",
    "rank": 3,
    "normalizedName": "离石",
    "normalizedValue": "山西吕梁离石",
    "normalizedSearchText": "山西吕梁离石离石山西吕梁"
  },
  {
    "code": "141121",
    "name": "文水县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 文水县",
    "rank": 3,
    "normalizedName": "文水",
    "normalizedValue": "山西吕梁文水",
    "normalizedSearchText": "山西吕梁文水文水山西吕梁"
  },
  {
    "code": "141122",
    "name": "交城县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 交城县",
    "rank": 3,
    "normalizedName": "交城",
    "normalizedValue": "山西吕梁交城",
    "normalizedSearchText": "山西吕梁交城交城山西吕梁"
  },
  {
    "code": "141123",
    "name": "兴县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 兴县",
    "rank": 3,
    "normalizedName": "兴",
    "normalizedValue": "山西吕梁兴",
    "normalizedSearchText": "山西吕梁兴兴山西吕梁"
  },
  {
    "code": "141124",
    "name": "临县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 临县",
    "rank": 3,
    "normalizedName": "临",
    "normalizedValue": "山西吕梁临",
    "normalizedSearchText": "山西吕梁临临山西吕梁"
  },
  {
    "code": "141125",
    "name": "柳林县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 柳林县",
    "rank": 3,
    "normalizedName": "柳林",
    "normalizedValue": "山西吕梁柳林",
    "normalizedSearchText": "山西吕梁柳林柳林山西吕梁"
  },
  {
    "code": "141126",
    "name": "石楼县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 石楼县",
    "rank": 3,
    "normalizedName": "石楼",
    "normalizedValue": "山西吕梁石楼",
    "normalizedSearchText": "山西吕梁石楼石楼山西吕梁"
  },
  {
    "code": "141127",
    "name": "岚县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 岚县",
    "rank": 3,
    "normalizedName": "岚",
    "normalizedValue": "山西吕梁岚",
    "normalizedSearchText": "山西吕梁岚岚山西吕梁"
  },
  {
    "code": "141128",
    "name": "方山县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 方山县",
    "rank": 3,
    "normalizedName": "方山",
    "normalizedValue": "山西吕梁方山",
    "normalizedSearchText": "山西吕梁方山方山山西吕梁"
  },
  {
    "code": "141129",
    "name": "中阳县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 中阳县",
    "rank": 3,
    "normalizedName": "中阳",
    "normalizedValue": "山西吕梁中阳",
    "normalizedSearchText": "山西吕梁中阳中阳山西吕梁"
  },
  {
    "code": "141130",
    "name": "交口县",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 交口县",
    "rank": 3,
    "normalizedName": "交口",
    "normalizedValue": "山西吕梁交口",
    "normalizedSearchText": "山西吕梁交口交口山西吕梁"
  },
  {
    "code": "141181",
    "name": "孝义市",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 孝义市",
    "rank": 3,
    "normalizedName": "孝义",
    "normalizedValue": "山西吕梁孝义",
    "normalizedSearchText": "山西吕梁孝义孝义山西吕梁"
  },
  {
    "code": "141182",
    "name": "汾阳市",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 汾阳市",
    "rank": 3,
    "normalizedName": "汾阳",
    "normalizedValue": "山西吕梁汾阳",
    "normalizedSearchText": "山西吕梁汾阳汾阳山西吕梁"
  },
  {
    "code": "141101",
    "name": "市辖区",
    "detail": "山西省 / 吕梁市",
    "value": "山西省 / 吕梁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山西吕梁辖",
    "normalizedSearchText": "山西吕梁辖辖山西吕梁"
  },
  {
    "code": "150000",
    "name": "内蒙古自治区",
    "detail": "?????",
    "value": "内蒙古自治区",
    "rank": 1,
    "normalizedName": "内蒙古",
    "normalizedValue": "内蒙古",
    "normalizedSearchText": "内蒙古内蒙古"
  },
  {
    "code": "150100",
    "name": "呼和浩特市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 呼和浩特市",
    "rank": 2,
    "normalizedName": "呼和浩特",
    "normalizedValue": "内蒙古呼和浩特",
    "normalizedSearchText": "内蒙古呼和浩特呼和浩特内蒙古"
  },
  {
    "code": "150102",
    "name": "新城区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 新城区",
    "rank": 3,
    "normalizedName": "新城",
    "normalizedValue": "内蒙古呼和浩特新城",
    "normalizedSearchText": "内蒙古呼和浩特新城新城内蒙古呼和浩特"
  },
  {
    "code": "150103",
    "name": "回民区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 回民区",
    "rank": 3,
    "normalizedName": "回民",
    "normalizedValue": "内蒙古呼和浩特回民",
    "normalizedSearchText": "内蒙古呼和浩特回民回民内蒙古呼和浩特"
  },
  {
    "code": "150104",
    "name": "玉泉区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 玉泉区",
    "rank": 3,
    "normalizedName": "玉泉",
    "normalizedValue": "内蒙古呼和浩特玉泉",
    "normalizedSearchText": "内蒙古呼和浩特玉泉玉泉内蒙古呼和浩特"
  },
  {
    "code": "150105",
    "name": "赛罕区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 赛罕区",
    "rank": 3,
    "normalizedName": "赛罕",
    "normalizedValue": "内蒙古呼和浩特赛罕",
    "normalizedSearchText": "内蒙古呼和浩特赛罕赛罕内蒙古呼和浩特"
  },
  {
    "code": "150121",
    "name": "土默特左旗",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 土默特左旗",
    "rank": 3,
    "normalizedName": "土默特左",
    "normalizedValue": "内蒙古呼和浩特土默特左",
    "normalizedSearchText": "内蒙古呼和浩特土默特左土默特左内蒙古呼和浩特"
  },
  {
    "code": "150122",
    "name": "托克托县",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 托克托县",
    "rank": 3,
    "normalizedName": "托克托",
    "normalizedValue": "内蒙古呼和浩特托克托",
    "normalizedSearchText": "内蒙古呼和浩特托克托托克托内蒙古呼和浩特"
  },
  {
    "code": "150123",
    "name": "和林格尔县",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 和林格尔县",
    "rank": 3,
    "normalizedName": "和林格尔",
    "normalizedValue": "内蒙古呼和浩特和林格尔",
    "normalizedSearchText": "内蒙古呼和浩特和林格尔和林格尔内蒙古呼和浩特"
  },
  {
    "code": "150124",
    "name": "清水河县",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 清水河县",
    "rank": 3,
    "normalizedName": "清水河",
    "normalizedValue": "内蒙古呼和浩特清水河",
    "normalizedSearchText": "内蒙古呼和浩特清水河清水河内蒙古呼和浩特"
  },
  {
    "code": "150125",
    "name": "武川县",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 武川县",
    "rank": 3,
    "normalizedName": "武川",
    "normalizedValue": "内蒙古呼和浩特武川",
    "normalizedSearchText": "内蒙古呼和浩特武川武川内蒙古呼和浩特"
  },
  {
    "code": "150101",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古呼和浩特辖",
    "normalizedSearchText": "内蒙古呼和浩特辖辖内蒙古呼和浩特"
  },
  {
    "code": "150172",
    "name": "呼和浩特经济技术开发区",
    "detail": "内蒙古自治区 / 呼和浩特市",
    "value": "内蒙古自治区 / 呼和浩特市 / 呼和浩特经济技术开发区",
    "rank": 3,
    "normalizedName": "呼和浩特经济技术开发",
    "normalizedValue": "内蒙古呼和浩特呼和浩特经济技术开发",
    "normalizedSearchText": "内蒙古呼和浩特呼和浩特经济技术开发呼和浩特经济技术开发内蒙古呼和浩特"
  },
  {
    "code": "150200",
    "name": "包头市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 包头市",
    "rank": 2,
    "normalizedName": "包头",
    "normalizedValue": "内蒙古包头",
    "normalizedSearchText": "内蒙古包头包头内蒙古"
  },
  {
    "code": "150202",
    "name": "东河区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 东河区",
    "rank": 3,
    "normalizedName": "东河",
    "normalizedValue": "内蒙古包头东河",
    "normalizedSearchText": "内蒙古包头东河东河内蒙古包头"
  },
  {
    "code": "150203",
    "name": "昆都仑区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 昆都仑区",
    "rank": 3,
    "normalizedName": "昆都仑",
    "normalizedValue": "内蒙古包头昆都仑",
    "normalizedSearchText": "内蒙古包头昆都仑昆都仑内蒙古包头"
  },
  {
    "code": "150204",
    "name": "青山区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 青山区",
    "rank": 3,
    "normalizedName": "青山",
    "normalizedValue": "内蒙古包头青山",
    "normalizedSearchText": "内蒙古包头青山青山内蒙古包头"
  },
  {
    "code": "150205",
    "name": "石拐区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 石拐区",
    "rank": 3,
    "normalizedName": "石拐",
    "normalizedValue": "内蒙古包头石拐",
    "normalizedSearchText": "内蒙古包头石拐石拐内蒙古包头"
  },
  {
    "code": "150206",
    "name": "白云鄂博矿区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 白云鄂博矿区",
    "rank": 3,
    "normalizedName": "白云鄂博矿",
    "normalizedValue": "内蒙古包头白云鄂博矿",
    "normalizedSearchText": "内蒙古包头白云鄂博矿白云鄂博矿内蒙古包头"
  },
  {
    "code": "150207",
    "name": "九原区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 九原区",
    "rank": 3,
    "normalizedName": "九原",
    "normalizedValue": "内蒙古包头九原",
    "normalizedSearchText": "内蒙古包头九原九原内蒙古包头"
  },
  {
    "code": "150221",
    "name": "土默特右旗",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 土默特右旗",
    "rank": 3,
    "normalizedName": "土默特右",
    "normalizedValue": "内蒙古包头土默特右",
    "normalizedSearchText": "内蒙古包头土默特右土默特右内蒙古包头"
  },
  {
    "code": "150222",
    "name": "固阳县",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 固阳县",
    "rank": 3,
    "normalizedName": "固阳",
    "normalizedValue": "内蒙古包头固阳",
    "normalizedSearchText": "内蒙古包头固阳固阳内蒙古包头"
  },
  {
    "code": "150223",
    "name": "达尔罕茂明安联合旗",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 达尔罕茂明安联合旗",
    "rank": 3,
    "normalizedName": "达尔罕茂明安联合",
    "normalizedValue": "内蒙古包头达尔罕茂明安联合",
    "normalizedSearchText": "内蒙古包头达尔罕茂明安联合达尔罕茂明安联合内蒙古包头"
  },
  {
    "code": "150201",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古包头辖",
    "normalizedSearchText": "内蒙古包头辖辖内蒙古包头"
  },
  {
    "code": "150271",
    "name": "包头稀土高新技术产业开发区",
    "detail": "内蒙古自治区 / 包头市",
    "value": "内蒙古自治区 / 包头市 / 包头稀土高新技术产业开发区",
    "rank": 3,
    "normalizedName": "包头稀土高新技术产业开发",
    "normalizedValue": "内蒙古包头包头稀土高新技术产业开发",
    "normalizedSearchText": "内蒙古包头包头稀土高新技术产业开发包头稀土高新技术产业开发内蒙古包头"
  },
  {
    "code": "150300",
    "name": "乌海市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 乌海市",
    "rank": 2,
    "normalizedName": "乌海",
    "normalizedValue": "内蒙古乌海",
    "normalizedSearchText": "内蒙古乌海乌海内蒙古"
  },
  {
    "code": "150302",
    "name": "海勃湾区",
    "detail": "内蒙古自治区 / 乌海市",
    "value": "内蒙古自治区 / 乌海市 / 海勃湾区",
    "rank": 3,
    "normalizedName": "海勃湾",
    "normalizedValue": "内蒙古乌海海勃湾",
    "normalizedSearchText": "内蒙古乌海海勃湾海勃湾内蒙古乌海"
  },
  {
    "code": "150303",
    "name": "海南区",
    "detail": "内蒙古自治区 / 乌海市",
    "value": "内蒙古自治区 / 乌海市 / 海南区",
    "rank": 3,
    "normalizedName": "海南",
    "normalizedValue": "内蒙古乌海海南",
    "normalizedSearchText": "内蒙古乌海海南海南内蒙古乌海"
  },
  {
    "code": "150304",
    "name": "乌达区",
    "detail": "内蒙古自治区 / 乌海市",
    "value": "内蒙古自治区 / 乌海市 / 乌达区",
    "rank": 3,
    "normalizedName": "乌达",
    "normalizedValue": "内蒙古乌海乌达",
    "normalizedSearchText": "内蒙古乌海乌达乌达内蒙古乌海"
  },
  {
    "code": "150301",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 乌海市",
    "value": "内蒙古自治区 / 乌海市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古乌海辖",
    "normalizedSearchText": "内蒙古乌海辖辖内蒙古乌海"
  },
  {
    "code": "150400",
    "name": "赤峰市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 赤峰市",
    "rank": 2,
    "normalizedName": "赤峰",
    "normalizedValue": "内蒙古赤峰",
    "normalizedSearchText": "内蒙古赤峰赤峰内蒙古"
  },
  {
    "code": "150402",
    "name": "红山区",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 红山区",
    "rank": 3,
    "normalizedName": "红山",
    "normalizedValue": "内蒙古赤峰红山",
    "normalizedSearchText": "内蒙古赤峰红山红山内蒙古赤峰"
  },
  {
    "code": "150403",
    "name": "元宝山区",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 元宝山区",
    "rank": 3,
    "normalizedName": "元宝山",
    "normalizedValue": "内蒙古赤峰元宝山",
    "normalizedSearchText": "内蒙古赤峰元宝山元宝山内蒙古赤峰"
  },
  {
    "code": "150404",
    "name": "松山区",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 松山区",
    "rank": 3,
    "normalizedName": "松山",
    "normalizedValue": "内蒙古赤峰松山",
    "normalizedSearchText": "内蒙古赤峰松山松山内蒙古赤峰"
  },
  {
    "code": "150421",
    "name": "阿鲁科尔沁旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 阿鲁科尔沁旗",
    "rank": 3,
    "normalizedName": "阿鲁科尔沁",
    "normalizedValue": "内蒙古赤峰阿鲁科尔沁",
    "normalizedSearchText": "内蒙古赤峰阿鲁科尔沁阿鲁科尔沁内蒙古赤峰"
  },
  {
    "code": "150422",
    "name": "巴林左旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 巴林左旗",
    "rank": 3,
    "normalizedName": "巴林左",
    "normalizedValue": "内蒙古赤峰巴林左",
    "normalizedSearchText": "内蒙古赤峰巴林左巴林左内蒙古赤峰"
  },
  {
    "code": "150423",
    "name": "巴林右旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 巴林右旗",
    "rank": 3,
    "normalizedName": "巴林右",
    "normalizedValue": "内蒙古赤峰巴林右",
    "normalizedSearchText": "内蒙古赤峰巴林右巴林右内蒙古赤峰"
  },
  {
    "code": "150424",
    "name": "林西县",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 林西县",
    "rank": 3,
    "normalizedName": "林西",
    "normalizedValue": "内蒙古赤峰林西",
    "normalizedSearchText": "内蒙古赤峰林西林西内蒙古赤峰"
  },
  {
    "code": "150425",
    "name": "克什克腾旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 克什克腾旗",
    "rank": 3,
    "normalizedName": "克什克腾",
    "normalizedValue": "内蒙古赤峰克什克腾",
    "normalizedSearchText": "内蒙古赤峰克什克腾克什克腾内蒙古赤峰"
  },
  {
    "code": "150426",
    "name": "翁牛特旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 翁牛特旗",
    "rank": 3,
    "normalizedName": "翁牛特",
    "normalizedValue": "内蒙古赤峰翁牛特",
    "normalizedSearchText": "内蒙古赤峰翁牛特翁牛特内蒙古赤峰"
  },
  {
    "code": "150428",
    "name": "喀喇沁旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 喀喇沁旗",
    "rank": 3,
    "normalizedName": "喀喇沁",
    "normalizedValue": "内蒙古赤峰喀喇沁",
    "normalizedSearchText": "内蒙古赤峰喀喇沁喀喇沁内蒙古赤峰"
  },
  {
    "code": "150429",
    "name": "宁城县",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 宁城县",
    "rank": 3,
    "normalizedName": "宁城",
    "normalizedValue": "内蒙古赤峰宁城",
    "normalizedSearchText": "内蒙古赤峰宁城宁城内蒙古赤峰"
  },
  {
    "code": "150430",
    "name": "敖汉旗",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 敖汉旗",
    "rank": 3,
    "normalizedName": "敖汉",
    "normalizedValue": "内蒙古赤峰敖汉",
    "normalizedSearchText": "内蒙古赤峰敖汉敖汉内蒙古赤峰"
  },
  {
    "code": "150401",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 赤峰市",
    "value": "内蒙古自治区 / 赤峰市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古赤峰辖",
    "normalizedSearchText": "内蒙古赤峰辖辖内蒙古赤峰"
  },
  {
    "code": "150500",
    "name": "通辽市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 通辽市",
    "rank": 2,
    "normalizedName": "通辽",
    "normalizedValue": "内蒙古通辽",
    "normalizedSearchText": "内蒙古通辽通辽内蒙古"
  },
  {
    "code": "150502",
    "name": "科尔沁区",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 科尔沁区",
    "rank": 3,
    "normalizedName": "科尔沁",
    "normalizedValue": "内蒙古通辽科尔沁",
    "normalizedSearchText": "内蒙古通辽科尔沁科尔沁内蒙古通辽"
  },
  {
    "code": "150521",
    "name": "科尔沁左翼中旗",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 科尔沁左翼中旗",
    "rank": 3,
    "normalizedName": "科尔沁左翼中",
    "normalizedValue": "内蒙古通辽科尔沁左翼中",
    "normalizedSearchText": "内蒙古通辽科尔沁左翼中科尔沁左翼中内蒙古通辽"
  },
  {
    "code": "150522",
    "name": "科尔沁左翼后旗",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 科尔沁左翼后旗",
    "rank": 3,
    "normalizedName": "科尔沁左翼后",
    "normalizedValue": "内蒙古通辽科尔沁左翼后",
    "normalizedSearchText": "内蒙古通辽科尔沁左翼后科尔沁左翼后内蒙古通辽"
  },
  {
    "code": "150523",
    "name": "开鲁县",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 开鲁县",
    "rank": 3,
    "normalizedName": "开鲁",
    "normalizedValue": "内蒙古通辽开鲁",
    "normalizedSearchText": "内蒙古通辽开鲁开鲁内蒙古通辽"
  },
  {
    "code": "150524",
    "name": "库伦旗",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 库伦旗",
    "rank": 3,
    "normalizedName": "库伦",
    "normalizedValue": "内蒙古通辽库伦",
    "normalizedSearchText": "内蒙古通辽库伦库伦内蒙古通辽"
  },
  {
    "code": "150525",
    "name": "奈曼旗",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 奈曼旗",
    "rank": 3,
    "normalizedName": "奈曼",
    "normalizedValue": "内蒙古通辽奈曼",
    "normalizedSearchText": "内蒙古通辽奈曼奈曼内蒙古通辽"
  },
  {
    "code": "150526",
    "name": "扎鲁特旗",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 扎鲁特旗",
    "rank": 3,
    "normalizedName": "扎鲁特",
    "normalizedValue": "内蒙古通辽扎鲁特",
    "normalizedSearchText": "内蒙古通辽扎鲁特扎鲁特内蒙古通辽"
  },
  {
    "code": "150581",
    "name": "霍林郭勒市",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 霍林郭勒市",
    "rank": 3,
    "normalizedName": "霍林郭勒",
    "normalizedValue": "内蒙古通辽霍林郭勒",
    "normalizedSearchText": "内蒙古通辽霍林郭勒霍林郭勒内蒙古通辽"
  },
  {
    "code": "150501",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古通辽辖",
    "normalizedSearchText": "内蒙古通辽辖辖内蒙古通辽"
  },
  {
    "code": "150571",
    "name": "通辽经济技术开发区",
    "detail": "内蒙古自治区 / 通辽市",
    "value": "内蒙古自治区 / 通辽市 / 通辽经济技术开发区",
    "rank": 3,
    "normalizedName": "通辽经济技术开发",
    "normalizedValue": "内蒙古通辽通辽经济技术开发",
    "normalizedSearchText": "内蒙古通辽通辽经济技术开发通辽经济技术开发内蒙古通辽"
  },
  {
    "code": "150600",
    "name": "鄂尔多斯市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 鄂尔多斯市",
    "rank": 2,
    "normalizedName": "鄂尔多斯",
    "normalizedValue": "内蒙古鄂尔多斯",
    "normalizedSearchText": "内蒙古鄂尔多斯鄂尔多斯内蒙古"
  },
  {
    "code": "150602",
    "name": "东胜区",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 东胜区",
    "rank": 3,
    "normalizedName": "东胜",
    "normalizedValue": "内蒙古鄂尔多斯东胜",
    "normalizedSearchText": "内蒙古鄂尔多斯东胜东胜内蒙古鄂尔多斯"
  },
  {
    "code": "150603",
    "name": "康巴什区",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 康巴什区",
    "rank": 3,
    "normalizedName": "康巴什",
    "normalizedValue": "内蒙古鄂尔多斯康巴什",
    "normalizedSearchText": "内蒙古鄂尔多斯康巴什康巴什内蒙古鄂尔多斯"
  },
  {
    "code": "150621",
    "name": "达拉特旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 达拉特旗",
    "rank": 3,
    "normalizedName": "达拉特",
    "normalizedValue": "内蒙古鄂尔多斯达拉特",
    "normalizedSearchText": "内蒙古鄂尔多斯达拉特达拉特内蒙古鄂尔多斯"
  },
  {
    "code": "150622",
    "name": "准格尔旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 准格尔旗",
    "rank": 3,
    "normalizedName": "准格尔",
    "normalizedValue": "内蒙古鄂尔多斯准格尔",
    "normalizedSearchText": "内蒙古鄂尔多斯准格尔准格尔内蒙古鄂尔多斯"
  },
  {
    "code": "150623",
    "name": "鄂托克前旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 鄂托克前旗",
    "rank": 3,
    "normalizedName": "鄂托克前",
    "normalizedValue": "内蒙古鄂尔多斯鄂托克前",
    "normalizedSearchText": "内蒙古鄂尔多斯鄂托克前鄂托克前内蒙古鄂尔多斯"
  },
  {
    "code": "150624",
    "name": "鄂托克旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 鄂托克旗",
    "rank": 3,
    "normalizedName": "鄂托克",
    "normalizedValue": "内蒙古鄂尔多斯鄂托克",
    "normalizedSearchText": "内蒙古鄂尔多斯鄂托克鄂托克内蒙古鄂尔多斯"
  },
  {
    "code": "150625",
    "name": "杭锦旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 杭锦旗",
    "rank": 3,
    "normalizedName": "杭锦",
    "normalizedValue": "内蒙古鄂尔多斯杭锦",
    "normalizedSearchText": "内蒙古鄂尔多斯杭锦杭锦内蒙古鄂尔多斯"
  },
  {
    "code": "150626",
    "name": "乌审旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 乌审旗",
    "rank": 3,
    "normalizedName": "乌审",
    "normalizedValue": "内蒙古鄂尔多斯乌审",
    "normalizedSearchText": "内蒙古鄂尔多斯乌审乌审内蒙古鄂尔多斯"
  },
  {
    "code": "150627",
    "name": "伊金霍洛旗",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 伊金霍洛旗",
    "rank": 3,
    "normalizedName": "伊金霍洛",
    "normalizedValue": "内蒙古鄂尔多斯伊金霍洛",
    "normalizedSearchText": "内蒙古鄂尔多斯伊金霍洛伊金霍洛内蒙古鄂尔多斯"
  },
  {
    "code": "150601",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 鄂尔多斯市",
    "value": "内蒙古自治区 / 鄂尔多斯市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古鄂尔多斯辖",
    "normalizedSearchText": "内蒙古鄂尔多斯辖辖内蒙古鄂尔多斯"
  },
  {
    "code": "150700",
    "name": "呼伦贝尔市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 呼伦贝尔市",
    "rank": 2,
    "normalizedName": "呼伦贝尔",
    "normalizedValue": "内蒙古呼伦贝尔",
    "normalizedSearchText": "内蒙古呼伦贝尔呼伦贝尔内蒙古"
  },
  {
    "code": "150702",
    "name": "海拉尔区",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 海拉尔区",
    "rank": 3,
    "normalizedName": "海拉尔",
    "normalizedValue": "内蒙古呼伦贝尔海拉尔",
    "normalizedSearchText": "内蒙古呼伦贝尔海拉尔海拉尔内蒙古呼伦贝尔"
  },
  {
    "code": "150703",
    "name": "扎赉诺尔区",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 扎赉诺尔区",
    "rank": 3,
    "normalizedName": "扎赉诺尔",
    "normalizedValue": "内蒙古呼伦贝尔扎赉诺尔",
    "normalizedSearchText": "内蒙古呼伦贝尔扎赉诺尔扎赉诺尔内蒙古呼伦贝尔"
  },
  {
    "code": "150721",
    "name": "阿荣旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 阿荣旗",
    "rank": 3,
    "normalizedName": "阿荣",
    "normalizedValue": "内蒙古呼伦贝尔阿荣",
    "normalizedSearchText": "内蒙古呼伦贝尔阿荣阿荣内蒙古呼伦贝尔"
  },
  {
    "code": "150722",
    "name": "莫力达瓦达斡尔族自治旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 莫力达瓦达斡尔族自治旗",
    "rank": 3,
    "normalizedName": "莫力达瓦达斡尔族自治",
    "normalizedValue": "内蒙古呼伦贝尔莫力达瓦达斡尔族自治",
    "normalizedSearchText": "内蒙古呼伦贝尔莫力达瓦达斡尔族自治莫力达瓦达斡尔族自治内蒙古呼伦贝尔"
  },
  {
    "code": "150723",
    "name": "鄂伦春自治旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 鄂伦春自治旗",
    "rank": 3,
    "normalizedName": "鄂伦春自治",
    "normalizedValue": "内蒙古呼伦贝尔鄂伦春自治",
    "normalizedSearchText": "内蒙古呼伦贝尔鄂伦春自治鄂伦春自治内蒙古呼伦贝尔"
  },
  {
    "code": "150724",
    "name": "鄂温克族自治旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 鄂温克族自治旗",
    "rank": 3,
    "normalizedName": "鄂温克族自治",
    "normalizedValue": "内蒙古呼伦贝尔鄂温克族自治",
    "normalizedSearchText": "内蒙古呼伦贝尔鄂温克族自治鄂温克族自治内蒙古呼伦贝尔"
  },
  {
    "code": "150725",
    "name": "陈巴尔虎旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 陈巴尔虎旗",
    "rank": 3,
    "normalizedName": "陈巴尔虎",
    "normalizedValue": "内蒙古呼伦贝尔陈巴尔虎",
    "normalizedSearchText": "内蒙古呼伦贝尔陈巴尔虎陈巴尔虎内蒙古呼伦贝尔"
  },
  {
    "code": "150726",
    "name": "新巴尔虎左旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 新巴尔虎左旗",
    "rank": 3,
    "normalizedName": "新巴尔虎左",
    "normalizedValue": "内蒙古呼伦贝尔新巴尔虎左",
    "normalizedSearchText": "内蒙古呼伦贝尔新巴尔虎左新巴尔虎左内蒙古呼伦贝尔"
  },
  {
    "code": "150727",
    "name": "新巴尔虎右旗",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 新巴尔虎右旗",
    "rank": 3,
    "normalizedName": "新巴尔虎右",
    "normalizedValue": "内蒙古呼伦贝尔新巴尔虎右",
    "normalizedSearchText": "内蒙古呼伦贝尔新巴尔虎右新巴尔虎右内蒙古呼伦贝尔"
  },
  {
    "code": "150781",
    "name": "满洲里市",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 满洲里市",
    "rank": 3,
    "normalizedName": "满洲里",
    "normalizedValue": "内蒙古呼伦贝尔满洲里",
    "normalizedSearchText": "内蒙古呼伦贝尔满洲里满洲里内蒙古呼伦贝尔"
  },
  {
    "code": "150782",
    "name": "牙克石市",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 牙克石市",
    "rank": 3,
    "normalizedName": "牙克石",
    "normalizedValue": "内蒙古呼伦贝尔牙克石",
    "normalizedSearchText": "内蒙古呼伦贝尔牙克石牙克石内蒙古呼伦贝尔"
  },
  {
    "code": "150783",
    "name": "扎兰屯市",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 扎兰屯市",
    "rank": 3,
    "normalizedName": "扎兰屯",
    "normalizedValue": "内蒙古呼伦贝尔扎兰屯",
    "normalizedSearchText": "内蒙古呼伦贝尔扎兰屯扎兰屯内蒙古呼伦贝尔"
  },
  {
    "code": "150784",
    "name": "额尔古纳市",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 额尔古纳市",
    "rank": 3,
    "normalizedName": "额尔古纳",
    "normalizedValue": "内蒙古呼伦贝尔额尔古纳",
    "normalizedSearchText": "内蒙古呼伦贝尔额尔古纳额尔古纳内蒙古呼伦贝尔"
  },
  {
    "code": "150785",
    "name": "根河市",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 根河市",
    "rank": 3,
    "normalizedName": "根河",
    "normalizedValue": "内蒙古呼伦贝尔根河",
    "normalizedSearchText": "内蒙古呼伦贝尔根河根河内蒙古呼伦贝尔"
  },
  {
    "code": "150701",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 呼伦贝尔市",
    "value": "内蒙古自治区 / 呼伦贝尔市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古呼伦贝尔辖",
    "normalizedSearchText": "内蒙古呼伦贝尔辖辖内蒙古呼伦贝尔"
  },
  {
    "code": "150800",
    "name": "巴彦淖尔市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 巴彦淖尔市",
    "rank": 2,
    "normalizedName": "巴彦淖尔",
    "normalizedValue": "内蒙古巴彦淖尔",
    "normalizedSearchText": "内蒙古巴彦淖尔巴彦淖尔内蒙古"
  },
  {
    "code": "150802",
    "name": "临河区",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 临河区",
    "rank": 3,
    "normalizedName": "临河",
    "normalizedValue": "内蒙古巴彦淖尔临河",
    "normalizedSearchText": "内蒙古巴彦淖尔临河临河内蒙古巴彦淖尔"
  },
  {
    "code": "150821",
    "name": "五原县",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 五原县",
    "rank": 3,
    "normalizedName": "五原",
    "normalizedValue": "内蒙古巴彦淖尔五原",
    "normalizedSearchText": "内蒙古巴彦淖尔五原五原内蒙古巴彦淖尔"
  },
  {
    "code": "150822",
    "name": "磴口县",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 磴口县",
    "rank": 3,
    "normalizedName": "磴口",
    "normalizedValue": "内蒙古巴彦淖尔磴口",
    "normalizedSearchText": "内蒙古巴彦淖尔磴口磴口内蒙古巴彦淖尔"
  },
  {
    "code": "150823",
    "name": "乌拉特前旗",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 乌拉特前旗",
    "rank": 3,
    "normalizedName": "乌拉特前",
    "normalizedValue": "内蒙古巴彦淖尔乌拉特前",
    "normalizedSearchText": "内蒙古巴彦淖尔乌拉特前乌拉特前内蒙古巴彦淖尔"
  },
  {
    "code": "150824",
    "name": "乌拉特中旗",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 乌拉特中旗",
    "rank": 3,
    "normalizedName": "乌拉特中",
    "normalizedValue": "内蒙古巴彦淖尔乌拉特中",
    "normalizedSearchText": "内蒙古巴彦淖尔乌拉特中乌拉特中内蒙古巴彦淖尔"
  },
  {
    "code": "150825",
    "name": "乌拉特后旗",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 乌拉特后旗",
    "rank": 3,
    "normalizedName": "乌拉特后",
    "normalizedValue": "内蒙古巴彦淖尔乌拉特后",
    "normalizedSearchText": "内蒙古巴彦淖尔乌拉特后乌拉特后内蒙古巴彦淖尔"
  },
  {
    "code": "150826",
    "name": "杭锦后旗",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 杭锦后旗",
    "rank": 3,
    "normalizedName": "杭锦后",
    "normalizedValue": "内蒙古巴彦淖尔杭锦后",
    "normalizedSearchText": "内蒙古巴彦淖尔杭锦后杭锦后内蒙古巴彦淖尔"
  },
  {
    "code": "150801",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 巴彦淖尔市",
    "value": "内蒙古自治区 / 巴彦淖尔市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古巴彦淖尔辖",
    "normalizedSearchText": "内蒙古巴彦淖尔辖辖内蒙古巴彦淖尔"
  },
  {
    "code": "150900",
    "name": "乌兰察布市",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 乌兰察布市",
    "rank": 2,
    "normalizedName": "乌兰察布",
    "normalizedValue": "内蒙古乌兰察布",
    "normalizedSearchText": "内蒙古乌兰察布乌兰察布内蒙古"
  },
  {
    "code": "150902",
    "name": "集宁区",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 集宁区",
    "rank": 3,
    "normalizedName": "集宁",
    "normalizedValue": "内蒙古乌兰察布集宁",
    "normalizedSearchText": "内蒙古乌兰察布集宁集宁内蒙古乌兰察布"
  },
  {
    "code": "150921",
    "name": "卓资县",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 卓资县",
    "rank": 3,
    "normalizedName": "卓资",
    "normalizedValue": "内蒙古乌兰察布卓资",
    "normalizedSearchText": "内蒙古乌兰察布卓资卓资内蒙古乌兰察布"
  },
  {
    "code": "150922",
    "name": "化德县",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 化德县",
    "rank": 3,
    "normalizedName": "化德",
    "normalizedValue": "内蒙古乌兰察布化德",
    "normalizedSearchText": "内蒙古乌兰察布化德化德内蒙古乌兰察布"
  },
  {
    "code": "150923",
    "name": "商都县",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 商都县",
    "rank": 3,
    "normalizedName": "商都",
    "normalizedValue": "内蒙古乌兰察布商都",
    "normalizedSearchText": "内蒙古乌兰察布商都商都内蒙古乌兰察布"
  },
  {
    "code": "150924",
    "name": "兴和县",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 兴和县",
    "rank": 3,
    "normalizedName": "兴和",
    "normalizedValue": "内蒙古乌兰察布兴和",
    "normalizedSearchText": "内蒙古乌兰察布兴和兴和内蒙古乌兰察布"
  },
  {
    "code": "150925",
    "name": "凉城县",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 凉城县",
    "rank": 3,
    "normalizedName": "凉城",
    "normalizedValue": "内蒙古乌兰察布凉城",
    "normalizedSearchText": "内蒙古乌兰察布凉城凉城内蒙古乌兰察布"
  },
  {
    "code": "150926",
    "name": "察哈尔右翼前旗",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 察哈尔右翼前旗",
    "rank": 3,
    "normalizedName": "察哈尔右翼前",
    "normalizedValue": "内蒙古乌兰察布察哈尔右翼前",
    "normalizedSearchText": "内蒙古乌兰察布察哈尔右翼前察哈尔右翼前内蒙古乌兰察布"
  },
  {
    "code": "150927",
    "name": "察哈尔右翼中旗",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 察哈尔右翼中旗",
    "rank": 3,
    "normalizedName": "察哈尔右翼中",
    "normalizedValue": "内蒙古乌兰察布察哈尔右翼中",
    "normalizedSearchText": "内蒙古乌兰察布察哈尔右翼中察哈尔右翼中内蒙古乌兰察布"
  },
  {
    "code": "150928",
    "name": "察哈尔右翼后旗",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 察哈尔右翼后旗",
    "rank": 3,
    "normalizedName": "察哈尔右翼后",
    "normalizedValue": "内蒙古乌兰察布察哈尔右翼后",
    "normalizedSearchText": "内蒙古乌兰察布察哈尔右翼后察哈尔右翼后内蒙古乌兰察布"
  },
  {
    "code": "150929",
    "name": "四子王旗",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 四子王旗",
    "rank": 3,
    "normalizedName": "四子王",
    "normalizedValue": "内蒙古乌兰察布四子王",
    "normalizedSearchText": "内蒙古乌兰察布四子王四子王内蒙古乌兰察布"
  },
  {
    "code": "150981",
    "name": "丰镇市",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 丰镇市",
    "rank": 3,
    "normalizedName": "丰",
    "normalizedValue": "内蒙古乌兰察布丰",
    "normalizedSearchText": "内蒙古乌兰察布丰丰内蒙古乌兰察布"
  },
  {
    "code": "150901",
    "name": "市辖区",
    "detail": "内蒙古自治区 / 乌兰察布市",
    "value": "内蒙古自治区 / 乌兰察布市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "内蒙古乌兰察布辖",
    "normalizedSearchText": "内蒙古乌兰察布辖辖内蒙古乌兰察布"
  },
  {
    "code": "152200",
    "name": "兴安盟",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 兴安盟",
    "rank": 2,
    "normalizedName": "兴安",
    "normalizedValue": "内蒙古兴安",
    "normalizedSearchText": "内蒙古兴安兴安内蒙古"
  },
  {
    "code": "152201",
    "name": "乌兰浩特市",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 乌兰浩特市",
    "rank": 3,
    "normalizedName": "乌兰浩特",
    "normalizedValue": "内蒙古兴安乌兰浩特",
    "normalizedSearchText": "内蒙古兴安乌兰浩特乌兰浩特内蒙古兴安"
  },
  {
    "code": "152202",
    "name": "阿尔山市",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 阿尔山市",
    "rank": 3,
    "normalizedName": "阿尔山",
    "normalizedValue": "内蒙古兴安阿尔山",
    "normalizedSearchText": "内蒙古兴安阿尔山阿尔山内蒙古兴安"
  },
  {
    "code": "152221",
    "name": "科尔沁右翼前旗",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 科尔沁右翼前旗",
    "rank": 3,
    "normalizedName": "科尔沁右翼前",
    "normalizedValue": "内蒙古兴安科尔沁右翼前",
    "normalizedSearchText": "内蒙古兴安科尔沁右翼前科尔沁右翼前内蒙古兴安"
  },
  {
    "code": "152222",
    "name": "科尔沁右翼中旗",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 科尔沁右翼中旗",
    "rank": 3,
    "normalizedName": "科尔沁右翼中",
    "normalizedValue": "内蒙古兴安科尔沁右翼中",
    "normalizedSearchText": "内蒙古兴安科尔沁右翼中科尔沁右翼中内蒙古兴安"
  },
  {
    "code": "152223",
    "name": "扎赉特旗",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 扎赉特旗",
    "rank": 3,
    "normalizedName": "扎赉特",
    "normalizedValue": "内蒙古兴安扎赉特",
    "normalizedSearchText": "内蒙古兴安扎赉特扎赉特内蒙古兴安"
  },
  {
    "code": "152224",
    "name": "突泉县",
    "detail": "内蒙古自治区 / 兴安盟",
    "value": "内蒙古自治区 / 兴安盟 / 突泉县",
    "rank": 3,
    "normalizedName": "突泉",
    "normalizedValue": "内蒙古兴安突泉",
    "normalizedSearchText": "内蒙古兴安突泉突泉内蒙古兴安"
  },
  {
    "code": "152500",
    "name": "锡林郭勒盟",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 锡林郭勒盟",
    "rank": 2,
    "normalizedName": "锡林郭勒",
    "normalizedValue": "内蒙古锡林郭勒",
    "normalizedSearchText": "内蒙古锡林郭勒锡林郭勒内蒙古"
  },
  {
    "code": "152501",
    "name": "二连浩特市",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 二连浩特市",
    "rank": 3,
    "normalizedName": "二连浩特",
    "normalizedValue": "内蒙古锡林郭勒二连浩特",
    "normalizedSearchText": "内蒙古锡林郭勒二连浩特二连浩特内蒙古锡林郭勒"
  },
  {
    "code": "152502",
    "name": "锡林浩特市",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 锡林浩特市",
    "rank": 3,
    "normalizedName": "锡林浩特",
    "normalizedValue": "内蒙古锡林郭勒锡林浩特",
    "normalizedSearchText": "内蒙古锡林郭勒锡林浩特锡林浩特内蒙古锡林郭勒"
  },
  {
    "code": "152522",
    "name": "阿巴嘎旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 阿巴嘎旗",
    "rank": 3,
    "normalizedName": "阿巴嘎",
    "normalizedValue": "内蒙古锡林郭勒阿巴嘎",
    "normalizedSearchText": "内蒙古锡林郭勒阿巴嘎阿巴嘎内蒙古锡林郭勒"
  },
  {
    "code": "152523",
    "name": "苏尼特左旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 苏尼特左旗",
    "rank": 3,
    "normalizedName": "苏尼特左",
    "normalizedValue": "内蒙古锡林郭勒苏尼特左",
    "normalizedSearchText": "内蒙古锡林郭勒苏尼特左苏尼特左内蒙古锡林郭勒"
  },
  {
    "code": "152524",
    "name": "苏尼特右旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 苏尼特右旗",
    "rank": 3,
    "normalizedName": "苏尼特右",
    "normalizedValue": "内蒙古锡林郭勒苏尼特右",
    "normalizedSearchText": "内蒙古锡林郭勒苏尼特右苏尼特右内蒙古锡林郭勒"
  },
  {
    "code": "152525",
    "name": "东乌珠穆沁旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 东乌珠穆沁旗",
    "rank": 3,
    "normalizedName": "东乌珠穆沁",
    "normalizedValue": "内蒙古锡林郭勒东乌珠穆沁",
    "normalizedSearchText": "内蒙古锡林郭勒东乌珠穆沁东乌珠穆沁内蒙古锡林郭勒"
  },
  {
    "code": "152526",
    "name": "西乌珠穆沁旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 西乌珠穆沁旗",
    "rank": 3,
    "normalizedName": "西乌珠穆沁",
    "normalizedValue": "内蒙古锡林郭勒西乌珠穆沁",
    "normalizedSearchText": "内蒙古锡林郭勒西乌珠穆沁西乌珠穆沁内蒙古锡林郭勒"
  },
  {
    "code": "152527",
    "name": "太仆寺旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 太仆寺旗",
    "rank": 3,
    "normalizedName": "太仆寺",
    "normalizedValue": "内蒙古锡林郭勒太仆寺",
    "normalizedSearchText": "内蒙古锡林郭勒太仆寺太仆寺内蒙古锡林郭勒"
  },
  {
    "code": "152528",
    "name": "镶黄旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 镶黄旗",
    "rank": 3,
    "normalizedName": "镶黄",
    "normalizedValue": "内蒙古锡林郭勒镶黄",
    "normalizedSearchText": "内蒙古锡林郭勒镶黄镶黄内蒙古锡林郭勒"
  },
  {
    "code": "152529",
    "name": "正镶白旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 正镶白旗",
    "rank": 3,
    "normalizedName": "正镶白",
    "normalizedValue": "内蒙古锡林郭勒正镶白",
    "normalizedSearchText": "内蒙古锡林郭勒正镶白正镶白内蒙古锡林郭勒"
  },
  {
    "code": "152530",
    "name": "正蓝旗",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 正蓝旗",
    "rank": 3,
    "normalizedName": "正蓝",
    "normalizedValue": "内蒙古锡林郭勒正蓝",
    "normalizedSearchText": "内蒙古锡林郭勒正蓝正蓝内蒙古锡林郭勒"
  },
  {
    "code": "152531",
    "name": "多伦县",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 多伦县",
    "rank": 3,
    "normalizedName": "多伦",
    "normalizedValue": "内蒙古锡林郭勒多伦",
    "normalizedSearchText": "内蒙古锡林郭勒多伦多伦内蒙古锡林郭勒"
  },
  {
    "code": "152571",
    "name": "乌拉盖管委会",
    "detail": "内蒙古自治区 / 锡林郭勒盟",
    "value": "内蒙古自治区 / 锡林郭勒盟 / 乌拉盖管委会",
    "rank": 3,
    "normalizedName": "乌拉盖管委会",
    "normalizedValue": "内蒙古锡林郭勒乌拉盖管委会",
    "normalizedSearchText": "内蒙古锡林郭勒乌拉盖管委会乌拉盖管委会内蒙古锡林郭勒"
  },
  {
    "code": "152900",
    "name": "阿拉善盟",
    "detail": "内蒙古自治区",
    "value": "内蒙古自治区 / 阿拉善盟",
    "rank": 2,
    "normalizedName": "阿拉善",
    "normalizedValue": "内蒙古阿拉善",
    "normalizedSearchText": "内蒙古阿拉善阿拉善内蒙古"
  },
  {
    "code": "152921",
    "name": "阿拉善左旗",
    "detail": "内蒙古自治区 / 阿拉善盟",
    "value": "内蒙古自治区 / 阿拉善盟 / 阿拉善左旗",
    "rank": 3,
    "normalizedName": "阿拉善左",
    "normalizedValue": "内蒙古阿拉善阿拉善左",
    "normalizedSearchText": "内蒙古阿拉善阿拉善左阿拉善左内蒙古阿拉善"
  },
  {
    "code": "152922",
    "name": "阿拉善右旗",
    "detail": "内蒙古自治区 / 阿拉善盟",
    "value": "内蒙古自治区 / 阿拉善盟 / 阿拉善右旗",
    "rank": 3,
    "normalizedName": "阿拉善右",
    "normalizedValue": "内蒙古阿拉善阿拉善右",
    "normalizedSearchText": "内蒙古阿拉善阿拉善右阿拉善右内蒙古阿拉善"
  },
  {
    "code": "152923",
    "name": "额济纳旗",
    "detail": "内蒙古自治区 / 阿拉善盟",
    "value": "内蒙古自治区 / 阿拉善盟 / 额济纳旗",
    "rank": 3,
    "normalizedName": "额济纳",
    "normalizedValue": "内蒙古阿拉善额济纳",
    "normalizedSearchText": "内蒙古阿拉善额济纳额济纳内蒙古阿拉善"
  },
  {
    "code": "152971",
    "name": "内蒙古阿拉善高新技术产业开发区",
    "detail": "内蒙古自治区 / 阿拉善盟",
    "value": "内蒙古自治区 / 阿拉善盟 / 内蒙古阿拉善高新技术产业开发区",
    "rank": 3,
    "normalizedName": "内蒙古阿拉善高新技术产业开发",
    "normalizedValue": "内蒙古阿拉善内蒙古阿拉善高新技术产业开发",
    "normalizedSearchText": "内蒙古阿拉善内蒙古阿拉善高新技术产业开发内蒙古阿拉善高新技术产业开发内蒙古阿拉善"
  },
  {
    "code": "210000",
    "name": "辽宁省",
    "detail": "?????",
    "value": "辽宁省",
    "rank": 1,
    "normalizedName": "辽宁",
    "normalizedValue": "辽宁",
    "normalizedSearchText": "辽宁辽宁"
  },
  {
    "code": "210100",
    "name": "沈阳市",
    "detail": "辽宁省",
    "value": "辽宁省 / 沈阳市",
    "rank": 2,
    "normalizedName": "沈阳",
    "normalizedValue": "辽宁沈阳",
    "normalizedSearchText": "辽宁沈阳沈阳辽宁"
  },
  {
    "code": "210102",
    "name": "和平区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 和平区",
    "rank": 3,
    "normalizedName": "和平",
    "normalizedValue": "辽宁沈阳和平",
    "normalizedSearchText": "辽宁沈阳和平和平辽宁沈阳"
  },
  {
    "code": "210103",
    "name": "沈河区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 沈河区",
    "rank": 3,
    "normalizedName": "沈河",
    "normalizedValue": "辽宁沈阳沈河",
    "normalizedSearchText": "辽宁沈阳沈河沈河辽宁沈阳"
  },
  {
    "code": "210104",
    "name": "大东区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 大东区",
    "rank": 3,
    "normalizedName": "大东",
    "normalizedValue": "辽宁沈阳大东",
    "normalizedSearchText": "辽宁沈阳大东大东辽宁沈阳"
  },
  {
    "code": "210105",
    "name": "皇姑区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 皇姑区",
    "rank": 3,
    "normalizedName": "皇姑",
    "normalizedValue": "辽宁沈阳皇姑",
    "normalizedSearchText": "辽宁沈阳皇姑皇姑辽宁沈阳"
  },
  {
    "code": "210106",
    "name": "铁西区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 铁西区",
    "rank": 3,
    "normalizedName": "铁西",
    "normalizedValue": "辽宁沈阳铁西",
    "normalizedSearchText": "辽宁沈阳铁西铁西辽宁沈阳"
  },
  {
    "code": "210111",
    "name": "苏家屯区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 苏家屯区",
    "rank": 3,
    "normalizedName": "苏家屯",
    "normalizedValue": "辽宁沈阳苏家屯",
    "normalizedSearchText": "辽宁沈阳苏家屯苏家屯辽宁沈阳"
  },
  {
    "code": "210112",
    "name": "浑南区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 浑南区",
    "rank": 3,
    "normalizedName": "浑南",
    "normalizedValue": "辽宁沈阳浑南",
    "normalizedSearchText": "辽宁沈阳浑南浑南辽宁沈阳"
  },
  {
    "code": "210113",
    "name": "沈北新区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 沈北新区",
    "rank": 3,
    "normalizedName": "沈北新",
    "normalizedValue": "辽宁沈阳沈北新",
    "normalizedSearchText": "辽宁沈阳沈北新沈北新辽宁沈阳"
  },
  {
    "code": "210114",
    "name": "于洪区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 于洪区",
    "rank": 3,
    "normalizedName": "于洪",
    "normalizedValue": "辽宁沈阳于洪",
    "normalizedSearchText": "辽宁沈阳于洪于洪辽宁沈阳"
  },
  {
    "code": "210115",
    "name": "辽中区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 辽中区",
    "rank": 3,
    "normalizedName": "辽中",
    "normalizedValue": "辽宁沈阳辽中",
    "normalizedSearchText": "辽宁沈阳辽中辽中辽宁沈阳"
  },
  {
    "code": "210123",
    "name": "康平县",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 康平县",
    "rank": 3,
    "normalizedName": "康平",
    "normalizedValue": "辽宁沈阳康平",
    "normalizedSearchText": "辽宁沈阳康平康平辽宁沈阳"
  },
  {
    "code": "210124",
    "name": "法库县",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 法库县",
    "rank": 3,
    "normalizedName": "法库",
    "normalizedValue": "辽宁沈阳法库",
    "normalizedSearchText": "辽宁沈阳法库法库辽宁沈阳"
  },
  {
    "code": "210181",
    "name": "新民市",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 新民市",
    "rank": 3,
    "normalizedName": "新民",
    "normalizedValue": "辽宁沈阳新民",
    "normalizedSearchText": "辽宁沈阳新民新民辽宁沈阳"
  },
  {
    "code": "210101",
    "name": "市辖区",
    "detail": "辽宁省 / 沈阳市",
    "value": "辽宁省 / 沈阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁沈阳辖",
    "normalizedSearchText": "辽宁沈阳辖辖辽宁沈阳"
  },
  {
    "code": "210200",
    "name": "大连市",
    "detail": "辽宁省",
    "value": "辽宁省 / 大连市",
    "rank": 2,
    "normalizedName": "大连",
    "normalizedValue": "辽宁大连",
    "normalizedSearchText": "辽宁大连大连辽宁"
  },
  {
    "code": "210202",
    "name": "中山区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 中山区",
    "rank": 3,
    "normalizedName": "中山",
    "normalizedValue": "辽宁大连中山",
    "normalizedSearchText": "辽宁大连中山中山辽宁大连"
  },
  {
    "code": "210203",
    "name": "西岗区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 西岗区",
    "rank": 3,
    "normalizedName": "西岗",
    "normalizedValue": "辽宁大连西岗",
    "normalizedSearchText": "辽宁大连西岗西岗辽宁大连"
  },
  {
    "code": "210204",
    "name": "沙河口区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 沙河口区",
    "rank": 3,
    "normalizedName": "沙河口",
    "normalizedValue": "辽宁大连沙河口",
    "normalizedSearchText": "辽宁大连沙河口沙河口辽宁大连"
  },
  {
    "code": "210211",
    "name": "甘井子区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 甘井子区",
    "rank": 3,
    "normalizedName": "甘井子",
    "normalizedValue": "辽宁大连甘井子",
    "normalizedSearchText": "辽宁大连甘井子甘井子辽宁大连"
  },
  {
    "code": "210212",
    "name": "旅顺口区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 旅顺口区",
    "rank": 3,
    "normalizedName": "旅顺口",
    "normalizedValue": "辽宁大连旅顺口",
    "normalizedSearchText": "辽宁大连旅顺口旅顺口辽宁大连"
  },
  {
    "code": "210213",
    "name": "金州区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 金州区",
    "rank": 3,
    "normalizedName": "金州",
    "normalizedValue": "辽宁大连金州",
    "normalizedSearchText": "辽宁大连金州金州辽宁大连"
  },
  {
    "code": "210214",
    "name": "普兰店区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 普兰店区",
    "rank": 3,
    "normalizedName": "普兰店",
    "normalizedValue": "辽宁大连普兰店",
    "normalizedSearchText": "辽宁大连普兰店普兰店辽宁大连"
  },
  {
    "code": "210224",
    "name": "长海县",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 长海县",
    "rank": 3,
    "normalizedName": "长海",
    "normalizedValue": "辽宁大连长海",
    "normalizedSearchText": "辽宁大连长海长海辽宁大连"
  },
  {
    "code": "210281",
    "name": "瓦房店市",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 瓦房店市",
    "rank": 3,
    "normalizedName": "瓦房店",
    "normalizedValue": "辽宁大连瓦房店",
    "normalizedSearchText": "辽宁大连瓦房店瓦房店辽宁大连"
  },
  {
    "code": "210283",
    "name": "庄河市",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 庄河市",
    "rank": 3,
    "normalizedName": "庄河",
    "normalizedValue": "辽宁大连庄河",
    "normalizedSearchText": "辽宁大连庄河庄河辽宁大连"
  },
  {
    "code": "210201",
    "name": "市辖区",
    "detail": "辽宁省 / 大连市",
    "value": "辽宁省 / 大连市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁大连辖",
    "normalizedSearchText": "辽宁大连辖辖辽宁大连"
  },
  {
    "code": "210300",
    "name": "鞍山市",
    "detail": "辽宁省",
    "value": "辽宁省 / 鞍山市",
    "rank": 2,
    "normalizedName": "鞍山",
    "normalizedValue": "辽宁鞍山",
    "normalizedSearchText": "辽宁鞍山鞍山辽宁"
  },
  {
    "code": "210302",
    "name": "铁东区",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 铁东区",
    "rank": 3,
    "normalizedName": "铁东",
    "normalizedValue": "辽宁鞍山铁东",
    "normalizedSearchText": "辽宁鞍山铁东铁东辽宁鞍山"
  },
  {
    "code": "210303",
    "name": "铁西区",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 铁西区",
    "rank": 3,
    "normalizedName": "铁西",
    "normalizedValue": "辽宁鞍山铁西",
    "normalizedSearchText": "辽宁鞍山铁西铁西辽宁鞍山"
  },
  {
    "code": "210304",
    "name": "立山区",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 立山区",
    "rank": 3,
    "normalizedName": "立山",
    "normalizedValue": "辽宁鞍山立山",
    "normalizedSearchText": "辽宁鞍山立山立山辽宁鞍山"
  },
  {
    "code": "210311",
    "name": "千山区",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 千山区",
    "rank": 3,
    "normalizedName": "千山",
    "normalizedValue": "辽宁鞍山千山",
    "normalizedSearchText": "辽宁鞍山千山千山辽宁鞍山"
  },
  {
    "code": "210321",
    "name": "台安县",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 台安县",
    "rank": 3,
    "normalizedName": "台安",
    "normalizedValue": "辽宁鞍山台安",
    "normalizedSearchText": "辽宁鞍山台安台安辽宁鞍山"
  },
  {
    "code": "210323",
    "name": "岫岩满族自治县",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 岫岩满族自治县",
    "rank": 3,
    "normalizedName": "岫岩满族自治",
    "normalizedValue": "辽宁鞍山岫岩满族自治",
    "normalizedSearchText": "辽宁鞍山岫岩满族自治岫岩满族自治辽宁鞍山"
  },
  {
    "code": "210381",
    "name": "海城市",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 海城市",
    "rank": 3,
    "normalizedName": "海城",
    "normalizedValue": "辽宁鞍山海城",
    "normalizedSearchText": "辽宁鞍山海城海城辽宁鞍山"
  },
  {
    "code": "210301",
    "name": "市辖区",
    "detail": "辽宁省 / 鞍山市",
    "value": "辽宁省 / 鞍山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁鞍山辖",
    "normalizedSearchText": "辽宁鞍山辖辖辽宁鞍山"
  },
  {
    "code": "210400",
    "name": "抚顺市",
    "detail": "辽宁省",
    "value": "辽宁省 / 抚顺市",
    "rank": 2,
    "normalizedName": "抚顺",
    "normalizedValue": "辽宁抚顺",
    "normalizedSearchText": "辽宁抚顺抚顺辽宁"
  },
  {
    "code": "210402",
    "name": "新抚区",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 新抚区",
    "rank": 3,
    "normalizedName": "新抚",
    "normalizedValue": "辽宁抚顺新抚",
    "normalizedSearchText": "辽宁抚顺新抚新抚辽宁抚顺"
  },
  {
    "code": "210403",
    "name": "东洲区",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 东洲区",
    "rank": 3,
    "normalizedName": "东洲",
    "normalizedValue": "辽宁抚顺东洲",
    "normalizedSearchText": "辽宁抚顺东洲东洲辽宁抚顺"
  },
  {
    "code": "210404",
    "name": "望花区",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 望花区",
    "rank": 3,
    "normalizedName": "望花",
    "normalizedValue": "辽宁抚顺望花",
    "normalizedSearchText": "辽宁抚顺望花望花辽宁抚顺"
  },
  {
    "code": "210411",
    "name": "顺城区",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 顺城区",
    "rank": 3,
    "normalizedName": "顺城",
    "normalizedValue": "辽宁抚顺顺城",
    "normalizedSearchText": "辽宁抚顺顺城顺城辽宁抚顺"
  },
  {
    "code": "210421",
    "name": "抚顺县",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 抚顺县",
    "rank": 3,
    "normalizedName": "抚顺",
    "normalizedValue": "辽宁抚顺抚顺",
    "normalizedSearchText": "辽宁抚顺抚顺抚顺辽宁抚顺"
  },
  {
    "code": "210422",
    "name": "新宾满族自治县",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 新宾满族自治县",
    "rank": 3,
    "normalizedName": "新宾满族自治",
    "normalizedValue": "辽宁抚顺新宾满族自治",
    "normalizedSearchText": "辽宁抚顺新宾满族自治新宾满族自治辽宁抚顺"
  },
  {
    "code": "210423",
    "name": "清原满族自治县",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 清原满族自治县",
    "rank": 3,
    "normalizedName": "清原满族自治",
    "normalizedValue": "辽宁抚顺清原满族自治",
    "normalizedSearchText": "辽宁抚顺清原满族自治清原满族自治辽宁抚顺"
  },
  {
    "code": "210401",
    "name": "市辖区",
    "detail": "辽宁省 / 抚顺市",
    "value": "辽宁省 / 抚顺市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁抚顺辖",
    "normalizedSearchText": "辽宁抚顺辖辖辽宁抚顺"
  },
  {
    "code": "210500",
    "name": "本溪市",
    "detail": "辽宁省",
    "value": "辽宁省 / 本溪市",
    "rank": 2,
    "normalizedName": "本溪",
    "normalizedValue": "辽宁本溪",
    "normalizedSearchText": "辽宁本溪本溪辽宁"
  },
  {
    "code": "210502",
    "name": "平山区",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 平山区",
    "rank": 3,
    "normalizedName": "平山",
    "normalizedValue": "辽宁本溪平山",
    "normalizedSearchText": "辽宁本溪平山平山辽宁本溪"
  },
  {
    "code": "210503",
    "name": "溪湖区",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 溪湖区",
    "rank": 3,
    "normalizedName": "溪湖",
    "normalizedValue": "辽宁本溪溪湖",
    "normalizedSearchText": "辽宁本溪溪湖溪湖辽宁本溪"
  },
  {
    "code": "210504",
    "name": "明山区",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 明山区",
    "rank": 3,
    "normalizedName": "明山",
    "normalizedValue": "辽宁本溪明山",
    "normalizedSearchText": "辽宁本溪明山明山辽宁本溪"
  },
  {
    "code": "210505",
    "name": "南芬区",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 南芬区",
    "rank": 3,
    "normalizedName": "南芬",
    "normalizedValue": "辽宁本溪南芬",
    "normalizedSearchText": "辽宁本溪南芬南芬辽宁本溪"
  },
  {
    "code": "210521",
    "name": "本溪满族自治县",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 本溪满族自治县",
    "rank": 3,
    "normalizedName": "本溪满族自治",
    "normalizedValue": "辽宁本溪本溪满族自治",
    "normalizedSearchText": "辽宁本溪本溪满族自治本溪满族自治辽宁本溪"
  },
  {
    "code": "210522",
    "name": "桓仁满族自治县",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 桓仁满族自治县",
    "rank": 3,
    "normalizedName": "桓仁满族自治",
    "normalizedValue": "辽宁本溪桓仁满族自治",
    "normalizedSearchText": "辽宁本溪桓仁满族自治桓仁满族自治辽宁本溪"
  },
  {
    "code": "210501",
    "name": "市辖区",
    "detail": "辽宁省 / 本溪市",
    "value": "辽宁省 / 本溪市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁本溪辖",
    "normalizedSearchText": "辽宁本溪辖辖辽宁本溪"
  },
  {
    "code": "210600",
    "name": "丹东市",
    "detail": "辽宁省",
    "value": "辽宁省 / 丹东市",
    "rank": 2,
    "normalizedName": "丹东",
    "normalizedValue": "辽宁丹东",
    "normalizedSearchText": "辽宁丹东丹东辽宁"
  },
  {
    "code": "210602",
    "name": "元宝区",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 元宝区",
    "rank": 3,
    "normalizedName": "元宝",
    "normalizedValue": "辽宁丹东元宝",
    "normalizedSearchText": "辽宁丹东元宝元宝辽宁丹东"
  },
  {
    "code": "210603",
    "name": "振兴区",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 振兴区",
    "rank": 3,
    "normalizedName": "振兴",
    "normalizedValue": "辽宁丹东振兴",
    "normalizedSearchText": "辽宁丹东振兴振兴辽宁丹东"
  },
  {
    "code": "210604",
    "name": "振安区",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 振安区",
    "rank": 3,
    "normalizedName": "振安",
    "normalizedValue": "辽宁丹东振安",
    "normalizedSearchText": "辽宁丹东振安振安辽宁丹东"
  },
  {
    "code": "210624",
    "name": "宽甸满族自治县",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 宽甸满族自治县",
    "rank": 3,
    "normalizedName": "宽甸满族自治",
    "normalizedValue": "辽宁丹东宽甸满族自治",
    "normalizedSearchText": "辽宁丹东宽甸满族自治宽甸满族自治辽宁丹东"
  },
  {
    "code": "210681",
    "name": "东港市",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 东港市",
    "rank": 3,
    "normalizedName": "东港",
    "normalizedValue": "辽宁丹东东港",
    "normalizedSearchText": "辽宁丹东东港东港辽宁丹东"
  },
  {
    "code": "210682",
    "name": "凤城市",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 凤城市",
    "rank": 3,
    "normalizedName": "凤城",
    "normalizedValue": "辽宁丹东凤城",
    "normalizedSearchText": "辽宁丹东凤城凤城辽宁丹东"
  },
  {
    "code": "210601",
    "name": "市辖区",
    "detail": "辽宁省 / 丹东市",
    "value": "辽宁省 / 丹东市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁丹东辖",
    "normalizedSearchText": "辽宁丹东辖辖辽宁丹东"
  },
  {
    "code": "210700",
    "name": "锦州市",
    "detail": "辽宁省",
    "value": "辽宁省 / 锦州市",
    "rank": 2,
    "normalizedName": "锦州",
    "normalizedValue": "辽宁锦州",
    "normalizedSearchText": "辽宁锦州锦州辽宁"
  },
  {
    "code": "210702",
    "name": "古塔区",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 古塔区",
    "rank": 3,
    "normalizedName": "古塔",
    "normalizedValue": "辽宁锦州古塔",
    "normalizedSearchText": "辽宁锦州古塔古塔辽宁锦州"
  },
  {
    "code": "210703",
    "name": "凌河区",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 凌河区",
    "rank": 3,
    "normalizedName": "凌河",
    "normalizedValue": "辽宁锦州凌河",
    "normalizedSearchText": "辽宁锦州凌河凌河辽宁锦州"
  },
  {
    "code": "210711",
    "name": "太和区",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 太和区",
    "rank": 3,
    "normalizedName": "太和",
    "normalizedValue": "辽宁锦州太和",
    "normalizedSearchText": "辽宁锦州太和太和辽宁锦州"
  },
  {
    "code": "210726",
    "name": "黑山县",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 黑山县",
    "rank": 3,
    "normalizedName": "黑山",
    "normalizedValue": "辽宁锦州黑山",
    "normalizedSearchText": "辽宁锦州黑山黑山辽宁锦州"
  },
  {
    "code": "210727",
    "name": "义县",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 义县",
    "rank": 3,
    "normalizedName": "义",
    "normalizedValue": "辽宁锦州义",
    "normalizedSearchText": "辽宁锦州义义辽宁锦州"
  },
  {
    "code": "210781",
    "name": "凌海市",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 凌海市",
    "rank": 3,
    "normalizedName": "凌海",
    "normalizedValue": "辽宁锦州凌海",
    "normalizedSearchText": "辽宁锦州凌海凌海辽宁锦州"
  },
  {
    "code": "210782",
    "name": "北镇市",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 北镇市",
    "rank": 3,
    "normalizedName": "北",
    "normalizedValue": "辽宁锦州北",
    "normalizedSearchText": "辽宁锦州北北辽宁锦州"
  },
  {
    "code": "210701",
    "name": "市辖区",
    "detail": "辽宁省 / 锦州市",
    "value": "辽宁省 / 锦州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁锦州辖",
    "normalizedSearchText": "辽宁锦州辖辖辽宁锦州"
  },
  {
    "code": "210800",
    "name": "营口市",
    "detail": "辽宁省",
    "value": "辽宁省 / 营口市",
    "rank": 2,
    "normalizedName": "营口",
    "normalizedValue": "辽宁营口",
    "normalizedSearchText": "辽宁营口营口辽宁"
  },
  {
    "code": "210802",
    "name": "站前区",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 站前区",
    "rank": 3,
    "normalizedName": "站前",
    "normalizedValue": "辽宁营口站前",
    "normalizedSearchText": "辽宁营口站前站前辽宁营口"
  },
  {
    "code": "210803",
    "name": "西市区",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 西市区",
    "rank": 3,
    "normalizedName": "西",
    "normalizedValue": "辽宁营口西",
    "normalizedSearchText": "辽宁营口西西辽宁营口"
  },
  {
    "code": "210804",
    "name": "鲅鱼圈区",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 鲅鱼圈区",
    "rank": 3,
    "normalizedName": "鲅鱼圈",
    "normalizedValue": "辽宁营口鲅鱼圈",
    "normalizedSearchText": "辽宁营口鲅鱼圈鲅鱼圈辽宁营口"
  },
  {
    "code": "210811",
    "name": "老边区",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 老边区",
    "rank": 3,
    "normalizedName": "老边",
    "normalizedValue": "辽宁营口老边",
    "normalizedSearchText": "辽宁营口老边老边辽宁营口"
  },
  {
    "code": "210881",
    "name": "盖州市",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 盖州市",
    "rank": 3,
    "normalizedName": "盖州",
    "normalizedValue": "辽宁营口盖州",
    "normalizedSearchText": "辽宁营口盖州盖州辽宁营口"
  },
  {
    "code": "210882",
    "name": "大石桥市",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 大石桥市",
    "rank": 3,
    "normalizedName": "大石桥",
    "normalizedValue": "辽宁营口大石桥",
    "normalizedSearchText": "辽宁营口大石桥大石桥辽宁营口"
  },
  {
    "code": "210801",
    "name": "市辖区",
    "detail": "辽宁省 / 营口市",
    "value": "辽宁省 / 营口市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁营口辖",
    "normalizedSearchText": "辽宁营口辖辖辽宁营口"
  },
  {
    "code": "210900",
    "name": "阜新市",
    "detail": "辽宁省",
    "value": "辽宁省 / 阜新市",
    "rank": 2,
    "normalizedName": "阜新",
    "normalizedValue": "辽宁阜新",
    "normalizedSearchText": "辽宁阜新阜新辽宁"
  },
  {
    "code": "210902",
    "name": "海州区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 海州区",
    "rank": 3,
    "normalizedName": "海州",
    "normalizedValue": "辽宁阜新海州",
    "normalizedSearchText": "辽宁阜新海州海州辽宁阜新"
  },
  {
    "code": "210903",
    "name": "新邱区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 新邱区",
    "rank": 3,
    "normalizedName": "新邱",
    "normalizedValue": "辽宁阜新新邱",
    "normalizedSearchText": "辽宁阜新新邱新邱辽宁阜新"
  },
  {
    "code": "210904",
    "name": "太平区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 太平区",
    "rank": 3,
    "normalizedName": "太平",
    "normalizedValue": "辽宁阜新太平",
    "normalizedSearchText": "辽宁阜新太平太平辽宁阜新"
  },
  {
    "code": "210905",
    "name": "清河门区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 清河门区",
    "rank": 3,
    "normalizedName": "清河门",
    "normalizedValue": "辽宁阜新清河门",
    "normalizedSearchText": "辽宁阜新清河门清河门辽宁阜新"
  },
  {
    "code": "210911",
    "name": "细河区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 细河区",
    "rank": 3,
    "normalizedName": "细河",
    "normalizedValue": "辽宁阜新细河",
    "normalizedSearchText": "辽宁阜新细河细河辽宁阜新"
  },
  {
    "code": "210921",
    "name": "阜新蒙古族自治县",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 阜新蒙古族自治县",
    "rank": 3,
    "normalizedName": "阜新蒙古族自治",
    "normalizedValue": "辽宁阜新阜新蒙古族自治",
    "normalizedSearchText": "辽宁阜新阜新蒙古族自治阜新蒙古族自治辽宁阜新"
  },
  {
    "code": "210922",
    "name": "彰武县",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 彰武县",
    "rank": 3,
    "normalizedName": "彰武",
    "normalizedValue": "辽宁阜新彰武",
    "normalizedSearchText": "辽宁阜新彰武彰武辽宁阜新"
  },
  {
    "code": "210901",
    "name": "市辖区",
    "detail": "辽宁省 / 阜新市",
    "value": "辽宁省 / 阜新市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁阜新辖",
    "normalizedSearchText": "辽宁阜新辖辖辽宁阜新"
  },
  {
    "code": "211000",
    "name": "辽阳市",
    "detail": "辽宁省",
    "value": "辽宁省 / 辽阳市",
    "rank": 2,
    "normalizedName": "辽阳",
    "normalizedValue": "辽宁辽阳",
    "normalizedSearchText": "辽宁辽阳辽阳辽宁"
  },
  {
    "code": "211002",
    "name": "白塔区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 白塔区",
    "rank": 3,
    "normalizedName": "白塔",
    "normalizedValue": "辽宁辽阳白塔",
    "normalizedSearchText": "辽宁辽阳白塔白塔辽宁辽阳"
  },
  {
    "code": "211003",
    "name": "文圣区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 文圣区",
    "rank": 3,
    "normalizedName": "文圣",
    "normalizedValue": "辽宁辽阳文圣",
    "normalizedSearchText": "辽宁辽阳文圣文圣辽宁辽阳"
  },
  {
    "code": "211004",
    "name": "宏伟区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 宏伟区",
    "rank": 3,
    "normalizedName": "宏伟",
    "normalizedValue": "辽宁辽阳宏伟",
    "normalizedSearchText": "辽宁辽阳宏伟宏伟辽宁辽阳"
  },
  {
    "code": "211005",
    "name": "弓长岭区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 弓长岭区",
    "rank": 3,
    "normalizedName": "弓长岭",
    "normalizedValue": "辽宁辽阳弓长岭",
    "normalizedSearchText": "辽宁辽阳弓长岭弓长岭辽宁辽阳"
  },
  {
    "code": "211011",
    "name": "太子河区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 太子河区",
    "rank": 3,
    "normalizedName": "太子河",
    "normalizedValue": "辽宁辽阳太子河",
    "normalizedSearchText": "辽宁辽阳太子河太子河辽宁辽阳"
  },
  {
    "code": "211021",
    "name": "辽阳县",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 辽阳县",
    "rank": 3,
    "normalizedName": "辽阳",
    "normalizedValue": "辽宁辽阳辽阳",
    "normalizedSearchText": "辽宁辽阳辽阳辽阳辽宁辽阳"
  },
  {
    "code": "211081",
    "name": "灯塔市",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 灯塔市",
    "rank": 3,
    "normalizedName": "灯塔",
    "normalizedValue": "辽宁辽阳灯塔",
    "normalizedSearchText": "辽宁辽阳灯塔灯塔辽宁辽阳"
  },
  {
    "code": "211001",
    "name": "市辖区",
    "detail": "辽宁省 / 辽阳市",
    "value": "辽宁省 / 辽阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁辽阳辖",
    "normalizedSearchText": "辽宁辽阳辖辖辽宁辽阳"
  },
  {
    "code": "211100",
    "name": "盘锦市",
    "detail": "辽宁省",
    "value": "辽宁省 / 盘锦市",
    "rank": 2,
    "normalizedName": "盘锦",
    "normalizedValue": "辽宁盘锦",
    "normalizedSearchText": "辽宁盘锦盘锦辽宁"
  },
  {
    "code": "211102",
    "name": "双台子区",
    "detail": "辽宁省 / 盘锦市",
    "value": "辽宁省 / 盘锦市 / 双台子区",
    "rank": 3,
    "normalizedName": "双台子",
    "normalizedValue": "辽宁盘锦双台子",
    "normalizedSearchText": "辽宁盘锦双台子双台子辽宁盘锦"
  },
  {
    "code": "211103",
    "name": "兴隆台区",
    "detail": "辽宁省 / 盘锦市",
    "value": "辽宁省 / 盘锦市 / 兴隆台区",
    "rank": 3,
    "normalizedName": "兴隆台",
    "normalizedValue": "辽宁盘锦兴隆台",
    "normalizedSearchText": "辽宁盘锦兴隆台兴隆台辽宁盘锦"
  },
  {
    "code": "211104",
    "name": "大洼区",
    "detail": "辽宁省 / 盘锦市",
    "value": "辽宁省 / 盘锦市 / 大洼区",
    "rank": 3,
    "normalizedName": "大洼",
    "normalizedValue": "辽宁盘锦大洼",
    "normalizedSearchText": "辽宁盘锦大洼大洼辽宁盘锦"
  },
  {
    "code": "211122",
    "name": "盘山县",
    "detail": "辽宁省 / 盘锦市",
    "value": "辽宁省 / 盘锦市 / 盘山县",
    "rank": 3,
    "normalizedName": "盘山",
    "normalizedValue": "辽宁盘锦盘山",
    "normalizedSearchText": "辽宁盘锦盘山盘山辽宁盘锦"
  },
  {
    "code": "211101",
    "name": "市辖区",
    "detail": "辽宁省 / 盘锦市",
    "value": "辽宁省 / 盘锦市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁盘锦辖",
    "normalizedSearchText": "辽宁盘锦辖辖辽宁盘锦"
  },
  {
    "code": "211200",
    "name": "铁岭市",
    "detail": "辽宁省",
    "value": "辽宁省 / 铁岭市",
    "rank": 2,
    "normalizedName": "铁岭",
    "normalizedValue": "辽宁铁岭",
    "normalizedSearchText": "辽宁铁岭铁岭辽宁"
  },
  {
    "code": "211202",
    "name": "银州区",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 银州区",
    "rank": 3,
    "normalizedName": "银州",
    "normalizedValue": "辽宁铁岭银州",
    "normalizedSearchText": "辽宁铁岭银州银州辽宁铁岭"
  },
  {
    "code": "211204",
    "name": "清河区",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 清河区",
    "rank": 3,
    "normalizedName": "清河",
    "normalizedValue": "辽宁铁岭清河",
    "normalizedSearchText": "辽宁铁岭清河清河辽宁铁岭"
  },
  {
    "code": "211221",
    "name": "铁岭县",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 铁岭县",
    "rank": 3,
    "normalizedName": "铁岭",
    "normalizedValue": "辽宁铁岭铁岭",
    "normalizedSearchText": "辽宁铁岭铁岭铁岭辽宁铁岭"
  },
  {
    "code": "211223",
    "name": "西丰县",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 西丰县",
    "rank": 3,
    "normalizedName": "西丰",
    "normalizedValue": "辽宁铁岭西丰",
    "normalizedSearchText": "辽宁铁岭西丰西丰辽宁铁岭"
  },
  {
    "code": "211224",
    "name": "昌图县",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 昌图县",
    "rank": 3,
    "normalizedName": "昌图",
    "normalizedValue": "辽宁铁岭昌图",
    "normalizedSearchText": "辽宁铁岭昌图昌图辽宁铁岭"
  },
  {
    "code": "211281",
    "name": "调兵山市",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 调兵山市",
    "rank": 3,
    "normalizedName": "调兵山",
    "normalizedValue": "辽宁铁岭调兵山",
    "normalizedSearchText": "辽宁铁岭调兵山调兵山辽宁铁岭"
  },
  {
    "code": "211282",
    "name": "开原市",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 开原市",
    "rank": 3,
    "normalizedName": "开原",
    "normalizedValue": "辽宁铁岭开原",
    "normalizedSearchText": "辽宁铁岭开原开原辽宁铁岭"
  },
  {
    "code": "211201",
    "name": "市辖区",
    "detail": "辽宁省 / 铁岭市",
    "value": "辽宁省 / 铁岭市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁铁岭辖",
    "normalizedSearchText": "辽宁铁岭辖辖辽宁铁岭"
  },
  {
    "code": "211300",
    "name": "朝阳市",
    "detail": "辽宁省",
    "value": "辽宁省 / 朝阳市",
    "rank": 2,
    "normalizedName": "朝阳",
    "normalizedValue": "辽宁朝阳",
    "normalizedSearchText": "辽宁朝阳朝阳辽宁"
  },
  {
    "code": "211302",
    "name": "双塔区",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 双塔区",
    "rank": 3,
    "normalizedName": "双塔",
    "normalizedValue": "辽宁朝阳双塔",
    "normalizedSearchText": "辽宁朝阳双塔双塔辽宁朝阳"
  },
  {
    "code": "211303",
    "name": "龙城区",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 龙城区",
    "rank": 3,
    "normalizedName": "龙城",
    "normalizedValue": "辽宁朝阳龙城",
    "normalizedSearchText": "辽宁朝阳龙城龙城辽宁朝阳"
  },
  {
    "code": "211321",
    "name": "朝阳县",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 朝阳县",
    "rank": 3,
    "normalizedName": "朝阳",
    "normalizedValue": "辽宁朝阳朝阳",
    "normalizedSearchText": "辽宁朝阳朝阳朝阳辽宁朝阳"
  },
  {
    "code": "211322",
    "name": "建平县",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 建平县",
    "rank": 3,
    "normalizedName": "建平",
    "normalizedValue": "辽宁朝阳建平",
    "normalizedSearchText": "辽宁朝阳建平建平辽宁朝阳"
  },
  {
    "code": "211324",
    "name": "喀喇沁左翼蒙古族自治县",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 喀喇沁左翼蒙古族自治县",
    "rank": 3,
    "normalizedName": "喀喇沁左翼蒙古族自治",
    "normalizedValue": "辽宁朝阳喀喇沁左翼蒙古族自治",
    "normalizedSearchText": "辽宁朝阳喀喇沁左翼蒙古族自治喀喇沁左翼蒙古族自治辽宁朝阳"
  },
  {
    "code": "211381",
    "name": "北票市",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 北票市",
    "rank": 3,
    "normalizedName": "北票",
    "normalizedValue": "辽宁朝阳北票",
    "normalizedSearchText": "辽宁朝阳北票北票辽宁朝阳"
  },
  {
    "code": "211382",
    "name": "凌源市",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 凌源市",
    "rank": 3,
    "normalizedName": "凌源",
    "normalizedValue": "辽宁朝阳凌源",
    "normalizedSearchText": "辽宁朝阳凌源凌源辽宁朝阳"
  },
  {
    "code": "211301",
    "name": "市辖区",
    "detail": "辽宁省 / 朝阳市",
    "value": "辽宁省 / 朝阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁朝阳辖",
    "normalizedSearchText": "辽宁朝阳辖辖辽宁朝阳"
  },
  {
    "code": "211400",
    "name": "葫芦岛市",
    "detail": "辽宁省",
    "value": "辽宁省 / 葫芦岛市",
    "rank": 2,
    "normalizedName": "葫芦岛",
    "normalizedValue": "辽宁葫芦岛",
    "normalizedSearchText": "辽宁葫芦岛葫芦岛辽宁"
  },
  {
    "code": "211402",
    "name": "连山区",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 连山区",
    "rank": 3,
    "normalizedName": "连山",
    "normalizedValue": "辽宁葫芦岛连山",
    "normalizedSearchText": "辽宁葫芦岛连山连山辽宁葫芦岛"
  },
  {
    "code": "211403",
    "name": "龙港区",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 龙港区",
    "rank": 3,
    "normalizedName": "龙港",
    "normalizedValue": "辽宁葫芦岛龙港",
    "normalizedSearchText": "辽宁葫芦岛龙港龙港辽宁葫芦岛"
  },
  {
    "code": "211404",
    "name": "南票区",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 南票区",
    "rank": 3,
    "normalizedName": "南票",
    "normalizedValue": "辽宁葫芦岛南票",
    "normalizedSearchText": "辽宁葫芦岛南票南票辽宁葫芦岛"
  },
  {
    "code": "211421",
    "name": "绥中县",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 绥中县",
    "rank": 3,
    "normalizedName": "绥中",
    "normalizedValue": "辽宁葫芦岛绥中",
    "normalizedSearchText": "辽宁葫芦岛绥中绥中辽宁葫芦岛"
  },
  {
    "code": "211422",
    "name": "建昌县",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 建昌县",
    "rank": 3,
    "normalizedName": "建昌",
    "normalizedValue": "辽宁葫芦岛建昌",
    "normalizedSearchText": "辽宁葫芦岛建昌建昌辽宁葫芦岛"
  },
  {
    "code": "211481",
    "name": "兴城市",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 兴城市",
    "rank": 3,
    "normalizedName": "兴城",
    "normalizedValue": "辽宁葫芦岛兴城",
    "normalizedSearchText": "辽宁葫芦岛兴城兴城辽宁葫芦岛"
  },
  {
    "code": "211401",
    "name": "市辖区",
    "detail": "辽宁省 / 葫芦岛市",
    "value": "辽宁省 / 葫芦岛市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "辽宁葫芦岛辖",
    "normalizedSearchText": "辽宁葫芦岛辖辖辽宁葫芦岛"
  },
  {
    "code": "220000",
    "name": "吉林省",
    "detail": "?????",
    "value": "吉林省",
    "rank": 1,
    "normalizedName": "吉林",
    "normalizedValue": "吉林",
    "normalizedSearchText": "吉林吉林"
  },
  {
    "code": "220100",
    "name": "长春市",
    "detail": "吉林省",
    "value": "吉林省 / 长春市",
    "rank": 2,
    "normalizedName": "长春",
    "normalizedValue": "吉林长春",
    "normalizedSearchText": "吉林长春长春吉林"
  },
  {
    "code": "220102",
    "name": "南关区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 南关区",
    "rank": 3,
    "normalizedName": "南关",
    "normalizedValue": "吉林长春南关",
    "normalizedSearchText": "吉林长春南关南关吉林长春"
  },
  {
    "code": "220103",
    "name": "宽城区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 宽城区",
    "rank": 3,
    "normalizedName": "宽城",
    "normalizedValue": "吉林长春宽城",
    "normalizedSearchText": "吉林长春宽城宽城吉林长春"
  },
  {
    "code": "220104",
    "name": "朝阳区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 朝阳区",
    "rank": 3,
    "normalizedName": "朝阳",
    "normalizedValue": "吉林长春朝阳",
    "normalizedSearchText": "吉林长春朝阳朝阳吉林长春"
  },
  {
    "code": "220105",
    "name": "二道区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 二道区",
    "rank": 3,
    "normalizedName": "二道",
    "normalizedValue": "吉林长春二道",
    "normalizedSearchText": "吉林长春二道二道吉林长春"
  },
  {
    "code": "220106",
    "name": "绿园区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 绿园区",
    "rank": 3,
    "normalizedName": "绿园",
    "normalizedValue": "吉林长春绿园",
    "normalizedSearchText": "吉林长春绿园绿园吉林长春"
  },
  {
    "code": "220112",
    "name": "双阳区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 双阳区",
    "rank": 3,
    "normalizedName": "双阳",
    "normalizedValue": "吉林长春双阳",
    "normalizedSearchText": "吉林长春双阳双阳吉林长春"
  },
  {
    "code": "220113",
    "name": "九台区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 九台区",
    "rank": 3,
    "normalizedName": "九台",
    "normalizedValue": "吉林长春九台",
    "normalizedSearchText": "吉林长春九台九台吉林长春"
  },
  {
    "code": "220122",
    "name": "农安县",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 农安县",
    "rank": 3,
    "normalizedName": "农安",
    "normalizedValue": "吉林长春农安",
    "normalizedSearchText": "吉林长春农安农安吉林长春"
  },
  {
    "code": "220182",
    "name": "榆树市",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 榆树市",
    "rank": 3,
    "normalizedName": "榆树",
    "normalizedValue": "吉林长春榆树",
    "normalizedSearchText": "吉林长春榆树榆树吉林长春"
  },
  {
    "code": "220183",
    "name": "德惠市",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 德惠市",
    "rank": 3,
    "normalizedName": "德惠",
    "normalizedValue": "吉林长春德惠",
    "normalizedSearchText": "吉林长春德惠德惠吉林长春"
  },
  {
    "code": "220184",
    "name": "公主岭市",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 公主岭市",
    "rank": 3,
    "normalizedName": "公主岭",
    "normalizedValue": "吉林长春公主岭",
    "normalizedSearchText": "吉林长春公主岭公主岭吉林长春"
  },
  {
    "code": "220101",
    "name": "市辖区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林长春辖",
    "normalizedSearchText": "吉林长春辖辖吉林长春"
  },
  {
    "code": "220171",
    "name": "长春经济技术开发区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 长春经济技术开发区",
    "rank": 3,
    "normalizedName": "长春经济技术开发",
    "normalizedValue": "吉林长春长春经济技术开发",
    "normalizedSearchText": "吉林长春长春经济技术开发长春经济技术开发吉林长春"
  },
  {
    "code": "220172",
    "name": "长春净月高新技术产业开发区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 长春净月高新技术产业开发区",
    "rank": 3,
    "normalizedName": "长春净月高新技术产业开发",
    "normalizedValue": "吉林长春长春净月高新技术产业开发",
    "normalizedSearchText": "吉林长春长春净月高新技术产业开发长春净月高新技术产业开发吉林长春"
  },
  {
    "code": "220173",
    "name": "长春高新技术产业开发区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 长春高新技术产业开发区",
    "rank": 3,
    "normalizedName": "长春高新技术产业开发",
    "normalizedValue": "吉林长春长春高新技术产业开发",
    "normalizedSearchText": "吉林长春长春高新技术产业开发长春高新技术产业开发吉林长春"
  },
  {
    "code": "220174",
    "name": "长春汽车经济技术开发区",
    "detail": "吉林省 / 长春市",
    "value": "吉林省 / 长春市 / 长春汽车经济技术开发区",
    "rank": 3,
    "normalizedName": "长春汽车经济技术开发",
    "normalizedValue": "吉林长春长春汽车经济技术开发",
    "normalizedSearchText": "吉林长春长春汽车经济技术开发长春汽车经济技术开发吉林长春"
  },
  {
    "code": "220200",
    "name": "吉林市",
    "detail": "吉林省",
    "value": "吉林省 / 吉林市",
    "rank": 2,
    "normalizedName": "吉林",
    "normalizedValue": "吉林吉林",
    "normalizedSearchText": "吉林吉林吉林吉林"
  },
  {
    "code": "220202",
    "name": "昌邑区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 昌邑区",
    "rank": 3,
    "normalizedName": "昌邑",
    "normalizedValue": "吉林吉林昌邑",
    "normalizedSearchText": "吉林吉林昌邑昌邑吉林吉林"
  },
  {
    "code": "220203",
    "name": "龙潭区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 龙潭区",
    "rank": 3,
    "normalizedName": "龙潭",
    "normalizedValue": "吉林吉林龙潭",
    "normalizedSearchText": "吉林吉林龙潭龙潭吉林吉林"
  },
  {
    "code": "220204",
    "name": "船营区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 船营区",
    "rank": 3,
    "normalizedName": "船营",
    "normalizedValue": "吉林吉林船营",
    "normalizedSearchText": "吉林吉林船营船营吉林吉林"
  },
  {
    "code": "220211",
    "name": "丰满区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 丰满区",
    "rank": 3,
    "normalizedName": "丰满",
    "normalizedValue": "吉林吉林丰满",
    "normalizedSearchText": "吉林吉林丰满丰满吉林吉林"
  },
  {
    "code": "220221",
    "name": "永吉县",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 永吉县",
    "rank": 3,
    "normalizedName": "永吉",
    "normalizedValue": "吉林吉林永吉",
    "normalizedSearchText": "吉林吉林永吉永吉吉林吉林"
  },
  {
    "code": "220281",
    "name": "蛟河市",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 蛟河市",
    "rank": 3,
    "normalizedName": "蛟河",
    "normalizedValue": "吉林吉林蛟河",
    "normalizedSearchText": "吉林吉林蛟河蛟河吉林吉林"
  },
  {
    "code": "220282",
    "name": "桦甸市",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 桦甸市",
    "rank": 3,
    "normalizedName": "桦甸",
    "normalizedValue": "吉林吉林桦甸",
    "normalizedSearchText": "吉林吉林桦甸桦甸吉林吉林"
  },
  {
    "code": "220283",
    "name": "舒兰市",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 舒兰市",
    "rank": 3,
    "normalizedName": "舒兰",
    "normalizedValue": "吉林吉林舒兰",
    "normalizedSearchText": "吉林吉林舒兰舒兰吉林吉林"
  },
  {
    "code": "220284",
    "name": "磐石市",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 磐石市",
    "rank": 3,
    "normalizedName": "磐石",
    "normalizedValue": "吉林吉林磐石",
    "normalizedSearchText": "吉林吉林磐石磐石吉林吉林"
  },
  {
    "code": "220201",
    "name": "市辖区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林吉林辖",
    "normalizedSearchText": "吉林吉林辖辖吉林吉林"
  },
  {
    "code": "220271",
    "name": "吉林经济开发区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 吉林经济开发区",
    "rank": 3,
    "normalizedName": "吉林经济开发",
    "normalizedValue": "吉林吉林吉林经济开发",
    "normalizedSearchText": "吉林吉林吉林经济开发吉林经济开发吉林吉林"
  },
  {
    "code": "220272",
    "name": "吉林高新技术产业开发区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 吉林高新技术产业开发区",
    "rank": 3,
    "normalizedName": "吉林高新技术产业开发",
    "normalizedValue": "吉林吉林吉林高新技术产业开发",
    "normalizedSearchText": "吉林吉林吉林高新技术产业开发吉林高新技术产业开发吉林吉林"
  },
  {
    "code": "220273",
    "name": "吉林中国新加坡食品区",
    "detail": "吉林省 / 吉林市",
    "value": "吉林省 / 吉林市 / 吉林中国新加坡食品区",
    "rank": 3,
    "normalizedName": "吉林中国新加坡食品",
    "normalizedValue": "吉林吉林吉林中国新加坡食品",
    "normalizedSearchText": "吉林吉林吉林中国新加坡食品吉林中国新加坡食品吉林吉林"
  },
  {
    "code": "220300",
    "name": "四平市",
    "detail": "吉林省",
    "value": "吉林省 / 四平市",
    "rank": 2,
    "normalizedName": "四平",
    "normalizedValue": "吉林四平",
    "normalizedSearchText": "吉林四平四平吉林"
  },
  {
    "code": "220302",
    "name": "铁西区",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 铁西区",
    "rank": 3,
    "normalizedName": "铁西",
    "normalizedValue": "吉林四平铁西",
    "normalizedSearchText": "吉林四平铁西铁西吉林四平"
  },
  {
    "code": "220303",
    "name": "铁东区",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 铁东区",
    "rank": 3,
    "normalizedName": "铁东",
    "normalizedValue": "吉林四平铁东",
    "normalizedSearchText": "吉林四平铁东铁东吉林四平"
  },
  {
    "code": "220322",
    "name": "梨树县",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 梨树县",
    "rank": 3,
    "normalizedName": "梨树",
    "normalizedValue": "吉林四平梨树",
    "normalizedSearchText": "吉林四平梨树梨树吉林四平"
  },
  {
    "code": "220323",
    "name": "伊通满族自治县",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 伊通满族自治县",
    "rank": 3,
    "normalizedName": "伊通满族自治",
    "normalizedValue": "吉林四平伊通满族自治",
    "normalizedSearchText": "吉林四平伊通满族自治伊通满族自治吉林四平"
  },
  {
    "code": "220382",
    "name": "双辽市",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 双辽市",
    "rank": 3,
    "normalizedName": "双辽",
    "normalizedValue": "吉林四平双辽",
    "normalizedSearchText": "吉林四平双辽双辽吉林四平"
  },
  {
    "code": "220301",
    "name": "市辖区",
    "detail": "吉林省 / 四平市",
    "value": "吉林省 / 四平市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林四平辖",
    "normalizedSearchText": "吉林四平辖辖吉林四平"
  },
  {
    "code": "220400",
    "name": "辽源市",
    "detail": "吉林省",
    "value": "吉林省 / 辽源市",
    "rank": 2,
    "normalizedName": "辽源",
    "normalizedValue": "吉林辽源",
    "normalizedSearchText": "吉林辽源辽源吉林"
  },
  {
    "code": "220402",
    "name": "龙山区",
    "detail": "吉林省 / 辽源市",
    "value": "吉林省 / 辽源市 / 龙山区",
    "rank": 3,
    "normalizedName": "龙山",
    "normalizedValue": "吉林辽源龙山",
    "normalizedSearchText": "吉林辽源龙山龙山吉林辽源"
  },
  {
    "code": "220403",
    "name": "西安区",
    "detail": "吉林省 / 辽源市",
    "value": "吉林省 / 辽源市 / 西安区",
    "rank": 3,
    "normalizedName": "西安",
    "normalizedValue": "吉林辽源西安",
    "normalizedSearchText": "吉林辽源西安西安吉林辽源"
  },
  {
    "code": "220421",
    "name": "东丰县",
    "detail": "吉林省 / 辽源市",
    "value": "吉林省 / 辽源市 / 东丰县",
    "rank": 3,
    "normalizedName": "东丰",
    "normalizedValue": "吉林辽源东丰",
    "normalizedSearchText": "吉林辽源东丰东丰吉林辽源"
  },
  {
    "code": "220422",
    "name": "东辽县",
    "detail": "吉林省 / 辽源市",
    "value": "吉林省 / 辽源市 / 东辽县",
    "rank": 3,
    "normalizedName": "东辽",
    "normalizedValue": "吉林辽源东辽",
    "normalizedSearchText": "吉林辽源东辽东辽吉林辽源"
  },
  {
    "code": "220401",
    "name": "市辖区",
    "detail": "吉林省 / 辽源市",
    "value": "吉林省 / 辽源市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林辽源辖",
    "normalizedSearchText": "吉林辽源辖辖吉林辽源"
  },
  {
    "code": "220500",
    "name": "通化市",
    "detail": "吉林省",
    "value": "吉林省 / 通化市",
    "rank": 2,
    "normalizedName": "通化",
    "normalizedValue": "吉林通化",
    "normalizedSearchText": "吉林通化通化吉林"
  },
  {
    "code": "220502",
    "name": "东昌区",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 东昌区",
    "rank": 3,
    "normalizedName": "东昌",
    "normalizedValue": "吉林通化东昌",
    "normalizedSearchText": "吉林通化东昌东昌吉林通化"
  },
  {
    "code": "220503",
    "name": "二道江区",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 二道江区",
    "rank": 3,
    "normalizedName": "二道江",
    "normalizedValue": "吉林通化二道江",
    "normalizedSearchText": "吉林通化二道江二道江吉林通化"
  },
  {
    "code": "220521",
    "name": "通化县",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 通化县",
    "rank": 3,
    "normalizedName": "通化",
    "normalizedValue": "吉林通化通化",
    "normalizedSearchText": "吉林通化通化通化吉林通化"
  },
  {
    "code": "220523",
    "name": "辉南县",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 辉南县",
    "rank": 3,
    "normalizedName": "辉南",
    "normalizedValue": "吉林通化辉南",
    "normalizedSearchText": "吉林通化辉南辉南吉林通化"
  },
  {
    "code": "220524",
    "name": "柳河县",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 柳河县",
    "rank": 3,
    "normalizedName": "柳河",
    "normalizedValue": "吉林通化柳河",
    "normalizedSearchText": "吉林通化柳河柳河吉林通化"
  },
  {
    "code": "220581",
    "name": "梅河口市",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 梅河口市",
    "rank": 3,
    "normalizedName": "梅河口",
    "normalizedValue": "吉林通化梅河口",
    "normalizedSearchText": "吉林通化梅河口梅河口吉林通化"
  },
  {
    "code": "220582",
    "name": "集安市",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 集安市",
    "rank": 3,
    "normalizedName": "集安",
    "normalizedValue": "吉林通化集安",
    "normalizedSearchText": "吉林通化集安集安吉林通化"
  },
  {
    "code": "220501",
    "name": "市辖区",
    "detail": "吉林省 / 通化市",
    "value": "吉林省 / 通化市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林通化辖",
    "normalizedSearchText": "吉林通化辖辖吉林通化"
  },
  {
    "code": "220600",
    "name": "白山市",
    "detail": "吉林省",
    "value": "吉林省 / 白山市",
    "rank": 2,
    "normalizedName": "白山",
    "normalizedValue": "吉林白山",
    "normalizedSearchText": "吉林白山白山吉林"
  },
  {
    "code": "220602",
    "name": "浑江区",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 浑江区",
    "rank": 3,
    "normalizedName": "浑江",
    "normalizedValue": "吉林白山浑江",
    "normalizedSearchText": "吉林白山浑江浑江吉林白山"
  },
  {
    "code": "220605",
    "name": "江源区",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 江源区",
    "rank": 3,
    "normalizedName": "江源",
    "normalizedValue": "吉林白山江源",
    "normalizedSearchText": "吉林白山江源江源吉林白山"
  },
  {
    "code": "220621",
    "name": "抚松县",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 抚松县",
    "rank": 3,
    "normalizedName": "抚松",
    "normalizedValue": "吉林白山抚松",
    "normalizedSearchText": "吉林白山抚松抚松吉林白山"
  },
  {
    "code": "220622",
    "name": "靖宇县",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 靖宇县",
    "rank": 3,
    "normalizedName": "靖宇",
    "normalizedValue": "吉林白山靖宇",
    "normalizedSearchText": "吉林白山靖宇靖宇吉林白山"
  },
  {
    "code": "220623",
    "name": "长白朝鲜族自治县",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 长白朝鲜族自治县",
    "rank": 3,
    "normalizedName": "长白朝鲜族自治",
    "normalizedValue": "吉林白山长白朝鲜族自治",
    "normalizedSearchText": "吉林白山长白朝鲜族自治长白朝鲜族自治吉林白山"
  },
  {
    "code": "220681",
    "name": "临江市",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 临江市",
    "rank": 3,
    "normalizedName": "临江",
    "normalizedValue": "吉林白山临江",
    "normalizedSearchText": "吉林白山临江临江吉林白山"
  },
  {
    "code": "220601",
    "name": "市辖区",
    "detail": "吉林省 / 白山市",
    "value": "吉林省 / 白山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林白山辖",
    "normalizedSearchText": "吉林白山辖辖吉林白山"
  },
  {
    "code": "220700",
    "name": "松原市",
    "detail": "吉林省",
    "value": "吉林省 / 松原市",
    "rank": 2,
    "normalizedName": "松原",
    "normalizedValue": "吉林松原",
    "normalizedSearchText": "吉林松原松原吉林"
  },
  {
    "code": "220702",
    "name": "宁江区",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 宁江区",
    "rank": 3,
    "normalizedName": "宁江",
    "normalizedValue": "吉林松原宁江",
    "normalizedSearchText": "吉林松原宁江宁江吉林松原"
  },
  {
    "code": "220721",
    "name": "前郭尔罗斯蒙古族自治县",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 前郭尔罗斯蒙古族自治县",
    "rank": 3,
    "normalizedName": "前郭尔罗斯蒙古族自治",
    "normalizedValue": "吉林松原前郭尔罗斯蒙古族自治",
    "normalizedSearchText": "吉林松原前郭尔罗斯蒙古族自治前郭尔罗斯蒙古族自治吉林松原"
  },
  {
    "code": "220722",
    "name": "长岭县",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 长岭县",
    "rank": 3,
    "normalizedName": "长岭",
    "normalizedValue": "吉林松原长岭",
    "normalizedSearchText": "吉林松原长岭长岭吉林松原"
  },
  {
    "code": "220723",
    "name": "乾安县",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 乾安县",
    "rank": 3,
    "normalizedName": "乾安",
    "normalizedValue": "吉林松原乾安",
    "normalizedSearchText": "吉林松原乾安乾安吉林松原"
  },
  {
    "code": "220781",
    "name": "扶余市",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 扶余市",
    "rank": 3,
    "normalizedName": "扶余",
    "normalizedValue": "吉林松原扶余",
    "normalizedSearchText": "吉林松原扶余扶余吉林松原"
  },
  {
    "code": "220701",
    "name": "市辖区",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林松原辖",
    "normalizedSearchText": "吉林松原辖辖吉林松原"
  },
  {
    "code": "220771",
    "name": "吉林松原经济开发区",
    "detail": "吉林省 / 松原市",
    "value": "吉林省 / 松原市 / 吉林松原经济开发区",
    "rank": 3,
    "normalizedName": "吉林松原经济开发",
    "normalizedValue": "吉林松原吉林松原经济开发",
    "normalizedSearchText": "吉林松原吉林松原经济开发吉林松原经济开发吉林松原"
  },
  {
    "code": "220800",
    "name": "白城市",
    "detail": "吉林省",
    "value": "吉林省 / 白城市",
    "rank": 2,
    "normalizedName": "白城",
    "normalizedValue": "吉林白城",
    "normalizedSearchText": "吉林白城白城吉林"
  },
  {
    "code": "220802",
    "name": "洮北区",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 洮北区",
    "rank": 3,
    "normalizedName": "洮北",
    "normalizedValue": "吉林白城洮北",
    "normalizedSearchText": "吉林白城洮北洮北吉林白城"
  },
  {
    "code": "220821",
    "name": "镇赉县",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 镇赉县",
    "rank": 3,
    "normalizedName": "赉",
    "normalizedValue": "吉林白城赉",
    "normalizedSearchText": "吉林白城赉赉吉林白城"
  },
  {
    "code": "220822",
    "name": "通榆县",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 通榆县",
    "rank": 3,
    "normalizedName": "通榆",
    "normalizedValue": "吉林白城通榆",
    "normalizedSearchText": "吉林白城通榆通榆吉林白城"
  },
  {
    "code": "220881",
    "name": "洮南市",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 洮南市",
    "rank": 3,
    "normalizedName": "洮南",
    "normalizedValue": "吉林白城洮南",
    "normalizedSearchText": "吉林白城洮南洮南吉林白城"
  },
  {
    "code": "220882",
    "name": "大安市",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 大安市",
    "rank": 3,
    "normalizedName": "大安",
    "normalizedValue": "吉林白城大安",
    "normalizedSearchText": "吉林白城大安大安吉林白城"
  },
  {
    "code": "220801",
    "name": "市辖区",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "吉林白城辖",
    "normalizedSearchText": "吉林白城辖辖吉林白城"
  },
  {
    "code": "220871",
    "name": "吉林白城经济开发区",
    "detail": "吉林省 / 白城市",
    "value": "吉林省 / 白城市 / 吉林白城经济开发区",
    "rank": 3,
    "normalizedName": "吉林白城经济开发",
    "normalizedValue": "吉林白城吉林白城经济开发",
    "normalizedSearchText": "吉林白城吉林白城经济开发吉林白城经济开发吉林白城"
  },
  {
    "code": "222400",
    "name": "延边朝鲜族自治州",
    "detail": "吉林省",
    "value": "吉林省 / 延边朝鲜族自治州",
    "rank": 2,
    "normalizedName": "延边朝鲜族",
    "normalizedValue": "吉林延边朝鲜族",
    "normalizedSearchText": "吉林延边朝鲜族延边朝鲜族吉林"
  },
  {
    "code": "222401",
    "name": "延吉市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 延吉市",
    "rank": 3,
    "normalizedName": "延吉",
    "normalizedValue": "吉林延边朝鲜族延吉",
    "normalizedSearchText": "吉林延边朝鲜族延吉延吉吉林延边朝鲜族"
  },
  {
    "code": "222402",
    "name": "图们市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 图们市",
    "rank": 3,
    "normalizedName": "图们",
    "normalizedValue": "吉林延边朝鲜族图们",
    "normalizedSearchText": "吉林延边朝鲜族图们图们吉林延边朝鲜族"
  },
  {
    "code": "222403",
    "name": "敦化市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 敦化市",
    "rank": 3,
    "normalizedName": "敦化",
    "normalizedValue": "吉林延边朝鲜族敦化",
    "normalizedSearchText": "吉林延边朝鲜族敦化敦化吉林延边朝鲜族"
  },
  {
    "code": "222404",
    "name": "珲春市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 珲春市",
    "rank": 3,
    "normalizedName": "珲春",
    "normalizedValue": "吉林延边朝鲜族珲春",
    "normalizedSearchText": "吉林延边朝鲜族珲春珲春吉林延边朝鲜族"
  },
  {
    "code": "222405",
    "name": "龙井市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 龙井市",
    "rank": 3,
    "normalizedName": "龙井",
    "normalizedValue": "吉林延边朝鲜族龙井",
    "normalizedSearchText": "吉林延边朝鲜族龙井龙井吉林延边朝鲜族"
  },
  {
    "code": "222406",
    "name": "和龙市",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 和龙市",
    "rank": 3,
    "normalizedName": "和龙",
    "normalizedValue": "吉林延边朝鲜族和龙",
    "normalizedSearchText": "吉林延边朝鲜族和龙和龙吉林延边朝鲜族"
  },
  {
    "code": "222424",
    "name": "汪清县",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 汪清县",
    "rank": 3,
    "normalizedName": "汪清",
    "normalizedValue": "吉林延边朝鲜族汪清",
    "normalizedSearchText": "吉林延边朝鲜族汪清汪清吉林延边朝鲜族"
  },
  {
    "code": "222426",
    "name": "安图县",
    "detail": "吉林省 / 延边朝鲜族自治州",
    "value": "吉林省 / 延边朝鲜族自治州 / 安图县",
    "rank": 3,
    "normalizedName": "安图",
    "normalizedValue": "吉林延边朝鲜族安图",
    "normalizedSearchText": "吉林延边朝鲜族安图安图吉林延边朝鲜族"
  },
  {
    "code": "230000",
    "name": "黑龙江省",
    "detail": "?????",
    "value": "黑龙江省",
    "rank": 1,
    "normalizedName": "黑龙江",
    "normalizedValue": "黑龙江",
    "normalizedSearchText": "黑龙江黑龙江"
  },
  {
    "code": "230100",
    "name": "哈尔滨市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 哈尔滨市",
    "rank": 2,
    "normalizedName": "哈尔滨",
    "normalizedValue": "黑龙江哈尔滨",
    "normalizedSearchText": "黑龙江哈尔滨哈尔滨黑龙江"
  },
  {
    "code": "230102",
    "name": "道里区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 道里区",
    "rank": 3,
    "normalizedName": "道里",
    "normalizedValue": "黑龙江哈尔滨道里",
    "normalizedSearchText": "黑龙江哈尔滨道里道里黑龙江哈尔滨"
  },
  {
    "code": "230103",
    "name": "南岗区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 南岗区",
    "rank": 3,
    "normalizedName": "南岗",
    "normalizedValue": "黑龙江哈尔滨南岗",
    "normalizedSearchText": "黑龙江哈尔滨南岗南岗黑龙江哈尔滨"
  },
  {
    "code": "230104",
    "name": "道外区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 道外区",
    "rank": 3,
    "normalizedName": "道外",
    "normalizedValue": "黑龙江哈尔滨道外",
    "normalizedSearchText": "黑龙江哈尔滨道外道外黑龙江哈尔滨"
  },
  {
    "code": "230108",
    "name": "平房区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 平房区",
    "rank": 3,
    "normalizedName": "平房",
    "normalizedValue": "黑龙江哈尔滨平房",
    "normalizedSearchText": "黑龙江哈尔滨平房平房黑龙江哈尔滨"
  },
  {
    "code": "230109",
    "name": "松北区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 松北区",
    "rank": 3,
    "normalizedName": "松北",
    "normalizedValue": "黑龙江哈尔滨松北",
    "normalizedSearchText": "黑龙江哈尔滨松北松北黑龙江哈尔滨"
  },
  {
    "code": "230110",
    "name": "香坊区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 香坊区",
    "rank": 3,
    "normalizedName": "香坊",
    "normalizedValue": "黑龙江哈尔滨香坊",
    "normalizedSearchText": "黑龙江哈尔滨香坊香坊黑龙江哈尔滨"
  },
  {
    "code": "230111",
    "name": "呼兰区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 呼兰区",
    "rank": 3,
    "normalizedName": "呼兰",
    "normalizedValue": "黑龙江哈尔滨呼兰",
    "normalizedSearchText": "黑龙江哈尔滨呼兰呼兰黑龙江哈尔滨"
  },
  {
    "code": "230112",
    "name": "阿城区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 阿城区",
    "rank": 3,
    "normalizedName": "阿城",
    "normalizedValue": "黑龙江哈尔滨阿城",
    "normalizedSearchText": "黑龙江哈尔滨阿城阿城黑龙江哈尔滨"
  },
  {
    "code": "230113",
    "name": "双城区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 双城区",
    "rank": 3,
    "normalizedName": "双城",
    "normalizedValue": "黑龙江哈尔滨双城",
    "normalizedSearchText": "黑龙江哈尔滨双城双城黑龙江哈尔滨"
  },
  {
    "code": "230123",
    "name": "依兰县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 依兰县",
    "rank": 3,
    "normalizedName": "依兰",
    "normalizedValue": "黑龙江哈尔滨依兰",
    "normalizedSearchText": "黑龙江哈尔滨依兰依兰黑龙江哈尔滨"
  },
  {
    "code": "230124",
    "name": "方正县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 方正县",
    "rank": 3,
    "normalizedName": "方正",
    "normalizedValue": "黑龙江哈尔滨方正",
    "normalizedSearchText": "黑龙江哈尔滨方正方正黑龙江哈尔滨"
  },
  {
    "code": "230125",
    "name": "宾县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 宾县",
    "rank": 3,
    "normalizedName": "宾",
    "normalizedValue": "黑龙江哈尔滨宾",
    "normalizedSearchText": "黑龙江哈尔滨宾宾黑龙江哈尔滨"
  },
  {
    "code": "230126",
    "name": "巴彦县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 巴彦县",
    "rank": 3,
    "normalizedName": "巴彦",
    "normalizedValue": "黑龙江哈尔滨巴彦",
    "normalizedSearchText": "黑龙江哈尔滨巴彦巴彦黑龙江哈尔滨"
  },
  {
    "code": "230127",
    "name": "木兰县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 木兰县",
    "rank": 3,
    "normalizedName": "木兰",
    "normalizedValue": "黑龙江哈尔滨木兰",
    "normalizedSearchText": "黑龙江哈尔滨木兰木兰黑龙江哈尔滨"
  },
  {
    "code": "230128",
    "name": "通河县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 通河县",
    "rank": 3,
    "normalizedName": "通河",
    "normalizedValue": "黑龙江哈尔滨通河",
    "normalizedSearchText": "黑龙江哈尔滨通河通河黑龙江哈尔滨"
  },
  {
    "code": "230129",
    "name": "延寿县",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 延寿县",
    "rank": 3,
    "normalizedName": "延寿",
    "normalizedValue": "黑龙江哈尔滨延寿",
    "normalizedSearchText": "黑龙江哈尔滨延寿延寿黑龙江哈尔滨"
  },
  {
    "code": "230183",
    "name": "尚志市",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 尚志市",
    "rank": 3,
    "normalizedName": "尚志",
    "normalizedValue": "黑龙江哈尔滨尚志",
    "normalizedSearchText": "黑龙江哈尔滨尚志尚志黑龙江哈尔滨"
  },
  {
    "code": "230184",
    "name": "五常市",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 五常市",
    "rank": 3,
    "normalizedName": "五常",
    "normalizedValue": "黑龙江哈尔滨五常",
    "normalizedSearchText": "黑龙江哈尔滨五常五常黑龙江哈尔滨"
  },
  {
    "code": "230101",
    "name": "市辖区",
    "detail": "黑龙江省 / 哈尔滨市",
    "value": "黑龙江省 / 哈尔滨市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江哈尔滨辖",
    "normalizedSearchText": "黑龙江哈尔滨辖辖黑龙江哈尔滨"
  },
  {
    "code": "230200",
    "name": "齐齐哈尔市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 齐齐哈尔市",
    "rank": 2,
    "normalizedName": "齐齐哈尔",
    "normalizedValue": "黑龙江齐齐哈尔",
    "normalizedSearchText": "黑龙江齐齐哈尔齐齐哈尔黑龙江"
  },
  {
    "code": "230202",
    "name": "龙沙区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 龙沙区",
    "rank": 3,
    "normalizedName": "龙沙",
    "normalizedValue": "黑龙江齐齐哈尔龙沙",
    "normalizedSearchText": "黑龙江齐齐哈尔龙沙龙沙黑龙江齐齐哈尔"
  },
  {
    "code": "230203",
    "name": "建华区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 建华区",
    "rank": 3,
    "normalizedName": "建华",
    "normalizedValue": "黑龙江齐齐哈尔建华",
    "normalizedSearchText": "黑龙江齐齐哈尔建华建华黑龙江齐齐哈尔"
  },
  {
    "code": "230204",
    "name": "铁锋区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 铁锋区",
    "rank": 3,
    "normalizedName": "铁锋",
    "normalizedValue": "黑龙江齐齐哈尔铁锋",
    "normalizedSearchText": "黑龙江齐齐哈尔铁锋铁锋黑龙江齐齐哈尔"
  },
  {
    "code": "230205",
    "name": "昂昂溪区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 昂昂溪区",
    "rank": 3,
    "normalizedName": "昂昂溪",
    "normalizedValue": "黑龙江齐齐哈尔昂昂溪",
    "normalizedSearchText": "黑龙江齐齐哈尔昂昂溪昂昂溪黑龙江齐齐哈尔"
  },
  {
    "code": "230206",
    "name": "富拉尔基区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 富拉尔基区",
    "rank": 3,
    "normalizedName": "富拉尔基",
    "normalizedValue": "黑龙江齐齐哈尔富拉尔基",
    "normalizedSearchText": "黑龙江齐齐哈尔富拉尔基富拉尔基黑龙江齐齐哈尔"
  },
  {
    "code": "230207",
    "name": "碾子山区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 碾子山区",
    "rank": 3,
    "normalizedName": "碾子山",
    "normalizedValue": "黑龙江齐齐哈尔碾子山",
    "normalizedSearchText": "黑龙江齐齐哈尔碾子山碾子山黑龙江齐齐哈尔"
  },
  {
    "code": "230208",
    "name": "梅里斯达斡尔族区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 梅里斯达斡尔族区",
    "rank": 3,
    "normalizedName": "梅里斯达斡尔族",
    "normalizedValue": "黑龙江齐齐哈尔梅里斯达斡尔族",
    "normalizedSearchText": "黑龙江齐齐哈尔梅里斯达斡尔族梅里斯达斡尔族黑龙江齐齐哈尔"
  },
  {
    "code": "230221",
    "name": "龙江县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 龙江县",
    "rank": 3,
    "normalizedName": "龙江",
    "normalizedValue": "黑龙江齐齐哈尔龙江",
    "normalizedSearchText": "黑龙江齐齐哈尔龙江龙江黑龙江齐齐哈尔"
  },
  {
    "code": "230223",
    "name": "依安县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 依安县",
    "rank": 3,
    "normalizedName": "依安",
    "normalizedValue": "黑龙江齐齐哈尔依安",
    "normalizedSearchText": "黑龙江齐齐哈尔依安依安黑龙江齐齐哈尔"
  },
  {
    "code": "230224",
    "name": "泰来县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 泰来县",
    "rank": 3,
    "normalizedName": "泰来",
    "normalizedValue": "黑龙江齐齐哈尔泰来",
    "normalizedSearchText": "黑龙江齐齐哈尔泰来泰来黑龙江齐齐哈尔"
  },
  {
    "code": "230225",
    "name": "甘南县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 甘南县",
    "rank": 3,
    "normalizedName": "甘南",
    "normalizedValue": "黑龙江齐齐哈尔甘南",
    "normalizedSearchText": "黑龙江齐齐哈尔甘南甘南黑龙江齐齐哈尔"
  },
  {
    "code": "230227",
    "name": "富裕县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 富裕县",
    "rank": 3,
    "normalizedName": "富裕",
    "normalizedValue": "黑龙江齐齐哈尔富裕",
    "normalizedSearchText": "黑龙江齐齐哈尔富裕富裕黑龙江齐齐哈尔"
  },
  {
    "code": "230229",
    "name": "克山县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 克山县",
    "rank": 3,
    "normalizedName": "克山",
    "normalizedValue": "黑龙江齐齐哈尔克山",
    "normalizedSearchText": "黑龙江齐齐哈尔克山克山黑龙江齐齐哈尔"
  },
  {
    "code": "230230",
    "name": "克东县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 克东县",
    "rank": 3,
    "normalizedName": "克东",
    "normalizedValue": "黑龙江齐齐哈尔克东",
    "normalizedSearchText": "黑龙江齐齐哈尔克东克东黑龙江齐齐哈尔"
  },
  {
    "code": "230231",
    "name": "拜泉县",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 拜泉县",
    "rank": 3,
    "normalizedName": "拜泉",
    "normalizedValue": "黑龙江齐齐哈尔拜泉",
    "normalizedSearchText": "黑龙江齐齐哈尔拜泉拜泉黑龙江齐齐哈尔"
  },
  {
    "code": "230281",
    "name": "讷河市",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 讷河市",
    "rank": 3,
    "normalizedName": "讷河",
    "normalizedValue": "黑龙江齐齐哈尔讷河",
    "normalizedSearchText": "黑龙江齐齐哈尔讷河讷河黑龙江齐齐哈尔"
  },
  {
    "code": "230201",
    "name": "市辖区",
    "detail": "黑龙江省 / 齐齐哈尔市",
    "value": "黑龙江省 / 齐齐哈尔市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江齐齐哈尔辖",
    "normalizedSearchText": "黑龙江齐齐哈尔辖辖黑龙江齐齐哈尔"
  },
  {
    "code": "230300",
    "name": "鸡西市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 鸡西市",
    "rank": 2,
    "normalizedName": "鸡西",
    "normalizedValue": "黑龙江鸡西",
    "normalizedSearchText": "黑龙江鸡西鸡西黑龙江"
  },
  {
    "code": "230302",
    "name": "鸡冠区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 鸡冠区",
    "rank": 3,
    "normalizedName": "鸡冠",
    "normalizedValue": "黑龙江鸡西鸡冠",
    "normalizedSearchText": "黑龙江鸡西鸡冠鸡冠黑龙江鸡西"
  },
  {
    "code": "230303",
    "name": "恒山区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 恒山区",
    "rank": 3,
    "normalizedName": "恒山",
    "normalizedValue": "黑龙江鸡西恒山",
    "normalizedSearchText": "黑龙江鸡西恒山恒山黑龙江鸡西"
  },
  {
    "code": "230304",
    "name": "滴道区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 滴道区",
    "rank": 3,
    "normalizedName": "滴道",
    "normalizedValue": "黑龙江鸡西滴道",
    "normalizedSearchText": "黑龙江鸡西滴道滴道黑龙江鸡西"
  },
  {
    "code": "230305",
    "name": "梨树区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 梨树区",
    "rank": 3,
    "normalizedName": "梨树",
    "normalizedValue": "黑龙江鸡西梨树",
    "normalizedSearchText": "黑龙江鸡西梨树梨树黑龙江鸡西"
  },
  {
    "code": "230306",
    "name": "城子河区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 城子河区",
    "rank": 3,
    "normalizedName": "城子河",
    "normalizedValue": "黑龙江鸡西城子河",
    "normalizedSearchText": "黑龙江鸡西城子河城子河黑龙江鸡西"
  },
  {
    "code": "230307",
    "name": "麻山区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 麻山区",
    "rank": 3,
    "normalizedName": "麻山",
    "normalizedValue": "黑龙江鸡西麻山",
    "normalizedSearchText": "黑龙江鸡西麻山麻山黑龙江鸡西"
  },
  {
    "code": "230321",
    "name": "鸡东县",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 鸡东县",
    "rank": 3,
    "normalizedName": "鸡东",
    "normalizedValue": "黑龙江鸡西鸡东",
    "normalizedSearchText": "黑龙江鸡西鸡东鸡东黑龙江鸡西"
  },
  {
    "code": "230381",
    "name": "虎林市",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 虎林市",
    "rank": 3,
    "normalizedName": "虎林",
    "normalizedValue": "黑龙江鸡西虎林",
    "normalizedSearchText": "黑龙江鸡西虎林虎林黑龙江鸡西"
  },
  {
    "code": "230382",
    "name": "密山市",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 密山市",
    "rank": 3,
    "normalizedName": "密山",
    "normalizedValue": "黑龙江鸡西密山",
    "normalizedSearchText": "黑龙江鸡西密山密山黑龙江鸡西"
  },
  {
    "code": "230301",
    "name": "市辖区",
    "detail": "黑龙江省 / 鸡西市",
    "value": "黑龙江省 / 鸡西市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江鸡西辖",
    "normalizedSearchText": "黑龙江鸡西辖辖黑龙江鸡西"
  },
  {
    "code": "230400",
    "name": "鹤岗市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 鹤岗市",
    "rank": 2,
    "normalizedName": "鹤岗",
    "normalizedValue": "黑龙江鹤岗",
    "normalizedSearchText": "黑龙江鹤岗鹤岗黑龙江"
  },
  {
    "code": "230402",
    "name": "向阳区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 向阳区",
    "rank": 3,
    "normalizedName": "向阳",
    "normalizedValue": "黑龙江鹤岗向阳",
    "normalizedSearchText": "黑龙江鹤岗向阳向阳黑龙江鹤岗"
  },
  {
    "code": "230403",
    "name": "工农区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 工农区",
    "rank": 3,
    "normalizedName": "工农",
    "normalizedValue": "黑龙江鹤岗工农",
    "normalizedSearchText": "黑龙江鹤岗工农工农黑龙江鹤岗"
  },
  {
    "code": "230404",
    "name": "南山区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 南山区",
    "rank": 3,
    "normalizedName": "南山",
    "normalizedValue": "黑龙江鹤岗南山",
    "normalizedSearchText": "黑龙江鹤岗南山南山黑龙江鹤岗"
  },
  {
    "code": "230405",
    "name": "兴安区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 兴安区",
    "rank": 3,
    "normalizedName": "兴安",
    "normalizedValue": "黑龙江鹤岗兴安",
    "normalizedSearchText": "黑龙江鹤岗兴安兴安黑龙江鹤岗"
  },
  {
    "code": "230406",
    "name": "东山区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 东山区",
    "rank": 3,
    "normalizedName": "东山",
    "normalizedValue": "黑龙江鹤岗东山",
    "normalizedSearchText": "黑龙江鹤岗东山东山黑龙江鹤岗"
  },
  {
    "code": "230407",
    "name": "兴山区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 兴山区",
    "rank": 3,
    "normalizedName": "兴山",
    "normalizedValue": "黑龙江鹤岗兴山",
    "normalizedSearchText": "黑龙江鹤岗兴山兴山黑龙江鹤岗"
  },
  {
    "code": "230421",
    "name": "萝北县",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 萝北县",
    "rank": 3,
    "normalizedName": "萝北",
    "normalizedValue": "黑龙江鹤岗萝北",
    "normalizedSearchText": "黑龙江鹤岗萝北萝北黑龙江鹤岗"
  },
  {
    "code": "230422",
    "name": "绥滨县",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 绥滨县",
    "rank": 3,
    "normalizedName": "绥滨",
    "normalizedValue": "黑龙江鹤岗绥滨",
    "normalizedSearchText": "黑龙江鹤岗绥滨绥滨黑龙江鹤岗"
  },
  {
    "code": "230401",
    "name": "市辖区",
    "detail": "黑龙江省 / 鹤岗市",
    "value": "黑龙江省 / 鹤岗市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江鹤岗辖",
    "normalizedSearchText": "黑龙江鹤岗辖辖黑龙江鹤岗"
  },
  {
    "code": "230500",
    "name": "双鸭山市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 双鸭山市",
    "rank": 2,
    "normalizedName": "双鸭山",
    "normalizedValue": "黑龙江双鸭山",
    "normalizedSearchText": "黑龙江双鸭山双鸭山黑龙江"
  },
  {
    "code": "230502",
    "name": "尖山区",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 尖山区",
    "rank": 3,
    "normalizedName": "尖山",
    "normalizedValue": "黑龙江双鸭山尖山",
    "normalizedSearchText": "黑龙江双鸭山尖山尖山黑龙江双鸭山"
  },
  {
    "code": "230503",
    "name": "岭东区",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 岭东区",
    "rank": 3,
    "normalizedName": "岭东",
    "normalizedValue": "黑龙江双鸭山岭东",
    "normalizedSearchText": "黑龙江双鸭山岭东岭东黑龙江双鸭山"
  },
  {
    "code": "230505",
    "name": "四方台区",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 四方台区",
    "rank": 3,
    "normalizedName": "四方台",
    "normalizedValue": "黑龙江双鸭山四方台",
    "normalizedSearchText": "黑龙江双鸭山四方台四方台黑龙江双鸭山"
  },
  {
    "code": "230506",
    "name": "宝山区",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 宝山区",
    "rank": 3,
    "normalizedName": "宝山",
    "normalizedValue": "黑龙江双鸭山宝山",
    "normalizedSearchText": "黑龙江双鸭山宝山宝山黑龙江双鸭山"
  },
  {
    "code": "230521",
    "name": "集贤县",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 集贤县",
    "rank": 3,
    "normalizedName": "集贤",
    "normalizedValue": "黑龙江双鸭山集贤",
    "normalizedSearchText": "黑龙江双鸭山集贤集贤黑龙江双鸭山"
  },
  {
    "code": "230522",
    "name": "友谊县",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 友谊县",
    "rank": 3,
    "normalizedName": "友谊",
    "normalizedValue": "黑龙江双鸭山友谊",
    "normalizedSearchText": "黑龙江双鸭山友谊友谊黑龙江双鸭山"
  },
  {
    "code": "230523",
    "name": "宝清县",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 宝清县",
    "rank": 3,
    "normalizedName": "宝清",
    "normalizedValue": "黑龙江双鸭山宝清",
    "normalizedSearchText": "黑龙江双鸭山宝清宝清黑龙江双鸭山"
  },
  {
    "code": "230524",
    "name": "饶河县",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 饶河县",
    "rank": 3,
    "normalizedName": "饶河",
    "normalizedValue": "黑龙江双鸭山饶河",
    "normalizedSearchText": "黑龙江双鸭山饶河饶河黑龙江双鸭山"
  },
  {
    "code": "230501",
    "name": "市辖区",
    "detail": "黑龙江省 / 双鸭山市",
    "value": "黑龙江省 / 双鸭山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江双鸭山辖",
    "normalizedSearchText": "黑龙江双鸭山辖辖黑龙江双鸭山"
  },
  {
    "code": "230600",
    "name": "大庆市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 大庆市",
    "rank": 2,
    "normalizedName": "大庆",
    "normalizedValue": "黑龙江大庆",
    "normalizedSearchText": "黑龙江大庆大庆黑龙江"
  },
  {
    "code": "230602",
    "name": "萨尔图区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 萨尔图区",
    "rank": 3,
    "normalizedName": "萨尔图",
    "normalizedValue": "黑龙江大庆萨尔图",
    "normalizedSearchText": "黑龙江大庆萨尔图萨尔图黑龙江大庆"
  },
  {
    "code": "230603",
    "name": "龙凤区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 龙凤区",
    "rank": 3,
    "normalizedName": "龙凤",
    "normalizedValue": "黑龙江大庆龙凤",
    "normalizedSearchText": "黑龙江大庆龙凤龙凤黑龙江大庆"
  },
  {
    "code": "230604",
    "name": "让胡路区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 让胡路区",
    "rank": 3,
    "normalizedName": "让胡路",
    "normalizedValue": "黑龙江大庆让胡路",
    "normalizedSearchText": "黑龙江大庆让胡路让胡路黑龙江大庆"
  },
  {
    "code": "230605",
    "name": "红岗区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 红岗区",
    "rank": 3,
    "normalizedName": "红岗",
    "normalizedValue": "黑龙江大庆红岗",
    "normalizedSearchText": "黑龙江大庆红岗红岗黑龙江大庆"
  },
  {
    "code": "230606",
    "name": "大同区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 大同区",
    "rank": 3,
    "normalizedName": "大同",
    "normalizedValue": "黑龙江大庆大同",
    "normalizedSearchText": "黑龙江大庆大同大同黑龙江大庆"
  },
  {
    "code": "230621",
    "name": "肇州县",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 肇州县",
    "rank": 3,
    "normalizedName": "肇州",
    "normalizedValue": "黑龙江大庆肇州",
    "normalizedSearchText": "黑龙江大庆肇州肇州黑龙江大庆"
  },
  {
    "code": "230622",
    "name": "肇源县",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 肇源县",
    "rank": 3,
    "normalizedName": "肇源",
    "normalizedValue": "黑龙江大庆肇源",
    "normalizedSearchText": "黑龙江大庆肇源肇源黑龙江大庆"
  },
  {
    "code": "230623",
    "name": "林甸县",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 林甸县",
    "rank": 3,
    "normalizedName": "林甸",
    "normalizedValue": "黑龙江大庆林甸",
    "normalizedSearchText": "黑龙江大庆林甸林甸黑龙江大庆"
  },
  {
    "code": "230624",
    "name": "杜尔伯特蒙古族自治县",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 杜尔伯特蒙古族自治县",
    "rank": 3,
    "normalizedName": "杜尔伯特蒙古族自治",
    "normalizedValue": "黑龙江大庆杜尔伯特蒙古族自治",
    "normalizedSearchText": "黑龙江大庆杜尔伯特蒙古族自治杜尔伯特蒙古族自治黑龙江大庆"
  },
  {
    "code": "230601",
    "name": "市辖区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江大庆辖",
    "normalizedSearchText": "黑龙江大庆辖辖黑龙江大庆"
  },
  {
    "code": "230671",
    "name": "大庆高新技术产业开发区",
    "detail": "黑龙江省 / 大庆市",
    "value": "黑龙江省 / 大庆市 / 大庆高新技术产业开发区",
    "rank": 3,
    "normalizedName": "大庆高新技术产业开发",
    "normalizedValue": "黑龙江大庆大庆高新技术产业开发",
    "normalizedSearchText": "黑龙江大庆大庆高新技术产业开发大庆高新技术产业开发黑龙江大庆"
  },
  {
    "code": "230700",
    "name": "伊春市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 伊春市",
    "rank": 2,
    "normalizedName": "伊春",
    "normalizedValue": "黑龙江伊春",
    "normalizedSearchText": "黑龙江伊春伊春黑龙江"
  },
  {
    "code": "230717",
    "name": "伊美区",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 伊美区",
    "rank": 3,
    "normalizedName": "伊美",
    "normalizedValue": "黑龙江伊春伊美",
    "normalizedSearchText": "黑龙江伊春伊美伊美黑龙江伊春"
  },
  {
    "code": "230718",
    "name": "乌翠区",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 乌翠区",
    "rank": 3,
    "normalizedName": "乌翠",
    "normalizedValue": "黑龙江伊春乌翠",
    "normalizedSearchText": "黑龙江伊春乌翠乌翠黑龙江伊春"
  },
  {
    "code": "230719",
    "name": "友好区",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 友好区",
    "rank": 3,
    "normalizedName": "友好",
    "normalizedValue": "黑龙江伊春友好",
    "normalizedSearchText": "黑龙江伊春友好友好黑龙江伊春"
  },
  {
    "code": "230722",
    "name": "嘉荫县",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 嘉荫县",
    "rank": 3,
    "normalizedName": "嘉荫",
    "normalizedValue": "黑龙江伊春嘉荫",
    "normalizedSearchText": "黑龙江伊春嘉荫嘉荫黑龙江伊春"
  },
  {
    "code": "230723",
    "name": "汤旺县",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 汤旺县",
    "rank": 3,
    "normalizedName": "汤旺",
    "normalizedValue": "黑龙江伊春汤旺",
    "normalizedSearchText": "黑龙江伊春汤旺汤旺黑龙江伊春"
  },
  {
    "code": "230724",
    "name": "丰林县",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 丰林县",
    "rank": 3,
    "normalizedName": "丰林",
    "normalizedValue": "黑龙江伊春丰林",
    "normalizedSearchText": "黑龙江伊春丰林丰林黑龙江伊春"
  },
  {
    "code": "230725",
    "name": "大箐山县",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 大箐山县",
    "rank": 3,
    "normalizedName": "大箐山",
    "normalizedValue": "黑龙江伊春大箐山",
    "normalizedSearchText": "黑龙江伊春大箐山大箐山黑龙江伊春"
  },
  {
    "code": "230726",
    "name": "南岔县",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 南岔县",
    "rank": 3,
    "normalizedName": "南岔",
    "normalizedValue": "黑龙江伊春南岔",
    "normalizedSearchText": "黑龙江伊春南岔南岔黑龙江伊春"
  },
  {
    "code": "230751",
    "name": "金林区",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 金林区",
    "rank": 3,
    "normalizedName": "金林",
    "normalizedValue": "黑龙江伊春金林",
    "normalizedSearchText": "黑龙江伊春金林金林黑龙江伊春"
  },
  {
    "code": "230781",
    "name": "铁力市",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 铁力市",
    "rank": 3,
    "normalizedName": "铁力",
    "normalizedValue": "黑龙江伊春铁力",
    "normalizedSearchText": "黑龙江伊春铁力铁力黑龙江伊春"
  },
  {
    "code": "230701",
    "name": "市辖区",
    "detail": "黑龙江省 / 伊春市",
    "value": "黑龙江省 / 伊春市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江伊春辖",
    "normalizedSearchText": "黑龙江伊春辖辖黑龙江伊春"
  },
  {
    "code": "230800",
    "name": "佳木斯市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 佳木斯市",
    "rank": 2,
    "normalizedName": "佳木斯",
    "normalizedValue": "黑龙江佳木斯",
    "normalizedSearchText": "黑龙江佳木斯佳木斯黑龙江"
  },
  {
    "code": "230803",
    "name": "向阳区",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 向阳区",
    "rank": 3,
    "normalizedName": "向阳",
    "normalizedValue": "黑龙江佳木斯向阳",
    "normalizedSearchText": "黑龙江佳木斯向阳向阳黑龙江佳木斯"
  },
  {
    "code": "230804",
    "name": "前进区",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 前进区",
    "rank": 3,
    "normalizedName": "前进",
    "normalizedValue": "黑龙江佳木斯前进",
    "normalizedSearchText": "黑龙江佳木斯前进前进黑龙江佳木斯"
  },
  {
    "code": "230805",
    "name": "东风区",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 东风区",
    "rank": 3,
    "normalizedName": "东风",
    "normalizedValue": "黑龙江佳木斯东风",
    "normalizedSearchText": "黑龙江佳木斯东风东风黑龙江佳木斯"
  },
  {
    "code": "230811",
    "name": "郊区",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 郊区",
    "rank": 3,
    "normalizedName": "郊",
    "normalizedValue": "黑龙江佳木斯郊",
    "normalizedSearchText": "黑龙江佳木斯郊郊黑龙江佳木斯"
  },
  {
    "code": "230822",
    "name": "桦南县",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 桦南县",
    "rank": 3,
    "normalizedName": "桦南",
    "normalizedValue": "黑龙江佳木斯桦南",
    "normalizedSearchText": "黑龙江佳木斯桦南桦南黑龙江佳木斯"
  },
  {
    "code": "230826",
    "name": "桦川县",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 桦川县",
    "rank": 3,
    "normalizedName": "桦川",
    "normalizedValue": "黑龙江佳木斯桦川",
    "normalizedSearchText": "黑龙江佳木斯桦川桦川黑龙江佳木斯"
  },
  {
    "code": "230828",
    "name": "汤原县",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 汤原县",
    "rank": 3,
    "normalizedName": "汤原",
    "normalizedValue": "黑龙江佳木斯汤原",
    "normalizedSearchText": "黑龙江佳木斯汤原汤原黑龙江佳木斯"
  },
  {
    "code": "230881",
    "name": "同江市",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 同江市",
    "rank": 3,
    "normalizedName": "同江",
    "normalizedValue": "黑龙江佳木斯同江",
    "normalizedSearchText": "黑龙江佳木斯同江同江黑龙江佳木斯"
  },
  {
    "code": "230882",
    "name": "富锦市",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 富锦市",
    "rank": 3,
    "normalizedName": "富锦",
    "normalizedValue": "黑龙江佳木斯富锦",
    "normalizedSearchText": "黑龙江佳木斯富锦富锦黑龙江佳木斯"
  },
  {
    "code": "230883",
    "name": "抚远市",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 抚远市",
    "rank": 3,
    "normalizedName": "抚远",
    "normalizedValue": "黑龙江佳木斯抚远",
    "normalizedSearchText": "黑龙江佳木斯抚远抚远黑龙江佳木斯"
  },
  {
    "code": "230801",
    "name": "市辖区",
    "detail": "黑龙江省 / 佳木斯市",
    "value": "黑龙江省 / 佳木斯市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江佳木斯辖",
    "normalizedSearchText": "黑龙江佳木斯辖辖黑龙江佳木斯"
  },
  {
    "code": "230900",
    "name": "七台河市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 七台河市",
    "rank": 2,
    "normalizedName": "七台河",
    "normalizedValue": "黑龙江七台河",
    "normalizedSearchText": "黑龙江七台河七台河黑龙江"
  },
  {
    "code": "230902",
    "name": "新兴区",
    "detail": "黑龙江省 / 七台河市",
    "value": "黑龙江省 / 七台河市 / 新兴区",
    "rank": 3,
    "normalizedName": "新兴",
    "normalizedValue": "黑龙江七台河新兴",
    "normalizedSearchText": "黑龙江七台河新兴新兴黑龙江七台河"
  },
  {
    "code": "230903",
    "name": "桃山区",
    "detail": "黑龙江省 / 七台河市",
    "value": "黑龙江省 / 七台河市 / 桃山区",
    "rank": 3,
    "normalizedName": "桃山",
    "normalizedValue": "黑龙江七台河桃山",
    "normalizedSearchText": "黑龙江七台河桃山桃山黑龙江七台河"
  },
  {
    "code": "230904",
    "name": "茄子河区",
    "detail": "黑龙江省 / 七台河市",
    "value": "黑龙江省 / 七台河市 / 茄子河区",
    "rank": 3,
    "normalizedName": "茄子河",
    "normalizedValue": "黑龙江七台河茄子河",
    "normalizedSearchText": "黑龙江七台河茄子河茄子河黑龙江七台河"
  },
  {
    "code": "230921",
    "name": "勃利县",
    "detail": "黑龙江省 / 七台河市",
    "value": "黑龙江省 / 七台河市 / 勃利县",
    "rank": 3,
    "normalizedName": "勃利",
    "normalizedValue": "黑龙江七台河勃利",
    "normalizedSearchText": "黑龙江七台河勃利勃利黑龙江七台河"
  },
  {
    "code": "230901",
    "name": "市辖区",
    "detail": "黑龙江省 / 七台河市",
    "value": "黑龙江省 / 七台河市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江七台河辖",
    "normalizedSearchText": "黑龙江七台河辖辖黑龙江七台河"
  },
  {
    "code": "231000",
    "name": "牡丹江市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 牡丹江市",
    "rank": 2,
    "normalizedName": "牡丹江",
    "normalizedValue": "黑龙江牡丹江",
    "normalizedSearchText": "黑龙江牡丹江牡丹江黑龙江"
  },
  {
    "code": "231002",
    "name": "东安区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 东安区",
    "rank": 3,
    "normalizedName": "东安",
    "normalizedValue": "黑龙江牡丹江东安",
    "normalizedSearchText": "黑龙江牡丹江东安东安黑龙江牡丹江"
  },
  {
    "code": "231003",
    "name": "阳明区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 阳明区",
    "rank": 3,
    "normalizedName": "阳明",
    "normalizedValue": "黑龙江牡丹江阳明",
    "normalizedSearchText": "黑龙江牡丹江阳明阳明黑龙江牡丹江"
  },
  {
    "code": "231004",
    "name": "爱民区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 爱民区",
    "rank": 3,
    "normalizedName": "爱民",
    "normalizedValue": "黑龙江牡丹江爱民",
    "normalizedSearchText": "黑龙江牡丹江爱民爱民黑龙江牡丹江"
  },
  {
    "code": "231005",
    "name": "西安区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 西安区",
    "rank": 3,
    "normalizedName": "西安",
    "normalizedValue": "黑龙江牡丹江西安",
    "normalizedSearchText": "黑龙江牡丹江西安西安黑龙江牡丹江"
  },
  {
    "code": "231025",
    "name": "林口县",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 林口县",
    "rank": 3,
    "normalizedName": "林口",
    "normalizedValue": "黑龙江牡丹江林口",
    "normalizedSearchText": "黑龙江牡丹江林口林口黑龙江牡丹江"
  },
  {
    "code": "231081",
    "name": "绥芬河市",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 绥芬河市",
    "rank": 3,
    "normalizedName": "绥芬河",
    "normalizedValue": "黑龙江牡丹江绥芬河",
    "normalizedSearchText": "黑龙江牡丹江绥芬河绥芬河黑龙江牡丹江"
  },
  {
    "code": "231083",
    "name": "海林市",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 海林市",
    "rank": 3,
    "normalizedName": "海林",
    "normalizedValue": "黑龙江牡丹江海林",
    "normalizedSearchText": "黑龙江牡丹江海林海林黑龙江牡丹江"
  },
  {
    "code": "231084",
    "name": "宁安市",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 宁安市",
    "rank": 3,
    "normalizedName": "宁安",
    "normalizedValue": "黑龙江牡丹江宁安",
    "normalizedSearchText": "黑龙江牡丹江宁安宁安黑龙江牡丹江"
  },
  {
    "code": "231085",
    "name": "穆棱市",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 穆棱市",
    "rank": 3,
    "normalizedName": "穆棱",
    "normalizedValue": "黑龙江牡丹江穆棱",
    "normalizedSearchText": "黑龙江牡丹江穆棱穆棱黑龙江牡丹江"
  },
  {
    "code": "231086",
    "name": "东宁市",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 东宁市",
    "rank": 3,
    "normalizedName": "东宁",
    "normalizedValue": "黑龙江牡丹江东宁",
    "normalizedSearchText": "黑龙江牡丹江东宁东宁黑龙江牡丹江"
  },
  {
    "code": "231001",
    "name": "市辖区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江牡丹江辖",
    "normalizedSearchText": "黑龙江牡丹江辖辖黑龙江牡丹江"
  },
  {
    "code": "231071",
    "name": "牡丹江经济技术开发区",
    "detail": "黑龙江省 / 牡丹江市",
    "value": "黑龙江省 / 牡丹江市 / 牡丹江经济技术开发区",
    "rank": 3,
    "normalizedName": "牡丹江经济技术开发",
    "normalizedValue": "黑龙江牡丹江牡丹江经济技术开发",
    "normalizedSearchText": "黑龙江牡丹江牡丹江经济技术开发牡丹江经济技术开发黑龙江牡丹江"
  },
  {
    "code": "231100",
    "name": "黑河市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 黑河市",
    "rank": 2,
    "normalizedName": "黑河",
    "normalizedValue": "黑龙江黑河",
    "normalizedSearchText": "黑龙江黑河黑河黑龙江"
  },
  {
    "code": "231102",
    "name": "爱辉区",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 爱辉区",
    "rank": 3,
    "normalizedName": "爱辉",
    "normalizedValue": "黑龙江黑河爱辉",
    "normalizedSearchText": "黑龙江黑河爱辉爱辉黑龙江黑河"
  },
  {
    "code": "231123",
    "name": "逊克县",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 逊克县",
    "rank": 3,
    "normalizedName": "逊克",
    "normalizedValue": "黑龙江黑河逊克",
    "normalizedSearchText": "黑龙江黑河逊克逊克黑龙江黑河"
  },
  {
    "code": "231124",
    "name": "孙吴县",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 孙吴县",
    "rank": 3,
    "normalizedName": "孙吴",
    "normalizedValue": "黑龙江黑河孙吴",
    "normalizedSearchText": "黑龙江黑河孙吴孙吴黑龙江黑河"
  },
  {
    "code": "231181",
    "name": "北安市",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 北安市",
    "rank": 3,
    "normalizedName": "北安",
    "normalizedValue": "黑龙江黑河北安",
    "normalizedSearchText": "黑龙江黑河北安北安黑龙江黑河"
  },
  {
    "code": "231182",
    "name": "五大连池市",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 五大连池市",
    "rank": 3,
    "normalizedName": "五大连池",
    "normalizedValue": "黑龙江黑河五大连池",
    "normalizedSearchText": "黑龙江黑河五大连池五大连池黑龙江黑河"
  },
  {
    "code": "231183",
    "name": "嫩江市",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 嫩江市",
    "rank": 3,
    "normalizedName": "嫩江",
    "normalizedValue": "黑龙江黑河嫩江",
    "normalizedSearchText": "黑龙江黑河嫩江嫩江黑龙江黑河"
  },
  {
    "code": "231101",
    "name": "市辖区",
    "detail": "黑龙江省 / 黑河市",
    "value": "黑龙江省 / 黑河市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江黑河辖",
    "normalizedSearchText": "黑龙江黑河辖辖黑龙江黑河"
  },
  {
    "code": "231200",
    "name": "绥化市",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 绥化市",
    "rank": 2,
    "normalizedName": "绥化",
    "normalizedValue": "黑龙江绥化",
    "normalizedSearchText": "黑龙江绥化绥化黑龙江"
  },
  {
    "code": "231202",
    "name": "北林区",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 北林区",
    "rank": 3,
    "normalizedName": "北林",
    "normalizedValue": "黑龙江绥化北林",
    "normalizedSearchText": "黑龙江绥化北林北林黑龙江绥化"
  },
  {
    "code": "231221",
    "name": "望奎县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 望奎县",
    "rank": 3,
    "normalizedName": "望奎",
    "normalizedValue": "黑龙江绥化望奎",
    "normalizedSearchText": "黑龙江绥化望奎望奎黑龙江绥化"
  },
  {
    "code": "231222",
    "name": "兰西县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 兰西县",
    "rank": 3,
    "normalizedName": "兰西",
    "normalizedValue": "黑龙江绥化兰西",
    "normalizedSearchText": "黑龙江绥化兰西兰西黑龙江绥化"
  },
  {
    "code": "231223",
    "name": "青冈县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 青冈县",
    "rank": 3,
    "normalizedName": "青冈",
    "normalizedValue": "黑龙江绥化青冈",
    "normalizedSearchText": "黑龙江绥化青冈青冈黑龙江绥化"
  },
  {
    "code": "231224",
    "name": "庆安县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 庆安县",
    "rank": 3,
    "normalizedName": "庆安",
    "normalizedValue": "黑龙江绥化庆安",
    "normalizedSearchText": "黑龙江绥化庆安庆安黑龙江绥化"
  },
  {
    "code": "231225",
    "name": "明水县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 明水县",
    "rank": 3,
    "normalizedName": "明水",
    "normalizedValue": "黑龙江绥化明水",
    "normalizedSearchText": "黑龙江绥化明水明水黑龙江绥化"
  },
  {
    "code": "231226",
    "name": "绥棱县",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 绥棱县",
    "rank": 3,
    "normalizedName": "绥棱",
    "normalizedValue": "黑龙江绥化绥棱",
    "normalizedSearchText": "黑龙江绥化绥棱绥棱黑龙江绥化"
  },
  {
    "code": "231281",
    "name": "安达市",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 安达市",
    "rank": 3,
    "normalizedName": "安达",
    "normalizedValue": "黑龙江绥化安达",
    "normalizedSearchText": "黑龙江绥化安达安达黑龙江绥化"
  },
  {
    "code": "231282",
    "name": "肇东市",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 肇东市",
    "rank": 3,
    "normalizedName": "肇东",
    "normalizedValue": "黑龙江绥化肇东",
    "normalizedSearchText": "黑龙江绥化肇东肇东黑龙江绥化"
  },
  {
    "code": "231283",
    "name": "海伦市",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 海伦市",
    "rank": 3,
    "normalizedName": "海伦",
    "normalizedValue": "黑龙江绥化海伦",
    "normalizedSearchText": "黑龙江绥化海伦海伦黑龙江绥化"
  },
  {
    "code": "231201",
    "name": "市辖区",
    "detail": "黑龙江省 / 绥化市",
    "value": "黑龙江省 / 绥化市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "黑龙江绥化辖",
    "normalizedSearchText": "黑龙江绥化辖辖黑龙江绥化"
  },
  {
    "code": "232700",
    "name": "大兴安岭地区",
    "detail": "黑龙江省",
    "value": "黑龙江省 / 大兴安岭地区",
    "rank": 2,
    "normalizedName": "大兴安岭",
    "normalizedValue": "黑龙江大兴安岭",
    "normalizedSearchText": "黑龙江大兴安岭大兴安岭黑龙江"
  },
  {
    "code": "232701",
    "name": "漠河市",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 漠河市",
    "rank": 3,
    "normalizedName": "漠河",
    "normalizedValue": "黑龙江大兴安岭漠河",
    "normalizedSearchText": "黑龙江大兴安岭漠河漠河黑龙江大兴安岭"
  },
  {
    "code": "232721",
    "name": "呼玛县",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 呼玛县",
    "rank": 3,
    "normalizedName": "呼玛",
    "normalizedValue": "黑龙江大兴安岭呼玛",
    "normalizedSearchText": "黑龙江大兴安岭呼玛呼玛黑龙江大兴安岭"
  },
  {
    "code": "232722",
    "name": "塔河县",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 塔河县",
    "rank": 3,
    "normalizedName": "塔河",
    "normalizedValue": "黑龙江大兴安岭塔河",
    "normalizedSearchText": "黑龙江大兴安岭塔河塔河黑龙江大兴安岭"
  },
  {
    "code": "232761",
    "name": "加格达奇区",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 加格达奇区",
    "rank": 3,
    "normalizedName": "加格达奇",
    "normalizedValue": "黑龙江大兴安岭加格达奇",
    "normalizedSearchText": "黑龙江大兴安岭加格达奇加格达奇黑龙江大兴安岭"
  },
  {
    "code": "232762",
    "name": "松岭区",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 松岭区",
    "rank": 3,
    "normalizedName": "松岭",
    "normalizedValue": "黑龙江大兴安岭松岭",
    "normalizedSearchText": "黑龙江大兴安岭松岭松岭黑龙江大兴安岭"
  },
  {
    "code": "232763",
    "name": "新林区",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 新林区",
    "rank": 3,
    "normalizedName": "新林",
    "normalizedValue": "黑龙江大兴安岭新林",
    "normalizedSearchText": "黑龙江大兴安岭新林新林黑龙江大兴安岭"
  },
  {
    "code": "232764",
    "name": "呼中区",
    "detail": "黑龙江省 / 大兴安岭地区",
    "value": "黑龙江省 / 大兴安岭地区 / 呼中区",
    "rank": 3,
    "normalizedName": "呼中",
    "normalizedValue": "黑龙江大兴安岭呼中",
    "normalizedSearchText": "黑龙江大兴安岭呼中呼中黑龙江大兴安岭"
  },
  {
    "code": "310000",
    "name": "上海市",
    "detail": "?????",
    "value": "上海市",
    "rank": 1,
    "normalizedName": "上海",
    "normalizedValue": "上海",
    "normalizedSearchText": "上海上海"
  },
  {
    "code": "310101",
    "name": "黄浦区",
    "detail": "上海市",
    "value": "上海市 / 黄浦区",
    "rank": 3,
    "normalizedName": "黄浦",
    "normalizedValue": "上海黄浦",
    "normalizedSearchText": "上海黄浦黄浦上海"
  },
  {
    "code": "310104",
    "name": "徐汇区",
    "detail": "上海市",
    "value": "上海市 / 徐汇区",
    "rank": 3,
    "normalizedName": "徐汇",
    "normalizedValue": "上海徐汇",
    "normalizedSearchText": "上海徐汇徐汇上海"
  },
  {
    "code": "310105",
    "name": "长宁区",
    "detail": "上海市",
    "value": "上海市 / 长宁区",
    "rank": 3,
    "normalizedName": "长宁",
    "normalizedValue": "上海长宁",
    "normalizedSearchText": "上海长宁长宁上海"
  },
  {
    "code": "310106",
    "name": "静安区",
    "detail": "上海市",
    "value": "上海市 / 静安区",
    "rank": 3,
    "normalizedName": "静安",
    "normalizedValue": "上海静安",
    "normalizedSearchText": "上海静安静安上海"
  },
  {
    "code": "310107",
    "name": "普陀区",
    "detail": "上海市",
    "value": "上海市 / 普陀区",
    "rank": 3,
    "normalizedName": "普陀",
    "normalizedValue": "上海普陀",
    "normalizedSearchText": "上海普陀普陀上海"
  },
  {
    "code": "310109",
    "name": "虹口区",
    "detail": "上海市",
    "value": "上海市 / 虹口区",
    "rank": 3,
    "normalizedName": "虹口",
    "normalizedValue": "上海虹口",
    "normalizedSearchText": "上海虹口虹口上海"
  },
  {
    "code": "310110",
    "name": "杨浦区",
    "detail": "上海市",
    "value": "上海市 / 杨浦区",
    "rank": 3,
    "normalizedName": "杨浦",
    "normalizedValue": "上海杨浦",
    "normalizedSearchText": "上海杨浦杨浦上海"
  },
  {
    "code": "310112",
    "name": "闵行区",
    "detail": "上海市",
    "value": "上海市 / 闵行区",
    "rank": 3,
    "normalizedName": "闵行",
    "normalizedValue": "上海闵行",
    "normalizedSearchText": "上海闵行闵行上海"
  },
  {
    "code": "310113",
    "name": "宝山区",
    "detail": "上海市",
    "value": "上海市 / 宝山区",
    "rank": 3,
    "normalizedName": "宝山",
    "normalizedValue": "上海宝山",
    "normalizedSearchText": "上海宝山宝山上海"
  },
  {
    "code": "310114",
    "name": "嘉定区",
    "detail": "上海市",
    "value": "上海市 / 嘉定区",
    "rank": 3,
    "normalizedName": "嘉定",
    "normalizedValue": "上海嘉定",
    "normalizedSearchText": "上海嘉定嘉定上海"
  },
  {
    "code": "310115",
    "name": "浦东新区",
    "detail": "上海市",
    "value": "上海市 / 浦东新区",
    "rank": 3,
    "normalizedName": "浦东新",
    "normalizedValue": "上海浦东新",
    "normalizedSearchText": "上海浦东新浦东新上海"
  },
  {
    "code": "310116",
    "name": "金山区",
    "detail": "上海市",
    "value": "上海市 / 金山区",
    "rank": 3,
    "normalizedName": "金山",
    "normalizedValue": "上海金山",
    "normalizedSearchText": "上海金山金山上海"
  },
  {
    "code": "310117",
    "name": "松江区",
    "detail": "上海市",
    "value": "上海市 / 松江区",
    "rank": 3,
    "normalizedName": "松江",
    "normalizedValue": "上海松江",
    "normalizedSearchText": "上海松江松江上海"
  },
  {
    "code": "310118",
    "name": "青浦区",
    "detail": "上海市",
    "value": "上海市 / 青浦区",
    "rank": 3,
    "normalizedName": "青浦",
    "normalizedValue": "上海青浦",
    "normalizedSearchText": "上海青浦青浦上海"
  },
  {
    "code": "310120",
    "name": "奉贤区",
    "detail": "上海市",
    "value": "上海市 / 奉贤区",
    "rank": 3,
    "normalizedName": "奉贤",
    "normalizedValue": "上海奉贤",
    "normalizedSearchText": "上海奉贤奉贤上海"
  },
  {
    "code": "310151",
    "name": "崇明区",
    "detail": "上海市",
    "value": "上海市 / 崇明区",
    "rank": 3,
    "normalizedName": "崇明",
    "normalizedValue": "上海崇明",
    "normalizedSearchText": "上海崇明崇明上海"
  },
  {
    "code": "320000",
    "name": "江苏省",
    "detail": "?????",
    "value": "江苏省",
    "rank": 1,
    "normalizedName": "江苏",
    "normalizedValue": "江苏",
    "normalizedSearchText": "江苏江苏"
  },
  {
    "code": "320100",
    "name": "南京市",
    "detail": "江苏省",
    "value": "江苏省 / 南京市",
    "rank": 2,
    "normalizedName": "南京",
    "normalizedValue": "江苏南京",
    "normalizedSearchText": "江苏南京南京江苏"
  },
  {
    "code": "320102",
    "name": "玄武区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 玄武区",
    "rank": 3,
    "normalizedName": "玄武",
    "normalizedValue": "江苏南京玄武",
    "normalizedSearchText": "江苏南京玄武玄武江苏南京"
  },
  {
    "code": "320104",
    "name": "秦淮区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 秦淮区",
    "rank": 3,
    "normalizedName": "秦淮",
    "normalizedValue": "江苏南京秦淮",
    "normalizedSearchText": "江苏南京秦淮秦淮江苏南京"
  },
  {
    "code": "320105",
    "name": "建邺区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 建邺区",
    "rank": 3,
    "normalizedName": "建邺",
    "normalizedValue": "江苏南京建邺",
    "normalizedSearchText": "江苏南京建邺建邺江苏南京"
  },
  {
    "code": "320106",
    "name": "鼓楼区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 鼓楼区",
    "rank": 3,
    "normalizedName": "鼓楼",
    "normalizedValue": "江苏南京鼓楼",
    "normalizedSearchText": "江苏南京鼓楼鼓楼江苏南京"
  },
  {
    "code": "320111",
    "name": "浦口区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 浦口区",
    "rank": 3,
    "normalizedName": "浦口",
    "normalizedValue": "江苏南京浦口",
    "normalizedSearchText": "江苏南京浦口浦口江苏南京"
  },
  {
    "code": "320113",
    "name": "栖霞区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 栖霞区",
    "rank": 3,
    "normalizedName": "栖霞",
    "normalizedValue": "江苏南京栖霞",
    "normalizedSearchText": "江苏南京栖霞栖霞江苏南京"
  },
  {
    "code": "320114",
    "name": "雨花台区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 雨花台区",
    "rank": 3,
    "normalizedName": "雨花台",
    "normalizedValue": "江苏南京雨花台",
    "normalizedSearchText": "江苏南京雨花台雨花台江苏南京"
  },
  {
    "code": "320115",
    "name": "江宁区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 江宁区",
    "rank": 3,
    "normalizedName": "江宁",
    "normalizedValue": "江苏南京江宁",
    "normalizedSearchText": "江苏南京江宁江宁江苏南京"
  },
  {
    "code": "320116",
    "name": "六合区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 六合区",
    "rank": 3,
    "normalizedName": "六合",
    "normalizedValue": "江苏南京六合",
    "normalizedSearchText": "江苏南京六合六合江苏南京"
  },
  {
    "code": "320117",
    "name": "溧水区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 溧水区",
    "rank": 3,
    "normalizedName": "溧水",
    "normalizedValue": "江苏南京溧水",
    "normalizedSearchText": "江苏南京溧水溧水江苏南京"
  },
  {
    "code": "320118",
    "name": "高淳区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 高淳区",
    "rank": 3,
    "normalizedName": "高淳",
    "normalizedValue": "江苏南京高淳",
    "normalizedSearchText": "江苏南京高淳高淳江苏南京"
  },
  {
    "code": "320101",
    "name": "市辖区",
    "detail": "江苏省 / 南京市",
    "value": "江苏省 / 南京市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏南京辖",
    "normalizedSearchText": "江苏南京辖辖江苏南京"
  },
  {
    "code": "320200",
    "name": "无锡市",
    "detail": "江苏省",
    "value": "江苏省 / 无锡市",
    "rank": 2,
    "normalizedName": "无锡",
    "normalizedValue": "江苏无锡",
    "normalizedSearchText": "江苏无锡无锡江苏"
  },
  {
    "code": "320205",
    "name": "锡山区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 锡山区",
    "rank": 3,
    "normalizedName": "锡山",
    "normalizedValue": "江苏无锡锡山",
    "normalizedSearchText": "江苏无锡锡山锡山江苏无锡"
  },
  {
    "code": "320206",
    "name": "惠山区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 惠山区",
    "rank": 3,
    "normalizedName": "惠山",
    "normalizedValue": "江苏无锡惠山",
    "normalizedSearchText": "江苏无锡惠山惠山江苏无锡"
  },
  {
    "code": "320211",
    "name": "滨湖区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 滨湖区",
    "rank": 3,
    "normalizedName": "滨湖",
    "normalizedValue": "江苏无锡滨湖",
    "normalizedSearchText": "江苏无锡滨湖滨湖江苏无锡"
  },
  {
    "code": "320213",
    "name": "梁溪区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 梁溪区",
    "rank": 3,
    "normalizedName": "梁溪",
    "normalizedValue": "江苏无锡梁溪",
    "normalizedSearchText": "江苏无锡梁溪梁溪江苏无锡"
  },
  {
    "code": "320214",
    "name": "新吴区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 新吴区",
    "rank": 3,
    "normalizedName": "新吴",
    "normalizedValue": "江苏无锡新吴",
    "normalizedSearchText": "江苏无锡新吴新吴江苏无锡"
  },
  {
    "code": "320281",
    "name": "江阴市",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 江阴市",
    "rank": 3,
    "normalizedName": "江阴",
    "normalizedValue": "江苏无锡江阴",
    "normalizedSearchText": "江苏无锡江阴江阴江苏无锡"
  },
  {
    "code": "320282",
    "name": "宜兴市",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 宜兴市",
    "rank": 3,
    "normalizedName": "宜兴",
    "normalizedValue": "江苏无锡宜兴",
    "normalizedSearchText": "江苏无锡宜兴宜兴江苏无锡"
  },
  {
    "code": "320201",
    "name": "市辖区",
    "detail": "江苏省 / 无锡市",
    "value": "江苏省 / 无锡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏无锡辖",
    "normalizedSearchText": "江苏无锡辖辖江苏无锡"
  },
  {
    "code": "320300",
    "name": "徐州市",
    "detail": "江苏省",
    "value": "江苏省 / 徐州市",
    "rank": 2,
    "normalizedName": "徐州",
    "normalizedValue": "江苏徐州",
    "normalizedSearchText": "江苏徐州徐州江苏"
  },
  {
    "code": "320302",
    "name": "鼓楼区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 鼓楼区",
    "rank": 3,
    "normalizedName": "鼓楼",
    "normalizedValue": "江苏徐州鼓楼",
    "normalizedSearchText": "江苏徐州鼓楼鼓楼江苏徐州"
  },
  {
    "code": "320303",
    "name": "云龙区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 云龙区",
    "rank": 3,
    "normalizedName": "云龙",
    "normalizedValue": "江苏徐州云龙",
    "normalizedSearchText": "江苏徐州云龙云龙江苏徐州"
  },
  {
    "code": "320305",
    "name": "贾汪区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 贾汪区",
    "rank": 3,
    "normalizedName": "贾汪",
    "normalizedValue": "江苏徐州贾汪",
    "normalizedSearchText": "江苏徐州贾汪贾汪江苏徐州"
  },
  {
    "code": "320311",
    "name": "泉山区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 泉山区",
    "rank": 3,
    "normalizedName": "泉山",
    "normalizedValue": "江苏徐州泉山",
    "normalizedSearchText": "江苏徐州泉山泉山江苏徐州"
  },
  {
    "code": "320312",
    "name": "铜山区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 铜山区",
    "rank": 3,
    "normalizedName": "铜山",
    "normalizedValue": "江苏徐州铜山",
    "normalizedSearchText": "江苏徐州铜山铜山江苏徐州"
  },
  {
    "code": "320321",
    "name": "丰县",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 丰县",
    "rank": 3,
    "normalizedName": "丰",
    "normalizedValue": "江苏徐州丰",
    "normalizedSearchText": "江苏徐州丰丰江苏徐州"
  },
  {
    "code": "320322",
    "name": "沛县",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 沛县",
    "rank": 3,
    "normalizedName": "沛",
    "normalizedValue": "江苏徐州沛",
    "normalizedSearchText": "江苏徐州沛沛江苏徐州"
  },
  {
    "code": "320324",
    "name": "睢宁县",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 睢宁县",
    "rank": 3,
    "normalizedName": "睢宁",
    "normalizedValue": "江苏徐州睢宁",
    "normalizedSearchText": "江苏徐州睢宁睢宁江苏徐州"
  },
  {
    "code": "320381",
    "name": "新沂市",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 新沂市",
    "rank": 3,
    "normalizedName": "新沂",
    "normalizedValue": "江苏徐州新沂",
    "normalizedSearchText": "江苏徐州新沂新沂江苏徐州"
  },
  {
    "code": "320382",
    "name": "邳州市",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 邳州市",
    "rank": 3,
    "normalizedName": "邳州",
    "normalizedValue": "江苏徐州邳州",
    "normalizedSearchText": "江苏徐州邳州邳州江苏徐州"
  },
  {
    "code": "320301",
    "name": "市辖区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏徐州辖",
    "normalizedSearchText": "江苏徐州辖辖江苏徐州"
  },
  {
    "code": "320371",
    "name": "徐州经济技术开发区",
    "detail": "江苏省 / 徐州市",
    "value": "江苏省 / 徐州市 / 徐州经济技术开发区",
    "rank": 3,
    "normalizedName": "徐州经济技术开发",
    "normalizedValue": "江苏徐州徐州经济技术开发",
    "normalizedSearchText": "江苏徐州徐州经济技术开发徐州经济技术开发江苏徐州"
  },
  {
    "code": "320400",
    "name": "常州市",
    "detail": "江苏省",
    "value": "江苏省 / 常州市",
    "rank": 2,
    "normalizedName": "常州",
    "normalizedValue": "江苏常州",
    "normalizedSearchText": "江苏常州常州江苏"
  },
  {
    "code": "320402",
    "name": "天宁区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 天宁区",
    "rank": 3,
    "normalizedName": "天宁",
    "normalizedValue": "江苏常州天宁",
    "normalizedSearchText": "江苏常州天宁天宁江苏常州"
  },
  {
    "code": "320404",
    "name": "钟楼区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 钟楼区",
    "rank": 3,
    "normalizedName": "钟楼",
    "normalizedValue": "江苏常州钟楼",
    "normalizedSearchText": "江苏常州钟楼钟楼江苏常州"
  },
  {
    "code": "320411",
    "name": "新北区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 新北区",
    "rank": 3,
    "normalizedName": "新北",
    "normalizedValue": "江苏常州新北",
    "normalizedSearchText": "江苏常州新北新北江苏常州"
  },
  {
    "code": "320412",
    "name": "武进区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 武进区",
    "rank": 3,
    "normalizedName": "武进",
    "normalizedValue": "江苏常州武进",
    "normalizedSearchText": "江苏常州武进武进江苏常州"
  },
  {
    "code": "320413",
    "name": "金坛区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 金坛区",
    "rank": 3,
    "normalizedName": "金坛",
    "normalizedValue": "江苏常州金坛",
    "normalizedSearchText": "江苏常州金坛金坛江苏常州"
  },
  {
    "code": "320481",
    "name": "溧阳市",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 溧阳市",
    "rank": 3,
    "normalizedName": "溧阳",
    "normalizedValue": "江苏常州溧阳",
    "normalizedSearchText": "江苏常州溧阳溧阳江苏常州"
  },
  {
    "code": "320401",
    "name": "市辖区",
    "detail": "江苏省 / 常州市",
    "value": "江苏省 / 常州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏常州辖",
    "normalizedSearchText": "江苏常州辖辖江苏常州"
  },
  {
    "code": "320500",
    "name": "苏州市",
    "detail": "江苏省",
    "value": "江苏省 / 苏州市",
    "rank": 2,
    "normalizedName": "苏州",
    "normalizedValue": "江苏苏州",
    "normalizedSearchText": "江苏苏州苏州江苏"
  },
  {
    "code": "320505",
    "name": "虎丘区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 虎丘区",
    "rank": 3,
    "normalizedName": "虎丘",
    "normalizedValue": "江苏苏州虎丘",
    "normalizedSearchText": "江苏苏州虎丘虎丘江苏苏州"
  },
  {
    "code": "320506",
    "name": "吴中区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 吴中区",
    "rank": 3,
    "normalizedName": "吴中",
    "normalizedValue": "江苏苏州吴中",
    "normalizedSearchText": "江苏苏州吴中吴中江苏苏州"
  },
  {
    "code": "320507",
    "name": "相城区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 相城区",
    "rank": 3,
    "normalizedName": "相城",
    "normalizedValue": "江苏苏州相城",
    "normalizedSearchText": "江苏苏州相城相城江苏苏州"
  },
  {
    "code": "320508",
    "name": "姑苏区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 姑苏区",
    "rank": 3,
    "normalizedName": "姑苏",
    "normalizedValue": "江苏苏州姑苏",
    "normalizedSearchText": "江苏苏州姑苏姑苏江苏苏州"
  },
  {
    "code": "320509",
    "name": "吴江区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 吴江区",
    "rank": 3,
    "normalizedName": "吴江",
    "normalizedValue": "江苏苏州吴江",
    "normalizedSearchText": "江苏苏州吴江吴江江苏苏州"
  },
  {
    "code": "320581",
    "name": "常熟市",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 常熟市",
    "rank": 3,
    "normalizedName": "常熟",
    "normalizedValue": "江苏苏州常熟",
    "normalizedSearchText": "江苏苏州常熟常熟江苏苏州"
  },
  {
    "code": "320582",
    "name": "张家港市",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 张家港市",
    "rank": 3,
    "normalizedName": "张家港",
    "normalizedValue": "江苏苏州张家港",
    "normalizedSearchText": "江苏苏州张家港张家港江苏苏州"
  },
  {
    "code": "320583",
    "name": "昆山市",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 昆山市",
    "rank": 3,
    "normalizedName": "昆山",
    "normalizedValue": "江苏苏州昆山",
    "normalizedSearchText": "江苏苏州昆山昆山江苏苏州"
  },
  {
    "code": "320585",
    "name": "太仓市",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 太仓市",
    "rank": 3,
    "normalizedName": "太仓",
    "normalizedValue": "江苏苏州太仓",
    "normalizedSearchText": "江苏苏州太仓太仓江苏苏州"
  },
  {
    "code": "320501",
    "name": "市辖区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏苏州辖",
    "normalizedSearchText": "江苏苏州辖辖江苏苏州"
  },
  {
    "code": "320571",
    "name": "苏州工业园区",
    "detail": "江苏省 / 苏州市",
    "value": "江苏省 / 苏州市 / 苏州工业园区",
    "rank": 3,
    "normalizedName": "苏州工业园",
    "normalizedValue": "江苏苏州苏州工业园",
    "normalizedSearchText": "江苏苏州苏州工业园苏州工业园江苏苏州"
  },
  {
    "code": "320600",
    "name": "南通市",
    "detail": "江苏省",
    "value": "江苏省 / 南通市",
    "rank": 2,
    "normalizedName": "南通",
    "normalizedValue": "江苏南通",
    "normalizedSearchText": "江苏南通南通江苏"
  },
  {
    "code": "320612",
    "name": "通州区",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 通州区",
    "rank": 3,
    "normalizedName": "通州",
    "normalizedValue": "江苏南通通州",
    "normalizedSearchText": "江苏南通通州通州江苏南通"
  },
  {
    "code": "320613",
    "name": "崇川区",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 崇川区",
    "rank": 3,
    "normalizedName": "崇川",
    "normalizedValue": "江苏南通崇川",
    "normalizedSearchText": "江苏南通崇川崇川江苏南通"
  },
  {
    "code": "320614",
    "name": "海门区",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 海门区",
    "rank": 3,
    "normalizedName": "海门",
    "normalizedValue": "江苏南通海门",
    "normalizedSearchText": "江苏南通海门海门江苏南通"
  },
  {
    "code": "320623",
    "name": "如东县",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 如东县",
    "rank": 3,
    "normalizedName": "如东",
    "normalizedValue": "江苏南通如东",
    "normalizedSearchText": "江苏南通如东如东江苏南通"
  },
  {
    "code": "320681",
    "name": "启东市",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 启东市",
    "rank": 3,
    "normalizedName": "启东",
    "normalizedValue": "江苏南通启东",
    "normalizedSearchText": "江苏南通启东启东江苏南通"
  },
  {
    "code": "320682",
    "name": "如皋市",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 如皋市",
    "rank": 3,
    "normalizedName": "如皋",
    "normalizedValue": "江苏南通如皋",
    "normalizedSearchText": "江苏南通如皋如皋江苏南通"
  },
  {
    "code": "320685",
    "name": "海安市",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 海安市",
    "rank": 3,
    "normalizedName": "海安",
    "normalizedValue": "江苏南通海安",
    "normalizedSearchText": "江苏南通海安海安江苏南通"
  },
  {
    "code": "320601",
    "name": "市辖区",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏南通辖",
    "normalizedSearchText": "江苏南通辖辖江苏南通"
  },
  {
    "code": "320671",
    "name": "南通经济技术开发区",
    "detail": "江苏省 / 南通市",
    "value": "江苏省 / 南通市 / 南通经济技术开发区",
    "rank": 3,
    "normalizedName": "南通经济技术开发",
    "normalizedValue": "江苏南通南通经济技术开发",
    "normalizedSearchText": "江苏南通南通经济技术开发南通经济技术开发江苏南通"
  },
  {
    "code": "320700",
    "name": "连云港市",
    "detail": "江苏省",
    "value": "江苏省 / 连云港市",
    "rank": 2,
    "normalizedName": "连云港",
    "normalizedValue": "江苏连云港",
    "normalizedSearchText": "江苏连云港连云港江苏"
  },
  {
    "code": "320703",
    "name": "连云区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 连云区",
    "rank": 3,
    "normalizedName": "连云",
    "normalizedValue": "江苏连云港连云",
    "normalizedSearchText": "江苏连云港连云连云江苏连云港"
  },
  {
    "code": "320706",
    "name": "海州区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 海州区",
    "rank": 3,
    "normalizedName": "海州",
    "normalizedValue": "江苏连云港海州",
    "normalizedSearchText": "江苏连云港海州海州江苏连云港"
  },
  {
    "code": "320707",
    "name": "赣榆区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 赣榆区",
    "rank": 3,
    "normalizedName": "赣榆",
    "normalizedValue": "江苏连云港赣榆",
    "normalizedSearchText": "江苏连云港赣榆赣榆江苏连云港"
  },
  {
    "code": "320722",
    "name": "东海县",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 东海县",
    "rank": 3,
    "normalizedName": "东海",
    "normalizedValue": "江苏连云港东海",
    "normalizedSearchText": "江苏连云港东海东海江苏连云港"
  },
  {
    "code": "320723",
    "name": "灌云县",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 灌云县",
    "rank": 3,
    "normalizedName": "灌云",
    "normalizedValue": "江苏连云港灌云",
    "normalizedSearchText": "江苏连云港灌云灌云江苏连云港"
  },
  {
    "code": "320724",
    "name": "灌南县",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 灌南县",
    "rank": 3,
    "normalizedName": "灌南",
    "normalizedValue": "江苏连云港灌南",
    "normalizedSearchText": "江苏连云港灌南灌南江苏连云港"
  },
  {
    "code": "320701",
    "name": "市辖区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏连云港辖",
    "normalizedSearchText": "江苏连云港辖辖江苏连云港"
  },
  {
    "code": "320771",
    "name": "连云港经济技术开发区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 连云港经济技术开发区",
    "rank": 3,
    "normalizedName": "连云港经济技术开发",
    "normalizedValue": "江苏连云港连云港经济技术开发",
    "normalizedSearchText": "江苏连云港连云港经济技术开发连云港经济技术开发江苏连云港"
  },
  {
    "code": "320772",
    "name": "连云港高新技术产业开发区",
    "detail": "江苏省 / 连云港市",
    "value": "江苏省 / 连云港市 / 连云港高新技术产业开发区",
    "rank": 3,
    "normalizedName": "连云港高新技术产业开发",
    "normalizedValue": "江苏连云港连云港高新技术产业开发",
    "normalizedSearchText": "江苏连云港连云港高新技术产业开发连云港高新技术产业开发江苏连云港"
  },
  {
    "code": "320800",
    "name": "淮安市",
    "detail": "江苏省",
    "value": "江苏省 / 淮安市",
    "rank": 2,
    "normalizedName": "淮安",
    "normalizedValue": "江苏淮安",
    "normalizedSearchText": "江苏淮安淮安江苏"
  },
  {
    "code": "320803",
    "name": "淮安区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 淮安区",
    "rank": 3,
    "normalizedName": "淮安",
    "normalizedValue": "江苏淮安淮安",
    "normalizedSearchText": "江苏淮安淮安淮安江苏淮安"
  },
  {
    "code": "320804",
    "name": "淮阴区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 淮阴区",
    "rank": 3,
    "normalizedName": "淮阴",
    "normalizedValue": "江苏淮安淮阴",
    "normalizedSearchText": "江苏淮安淮阴淮阴江苏淮安"
  },
  {
    "code": "320812",
    "name": "清江浦区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 清江浦区",
    "rank": 3,
    "normalizedName": "清江浦",
    "normalizedValue": "江苏淮安清江浦",
    "normalizedSearchText": "江苏淮安清江浦清江浦江苏淮安"
  },
  {
    "code": "320813",
    "name": "洪泽区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 洪泽区",
    "rank": 3,
    "normalizedName": "洪泽",
    "normalizedValue": "江苏淮安洪泽",
    "normalizedSearchText": "江苏淮安洪泽洪泽江苏淮安"
  },
  {
    "code": "320826",
    "name": "涟水县",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 涟水县",
    "rank": 3,
    "normalizedName": "涟水",
    "normalizedValue": "江苏淮安涟水",
    "normalizedSearchText": "江苏淮安涟水涟水江苏淮安"
  },
  {
    "code": "320830",
    "name": "盱眙县",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 盱眙县",
    "rank": 3,
    "normalizedName": "盱眙",
    "normalizedValue": "江苏淮安盱眙",
    "normalizedSearchText": "江苏淮安盱眙盱眙江苏淮安"
  },
  {
    "code": "320831",
    "name": "金湖县",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 金湖县",
    "rank": 3,
    "normalizedName": "金湖",
    "normalizedValue": "江苏淮安金湖",
    "normalizedSearchText": "江苏淮安金湖金湖江苏淮安"
  },
  {
    "code": "320801",
    "name": "市辖区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏淮安辖",
    "normalizedSearchText": "江苏淮安辖辖江苏淮安"
  },
  {
    "code": "320871",
    "name": "淮安经济技术开发区",
    "detail": "江苏省 / 淮安市",
    "value": "江苏省 / 淮安市 / 淮安经济技术开发区",
    "rank": 3,
    "normalizedName": "淮安经济技术开发",
    "normalizedValue": "江苏淮安淮安经济技术开发",
    "normalizedSearchText": "江苏淮安淮安经济技术开发淮安经济技术开发江苏淮安"
  },
  {
    "code": "320900",
    "name": "盐城市",
    "detail": "江苏省",
    "value": "江苏省 / 盐城市",
    "rank": 2,
    "normalizedName": "盐城",
    "normalizedValue": "江苏盐城",
    "normalizedSearchText": "江苏盐城盐城江苏"
  },
  {
    "code": "320902",
    "name": "亭湖区",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 亭湖区",
    "rank": 3,
    "normalizedName": "亭湖",
    "normalizedValue": "江苏盐城亭湖",
    "normalizedSearchText": "江苏盐城亭湖亭湖江苏盐城"
  },
  {
    "code": "320903",
    "name": "盐都区",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 盐都区",
    "rank": 3,
    "normalizedName": "盐都",
    "normalizedValue": "江苏盐城盐都",
    "normalizedSearchText": "江苏盐城盐都盐都江苏盐城"
  },
  {
    "code": "320904",
    "name": "大丰区",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 大丰区",
    "rank": 3,
    "normalizedName": "大丰",
    "normalizedValue": "江苏盐城大丰",
    "normalizedSearchText": "江苏盐城大丰大丰江苏盐城"
  },
  {
    "code": "320921",
    "name": "响水县",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 响水县",
    "rank": 3,
    "normalizedName": "响水",
    "normalizedValue": "江苏盐城响水",
    "normalizedSearchText": "江苏盐城响水响水江苏盐城"
  },
  {
    "code": "320922",
    "name": "滨海县",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 滨海县",
    "rank": 3,
    "normalizedName": "滨海",
    "normalizedValue": "江苏盐城滨海",
    "normalizedSearchText": "江苏盐城滨海滨海江苏盐城"
  },
  {
    "code": "320923",
    "name": "阜宁县",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 阜宁县",
    "rank": 3,
    "normalizedName": "阜宁",
    "normalizedValue": "江苏盐城阜宁",
    "normalizedSearchText": "江苏盐城阜宁阜宁江苏盐城"
  },
  {
    "code": "320924",
    "name": "射阳县",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 射阳县",
    "rank": 3,
    "normalizedName": "射阳",
    "normalizedValue": "江苏盐城射阳",
    "normalizedSearchText": "江苏盐城射阳射阳江苏盐城"
  },
  {
    "code": "320925",
    "name": "建湖县",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 建湖县",
    "rank": 3,
    "normalizedName": "建湖",
    "normalizedValue": "江苏盐城建湖",
    "normalizedSearchText": "江苏盐城建湖建湖江苏盐城"
  },
  {
    "code": "320981",
    "name": "东台市",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 东台市",
    "rank": 3,
    "normalizedName": "东台",
    "normalizedValue": "江苏盐城东台",
    "normalizedSearchText": "江苏盐城东台东台江苏盐城"
  },
  {
    "code": "320901",
    "name": "市辖区",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏盐城辖",
    "normalizedSearchText": "江苏盐城辖辖江苏盐城"
  },
  {
    "code": "320971",
    "name": "盐城经济技术开发区",
    "detail": "江苏省 / 盐城市",
    "value": "江苏省 / 盐城市 / 盐城经济技术开发区",
    "rank": 3,
    "normalizedName": "盐城经济技术开发",
    "normalizedValue": "江苏盐城盐城经济技术开发",
    "normalizedSearchText": "江苏盐城盐城经济技术开发盐城经济技术开发江苏盐城"
  },
  {
    "code": "321000",
    "name": "扬州市",
    "detail": "江苏省",
    "value": "江苏省 / 扬州市",
    "rank": 2,
    "normalizedName": "扬州",
    "normalizedValue": "江苏扬州",
    "normalizedSearchText": "江苏扬州扬州江苏"
  },
  {
    "code": "321002",
    "name": "广陵区",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 广陵区",
    "rank": 3,
    "normalizedName": "广陵",
    "normalizedValue": "江苏扬州广陵",
    "normalizedSearchText": "江苏扬州广陵广陵江苏扬州"
  },
  {
    "code": "321003",
    "name": "邗江区",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 邗江区",
    "rank": 3,
    "normalizedName": "邗江",
    "normalizedValue": "江苏扬州邗江",
    "normalizedSearchText": "江苏扬州邗江邗江江苏扬州"
  },
  {
    "code": "321012",
    "name": "江都区",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 江都区",
    "rank": 3,
    "normalizedName": "江都",
    "normalizedValue": "江苏扬州江都",
    "normalizedSearchText": "江苏扬州江都江都江苏扬州"
  },
  {
    "code": "321023",
    "name": "宝应县",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 宝应县",
    "rank": 3,
    "normalizedName": "宝应",
    "normalizedValue": "江苏扬州宝应",
    "normalizedSearchText": "江苏扬州宝应宝应江苏扬州"
  },
  {
    "code": "321081",
    "name": "仪征市",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 仪征市",
    "rank": 3,
    "normalizedName": "仪征",
    "normalizedValue": "江苏扬州仪征",
    "normalizedSearchText": "江苏扬州仪征仪征江苏扬州"
  },
  {
    "code": "321084",
    "name": "高邮市",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 高邮市",
    "rank": 3,
    "normalizedName": "高邮",
    "normalizedValue": "江苏扬州高邮",
    "normalizedSearchText": "江苏扬州高邮高邮江苏扬州"
  },
  {
    "code": "321001",
    "name": "市辖区",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏扬州辖",
    "normalizedSearchText": "江苏扬州辖辖江苏扬州"
  },
  {
    "code": "321071",
    "name": "扬州经济技术开发区",
    "detail": "江苏省 / 扬州市",
    "value": "江苏省 / 扬州市 / 扬州经济技术开发区",
    "rank": 3,
    "normalizedName": "扬州经济技术开发",
    "normalizedValue": "江苏扬州扬州经济技术开发",
    "normalizedSearchText": "江苏扬州扬州经济技术开发扬州经济技术开发江苏扬州"
  },
  {
    "code": "321100",
    "name": "镇江市",
    "detail": "江苏省",
    "value": "江苏省 / 镇江市",
    "rank": 2,
    "normalizedName": "江",
    "normalizedValue": "江苏江",
    "normalizedSearchText": "江苏江江江苏"
  },
  {
    "code": "321102",
    "name": "京口区",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 京口区",
    "rank": 3,
    "normalizedName": "京口",
    "normalizedValue": "江苏江京口",
    "normalizedSearchText": "江苏江京口京口江苏江"
  },
  {
    "code": "321111",
    "name": "润州区",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 润州区",
    "rank": 3,
    "normalizedName": "润州",
    "normalizedValue": "江苏江润州",
    "normalizedSearchText": "江苏江润州润州江苏江"
  },
  {
    "code": "321112",
    "name": "丹徒区",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 丹徒区",
    "rank": 3,
    "normalizedName": "丹徒",
    "normalizedValue": "江苏江丹徒",
    "normalizedSearchText": "江苏江丹徒丹徒江苏江"
  },
  {
    "code": "321181",
    "name": "丹阳市",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 丹阳市",
    "rank": 3,
    "normalizedName": "丹阳",
    "normalizedValue": "江苏江丹阳",
    "normalizedSearchText": "江苏江丹阳丹阳江苏江"
  },
  {
    "code": "321182",
    "name": "扬中市",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 扬中市",
    "rank": 3,
    "normalizedName": "扬中",
    "normalizedValue": "江苏江扬中",
    "normalizedSearchText": "江苏江扬中扬中江苏江"
  },
  {
    "code": "321183",
    "name": "句容市",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 句容市",
    "rank": 3,
    "normalizedName": "句容",
    "normalizedValue": "江苏江句容",
    "normalizedSearchText": "江苏江句容句容江苏江"
  },
  {
    "code": "321101",
    "name": "市辖区",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏江辖",
    "normalizedSearchText": "江苏江辖辖江苏江"
  },
  {
    "code": "321171",
    "name": "镇江新区",
    "detail": "江苏省 / 镇江市",
    "value": "江苏省 / 镇江市 / 镇江新区",
    "rank": 3,
    "normalizedName": "江新",
    "normalizedValue": "江苏江江新",
    "normalizedSearchText": "江苏江江新江新江苏江"
  },
  {
    "code": "321200",
    "name": "泰州市",
    "detail": "江苏省",
    "value": "江苏省 / 泰州市",
    "rank": 2,
    "normalizedName": "泰州",
    "normalizedValue": "江苏泰州",
    "normalizedSearchText": "江苏泰州泰州江苏"
  },
  {
    "code": "321202",
    "name": "海陵区",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 海陵区",
    "rank": 3,
    "normalizedName": "海陵",
    "normalizedValue": "江苏泰州海陵",
    "normalizedSearchText": "江苏泰州海陵海陵江苏泰州"
  },
  {
    "code": "321203",
    "name": "高港区",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 高港区",
    "rank": 3,
    "normalizedName": "高港",
    "normalizedValue": "江苏泰州高港",
    "normalizedSearchText": "江苏泰州高港高港江苏泰州"
  },
  {
    "code": "321204",
    "name": "姜堰区",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 姜堰区",
    "rank": 3,
    "normalizedName": "姜堰",
    "normalizedValue": "江苏泰州姜堰",
    "normalizedSearchText": "江苏泰州姜堰姜堰江苏泰州"
  },
  {
    "code": "321281",
    "name": "兴化市",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 兴化市",
    "rank": 3,
    "normalizedName": "兴化",
    "normalizedValue": "江苏泰州兴化",
    "normalizedSearchText": "江苏泰州兴化兴化江苏泰州"
  },
  {
    "code": "321282",
    "name": "靖江市",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 靖江市",
    "rank": 3,
    "normalizedName": "靖江",
    "normalizedValue": "江苏泰州靖江",
    "normalizedSearchText": "江苏泰州靖江靖江江苏泰州"
  },
  {
    "code": "321283",
    "name": "泰兴市",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 泰兴市",
    "rank": 3,
    "normalizedName": "泰兴",
    "normalizedValue": "江苏泰州泰兴",
    "normalizedSearchText": "江苏泰州泰兴泰兴江苏泰州"
  },
  {
    "code": "321201",
    "name": "市辖区",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏泰州辖",
    "normalizedSearchText": "江苏泰州辖辖江苏泰州"
  },
  {
    "code": "321271",
    "name": "泰州医药高新技术产业开发区",
    "detail": "江苏省 / 泰州市",
    "value": "江苏省 / 泰州市 / 泰州医药高新技术产业开发区",
    "rank": 3,
    "normalizedName": "泰州医药高新技术产业开发",
    "normalizedValue": "江苏泰州泰州医药高新技术产业开发",
    "normalizedSearchText": "江苏泰州泰州医药高新技术产业开发泰州医药高新技术产业开发江苏泰州"
  },
  {
    "code": "321300",
    "name": "宿迁市",
    "detail": "江苏省",
    "value": "江苏省 / 宿迁市",
    "rank": 2,
    "normalizedName": "宿迁",
    "normalizedValue": "江苏宿迁",
    "normalizedSearchText": "江苏宿迁宿迁江苏"
  },
  {
    "code": "321302",
    "name": "宿城区",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 宿城区",
    "rank": 3,
    "normalizedName": "宿城",
    "normalizedValue": "江苏宿迁宿城",
    "normalizedSearchText": "江苏宿迁宿城宿城江苏宿迁"
  },
  {
    "code": "321311",
    "name": "宿豫区",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 宿豫区",
    "rank": 3,
    "normalizedName": "宿豫",
    "normalizedValue": "江苏宿迁宿豫",
    "normalizedSearchText": "江苏宿迁宿豫宿豫江苏宿迁"
  },
  {
    "code": "321322",
    "name": "沭阳县",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 沭阳县",
    "rank": 3,
    "normalizedName": "沭阳",
    "normalizedValue": "江苏宿迁沭阳",
    "normalizedSearchText": "江苏宿迁沭阳沭阳江苏宿迁"
  },
  {
    "code": "321323",
    "name": "泗阳县",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 泗阳县",
    "rank": 3,
    "normalizedName": "泗阳",
    "normalizedValue": "江苏宿迁泗阳",
    "normalizedSearchText": "江苏宿迁泗阳泗阳江苏宿迁"
  },
  {
    "code": "321324",
    "name": "泗洪县",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 泗洪县",
    "rank": 3,
    "normalizedName": "泗洪",
    "normalizedValue": "江苏宿迁泗洪",
    "normalizedSearchText": "江苏宿迁泗洪泗洪江苏宿迁"
  },
  {
    "code": "321301",
    "name": "市辖区",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江苏宿迁辖",
    "normalizedSearchText": "江苏宿迁辖辖江苏宿迁"
  },
  {
    "code": "321371",
    "name": "宿迁经济技术开发区",
    "detail": "江苏省 / 宿迁市",
    "value": "江苏省 / 宿迁市 / 宿迁经济技术开发区",
    "rank": 3,
    "normalizedName": "宿迁经济技术开发",
    "normalizedValue": "江苏宿迁宿迁经济技术开发",
    "normalizedSearchText": "江苏宿迁宿迁经济技术开发宿迁经济技术开发江苏宿迁"
  },
  {
    "code": "330000",
    "name": "浙江省",
    "detail": "?????",
    "value": "浙江省",
    "rank": 1,
    "normalizedName": "浙江",
    "normalizedValue": "浙江",
    "normalizedSearchText": "浙江浙江"
  },
  {
    "code": "330100",
    "name": "杭州市",
    "detail": "浙江省",
    "value": "浙江省 / 杭州市",
    "rank": 2,
    "normalizedName": "杭州",
    "normalizedValue": "浙江杭州",
    "normalizedSearchText": "浙江杭州杭州浙江"
  },
  {
    "code": "330102",
    "name": "上城区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 上城区",
    "rank": 3,
    "normalizedName": "上城",
    "normalizedValue": "浙江杭州上城",
    "normalizedSearchText": "浙江杭州上城上城浙江杭州"
  },
  {
    "code": "330103",
    "name": "下城区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 下城区",
    "rank": 3,
    "normalizedName": "下城",
    "normalizedValue": "浙江杭州下城",
    "normalizedSearchText": "浙江杭州下城下城浙江杭州"
  },
  {
    "code": "330104",
    "name": "江干区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 江干区",
    "rank": 3,
    "normalizedName": "江干",
    "normalizedValue": "浙江杭州江干",
    "normalizedSearchText": "浙江杭州江干江干浙江杭州"
  },
  {
    "code": "330105",
    "name": "拱墅区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 拱墅区",
    "rank": 3,
    "normalizedName": "拱墅",
    "normalizedValue": "浙江杭州拱墅",
    "normalizedSearchText": "浙江杭州拱墅拱墅浙江杭州"
  },
  {
    "code": "330106",
    "name": "西湖区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 西湖区",
    "rank": 3,
    "normalizedName": "西湖",
    "normalizedValue": "浙江杭州西湖",
    "normalizedSearchText": "浙江杭州西湖西湖浙江杭州"
  },
  {
    "code": "330108",
    "name": "滨江区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 滨江区",
    "rank": 3,
    "normalizedName": "滨江",
    "normalizedValue": "浙江杭州滨江",
    "normalizedSearchText": "浙江杭州滨江滨江浙江杭州"
  },
  {
    "code": "330109",
    "name": "萧山区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 萧山区",
    "rank": 3,
    "normalizedName": "萧山",
    "normalizedValue": "浙江杭州萧山",
    "normalizedSearchText": "浙江杭州萧山萧山浙江杭州"
  },
  {
    "code": "330110",
    "name": "余杭区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 余杭区",
    "rank": 3,
    "normalizedName": "余杭",
    "normalizedValue": "浙江杭州余杭",
    "normalizedSearchText": "浙江杭州余杭余杭浙江杭州"
  },
  {
    "code": "330111",
    "name": "富阳区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 富阳区",
    "rank": 3,
    "normalizedName": "富阳",
    "normalizedValue": "浙江杭州富阳",
    "normalizedSearchText": "浙江杭州富阳富阳浙江杭州"
  },
  {
    "code": "330112",
    "name": "临安区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 临安区",
    "rank": 3,
    "normalizedName": "临安",
    "normalizedValue": "浙江杭州临安",
    "normalizedSearchText": "浙江杭州临安临安浙江杭州"
  },
  {
    "code": "330122",
    "name": "桐庐县",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 桐庐县",
    "rank": 3,
    "normalizedName": "桐庐",
    "normalizedValue": "浙江杭州桐庐",
    "normalizedSearchText": "浙江杭州桐庐桐庐浙江杭州"
  },
  {
    "code": "330127",
    "name": "淳安县",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 淳安县",
    "rank": 3,
    "normalizedName": "淳安",
    "normalizedValue": "浙江杭州淳安",
    "normalizedSearchText": "浙江杭州淳安淳安浙江杭州"
  },
  {
    "code": "330182",
    "name": "建德市",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 建德市",
    "rank": 3,
    "normalizedName": "建德",
    "normalizedValue": "浙江杭州建德",
    "normalizedSearchText": "浙江杭州建德建德浙江杭州"
  },
  {
    "code": "330101",
    "name": "市辖区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江杭州辖",
    "normalizedSearchText": "浙江杭州辖辖浙江杭州"
  },
  {
    "code": "330113",
    "name": "临平区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 临平区",
    "rank": 3,
    "normalizedName": "临平",
    "normalizedValue": "浙江杭州临平",
    "normalizedSearchText": "浙江杭州临平临平浙江杭州"
  },
  {
    "code": "330114",
    "name": "钱塘区",
    "detail": "浙江省 / 杭州市",
    "value": "浙江省 / 杭州市 / 钱塘区",
    "rank": 3,
    "normalizedName": "钱塘",
    "normalizedValue": "浙江杭州钱塘",
    "normalizedSearchText": "浙江杭州钱塘钱塘浙江杭州"
  },
  {
    "code": "330200",
    "name": "宁波市",
    "detail": "浙江省",
    "value": "浙江省 / 宁波市",
    "rank": 2,
    "normalizedName": "宁波",
    "normalizedValue": "浙江宁波",
    "normalizedSearchText": "浙江宁波宁波浙江"
  },
  {
    "code": "330203",
    "name": "海曙区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 海曙区",
    "rank": 3,
    "normalizedName": "海曙",
    "normalizedValue": "浙江宁波海曙",
    "normalizedSearchText": "浙江宁波海曙海曙浙江宁波"
  },
  {
    "code": "330205",
    "name": "江北区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 江北区",
    "rank": 3,
    "normalizedName": "江北",
    "normalizedValue": "浙江宁波江北",
    "normalizedSearchText": "浙江宁波江北江北浙江宁波"
  },
  {
    "code": "330206",
    "name": "北仑区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 北仑区",
    "rank": 3,
    "normalizedName": "北仑",
    "normalizedValue": "浙江宁波北仑",
    "normalizedSearchText": "浙江宁波北仑北仑浙江宁波"
  },
  {
    "code": "330211",
    "name": "镇海区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 镇海区",
    "rank": 3,
    "normalizedName": "海",
    "normalizedValue": "浙江宁波海",
    "normalizedSearchText": "浙江宁波海海浙江宁波"
  },
  {
    "code": "330212",
    "name": "鄞州区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 鄞州区",
    "rank": 3,
    "normalizedName": "鄞州",
    "normalizedValue": "浙江宁波鄞州",
    "normalizedSearchText": "浙江宁波鄞州鄞州浙江宁波"
  },
  {
    "code": "330213",
    "name": "奉化区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 奉化区",
    "rank": 3,
    "normalizedName": "奉化",
    "normalizedValue": "浙江宁波奉化",
    "normalizedSearchText": "浙江宁波奉化奉化浙江宁波"
  },
  {
    "code": "330225",
    "name": "象山县",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 象山县",
    "rank": 3,
    "normalizedName": "象山",
    "normalizedValue": "浙江宁波象山",
    "normalizedSearchText": "浙江宁波象山象山浙江宁波"
  },
  {
    "code": "330226",
    "name": "宁海县",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 宁海县",
    "rank": 3,
    "normalizedName": "宁海",
    "normalizedValue": "浙江宁波宁海",
    "normalizedSearchText": "浙江宁波宁海宁海浙江宁波"
  },
  {
    "code": "330281",
    "name": "余姚市",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 余姚市",
    "rank": 3,
    "normalizedName": "余姚",
    "normalizedValue": "浙江宁波余姚",
    "normalizedSearchText": "浙江宁波余姚余姚浙江宁波"
  },
  {
    "code": "330282",
    "name": "慈溪市",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 慈溪市",
    "rank": 3,
    "normalizedName": "慈溪",
    "normalizedValue": "浙江宁波慈溪",
    "normalizedSearchText": "浙江宁波慈溪慈溪浙江宁波"
  },
  {
    "code": "330201",
    "name": "市辖区",
    "detail": "浙江省 / 宁波市",
    "value": "浙江省 / 宁波市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江宁波辖",
    "normalizedSearchText": "浙江宁波辖辖浙江宁波"
  },
  {
    "code": "330300",
    "name": "温州市",
    "detail": "浙江省",
    "value": "浙江省 / 温州市",
    "rank": 2,
    "normalizedName": "温州",
    "normalizedValue": "浙江温州",
    "normalizedSearchText": "浙江温州温州浙江"
  },
  {
    "code": "330302",
    "name": "鹿城区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 鹿城区",
    "rank": 3,
    "normalizedName": "鹿城",
    "normalizedValue": "浙江温州鹿城",
    "normalizedSearchText": "浙江温州鹿城鹿城浙江温州"
  },
  {
    "code": "330303",
    "name": "龙湾区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 龙湾区",
    "rank": 3,
    "normalizedName": "龙湾",
    "normalizedValue": "浙江温州龙湾",
    "normalizedSearchText": "浙江温州龙湾龙湾浙江温州"
  },
  {
    "code": "330304",
    "name": "瓯海区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 瓯海区",
    "rank": 3,
    "normalizedName": "瓯海",
    "normalizedValue": "浙江温州瓯海",
    "normalizedSearchText": "浙江温州瓯海瓯海浙江温州"
  },
  {
    "code": "330305",
    "name": "洞头区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 洞头区",
    "rank": 3,
    "normalizedName": "洞头",
    "normalizedValue": "浙江温州洞头",
    "normalizedSearchText": "浙江温州洞头洞头浙江温州"
  },
  {
    "code": "330324",
    "name": "永嘉县",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 永嘉县",
    "rank": 3,
    "normalizedName": "永嘉",
    "normalizedValue": "浙江温州永嘉",
    "normalizedSearchText": "浙江温州永嘉永嘉浙江温州"
  },
  {
    "code": "330326",
    "name": "平阳县",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 平阳县",
    "rank": 3,
    "normalizedName": "平阳",
    "normalizedValue": "浙江温州平阳",
    "normalizedSearchText": "浙江温州平阳平阳浙江温州"
  },
  {
    "code": "330327",
    "name": "苍南县",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 苍南县",
    "rank": 3,
    "normalizedName": "苍南",
    "normalizedValue": "浙江温州苍南",
    "normalizedSearchText": "浙江温州苍南苍南浙江温州"
  },
  {
    "code": "330328",
    "name": "文成县",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 文成县",
    "rank": 3,
    "normalizedName": "文成",
    "normalizedValue": "浙江温州文成",
    "normalizedSearchText": "浙江温州文成文成浙江温州"
  },
  {
    "code": "330329",
    "name": "泰顺县",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 泰顺县",
    "rank": 3,
    "normalizedName": "泰顺",
    "normalizedValue": "浙江温州泰顺",
    "normalizedSearchText": "浙江温州泰顺泰顺浙江温州"
  },
  {
    "code": "330381",
    "name": "瑞安市",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 瑞安市",
    "rank": 3,
    "normalizedName": "瑞安",
    "normalizedValue": "浙江温州瑞安",
    "normalizedSearchText": "浙江温州瑞安瑞安浙江温州"
  },
  {
    "code": "330382",
    "name": "乐清市",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 乐清市",
    "rank": 3,
    "normalizedName": "乐清",
    "normalizedValue": "浙江温州乐清",
    "normalizedSearchText": "浙江温州乐清乐清浙江温州"
  },
  {
    "code": "330383",
    "name": "龙港市",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 龙港市",
    "rank": 3,
    "normalizedName": "龙港",
    "normalizedValue": "浙江温州龙港",
    "normalizedSearchText": "浙江温州龙港龙港浙江温州"
  },
  {
    "code": "330301",
    "name": "市辖区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江温州辖",
    "normalizedSearchText": "浙江温州辖辖浙江温州"
  },
  {
    "code": "330371",
    "name": "温州经济技术开发区",
    "detail": "浙江省 / 温州市",
    "value": "浙江省 / 温州市 / 温州经济技术开发区",
    "rank": 3,
    "normalizedName": "温州经济技术开发",
    "normalizedValue": "浙江温州温州经济技术开发",
    "normalizedSearchText": "浙江温州温州经济技术开发温州经济技术开发浙江温州"
  },
  {
    "code": "330400",
    "name": "嘉兴市",
    "detail": "浙江省",
    "value": "浙江省 / 嘉兴市",
    "rank": 2,
    "normalizedName": "嘉兴",
    "normalizedValue": "浙江嘉兴",
    "normalizedSearchText": "浙江嘉兴嘉兴浙江"
  },
  {
    "code": "330402",
    "name": "南湖区",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 南湖区",
    "rank": 3,
    "normalizedName": "南湖",
    "normalizedValue": "浙江嘉兴南湖",
    "normalizedSearchText": "浙江嘉兴南湖南湖浙江嘉兴"
  },
  {
    "code": "330411",
    "name": "秀洲区",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 秀洲区",
    "rank": 3,
    "normalizedName": "秀洲",
    "normalizedValue": "浙江嘉兴秀洲",
    "normalizedSearchText": "浙江嘉兴秀洲秀洲浙江嘉兴"
  },
  {
    "code": "330421",
    "name": "嘉善县",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 嘉善县",
    "rank": 3,
    "normalizedName": "嘉善",
    "normalizedValue": "浙江嘉兴嘉善",
    "normalizedSearchText": "浙江嘉兴嘉善嘉善浙江嘉兴"
  },
  {
    "code": "330424",
    "name": "海盐县",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 海盐县",
    "rank": 3,
    "normalizedName": "海盐",
    "normalizedValue": "浙江嘉兴海盐",
    "normalizedSearchText": "浙江嘉兴海盐海盐浙江嘉兴"
  },
  {
    "code": "330481",
    "name": "海宁市",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 海宁市",
    "rank": 3,
    "normalizedName": "海宁",
    "normalizedValue": "浙江嘉兴海宁",
    "normalizedSearchText": "浙江嘉兴海宁海宁浙江嘉兴"
  },
  {
    "code": "330482",
    "name": "平湖市",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 平湖市",
    "rank": 3,
    "normalizedName": "平湖",
    "normalizedValue": "浙江嘉兴平湖",
    "normalizedSearchText": "浙江嘉兴平湖平湖浙江嘉兴"
  },
  {
    "code": "330483",
    "name": "桐乡市",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 桐乡市",
    "rank": 3,
    "normalizedName": "桐",
    "normalizedValue": "浙江嘉兴桐",
    "normalizedSearchText": "浙江嘉兴桐桐浙江嘉兴"
  },
  {
    "code": "330401",
    "name": "市辖区",
    "detail": "浙江省 / 嘉兴市",
    "value": "浙江省 / 嘉兴市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江嘉兴辖",
    "normalizedSearchText": "浙江嘉兴辖辖浙江嘉兴"
  },
  {
    "code": "330500",
    "name": "湖州市",
    "detail": "浙江省",
    "value": "浙江省 / 湖州市",
    "rank": 2,
    "normalizedName": "湖州",
    "normalizedValue": "浙江湖州",
    "normalizedSearchText": "浙江湖州湖州浙江"
  },
  {
    "code": "330502",
    "name": "吴兴区",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 吴兴区",
    "rank": 3,
    "normalizedName": "吴兴",
    "normalizedValue": "浙江湖州吴兴",
    "normalizedSearchText": "浙江湖州吴兴吴兴浙江湖州"
  },
  {
    "code": "330503",
    "name": "南浔区",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 南浔区",
    "rank": 3,
    "normalizedName": "南浔",
    "normalizedValue": "浙江湖州南浔",
    "normalizedSearchText": "浙江湖州南浔南浔浙江湖州"
  },
  {
    "code": "330521",
    "name": "德清县",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 德清县",
    "rank": 3,
    "normalizedName": "德清",
    "normalizedValue": "浙江湖州德清",
    "normalizedSearchText": "浙江湖州德清德清浙江湖州"
  },
  {
    "code": "330522",
    "name": "长兴县",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 长兴县",
    "rank": 3,
    "normalizedName": "长兴",
    "normalizedValue": "浙江湖州长兴",
    "normalizedSearchText": "浙江湖州长兴长兴浙江湖州"
  },
  {
    "code": "330523",
    "name": "安吉县",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 安吉县",
    "rank": 3,
    "normalizedName": "安吉",
    "normalizedValue": "浙江湖州安吉",
    "normalizedSearchText": "浙江湖州安吉安吉浙江湖州"
  },
  {
    "code": "330501",
    "name": "市辖区",
    "detail": "浙江省 / 湖州市",
    "value": "浙江省 / 湖州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江湖州辖",
    "normalizedSearchText": "浙江湖州辖辖浙江湖州"
  },
  {
    "code": "330600",
    "name": "绍兴市",
    "detail": "浙江省",
    "value": "浙江省 / 绍兴市",
    "rank": 2,
    "normalizedName": "绍兴",
    "normalizedValue": "浙江绍兴",
    "normalizedSearchText": "浙江绍兴绍兴浙江"
  },
  {
    "code": "330602",
    "name": "越城区",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 越城区",
    "rank": 3,
    "normalizedName": "越城",
    "normalizedValue": "浙江绍兴越城",
    "normalizedSearchText": "浙江绍兴越城越城浙江绍兴"
  },
  {
    "code": "330603",
    "name": "柯桥区",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 柯桥区",
    "rank": 3,
    "normalizedName": "柯桥",
    "normalizedValue": "浙江绍兴柯桥",
    "normalizedSearchText": "浙江绍兴柯桥柯桥浙江绍兴"
  },
  {
    "code": "330604",
    "name": "上虞区",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 上虞区",
    "rank": 3,
    "normalizedName": "上虞",
    "normalizedValue": "浙江绍兴上虞",
    "normalizedSearchText": "浙江绍兴上虞上虞浙江绍兴"
  },
  {
    "code": "330624",
    "name": "新昌县",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 新昌县",
    "rank": 3,
    "normalizedName": "新昌",
    "normalizedValue": "浙江绍兴新昌",
    "normalizedSearchText": "浙江绍兴新昌新昌浙江绍兴"
  },
  {
    "code": "330681",
    "name": "诸暨市",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 诸暨市",
    "rank": 3,
    "normalizedName": "诸暨",
    "normalizedValue": "浙江绍兴诸暨",
    "normalizedSearchText": "浙江绍兴诸暨诸暨浙江绍兴"
  },
  {
    "code": "330683",
    "name": "嵊州市",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 嵊州市",
    "rank": 3,
    "normalizedName": "嵊州",
    "normalizedValue": "浙江绍兴嵊州",
    "normalizedSearchText": "浙江绍兴嵊州嵊州浙江绍兴"
  },
  {
    "code": "330601",
    "name": "市辖区",
    "detail": "浙江省 / 绍兴市",
    "value": "浙江省 / 绍兴市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江绍兴辖",
    "normalizedSearchText": "浙江绍兴辖辖浙江绍兴"
  },
  {
    "code": "330700",
    "name": "金华市",
    "detail": "浙江省",
    "value": "浙江省 / 金华市",
    "rank": 2,
    "normalizedName": "金华",
    "normalizedValue": "浙江金华",
    "normalizedSearchText": "浙江金华金华浙江"
  },
  {
    "code": "330702",
    "name": "婺城区",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 婺城区",
    "rank": 3,
    "normalizedName": "婺城",
    "normalizedValue": "浙江金华婺城",
    "normalizedSearchText": "浙江金华婺城婺城浙江金华"
  },
  {
    "code": "330703",
    "name": "金东区",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 金东区",
    "rank": 3,
    "normalizedName": "金东",
    "normalizedValue": "浙江金华金东",
    "normalizedSearchText": "浙江金华金东金东浙江金华"
  },
  {
    "code": "330723",
    "name": "武义县",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 武义县",
    "rank": 3,
    "normalizedName": "武义",
    "normalizedValue": "浙江金华武义",
    "normalizedSearchText": "浙江金华武义武义浙江金华"
  },
  {
    "code": "330726",
    "name": "浦江县",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 浦江县",
    "rank": 3,
    "normalizedName": "浦江",
    "normalizedValue": "浙江金华浦江",
    "normalizedSearchText": "浙江金华浦江浦江浙江金华"
  },
  {
    "code": "330727",
    "name": "磐安县",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 磐安县",
    "rank": 3,
    "normalizedName": "磐安",
    "normalizedValue": "浙江金华磐安",
    "normalizedSearchText": "浙江金华磐安磐安浙江金华"
  },
  {
    "code": "330781",
    "name": "兰溪市",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 兰溪市",
    "rank": 3,
    "normalizedName": "兰溪",
    "normalizedValue": "浙江金华兰溪",
    "normalizedSearchText": "浙江金华兰溪兰溪浙江金华"
  },
  {
    "code": "330782",
    "name": "义乌市",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 义乌市",
    "rank": 3,
    "normalizedName": "义乌",
    "normalizedValue": "浙江金华义乌",
    "normalizedSearchText": "浙江金华义乌义乌浙江金华"
  },
  {
    "code": "330783",
    "name": "东阳市",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 东阳市",
    "rank": 3,
    "normalizedName": "东阳",
    "normalizedValue": "浙江金华东阳",
    "normalizedSearchText": "浙江金华东阳东阳浙江金华"
  },
  {
    "code": "330784",
    "name": "永康市",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 永康市",
    "rank": 3,
    "normalizedName": "永康",
    "normalizedValue": "浙江金华永康",
    "normalizedSearchText": "浙江金华永康永康浙江金华"
  },
  {
    "code": "330701",
    "name": "市辖区",
    "detail": "浙江省 / 金华市",
    "value": "浙江省 / 金华市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江金华辖",
    "normalizedSearchText": "浙江金华辖辖浙江金华"
  },
  {
    "code": "330800",
    "name": "衢州市",
    "detail": "浙江省",
    "value": "浙江省 / 衢州市",
    "rank": 2,
    "normalizedName": "衢州",
    "normalizedValue": "浙江衢州",
    "normalizedSearchText": "浙江衢州衢州浙江"
  },
  {
    "code": "330802",
    "name": "柯城区",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 柯城区",
    "rank": 3,
    "normalizedName": "柯城",
    "normalizedValue": "浙江衢州柯城",
    "normalizedSearchText": "浙江衢州柯城柯城浙江衢州"
  },
  {
    "code": "330803",
    "name": "衢江区",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 衢江区",
    "rank": 3,
    "normalizedName": "衢江",
    "normalizedValue": "浙江衢州衢江",
    "normalizedSearchText": "浙江衢州衢江衢江浙江衢州"
  },
  {
    "code": "330822",
    "name": "常山县",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 常山县",
    "rank": 3,
    "normalizedName": "常山",
    "normalizedValue": "浙江衢州常山",
    "normalizedSearchText": "浙江衢州常山常山浙江衢州"
  },
  {
    "code": "330824",
    "name": "开化县",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 开化县",
    "rank": 3,
    "normalizedName": "开化",
    "normalizedValue": "浙江衢州开化",
    "normalizedSearchText": "浙江衢州开化开化浙江衢州"
  },
  {
    "code": "330825",
    "name": "龙游县",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 龙游县",
    "rank": 3,
    "normalizedName": "龙游",
    "normalizedValue": "浙江衢州龙游",
    "normalizedSearchText": "浙江衢州龙游龙游浙江衢州"
  },
  {
    "code": "330881",
    "name": "江山市",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 江山市",
    "rank": 3,
    "normalizedName": "江山",
    "normalizedValue": "浙江衢州江山",
    "normalizedSearchText": "浙江衢州江山江山浙江衢州"
  },
  {
    "code": "330801",
    "name": "市辖区",
    "detail": "浙江省 / 衢州市",
    "value": "浙江省 / 衢州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江衢州辖",
    "normalizedSearchText": "浙江衢州辖辖浙江衢州"
  },
  {
    "code": "330900",
    "name": "舟山市",
    "detail": "浙江省",
    "value": "浙江省 / 舟山市",
    "rank": 2,
    "normalizedName": "舟山",
    "normalizedValue": "浙江舟山",
    "normalizedSearchText": "浙江舟山舟山浙江"
  },
  {
    "code": "330902",
    "name": "定海区",
    "detail": "浙江省 / 舟山市",
    "value": "浙江省 / 舟山市 / 定海区",
    "rank": 3,
    "normalizedName": "定海",
    "normalizedValue": "浙江舟山定海",
    "normalizedSearchText": "浙江舟山定海定海浙江舟山"
  },
  {
    "code": "330903",
    "name": "普陀区",
    "detail": "浙江省 / 舟山市",
    "value": "浙江省 / 舟山市 / 普陀区",
    "rank": 3,
    "normalizedName": "普陀",
    "normalizedValue": "浙江舟山普陀",
    "normalizedSearchText": "浙江舟山普陀普陀浙江舟山"
  },
  {
    "code": "330921",
    "name": "岱山县",
    "detail": "浙江省 / 舟山市",
    "value": "浙江省 / 舟山市 / 岱山县",
    "rank": 3,
    "normalizedName": "岱山",
    "normalizedValue": "浙江舟山岱山",
    "normalizedSearchText": "浙江舟山岱山岱山浙江舟山"
  },
  {
    "code": "330922",
    "name": "嵊泗县",
    "detail": "浙江省 / 舟山市",
    "value": "浙江省 / 舟山市 / 嵊泗县",
    "rank": 3,
    "normalizedName": "嵊泗",
    "normalizedValue": "浙江舟山嵊泗",
    "normalizedSearchText": "浙江舟山嵊泗嵊泗浙江舟山"
  },
  {
    "code": "330901",
    "name": "市辖区",
    "detail": "浙江省 / 舟山市",
    "value": "浙江省 / 舟山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江舟山辖",
    "normalizedSearchText": "浙江舟山辖辖浙江舟山"
  },
  {
    "code": "331000",
    "name": "台州市",
    "detail": "浙江省",
    "value": "浙江省 / 台州市",
    "rank": 2,
    "normalizedName": "台州",
    "normalizedValue": "浙江台州",
    "normalizedSearchText": "浙江台州台州浙江"
  },
  {
    "code": "331002",
    "name": "椒江区",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 椒江区",
    "rank": 3,
    "normalizedName": "椒江",
    "normalizedValue": "浙江台州椒江",
    "normalizedSearchText": "浙江台州椒江椒江浙江台州"
  },
  {
    "code": "331003",
    "name": "黄岩区",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 黄岩区",
    "rank": 3,
    "normalizedName": "黄岩",
    "normalizedValue": "浙江台州黄岩",
    "normalizedSearchText": "浙江台州黄岩黄岩浙江台州"
  },
  {
    "code": "331004",
    "name": "路桥区",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 路桥区",
    "rank": 3,
    "normalizedName": "路桥",
    "normalizedValue": "浙江台州路桥",
    "normalizedSearchText": "浙江台州路桥路桥浙江台州"
  },
  {
    "code": "331022",
    "name": "三门县",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 三门县",
    "rank": 3,
    "normalizedName": "三门",
    "normalizedValue": "浙江台州三门",
    "normalizedSearchText": "浙江台州三门三门浙江台州"
  },
  {
    "code": "331023",
    "name": "天台县",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 天台县",
    "rank": 3,
    "normalizedName": "天台",
    "normalizedValue": "浙江台州天台",
    "normalizedSearchText": "浙江台州天台天台浙江台州"
  },
  {
    "code": "331024",
    "name": "仙居县",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 仙居县",
    "rank": 3,
    "normalizedName": "仙居",
    "normalizedValue": "浙江台州仙居",
    "normalizedSearchText": "浙江台州仙居仙居浙江台州"
  },
  {
    "code": "331081",
    "name": "温岭市",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 温岭市",
    "rank": 3,
    "normalizedName": "温岭",
    "normalizedValue": "浙江台州温岭",
    "normalizedSearchText": "浙江台州温岭温岭浙江台州"
  },
  {
    "code": "331082",
    "name": "临海市",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 临海市",
    "rank": 3,
    "normalizedName": "临海",
    "normalizedValue": "浙江台州临海",
    "normalizedSearchText": "浙江台州临海临海浙江台州"
  },
  {
    "code": "331083",
    "name": "玉环市",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 玉环市",
    "rank": 3,
    "normalizedName": "玉环",
    "normalizedValue": "浙江台州玉环",
    "normalizedSearchText": "浙江台州玉环玉环浙江台州"
  },
  {
    "code": "331001",
    "name": "市辖区",
    "detail": "浙江省 / 台州市",
    "value": "浙江省 / 台州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江台州辖",
    "normalizedSearchText": "浙江台州辖辖浙江台州"
  },
  {
    "code": "331100",
    "name": "丽水市",
    "detail": "浙江省",
    "value": "浙江省 / 丽水市",
    "rank": 2,
    "normalizedName": "丽水",
    "normalizedValue": "浙江丽水",
    "normalizedSearchText": "浙江丽水丽水浙江"
  },
  {
    "code": "331102",
    "name": "莲都区",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 莲都区",
    "rank": 3,
    "normalizedName": "莲都",
    "normalizedValue": "浙江丽水莲都",
    "normalizedSearchText": "浙江丽水莲都莲都浙江丽水"
  },
  {
    "code": "331121",
    "name": "青田县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 青田县",
    "rank": 3,
    "normalizedName": "青田",
    "normalizedValue": "浙江丽水青田",
    "normalizedSearchText": "浙江丽水青田青田浙江丽水"
  },
  {
    "code": "331122",
    "name": "缙云县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 缙云县",
    "rank": 3,
    "normalizedName": "缙云",
    "normalizedValue": "浙江丽水缙云",
    "normalizedSearchText": "浙江丽水缙云缙云浙江丽水"
  },
  {
    "code": "331123",
    "name": "遂昌县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 遂昌县",
    "rank": 3,
    "normalizedName": "遂昌",
    "normalizedValue": "浙江丽水遂昌",
    "normalizedSearchText": "浙江丽水遂昌遂昌浙江丽水"
  },
  {
    "code": "331124",
    "name": "松阳县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 松阳县",
    "rank": 3,
    "normalizedName": "松阳",
    "normalizedValue": "浙江丽水松阳",
    "normalizedSearchText": "浙江丽水松阳松阳浙江丽水"
  },
  {
    "code": "331125",
    "name": "云和县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 云和县",
    "rank": 3,
    "normalizedName": "云和",
    "normalizedValue": "浙江丽水云和",
    "normalizedSearchText": "浙江丽水云和云和浙江丽水"
  },
  {
    "code": "331126",
    "name": "庆元县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 庆元县",
    "rank": 3,
    "normalizedName": "庆元",
    "normalizedValue": "浙江丽水庆元",
    "normalizedSearchText": "浙江丽水庆元庆元浙江丽水"
  },
  {
    "code": "331127",
    "name": "景宁畲族自治县",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 景宁畲族自治县",
    "rank": 3,
    "normalizedName": "景宁畲族自治",
    "normalizedValue": "浙江丽水景宁畲族自治",
    "normalizedSearchText": "浙江丽水景宁畲族自治景宁畲族自治浙江丽水"
  },
  {
    "code": "331181",
    "name": "龙泉市",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 龙泉市",
    "rank": 3,
    "normalizedName": "龙泉",
    "normalizedValue": "浙江丽水龙泉",
    "normalizedSearchText": "浙江丽水龙泉龙泉浙江丽水"
  },
  {
    "code": "331101",
    "name": "市辖区",
    "detail": "浙江省 / 丽水市",
    "value": "浙江省 / 丽水市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "浙江丽水辖",
    "normalizedSearchText": "浙江丽水辖辖浙江丽水"
  },
  {
    "code": "340000",
    "name": "安徽省",
    "detail": "?????",
    "value": "安徽省",
    "rank": 1,
    "normalizedName": "安徽",
    "normalizedValue": "安徽",
    "normalizedSearchText": "安徽安徽"
  },
  {
    "code": "340100",
    "name": "合肥市",
    "detail": "安徽省",
    "value": "安徽省 / 合肥市",
    "rank": 2,
    "normalizedName": "合肥",
    "normalizedValue": "安徽合肥",
    "normalizedSearchText": "安徽合肥合肥安徽"
  },
  {
    "code": "340102",
    "name": "瑶海区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 瑶海区",
    "rank": 3,
    "normalizedName": "瑶海",
    "normalizedValue": "安徽合肥瑶海",
    "normalizedSearchText": "安徽合肥瑶海瑶海安徽合肥"
  },
  {
    "code": "340103",
    "name": "庐阳区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 庐阳区",
    "rank": 3,
    "normalizedName": "庐阳",
    "normalizedValue": "安徽合肥庐阳",
    "normalizedSearchText": "安徽合肥庐阳庐阳安徽合肥"
  },
  {
    "code": "340104",
    "name": "蜀山区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 蜀山区",
    "rank": 3,
    "normalizedName": "蜀山",
    "normalizedValue": "安徽合肥蜀山",
    "normalizedSearchText": "安徽合肥蜀山蜀山安徽合肥"
  },
  {
    "code": "340111",
    "name": "包河区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 包河区",
    "rank": 3,
    "normalizedName": "包河",
    "normalizedValue": "安徽合肥包河",
    "normalizedSearchText": "安徽合肥包河包河安徽合肥"
  },
  {
    "code": "340121",
    "name": "长丰县",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 长丰县",
    "rank": 3,
    "normalizedName": "长丰",
    "normalizedValue": "安徽合肥长丰",
    "normalizedSearchText": "安徽合肥长丰长丰安徽合肥"
  },
  {
    "code": "340122",
    "name": "肥东县",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 肥东县",
    "rank": 3,
    "normalizedName": "肥东",
    "normalizedValue": "安徽合肥肥东",
    "normalizedSearchText": "安徽合肥肥东肥东安徽合肥"
  },
  {
    "code": "340123",
    "name": "肥西县",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 肥西县",
    "rank": 3,
    "normalizedName": "肥西",
    "normalizedValue": "安徽合肥肥西",
    "normalizedSearchText": "安徽合肥肥西肥西安徽合肥"
  },
  {
    "code": "340124",
    "name": "庐江县",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 庐江县",
    "rank": 3,
    "normalizedName": "庐江",
    "normalizedValue": "安徽合肥庐江",
    "normalizedSearchText": "安徽合肥庐江庐江安徽合肥"
  },
  {
    "code": "340181",
    "name": "巢湖市",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 巢湖市",
    "rank": 3,
    "normalizedName": "巢湖",
    "normalizedValue": "安徽合肥巢湖",
    "normalizedSearchText": "安徽合肥巢湖巢湖安徽合肥"
  },
  {
    "code": "340101",
    "name": "市辖区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽合肥辖",
    "normalizedSearchText": "安徽合肥辖辖安徽合肥"
  },
  {
    "code": "340171",
    "name": "合肥高新技术产业开发区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 合肥高新技术产业开发区",
    "rank": 3,
    "normalizedName": "合肥高新技术产业开发",
    "normalizedValue": "安徽合肥合肥高新技术产业开发",
    "normalizedSearchText": "安徽合肥合肥高新技术产业开发合肥高新技术产业开发安徽合肥"
  },
  {
    "code": "340172",
    "name": "合肥经济技术开发区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 合肥经济技术开发区",
    "rank": 3,
    "normalizedName": "合肥经济技术开发",
    "normalizedValue": "安徽合肥合肥经济技术开发",
    "normalizedSearchText": "安徽合肥合肥经济技术开发合肥经济技术开发安徽合肥"
  },
  {
    "code": "340173",
    "name": "合肥新站高新技术产业开发区",
    "detail": "安徽省 / 合肥市",
    "value": "安徽省 / 合肥市 / 合肥新站高新技术产业开发区",
    "rank": 3,
    "normalizedName": "合肥新站高新技术产业开发",
    "normalizedValue": "安徽合肥合肥新站高新技术产业开发",
    "normalizedSearchText": "安徽合肥合肥新站高新技术产业开发合肥新站高新技术产业开发安徽合肥"
  },
  {
    "code": "340200",
    "name": "芜湖市",
    "detail": "安徽省",
    "value": "安徽省 / 芜湖市",
    "rank": 2,
    "normalizedName": "芜湖",
    "normalizedValue": "安徽芜湖",
    "normalizedSearchText": "安徽芜湖芜湖安徽"
  },
  {
    "code": "340202",
    "name": "镜湖区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 镜湖区",
    "rank": 3,
    "normalizedName": "镜湖",
    "normalizedValue": "安徽芜湖镜湖",
    "normalizedSearchText": "安徽芜湖镜湖镜湖安徽芜湖"
  },
  {
    "code": "340207",
    "name": "鸠江区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 鸠江区",
    "rank": 3,
    "normalizedName": "鸠江",
    "normalizedValue": "安徽芜湖鸠江",
    "normalizedSearchText": "安徽芜湖鸠江鸠江安徽芜湖"
  },
  {
    "code": "340209",
    "name": "弋江区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 弋江区",
    "rank": 3,
    "normalizedName": "弋江",
    "normalizedValue": "安徽芜湖弋江",
    "normalizedSearchText": "安徽芜湖弋江弋江安徽芜湖"
  },
  {
    "code": "340210",
    "name": "湾沚区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 湾沚区",
    "rank": 3,
    "normalizedName": "湾沚",
    "normalizedValue": "安徽芜湖湾沚",
    "normalizedSearchText": "安徽芜湖湾沚湾沚安徽芜湖"
  },
  {
    "code": "340212",
    "name": "繁昌区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 繁昌区",
    "rank": 3,
    "normalizedName": "繁昌",
    "normalizedValue": "安徽芜湖繁昌",
    "normalizedSearchText": "安徽芜湖繁昌繁昌安徽芜湖"
  },
  {
    "code": "340223",
    "name": "南陵县",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 南陵县",
    "rank": 3,
    "normalizedName": "南陵",
    "normalizedValue": "安徽芜湖南陵",
    "normalizedSearchText": "安徽芜湖南陵南陵安徽芜湖"
  },
  {
    "code": "340281",
    "name": "无为市",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 无为市",
    "rank": 3,
    "normalizedName": "无为",
    "normalizedValue": "安徽芜湖无为",
    "normalizedSearchText": "安徽芜湖无为无为安徽芜湖"
  },
  {
    "code": "340201",
    "name": "市辖区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽芜湖辖",
    "normalizedSearchText": "安徽芜湖辖辖安徽芜湖"
  },
  {
    "code": "340271",
    "name": "芜湖经济技术开发区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 芜湖经济技术开发区",
    "rank": 3,
    "normalizedName": "芜湖经济技术开发",
    "normalizedValue": "安徽芜湖芜湖经济技术开发",
    "normalizedSearchText": "安徽芜湖芜湖经济技术开发芜湖经济技术开发安徽芜湖"
  },
  {
    "code": "340272",
    "name": "安徽芜湖三山经济开发区",
    "detail": "安徽省 / 芜湖市",
    "value": "安徽省 / 芜湖市 / 安徽芜湖三山经济开发区",
    "rank": 3,
    "normalizedName": "安徽芜湖三山经济开发",
    "normalizedValue": "安徽芜湖安徽芜湖三山经济开发",
    "normalizedSearchText": "安徽芜湖安徽芜湖三山经济开发安徽芜湖三山经济开发安徽芜湖"
  },
  {
    "code": "340300",
    "name": "蚌埠市",
    "detail": "安徽省",
    "value": "安徽省 / 蚌埠市",
    "rank": 2,
    "normalizedName": "蚌埠",
    "normalizedValue": "安徽蚌埠",
    "normalizedSearchText": "安徽蚌埠蚌埠安徽"
  },
  {
    "code": "340302",
    "name": "龙子湖区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 龙子湖区",
    "rank": 3,
    "normalizedName": "龙子湖",
    "normalizedValue": "安徽蚌埠龙子湖",
    "normalizedSearchText": "安徽蚌埠龙子湖龙子湖安徽蚌埠"
  },
  {
    "code": "340303",
    "name": "蚌山区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 蚌山区",
    "rank": 3,
    "normalizedName": "蚌山",
    "normalizedValue": "安徽蚌埠蚌山",
    "normalizedSearchText": "安徽蚌埠蚌山蚌山安徽蚌埠"
  },
  {
    "code": "340304",
    "name": "禹会区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 禹会区",
    "rank": 3,
    "normalizedName": "禹会",
    "normalizedValue": "安徽蚌埠禹会",
    "normalizedSearchText": "安徽蚌埠禹会禹会安徽蚌埠"
  },
  {
    "code": "340311",
    "name": "淮上区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 淮上区",
    "rank": 3,
    "normalizedName": "淮上",
    "normalizedValue": "安徽蚌埠淮上",
    "normalizedSearchText": "安徽蚌埠淮上淮上安徽蚌埠"
  },
  {
    "code": "340321",
    "name": "怀远县",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 怀远县",
    "rank": 3,
    "normalizedName": "怀远",
    "normalizedValue": "安徽蚌埠怀远",
    "normalizedSearchText": "安徽蚌埠怀远怀远安徽蚌埠"
  },
  {
    "code": "340322",
    "name": "五河县",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 五河县",
    "rank": 3,
    "normalizedName": "五河",
    "normalizedValue": "安徽蚌埠五河",
    "normalizedSearchText": "安徽蚌埠五河五河安徽蚌埠"
  },
  {
    "code": "340323",
    "name": "固镇县",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 固镇县",
    "rank": 3,
    "normalizedName": "固",
    "normalizedValue": "安徽蚌埠固",
    "normalizedSearchText": "安徽蚌埠固固安徽蚌埠"
  },
  {
    "code": "340301",
    "name": "市辖区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽蚌埠辖",
    "normalizedSearchText": "安徽蚌埠辖辖安徽蚌埠"
  },
  {
    "code": "340371",
    "name": "蚌埠市高新技术开发区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 蚌埠市高新技术开发区",
    "rank": 3,
    "normalizedName": "蚌埠高新技术开发",
    "normalizedValue": "安徽蚌埠蚌埠高新技术开发",
    "normalizedSearchText": "安徽蚌埠蚌埠高新技术开发蚌埠高新技术开发安徽蚌埠"
  },
  {
    "code": "340372",
    "name": "蚌埠市经济开发区",
    "detail": "安徽省 / 蚌埠市",
    "value": "安徽省 / 蚌埠市 / 蚌埠市经济开发区",
    "rank": 3,
    "normalizedName": "蚌埠经济开发",
    "normalizedValue": "安徽蚌埠蚌埠经济开发",
    "normalizedSearchText": "安徽蚌埠蚌埠经济开发蚌埠经济开发安徽蚌埠"
  },
  {
    "code": "340400",
    "name": "淮南市",
    "detail": "安徽省",
    "value": "安徽省 / 淮南市",
    "rank": 2,
    "normalizedName": "淮南",
    "normalizedValue": "安徽淮南",
    "normalizedSearchText": "安徽淮南淮南安徽"
  },
  {
    "code": "340402",
    "name": "大通区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 大通区",
    "rank": 3,
    "normalizedName": "大通",
    "normalizedValue": "安徽淮南大通",
    "normalizedSearchText": "安徽淮南大通大通安徽淮南"
  },
  {
    "code": "340403",
    "name": "田家庵区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 田家庵区",
    "rank": 3,
    "normalizedName": "田家庵",
    "normalizedValue": "安徽淮南田家庵",
    "normalizedSearchText": "安徽淮南田家庵田家庵安徽淮南"
  },
  {
    "code": "340404",
    "name": "谢家集区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 谢家集区",
    "rank": 3,
    "normalizedName": "谢家集",
    "normalizedValue": "安徽淮南谢家集",
    "normalizedSearchText": "安徽淮南谢家集谢家集安徽淮南"
  },
  {
    "code": "340405",
    "name": "八公山区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 八公山区",
    "rank": 3,
    "normalizedName": "八公山",
    "normalizedValue": "安徽淮南八公山",
    "normalizedSearchText": "安徽淮南八公山八公山安徽淮南"
  },
  {
    "code": "340406",
    "name": "潘集区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 潘集区",
    "rank": 3,
    "normalizedName": "潘集",
    "normalizedValue": "安徽淮南潘集",
    "normalizedSearchText": "安徽淮南潘集潘集安徽淮南"
  },
  {
    "code": "340421",
    "name": "凤台县",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 凤台县",
    "rank": 3,
    "normalizedName": "凤台",
    "normalizedValue": "安徽淮南凤台",
    "normalizedSearchText": "安徽淮南凤台凤台安徽淮南"
  },
  {
    "code": "340422",
    "name": "寿县",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 寿县",
    "rank": 3,
    "normalizedName": "寿",
    "normalizedValue": "安徽淮南寿",
    "normalizedSearchText": "安徽淮南寿寿安徽淮南"
  },
  {
    "code": "340401",
    "name": "市辖区",
    "detail": "安徽省 / 淮南市",
    "value": "安徽省 / 淮南市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽淮南辖",
    "normalizedSearchText": "安徽淮南辖辖安徽淮南"
  },
  {
    "code": "340500",
    "name": "马鞍山市",
    "detail": "安徽省",
    "value": "安徽省 / 马鞍山市",
    "rank": 2,
    "normalizedName": "马鞍山",
    "normalizedValue": "安徽马鞍山",
    "normalizedSearchText": "安徽马鞍山马鞍山安徽"
  },
  {
    "code": "340503",
    "name": "花山区",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 花山区",
    "rank": 3,
    "normalizedName": "花山",
    "normalizedValue": "安徽马鞍山花山",
    "normalizedSearchText": "安徽马鞍山花山花山安徽马鞍山"
  },
  {
    "code": "340504",
    "name": "雨山区",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 雨山区",
    "rank": 3,
    "normalizedName": "雨山",
    "normalizedValue": "安徽马鞍山雨山",
    "normalizedSearchText": "安徽马鞍山雨山雨山安徽马鞍山"
  },
  {
    "code": "340506",
    "name": "博望区",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 博望区",
    "rank": 3,
    "normalizedName": "博望",
    "normalizedValue": "安徽马鞍山博望",
    "normalizedSearchText": "安徽马鞍山博望博望安徽马鞍山"
  },
  {
    "code": "340521",
    "name": "当涂县",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 当涂县",
    "rank": 3,
    "normalizedName": "当涂",
    "normalizedValue": "安徽马鞍山当涂",
    "normalizedSearchText": "安徽马鞍山当涂当涂安徽马鞍山"
  },
  {
    "code": "340522",
    "name": "含山县",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 含山县",
    "rank": 3,
    "normalizedName": "含山",
    "normalizedValue": "安徽马鞍山含山",
    "normalizedSearchText": "安徽马鞍山含山含山安徽马鞍山"
  },
  {
    "code": "340523",
    "name": "和县",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 和县",
    "rank": 3,
    "normalizedName": "和",
    "normalizedValue": "安徽马鞍山和",
    "normalizedSearchText": "安徽马鞍山和和安徽马鞍山"
  },
  {
    "code": "340501",
    "name": "市辖区",
    "detail": "安徽省 / 马鞍山市",
    "value": "安徽省 / 马鞍山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽马鞍山辖",
    "normalizedSearchText": "安徽马鞍山辖辖安徽马鞍山"
  },
  {
    "code": "340600",
    "name": "淮北市",
    "detail": "安徽省",
    "value": "安徽省 / 淮北市",
    "rank": 2,
    "normalizedName": "淮北",
    "normalizedValue": "安徽淮北",
    "normalizedSearchText": "安徽淮北淮北安徽"
  },
  {
    "code": "340602",
    "name": "杜集区",
    "detail": "安徽省 / 淮北市",
    "value": "安徽省 / 淮北市 / 杜集区",
    "rank": 3,
    "normalizedName": "杜集",
    "normalizedValue": "安徽淮北杜集",
    "normalizedSearchText": "安徽淮北杜集杜集安徽淮北"
  },
  {
    "code": "340603",
    "name": "相山区",
    "detail": "安徽省 / 淮北市",
    "value": "安徽省 / 淮北市 / 相山区",
    "rank": 3,
    "normalizedName": "相山",
    "normalizedValue": "安徽淮北相山",
    "normalizedSearchText": "安徽淮北相山相山安徽淮北"
  },
  {
    "code": "340604",
    "name": "烈山区",
    "detail": "安徽省 / 淮北市",
    "value": "安徽省 / 淮北市 / 烈山区",
    "rank": 3,
    "normalizedName": "烈山",
    "normalizedValue": "安徽淮北烈山",
    "normalizedSearchText": "安徽淮北烈山烈山安徽淮北"
  },
  {
    "code": "340621",
    "name": "濉溪县",
    "detail": "安徽省 / 淮北市",
    "value": "安徽省 / 淮北市 / 濉溪县",
    "rank": 3,
    "normalizedName": "濉溪",
    "normalizedValue": "安徽淮北濉溪",
    "normalizedSearchText": "安徽淮北濉溪濉溪安徽淮北"
  },
  {
    "code": "340601",
    "name": "市辖区",
    "detail": "安徽省 / 淮北市",
    "value": "安徽省 / 淮北市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽淮北辖",
    "normalizedSearchText": "安徽淮北辖辖安徽淮北"
  },
  {
    "code": "340700",
    "name": "铜陵市",
    "detail": "安徽省",
    "value": "安徽省 / 铜陵市",
    "rank": 2,
    "normalizedName": "铜陵",
    "normalizedValue": "安徽铜陵",
    "normalizedSearchText": "安徽铜陵铜陵安徽"
  },
  {
    "code": "340705",
    "name": "铜官区",
    "detail": "安徽省 / 铜陵市",
    "value": "安徽省 / 铜陵市 / 铜官区",
    "rank": 3,
    "normalizedName": "铜官",
    "normalizedValue": "安徽铜陵铜官",
    "normalizedSearchText": "安徽铜陵铜官铜官安徽铜陵"
  },
  {
    "code": "340706",
    "name": "义安区",
    "detail": "安徽省 / 铜陵市",
    "value": "安徽省 / 铜陵市 / 义安区",
    "rank": 3,
    "normalizedName": "义安",
    "normalizedValue": "安徽铜陵义安",
    "normalizedSearchText": "安徽铜陵义安义安安徽铜陵"
  },
  {
    "code": "340711",
    "name": "郊区",
    "detail": "安徽省 / 铜陵市",
    "value": "安徽省 / 铜陵市 / 郊区",
    "rank": 3,
    "normalizedName": "郊",
    "normalizedValue": "安徽铜陵郊",
    "normalizedSearchText": "安徽铜陵郊郊安徽铜陵"
  },
  {
    "code": "340722",
    "name": "枞阳县",
    "detail": "安徽省 / 铜陵市",
    "value": "安徽省 / 铜陵市 / 枞阳县",
    "rank": 3,
    "normalizedName": "枞阳",
    "normalizedValue": "安徽铜陵枞阳",
    "normalizedSearchText": "安徽铜陵枞阳枞阳安徽铜陵"
  },
  {
    "code": "340701",
    "name": "市辖区",
    "detail": "安徽省 / 铜陵市",
    "value": "安徽省 / 铜陵市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽铜陵辖",
    "normalizedSearchText": "安徽铜陵辖辖安徽铜陵"
  },
  {
    "code": "340800",
    "name": "安庆市",
    "detail": "安徽省",
    "value": "安徽省 / 安庆市",
    "rank": 2,
    "normalizedName": "安庆",
    "normalizedValue": "安徽安庆",
    "normalizedSearchText": "安徽安庆安庆安徽"
  },
  {
    "code": "340802",
    "name": "迎江区",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 迎江区",
    "rank": 3,
    "normalizedName": "迎江",
    "normalizedValue": "安徽安庆迎江",
    "normalizedSearchText": "安徽安庆迎江迎江安徽安庆"
  },
  {
    "code": "340803",
    "name": "大观区",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 大观区",
    "rank": 3,
    "normalizedName": "大观",
    "normalizedValue": "安徽安庆大观",
    "normalizedSearchText": "安徽安庆大观大观安徽安庆"
  },
  {
    "code": "340811",
    "name": "宜秀区",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 宜秀区",
    "rank": 3,
    "normalizedName": "宜秀",
    "normalizedValue": "安徽安庆宜秀",
    "normalizedSearchText": "安徽安庆宜秀宜秀安徽安庆"
  },
  {
    "code": "340822",
    "name": "怀宁县",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 怀宁县",
    "rank": 3,
    "normalizedName": "怀宁",
    "normalizedValue": "安徽安庆怀宁",
    "normalizedSearchText": "安徽安庆怀宁怀宁安徽安庆"
  },
  {
    "code": "340825",
    "name": "太湖县",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 太湖县",
    "rank": 3,
    "normalizedName": "太湖",
    "normalizedValue": "安徽安庆太湖",
    "normalizedSearchText": "安徽安庆太湖太湖安徽安庆"
  },
  {
    "code": "340826",
    "name": "宿松县",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 宿松县",
    "rank": 3,
    "normalizedName": "宿松",
    "normalizedValue": "安徽安庆宿松",
    "normalizedSearchText": "安徽安庆宿松宿松安徽安庆"
  },
  {
    "code": "340827",
    "name": "望江县",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 望江县",
    "rank": 3,
    "normalizedName": "望江",
    "normalizedValue": "安徽安庆望江",
    "normalizedSearchText": "安徽安庆望江望江安徽安庆"
  },
  {
    "code": "340828",
    "name": "岳西县",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 岳西县",
    "rank": 3,
    "normalizedName": "岳西",
    "normalizedValue": "安徽安庆岳西",
    "normalizedSearchText": "安徽安庆岳西岳西安徽安庆"
  },
  {
    "code": "340881",
    "name": "桐城市",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 桐城市",
    "rank": 3,
    "normalizedName": "桐城",
    "normalizedValue": "安徽安庆桐城",
    "normalizedSearchText": "安徽安庆桐城桐城安徽安庆"
  },
  {
    "code": "340882",
    "name": "潜山市",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 潜山市",
    "rank": 3,
    "normalizedName": "潜山",
    "normalizedValue": "安徽安庆潜山",
    "normalizedSearchText": "安徽安庆潜山潜山安徽安庆"
  },
  {
    "code": "340801",
    "name": "市辖区",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽安庆辖",
    "normalizedSearchText": "安徽安庆辖辖安徽安庆"
  },
  {
    "code": "340871",
    "name": "安徽安庆经济开发区",
    "detail": "安徽省 / 安庆市",
    "value": "安徽省 / 安庆市 / 安徽安庆经济开发区",
    "rank": 3,
    "normalizedName": "安徽安庆经济开发",
    "normalizedValue": "安徽安庆安徽安庆经济开发",
    "normalizedSearchText": "安徽安庆安徽安庆经济开发安徽安庆经济开发安徽安庆"
  },
  {
    "code": "341000",
    "name": "黄山市",
    "detail": "安徽省",
    "value": "安徽省 / 黄山市",
    "rank": 2,
    "normalizedName": "黄山",
    "normalizedValue": "安徽黄山",
    "normalizedSearchText": "安徽黄山黄山安徽"
  },
  {
    "code": "341002",
    "name": "屯溪区",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 屯溪区",
    "rank": 3,
    "normalizedName": "屯溪",
    "normalizedValue": "安徽黄山屯溪",
    "normalizedSearchText": "安徽黄山屯溪屯溪安徽黄山"
  },
  {
    "code": "341003",
    "name": "黄山区",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 黄山区",
    "rank": 3,
    "normalizedName": "黄山",
    "normalizedValue": "安徽黄山黄山",
    "normalizedSearchText": "安徽黄山黄山黄山安徽黄山"
  },
  {
    "code": "341004",
    "name": "徽州区",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 徽州区",
    "rank": 3,
    "normalizedName": "徽州",
    "normalizedValue": "安徽黄山徽州",
    "normalizedSearchText": "安徽黄山徽州徽州安徽黄山"
  },
  {
    "code": "341021",
    "name": "歙县",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 歙县",
    "rank": 3,
    "normalizedName": "歙",
    "normalizedValue": "安徽黄山歙",
    "normalizedSearchText": "安徽黄山歙歙安徽黄山"
  },
  {
    "code": "341022",
    "name": "休宁县",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 休宁县",
    "rank": 3,
    "normalizedName": "休宁",
    "normalizedValue": "安徽黄山休宁",
    "normalizedSearchText": "安徽黄山休宁休宁安徽黄山"
  },
  {
    "code": "341023",
    "name": "黟县",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 黟县",
    "rank": 3,
    "normalizedName": "黟",
    "normalizedValue": "安徽黄山黟",
    "normalizedSearchText": "安徽黄山黟黟安徽黄山"
  },
  {
    "code": "341024",
    "name": "祁门县",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 祁门县",
    "rank": 3,
    "normalizedName": "祁门",
    "normalizedValue": "安徽黄山祁门",
    "normalizedSearchText": "安徽黄山祁门祁门安徽黄山"
  },
  {
    "code": "341001",
    "name": "市辖区",
    "detail": "安徽省 / 黄山市",
    "value": "安徽省 / 黄山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽黄山辖",
    "normalizedSearchText": "安徽黄山辖辖安徽黄山"
  },
  {
    "code": "341100",
    "name": "滁州市",
    "detail": "安徽省",
    "value": "安徽省 / 滁州市",
    "rank": 2,
    "normalizedName": "滁州",
    "normalizedValue": "安徽滁州",
    "normalizedSearchText": "安徽滁州滁州安徽"
  },
  {
    "code": "341102",
    "name": "琅琊区",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 琅琊区",
    "rank": 3,
    "normalizedName": "琅琊",
    "normalizedValue": "安徽滁州琅琊",
    "normalizedSearchText": "安徽滁州琅琊琅琊安徽滁州"
  },
  {
    "code": "341103",
    "name": "南谯区",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 南谯区",
    "rank": 3,
    "normalizedName": "南谯",
    "normalizedValue": "安徽滁州南谯",
    "normalizedSearchText": "安徽滁州南谯南谯安徽滁州"
  },
  {
    "code": "341122",
    "name": "来安县",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 来安县",
    "rank": 3,
    "normalizedName": "来安",
    "normalizedValue": "安徽滁州来安",
    "normalizedSearchText": "安徽滁州来安来安安徽滁州"
  },
  {
    "code": "341124",
    "name": "全椒县",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 全椒县",
    "rank": 3,
    "normalizedName": "全椒",
    "normalizedValue": "安徽滁州全椒",
    "normalizedSearchText": "安徽滁州全椒全椒安徽滁州"
  },
  {
    "code": "341125",
    "name": "定远县",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 定远县",
    "rank": 3,
    "normalizedName": "定远",
    "normalizedValue": "安徽滁州定远",
    "normalizedSearchText": "安徽滁州定远定远安徽滁州"
  },
  {
    "code": "341126",
    "name": "凤阳县",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 凤阳县",
    "rank": 3,
    "normalizedName": "凤阳",
    "normalizedValue": "安徽滁州凤阳",
    "normalizedSearchText": "安徽滁州凤阳凤阳安徽滁州"
  },
  {
    "code": "341181",
    "name": "天长市",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 天长市",
    "rank": 3,
    "normalizedName": "天长",
    "normalizedValue": "安徽滁州天长",
    "normalizedSearchText": "安徽滁州天长天长安徽滁州"
  },
  {
    "code": "341182",
    "name": "明光市",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 明光市",
    "rank": 3,
    "normalizedName": "明光",
    "normalizedValue": "安徽滁州明光",
    "normalizedSearchText": "安徽滁州明光明光安徽滁州"
  },
  {
    "code": "341101",
    "name": "市辖区",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽滁州辖",
    "normalizedSearchText": "安徽滁州辖辖安徽滁州"
  },
  {
    "code": "341171",
    "name": "中新苏滁高新技术产业开发区",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 中新苏滁高新技术产业开发区",
    "rank": 3,
    "normalizedName": "中新苏滁高新技术产业开发",
    "normalizedValue": "安徽滁州中新苏滁高新技术产业开发",
    "normalizedSearchText": "安徽滁州中新苏滁高新技术产业开发中新苏滁高新技术产业开发安徽滁州"
  },
  {
    "code": "341172",
    "name": "滁州经济技术开发区",
    "detail": "安徽省 / 滁州市",
    "value": "安徽省 / 滁州市 / 滁州经济技术开发区",
    "rank": 3,
    "normalizedName": "滁州经济技术开发",
    "normalizedValue": "安徽滁州滁州经济技术开发",
    "normalizedSearchText": "安徽滁州滁州经济技术开发滁州经济技术开发安徽滁州"
  },
  {
    "code": "341200",
    "name": "阜阳市",
    "detail": "安徽省",
    "value": "安徽省 / 阜阳市",
    "rank": 2,
    "normalizedName": "阜阳",
    "normalizedValue": "安徽阜阳",
    "normalizedSearchText": "安徽阜阳阜阳安徽"
  },
  {
    "code": "341202",
    "name": "颍州区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 颍州区",
    "rank": 3,
    "normalizedName": "颍州",
    "normalizedValue": "安徽阜阳颍州",
    "normalizedSearchText": "安徽阜阳颍州颍州安徽阜阳"
  },
  {
    "code": "341203",
    "name": "颍东区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 颍东区",
    "rank": 3,
    "normalizedName": "颍东",
    "normalizedValue": "安徽阜阳颍东",
    "normalizedSearchText": "安徽阜阳颍东颍东安徽阜阳"
  },
  {
    "code": "341204",
    "name": "颍泉区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 颍泉区",
    "rank": 3,
    "normalizedName": "颍泉",
    "normalizedValue": "安徽阜阳颍泉",
    "normalizedSearchText": "安徽阜阳颍泉颍泉安徽阜阳"
  },
  {
    "code": "341221",
    "name": "临泉县",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 临泉县",
    "rank": 3,
    "normalizedName": "临泉",
    "normalizedValue": "安徽阜阳临泉",
    "normalizedSearchText": "安徽阜阳临泉临泉安徽阜阳"
  },
  {
    "code": "341222",
    "name": "太和县",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 太和县",
    "rank": 3,
    "normalizedName": "太和",
    "normalizedValue": "安徽阜阳太和",
    "normalizedSearchText": "安徽阜阳太和太和安徽阜阳"
  },
  {
    "code": "341225",
    "name": "阜南县",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 阜南县",
    "rank": 3,
    "normalizedName": "阜南",
    "normalizedValue": "安徽阜阳阜南",
    "normalizedSearchText": "安徽阜阳阜南阜南安徽阜阳"
  },
  {
    "code": "341226",
    "name": "颍上县",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 颍上县",
    "rank": 3,
    "normalizedName": "颍上",
    "normalizedValue": "安徽阜阳颍上",
    "normalizedSearchText": "安徽阜阳颍上颍上安徽阜阳"
  },
  {
    "code": "341282",
    "name": "界首市",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 界首市",
    "rank": 3,
    "normalizedName": "界首",
    "normalizedValue": "安徽阜阳界首",
    "normalizedSearchText": "安徽阜阳界首界首安徽阜阳"
  },
  {
    "code": "341201",
    "name": "市辖区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽阜阳辖",
    "normalizedSearchText": "安徽阜阳辖辖安徽阜阳"
  },
  {
    "code": "341271",
    "name": "阜阳合肥现代产业园区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 阜阳合肥现代产业园区",
    "rank": 3,
    "normalizedName": "阜阳合肥现代产业园",
    "normalizedValue": "安徽阜阳阜阳合肥现代产业园",
    "normalizedSearchText": "安徽阜阳阜阳合肥现代产业园阜阳合肥现代产业园安徽阜阳"
  },
  {
    "code": "341272",
    "name": "阜阳经济技术开发区",
    "detail": "安徽省 / 阜阳市",
    "value": "安徽省 / 阜阳市 / 阜阳经济技术开发区",
    "rank": 3,
    "normalizedName": "阜阳经济技术开发",
    "normalizedValue": "安徽阜阳阜阳经济技术开发",
    "normalizedSearchText": "安徽阜阳阜阳经济技术开发阜阳经济技术开发安徽阜阳"
  },
  {
    "code": "341300",
    "name": "宿州市",
    "detail": "安徽省",
    "value": "安徽省 / 宿州市",
    "rank": 2,
    "normalizedName": "宿州",
    "normalizedValue": "安徽宿州",
    "normalizedSearchText": "安徽宿州宿州安徽"
  },
  {
    "code": "341302",
    "name": "埇桥区",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 埇桥区",
    "rank": 3,
    "normalizedName": "埇桥",
    "normalizedValue": "安徽宿州埇桥",
    "normalizedSearchText": "安徽宿州埇桥埇桥安徽宿州"
  },
  {
    "code": "341321",
    "name": "砀山县",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 砀山县",
    "rank": 3,
    "normalizedName": "砀山",
    "normalizedValue": "安徽宿州砀山",
    "normalizedSearchText": "安徽宿州砀山砀山安徽宿州"
  },
  {
    "code": "341322",
    "name": "萧县",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 萧县",
    "rank": 3,
    "normalizedName": "萧",
    "normalizedValue": "安徽宿州萧",
    "normalizedSearchText": "安徽宿州萧萧安徽宿州"
  },
  {
    "code": "341323",
    "name": "灵璧县",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 灵璧县",
    "rank": 3,
    "normalizedName": "灵璧",
    "normalizedValue": "安徽宿州灵璧",
    "normalizedSearchText": "安徽宿州灵璧灵璧安徽宿州"
  },
  {
    "code": "341324",
    "name": "泗县",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 泗县",
    "rank": 3,
    "normalizedName": "泗",
    "normalizedValue": "安徽宿州泗",
    "normalizedSearchText": "安徽宿州泗泗安徽宿州"
  },
  {
    "code": "341301",
    "name": "市辖区",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽宿州辖",
    "normalizedSearchText": "安徽宿州辖辖安徽宿州"
  },
  {
    "code": "341371",
    "name": "宿州马鞍山现代产业园区",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 宿州马鞍山现代产业园区",
    "rank": 3,
    "normalizedName": "宿州马鞍山现代产业园",
    "normalizedValue": "安徽宿州宿州马鞍山现代产业园",
    "normalizedSearchText": "安徽宿州宿州马鞍山现代产业园宿州马鞍山现代产业园安徽宿州"
  },
  {
    "code": "341372",
    "name": "宿州经济技术开发区",
    "detail": "安徽省 / 宿州市",
    "value": "安徽省 / 宿州市 / 宿州经济技术开发区",
    "rank": 3,
    "normalizedName": "宿州经济技术开发",
    "normalizedValue": "安徽宿州宿州经济技术开发",
    "normalizedSearchText": "安徽宿州宿州经济技术开发宿州经济技术开发安徽宿州"
  },
  {
    "code": "341500",
    "name": "六安市",
    "detail": "安徽省",
    "value": "安徽省 / 六安市",
    "rank": 2,
    "normalizedName": "六安",
    "normalizedValue": "安徽六安",
    "normalizedSearchText": "安徽六安六安安徽"
  },
  {
    "code": "341502",
    "name": "金安区",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 金安区",
    "rank": 3,
    "normalizedName": "金安",
    "normalizedValue": "安徽六安金安",
    "normalizedSearchText": "安徽六安金安金安安徽六安"
  },
  {
    "code": "341503",
    "name": "裕安区",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 裕安区",
    "rank": 3,
    "normalizedName": "裕安",
    "normalizedValue": "安徽六安裕安",
    "normalizedSearchText": "安徽六安裕安裕安安徽六安"
  },
  {
    "code": "341504",
    "name": "叶集区",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 叶集区",
    "rank": 3,
    "normalizedName": "叶集",
    "normalizedValue": "安徽六安叶集",
    "normalizedSearchText": "安徽六安叶集叶集安徽六安"
  },
  {
    "code": "341522",
    "name": "霍邱县",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 霍邱县",
    "rank": 3,
    "normalizedName": "霍邱",
    "normalizedValue": "安徽六安霍邱",
    "normalizedSearchText": "安徽六安霍邱霍邱安徽六安"
  },
  {
    "code": "341523",
    "name": "舒城县",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 舒城县",
    "rank": 3,
    "normalizedName": "舒城",
    "normalizedValue": "安徽六安舒城",
    "normalizedSearchText": "安徽六安舒城舒城安徽六安"
  },
  {
    "code": "341524",
    "name": "金寨县",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 金寨县",
    "rank": 3,
    "normalizedName": "金寨",
    "normalizedValue": "安徽六安金寨",
    "normalizedSearchText": "安徽六安金寨金寨安徽六安"
  },
  {
    "code": "341525",
    "name": "霍山县",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 霍山县",
    "rank": 3,
    "normalizedName": "霍山",
    "normalizedValue": "安徽六安霍山",
    "normalizedSearchText": "安徽六安霍山霍山安徽六安"
  },
  {
    "code": "341501",
    "name": "市辖区",
    "detail": "安徽省 / 六安市",
    "value": "安徽省 / 六安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽六安辖",
    "normalizedSearchText": "安徽六安辖辖安徽六安"
  },
  {
    "code": "341600",
    "name": "亳州市",
    "detail": "安徽省",
    "value": "安徽省 / 亳州市",
    "rank": 2,
    "normalizedName": "亳州",
    "normalizedValue": "安徽亳州",
    "normalizedSearchText": "安徽亳州亳州安徽"
  },
  {
    "code": "341602",
    "name": "谯城区",
    "detail": "安徽省 / 亳州市",
    "value": "安徽省 / 亳州市 / 谯城区",
    "rank": 3,
    "normalizedName": "谯城",
    "normalizedValue": "安徽亳州谯城",
    "normalizedSearchText": "安徽亳州谯城谯城安徽亳州"
  },
  {
    "code": "341621",
    "name": "涡阳县",
    "detail": "安徽省 / 亳州市",
    "value": "安徽省 / 亳州市 / 涡阳县",
    "rank": 3,
    "normalizedName": "涡阳",
    "normalizedValue": "安徽亳州涡阳",
    "normalizedSearchText": "安徽亳州涡阳涡阳安徽亳州"
  },
  {
    "code": "341622",
    "name": "蒙城县",
    "detail": "安徽省 / 亳州市",
    "value": "安徽省 / 亳州市 / 蒙城县",
    "rank": 3,
    "normalizedName": "蒙城",
    "normalizedValue": "安徽亳州蒙城",
    "normalizedSearchText": "安徽亳州蒙城蒙城安徽亳州"
  },
  {
    "code": "341623",
    "name": "利辛县",
    "detail": "安徽省 / 亳州市",
    "value": "安徽省 / 亳州市 / 利辛县",
    "rank": 3,
    "normalizedName": "利辛",
    "normalizedValue": "安徽亳州利辛",
    "normalizedSearchText": "安徽亳州利辛利辛安徽亳州"
  },
  {
    "code": "341601",
    "name": "市辖区",
    "detail": "安徽省 / 亳州市",
    "value": "安徽省 / 亳州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽亳州辖",
    "normalizedSearchText": "安徽亳州辖辖安徽亳州"
  },
  {
    "code": "341700",
    "name": "池州市",
    "detail": "安徽省",
    "value": "安徽省 / 池州市",
    "rank": 2,
    "normalizedName": "池州",
    "normalizedValue": "安徽池州",
    "normalizedSearchText": "安徽池州池州安徽"
  },
  {
    "code": "341702",
    "name": "贵池区",
    "detail": "安徽省 / 池州市",
    "value": "安徽省 / 池州市 / 贵池区",
    "rank": 3,
    "normalizedName": "贵池",
    "normalizedValue": "安徽池州贵池",
    "normalizedSearchText": "安徽池州贵池贵池安徽池州"
  },
  {
    "code": "341721",
    "name": "东至县",
    "detail": "安徽省 / 池州市",
    "value": "安徽省 / 池州市 / 东至县",
    "rank": 3,
    "normalizedName": "东至",
    "normalizedValue": "安徽池州东至",
    "normalizedSearchText": "安徽池州东至东至安徽池州"
  },
  {
    "code": "341722",
    "name": "石台县",
    "detail": "安徽省 / 池州市",
    "value": "安徽省 / 池州市 / 石台县",
    "rank": 3,
    "normalizedName": "石台",
    "normalizedValue": "安徽池州石台",
    "normalizedSearchText": "安徽池州石台石台安徽池州"
  },
  {
    "code": "341723",
    "name": "青阳县",
    "detail": "安徽省 / 池州市",
    "value": "安徽省 / 池州市 / 青阳县",
    "rank": 3,
    "normalizedName": "青阳",
    "normalizedValue": "安徽池州青阳",
    "normalizedSearchText": "安徽池州青阳青阳安徽池州"
  },
  {
    "code": "341701",
    "name": "市辖区",
    "detail": "安徽省 / 池州市",
    "value": "安徽省 / 池州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽池州辖",
    "normalizedSearchText": "安徽池州辖辖安徽池州"
  },
  {
    "code": "341800",
    "name": "宣城市",
    "detail": "安徽省",
    "value": "安徽省 / 宣城市",
    "rank": 2,
    "normalizedName": "宣城",
    "normalizedValue": "安徽宣城",
    "normalizedSearchText": "安徽宣城宣城安徽"
  },
  {
    "code": "341802",
    "name": "宣州区",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 宣州区",
    "rank": 3,
    "normalizedName": "宣州",
    "normalizedValue": "安徽宣城宣州",
    "normalizedSearchText": "安徽宣城宣州宣州安徽宣城"
  },
  {
    "code": "341821",
    "name": "郎溪县",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 郎溪县",
    "rank": 3,
    "normalizedName": "郎溪",
    "normalizedValue": "安徽宣城郎溪",
    "normalizedSearchText": "安徽宣城郎溪郎溪安徽宣城"
  },
  {
    "code": "341823",
    "name": "泾县",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 泾县",
    "rank": 3,
    "normalizedName": "泾",
    "normalizedValue": "安徽宣城泾",
    "normalizedSearchText": "安徽宣城泾泾安徽宣城"
  },
  {
    "code": "341824",
    "name": "绩溪县",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 绩溪县",
    "rank": 3,
    "normalizedName": "绩溪",
    "normalizedValue": "安徽宣城绩溪",
    "normalizedSearchText": "安徽宣城绩溪绩溪安徽宣城"
  },
  {
    "code": "341825",
    "name": "旌德县",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 旌德县",
    "rank": 3,
    "normalizedName": "旌德",
    "normalizedValue": "安徽宣城旌德",
    "normalizedSearchText": "安徽宣城旌德旌德安徽宣城"
  },
  {
    "code": "341881",
    "name": "宁国市",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 宁国市",
    "rank": 3,
    "normalizedName": "宁国",
    "normalizedValue": "安徽宣城宁国",
    "normalizedSearchText": "安徽宣城宁国宁国安徽宣城"
  },
  {
    "code": "341882",
    "name": "广德市",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 广德市",
    "rank": 3,
    "normalizedName": "广德",
    "normalizedValue": "安徽宣城广德",
    "normalizedSearchText": "安徽宣城广德广德安徽宣城"
  },
  {
    "code": "341801",
    "name": "市辖区",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "安徽宣城辖",
    "normalizedSearchText": "安徽宣城辖辖安徽宣城"
  },
  {
    "code": "341871",
    "name": "宣城市经济开发区",
    "detail": "安徽省 / 宣城市",
    "value": "安徽省 / 宣城市 / 宣城市经济开发区",
    "rank": 3,
    "normalizedName": "宣城经济开发",
    "normalizedValue": "安徽宣城宣城经济开发",
    "normalizedSearchText": "安徽宣城宣城经济开发宣城经济开发安徽宣城"
  },
  {
    "code": "350000",
    "name": "福建省",
    "detail": "?????",
    "value": "福建省",
    "rank": 1,
    "normalizedName": "福建",
    "normalizedValue": "福建",
    "normalizedSearchText": "福建福建"
  },
  {
    "code": "350100",
    "name": "福州市",
    "detail": "福建省",
    "value": "福建省 / 福州市",
    "rank": 2,
    "normalizedName": "福州",
    "normalizedValue": "福建福州",
    "normalizedSearchText": "福建福州福州福建"
  },
  {
    "code": "350102",
    "name": "鼓楼区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 鼓楼区",
    "rank": 3,
    "normalizedName": "鼓楼",
    "normalizedValue": "福建福州鼓楼",
    "normalizedSearchText": "福建福州鼓楼鼓楼福建福州"
  },
  {
    "code": "350103",
    "name": "台江区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 台江区",
    "rank": 3,
    "normalizedName": "台江",
    "normalizedValue": "福建福州台江",
    "normalizedSearchText": "福建福州台江台江福建福州"
  },
  {
    "code": "350104",
    "name": "仓山区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 仓山区",
    "rank": 3,
    "normalizedName": "仓山",
    "normalizedValue": "福建福州仓山",
    "normalizedSearchText": "福建福州仓山仓山福建福州"
  },
  {
    "code": "350105",
    "name": "马尾区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 马尾区",
    "rank": 3,
    "normalizedName": "马尾",
    "normalizedValue": "福建福州马尾",
    "normalizedSearchText": "福建福州马尾马尾福建福州"
  },
  {
    "code": "350111",
    "name": "晋安区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 晋安区",
    "rank": 3,
    "normalizedName": "晋安",
    "normalizedValue": "福建福州晋安",
    "normalizedSearchText": "福建福州晋安晋安福建福州"
  },
  {
    "code": "350112",
    "name": "长乐区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 长乐区",
    "rank": 3,
    "normalizedName": "长乐",
    "normalizedValue": "福建福州长乐",
    "normalizedSearchText": "福建福州长乐长乐福建福州"
  },
  {
    "code": "350121",
    "name": "闽侯县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 闽侯县",
    "rank": 3,
    "normalizedName": "闽侯",
    "normalizedValue": "福建福州闽侯",
    "normalizedSearchText": "福建福州闽侯闽侯福建福州"
  },
  {
    "code": "350122",
    "name": "连江县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 连江县",
    "rank": 3,
    "normalizedName": "连江",
    "normalizedValue": "福建福州连江",
    "normalizedSearchText": "福建福州连江连江福建福州"
  },
  {
    "code": "350123",
    "name": "罗源县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 罗源县",
    "rank": 3,
    "normalizedName": "罗源",
    "normalizedValue": "福建福州罗源",
    "normalizedSearchText": "福建福州罗源罗源福建福州"
  },
  {
    "code": "350124",
    "name": "闽清县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 闽清县",
    "rank": 3,
    "normalizedName": "闽清",
    "normalizedValue": "福建福州闽清",
    "normalizedSearchText": "福建福州闽清闽清福建福州"
  },
  {
    "code": "350125",
    "name": "永泰县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 永泰县",
    "rank": 3,
    "normalizedName": "永泰",
    "normalizedValue": "福建福州永泰",
    "normalizedSearchText": "福建福州永泰永泰福建福州"
  },
  {
    "code": "350128",
    "name": "平潭县",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 平潭县",
    "rank": 3,
    "normalizedName": "平潭",
    "normalizedValue": "福建福州平潭",
    "normalizedSearchText": "福建福州平潭平潭福建福州"
  },
  {
    "code": "350181",
    "name": "福清市",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 福清市",
    "rank": 3,
    "normalizedName": "福清",
    "normalizedValue": "福建福州福清",
    "normalizedSearchText": "福建福州福清福清福建福州"
  },
  {
    "code": "350101",
    "name": "市辖区",
    "detail": "福建省 / 福州市",
    "value": "福建省 / 福州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建福州辖",
    "normalizedSearchText": "福建福州辖辖福建福州"
  },
  {
    "code": "350200",
    "name": "厦门市",
    "detail": "福建省",
    "value": "福建省 / 厦门市",
    "rank": 2,
    "normalizedName": "厦门",
    "normalizedValue": "福建厦门",
    "normalizedSearchText": "福建厦门厦门福建"
  },
  {
    "code": "350203",
    "name": "思明区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 思明区",
    "rank": 3,
    "normalizedName": "思明",
    "normalizedValue": "福建厦门思明",
    "normalizedSearchText": "福建厦门思明思明福建厦门"
  },
  {
    "code": "350205",
    "name": "海沧区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 海沧区",
    "rank": 3,
    "normalizedName": "海沧",
    "normalizedValue": "福建厦门海沧",
    "normalizedSearchText": "福建厦门海沧海沧福建厦门"
  },
  {
    "code": "350206",
    "name": "湖里区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 湖里区",
    "rank": 3,
    "normalizedName": "湖里",
    "normalizedValue": "福建厦门湖里",
    "normalizedSearchText": "福建厦门湖里湖里福建厦门"
  },
  {
    "code": "350211",
    "name": "集美区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 集美区",
    "rank": 3,
    "normalizedName": "集美",
    "normalizedValue": "福建厦门集美",
    "normalizedSearchText": "福建厦门集美集美福建厦门"
  },
  {
    "code": "350212",
    "name": "同安区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 同安区",
    "rank": 3,
    "normalizedName": "同安",
    "normalizedValue": "福建厦门同安",
    "normalizedSearchText": "福建厦门同安同安福建厦门"
  },
  {
    "code": "350213",
    "name": "翔安区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 翔安区",
    "rank": 3,
    "normalizedName": "翔安",
    "normalizedValue": "福建厦门翔安",
    "normalizedSearchText": "福建厦门翔安翔安福建厦门"
  },
  {
    "code": "350201",
    "name": "市辖区",
    "detail": "福建省 / 厦门市",
    "value": "福建省 / 厦门市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建厦门辖",
    "normalizedSearchText": "福建厦门辖辖福建厦门"
  },
  {
    "code": "350300",
    "name": "莆田市",
    "detail": "福建省",
    "value": "福建省 / 莆田市",
    "rank": 2,
    "normalizedName": "莆田",
    "normalizedValue": "福建莆田",
    "normalizedSearchText": "福建莆田莆田福建"
  },
  {
    "code": "350302",
    "name": "城厢区",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 城厢区",
    "rank": 3,
    "normalizedName": "城厢",
    "normalizedValue": "福建莆田城厢",
    "normalizedSearchText": "福建莆田城厢城厢福建莆田"
  },
  {
    "code": "350303",
    "name": "涵江区",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 涵江区",
    "rank": 3,
    "normalizedName": "涵江",
    "normalizedValue": "福建莆田涵江",
    "normalizedSearchText": "福建莆田涵江涵江福建莆田"
  },
  {
    "code": "350304",
    "name": "荔城区",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 荔城区",
    "rank": 3,
    "normalizedName": "荔城",
    "normalizedValue": "福建莆田荔城",
    "normalizedSearchText": "福建莆田荔城荔城福建莆田"
  },
  {
    "code": "350305",
    "name": "秀屿区",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 秀屿区",
    "rank": 3,
    "normalizedName": "秀屿",
    "normalizedValue": "福建莆田秀屿",
    "normalizedSearchText": "福建莆田秀屿秀屿福建莆田"
  },
  {
    "code": "350322",
    "name": "仙游县",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 仙游县",
    "rank": 3,
    "normalizedName": "仙游",
    "normalizedValue": "福建莆田仙游",
    "normalizedSearchText": "福建莆田仙游仙游福建莆田"
  },
  {
    "code": "350301",
    "name": "市辖区",
    "detail": "福建省 / 莆田市",
    "value": "福建省 / 莆田市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建莆田辖",
    "normalizedSearchText": "福建莆田辖辖福建莆田"
  },
  {
    "code": "350400",
    "name": "三明市",
    "detail": "福建省",
    "value": "福建省 / 三明市",
    "rank": 2,
    "normalizedName": "三明",
    "normalizedValue": "福建三明",
    "normalizedSearchText": "福建三明三明福建"
  },
  {
    "code": "350402",
    "name": "梅列区",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 梅列区",
    "rank": 3,
    "normalizedName": "梅列",
    "normalizedValue": "福建三明梅列",
    "normalizedSearchText": "福建三明梅列梅列福建三明"
  },
  {
    "code": "350403",
    "name": "三元区",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 三元区",
    "rank": 3,
    "normalizedName": "三元",
    "normalizedValue": "福建三明三元",
    "normalizedSearchText": "福建三明三元三元福建三明"
  },
  {
    "code": "350421",
    "name": "明溪县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 明溪县",
    "rank": 3,
    "normalizedName": "明溪",
    "normalizedValue": "福建三明明溪",
    "normalizedSearchText": "福建三明明溪明溪福建三明"
  },
  {
    "code": "350423",
    "name": "清流县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 清流县",
    "rank": 3,
    "normalizedName": "清流",
    "normalizedValue": "福建三明清流",
    "normalizedSearchText": "福建三明清流清流福建三明"
  },
  {
    "code": "350424",
    "name": "宁化县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 宁化县",
    "rank": 3,
    "normalizedName": "宁化",
    "normalizedValue": "福建三明宁化",
    "normalizedSearchText": "福建三明宁化宁化福建三明"
  },
  {
    "code": "350425",
    "name": "大田县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 大田县",
    "rank": 3,
    "normalizedName": "大田",
    "normalizedValue": "福建三明大田",
    "normalizedSearchText": "福建三明大田大田福建三明"
  },
  {
    "code": "350426",
    "name": "尤溪县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 尤溪县",
    "rank": 3,
    "normalizedName": "尤溪",
    "normalizedValue": "福建三明尤溪",
    "normalizedSearchText": "福建三明尤溪尤溪福建三明"
  },
  {
    "code": "350427",
    "name": "沙县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 沙县",
    "rank": 3,
    "normalizedName": "沙",
    "normalizedValue": "福建三明沙",
    "normalizedSearchText": "福建三明沙沙福建三明"
  },
  {
    "code": "350428",
    "name": "将乐县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 将乐县",
    "rank": 3,
    "normalizedName": "将乐",
    "normalizedValue": "福建三明将乐",
    "normalizedSearchText": "福建三明将乐将乐福建三明"
  },
  {
    "code": "350429",
    "name": "泰宁县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 泰宁县",
    "rank": 3,
    "normalizedName": "泰宁",
    "normalizedValue": "福建三明泰宁",
    "normalizedSearchText": "福建三明泰宁泰宁福建三明"
  },
  {
    "code": "350430",
    "name": "建宁县",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 建宁县",
    "rank": 3,
    "normalizedName": "建宁",
    "normalizedValue": "福建三明建宁",
    "normalizedSearchText": "福建三明建宁建宁福建三明"
  },
  {
    "code": "350481",
    "name": "永安市",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 永安市",
    "rank": 3,
    "normalizedName": "永安",
    "normalizedValue": "福建三明永安",
    "normalizedSearchText": "福建三明永安永安福建三明"
  },
  {
    "code": "350401",
    "name": "市辖区",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建三明辖",
    "normalizedSearchText": "福建三明辖辖福建三明"
  },
  {
    "code": "350404",
    "name": "三元区",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 三元区",
    "rank": 3,
    "normalizedName": "三元",
    "normalizedValue": "福建三明三元",
    "normalizedSearchText": "福建三明三元三元福建三明"
  },
  {
    "code": "350405",
    "name": "沙县区",
    "detail": "福建省 / 三明市",
    "value": "福建省 / 三明市 / 沙县区",
    "rank": 3,
    "normalizedName": "沙",
    "normalizedValue": "福建三明沙",
    "normalizedSearchText": "福建三明沙沙福建三明"
  },
  {
    "code": "350500",
    "name": "泉州市",
    "detail": "福建省",
    "value": "福建省 / 泉州市",
    "rank": 2,
    "normalizedName": "泉州",
    "normalizedValue": "福建泉州",
    "normalizedSearchText": "福建泉州泉州福建"
  },
  {
    "code": "350502",
    "name": "鲤城区",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 鲤城区",
    "rank": 3,
    "normalizedName": "鲤城",
    "normalizedValue": "福建泉州鲤城",
    "normalizedSearchText": "福建泉州鲤城鲤城福建泉州"
  },
  {
    "code": "350503",
    "name": "丰泽区",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 丰泽区",
    "rank": 3,
    "normalizedName": "丰泽",
    "normalizedValue": "福建泉州丰泽",
    "normalizedSearchText": "福建泉州丰泽丰泽福建泉州"
  },
  {
    "code": "350504",
    "name": "洛江区",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 洛江区",
    "rank": 3,
    "normalizedName": "洛江",
    "normalizedValue": "福建泉州洛江",
    "normalizedSearchText": "福建泉州洛江洛江福建泉州"
  },
  {
    "code": "350505",
    "name": "泉港区",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 泉港区",
    "rank": 3,
    "normalizedName": "泉港",
    "normalizedValue": "福建泉州泉港",
    "normalizedSearchText": "福建泉州泉港泉港福建泉州"
  },
  {
    "code": "350521",
    "name": "惠安县",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 惠安县",
    "rank": 3,
    "normalizedName": "惠安",
    "normalizedValue": "福建泉州惠安",
    "normalizedSearchText": "福建泉州惠安惠安福建泉州"
  },
  {
    "code": "350524",
    "name": "安溪县",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 安溪县",
    "rank": 3,
    "normalizedName": "安溪",
    "normalizedValue": "福建泉州安溪",
    "normalizedSearchText": "福建泉州安溪安溪福建泉州"
  },
  {
    "code": "350525",
    "name": "永春县",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 永春县",
    "rank": 3,
    "normalizedName": "永春",
    "normalizedValue": "福建泉州永春",
    "normalizedSearchText": "福建泉州永春永春福建泉州"
  },
  {
    "code": "350526",
    "name": "德化县",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 德化县",
    "rank": 3,
    "normalizedName": "德化",
    "normalizedValue": "福建泉州德化",
    "normalizedSearchText": "福建泉州德化德化福建泉州"
  },
  {
    "code": "350527",
    "name": "金门县",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 金门县",
    "rank": 3,
    "normalizedName": "金门",
    "normalizedValue": "福建泉州金门",
    "normalizedSearchText": "福建泉州金门金门福建泉州"
  },
  {
    "code": "350581",
    "name": "石狮市",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 石狮市",
    "rank": 3,
    "normalizedName": "石狮",
    "normalizedValue": "福建泉州石狮",
    "normalizedSearchText": "福建泉州石狮石狮福建泉州"
  },
  {
    "code": "350582",
    "name": "晋江市",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 晋江市",
    "rank": 3,
    "normalizedName": "晋江",
    "normalizedValue": "福建泉州晋江",
    "normalizedSearchText": "福建泉州晋江晋江福建泉州"
  },
  {
    "code": "350583",
    "name": "南安市",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 南安市",
    "rank": 3,
    "normalizedName": "南安",
    "normalizedValue": "福建泉州南安",
    "normalizedSearchText": "福建泉州南安南安福建泉州"
  },
  {
    "code": "350501",
    "name": "市辖区",
    "detail": "福建省 / 泉州市",
    "value": "福建省 / 泉州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建泉州辖",
    "normalizedSearchText": "福建泉州辖辖福建泉州"
  },
  {
    "code": "350600",
    "name": "漳州市",
    "detail": "福建省",
    "value": "福建省 / 漳州市",
    "rank": 2,
    "normalizedName": "漳州",
    "normalizedValue": "福建漳州",
    "normalizedSearchText": "福建漳州漳州福建"
  },
  {
    "code": "350602",
    "name": "芗城区",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 芗城区",
    "rank": 3,
    "normalizedName": "芗城",
    "normalizedValue": "福建漳州芗城",
    "normalizedSearchText": "福建漳州芗城芗城福建漳州"
  },
  {
    "code": "350603",
    "name": "龙文区",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 龙文区",
    "rank": 3,
    "normalizedName": "龙文",
    "normalizedValue": "福建漳州龙文",
    "normalizedSearchText": "福建漳州龙文龙文福建漳州"
  },
  {
    "code": "350622",
    "name": "云霄县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 云霄县",
    "rank": 3,
    "normalizedName": "云霄",
    "normalizedValue": "福建漳州云霄",
    "normalizedSearchText": "福建漳州云霄云霄福建漳州"
  },
  {
    "code": "350623",
    "name": "漳浦县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 漳浦县",
    "rank": 3,
    "normalizedName": "漳浦",
    "normalizedValue": "福建漳州漳浦",
    "normalizedSearchText": "福建漳州漳浦漳浦福建漳州"
  },
  {
    "code": "350624",
    "name": "诏安县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 诏安县",
    "rank": 3,
    "normalizedName": "诏安",
    "normalizedValue": "福建漳州诏安",
    "normalizedSearchText": "福建漳州诏安诏安福建漳州"
  },
  {
    "code": "350625",
    "name": "长泰县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 长泰县",
    "rank": 3,
    "normalizedName": "长泰",
    "normalizedValue": "福建漳州长泰",
    "normalizedSearchText": "福建漳州长泰长泰福建漳州"
  },
  {
    "code": "350626",
    "name": "东山县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 东山县",
    "rank": 3,
    "normalizedName": "东山",
    "normalizedValue": "福建漳州东山",
    "normalizedSearchText": "福建漳州东山东山福建漳州"
  },
  {
    "code": "350627",
    "name": "南靖县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 南靖县",
    "rank": 3,
    "normalizedName": "南靖",
    "normalizedValue": "福建漳州南靖",
    "normalizedSearchText": "福建漳州南靖南靖福建漳州"
  },
  {
    "code": "350628",
    "name": "平和县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 平和县",
    "rank": 3,
    "normalizedName": "平和",
    "normalizedValue": "福建漳州平和",
    "normalizedSearchText": "福建漳州平和平和福建漳州"
  },
  {
    "code": "350629",
    "name": "华安县",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 华安县",
    "rank": 3,
    "normalizedName": "华安",
    "normalizedValue": "福建漳州华安",
    "normalizedSearchText": "福建漳州华安华安福建漳州"
  },
  {
    "code": "350681",
    "name": "龙海市",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 龙海市",
    "rank": 3,
    "normalizedName": "龙海",
    "normalizedValue": "福建漳州龙海",
    "normalizedSearchText": "福建漳州龙海龙海福建漳州"
  },
  {
    "code": "350601",
    "name": "市辖区",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建漳州辖",
    "normalizedSearchText": "福建漳州辖辖福建漳州"
  },
  {
    "code": "350604",
    "name": "龙海区",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 龙海区",
    "rank": 3,
    "normalizedName": "龙海",
    "normalizedValue": "福建漳州龙海",
    "normalizedSearchText": "福建漳州龙海龙海福建漳州"
  },
  {
    "code": "350605",
    "name": "长泰区",
    "detail": "福建省 / 漳州市",
    "value": "福建省 / 漳州市 / 长泰区",
    "rank": 3,
    "normalizedName": "长泰",
    "normalizedValue": "福建漳州长泰",
    "normalizedSearchText": "福建漳州长泰长泰福建漳州"
  },
  {
    "code": "350700",
    "name": "南平市",
    "detail": "福建省",
    "value": "福建省 / 南平市",
    "rank": 2,
    "normalizedName": "南平",
    "normalizedValue": "福建南平",
    "normalizedSearchText": "福建南平南平福建"
  },
  {
    "code": "350702",
    "name": "延平区",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 延平区",
    "rank": 3,
    "normalizedName": "延平",
    "normalizedValue": "福建南平延平",
    "normalizedSearchText": "福建南平延平延平福建南平"
  },
  {
    "code": "350703",
    "name": "建阳区",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 建阳区",
    "rank": 3,
    "normalizedName": "建阳",
    "normalizedValue": "福建南平建阳",
    "normalizedSearchText": "福建南平建阳建阳福建南平"
  },
  {
    "code": "350721",
    "name": "顺昌县",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 顺昌县",
    "rank": 3,
    "normalizedName": "顺昌",
    "normalizedValue": "福建南平顺昌",
    "normalizedSearchText": "福建南平顺昌顺昌福建南平"
  },
  {
    "code": "350722",
    "name": "浦城县",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 浦城县",
    "rank": 3,
    "normalizedName": "浦城",
    "normalizedValue": "福建南平浦城",
    "normalizedSearchText": "福建南平浦城浦城福建南平"
  },
  {
    "code": "350723",
    "name": "光泽县",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 光泽县",
    "rank": 3,
    "normalizedName": "光泽",
    "normalizedValue": "福建南平光泽",
    "normalizedSearchText": "福建南平光泽光泽福建南平"
  },
  {
    "code": "350724",
    "name": "松溪县",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 松溪县",
    "rank": 3,
    "normalizedName": "松溪",
    "normalizedValue": "福建南平松溪",
    "normalizedSearchText": "福建南平松溪松溪福建南平"
  },
  {
    "code": "350725",
    "name": "政和县",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 政和县",
    "rank": 3,
    "normalizedName": "政和",
    "normalizedValue": "福建南平政和",
    "normalizedSearchText": "福建南平政和政和福建南平"
  },
  {
    "code": "350781",
    "name": "邵武市",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 邵武市",
    "rank": 3,
    "normalizedName": "邵武",
    "normalizedValue": "福建南平邵武",
    "normalizedSearchText": "福建南平邵武邵武福建南平"
  },
  {
    "code": "350782",
    "name": "武夷山市",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 武夷山市",
    "rank": 3,
    "normalizedName": "武夷山",
    "normalizedValue": "福建南平武夷山",
    "normalizedSearchText": "福建南平武夷山武夷山福建南平"
  },
  {
    "code": "350783",
    "name": "建瓯市",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 建瓯市",
    "rank": 3,
    "normalizedName": "建瓯",
    "normalizedValue": "福建南平建瓯",
    "normalizedSearchText": "福建南平建瓯建瓯福建南平"
  },
  {
    "code": "350701",
    "name": "市辖区",
    "detail": "福建省 / 南平市",
    "value": "福建省 / 南平市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建南平辖",
    "normalizedSearchText": "福建南平辖辖福建南平"
  },
  {
    "code": "350800",
    "name": "龙岩市",
    "detail": "福建省",
    "value": "福建省 / 龙岩市",
    "rank": 2,
    "normalizedName": "龙岩",
    "normalizedValue": "福建龙岩",
    "normalizedSearchText": "福建龙岩龙岩福建"
  },
  {
    "code": "350802",
    "name": "新罗区",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 新罗区",
    "rank": 3,
    "normalizedName": "新罗",
    "normalizedValue": "福建龙岩新罗",
    "normalizedSearchText": "福建龙岩新罗新罗福建龙岩"
  },
  {
    "code": "350803",
    "name": "永定区",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 永定区",
    "rank": 3,
    "normalizedName": "永定",
    "normalizedValue": "福建龙岩永定",
    "normalizedSearchText": "福建龙岩永定永定福建龙岩"
  },
  {
    "code": "350821",
    "name": "长汀县",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 长汀县",
    "rank": 3,
    "normalizedName": "长汀",
    "normalizedValue": "福建龙岩长汀",
    "normalizedSearchText": "福建龙岩长汀长汀福建龙岩"
  },
  {
    "code": "350823",
    "name": "上杭县",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 上杭县",
    "rank": 3,
    "normalizedName": "上杭",
    "normalizedValue": "福建龙岩上杭",
    "normalizedSearchText": "福建龙岩上杭上杭福建龙岩"
  },
  {
    "code": "350824",
    "name": "武平县",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 武平县",
    "rank": 3,
    "normalizedName": "武平",
    "normalizedValue": "福建龙岩武平",
    "normalizedSearchText": "福建龙岩武平武平福建龙岩"
  },
  {
    "code": "350825",
    "name": "连城县",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 连城县",
    "rank": 3,
    "normalizedName": "连城",
    "normalizedValue": "福建龙岩连城",
    "normalizedSearchText": "福建龙岩连城连城福建龙岩"
  },
  {
    "code": "350881",
    "name": "漳平市",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 漳平市",
    "rank": 3,
    "normalizedName": "漳平",
    "normalizedValue": "福建龙岩漳平",
    "normalizedSearchText": "福建龙岩漳平漳平福建龙岩"
  },
  {
    "code": "350801",
    "name": "市辖区",
    "detail": "福建省 / 龙岩市",
    "value": "福建省 / 龙岩市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建龙岩辖",
    "normalizedSearchText": "福建龙岩辖辖福建龙岩"
  },
  {
    "code": "350900",
    "name": "宁德市",
    "detail": "福建省",
    "value": "福建省 / 宁德市",
    "rank": 2,
    "normalizedName": "宁德",
    "normalizedValue": "福建宁德",
    "normalizedSearchText": "福建宁德宁德福建"
  },
  {
    "code": "350902",
    "name": "蕉城区",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 蕉城区",
    "rank": 3,
    "normalizedName": "蕉城",
    "normalizedValue": "福建宁德蕉城",
    "normalizedSearchText": "福建宁德蕉城蕉城福建宁德"
  },
  {
    "code": "350921",
    "name": "霞浦县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 霞浦县",
    "rank": 3,
    "normalizedName": "霞浦",
    "normalizedValue": "福建宁德霞浦",
    "normalizedSearchText": "福建宁德霞浦霞浦福建宁德"
  },
  {
    "code": "350922",
    "name": "古田县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 古田县",
    "rank": 3,
    "normalizedName": "古田",
    "normalizedValue": "福建宁德古田",
    "normalizedSearchText": "福建宁德古田古田福建宁德"
  },
  {
    "code": "350923",
    "name": "屏南县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 屏南县",
    "rank": 3,
    "normalizedName": "屏南",
    "normalizedValue": "福建宁德屏南",
    "normalizedSearchText": "福建宁德屏南屏南福建宁德"
  },
  {
    "code": "350924",
    "name": "寿宁县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 寿宁县",
    "rank": 3,
    "normalizedName": "寿宁",
    "normalizedValue": "福建宁德寿宁",
    "normalizedSearchText": "福建宁德寿宁寿宁福建宁德"
  },
  {
    "code": "350925",
    "name": "周宁县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 周宁县",
    "rank": 3,
    "normalizedName": "周宁",
    "normalizedValue": "福建宁德周宁",
    "normalizedSearchText": "福建宁德周宁周宁福建宁德"
  },
  {
    "code": "350926",
    "name": "柘荣县",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 柘荣县",
    "rank": 3,
    "normalizedName": "柘荣",
    "normalizedValue": "福建宁德柘荣",
    "normalizedSearchText": "福建宁德柘荣柘荣福建宁德"
  },
  {
    "code": "350981",
    "name": "福安市",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 福安市",
    "rank": 3,
    "normalizedName": "福安",
    "normalizedValue": "福建宁德福安",
    "normalizedSearchText": "福建宁德福安福安福建宁德"
  },
  {
    "code": "350982",
    "name": "福鼎市",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 福鼎市",
    "rank": 3,
    "normalizedName": "福鼎",
    "normalizedValue": "福建宁德福鼎",
    "normalizedSearchText": "福建宁德福鼎福鼎福建宁德"
  },
  {
    "code": "350901",
    "name": "市辖区",
    "detail": "福建省 / 宁德市",
    "value": "福建省 / 宁德市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "福建宁德辖",
    "normalizedSearchText": "福建宁德辖辖福建宁德"
  },
  {
    "code": "360000",
    "name": "江西省",
    "detail": "?????",
    "value": "江西省",
    "rank": 1,
    "normalizedName": "江西",
    "normalizedValue": "江西",
    "normalizedSearchText": "江西江西"
  },
  {
    "code": "360100",
    "name": "南昌市",
    "detail": "江西省",
    "value": "江西省 / 南昌市",
    "rank": 2,
    "normalizedName": "南昌",
    "normalizedValue": "江西南昌",
    "normalizedSearchText": "江西南昌南昌江西"
  },
  {
    "code": "360102",
    "name": "东湖区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 东湖区",
    "rank": 3,
    "normalizedName": "东湖",
    "normalizedValue": "江西南昌东湖",
    "normalizedSearchText": "江西南昌东湖东湖江西南昌"
  },
  {
    "code": "360103",
    "name": "西湖区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 西湖区",
    "rank": 3,
    "normalizedName": "西湖",
    "normalizedValue": "江西南昌西湖",
    "normalizedSearchText": "江西南昌西湖西湖江西南昌"
  },
  {
    "code": "360104",
    "name": "青云谱区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 青云谱区",
    "rank": 3,
    "normalizedName": "青云谱",
    "normalizedValue": "江西南昌青云谱",
    "normalizedSearchText": "江西南昌青云谱青云谱江西南昌"
  },
  {
    "code": "360111",
    "name": "青山湖区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 青山湖区",
    "rank": 3,
    "normalizedName": "青山湖",
    "normalizedValue": "江西南昌青山湖",
    "normalizedSearchText": "江西南昌青山湖青山湖江西南昌"
  },
  {
    "code": "360112",
    "name": "新建区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 新建区",
    "rank": 3,
    "normalizedName": "新建",
    "normalizedValue": "江西南昌新建",
    "normalizedSearchText": "江西南昌新建新建江西南昌"
  },
  {
    "code": "360113",
    "name": "红谷滩区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 红谷滩区",
    "rank": 3,
    "normalizedName": "红谷滩",
    "normalizedValue": "江西南昌红谷滩",
    "normalizedSearchText": "江西南昌红谷滩红谷滩江西南昌"
  },
  {
    "code": "360121",
    "name": "南昌县",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 南昌县",
    "rank": 3,
    "normalizedName": "南昌",
    "normalizedValue": "江西南昌南昌",
    "normalizedSearchText": "江西南昌南昌南昌江西南昌"
  },
  {
    "code": "360123",
    "name": "安义县",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 安义县",
    "rank": 3,
    "normalizedName": "安义",
    "normalizedValue": "江西南昌安义",
    "normalizedSearchText": "江西南昌安义安义江西南昌"
  },
  {
    "code": "360124",
    "name": "进贤县",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 进贤县",
    "rank": 3,
    "normalizedName": "进贤",
    "normalizedValue": "江西南昌进贤",
    "normalizedSearchText": "江西南昌进贤进贤江西南昌"
  },
  {
    "code": "360101",
    "name": "市辖区",
    "detail": "江西省 / 南昌市",
    "value": "江西省 / 南昌市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西南昌辖",
    "normalizedSearchText": "江西南昌辖辖江西南昌"
  },
  {
    "code": "360200",
    "name": "景德镇市",
    "detail": "江西省",
    "value": "江西省 / 景德镇市",
    "rank": 2,
    "normalizedName": "景德",
    "normalizedValue": "江西景德",
    "normalizedSearchText": "江西景德景德江西"
  },
  {
    "code": "360202",
    "name": "昌江区",
    "detail": "江西省 / 景德镇市",
    "value": "江西省 / 景德镇市 / 昌江区",
    "rank": 3,
    "normalizedName": "昌江",
    "normalizedValue": "江西景德昌江",
    "normalizedSearchText": "江西景德昌江昌江江西景德"
  },
  {
    "code": "360203",
    "name": "珠山区",
    "detail": "江西省 / 景德镇市",
    "value": "江西省 / 景德镇市 / 珠山区",
    "rank": 3,
    "normalizedName": "珠山",
    "normalizedValue": "江西景德珠山",
    "normalizedSearchText": "江西景德珠山珠山江西景德"
  },
  {
    "code": "360222",
    "name": "浮梁县",
    "detail": "江西省 / 景德镇市",
    "value": "江西省 / 景德镇市 / 浮梁县",
    "rank": 3,
    "normalizedName": "浮梁",
    "normalizedValue": "江西景德浮梁",
    "normalizedSearchText": "江西景德浮梁浮梁江西景德"
  },
  {
    "code": "360281",
    "name": "乐平市",
    "detail": "江西省 / 景德镇市",
    "value": "江西省 / 景德镇市 / 乐平市",
    "rank": 3,
    "normalizedName": "乐平",
    "normalizedValue": "江西景德乐平",
    "normalizedSearchText": "江西景德乐平乐平江西景德"
  },
  {
    "code": "360201",
    "name": "市辖区",
    "detail": "江西省 / 景德镇市",
    "value": "江西省 / 景德镇市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西景德辖",
    "normalizedSearchText": "江西景德辖辖江西景德"
  },
  {
    "code": "360300",
    "name": "萍乡市",
    "detail": "江西省",
    "value": "江西省 / 萍乡市",
    "rank": 2,
    "normalizedName": "萍",
    "normalizedValue": "江西萍",
    "normalizedSearchText": "江西萍萍江西"
  },
  {
    "code": "360302",
    "name": "安源区",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 安源区",
    "rank": 3,
    "normalizedName": "安源",
    "normalizedValue": "江西萍安源",
    "normalizedSearchText": "江西萍安源安源江西萍"
  },
  {
    "code": "360313",
    "name": "湘东区",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 湘东区",
    "rank": 3,
    "normalizedName": "湘东",
    "normalizedValue": "江西萍湘东",
    "normalizedSearchText": "江西萍湘东湘东江西萍"
  },
  {
    "code": "360321",
    "name": "莲花县",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 莲花县",
    "rank": 3,
    "normalizedName": "莲花",
    "normalizedValue": "江西萍莲花",
    "normalizedSearchText": "江西萍莲花莲花江西萍"
  },
  {
    "code": "360322",
    "name": "上栗县",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 上栗县",
    "rank": 3,
    "normalizedName": "上栗",
    "normalizedValue": "江西萍上栗",
    "normalizedSearchText": "江西萍上栗上栗江西萍"
  },
  {
    "code": "360323",
    "name": "芦溪县",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 芦溪县",
    "rank": 3,
    "normalizedName": "芦溪",
    "normalizedValue": "江西萍芦溪",
    "normalizedSearchText": "江西萍芦溪芦溪江西萍"
  },
  {
    "code": "360301",
    "name": "市辖区",
    "detail": "江西省 / 萍乡市",
    "value": "江西省 / 萍乡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西萍辖",
    "normalizedSearchText": "江西萍辖辖江西萍"
  },
  {
    "code": "360400",
    "name": "九江市",
    "detail": "江西省",
    "value": "江西省 / 九江市",
    "rank": 2,
    "normalizedName": "九江",
    "normalizedValue": "江西九江",
    "normalizedSearchText": "江西九江九江江西"
  },
  {
    "code": "360402",
    "name": "濂溪区",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 濂溪区",
    "rank": 3,
    "normalizedName": "濂溪",
    "normalizedValue": "江西九江濂溪",
    "normalizedSearchText": "江西九江濂溪濂溪江西九江"
  },
  {
    "code": "360403",
    "name": "浔阳区",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 浔阳区",
    "rank": 3,
    "normalizedName": "浔阳",
    "normalizedValue": "江西九江浔阳",
    "normalizedSearchText": "江西九江浔阳浔阳江西九江"
  },
  {
    "code": "360404",
    "name": "柴桑区",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 柴桑区",
    "rank": 3,
    "normalizedName": "柴桑",
    "normalizedValue": "江西九江柴桑",
    "normalizedSearchText": "江西九江柴桑柴桑江西九江"
  },
  {
    "code": "360423",
    "name": "武宁县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 武宁县",
    "rank": 3,
    "normalizedName": "武宁",
    "normalizedValue": "江西九江武宁",
    "normalizedSearchText": "江西九江武宁武宁江西九江"
  },
  {
    "code": "360424",
    "name": "修水县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 修水县",
    "rank": 3,
    "normalizedName": "修水",
    "normalizedValue": "江西九江修水",
    "normalizedSearchText": "江西九江修水修水江西九江"
  },
  {
    "code": "360425",
    "name": "永修县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 永修县",
    "rank": 3,
    "normalizedName": "永修",
    "normalizedValue": "江西九江永修",
    "normalizedSearchText": "江西九江永修永修江西九江"
  },
  {
    "code": "360426",
    "name": "德安县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 德安县",
    "rank": 3,
    "normalizedName": "德安",
    "normalizedValue": "江西九江德安",
    "normalizedSearchText": "江西九江德安德安江西九江"
  },
  {
    "code": "360428",
    "name": "都昌县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 都昌县",
    "rank": 3,
    "normalizedName": "都昌",
    "normalizedValue": "江西九江都昌",
    "normalizedSearchText": "江西九江都昌都昌江西九江"
  },
  {
    "code": "360429",
    "name": "湖口县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 湖口县",
    "rank": 3,
    "normalizedName": "湖口",
    "normalizedValue": "江西九江湖口",
    "normalizedSearchText": "江西九江湖口湖口江西九江"
  },
  {
    "code": "360430",
    "name": "彭泽县",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 彭泽县",
    "rank": 3,
    "normalizedName": "彭泽",
    "normalizedValue": "江西九江彭泽",
    "normalizedSearchText": "江西九江彭泽彭泽江西九江"
  },
  {
    "code": "360481",
    "name": "瑞昌市",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 瑞昌市",
    "rank": 3,
    "normalizedName": "瑞昌",
    "normalizedValue": "江西九江瑞昌",
    "normalizedSearchText": "江西九江瑞昌瑞昌江西九江"
  },
  {
    "code": "360482",
    "name": "共青城市",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 共青城市",
    "rank": 3,
    "normalizedName": "共青城",
    "normalizedValue": "江西九江共青城",
    "normalizedSearchText": "江西九江共青城共青城江西九江"
  },
  {
    "code": "360483",
    "name": "庐山市",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 庐山市",
    "rank": 3,
    "normalizedName": "庐山",
    "normalizedValue": "江西九江庐山",
    "normalizedSearchText": "江西九江庐山庐山江西九江"
  },
  {
    "code": "360401",
    "name": "市辖区",
    "detail": "江西省 / 九江市",
    "value": "江西省 / 九江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西九江辖",
    "normalizedSearchText": "江西九江辖辖江西九江"
  },
  {
    "code": "360500",
    "name": "新余市",
    "detail": "江西省",
    "value": "江西省 / 新余市",
    "rank": 2,
    "normalizedName": "新余",
    "normalizedValue": "江西新余",
    "normalizedSearchText": "江西新余新余江西"
  },
  {
    "code": "360502",
    "name": "渝水区",
    "detail": "江西省 / 新余市",
    "value": "江西省 / 新余市 / 渝水区",
    "rank": 3,
    "normalizedName": "渝水",
    "normalizedValue": "江西新余渝水",
    "normalizedSearchText": "江西新余渝水渝水江西新余"
  },
  {
    "code": "360521",
    "name": "分宜县",
    "detail": "江西省 / 新余市",
    "value": "江西省 / 新余市 / 分宜县",
    "rank": 3,
    "normalizedName": "分宜",
    "normalizedValue": "江西新余分宜",
    "normalizedSearchText": "江西新余分宜分宜江西新余"
  },
  {
    "code": "360501",
    "name": "市辖区",
    "detail": "江西省 / 新余市",
    "value": "江西省 / 新余市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西新余辖",
    "normalizedSearchText": "江西新余辖辖江西新余"
  },
  {
    "code": "360600",
    "name": "鹰潭市",
    "detail": "江西省",
    "value": "江西省 / 鹰潭市",
    "rank": 2,
    "normalizedName": "鹰潭",
    "normalizedValue": "江西鹰潭",
    "normalizedSearchText": "江西鹰潭鹰潭江西"
  },
  {
    "code": "360602",
    "name": "月湖区",
    "detail": "江西省 / 鹰潭市",
    "value": "江西省 / 鹰潭市 / 月湖区",
    "rank": 3,
    "normalizedName": "月湖",
    "normalizedValue": "江西鹰潭月湖",
    "normalizedSearchText": "江西鹰潭月湖月湖江西鹰潭"
  },
  {
    "code": "360603",
    "name": "余江区",
    "detail": "江西省 / 鹰潭市",
    "value": "江西省 / 鹰潭市 / 余江区",
    "rank": 3,
    "normalizedName": "余江",
    "normalizedValue": "江西鹰潭余江",
    "normalizedSearchText": "江西鹰潭余江余江江西鹰潭"
  },
  {
    "code": "360681",
    "name": "贵溪市",
    "detail": "江西省 / 鹰潭市",
    "value": "江西省 / 鹰潭市 / 贵溪市",
    "rank": 3,
    "normalizedName": "贵溪",
    "normalizedValue": "江西鹰潭贵溪",
    "normalizedSearchText": "江西鹰潭贵溪贵溪江西鹰潭"
  },
  {
    "code": "360601",
    "name": "市辖区",
    "detail": "江西省 / 鹰潭市",
    "value": "江西省 / 鹰潭市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西鹰潭辖",
    "normalizedSearchText": "江西鹰潭辖辖江西鹰潭"
  },
  {
    "code": "360700",
    "name": "赣州市",
    "detail": "江西省",
    "value": "江西省 / 赣州市",
    "rank": 2,
    "normalizedName": "赣州",
    "normalizedValue": "江西赣州",
    "normalizedSearchText": "江西赣州赣州江西"
  },
  {
    "code": "360702",
    "name": "章贡区",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 章贡区",
    "rank": 3,
    "normalizedName": "章贡",
    "normalizedValue": "江西赣州章贡",
    "normalizedSearchText": "江西赣州章贡章贡江西赣州"
  },
  {
    "code": "360703",
    "name": "南康区",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 南康区",
    "rank": 3,
    "normalizedName": "南康",
    "normalizedValue": "江西赣州南康",
    "normalizedSearchText": "江西赣州南康南康江西赣州"
  },
  {
    "code": "360704",
    "name": "赣县区",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 赣县区",
    "rank": 3,
    "normalizedName": "赣",
    "normalizedValue": "江西赣州赣",
    "normalizedSearchText": "江西赣州赣赣江西赣州"
  },
  {
    "code": "360722",
    "name": "信丰县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 信丰县",
    "rank": 3,
    "normalizedName": "信丰",
    "normalizedValue": "江西赣州信丰",
    "normalizedSearchText": "江西赣州信丰信丰江西赣州"
  },
  {
    "code": "360723",
    "name": "大余县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 大余县",
    "rank": 3,
    "normalizedName": "大余",
    "normalizedValue": "江西赣州大余",
    "normalizedSearchText": "江西赣州大余大余江西赣州"
  },
  {
    "code": "360724",
    "name": "上犹县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 上犹县",
    "rank": 3,
    "normalizedName": "上犹",
    "normalizedValue": "江西赣州上犹",
    "normalizedSearchText": "江西赣州上犹上犹江西赣州"
  },
  {
    "code": "360725",
    "name": "崇义县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 崇义县",
    "rank": 3,
    "normalizedName": "崇义",
    "normalizedValue": "江西赣州崇义",
    "normalizedSearchText": "江西赣州崇义崇义江西赣州"
  },
  {
    "code": "360726",
    "name": "安远县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 安远县",
    "rank": 3,
    "normalizedName": "安远",
    "normalizedValue": "江西赣州安远",
    "normalizedSearchText": "江西赣州安远安远江西赣州"
  },
  {
    "code": "360728",
    "name": "定南县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 定南县",
    "rank": 3,
    "normalizedName": "定南",
    "normalizedValue": "江西赣州定南",
    "normalizedSearchText": "江西赣州定南定南江西赣州"
  },
  {
    "code": "360729",
    "name": "全南县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 全南县",
    "rank": 3,
    "normalizedName": "全南",
    "normalizedValue": "江西赣州全南",
    "normalizedSearchText": "江西赣州全南全南江西赣州"
  },
  {
    "code": "360730",
    "name": "宁都县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 宁都县",
    "rank": 3,
    "normalizedName": "宁都",
    "normalizedValue": "江西赣州宁都",
    "normalizedSearchText": "江西赣州宁都宁都江西赣州"
  },
  {
    "code": "360731",
    "name": "于都县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 于都县",
    "rank": 3,
    "normalizedName": "于都",
    "normalizedValue": "江西赣州于都",
    "normalizedSearchText": "江西赣州于都于都江西赣州"
  },
  {
    "code": "360732",
    "name": "兴国县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 兴国县",
    "rank": 3,
    "normalizedName": "兴国",
    "normalizedValue": "江西赣州兴国",
    "normalizedSearchText": "江西赣州兴国兴国江西赣州"
  },
  {
    "code": "360733",
    "name": "会昌县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 会昌县",
    "rank": 3,
    "normalizedName": "会昌",
    "normalizedValue": "江西赣州会昌",
    "normalizedSearchText": "江西赣州会昌会昌江西赣州"
  },
  {
    "code": "360734",
    "name": "寻乌县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 寻乌县",
    "rank": 3,
    "normalizedName": "寻乌",
    "normalizedValue": "江西赣州寻乌",
    "normalizedSearchText": "江西赣州寻乌寻乌江西赣州"
  },
  {
    "code": "360735",
    "name": "石城县",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 石城县",
    "rank": 3,
    "normalizedName": "石城",
    "normalizedValue": "江西赣州石城",
    "normalizedSearchText": "江西赣州石城石城江西赣州"
  },
  {
    "code": "360781",
    "name": "瑞金市",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 瑞金市",
    "rank": 3,
    "normalizedName": "瑞金",
    "normalizedValue": "江西赣州瑞金",
    "normalizedSearchText": "江西赣州瑞金瑞金江西赣州"
  },
  {
    "code": "360783",
    "name": "龙南市",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 龙南市",
    "rank": 3,
    "normalizedName": "龙南",
    "normalizedValue": "江西赣州龙南",
    "normalizedSearchText": "江西赣州龙南龙南江西赣州"
  },
  {
    "code": "360701",
    "name": "市辖区",
    "detail": "江西省 / 赣州市",
    "value": "江西省 / 赣州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西赣州辖",
    "normalizedSearchText": "江西赣州辖辖江西赣州"
  },
  {
    "code": "360800",
    "name": "吉安市",
    "detail": "江西省",
    "value": "江西省 / 吉安市",
    "rank": 2,
    "normalizedName": "吉安",
    "normalizedValue": "江西吉安",
    "normalizedSearchText": "江西吉安吉安江西"
  },
  {
    "code": "360802",
    "name": "吉州区",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 吉州区",
    "rank": 3,
    "normalizedName": "吉州",
    "normalizedValue": "江西吉安吉州",
    "normalizedSearchText": "江西吉安吉州吉州江西吉安"
  },
  {
    "code": "360803",
    "name": "青原区",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 青原区",
    "rank": 3,
    "normalizedName": "青原",
    "normalizedValue": "江西吉安青原",
    "normalizedSearchText": "江西吉安青原青原江西吉安"
  },
  {
    "code": "360821",
    "name": "吉安县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 吉安县",
    "rank": 3,
    "normalizedName": "吉安",
    "normalizedValue": "江西吉安吉安",
    "normalizedSearchText": "江西吉安吉安吉安江西吉安"
  },
  {
    "code": "360822",
    "name": "吉水县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 吉水县",
    "rank": 3,
    "normalizedName": "吉水",
    "normalizedValue": "江西吉安吉水",
    "normalizedSearchText": "江西吉安吉水吉水江西吉安"
  },
  {
    "code": "360823",
    "name": "峡江县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 峡江县",
    "rank": 3,
    "normalizedName": "峡江",
    "normalizedValue": "江西吉安峡江",
    "normalizedSearchText": "江西吉安峡江峡江江西吉安"
  },
  {
    "code": "360824",
    "name": "新干县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 新干县",
    "rank": 3,
    "normalizedName": "新干",
    "normalizedValue": "江西吉安新干",
    "normalizedSearchText": "江西吉安新干新干江西吉安"
  },
  {
    "code": "360825",
    "name": "永丰县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 永丰县",
    "rank": 3,
    "normalizedName": "永丰",
    "normalizedValue": "江西吉安永丰",
    "normalizedSearchText": "江西吉安永丰永丰江西吉安"
  },
  {
    "code": "360826",
    "name": "泰和县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 泰和县",
    "rank": 3,
    "normalizedName": "泰和",
    "normalizedValue": "江西吉安泰和",
    "normalizedSearchText": "江西吉安泰和泰和江西吉安"
  },
  {
    "code": "360827",
    "name": "遂川县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 遂川县",
    "rank": 3,
    "normalizedName": "遂川",
    "normalizedValue": "江西吉安遂川",
    "normalizedSearchText": "江西吉安遂川遂川江西吉安"
  },
  {
    "code": "360828",
    "name": "万安县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 万安县",
    "rank": 3,
    "normalizedName": "万安",
    "normalizedValue": "江西吉安万安",
    "normalizedSearchText": "江西吉安万安万安江西吉安"
  },
  {
    "code": "360829",
    "name": "安福县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 安福县",
    "rank": 3,
    "normalizedName": "安福",
    "normalizedValue": "江西吉安安福",
    "normalizedSearchText": "江西吉安安福安福江西吉安"
  },
  {
    "code": "360830",
    "name": "永新县",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 永新县",
    "rank": 3,
    "normalizedName": "永新",
    "normalizedValue": "江西吉安永新",
    "normalizedSearchText": "江西吉安永新永新江西吉安"
  },
  {
    "code": "360881",
    "name": "井冈山市",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 井冈山市",
    "rank": 3,
    "normalizedName": "井冈山",
    "normalizedValue": "江西吉安井冈山",
    "normalizedSearchText": "江西吉安井冈山井冈山江西吉安"
  },
  {
    "code": "360801",
    "name": "市辖区",
    "detail": "江西省 / 吉安市",
    "value": "江西省 / 吉安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西吉安辖",
    "normalizedSearchText": "江西吉安辖辖江西吉安"
  },
  {
    "code": "360900",
    "name": "宜春市",
    "detail": "江西省",
    "value": "江西省 / 宜春市",
    "rank": 2,
    "normalizedName": "宜春",
    "normalizedValue": "江西宜春",
    "normalizedSearchText": "江西宜春宜春江西"
  },
  {
    "code": "360902",
    "name": "袁州区",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 袁州区",
    "rank": 3,
    "normalizedName": "袁州",
    "normalizedValue": "江西宜春袁州",
    "normalizedSearchText": "江西宜春袁州袁州江西宜春"
  },
  {
    "code": "360921",
    "name": "奉新县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 奉新县",
    "rank": 3,
    "normalizedName": "奉新",
    "normalizedValue": "江西宜春奉新",
    "normalizedSearchText": "江西宜春奉新奉新江西宜春"
  },
  {
    "code": "360922",
    "name": "万载县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 万载县",
    "rank": 3,
    "normalizedName": "万载",
    "normalizedValue": "江西宜春万载",
    "normalizedSearchText": "江西宜春万载万载江西宜春"
  },
  {
    "code": "360923",
    "name": "上高县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 上高县",
    "rank": 3,
    "normalizedName": "上高",
    "normalizedValue": "江西宜春上高",
    "normalizedSearchText": "江西宜春上高上高江西宜春"
  },
  {
    "code": "360924",
    "name": "宜丰县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 宜丰县",
    "rank": 3,
    "normalizedName": "宜丰",
    "normalizedValue": "江西宜春宜丰",
    "normalizedSearchText": "江西宜春宜丰宜丰江西宜春"
  },
  {
    "code": "360925",
    "name": "靖安县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 靖安县",
    "rank": 3,
    "normalizedName": "靖安",
    "normalizedValue": "江西宜春靖安",
    "normalizedSearchText": "江西宜春靖安靖安江西宜春"
  },
  {
    "code": "360926",
    "name": "铜鼓县",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 铜鼓县",
    "rank": 3,
    "normalizedName": "铜鼓",
    "normalizedValue": "江西宜春铜鼓",
    "normalizedSearchText": "江西宜春铜鼓铜鼓江西宜春"
  },
  {
    "code": "360981",
    "name": "丰城市",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 丰城市",
    "rank": 3,
    "normalizedName": "丰城",
    "normalizedValue": "江西宜春丰城",
    "normalizedSearchText": "江西宜春丰城丰城江西宜春"
  },
  {
    "code": "360982",
    "name": "樟树市",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 樟树市",
    "rank": 3,
    "normalizedName": "樟树",
    "normalizedValue": "江西宜春樟树",
    "normalizedSearchText": "江西宜春樟树樟树江西宜春"
  },
  {
    "code": "360983",
    "name": "高安市",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 高安市",
    "rank": 3,
    "normalizedName": "高安",
    "normalizedValue": "江西宜春高安",
    "normalizedSearchText": "江西宜春高安高安江西宜春"
  },
  {
    "code": "360901",
    "name": "市辖区",
    "detail": "江西省 / 宜春市",
    "value": "江西省 / 宜春市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西宜春辖",
    "normalizedSearchText": "江西宜春辖辖江西宜春"
  },
  {
    "code": "361000",
    "name": "抚州市",
    "detail": "江西省",
    "value": "江西省 / 抚州市",
    "rank": 2,
    "normalizedName": "抚州",
    "normalizedValue": "江西抚州",
    "normalizedSearchText": "江西抚州抚州江西"
  },
  {
    "code": "361002",
    "name": "临川区",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 临川区",
    "rank": 3,
    "normalizedName": "临川",
    "normalizedValue": "江西抚州临川",
    "normalizedSearchText": "江西抚州临川临川江西抚州"
  },
  {
    "code": "361003",
    "name": "东乡区",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 东乡区",
    "rank": 3,
    "normalizedName": "东",
    "normalizedValue": "江西抚州东",
    "normalizedSearchText": "江西抚州东东江西抚州"
  },
  {
    "code": "361021",
    "name": "南城县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 南城县",
    "rank": 3,
    "normalizedName": "南城",
    "normalizedValue": "江西抚州南城",
    "normalizedSearchText": "江西抚州南城南城江西抚州"
  },
  {
    "code": "361022",
    "name": "黎川县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 黎川县",
    "rank": 3,
    "normalizedName": "黎川",
    "normalizedValue": "江西抚州黎川",
    "normalizedSearchText": "江西抚州黎川黎川江西抚州"
  },
  {
    "code": "361023",
    "name": "南丰县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 南丰县",
    "rank": 3,
    "normalizedName": "南丰",
    "normalizedValue": "江西抚州南丰",
    "normalizedSearchText": "江西抚州南丰南丰江西抚州"
  },
  {
    "code": "361024",
    "name": "崇仁县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 崇仁县",
    "rank": 3,
    "normalizedName": "崇仁",
    "normalizedValue": "江西抚州崇仁",
    "normalizedSearchText": "江西抚州崇仁崇仁江西抚州"
  },
  {
    "code": "361025",
    "name": "乐安县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 乐安县",
    "rank": 3,
    "normalizedName": "乐安",
    "normalizedValue": "江西抚州乐安",
    "normalizedSearchText": "江西抚州乐安乐安江西抚州"
  },
  {
    "code": "361026",
    "name": "宜黄县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 宜黄县",
    "rank": 3,
    "normalizedName": "宜黄",
    "normalizedValue": "江西抚州宜黄",
    "normalizedSearchText": "江西抚州宜黄宜黄江西抚州"
  },
  {
    "code": "361027",
    "name": "金溪县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 金溪县",
    "rank": 3,
    "normalizedName": "金溪",
    "normalizedValue": "江西抚州金溪",
    "normalizedSearchText": "江西抚州金溪金溪江西抚州"
  },
  {
    "code": "361028",
    "name": "资溪县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 资溪县",
    "rank": 3,
    "normalizedName": "资溪",
    "normalizedValue": "江西抚州资溪",
    "normalizedSearchText": "江西抚州资溪资溪江西抚州"
  },
  {
    "code": "361030",
    "name": "广昌县",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 广昌县",
    "rank": 3,
    "normalizedName": "广昌",
    "normalizedValue": "江西抚州广昌",
    "normalizedSearchText": "江西抚州广昌广昌江西抚州"
  },
  {
    "code": "361001",
    "name": "市辖区",
    "detail": "江西省 / 抚州市",
    "value": "江西省 / 抚州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西抚州辖",
    "normalizedSearchText": "江西抚州辖辖江西抚州"
  },
  {
    "code": "361100",
    "name": "上饶市",
    "detail": "江西省",
    "value": "江西省 / 上饶市",
    "rank": 2,
    "normalizedName": "上饶",
    "normalizedValue": "江西上饶",
    "normalizedSearchText": "江西上饶上饶江西"
  },
  {
    "code": "361102",
    "name": "信州区",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 信州区",
    "rank": 3,
    "normalizedName": "信州",
    "normalizedValue": "江西上饶信州",
    "normalizedSearchText": "江西上饶信州信州江西上饶"
  },
  {
    "code": "361103",
    "name": "广丰区",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 广丰区",
    "rank": 3,
    "normalizedName": "广丰",
    "normalizedValue": "江西上饶广丰",
    "normalizedSearchText": "江西上饶广丰广丰江西上饶"
  },
  {
    "code": "361104",
    "name": "广信区",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 广信区",
    "rank": 3,
    "normalizedName": "广信",
    "normalizedValue": "江西上饶广信",
    "normalizedSearchText": "江西上饶广信广信江西上饶"
  },
  {
    "code": "361123",
    "name": "玉山县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 玉山县",
    "rank": 3,
    "normalizedName": "玉山",
    "normalizedValue": "江西上饶玉山",
    "normalizedSearchText": "江西上饶玉山玉山江西上饶"
  },
  {
    "code": "361124",
    "name": "铅山县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 铅山县",
    "rank": 3,
    "normalizedName": "铅山",
    "normalizedValue": "江西上饶铅山",
    "normalizedSearchText": "江西上饶铅山铅山江西上饶"
  },
  {
    "code": "361125",
    "name": "横峰县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 横峰县",
    "rank": 3,
    "normalizedName": "横峰",
    "normalizedValue": "江西上饶横峰",
    "normalizedSearchText": "江西上饶横峰横峰江西上饶"
  },
  {
    "code": "361126",
    "name": "弋阳县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 弋阳县",
    "rank": 3,
    "normalizedName": "弋阳",
    "normalizedValue": "江西上饶弋阳",
    "normalizedSearchText": "江西上饶弋阳弋阳江西上饶"
  },
  {
    "code": "361127",
    "name": "余干县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 余干县",
    "rank": 3,
    "normalizedName": "余干",
    "normalizedValue": "江西上饶余干",
    "normalizedSearchText": "江西上饶余干余干江西上饶"
  },
  {
    "code": "361128",
    "name": "鄱阳县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 鄱阳县",
    "rank": 3,
    "normalizedName": "鄱阳",
    "normalizedValue": "江西上饶鄱阳",
    "normalizedSearchText": "江西上饶鄱阳鄱阳江西上饶"
  },
  {
    "code": "361129",
    "name": "万年县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 万年县",
    "rank": 3,
    "normalizedName": "万年",
    "normalizedValue": "江西上饶万年",
    "normalizedSearchText": "江西上饶万年万年江西上饶"
  },
  {
    "code": "361130",
    "name": "婺源县",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 婺源县",
    "rank": 3,
    "normalizedName": "婺源",
    "normalizedValue": "江西上饶婺源",
    "normalizedSearchText": "江西上饶婺源婺源江西上饶"
  },
  {
    "code": "361181",
    "name": "德兴市",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 德兴市",
    "rank": 3,
    "normalizedName": "德兴",
    "normalizedValue": "江西上饶德兴",
    "normalizedSearchText": "江西上饶德兴德兴江西上饶"
  },
  {
    "code": "361101",
    "name": "市辖区",
    "detail": "江西省 / 上饶市",
    "value": "江西省 / 上饶市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "江西上饶辖",
    "normalizedSearchText": "江西上饶辖辖江西上饶"
  },
  {
    "code": "370000",
    "name": "山东省",
    "detail": "?????",
    "value": "山东省",
    "rank": 1,
    "normalizedName": "山东",
    "normalizedValue": "山东",
    "normalizedSearchText": "山东山东"
  },
  {
    "code": "370100",
    "name": "济南市",
    "detail": "山东省",
    "value": "山东省 / 济南市",
    "rank": 2,
    "normalizedName": "济南",
    "normalizedValue": "山东济南",
    "normalizedSearchText": "山东济南济南山东"
  },
  {
    "code": "370102",
    "name": "历下区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 历下区",
    "rank": 3,
    "normalizedName": "历下",
    "normalizedValue": "山东济南历下",
    "normalizedSearchText": "山东济南历下历下山东济南"
  },
  {
    "code": "370103",
    "name": "市中区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 市中区",
    "rank": 3,
    "normalizedName": "中",
    "normalizedValue": "山东济南中",
    "normalizedSearchText": "山东济南中中山东济南"
  },
  {
    "code": "370104",
    "name": "槐荫区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 槐荫区",
    "rank": 3,
    "normalizedName": "槐荫",
    "normalizedValue": "山东济南槐荫",
    "normalizedSearchText": "山东济南槐荫槐荫山东济南"
  },
  {
    "code": "370105",
    "name": "天桥区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 天桥区",
    "rank": 3,
    "normalizedName": "天桥",
    "normalizedValue": "山东济南天桥",
    "normalizedSearchText": "山东济南天桥天桥山东济南"
  },
  {
    "code": "370112",
    "name": "历城区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 历城区",
    "rank": 3,
    "normalizedName": "历城",
    "normalizedValue": "山东济南历城",
    "normalizedSearchText": "山东济南历城历城山东济南"
  },
  {
    "code": "370113",
    "name": "长清区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 长清区",
    "rank": 3,
    "normalizedName": "长清",
    "normalizedValue": "山东济南长清",
    "normalizedSearchText": "山东济南长清长清山东济南"
  },
  {
    "code": "370114",
    "name": "章丘区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 章丘区",
    "rank": 3,
    "normalizedName": "章丘",
    "normalizedValue": "山东济南章丘",
    "normalizedSearchText": "山东济南章丘章丘山东济南"
  },
  {
    "code": "370115",
    "name": "济阳区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 济阳区",
    "rank": 3,
    "normalizedName": "济阳",
    "normalizedValue": "山东济南济阳",
    "normalizedSearchText": "山东济南济阳济阳山东济南"
  },
  {
    "code": "370116",
    "name": "莱芜区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 莱芜区",
    "rank": 3,
    "normalizedName": "莱芜",
    "normalizedValue": "山东济南莱芜",
    "normalizedSearchText": "山东济南莱芜莱芜山东济南"
  },
  {
    "code": "370117",
    "name": "钢城区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 钢城区",
    "rank": 3,
    "normalizedName": "钢城",
    "normalizedValue": "山东济南钢城",
    "normalizedSearchText": "山东济南钢城钢城山东济南"
  },
  {
    "code": "370124",
    "name": "平阴县",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 平阴县",
    "rank": 3,
    "normalizedName": "平阴",
    "normalizedValue": "山东济南平阴",
    "normalizedSearchText": "山东济南平阴平阴山东济南"
  },
  {
    "code": "370126",
    "name": "商河县",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 商河县",
    "rank": 3,
    "normalizedName": "商河",
    "normalizedValue": "山东济南商河",
    "normalizedSearchText": "山东济南商河商河山东济南"
  },
  {
    "code": "370101",
    "name": "市辖区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东济南辖",
    "normalizedSearchText": "山东济南辖辖山东济南"
  },
  {
    "code": "370171",
    "name": "济南高新技术产业开发区",
    "detail": "山东省 / 济南市",
    "value": "山东省 / 济南市 / 济南高新技术产业开发区",
    "rank": 3,
    "normalizedName": "济南高新技术产业开发",
    "normalizedValue": "山东济南济南高新技术产业开发",
    "normalizedSearchText": "山东济南济南高新技术产业开发济南高新技术产业开发山东济南"
  },
  {
    "code": "370200",
    "name": "青岛市",
    "detail": "山东省",
    "value": "山东省 / 青岛市",
    "rank": 2,
    "normalizedName": "青岛",
    "normalizedValue": "山东青岛",
    "normalizedSearchText": "山东青岛青岛山东"
  },
  {
    "code": "370202",
    "name": "市南区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 市南区",
    "rank": 3,
    "normalizedName": "南",
    "normalizedValue": "山东青岛南",
    "normalizedSearchText": "山东青岛南南山东青岛"
  },
  {
    "code": "370203",
    "name": "市北区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 市北区",
    "rank": 3,
    "normalizedName": "北",
    "normalizedValue": "山东青岛北",
    "normalizedSearchText": "山东青岛北北山东青岛"
  },
  {
    "code": "370211",
    "name": "黄岛区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 黄岛区",
    "rank": 3,
    "normalizedName": "黄岛",
    "normalizedValue": "山东青岛黄岛",
    "normalizedSearchText": "山东青岛黄岛黄岛山东青岛"
  },
  {
    "code": "370212",
    "name": "崂山区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 崂山区",
    "rank": 3,
    "normalizedName": "崂山",
    "normalizedValue": "山东青岛崂山",
    "normalizedSearchText": "山东青岛崂山崂山山东青岛"
  },
  {
    "code": "370213",
    "name": "李沧区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 李沧区",
    "rank": 3,
    "normalizedName": "李沧",
    "normalizedValue": "山东青岛李沧",
    "normalizedSearchText": "山东青岛李沧李沧山东青岛"
  },
  {
    "code": "370214",
    "name": "城阳区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 城阳区",
    "rank": 3,
    "normalizedName": "城阳",
    "normalizedValue": "山东青岛城阳",
    "normalizedSearchText": "山东青岛城阳城阳山东青岛"
  },
  {
    "code": "370215",
    "name": "即墨区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 即墨区",
    "rank": 3,
    "normalizedName": "即墨",
    "normalizedValue": "山东青岛即墨",
    "normalizedSearchText": "山东青岛即墨即墨山东青岛"
  },
  {
    "code": "370281",
    "name": "胶州市",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 胶州市",
    "rank": 3,
    "normalizedName": "胶州",
    "normalizedValue": "山东青岛胶州",
    "normalizedSearchText": "山东青岛胶州胶州山东青岛"
  },
  {
    "code": "370283",
    "name": "平度市",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 平度市",
    "rank": 3,
    "normalizedName": "平度",
    "normalizedValue": "山东青岛平度",
    "normalizedSearchText": "山东青岛平度平度山东青岛"
  },
  {
    "code": "370285",
    "name": "莱西市",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 莱西市",
    "rank": 3,
    "normalizedName": "莱西",
    "normalizedValue": "山东青岛莱西",
    "normalizedSearchText": "山东青岛莱西莱西山东青岛"
  },
  {
    "code": "370201",
    "name": "市辖区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东青岛辖",
    "normalizedSearchText": "山东青岛辖辖山东青岛"
  },
  {
    "code": "370271",
    "name": "青岛高新技术产业开发区",
    "detail": "山东省 / 青岛市",
    "value": "山东省 / 青岛市 / 青岛高新技术产业开发区",
    "rank": 3,
    "normalizedName": "青岛高新技术产业开发",
    "normalizedValue": "山东青岛青岛高新技术产业开发",
    "normalizedSearchText": "山东青岛青岛高新技术产业开发青岛高新技术产业开发山东青岛"
  },
  {
    "code": "370300",
    "name": "淄博市",
    "detail": "山东省",
    "value": "山东省 / 淄博市",
    "rank": 2,
    "normalizedName": "淄博",
    "normalizedValue": "山东淄博",
    "normalizedSearchText": "山东淄博淄博山东"
  },
  {
    "code": "370302",
    "name": "淄川区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 淄川区",
    "rank": 3,
    "normalizedName": "淄川",
    "normalizedValue": "山东淄博淄川",
    "normalizedSearchText": "山东淄博淄川淄川山东淄博"
  },
  {
    "code": "370303",
    "name": "张店区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 张店区",
    "rank": 3,
    "normalizedName": "张店",
    "normalizedValue": "山东淄博张店",
    "normalizedSearchText": "山东淄博张店张店山东淄博"
  },
  {
    "code": "370304",
    "name": "博山区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 博山区",
    "rank": 3,
    "normalizedName": "博山",
    "normalizedValue": "山东淄博博山",
    "normalizedSearchText": "山东淄博博山博山山东淄博"
  },
  {
    "code": "370305",
    "name": "临淄区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 临淄区",
    "rank": 3,
    "normalizedName": "临淄",
    "normalizedValue": "山东淄博临淄",
    "normalizedSearchText": "山东淄博临淄临淄山东淄博"
  },
  {
    "code": "370306",
    "name": "周村区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 周村区",
    "rank": 3,
    "normalizedName": "周",
    "normalizedValue": "山东淄博周",
    "normalizedSearchText": "山东淄博周周山东淄博"
  },
  {
    "code": "370321",
    "name": "桓台县",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 桓台县",
    "rank": 3,
    "normalizedName": "桓台",
    "normalizedValue": "山东淄博桓台",
    "normalizedSearchText": "山东淄博桓台桓台山东淄博"
  },
  {
    "code": "370322",
    "name": "高青县",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 高青县",
    "rank": 3,
    "normalizedName": "高青",
    "normalizedValue": "山东淄博高青",
    "normalizedSearchText": "山东淄博高青高青山东淄博"
  },
  {
    "code": "370323",
    "name": "沂源县",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 沂源县",
    "rank": 3,
    "normalizedName": "沂源",
    "normalizedValue": "山东淄博沂源",
    "normalizedSearchText": "山东淄博沂源沂源山东淄博"
  },
  {
    "code": "370301",
    "name": "市辖区",
    "detail": "山东省 / 淄博市",
    "value": "山东省 / 淄博市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东淄博辖",
    "normalizedSearchText": "山东淄博辖辖山东淄博"
  },
  {
    "code": "370400",
    "name": "枣庄市",
    "detail": "山东省",
    "value": "山东省 / 枣庄市",
    "rank": 2,
    "normalizedName": "枣庄",
    "normalizedValue": "山东枣庄",
    "normalizedSearchText": "山东枣庄枣庄山东"
  },
  {
    "code": "370402",
    "name": "市中区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 市中区",
    "rank": 3,
    "normalizedName": "中",
    "normalizedValue": "山东枣庄中",
    "normalizedSearchText": "山东枣庄中中山东枣庄"
  },
  {
    "code": "370403",
    "name": "薛城区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 薛城区",
    "rank": 3,
    "normalizedName": "薛城",
    "normalizedValue": "山东枣庄薛城",
    "normalizedSearchText": "山东枣庄薛城薛城山东枣庄"
  },
  {
    "code": "370404",
    "name": "峄城区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 峄城区",
    "rank": 3,
    "normalizedName": "峄城",
    "normalizedValue": "山东枣庄峄城",
    "normalizedSearchText": "山东枣庄峄城峄城山东枣庄"
  },
  {
    "code": "370405",
    "name": "台儿庄区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 台儿庄区",
    "rank": 3,
    "normalizedName": "台儿庄",
    "normalizedValue": "山东枣庄台儿庄",
    "normalizedSearchText": "山东枣庄台儿庄台儿庄山东枣庄"
  },
  {
    "code": "370406",
    "name": "山亭区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 山亭区",
    "rank": 3,
    "normalizedName": "山亭",
    "normalizedValue": "山东枣庄山亭",
    "normalizedSearchText": "山东枣庄山亭山亭山东枣庄"
  },
  {
    "code": "370481",
    "name": "滕州市",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 滕州市",
    "rank": 3,
    "normalizedName": "滕州",
    "normalizedValue": "山东枣庄滕州",
    "normalizedSearchText": "山东枣庄滕州滕州山东枣庄"
  },
  {
    "code": "370401",
    "name": "市辖区",
    "detail": "山东省 / 枣庄市",
    "value": "山东省 / 枣庄市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东枣庄辖",
    "normalizedSearchText": "山东枣庄辖辖山东枣庄"
  },
  {
    "code": "370500",
    "name": "东营市",
    "detail": "山东省",
    "value": "山东省 / 东营市",
    "rank": 2,
    "normalizedName": "东营",
    "normalizedValue": "山东东营",
    "normalizedSearchText": "山东东营东营山东"
  },
  {
    "code": "370502",
    "name": "东营区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 东营区",
    "rank": 3,
    "normalizedName": "东营",
    "normalizedValue": "山东东营东营",
    "normalizedSearchText": "山东东营东营东营山东东营"
  },
  {
    "code": "370503",
    "name": "河口区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 河口区",
    "rank": 3,
    "normalizedName": "河口",
    "normalizedValue": "山东东营河口",
    "normalizedSearchText": "山东东营河口河口山东东营"
  },
  {
    "code": "370505",
    "name": "垦利区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 垦利区",
    "rank": 3,
    "normalizedName": "垦利",
    "normalizedValue": "山东东营垦利",
    "normalizedSearchText": "山东东营垦利垦利山东东营"
  },
  {
    "code": "370522",
    "name": "利津县",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 利津县",
    "rank": 3,
    "normalizedName": "利津",
    "normalizedValue": "山东东营利津",
    "normalizedSearchText": "山东东营利津利津山东东营"
  },
  {
    "code": "370523",
    "name": "广饶县",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 广饶县",
    "rank": 3,
    "normalizedName": "广饶",
    "normalizedValue": "山东东营广饶",
    "normalizedSearchText": "山东东营广饶广饶山东东营"
  },
  {
    "code": "370501",
    "name": "市辖区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东东营辖",
    "normalizedSearchText": "山东东营辖辖山东东营"
  },
  {
    "code": "370571",
    "name": "东营经济技术开发区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 东营经济技术开发区",
    "rank": 3,
    "normalizedName": "东营经济技术开发",
    "normalizedValue": "山东东营东营经济技术开发",
    "normalizedSearchText": "山东东营东营经济技术开发东营经济技术开发山东东营"
  },
  {
    "code": "370572",
    "name": "东营港经济开发区",
    "detail": "山东省 / 东营市",
    "value": "山东省 / 东营市 / 东营港经济开发区",
    "rank": 3,
    "normalizedName": "东营港经济开发",
    "normalizedValue": "山东东营东营港经济开发",
    "normalizedSearchText": "山东东营东营港经济开发东营港经济开发山东东营"
  },
  {
    "code": "370600",
    "name": "烟台市",
    "detail": "山东省",
    "value": "山东省 / 烟台市",
    "rank": 2,
    "normalizedName": "烟台",
    "normalizedValue": "山东烟台",
    "normalizedSearchText": "山东烟台烟台山东"
  },
  {
    "code": "370602",
    "name": "芝罘区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 芝罘区",
    "rank": 3,
    "normalizedName": "芝罘",
    "normalizedValue": "山东烟台芝罘",
    "normalizedSearchText": "山东烟台芝罘芝罘山东烟台"
  },
  {
    "code": "370611",
    "name": "福山区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 福山区",
    "rank": 3,
    "normalizedName": "福山",
    "normalizedValue": "山东烟台福山",
    "normalizedSearchText": "山东烟台福山福山山东烟台"
  },
  {
    "code": "370612",
    "name": "牟平区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 牟平区",
    "rank": 3,
    "normalizedName": "牟平",
    "normalizedValue": "山东烟台牟平",
    "normalizedSearchText": "山东烟台牟平牟平山东烟台"
  },
  {
    "code": "370613",
    "name": "莱山区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 莱山区",
    "rank": 3,
    "normalizedName": "莱山",
    "normalizedValue": "山东烟台莱山",
    "normalizedSearchText": "山东烟台莱山莱山山东烟台"
  },
  {
    "code": "370614",
    "name": "蓬莱区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 蓬莱区",
    "rank": 3,
    "normalizedName": "蓬莱",
    "normalizedValue": "山东烟台蓬莱",
    "normalizedSearchText": "山东烟台蓬莱蓬莱山东烟台"
  },
  {
    "code": "370681",
    "name": "龙口市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 龙口市",
    "rank": 3,
    "normalizedName": "龙口",
    "normalizedValue": "山东烟台龙口",
    "normalizedSearchText": "山东烟台龙口龙口山东烟台"
  },
  {
    "code": "370682",
    "name": "莱阳市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 莱阳市",
    "rank": 3,
    "normalizedName": "莱阳",
    "normalizedValue": "山东烟台莱阳",
    "normalizedSearchText": "山东烟台莱阳莱阳山东烟台"
  },
  {
    "code": "370683",
    "name": "莱州市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 莱州市",
    "rank": 3,
    "normalizedName": "莱州",
    "normalizedValue": "山东烟台莱州",
    "normalizedSearchText": "山东烟台莱州莱州山东烟台"
  },
  {
    "code": "370685",
    "name": "招远市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 招远市",
    "rank": 3,
    "normalizedName": "招远",
    "normalizedValue": "山东烟台招远",
    "normalizedSearchText": "山东烟台招远招远山东烟台"
  },
  {
    "code": "370686",
    "name": "栖霞市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 栖霞市",
    "rank": 3,
    "normalizedName": "栖霞",
    "normalizedValue": "山东烟台栖霞",
    "normalizedSearchText": "山东烟台栖霞栖霞山东烟台"
  },
  {
    "code": "370687",
    "name": "海阳市",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 海阳市",
    "rank": 3,
    "normalizedName": "海阳",
    "normalizedValue": "山东烟台海阳",
    "normalizedSearchText": "山东烟台海阳海阳山东烟台"
  },
  {
    "code": "370601",
    "name": "市辖区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东烟台辖",
    "normalizedSearchText": "山东烟台辖辖山东烟台"
  },
  {
    "code": "370671",
    "name": "烟台高新技术产业开发区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 烟台高新技术产业开发区",
    "rank": 3,
    "normalizedName": "烟台高新技术产业开发",
    "normalizedValue": "山东烟台烟台高新技术产业开发",
    "normalizedSearchText": "山东烟台烟台高新技术产业开发烟台高新技术产业开发山东烟台"
  },
  {
    "code": "370672",
    "name": "烟台经济技术开发区",
    "detail": "山东省 / 烟台市",
    "value": "山东省 / 烟台市 / 烟台经济技术开发区",
    "rank": 3,
    "normalizedName": "烟台经济技术开发",
    "normalizedValue": "山东烟台烟台经济技术开发",
    "normalizedSearchText": "山东烟台烟台经济技术开发烟台经济技术开发山东烟台"
  },
  {
    "code": "370700",
    "name": "潍坊市",
    "detail": "山东省",
    "value": "山东省 / 潍坊市",
    "rank": 2,
    "normalizedName": "潍坊",
    "normalizedValue": "山东潍坊",
    "normalizedSearchText": "山东潍坊潍坊山东"
  },
  {
    "code": "370702",
    "name": "潍城区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 潍城区",
    "rank": 3,
    "normalizedName": "潍城",
    "normalizedValue": "山东潍坊潍城",
    "normalizedSearchText": "山东潍坊潍城潍城山东潍坊"
  },
  {
    "code": "370703",
    "name": "寒亭区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 寒亭区",
    "rank": 3,
    "normalizedName": "寒亭",
    "normalizedValue": "山东潍坊寒亭",
    "normalizedSearchText": "山东潍坊寒亭寒亭山东潍坊"
  },
  {
    "code": "370704",
    "name": "坊子区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 坊子区",
    "rank": 3,
    "normalizedName": "坊子",
    "normalizedValue": "山东潍坊坊子",
    "normalizedSearchText": "山东潍坊坊子坊子山东潍坊"
  },
  {
    "code": "370705",
    "name": "奎文区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 奎文区",
    "rank": 3,
    "normalizedName": "奎文",
    "normalizedValue": "山东潍坊奎文",
    "normalizedSearchText": "山东潍坊奎文奎文山东潍坊"
  },
  {
    "code": "370724",
    "name": "临朐县",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 临朐县",
    "rank": 3,
    "normalizedName": "临朐",
    "normalizedValue": "山东潍坊临朐",
    "normalizedSearchText": "山东潍坊临朐临朐山东潍坊"
  },
  {
    "code": "370725",
    "name": "昌乐县",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 昌乐县",
    "rank": 3,
    "normalizedName": "昌乐",
    "normalizedValue": "山东潍坊昌乐",
    "normalizedSearchText": "山东潍坊昌乐昌乐山东潍坊"
  },
  {
    "code": "370781",
    "name": "青州市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 青州市",
    "rank": 3,
    "normalizedName": "青州",
    "normalizedValue": "山东潍坊青州",
    "normalizedSearchText": "山东潍坊青州青州山东潍坊"
  },
  {
    "code": "370782",
    "name": "诸城市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 诸城市",
    "rank": 3,
    "normalizedName": "诸城",
    "normalizedValue": "山东潍坊诸城",
    "normalizedSearchText": "山东潍坊诸城诸城山东潍坊"
  },
  {
    "code": "370783",
    "name": "寿光市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 寿光市",
    "rank": 3,
    "normalizedName": "寿光",
    "normalizedValue": "山东潍坊寿光",
    "normalizedSearchText": "山东潍坊寿光寿光山东潍坊"
  },
  {
    "code": "370784",
    "name": "安丘市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 安丘市",
    "rank": 3,
    "normalizedName": "安丘",
    "normalizedValue": "山东潍坊安丘",
    "normalizedSearchText": "山东潍坊安丘安丘山东潍坊"
  },
  {
    "code": "370785",
    "name": "高密市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 高密市",
    "rank": 3,
    "normalizedName": "高密",
    "normalizedValue": "山东潍坊高密",
    "normalizedSearchText": "山东潍坊高密高密山东潍坊"
  },
  {
    "code": "370786",
    "name": "昌邑市",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 昌邑市",
    "rank": 3,
    "normalizedName": "昌邑",
    "normalizedValue": "山东潍坊昌邑",
    "normalizedSearchText": "山东潍坊昌邑昌邑山东潍坊"
  },
  {
    "code": "370701",
    "name": "市辖区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东潍坊辖",
    "normalizedSearchText": "山东潍坊辖辖山东潍坊"
  },
  {
    "code": "370772",
    "name": "潍坊滨海经济技术开发区",
    "detail": "山东省 / 潍坊市",
    "value": "山东省 / 潍坊市 / 潍坊滨海经济技术开发区",
    "rank": 3,
    "normalizedName": "潍坊滨海经济技术开发",
    "normalizedValue": "山东潍坊潍坊滨海经济技术开发",
    "normalizedSearchText": "山东潍坊潍坊滨海经济技术开发潍坊滨海经济技术开发山东潍坊"
  },
  {
    "code": "370800",
    "name": "济宁市",
    "detail": "山东省",
    "value": "山东省 / 济宁市",
    "rank": 2,
    "normalizedName": "济宁",
    "normalizedValue": "山东济宁",
    "normalizedSearchText": "山东济宁济宁山东"
  },
  {
    "code": "370811",
    "name": "任城区",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 任城区",
    "rank": 3,
    "normalizedName": "任城",
    "normalizedValue": "山东济宁任城",
    "normalizedSearchText": "山东济宁任城任城山东济宁"
  },
  {
    "code": "370812",
    "name": "兖州区",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 兖州区",
    "rank": 3,
    "normalizedName": "兖州",
    "normalizedValue": "山东济宁兖州",
    "normalizedSearchText": "山东济宁兖州兖州山东济宁"
  },
  {
    "code": "370826",
    "name": "微山县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 微山县",
    "rank": 3,
    "normalizedName": "微山",
    "normalizedValue": "山东济宁微山",
    "normalizedSearchText": "山东济宁微山微山山东济宁"
  },
  {
    "code": "370827",
    "name": "鱼台县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 鱼台县",
    "rank": 3,
    "normalizedName": "鱼台",
    "normalizedValue": "山东济宁鱼台",
    "normalizedSearchText": "山东济宁鱼台鱼台山东济宁"
  },
  {
    "code": "370828",
    "name": "金乡县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 金乡县",
    "rank": 3,
    "normalizedName": "金",
    "normalizedValue": "山东济宁金",
    "normalizedSearchText": "山东济宁金金山东济宁"
  },
  {
    "code": "370829",
    "name": "嘉祥县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 嘉祥县",
    "rank": 3,
    "normalizedName": "嘉祥",
    "normalizedValue": "山东济宁嘉祥",
    "normalizedSearchText": "山东济宁嘉祥嘉祥山东济宁"
  },
  {
    "code": "370830",
    "name": "汶上县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 汶上县",
    "rank": 3,
    "normalizedName": "汶上",
    "normalizedValue": "山东济宁汶上",
    "normalizedSearchText": "山东济宁汶上汶上山东济宁"
  },
  {
    "code": "370831",
    "name": "泗水县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 泗水县",
    "rank": 3,
    "normalizedName": "泗水",
    "normalizedValue": "山东济宁泗水",
    "normalizedSearchText": "山东济宁泗水泗水山东济宁"
  },
  {
    "code": "370832",
    "name": "梁山县",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 梁山县",
    "rank": 3,
    "normalizedName": "梁山",
    "normalizedValue": "山东济宁梁山",
    "normalizedSearchText": "山东济宁梁山梁山山东济宁"
  },
  {
    "code": "370881",
    "name": "曲阜市",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 曲阜市",
    "rank": 3,
    "normalizedName": "曲阜",
    "normalizedValue": "山东济宁曲阜",
    "normalizedSearchText": "山东济宁曲阜曲阜山东济宁"
  },
  {
    "code": "370883",
    "name": "邹城市",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 邹城市",
    "rank": 3,
    "normalizedName": "邹城",
    "normalizedValue": "山东济宁邹城",
    "normalizedSearchText": "山东济宁邹城邹城山东济宁"
  },
  {
    "code": "370801",
    "name": "市辖区",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东济宁辖",
    "normalizedSearchText": "山东济宁辖辖山东济宁"
  },
  {
    "code": "370871",
    "name": "济宁高新技术产业开发区",
    "detail": "山东省 / 济宁市",
    "value": "山东省 / 济宁市 / 济宁高新技术产业开发区",
    "rank": 3,
    "normalizedName": "济宁高新技术产业开发",
    "normalizedValue": "山东济宁济宁高新技术产业开发",
    "normalizedSearchText": "山东济宁济宁高新技术产业开发济宁高新技术产业开发山东济宁"
  },
  {
    "code": "370900",
    "name": "泰安市",
    "detail": "山东省",
    "value": "山东省 / 泰安市",
    "rank": 2,
    "normalizedName": "泰安",
    "normalizedValue": "山东泰安",
    "normalizedSearchText": "山东泰安泰安山东"
  },
  {
    "code": "370902",
    "name": "泰山区",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 泰山区",
    "rank": 3,
    "normalizedName": "泰山",
    "normalizedValue": "山东泰安泰山",
    "normalizedSearchText": "山东泰安泰山泰山山东泰安"
  },
  {
    "code": "370911",
    "name": "岱岳区",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 岱岳区",
    "rank": 3,
    "normalizedName": "岱岳",
    "normalizedValue": "山东泰安岱岳",
    "normalizedSearchText": "山东泰安岱岳岱岳山东泰安"
  },
  {
    "code": "370921",
    "name": "宁阳县",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 宁阳县",
    "rank": 3,
    "normalizedName": "宁阳",
    "normalizedValue": "山东泰安宁阳",
    "normalizedSearchText": "山东泰安宁阳宁阳山东泰安"
  },
  {
    "code": "370923",
    "name": "东平县",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 东平县",
    "rank": 3,
    "normalizedName": "东平",
    "normalizedValue": "山东泰安东平",
    "normalizedSearchText": "山东泰安东平东平山东泰安"
  },
  {
    "code": "370982",
    "name": "新泰市",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 新泰市",
    "rank": 3,
    "normalizedName": "新泰",
    "normalizedValue": "山东泰安新泰",
    "normalizedSearchText": "山东泰安新泰新泰山东泰安"
  },
  {
    "code": "370983",
    "name": "肥城市",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 肥城市",
    "rank": 3,
    "normalizedName": "肥城",
    "normalizedValue": "山东泰安肥城",
    "normalizedSearchText": "山东泰安肥城肥城山东泰安"
  },
  {
    "code": "370901",
    "name": "市辖区",
    "detail": "山东省 / 泰安市",
    "value": "山东省 / 泰安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东泰安辖",
    "normalizedSearchText": "山东泰安辖辖山东泰安"
  },
  {
    "code": "371000",
    "name": "威海市",
    "detail": "山东省",
    "value": "山东省 / 威海市",
    "rank": 2,
    "normalizedName": "威海",
    "normalizedValue": "山东威海",
    "normalizedSearchText": "山东威海威海山东"
  },
  {
    "code": "371002",
    "name": "环翠区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 环翠区",
    "rank": 3,
    "normalizedName": "环翠",
    "normalizedValue": "山东威海环翠",
    "normalizedSearchText": "山东威海环翠环翠山东威海"
  },
  {
    "code": "371003",
    "name": "文登区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 文登区",
    "rank": 3,
    "normalizedName": "文登",
    "normalizedValue": "山东威海文登",
    "normalizedSearchText": "山东威海文登文登山东威海"
  },
  {
    "code": "371082",
    "name": "荣成市",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 荣成市",
    "rank": 3,
    "normalizedName": "荣成",
    "normalizedValue": "山东威海荣成",
    "normalizedSearchText": "山东威海荣成荣成山东威海"
  },
  {
    "code": "371083",
    "name": "乳山市",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 乳山市",
    "rank": 3,
    "normalizedName": "乳山",
    "normalizedValue": "山东威海乳山",
    "normalizedSearchText": "山东威海乳山乳山山东威海"
  },
  {
    "code": "371001",
    "name": "市辖区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东威海辖",
    "normalizedSearchText": "山东威海辖辖山东威海"
  },
  {
    "code": "371071",
    "name": "威海火炬高技术产业开发区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 威海火炬高技术产业开发区",
    "rank": 3,
    "normalizedName": "威海火炬高技术产业开发",
    "normalizedValue": "山东威海威海火炬高技术产业开发",
    "normalizedSearchText": "山东威海威海火炬高技术产业开发威海火炬高技术产业开发山东威海"
  },
  {
    "code": "371072",
    "name": "威海经济技术开发区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 威海经济技术开发区",
    "rank": 3,
    "normalizedName": "威海经济技术开发",
    "normalizedValue": "山东威海威海经济技术开发",
    "normalizedSearchText": "山东威海威海经济技术开发威海经济技术开发山东威海"
  },
  {
    "code": "371073",
    "name": "威海临港经济技术开发区",
    "detail": "山东省 / 威海市",
    "value": "山东省 / 威海市 / 威海临港经济技术开发区",
    "rank": 3,
    "normalizedName": "威海临港经济技术开发",
    "normalizedValue": "山东威海威海临港经济技术开发",
    "normalizedSearchText": "山东威海威海临港经济技术开发威海临港经济技术开发山东威海"
  },
  {
    "code": "371100",
    "name": "日照市",
    "detail": "山东省",
    "value": "山东省 / 日照市",
    "rank": 2,
    "normalizedName": "日照",
    "normalizedValue": "山东日照",
    "normalizedSearchText": "山东日照日照山东"
  },
  {
    "code": "371102",
    "name": "东港区",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 东港区",
    "rank": 3,
    "normalizedName": "东港",
    "normalizedValue": "山东日照东港",
    "normalizedSearchText": "山东日照东港东港山东日照"
  },
  {
    "code": "371103",
    "name": "岚山区",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 岚山区",
    "rank": 3,
    "normalizedName": "岚山",
    "normalizedValue": "山东日照岚山",
    "normalizedSearchText": "山东日照岚山岚山山东日照"
  },
  {
    "code": "371121",
    "name": "五莲县",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 五莲县",
    "rank": 3,
    "normalizedName": "五莲",
    "normalizedValue": "山东日照五莲",
    "normalizedSearchText": "山东日照五莲五莲山东日照"
  },
  {
    "code": "371122",
    "name": "莒县",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 莒县",
    "rank": 3,
    "normalizedName": "莒",
    "normalizedValue": "山东日照莒",
    "normalizedSearchText": "山东日照莒莒山东日照"
  },
  {
    "code": "371101",
    "name": "市辖区",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东日照辖",
    "normalizedSearchText": "山东日照辖辖山东日照"
  },
  {
    "code": "371171",
    "name": "日照经济技术开发区",
    "detail": "山东省 / 日照市",
    "value": "山东省 / 日照市 / 日照经济技术开发区",
    "rank": 3,
    "normalizedName": "日照经济技术开发",
    "normalizedValue": "山东日照日照经济技术开发",
    "normalizedSearchText": "山东日照日照经济技术开发日照经济技术开发山东日照"
  },
  {
    "code": "371300",
    "name": "临沂市",
    "detail": "山东省",
    "value": "山东省 / 临沂市",
    "rank": 2,
    "normalizedName": "临沂",
    "normalizedValue": "山东临沂",
    "normalizedSearchText": "山东临沂临沂山东"
  },
  {
    "code": "371302",
    "name": "兰山区",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 兰山区",
    "rank": 3,
    "normalizedName": "兰山",
    "normalizedValue": "山东临沂兰山",
    "normalizedSearchText": "山东临沂兰山兰山山东临沂"
  },
  {
    "code": "371311",
    "name": "罗庄区",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 罗庄区",
    "rank": 3,
    "normalizedName": "罗庄",
    "normalizedValue": "山东临沂罗庄",
    "normalizedSearchText": "山东临沂罗庄罗庄山东临沂"
  },
  {
    "code": "371312",
    "name": "河东区",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 河东区",
    "rank": 3,
    "normalizedName": "河东",
    "normalizedValue": "山东临沂河东",
    "normalizedSearchText": "山东临沂河东河东山东临沂"
  },
  {
    "code": "371321",
    "name": "沂南县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 沂南县",
    "rank": 3,
    "normalizedName": "沂南",
    "normalizedValue": "山东临沂沂南",
    "normalizedSearchText": "山东临沂沂南沂南山东临沂"
  },
  {
    "code": "371322",
    "name": "郯城县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 郯城县",
    "rank": 3,
    "normalizedName": "郯城",
    "normalizedValue": "山东临沂郯城",
    "normalizedSearchText": "山东临沂郯城郯城山东临沂"
  },
  {
    "code": "371323",
    "name": "沂水县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 沂水县",
    "rank": 3,
    "normalizedName": "沂水",
    "normalizedValue": "山东临沂沂水",
    "normalizedSearchText": "山东临沂沂水沂水山东临沂"
  },
  {
    "code": "371324",
    "name": "兰陵县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 兰陵县",
    "rank": 3,
    "normalizedName": "兰陵",
    "normalizedValue": "山东临沂兰陵",
    "normalizedSearchText": "山东临沂兰陵兰陵山东临沂"
  },
  {
    "code": "371325",
    "name": "费县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 费县",
    "rank": 3,
    "normalizedName": "费",
    "normalizedValue": "山东临沂费",
    "normalizedSearchText": "山东临沂费费山东临沂"
  },
  {
    "code": "371326",
    "name": "平邑县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 平邑县",
    "rank": 3,
    "normalizedName": "平邑",
    "normalizedValue": "山东临沂平邑",
    "normalizedSearchText": "山东临沂平邑平邑山东临沂"
  },
  {
    "code": "371327",
    "name": "莒南县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 莒南县",
    "rank": 3,
    "normalizedName": "莒南",
    "normalizedValue": "山东临沂莒南",
    "normalizedSearchText": "山东临沂莒南莒南山东临沂"
  },
  {
    "code": "371328",
    "name": "蒙阴县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 蒙阴县",
    "rank": 3,
    "normalizedName": "蒙阴",
    "normalizedValue": "山东临沂蒙阴",
    "normalizedSearchText": "山东临沂蒙阴蒙阴山东临沂"
  },
  {
    "code": "371329",
    "name": "临沭县",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 临沭县",
    "rank": 3,
    "normalizedName": "临沭",
    "normalizedValue": "山东临沂临沭",
    "normalizedSearchText": "山东临沂临沭临沭山东临沂"
  },
  {
    "code": "371301",
    "name": "市辖区",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东临沂辖",
    "normalizedSearchText": "山东临沂辖辖山东临沂"
  },
  {
    "code": "371371",
    "name": "临沂高新技术产业开发区",
    "detail": "山东省 / 临沂市",
    "value": "山东省 / 临沂市 / 临沂高新技术产业开发区",
    "rank": 3,
    "normalizedName": "临沂高新技术产业开发",
    "normalizedValue": "山东临沂临沂高新技术产业开发",
    "normalizedSearchText": "山东临沂临沂高新技术产业开发临沂高新技术产业开发山东临沂"
  },
  {
    "code": "371400",
    "name": "德州市",
    "detail": "山东省",
    "value": "山东省 / 德州市",
    "rank": 2,
    "normalizedName": "德州",
    "normalizedValue": "山东德州",
    "normalizedSearchText": "山东德州德州山东"
  },
  {
    "code": "371402",
    "name": "德城区",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 德城区",
    "rank": 3,
    "normalizedName": "德城",
    "normalizedValue": "山东德州德城",
    "normalizedSearchText": "山东德州德城德城山东德州"
  },
  {
    "code": "371403",
    "name": "陵城区",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 陵城区",
    "rank": 3,
    "normalizedName": "陵城",
    "normalizedValue": "山东德州陵城",
    "normalizedSearchText": "山东德州陵城陵城山东德州"
  },
  {
    "code": "371422",
    "name": "宁津县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 宁津县",
    "rank": 3,
    "normalizedName": "宁津",
    "normalizedValue": "山东德州宁津",
    "normalizedSearchText": "山东德州宁津宁津山东德州"
  },
  {
    "code": "371423",
    "name": "庆云县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 庆云县",
    "rank": 3,
    "normalizedName": "庆云",
    "normalizedValue": "山东德州庆云",
    "normalizedSearchText": "山东德州庆云庆云山东德州"
  },
  {
    "code": "371424",
    "name": "临邑县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 临邑县",
    "rank": 3,
    "normalizedName": "临邑",
    "normalizedValue": "山东德州临邑",
    "normalizedSearchText": "山东德州临邑临邑山东德州"
  },
  {
    "code": "371425",
    "name": "齐河县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 齐河县",
    "rank": 3,
    "normalizedName": "齐河",
    "normalizedValue": "山东德州齐河",
    "normalizedSearchText": "山东德州齐河齐河山东德州"
  },
  {
    "code": "371426",
    "name": "平原县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 平原县",
    "rank": 3,
    "normalizedName": "平原",
    "normalizedValue": "山东德州平原",
    "normalizedSearchText": "山东德州平原平原山东德州"
  },
  {
    "code": "371427",
    "name": "夏津县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 夏津县",
    "rank": 3,
    "normalizedName": "夏津",
    "normalizedValue": "山东德州夏津",
    "normalizedSearchText": "山东德州夏津夏津山东德州"
  },
  {
    "code": "371428",
    "name": "武城县",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 武城县",
    "rank": 3,
    "normalizedName": "武城",
    "normalizedValue": "山东德州武城",
    "normalizedSearchText": "山东德州武城武城山东德州"
  },
  {
    "code": "371481",
    "name": "乐陵市",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 乐陵市",
    "rank": 3,
    "normalizedName": "乐陵",
    "normalizedValue": "山东德州乐陵",
    "normalizedSearchText": "山东德州乐陵乐陵山东德州"
  },
  {
    "code": "371482",
    "name": "禹城市",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 禹城市",
    "rank": 3,
    "normalizedName": "禹城",
    "normalizedValue": "山东德州禹城",
    "normalizedSearchText": "山东德州禹城禹城山东德州"
  },
  {
    "code": "371401",
    "name": "市辖区",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东德州辖",
    "normalizedSearchText": "山东德州辖辖山东德州"
  },
  {
    "code": "371471",
    "name": "德州经济技术开发区",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 德州经济技术开发区",
    "rank": 3,
    "normalizedName": "德州经济技术开发",
    "normalizedValue": "山东德州德州经济技术开发",
    "normalizedSearchText": "山东德州德州经济技术开发德州经济技术开发山东德州"
  },
  {
    "code": "371472",
    "name": "德州运河经济开发区",
    "detail": "山东省 / 德州市",
    "value": "山东省 / 德州市 / 德州运河经济开发区",
    "rank": 3,
    "normalizedName": "德州运河经济开发",
    "normalizedValue": "山东德州德州运河经济开发",
    "normalizedSearchText": "山东德州德州运河经济开发德州运河经济开发山东德州"
  },
  {
    "code": "371500",
    "name": "聊城市",
    "detail": "山东省",
    "value": "山东省 / 聊城市",
    "rank": 2,
    "normalizedName": "聊城",
    "normalizedValue": "山东聊城",
    "normalizedSearchText": "山东聊城聊城山东"
  },
  {
    "code": "371502",
    "name": "东昌府区",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 东昌府区",
    "rank": 3,
    "normalizedName": "东昌府",
    "normalizedValue": "山东聊城东昌府",
    "normalizedSearchText": "山东聊城东昌府东昌府山东聊城"
  },
  {
    "code": "371503",
    "name": "茌平区",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 茌平区",
    "rank": 3,
    "normalizedName": "茌平",
    "normalizedValue": "山东聊城茌平",
    "normalizedSearchText": "山东聊城茌平茌平山东聊城"
  },
  {
    "code": "371521",
    "name": "阳谷县",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 阳谷县",
    "rank": 3,
    "normalizedName": "阳谷",
    "normalizedValue": "山东聊城阳谷",
    "normalizedSearchText": "山东聊城阳谷阳谷山东聊城"
  },
  {
    "code": "371522",
    "name": "莘县",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 莘县",
    "rank": 3,
    "normalizedName": "莘",
    "normalizedValue": "山东聊城莘",
    "normalizedSearchText": "山东聊城莘莘山东聊城"
  },
  {
    "code": "371524",
    "name": "东阿县",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 东阿县",
    "rank": 3,
    "normalizedName": "东阿",
    "normalizedValue": "山东聊城东阿",
    "normalizedSearchText": "山东聊城东阿东阿山东聊城"
  },
  {
    "code": "371525",
    "name": "冠县",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 冠县",
    "rank": 3,
    "normalizedName": "冠",
    "normalizedValue": "山东聊城冠",
    "normalizedSearchText": "山东聊城冠冠山东聊城"
  },
  {
    "code": "371526",
    "name": "高唐县",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 高唐县",
    "rank": 3,
    "normalizedName": "高唐",
    "normalizedValue": "山东聊城高唐",
    "normalizedSearchText": "山东聊城高唐高唐山东聊城"
  },
  {
    "code": "371581",
    "name": "临清市",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 临清市",
    "rank": 3,
    "normalizedName": "临清",
    "normalizedValue": "山东聊城临清",
    "normalizedSearchText": "山东聊城临清临清山东聊城"
  },
  {
    "code": "371501",
    "name": "市辖区",
    "detail": "山东省 / 聊城市",
    "value": "山东省 / 聊城市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东聊城辖",
    "normalizedSearchText": "山东聊城辖辖山东聊城"
  },
  {
    "code": "371600",
    "name": "滨州市",
    "detail": "山东省",
    "value": "山东省 / 滨州市",
    "rank": 2,
    "normalizedName": "滨州",
    "normalizedValue": "山东滨州",
    "normalizedSearchText": "山东滨州滨州山东"
  },
  {
    "code": "371602",
    "name": "滨城区",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 滨城区",
    "rank": 3,
    "normalizedName": "滨城",
    "normalizedValue": "山东滨州滨城",
    "normalizedSearchText": "山东滨州滨城滨城山东滨州"
  },
  {
    "code": "371603",
    "name": "沾化区",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 沾化区",
    "rank": 3,
    "normalizedName": "沾化",
    "normalizedValue": "山东滨州沾化",
    "normalizedSearchText": "山东滨州沾化沾化山东滨州"
  },
  {
    "code": "371621",
    "name": "惠民县",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 惠民县",
    "rank": 3,
    "normalizedName": "惠民",
    "normalizedValue": "山东滨州惠民",
    "normalizedSearchText": "山东滨州惠民惠民山东滨州"
  },
  {
    "code": "371622",
    "name": "阳信县",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 阳信县",
    "rank": 3,
    "normalizedName": "阳信",
    "normalizedValue": "山东滨州阳信",
    "normalizedSearchText": "山东滨州阳信阳信山东滨州"
  },
  {
    "code": "371623",
    "name": "无棣县",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 无棣县",
    "rank": 3,
    "normalizedName": "无棣",
    "normalizedValue": "山东滨州无棣",
    "normalizedSearchText": "山东滨州无棣无棣山东滨州"
  },
  {
    "code": "371625",
    "name": "博兴县",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 博兴县",
    "rank": 3,
    "normalizedName": "博兴",
    "normalizedValue": "山东滨州博兴",
    "normalizedSearchText": "山东滨州博兴博兴山东滨州"
  },
  {
    "code": "371681",
    "name": "邹平市",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 邹平市",
    "rank": 3,
    "normalizedName": "邹平",
    "normalizedValue": "山东滨州邹平",
    "normalizedSearchText": "山东滨州邹平邹平山东滨州"
  },
  {
    "code": "371601",
    "name": "市辖区",
    "detail": "山东省 / 滨州市",
    "value": "山东省 / 滨州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东滨州辖",
    "normalizedSearchText": "山东滨州辖辖山东滨州"
  },
  {
    "code": "371700",
    "name": "菏泽市",
    "detail": "山东省",
    "value": "山东省 / 菏泽市",
    "rank": 2,
    "normalizedName": "菏泽",
    "normalizedValue": "山东菏泽",
    "normalizedSearchText": "山东菏泽菏泽山东"
  },
  {
    "code": "371702",
    "name": "牡丹区",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 牡丹区",
    "rank": 3,
    "normalizedName": "牡丹",
    "normalizedValue": "山东菏泽牡丹",
    "normalizedSearchText": "山东菏泽牡丹牡丹山东菏泽"
  },
  {
    "code": "371703",
    "name": "定陶区",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 定陶区",
    "rank": 3,
    "normalizedName": "定陶",
    "normalizedValue": "山东菏泽定陶",
    "normalizedSearchText": "山东菏泽定陶定陶山东菏泽"
  },
  {
    "code": "371721",
    "name": "曹县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 曹县",
    "rank": 3,
    "normalizedName": "曹",
    "normalizedValue": "山东菏泽曹",
    "normalizedSearchText": "山东菏泽曹曹山东菏泽"
  },
  {
    "code": "371722",
    "name": "单县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 单县",
    "rank": 3,
    "normalizedName": "单",
    "normalizedValue": "山东菏泽单",
    "normalizedSearchText": "山东菏泽单单山东菏泽"
  },
  {
    "code": "371723",
    "name": "成武县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 成武县",
    "rank": 3,
    "normalizedName": "成武",
    "normalizedValue": "山东菏泽成武",
    "normalizedSearchText": "山东菏泽成武成武山东菏泽"
  },
  {
    "code": "371724",
    "name": "巨野县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 巨野县",
    "rank": 3,
    "normalizedName": "巨野",
    "normalizedValue": "山东菏泽巨野",
    "normalizedSearchText": "山东菏泽巨野巨野山东菏泽"
  },
  {
    "code": "371725",
    "name": "郓城县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 郓城县",
    "rank": 3,
    "normalizedName": "郓城",
    "normalizedValue": "山东菏泽郓城",
    "normalizedSearchText": "山东菏泽郓城郓城山东菏泽"
  },
  {
    "code": "371726",
    "name": "鄄城县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 鄄城县",
    "rank": 3,
    "normalizedName": "鄄城",
    "normalizedValue": "山东菏泽鄄城",
    "normalizedSearchText": "山东菏泽鄄城鄄城山东菏泽"
  },
  {
    "code": "371728",
    "name": "东明县",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 东明县",
    "rank": 3,
    "normalizedName": "东明",
    "normalizedValue": "山东菏泽东明",
    "normalizedSearchText": "山东菏泽东明东明山东菏泽"
  },
  {
    "code": "371701",
    "name": "市辖区",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "山东菏泽辖",
    "normalizedSearchText": "山东菏泽辖辖山东菏泽"
  },
  {
    "code": "371771",
    "name": "菏泽经济技术开发区",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 菏泽经济技术开发区",
    "rank": 3,
    "normalizedName": "菏泽经济技术开发",
    "normalizedValue": "山东菏泽菏泽经济技术开发",
    "normalizedSearchText": "山东菏泽菏泽经济技术开发菏泽经济技术开发山东菏泽"
  },
  {
    "code": "371772",
    "name": "菏泽高新技术开发区",
    "detail": "山东省 / 菏泽市",
    "value": "山东省 / 菏泽市 / 菏泽高新技术开发区",
    "rank": 3,
    "normalizedName": "菏泽高新技术开发",
    "normalizedValue": "山东菏泽菏泽高新技术开发",
    "normalizedSearchText": "山东菏泽菏泽高新技术开发菏泽高新技术开发山东菏泽"
  },
  {
    "code": "410000",
    "name": "河南省",
    "detail": "?????",
    "value": "河南省",
    "rank": 1,
    "normalizedName": "河南",
    "normalizedValue": "河南",
    "normalizedSearchText": "河南河南"
  },
  {
    "code": "410100",
    "name": "郑州市",
    "detail": "河南省",
    "value": "河南省 / 郑州市",
    "rank": 2,
    "normalizedName": "郑州",
    "normalizedValue": "河南郑州",
    "normalizedSearchText": "河南郑州郑州河南"
  },
  {
    "code": "410102",
    "name": "中原区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 中原区",
    "rank": 3,
    "normalizedName": "中原",
    "normalizedValue": "河南郑州中原",
    "normalizedSearchText": "河南郑州中原中原河南郑州"
  },
  {
    "code": "410103",
    "name": "二七区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 二七区",
    "rank": 3,
    "normalizedName": "二七",
    "normalizedValue": "河南郑州二七",
    "normalizedSearchText": "河南郑州二七二七河南郑州"
  },
  {
    "code": "410104",
    "name": "管城回族区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 管城回族区",
    "rank": 3,
    "normalizedName": "管城回族",
    "normalizedValue": "河南郑州管城回族",
    "normalizedSearchText": "河南郑州管城回族管城回族河南郑州"
  },
  {
    "code": "410105",
    "name": "金水区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 金水区",
    "rank": 3,
    "normalizedName": "金水",
    "normalizedValue": "河南郑州金水",
    "normalizedSearchText": "河南郑州金水金水河南郑州"
  },
  {
    "code": "410106",
    "name": "上街区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 上街区",
    "rank": 3,
    "normalizedName": "上街",
    "normalizedValue": "河南郑州上街",
    "normalizedSearchText": "河南郑州上街上街河南郑州"
  },
  {
    "code": "410108",
    "name": "惠济区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 惠济区",
    "rank": 3,
    "normalizedName": "惠济",
    "normalizedValue": "河南郑州惠济",
    "normalizedSearchText": "河南郑州惠济惠济河南郑州"
  },
  {
    "code": "410122",
    "name": "中牟县",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 中牟县",
    "rank": 3,
    "normalizedName": "中牟",
    "normalizedValue": "河南郑州中牟",
    "normalizedSearchText": "河南郑州中牟中牟河南郑州"
  },
  {
    "code": "410181",
    "name": "巩义市",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 巩义市",
    "rank": 3,
    "normalizedName": "巩义",
    "normalizedValue": "河南郑州巩义",
    "normalizedSearchText": "河南郑州巩义巩义河南郑州"
  },
  {
    "code": "410182",
    "name": "荥阳市",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 荥阳市",
    "rank": 3,
    "normalizedName": "荥阳",
    "normalizedValue": "河南郑州荥阳",
    "normalizedSearchText": "河南郑州荥阳荥阳河南郑州"
  },
  {
    "code": "410183",
    "name": "新密市",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 新密市",
    "rank": 3,
    "normalizedName": "新密",
    "normalizedValue": "河南郑州新密",
    "normalizedSearchText": "河南郑州新密新密河南郑州"
  },
  {
    "code": "410184",
    "name": "新郑市",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 新郑市",
    "rank": 3,
    "normalizedName": "新郑",
    "normalizedValue": "河南郑州新郑",
    "normalizedSearchText": "河南郑州新郑新郑河南郑州"
  },
  {
    "code": "410185",
    "name": "登封市",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 登封市",
    "rank": 3,
    "normalizedName": "登封",
    "normalizedValue": "河南郑州登封",
    "normalizedSearchText": "河南郑州登封登封河南郑州"
  },
  {
    "code": "410101",
    "name": "市辖区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南郑州辖",
    "normalizedSearchText": "河南郑州辖辖河南郑州"
  },
  {
    "code": "410171",
    "name": "郑州经济技术开发区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 郑州经济技术开发区",
    "rank": 3,
    "normalizedName": "郑州经济技术开发",
    "normalizedValue": "河南郑州郑州经济技术开发",
    "normalizedSearchText": "河南郑州郑州经济技术开发郑州经济技术开发河南郑州"
  },
  {
    "code": "410172",
    "name": "郑州高新技术产业开发区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 郑州高新技术产业开发区",
    "rank": 3,
    "normalizedName": "郑州高新技术产业开发",
    "normalizedValue": "河南郑州郑州高新技术产业开发",
    "normalizedSearchText": "河南郑州郑州高新技术产业开发郑州高新技术产业开发河南郑州"
  },
  {
    "code": "410173",
    "name": "郑州航空港经济综合实验区",
    "detail": "河南省 / 郑州市",
    "value": "河南省 / 郑州市 / 郑州航空港经济综合实验区",
    "rank": 3,
    "normalizedName": "郑州航空港经济综合实验",
    "normalizedValue": "河南郑州郑州航空港经济综合实验",
    "normalizedSearchText": "河南郑州郑州航空港经济综合实验郑州航空港经济综合实验河南郑州"
  },
  {
    "code": "410200",
    "name": "开封市",
    "detail": "河南省",
    "value": "河南省 / 开封市",
    "rank": 2,
    "normalizedName": "开封",
    "normalizedValue": "河南开封",
    "normalizedSearchText": "河南开封开封河南"
  },
  {
    "code": "410202",
    "name": "龙亭区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 龙亭区",
    "rank": 3,
    "normalizedName": "龙亭",
    "normalizedValue": "河南开封龙亭",
    "normalizedSearchText": "河南开封龙亭龙亭河南开封"
  },
  {
    "code": "410203",
    "name": "顺河回族区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 顺河回族区",
    "rank": 3,
    "normalizedName": "顺河回族",
    "normalizedValue": "河南开封顺河回族",
    "normalizedSearchText": "河南开封顺河回族顺河回族河南开封"
  },
  {
    "code": "410204",
    "name": "鼓楼区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 鼓楼区",
    "rank": 3,
    "normalizedName": "鼓楼",
    "normalizedValue": "河南开封鼓楼",
    "normalizedSearchText": "河南开封鼓楼鼓楼河南开封"
  },
  {
    "code": "410205",
    "name": "禹王台区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 禹王台区",
    "rank": 3,
    "normalizedName": "禹王台",
    "normalizedValue": "河南开封禹王台",
    "normalizedSearchText": "河南开封禹王台禹王台河南开封"
  },
  {
    "code": "410212",
    "name": "祥符区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 祥符区",
    "rank": 3,
    "normalizedName": "祥符",
    "normalizedValue": "河南开封祥符",
    "normalizedSearchText": "河南开封祥符祥符河南开封"
  },
  {
    "code": "410221",
    "name": "杞县",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 杞县",
    "rank": 3,
    "normalizedName": "杞",
    "normalizedValue": "河南开封杞",
    "normalizedSearchText": "河南开封杞杞河南开封"
  },
  {
    "code": "410222",
    "name": "通许县",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 通许县",
    "rank": 3,
    "normalizedName": "通许",
    "normalizedValue": "河南开封通许",
    "normalizedSearchText": "河南开封通许通许河南开封"
  },
  {
    "code": "410223",
    "name": "尉氏县",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 尉氏县",
    "rank": 3,
    "normalizedName": "尉氏",
    "normalizedValue": "河南开封尉氏",
    "normalizedSearchText": "河南开封尉氏尉氏河南开封"
  },
  {
    "code": "410225",
    "name": "兰考县",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 兰考县",
    "rank": 3,
    "normalizedName": "兰考",
    "normalizedValue": "河南开封兰考",
    "normalizedSearchText": "河南开封兰考兰考河南开封"
  },
  {
    "code": "410201",
    "name": "市辖区",
    "detail": "河南省 / 开封市",
    "value": "河南省 / 开封市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南开封辖",
    "normalizedSearchText": "河南开封辖辖河南开封"
  },
  {
    "code": "410300",
    "name": "洛阳市",
    "detail": "河南省",
    "value": "河南省 / 洛阳市",
    "rank": 2,
    "normalizedName": "洛阳",
    "normalizedValue": "河南洛阳",
    "normalizedSearchText": "河南洛阳洛阳河南"
  },
  {
    "code": "410302",
    "name": "老城区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 老城区",
    "rank": 3,
    "normalizedName": "老城",
    "normalizedValue": "河南洛阳老城",
    "normalizedSearchText": "河南洛阳老城老城河南洛阳"
  },
  {
    "code": "410303",
    "name": "西工区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 西工区",
    "rank": 3,
    "normalizedName": "西工",
    "normalizedValue": "河南洛阳西工",
    "normalizedSearchText": "河南洛阳西工西工河南洛阳"
  },
  {
    "code": "410304",
    "name": "瀍河回族区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 瀍河回族区",
    "rank": 3,
    "normalizedName": "瀍河回族",
    "normalizedValue": "河南洛阳瀍河回族",
    "normalizedSearchText": "河南洛阳瀍河回族瀍河回族河南洛阳"
  },
  {
    "code": "410305",
    "name": "涧西区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 涧西区",
    "rank": 3,
    "normalizedName": "涧西",
    "normalizedValue": "河南洛阳涧西",
    "normalizedSearchText": "河南洛阳涧西涧西河南洛阳"
  },
  {
    "code": "410306",
    "name": "吉利区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 吉利区",
    "rank": 3,
    "normalizedName": "吉利",
    "normalizedValue": "河南洛阳吉利",
    "normalizedSearchText": "河南洛阳吉利吉利河南洛阳"
  },
  {
    "code": "410311",
    "name": "洛龙区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 洛龙区",
    "rank": 3,
    "normalizedName": "洛龙",
    "normalizedValue": "河南洛阳洛龙",
    "normalizedSearchText": "河南洛阳洛龙洛龙河南洛阳"
  },
  {
    "code": "410322",
    "name": "孟津县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 孟津县",
    "rank": 3,
    "normalizedName": "孟津",
    "normalizedValue": "河南洛阳孟津",
    "normalizedSearchText": "河南洛阳孟津孟津河南洛阳"
  },
  {
    "code": "410323",
    "name": "新安县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 新安县",
    "rank": 3,
    "normalizedName": "新安",
    "normalizedValue": "河南洛阳新安",
    "normalizedSearchText": "河南洛阳新安新安河南洛阳"
  },
  {
    "code": "410324",
    "name": "栾川县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 栾川县",
    "rank": 3,
    "normalizedName": "栾川",
    "normalizedValue": "河南洛阳栾川",
    "normalizedSearchText": "河南洛阳栾川栾川河南洛阳"
  },
  {
    "code": "410325",
    "name": "嵩县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 嵩县",
    "rank": 3,
    "normalizedName": "嵩",
    "normalizedValue": "河南洛阳嵩",
    "normalizedSearchText": "河南洛阳嵩嵩河南洛阳"
  },
  {
    "code": "410326",
    "name": "汝阳县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 汝阳县",
    "rank": 3,
    "normalizedName": "汝阳",
    "normalizedValue": "河南洛阳汝阳",
    "normalizedSearchText": "河南洛阳汝阳汝阳河南洛阳"
  },
  {
    "code": "410327",
    "name": "宜阳县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 宜阳县",
    "rank": 3,
    "normalizedName": "宜阳",
    "normalizedValue": "河南洛阳宜阳",
    "normalizedSearchText": "河南洛阳宜阳宜阳河南洛阳"
  },
  {
    "code": "410328",
    "name": "洛宁县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 洛宁县",
    "rank": 3,
    "normalizedName": "洛宁",
    "normalizedValue": "河南洛阳洛宁",
    "normalizedSearchText": "河南洛阳洛宁洛宁河南洛阳"
  },
  {
    "code": "410329",
    "name": "伊川县",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 伊川县",
    "rank": 3,
    "normalizedName": "伊川",
    "normalizedValue": "河南洛阳伊川",
    "normalizedSearchText": "河南洛阳伊川伊川河南洛阳"
  },
  {
    "code": "410381",
    "name": "偃师市",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 偃师市",
    "rank": 3,
    "normalizedName": "偃师",
    "normalizedValue": "河南洛阳偃师",
    "normalizedSearchText": "河南洛阳偃师偃师河南洛阳"
  },
  {
    "code": "410301",
    "name": "市辖区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南洛阳辖",
    "normalizedSearchText": "河南洛阳辖辖河南洛阳"
  },
  {
    "code": "410307",
    "name": "偃师区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 偃师区",
    "rank": 3,
    "normalizedName": "偃师",
    "normalizedValue": "河南洛阳偃师",
    "normalizedSearchText": "河南洛阳偃师偃师河南洛阳"
  },
  {
    "code": "410308",
    "name": "孟津区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 孟津区",
    "rank": 3,
    "normalizedName": "孟津",
    "normalizedValue": "河南洛阳孟津",
    "normalizedSearchText": "河南洛阳孟津孟津河南洛阳"
  },
  {
    "code": "410371",
    "name": "洛阳高新技术产业开发区",
    "detail": "河南省 / 洛阳市",
    "value": "河南省 / 洛阳市 / 洛阳高新技术产业开发区",
    "rank": 3,
    "normalizedName": "洛阳高新技术产业开发",
    "normalizedValue": "河南洛阳洛阳高新技术产业开发",
    "normalizedSearchText": "河南洛阳洛阳高新技术产业开发洛阳高新技术产业开发河南洛阳"
  },
  {
    "code": "410400",
    "name": "平顶山市",
    "detail": "河南省",
    "value": "河南省 / 平顶山市",
    "rank": 2,
    "normalizedName": "平顶山",
    "normalizedValue": "河南平顶山",
    "normalizedSearchText": "河南平顶山平顶山河南"
  },
  {
    "code": "410402",
    "name": "新华区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 新华区",
    "rank": 3,
    "normalizedName": "新华",
    "normalizedValue": "河南平顶山新华",
    "normalizedSearchText": "河南平顶山新华新华河南平顶山"
  },
  {
    "code": "410403",
    "name": "卫东区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 卫东区",
    "rank": 3,
    "normalizedName": "卫东",
    "normalizedValue": "河南平顶山卫东",
    "normalizedSearchText": "河南平顶山卫东卫东河南平顶山"
  },
  {
    "code": "410404",
    "name": "石龙区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 石龙区",
    "rank": 3,
    "normalizedName": "石龙",
    "normalizedValue": "河南平顶山石龙",
    "normalizedSearchText": "河南平顶山石龙石龙河南平顶山"
  },
  {
    "code": "410411",
    "name": "湛河区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 湛河区",
    "rank": 3,
    "normalizedName": "湛河",
    "normalizedValue": "河南平顶山湛河",
    "normalizedSearchText": "河南平顶山湛河湛河河南平顶山"
  },
  {
    "code": "410421",
    "name": "宝丰县",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 宝丰县",
    "rank": 3,
    "normalizedName": "宝丰",
    "normalizedValue": "河南平顶山宝丰",
    "normalizedSearchText": "河南平顶山宝丰宝丰河南平顶山"
  },
  {
    "code": "410422",
    "name": "叶县",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 叶县",
    "rank": 3,
    "normalizedName": "叶",
    "normalizedValue": "河南平顶山叶",
    "normalizedSearchText": "河南平顶山叶叶河南平顶山"
  },
  {
    "code": "410423",
    "name": "鲁山县",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 鲁山县",
    "rank": 3,
    "normalizedName": "鲁山",
    "normalizedValue": "河南平顶山鲁山",
    "normalizedSearchText": "河南平顶山鲁山鲁山河南平顶山"
  },
  {
    "code": "410425",
    "name": "郏县",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 郏县",
    "rank": 3,
    "normalizedName": "郏",
    "normalizedValue": "河南平顶山郏",
    "normalizedSearchText": "河南平顶山郏郏河南平顶山"
  },
  {
    "code": "410481",
    "name": "舞钢市",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 舞钢市",
    "rank": 3,
    "normalizedName": "舞钢",
    "normalizedValue": "河南平顶山舞钢",
    "normalizedSearchText": "河南平顶山舞钢舞钢河南平顶山"
  },
  {
    "code": "410482",
    "name": "汝州市",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 汝州市",
    "rank": 3,
    "normalizedName": "汝州",
    "normalizedValue": "河南平顶山汝州",
    "normalizedSearchText": "河南平顶山汝州汝州河南平顶山"
  },
  {
    "code": "410401",
    "name": "市辖区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南平顶山辖",
    "normalizedSearchText": "河南平顶山辖辖河南平顶山"
  },
  {
    "code": "410471",
    "name": "平顶山高新技术产业开发区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 平顶山高新技术产业开发区",
    "rank": 3,
    "normalizedName": "平顶山高新技术产业开发",
    "normalizedValue": "河南平顶山平顶山高新技术产业开发",
    "normalizedSearchText": "河南平顶山平顶山高新技术产业开发平顶山高新技术产业开发河南平顶山"
  },
  {
    "code": "410472",
    "name": "平顶山市城乡一体化示范区",
    "detail": "河南省 / 平顶山市",
    "value": "河南省 / 平顶山市 / 平顶山市城乡一体化示范区",
    "rank": 3,
    "normalizedName": "平顶山城一体化示范",
    "normalizedValue": "河南平顶山平顶山城一体化示范",
    "normalizedSearchText": "河南平顶山平顶山城一体化示范平顶山城一体化示范河南平顶山"
  },
  {
    "code": "410500",
    "name": "安阳市",
    "detail": "河南省",
    "value": "河南省 / 安阳市",
    "rank": 2,
    "normalizedName": "安阳",
    "normalizedValue": "河南安阳",
    "normalizedSearchText": "河南安阳安阳河南"
  },
  {
    "code": "410502",
    "name": "文峰区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 文峰区",
    "rank": 3,
    "normalizedName": "文峰",
    "normalizedValue": "河南安阳文峰",
    "normalizedSearchText": "河南安阳文峰文峰河南安阳"
  },
  {
    "code": "410503",
    "name": "北关区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 北关区",
    "rank": 3,
    "normalizedName": "北关",
    "normalizedValue": "河南安阳北关",
    "normalizedSearchText": "河南安阳北关北关河南安阳"
  },
  {
    "code": "410505",
    "name": "殷都区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 殷都区",
    "rank": 3,
    "normalizedName": "殷都",
    "normalizedValue": "河南安阳殷都",
    "normalizedSearchText": "河南安阳殷都殷都河南安阳"
  },
  {
    "code": "410506",
    "name": "龙安区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 龙安区",
    "rank": 3,
    "normalizedName": "龙安",
    "normalizedValue": "河南安阳龙安",
    "normalizedSearchText": "河南安阳龙安龙安河南安阳"
  },
  {
    "code": "410522",
    "name": "安阳县",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 安阳县",
    "rank": 3,
    "normalizedName": "安阳",
    "normalizedValue": "河南安阳安阳",
    "normalizedSearchText": "河南安阳安阳安阳河南安阳"
  },
  {
    "code": "410523",
    "name": "汤阴县",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 汤阴县",
    "rank": 3,
    "normalizedName": "汤阴",
    "normalizedValue": "河南安阳汤阴",
    "normalizedSearchText": "河南安阳汤阴汤阴河南安阳"
  },
  {
    "code": "410526",
    "name": "滑县",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 滑县",
    "rank": 3,
    "normalizedName": "滑",
    "normalizedValue": "河南安阳滑",
    "normalizedSearchText": "河南安阳滑滑河南安阳"
  },
  {
    "code": "410527",
    "name": "内黄县",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 内黄县",
    "rank": 3,
    "normalizedName": "内黄",
    "normalizedValue": "河南安阳内黄",
    "normalizedSearchText": "河南安阳内黄内黄河南安阳"
  },
  {
    "code": "410581",
    "name": "林州市",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 林州市",
    "rank": 3,
    "normalizedName": "林州",
    "normalizedValue": "河南安阳林州",
    "normalizedSearchText": "河南安阳林州林州河南安阳"
  },
  {
    "code": "410501",
    "name": "市辖区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南安阳辖",
    "normalizedSearchText": "河南安阳辖辖河南安阳"
  },
  {
    "code": "410571",
    "name": "安阳高新技术产业开发区",
    "detail": "河南省 / 安阳市",
    "value": "河南省 / 安阳市 / 安阳高新技术产业开发区",
    "rank": 3,
    "normalizedName": "安阳高新技术产业开发",
    "normalizedValue": "河南安阳安阳高新技术产业开发",
    "normalizedSearchText": "河南安阳安阳高新技术产业开发安阳高新技术产业开发河南安阳"
  },
  {
    "code": "410600",
    "name": "鹤壁市",
    "detail": "河南省",
    "value": "河南省 / 鹤壁市",
    "rank": 2,
    "normalizedName": "鹤壁",
    "normalizedValue": "河南鹤壁",
    "normalizedSearchText": "河南鹤壁鹤壁河南"
  },
  {
    "code": "410602",
    "name": "鹤山区",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 鹤山区",
    "rank": 3,
    "normalizedName": "鹤山",
    "normalizedValue": "河南鹤壁鹤山",
    "normalizedSearchText": "河南鹤壁鹤山鹤山河南鹤壁"
  },
  {
    "code": "410603",
    "name": "山城区",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 山城区",
    "rank": 3,
    "normalizedName": "山城",
    "normalizedValue": "河南鹤壁山城",
    "normalizedSearchText": "河南鹤壁山城山城河南鹤壁"
  },
  {
    "code": "410611",
    "name": "淇滨区",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 淇滨区",
    "rank": 3,
    "normalizedName": "淇滨",
    "normalizedValue": "河南鹤壁淇滨",
    "normalizedSearchText": "河南鹤壁淇滨淇滨河南鹤壁"
  },
  {
    "code": "410621",
    "name": "浚县",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 浚县",
    "rank": 3,
    "normalizedName": "浚",
    "normalizedValue": "河南鹤壁浚",
    "normalizedSearchText": "河南鹤壁浚浚河南鹤壁"
  },
  {
    "code": "410622",
    "name": "淇县",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 淇县",
    "rank": 3,
    "normalizedName": "淇",
    "normalizedValue": "河南鹤壁淇",
    "normalizedSearchText": "河南鹤壁淇淇河南鹤壁"
  },
  {
    "code": "410601",
    "name": "市辖区",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南鹤壁辖",
    "normalizedSearchText": "河南鹤壁辖辖河南鹤壁"
  },
  {
    "code": "410671",
    "name": "鹤壁经济技术开发区",
    "detail": "河南省 / 鹤壁市",
    "value": "河南省 / 鹤壁市 / 鹤壁经济技术开发区",
    "rank": 3,
    "normalizedName": "鹤壁经济技术开发",
    "normalizedValue": "河南鹤壁鹤壁经济技术开发",
    "normalizedSearchText": "河南鹤壁鹤壁经济技术开发鹤壁经济技术开发河南鹤壁"
  },
  {
    "code": "410700",
    "name": "新乡市",
    "detail": "河南省",
    "value": "河南省 / 新乡市",
    "rank": 2,
    "normalizedName": "新",
    "normalizedValue": "河南新",
    "normalizedSearchText": "河南新新河南"
  },
  {
    "code": "410702",
    "name": "红旗区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 红旗区",
    "rank": 3,
    "normalizedName": "红",
    "normalizedValue": "河南新红",
    "normalizedSearchText": "河南新红红河南新"
  },
  {
    "code": "410703",
    "name": "卫滨区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 卫滨区",
    "rank": 3,
    "normalizedName": "卫滨",
    "normalizedValue": "河南新卫滨",
    "normalizedSearchText": "河南新卫滨卫滨河南新"
  },
  {
    "code": "410704",
    "name": "凤泉区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 凤泉区",
    "rank": 3,
    "normalizedName": "凤泉",
    "normalizedValue": "河南新凤泉",
    "normalizedSearchText": "河南新凤泉凤泉河南新"
  },
  {
    "code": "410711",
    "name": "牧野区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 牧野区",
    "rank": 3,
    "normalizedName": "牧野",
    "normalizedValue": "河南新牧野",
    "normalizedSearchText": "河南新牧野牧野河南新"
  },
  {
    "code": "410721",
    "name": "新乡县",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 新乡县",
    "rank": 3,
    "normalizedName": "新",
    "normalizedValue": "河南新新",
    "normalizedSearchText": "河南新新新河南新"
  },
  {
    "code": "410724",
    "name": "获嘉县",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 获嘉县",
    "rank": 3,
    "normalizedName": "获嘉",
    "normalizedValue": "河南新获嘉",
    "normalizedSearchText": "河南新获嘉获嘉河南新"
  },
  {
    "code": "410725",
    "name": "原阳县",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 原阳县",
    "rank": 3,
    "normalizedName": "原阳",
    "normalizedValue": "河南新原阳",
    "normalizedSearchText": "河南新原阳原阳河南新"
  },
  {
    "code": "410726",
    "name": "延津县",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 延津县",
    "rank": 3,
    "normalizedName": "延津",
    "normalizedValue": "河南新延津",
    "normalizedSearchText": "河南新延津延津河南新"
  },
  {
    "code": "410727",
    "name": "封丘县",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 封丘县",
    "rank": 3,
    "normalizedName": "封丘",
    "normalizedValue": "河南新封丘",
    "normalizedSearchText": "河南新封丘封丘河南新"
  },
  {
    "code": "410781",
    "name": "卫辉市",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 卫辉市",
    "rank": 3,
    "normalizedName": "卫辉",
    "normalizedValue": "河南新卫辉",
    "normalizedSearchText": "河南新卫辉卫辉河南新"
  },
  {
    "code": "410782",
    "name": "辉县市",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 辉县市",
    "rank": 3,
    "normalizedName": "辉",
    "normalizedValue": "河南新辉",
    "normalizedSearchText": "河南新辉辉河南新"
  },
  {
    "code": "410783",
    "name": "长垣市",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 长垣市",
    "rank": 3,
    "normalizedName": "长垣",
    "normalizedValue": "河南新长垣",
    "normalizedSearchText": "河南新长垣长垣河南新"
  },
  {
    "code": "410701",
    "name": "市辖区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南新辖",
    "normalizedSearchText": "河南新辖辖河南新"
  },
  {
    "code": "410771",
    "name": "新乡高新技术产业开发区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 新乡高新技术产业开发区",
    "rank": 3,
    "normalizedName": "新高新技术产业开发",
    "normalizedValue": "河南新新高新技术产业开发",
    "normalizedSearchText": "河南新新高新技术产业开发新高新技术产业开发河南新"
  },
  {
    "code": "410772",
    "name": "新乡经济技术开发区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 新乡经济技术开发区",
    "rank": 3,
    "normalizedName": "新经济技术开发",
    "normalizedValue": "河南新新经济技术开发",
    "normalizedSearchText": "河南新新经济技术开发新经济技术开发河南新"
  },
  {
    "code": "410773",
    "name": "新乡市平原城乡一体化示范区",
    "detail": "河南省 / 新乡市",
    "value": "河南省 / 新乡市 / 新乡市平原城乡一体化示范区",
    "rank": 3,
    "normalizedName": "新平原城一体化示范",
    "normalizedValue": "河南新新平原城一体化示范",
    "normalizedSearchText": "河南新新平原城一体化示范新平原城一体化示范河南新"
  },
  {
    "code": "410800",
    "name": "焦作市",
    "detail": "河南省",
    "value": "河南省 / 焦作市",
    "rank": 2,
    "normalizedName": "焦作",
    "normalizedValue": "河南焦作",
    "normalizedSearchText": "河南焦作焦作河南"
  },
  {
    "code": "410802",
    "name": "解放区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 解放区",
    "rank": 3,
    "normalizedName": "解放",
    "normalizedValue": "河南焦作解放",
    "normalizedSearchText": "河南焦作解放解放河南焦作"
  },
  {
    "code": "410803",
    "name": "中站区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 中站区",
    "rank": 3,
    "normalizedName": "中站",
    "normalizedValue": "河南焦作中站",
    "normalizedSearchText": "河南焦作中站中站河南焦作"
  },
  {
    "code": "410804",
    "name": "马村区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 马村区",
    "rank": 3,
    "normalizedName": "马",
    "normalizedValue": "河南焦作马",
    "normalizedSearchText": "河南焦作马马河南焦作"
  },
  {
    "code": "410811",
    "name": "山阳区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 山阳区",
    "rank": 3,
    "normalizedName": "山阳",
    "normalizedValue": "河南焦作山阳",
    "normalizedSearchText": "河南焦作山阳山阳河南焦作"
  },
  {
    "code": "410821",
    "name": "修武县",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 修武县",
    "rank": 3,
    "normalizedName": "修武",
    "normalizedValue": "河南焦作修武",
    "normalizedSearchText": "河南焦作修武修武河南焦作"
  },
  {
    "code": "410822",
    "name": "博爱县",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 博爱县",
    "rank": 3,
    "normalizedName": "博爱",
    "normalizedValue": "河南焦作博爱",
    "normalizedSearchText": "河南焦作博爱博爱河南焦作"
  },
  {
    "code": "410823",
    "name": "武陟县",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 武陟县",
    "rank": 3,
    "normalizedName": "武陟",
    "normalizedValue": "河南焦作武陟",
    "normalizedSearchText": "河南焦作武陟武陟河南焦作"
  },
  {
    "code": "410825",
    "name": "温县",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 温县",
    "rank": 3,
    "normalizedName": "温",
    "normalizedValue": "河南焦作温",
    "normalizedSearchText": "河南焦作温温河南焦作"
  },
  {
    "code": "410882",
    "name": "沁阳市",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 沁阳市",
    "rank": 3,
    "normalizedName": "沁阳",
    "normalizedValue": "河南焦作沁阳",
    "normalizedSearchText": "河南焦作沁阳沁阳河南焦作"
  },
  {
    "code": "410883",
    "name": "孟州市",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 孟州市",
    "rank": 3,
    "normalizedName": "孟州",
    "normalizedValue": "河南焦作孟州",
    "normalizedSearchText": "河南焦作孟州孟州河南焦作"
  },
  {
    "code": "410801",
    "name": "市辖区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南焦作辖",
    "normalizedSearchText": "河南焦作辖辖河南焦作"
  },
  {
    "code": "410871",
    "name": "焦作城乡一体化示范区",
    "detail": "河南省 / 焦作市",
    "value": "河南省 / 焦作市 / 焦作城乡一体化示范区",
    "rank": 3,
    "normalizedName": "焦作城一体化示范",
    "normalizedValue": "河南焦作焦作城一体化示范",
    "normalizedSearchText": "河南焦作焦作城一体化示范焦作城一体化示范河南焦作"
  },
  {
    "code": "410900",
    "name": "濮阳市",
    "detail": "河南省",
    "value": "河南省 / 濮阳市",
    "rank": 2,
    "normalizedName": "濮阳",
    "normalizedValue": "河南濮阳",
    "normalizedSearchText": "河南濮阳濮阳河南"
  },
  {
    "code": "410902",
    "name": "华龙区",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 华龙区",
    "rank": 3,
    "normalizedName": "华龙",
    "normalizedValue": "河南濮阳华龙",
    "normalizedSearchText": "河南濮阳华龙华龙河南濮阳"
  },
  {
    "code": "410922",
    "name": "清丰县",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 清丰县",
    "rank": 3,
    "normalizedName": "清丰",
    "normalizedValue": "河南濮阳清丰",
    "normalizedSearchText": "河南濮阳清丰清丰河南濮阳"
  },
  {
    "code": "410923",
    "name": "南乐县",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 南乐县",
    "rank": 3,
    "normalizedName": "南乐",
    "normalizedValue": "河南濮阳南乐",
    "normalizedSearchText": "河南濮阳南乐南乐河南濮阳"
  },
  {
    "code": "410926",
    "name": "范县",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 范县",
    "rank": 3,
    "normalizedName": "范",
    "normalizedValue": "河南濮阳范",
    "normalizedSearchText": "河南濮阳范范河南濮阳"
  },
  {
    "code": "410927",
    "name": "台前县",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 台前县",
    "rank": 3,
    "normalizedName": "台前",
    "normalizedValue": "河南濮阳台前",
    "normalizedSearchText": "河南濮阳台前台前河南濮阳"
  },
  {
    "code": "410928",
    "name": "濮阳县",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 濮阳县",
    "rank": 3,
    "normalizedName": "濮阳",
    "normalizedValue": "河南濮阳濮阳",
    "normalizedSearchText": "河南濮阳濮阳濮阳河南濮阳"
  },
  {
    "code": "410901",
    "name": "市辖区",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南濮阳辖",
    "normalizedSearchText": "河南濮阳辖辖河南濮阳"
  },
  {
    "code": "410971",
    "name": "河南濮阳工业园区",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 河南濮阳工业园区",
    "rank": 3,
    "normalizedName": "河南濮阳工业园",
    "normalizedValue": "河南濮阳河南濮阳工业园",
    "normalizedSearchText": "河南濮阳河南濮阳工业园河南濮阳工业园河南濮阳"
  },
  {
    "code": "410972",
    "name": "濮阳经济技术开发区",
    "detail": "河南省 / 濮阳市",
    "value": "河南省 / 濮阳市 / 濮阳经济技术开发区",
    "rank": 3,
    "normalizedName": "濮阳经济技术开发",
    "normalizedValue": "河南濮阳濮阳经济技术开发",
    "normalizedSearchText": "河南濮阳濮阳经济技术开发濮阳经济技术开发河南濮阳"
  },
  {
    "code": "411000",
    "name": "许昌市",
    "detail": "河南省",
    "value": "河南省 / 许昌市",
    "rank": 2,
    "normalizedName": "许昌",
    "normalizedValue": "河南许昌",
    "normalizedSearchText": "河南许昌许昌河南"
  },
  {
    "code": "411002",
    "name": "魏都区",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 魏都区",
    "rank": 3,
    "normalizedName": "魏都",
    "normalizedValue": "河南许昌魏都",
    "normalizedSearchText": "河南许昌魏都魏都河南许昌"
  },
  {
    "code": "411003",
    "name": "建安区",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 建安区",
    "rank": 3,
    "normalizedName": "建安",
    "normalizedValue": "河南许昌建安",
    "normalizedSearchText": "河南许昌建安建安河南许昌"
  },
  {
    "code": "411024",
    "name": "鄢陵县",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 鄢陵县",
    "rank": 3,
    "normalizedName": "鄢陵",
    "normalizedValue": "河南许昌鄢陵",
    "normalizedSearchText": "河南许昌鄢陵鄢陵河南许昌"
  },
  {
    "code": "411025",
    "name": "襄城县",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 襄城县",
    "rank": 3,
    "normalizedName": "襄城",
    "normalizedValue": "河南许昌襄城",
    "normalizedSearchText": "河南许昌襄城襄城河南许昌"
  },
  {
    "code": "411081",
    "name": "禹州市",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 禹州市",
    "rank": 3,
    "normalizedName": "禹州",
    "normalizedValue": "河南许昌禹州",
    "normalizedSearchText": "河南许昌禹州禹州河南许昌"
  },
  {
    "code": "411082",
    "name": "长葛市",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 长葛市",
    "rank": 3,
    "normalizedName": "长葛",
    "normalizedValue": "河南许昌长葛",
    "normalizedSearchText": "河南许昌长葛长葛河南许昌"
  },
  {
    "code": "411001",
    "name": "市辖区",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南许昌辖",
    "normalizedSearchText": "河南许昌辖辖河南许昌"
  },
  {
    "code": "411071",
    "name": "许昌经济技术开发区",
    "detail": "河南省 / 许昌市",
    "value": "河南省 / 许昌市 / 许昌经济技术开发区",
    "rank": 3,
    "normalizedName": "许昌经济技术开发",
    "normalizedValue": "河南许昌许昌经济技术开发",
    "normalizedSearchText": "河南许昌许昌经济技术开发许昌经济技术开发河南许昌"
  },
  {
    "code": "411100",
    "name": "漯河市",
    "detail": "河南省",
    "value": "河南省 / 漯河市",
    "rank": 2,
    "normalizedName": "漯河",
    "normalizedValue": "河南漯河",
    "normalizedSearchText": "河南漯河漯河河南"
  },
  {
    "code": "411102",
    "name": "源汇区",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 源汇区",
    "rank": 3,
    "normalizedName": "源汇",
    "normalizedValue": "河南漯河源汇",
    "normalizedSearchText": "河南漯河源汇源汇河南漯河"
  },
  {
    "code": "411103",
    "name": "郾城区",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 郾城区",
    "rank": 3,
    "normalizedName": "郾城",
    "normalizedValue": "河南漯河郾城",
    "normalizedSearchText": "河南漯河郾城郾城河南漯河"
  },
  {
    "code": "411104",
    "name": "召陵区",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 召陵区",
    "rank": 3,
    "normalizedName": "召陵",
    "normalizedValue": "河南漯河召陵",
    "normalizedSearchText": "河南漯河召陵召陵河南漯河"
  },
  {
    "code": "411121",
    "name": "舞阳县",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 舞阳县",
    "rank": 3,
    "normalizedName": "舞阳",
    "normalizedValue": "河南漯河舞阳",
    "normalizedSearchText": "河南漯河舞阳舞阳河南漯河"
  },
  {
    "code": "411122",
    "name": "临颍县",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 临颍县",
    "rank": 3,
    "normalizedName": "临颍",
    "normalizedValue": "河南漯河临颍",
    "normalizedSearchText": "河南漯河临颍临颍河南漯河"
  },
  {
    "code": "411101",
    "name": "市辖区",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南漯河辖",
    "normalizedSearchText": "河南漯河辖辖河南漯河"
  },
  {
    "code": "411171",
    "name": "漯河经济技术开发区",
    "detail": "河南省 / 漯河市",
    "value": "河南省 / 漯河市 / 漯河经济技术开发区",
    "rank": 3,
    "normalizedName": "漯河经济技术开发",
    "normalizedValue": "河南漯河漯河经济技术开发",
    "normalizedSearchText": "河南漯河漯河经济技术开发漯河经济技术开发河南漯河"
  },
  {
    "code": "411200",
    "name": "三门峡市",
    "detail": "河南省",
    "value": "河南省 / 三门峡市",
    "rank": 2,
    "normalizedName": "三门峡",
    "normalizedValue": "河南三门峡",
    "normalizedSearchText": "河南三门峡三门峡河南"
  },
  {
    "code": "411202",
    "name": "湖滨区",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 湖滨区",
    "rank": 3,
    "normalizedName": "湖滨",
    "normalizedValue": "河南三门峡湖滨",
    "normalizedSearchText": "河南三门峡湖滨湖滨河南三门峡"
  },
  {
    "code": "411203",
    "name": "陕州区",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 陕州区",
    "rank": 3,
    "normalizedName": "陕州",
    "normalizedValue": "河南三门峡陕州",
    "normalizedSearchText": "河南三门峡陕州陕州河南三门峡"
  },
  {
    "code": "411221",
    "name": "渑池县",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 渑池县",
    "rank": 3,
    "normalizedName": "渑池",
    "normalizedValue": "河南三门峡渑池",
    "normalizedSearchText": "河南三门峡渑池渑池河南三门峡"
  },
  {
    "code": "411224",
    "name": "卢氏县",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 卢氏县",
    "rank": 3,
    "normalizedName": "卢氏",
    "normalizedValue": "河南三门峡卢氏",
    "normalizedSearchText": "河南三门峡卢氏卢氏河南三门峡"
  },
  {
    "code": "411281",
    "name": "义马市",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 义马市",
    "rank": 3,
    "normalizedName": "义马",
    "normalizedValue": "河南三门峡义马",
    "normalizedSearchText": "河南三门峡义马义马河南三门峡"
  },
  {
    "code": "411282",
    "name": "灵宝市",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 灵宝市",
    "rank": 3,
    "normalizedName": "灵宝",
    "normalizedValue": "河南三门峡灵宝",
    "normalizedSearchText": "河南三门峡灵宝灵宝河南三门峡"
  },
  {
    "code": "411201",
    "name": "市辖区",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南三门峡辖",
    "normalizedSearchText": "河南三门峡辖辖河南三门峡"
  },
  {
    "code": "411271",
    "name": "河南三门峡经济开发区",
    "detail": "河南省 / 三门峡市",
    "value": "河南省 / 三门峡市 / 河南三门峡经济开发区",
    "rank": 3,
    "normalizedName": "河南三门峡经济开发",
    "normalizedValue": "河南三门峡河南三门峡经济开发",
    "normalizedSearchText": "河南三门峡河南三门峡经济开发河南三门峡经济开发河南三门峡"
  },
  {
    "code": "411300",
    "name": "南阳市",
    "detail": "河南省",
    "value": "河南省 / 南阳市",
    "rank": 2,
    "normalizedName": "南阳",
    "normalizedValue": "河南南阳",
    "normalizedSearchText": "河南南阳南阳河南"
  },
  {
    "code": "411302",
    "name": "宛城区",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 宛城区",
    "rank": 3,
    "normalizedName": "宛城",
    "normalizedValue": "河南南阳宛城",
    "normalizedSearchText": "河南南阳宛城宛城河南南阳"
  },
  {
    "code": "411303",
    "name": "卧龙区",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 卧龙区",
    "rank": 3,
    "normalizedName": "卧龙",
    "normalizedValue": "河南南阳卧龙",
    "normalizedSearchText": "河南南阳卧龙卧龙河南南阳"
  },
  {
    "code": "411321",
    "name": "南召县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 南召县",
    "rank": 3,
    "normalizedName": "南召",
    "normalizedValue": "河南南阳南召",
    "normalizedSearchText": "河南南阳南召南召河南南阳"
  },
  {
    "code": "411322",
    "name": "方城县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 方城县",
    "rank": 3,
    "normalizedName": "方城",
    "normalizedValue": "河南南阳方城",
    "normalizedSearchText": "河南南阳方城方城河南南阳"
  },
  {
    "code": "411323",
    "name": "西峡县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 西峡县",
    "rank": 3,
    "normalizedName": "西峡",
    "normalizedValue": "河南南阳西峡",
    "normalizedSearchText": "河南南阳西峡西峡河南南阳"
  },
  {
    "code": "411324",
    "name": "镇平县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 镇平县",
    "rank": 3,
    "normalizedName": "平",
    "normalizedValue": "河南南阳平",
    "normalizedSearchText": "河南南阳平平河南南阳"
  },
  {
    "code": "411325",
    "name": "内乡县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 内乡县",
    "rank": 3,
    "normalizedName": "内",
    "normalizedValue": "河南南阳内",
    "normalizedSearchText": "河南南阳内内河南南阳"
  },
  {
    "code": "411326",
    "name": "淅川县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 淅川县",
    "rank": 3,
    "normalizedName": "淅川",
    "normalizedValue": "河南南阳淅川",
    "normalizedSearchText": "河南南阳淅川淅川河南南阳"
  },
  {
    "code": "411327",
    "name": "社旗县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 社旗县",
    "rank": 3,
    "normalizedName": "社",
    "normalizedValue": "河南南阳社",
    "normalizedSearchText": "河南南阳社社河南南阳"
  },
  {
    "code": "411328",
    "name": "唐河县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 唐河县",
    "rank": 3,
    "normalizedName": "唐河",
    "normalizedValue": "河南南阳唐河",
    "normalizedSearchText": "河南南阳唐河唐河河南南阳"
  },
  {
    "code": "411329",
    "name": "新野县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 新野县",
    "rank": 3,
    "normalizedName": "新野",
    "normalizedValue": "河南南阳新野",
    "normalizedSearchText": "河南南阳新野新野河南南阳"
  },
  {
    "code": "411330",
    "name": "桐柏县",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 桐柏县",
    "rank": 3,
    "normalizedName": "桐柏",
    "normalizedValue": "河南南阳桐柏",
    "normalizedSearchText": "河南南阳桐柏桐柏河南南阳"
  },
  {
    "code": "411381",
    "name": "邓州市",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 邓州市",
    "rank": 3,
    "normalizedName": "邓州",
    "normalizedValue": "河南南阳邓州",
    "normalizedSearchText": "河南南阳邓州邓州河南南阳"
  },
  {
    "code": "411301",
    "name": "市辖区",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南南阳辖",
    "normalizedSearchText": "河南南阳辖辖河南南阳"
  },
  {
    "code": "411371",
    "name": "南阳高新技术产业开发区",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 南阳高新技术产业开发区",
    "rank": 3,
    "normalizedName": "南阳高新技术产业开发",
    "normalizedValue": "河南南阳南阳高新技术产业开发",
    "normalizedSearchText": "河南南阳南阳高新技术产业开发南阳高新技术产业开发河南南阳"
  },
  {
    "code": "411372",
    "name": "南阳市城乡一体化示范区",
    "detail": "河南省 / 南阳市",
    "value": "河南省 / 南阳市 / 南阳市城乡一体化示范区",
    "rank": 3,
    "normalizedName": "南阳城一体化示范",
    "normalizedValue": "河南南阳南阳城一体化示范",
    "normalizedSearchText": "河南南阳南阳城一体化示范南阳城一体化示范河南南阳"
  },
  {
    "code": "411400",
    "name": "商丘市",
    "detail": "河南省",
    "value": "河南省 / 商丘市",
    "rank": 2,
    "normalizedName": "商丘",
    "normalizedValue": "河南商丘",
    "normalizedSearchText": "河南商丘商丘河南"
  },
  {
    "code": "411402",
    "name": "梁园区",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 梁园区",
    "rank": 3,
    "normalizedName": "梁园",
    "normalizedValue": "河南商丘梁园",
    "normalizedSearchText": "河南商丘梁园梁园河南商丘"
  },
  {
    "code": "411403",
    "name": "睢阳区",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 睢阳区",
    "rank": 3,
    "normalizedName": "睢阳",
    "normalizedValue": "河南商丘睢阳",
    "normalizedSearchText": "河南商丘睢阳睢阳河南商丘"
  },
  {
    "code": "411421",
    "name": "民权县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 民权县",
    "rank": 3,
    "normalizedName": "民权",
    "normalizedValue": "河南商丘民权",
    "normalizedSearchText": "河南商丘民权民权河南商丘"
  },
  {
    "code": "411422",
    "name": "睢县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 睢县",
    "rank": 3,
    "normalizedName": "睢",
    "normalizedValue": "河南商丘睢",
    "normalizedSearchText": "河南商丘睢睢河南商丘"
  },
  {
    "code": "411423",
    "name": "宁陵县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 宁陵县",
    "rank": 3,
    "normalizedName": "宁陵",
    "normalizedValue": "河南商丘宁陵",
    "normalizedSearchText": "河南商丘宁陵宁陵河南商丘"
  },
  {
    "code": "411424",
    "name": "柘城县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 柘城县",
    "rank": 3,
    "normalizedName": "柘城",
    "normalizedValue": "河南商丘柘城",
    "normalizedSearchText": "河南商丘柘城柘城河南商丘"
  },
  {
    "code": "411425",
    "name": "虞城县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 虞城县",
    "rank": 3,
    "normalizedName": "虞城",
    "normalizedValue": "河南商丘虞城",
    "normalizedSearchText": "河南商丘虞城虞城河南商丘"
  },
  {
    "code": "411426",
    "name": "夏邑县",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 夏邑县",
    "rank": 3,
    "normalizedName": "夏邑",
    "normalizedValue": "河南商丘夏邑",
    "normalizedSearchText": "河南商丘夏邑夏邑河南商丘"
  },
  {
    "code": "411481",
    "name": "永城市",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 永城市",
    "rank": 3,
    "normalizedName": "永城",
    "normalizedValue": "河南商丘永城",
    "normalizedSearchText": "河南商丘永城永城河南商丘"
  },
  {
    "code": "411401",
    "name": "市辖区",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南商丘辖",
    "normalizedSearchText": "河南商丘辖辖河南商丘"
  },
  {
    "code": "411471",
    "name": "豫东综合物流产业聚集区",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 豫东综合物流产业聚集区",
    "rank": 3,
    "normalizedName": "豫东综合物流产业聚集",
    "normalizedValue": "河南商丘豫东综合物流产业聚集",
    "normalizedSearchText": "河南商丘豫东综合物流产业聚集豫东综合物流产业聚集河南商丘"
  },
  {
    "code": "411472",
    "name": "河南商丘经济开发区",
    "detail": "河南省 / 商丘市",
    "value": "河南省 / 商丘市 / 河南商丘经济开发区",
    "rank": 3,
    "normalizedName": "河南商丘经济开发",
    "normalizedValue": "河南商丘河南商丘经济开发",
    "normalizedSearchText": "河南商丘河南商丘经济开发河南商丘经济开发河南商丘"
  },
  {
    "code": "411500",
    "name": "信阳市",
    "detail": "河南省",
    "value": "河南省 / 信阳市",
    "rank": 2,
    "normalizedName": "信阳",
    "normalizedValue": "河南信阳",
    "normalizedSearchText": "河南信阳信阳河南"
  },
  {
    "code": "411502",
    "name": "浉河区",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 浉河区",
    "rank": 3,
    "normalizedName": "浉河",
    "normalizedValue": "河南信阳浉河",
    "normalizedSearchText": "河南信阳浉河浉河河南信阳"
  },
  {
    "code": "411503",
    "name": "平桥区",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 平桥区",
    "rank": 3,
    "normalizedName": "平桥",
    "normalizedValue": "河南信阳平桥",
    "normalizedSearchText": "河南信阳平桥平桥河南信阳"
  },
  {
    "code": "411521",
    "name": "罗山县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 罗山县",
    "rank": 3,
    "normalizedName": "罗山",
    "normalizedValue": "河南信阳罗山",
    "normalizedSearchText": "河南信阳罗山罗山河南信阳"
  },
  {
    "code": "411522",
    "name": "光山县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 光山县",
    "rank": 3,
    "normalizedName": "光山",
    "normalizedValue": "河南信阳光山",
    "normalizedSearchText": "河南信阳光山光山河南信阳"
  },
  {
    "code": "411523",
    "name": "新县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 新县",
    "rank": 3,
    "normalizedName": "新",
    "normalizedValue": "河南信阳新",
    "normalizedSearchText": "河南信阳新新河南信阳"
  },
  {
    "code": "411524",
    "name": "商城县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 商城县",
    "rank": 3,
    "normalizedName": "商城",
    "normalizedValue": "河南信阳商城",
    "normalizedSearchText": "河南信阳商城商城河南信阳"
  },
  {
    "code": "411525",
    "name": "固始县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 固始县",
    "rank": 3,
    "normalizedName": "固始",
    "normalizedValue": "河南信阳固始",
    "normalizedSearchText": "河南信阳固始固始河南信阳"
  },
  {
    "code": "411526",
    "name": "潢川县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 潢川县",
    "rank": 3,
    "normalizedName": "潢川",
    "normalizedValue": "河南信阳潢川",
    "normalizedSearchText": "河南信阳潢川潢川河南信阳"
  },
  {
    "code": "411527",
    "name": "淮滨县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 淮滨县",
    "rank": 3,
    "normalizedName": "淮滨",
    "normalizedValue": "河南信阳淮滨",
    "normalizedSearchText": "河南信阳淮滨淮滨河南信阳"
  },
  {
    "code": "411528",
    "name": "息县",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 息县",
    "rank": 3,
    "normalizedName": "息",
    "normalizedValue": "河南信阳息",
    "normalizedSearchText": "河南信阳息息河南信阳"
  },
  {
    "code": "411501",
    "name": "市辖区",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南信阳辖",
    "normalizedSearchText": "河南信阳辖辖河南信阳"
  },
  {
    "code": "411571",
    "name": "信阳高新技术产业开发区",
    "detail": "河南省 / 信阳市",
    "value": "河南省 / 信阳市 / 信阳高新技术产业开发区",
    "rank": 3,
    "normalizedName": "信阳高新技术产业开发",
    "normalizedValue": "河南信阳信阳高新技术产业开发",
    "normalizedSearchText": "河南信阳信阳高新技术产业开发信阳高新技术产业开发河南信阳"
  },
  {
    "code": "411600",
    "name": "周口市",
    "detail": "河南省",
    "value": "河南省 / 周口市",
    "rank": 2,
    "normalizedName": "周口",
    "normalizedValue": "河南周口",
    "normalizedSearchText": "河南周口周口河南"
  },
  {
    "code": "411602",
    "name": "川汇区",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 川汇区",
    "rank": 3,
    "normalizedName": "川汇",
    "normalizedValue": "河南周口川汇",
    "normalizedSearchText": "河南周口川汇川汇河南周口"
  },
  {
    "code": "411603",
    "name": "淮阳区",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 淮阳区",
    "rank": 3,
    "normalizedName": "淮阳",
    "normalizedValue": "河南周口淮阳",
    "normalizedSearchText": "河南周口淮阳淮阳河南周口"
  },
  {
    "code": "411621",
    "name": "扶沟县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 扶沟县",
    "rank": 3,
    "normalizedName": "扶沟",
    "normalizedValue": "河南周口扶沟",
    "normalizedSearchText": "河南周口扶沟扶沟河南周口"
  },
  {
    "code": "411622",
    "name": "西华县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 西华县",
    "rank": 3,
    "normalizedName": "西华",
    "normalizedValue": "河南周口西华",
    "normalizedSearchText": "河南周口西华西华河南周口"
  },
  {
    "code": "411623",
    "name": "商水县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 商水县",
    "rank": 3,
    "normalizedName": "商水",
    "normalizedValue": "河南周口商水",
    "normalizedSearchText": "河南周口商水商水河南周口"
  },
  {
    "code": "411624",
    "name": "沈丘县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 沈丘县",
    "rank": 3,
    "normalizedName": "沈丘",
    "normalizedValue": "河南周口沈丘",
    "normalizedSearchText": "河南周口沈丘沈丘河南周口"
  },
  {
    "code": "411625",
    "name": "郸城县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 郸城县",
    "rank": 3,
    "normalizedName": "郸城",
    "normalizedValue": "河南周口郸城",
    "normalizedSearchText": "河南周口郸城郸城河南周口"
  },
  {
    "code": "411627",
    "name": "太康县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 太康县",
    "rank": 3,
    "normalizedName": "太康",
    "normalizedValue": "河南周口太康",
    "normalizedSearchText": "河南周口太康太康河南周口"
  },
  {
    "code": "411628",
    "name": "鹿邑县",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 鹿邑县",
    "rank": 3,
    "normalizedName": "鹿邑",
    "normalizedValue": "河南周口鹿邑",
    "normalizedSearchText": "河南周口鹿邑鹿邑河南周口"
  },
  {
    "code": "411681",
    "name": "项城市",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 项城市",
    "rank": 3,
    "normalizedName": "项城",
    "normalizedValue": "河南周口项城",
    "normalizedSearchText": "河南周口项城项城河南周口"
  },
  {
    "code": "411601",
    "name": "市辖区",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南周口辖",
    "normalizedSearchText": "河南周口辖辖河南周口"
  },
  {
    "code": "411671",
    "name": "河南周口经济开发区",
    "detail": "河南省 / 周口市",
    "value": "河南省 / 周口市 / 河南周口经济开发区",
    "rank": 3,
    "normalizedName": "河南周口经济开发",
    "normalizedValue": "河南周口河南周口经济开发",
    "normalizedSearchText": "河南周口河南周口经济开发河南周口经济开发河南周口"
  },
  {
    "code": "411700",
    "name": "驻马店市",
    "detail": "河南省",
    "value": "河南省 / 驻马店市",
    "rank": 2,
    "normalizedName": "驻马店",
    "normalizedValue": "河南驻马店",
    "normalizedSearchText": "河南驻马店驻马店河南"
  },
  {
    "code": "411702",
    "name": "驿城区",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 驿城区",
    "rank": 3,
    "normalizedName": "驿城",
    "normalizedValue": "河南驻马店驿城",
    "normalizedSearchText": "河南驻马店驿城驿城河南驻马店"
  },
  {
    "code": "411721",
    "name": "西平县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 西平县",
    "rank": 3,
    "normalizedName": "西平",
    "normalizedValue": "河南驻马店西平",
    "normalizedSearchText": "河南驻马店西平西平河南驻马店"
  },
  {
    "code": "411722",
    "name": "上蔡县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 上蔡县",
    "rank": 3,
    "normalizedName": "上蔡",
    "normalizedValue": "河南驻马店上蔡",
    "normalizedSearchText": "河南驻马店上蔡上蔡河南驻马店"
  },
  {
    "code": "411723",
    "name": "平舆县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 平舆县",
    "rank": 3,
    "normalizedName": "平舆",
    "normalizedValue": "河南驻马店平舆",
    "normalizedSearchText": "河南驻马店平舆平舆河南驻马店"
  },
  {
    "code": "411724",
    "name": "正阳县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 正阳县",
    "rank": 3,
    "normalizedName": "正阳",
    "normalizedValue": "河南驻马店正阳",
    "normalizedSearchText": "河南驻马店正阳正阳河南驻马店"
  },
  {
    "code": "411725",
    "name": "确山县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 确山县",
    "rank": 3,
    "normalizedName": "确山",
    "normalizedValue": "河南驻马店确山",
    "normalizedSearchText": "河南驻马店确山确山河南驻马店"
  },
  {
    "code": "411726",
    "name": "泌阳县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 泌阳县",
    "rank": 3,
    "normalizedName": "泌阳",
    "normalizedValue": "河南驻马店泌阳",
    "normalizedSearchText": "河南驻马店泌阳泌阳河南驻马店"
  },
  {
    "code": "411727",
    "name": "汝南县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 汝南县",
    "rank": 3,
    "normalizedName": "汝南",
    "normalizedValue": "河南驻马店汝南",
    "normalizedSearchText": "河南驻马店汝南汝南河南驻马店"
  },
  {
    "code": "411728",
    "name": "遂平县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 遂平县",
    "rank": 3,
    "normalizedName": "遂平",
    "normalizedValue": "河南驻马店遂平",
    "normalizedSearchText": "河南驻马店遂平遂平河南驻马店"
  },
  {
    "code": "411729",
    "name": "新蔡县",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 新蔡县",
    "rank": 3,
    "normalizedName": "新蔡",
    "normalizedValue": "河南驻马店新蔡",
    "normalizedSearchText": "河南驻马店新蔡新蔡河南驻马店"
  },
  {
    "code": "411701",
    "name": "市辖区",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "河南驻马店辖",
    "normalizedSearchText": "河南驻马店辖辖河南驻马店"
  },
  {
    "code": "411771",
    "name": "河南驻马店经济开发区",
    "detail": "河南省 / 驻马店市",
    "value": "河南省 / 驻马店市 / 河南驻马店经济开发区",
    "rank": 3,
    "normalizedName": "河南驻马店经济开发",
    "normalizedValue": "河南驻马店河南驻马店经济开发",
    "normalizedSearchText": "河南驻马店河南驻马店经济开发河南驻马店经济开发河南驻马店"
  },
  {
    "code": "419000",
    "name": "河南省-省直辖县级行政区划",
    "detail": "河南省",
    "value": "河南省 / 河南省-省直辖县级行政区划",
    "rank": 2,
    "normalizedName": "河南直辖级行政划",
    "normalizedValue": "河南河南直辖级行政划",
    "normalizedSearchText": "河南河南直辖级行政划河南直辖级行政划河南"
  },
  {
    "code": "419001",
    "name": "济源市",
    "detail": "河南省 / 河南省-省直辖县级行政区划",
    "value": "河南省 / 河南省-省直辖县级行政区划 / 济源市",
    "rank": 3,
    "normalizedName": "济源",
    "normalizedValue": "河南河南直辖级行政划济源",
    "normalizedSearchText": "河南河南直辖级行政划济源济源河南河南直辖级行政划"
  },
  {
    "code": "420000",
    "name": "湖北省",
    "detail": "?????",
    "value": "湖北省",
    "rank": 1,
    "normalizedName": "湖北",
    "normalizedValue": "湖北",
    "normalizedSearchText": "湖北湖北"
  },
  {
    "code": "420100",
    "name": "武汉市",
    "detail": "湖北省",
    "value": "湖北省 / 武汉市",
    "rank": 2,
    "normalizedName": "武汉",
    "normalizedValue": "湖北武汉",
    "normalizedSearchText": "湖北武汉武汉湖北"
  },
  {
    "code": "420102",
    "name": "江岸区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 江岸区",
    "rank": 3,
    "normalizedName": "江岸",
    "normalizedValue": "湖北武汉江岸",
    "normalizedSearchText": "湖北武汉江岸江岸湖北武汉"
  },
  {
    "code": "420103",
    "name": "江汉区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 江汉区",
    "rank": 3,
    "normalizedName": "江汉",
    "normalizedValue": "湖北武汉江汉",
    "normalizedSearchText": "湖北武汉江汉江汉湖北武汉"
  },
  {
    "code": "420104",
    "name": "硚口区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 硚口区",
    "rank": 3,
    "normalizedName": "硚口",
    "normalizedValue": "湖北武汉硚口",
    "normalizedSearchText": "湖北武汉硚口硚口湖北武汉"
  },
  {
    "code": "420105",
    "name": "汉阳区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 汉阳区",
    "rank": 3,
    "normalizedName": "汉阳",
    "normalizedValue": "湖北武汉汉阳",
    "normalizedSearchText": "湖北武汉汉阳汉阳湖北武汉"
  },
  {
    "code": "420106",
    "name": "武昌区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 武昌区",
    "rank": 3,
    "normalizedName": "武昌",
    "normalizedValue": "湖北武汉武昌",
    "normalizedSearchText": "湖北武汉武昌武昌湖北武汉"
  },
  {
    "code": "420107",
    "name": "青山区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 青山区",
    "rank": 3,
    "normalizedName": "青山",
    "normalizedValue": "湖北武汉青山",
    "normalizedSearchText": "湖北武汉青山青山湖北武汉"
  },
  {
    "code": "420111",
    "name": "洪山区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 洪山区",
    "rank": 3,
    "normalizedName": "洪山",
    "normalizedValue": "湖北武汉洪山",
    "normalizedSearchText": "湖北武汉洪山洪山湖北武汉"
  },
  {
    "code": "420112",
    "name": "东西湖区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 东西湖区",
    "rank": 3,
    "normalizedName": "东西湖",
    "normalizedValue": "湖北武汉东西湖",
    "normalizedSearchText": "湖北武汉东西湖东西湖湖北武汉"
  },
  {
    "code": "420113",
    "name": "汉南区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 汉南区",
    "rank": 3,
    "normalizedName": "汉南",
    "normalizedValue": "湖北武汉汉南",
    "normalizedSearchText": "湖北武汉汉南汉南湖北武汉"
  },
  {
    "code": "420114",
    "name": "蔡甸区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 蔡甸区",
    "rank": 3,
    "normalizedName": "蔡甸",
    "normalizedValue": "湖北武汉蔡甸",
    "normalizedSearchText": "湖北武汉蔡甸蔡甸湖北武汉"
  },
  {
    "code": "420115",
    "name": "江夏区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 江夏区",
    "rank": 3,
    "normalizedName": "江夏",
    "normalizedValue": "湖北武汉江夏",
    "normalizedSearchText": "湖北武汉江夏江夏湖北武汉"
  },
  {
    "code": "420116",
    "name": "黄陂区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 黄陂区",
    "rank": 3,
    "normalizedName": "黄陂",
    "normalizedValue": "湖北武汉黄陂",
    "normalizedSearchText": "湖北武汉黄陂黄陂湖北武汉"
  },
  {
    "code": "420117",
    "name": "新洲区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 新洲区",
    "rank": 3,
    "normalizedName": "新洲",
    "normalizedValue": "湖北武汉新洲",
    "normalizedSearchText": "湖北武汉新洲新洲湖北武汉"
  },
  {
    "code": "420101",
    "name": "市辖区",
    "detail": "湖北省 / 武汉市",
    "value": "湖北省 / 武汉市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北武汉辖",
    "normalizedSearchText": "湖北武汉辖辖湖北武汉"
  },
  {
    "code": "420200",
    "name": "黄石市",
    "detail": "湖北省",
    "value": "湖北省 / 黄石市",
    "rank": 2,
    "normalizedName": "黄石",
    "normalizedValue": "湖北黄石",
    "normalizedSearchText": "湖北黄石黄石湖北"
  },
  {
    "code": "420202",
    "name": "黄石港区",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 黄石港区",
    "rank": 3,
    "normalizedName": "黄石港",
    "normalizedValue": "湖北黄石黄石港",
    "normalizedSearchText": "湖北黄石黄石港黄石港湖北黄石"
  },
  {
    "code": "420203",
    "name": "西塞山区",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 西塞山区",
    "rank": 3,
    "normalizedName": "西塞山",
    "normalizedValue": "湖北黄石西塞山",
    "normalizedSearchText": "湖北黄石西塞山西塞山湖北黄石"
  },
  {
    "code": "420204",
    "name": "下陆区",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 下陆区",
    "rank": 3,
    "normalizedName": "下陆",
    "normalizedValue": "湖北黄石下陆",
    "normalizedSearchText": "湖北黄石下陆下陆湖北黄石"
  },
  {
    "code": "420205",
    "name": "铁山区",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 铁山区",
    "rank": 3,
    "normalizedName": "铁山",
    "normalizedValue": "湖北黄石铁山",
    "normalizedSearchText": "湖北黄石铁山铁山湖北黄石"
  },
  {
    "code": "420222",
    "name": "阳新县",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 阳新县",
    "rank": 3,
    "normalizedName": "阳新",
    "normalizedValue": "湖北黄石阳新",
    "normalizedSearchText": "湖北黄石阳新阳新湖北黄石"
  },
  {
    "code": "420281",
    "name": "大冶市",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 大冶市",
    "rank": 3,
    "normalizedName": "大冶",
    "normalizedValue": "湖北黄石大冶",
    "normalizedSearchText": "湖北黄石大冶大冶湖北黄石"
  },
  {
    "code": "420201",
    "name": "市辖区",
    "detail": "湖北省 / 黄石市",
    "value": "湖北省 / 黄石市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北黄石辖",
    "normalizedSearchText": "湖北黄石辖辖湖北黄石"
  },
  {
    "code": "420300",
    "name": "十堰市",
    "detail": "湖北省",
    "value": "湖北省 / 十堰市",
    "rank": 2,
    "normalizedName": "十堰",
    "normalizedValue": "湖北十堰",
    "normalizedSearchText": "湖北十堰十堰湖北"
  },
  {
    "code": "420302",
    "name": "茅箭区",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 茅箭区",
    "rank": 3,
    "normalizedName": "茅箭",
    "normalizedValue": "湖北十堰茅箭",
    "normalizedSearchText": "湖北十堰茅箭茅箭湖北十堰"
  },
  {
    "code": "420303",
    "name": "张湾区",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 张湾区",
    "rank": 3,
    "normalizedName": "张湾",
    "normalizedValue": "湖北十堰张湾",
    "normalizedSearchText": "湖北十堰张湾张湾湖北十堰"
  },
  {
    "code": "420304",
    "name": "郧阳区",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 郧阳区",
    "rank": 3,
    "normalizedName": "郧阳",
    "normalizedValue": "湖北十堰郧阳",
    "normalizedSearchText": "湖北十堰郧阳郧阳湖北十堰"
  },
  {
    "code": "420322",
    "name": "郧西县",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 郧西县",
    "rank": 3,
    "normalizedName": "郧西",
    "normalizedValue": "湖北十堰郧西",
    "normalizedSearchText": "湖北十堰郧西郧西湖北十堰"
  },
  {
    "code": "420323",
    "name": "竹山县",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 竹山县",
    "rank": 3,
    "normalizedName": "竹山",
    "normalizedValue": "湖北十堰竹山",
    "normalizedSearchText": "湖北十堰竹山竹山湖北十堰"
  },
  {
    "code": "420324",
    "name": "竹溪县",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 竹溪县",
    "rank": 3,
    "normalizedName": "竹溪",
    "normalizedValue": "湖北十堰竹溪",
    "normalizedSearchText": "湖北十堰竹溪竹溪湖北十堰"
  },
  {
    "code": "420325",
    "name": "房县",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 房县",
    "rank": 3,
    "normalizedName": "房",
    "normalizedValue": "湖北十堰房",
    "normalizedSearchText": "湖北十堰房房湖北十堰"
  },
  {
    "code": "420381",
    "name": "丹江口市",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 丹江口市",
    "rank": 3,
    "normalizedName": "丹江口",
    "normalizedValue": "湖北十堰丹江口",
    "normalizedSearchText": "湖北十堰丹江口丹江口湖北十堰"
  },
  {
    "code": "420301",
    "name": "市辖区",
    "detail": "湖北省 / 十堰市",
    "value": "湖北省 / 十堰市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北十堰辖",
    "normalizedSearchText": "湖北十堰辖辖湖北十堰"
  },
  {
    "code": "420500",
    "name": "宜昌市",
    "detail": "湖北省",
    "value": "湖北省 / 宜昌市",
    "rank": 2,
    "normalizedName": "宜昌",
    "normalizedValue": "湖北宜昌",
    "normalizedSearchText": "湖北宜昌宜昌湖北"
  },
  {
    "code": "420502",
    "name": "西陵区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 西陵区",
    "rank": 3,
    "normalizedName": "西陵",
    "normalizedValue": "湖北宜昌西陵",
    "normalizedSearchText": "湖北宜昌西陵西陵湖北宜昌"
  },
  {
    "code": "420503",
    "name": "伍家岗区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 伍家岗区",
    "rank": 3,
    "normalizedName": "伍家岗",
    "normalizedValue": "湖北宜昌伍家岗",
    "normalizedSearchText": "湖北宜昌伍家岗伍家岗湖北宜昌"
  },
  {
    "code": "420504",
    "name": "点军区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 点军区",
    "rank": 3,
    "normalizedName": "点军",
    "normalizedValue": "湖北宜昌点军",
    "normalizedSearchText": "湖北宜昌点军点军湖北宜昌"
  },
  {
    "code": "420505",
    "name": "猇亭区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 猇亭区",
    "rank": 3,
    "normalizedName": "猇亭",
    "normalizedValue": "湖北宜昌猇亭",
    "normalizedSearchText": "湖北宜昌猇亭猇亭湖北宜昌"
  },
  {
    "code": "420506",
    "name": "夷陵区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 夷陵区",
    "rank": 3,
    "normalizedName": "夷陵",
    "normalizedValue": "湖北宜昌夷陵",
    "normalizedSearchText": "湖北宜昌夷陵夷陵湖北宜昌"
  },
  {
    "code": "420525",
    "name": "远安县",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 远安县",
    "rank": 3,
    "normalizedName": "远安",
    "normalizedValue": "湖北宜昌远安",
    "normalizedSearchText": "湖北宜昌远安远安湖北宜昌"
  },
  {
    "code": "420526",
    "name": "兴山县",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 兴山县",
    "rank": 3,
    "normalizedName": "兴山",
    "normalizedValue": "湖北宜昌兴山",
    "normalizedSearchText": "湖北宜昌兴山兴山湖北宜昌"
  },
  {
    "code": "420527",
    "name": "秭归县",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 秭归县",
    "rank": 3,
    "normalizedName": "秭归",
    "normalizedValue": "湖北宜昌秭归",
    "normalizedSearchText": "湖北宜昌秭归秭归湖北宜昌"
  },
  {
    "code": "420528",
    "name": "长阳土家族自治县",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 长阳土家族自治县",
    "rank": 3,
    "normalizedName": "长阳土家族自治",
    "normalizedValue": "湖北宜昌长阳土家族自治",
    "normalizedSearchText": "湖北宜昌长阳土家族自治长阳土家族自治湖北宜昌"
  },
  {
    "code": "420529",
    "name": "五峰土家族自治县",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 五峰土家族自治县",
    "rank": 3,
    "normalizedName": "五峰土家族自治",
    "normalizedValue": "湖北宜昌五峰土家族自治",
    "normalizedSearchText": "湖北宜昌五峰土家族自治五峰土家族自治湖北宜昌"
  },
  {
    "code": "420581",
    "name": "宜都市",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 宜都市",
    "rank": 3,
    "normalizedName": "宜都",
    "normalizedValue": "湖北宜昌宜都",
    "normalizedSearchText": "湖北宜昌宜都宜都湖北宜昌"
  },
  {
    "code": "420582",
    "name": "当阳市",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 当阳市",
    "rank": 3,
    "normalizedName": "当阳",
    "normalizedValue": "湖北宜昌当阳",
    "normalizedSearchText": "湖北宜昌当阳当阳湖北宜昌"
  },
  {
    "code": "420583",
    "name": "枝江市",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 枝江市",
    "rank": 3,
    "normalizedName": "枝江",
    "normalizedValue": "湖北宜昌枝江",
    "normalizedSearchText": "湖北宜昌枝江枝江湖北宜昌"
  },
  {
    "code": "420501",
    "name": "市辖区",
    "detail": "湖北省 / 宜昌市",
    "value": "湖北省 / 宜昌市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北宜昌辖",
    "normalizedSearchText": "湖北宜昌辖辖湖北宜昌"
  },
  {
    "code": "420600",
    "name": "襄阳市",
    "detail": "湖北省",
    "value": "湖北省 / 襄阳市",
    "rank": 2,
    "normalizedName": "襄阳",
    "normalizedValue": "湖北襄阳",
    "normalizedSearchText": "湖北襄阳襄阳湖北"
  },
  {
    "code": "420602",
    "name": "襄城区",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 襄城区",
    "rank": 3,
    "normalizedName": "襄城",
    "normalizedValue": "湖北襄阳襄城",
    "normalizedSearchText": "湖北襄阳襄城襄城湖北襄阳"
  },
  {
    "code": "420606",
    "name": "樊城区",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 樊城区",
    "rank": 3,
    "normalizedName": "樊城",
    "normalizedValue": "湖北襄阳樊城",
    "normalizedSearchText": "湖北襄阳樊城樊城湖北襄阳"
  },
  {
    "code": "420607",
    "name": "襄州区",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 襄州区",
    "rank": 3,
    "normalizedName": "襄州",
    "normalizedValue": "湖北襄阳襄州",
    "normalizedSearchText": "湖北襄阳襄州襄州湖北襄阳"
  },
  {
    "code": "420624",
    "name": "南漳县",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 南漳县",
    "rank": 3,
    "normalizedName": "南漳",
    "normalizedValue": "湖北襄阳南漳",
    "normalizedSearchText": "湖北襄阳南漳南漳湖北襄阳"
  },
  {
    "code": "420625",
    "name": "谷城县",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 谷城县",
    "rank": 3,
    "normalizedName": "谷城",
    "normalizedValue": "湖北襄阳谷城",
    "normalizedSearchText": "湖北襄阳谷城谷城湖北襄阳"
  },
  {
    "code": "420626",
    "name": "保康县",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 保康县",
    "rank": 3,
    "normalizedName": "保康",
    "normalizedValue": "湖北襄阳保康",
    "normalizedSearchText": "湖北襄阳保康保康湖北襄阳"
  },
  {
    "code": "420682",
    "name": "老河口市",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 老河口市",
    "rank": 3,
    "normalizedName": "老河口",
    "normalizedValue": "湖北襄阳老河口",
    "normalizedSearchText": "湖北襄阳老河口老河口湖北襄阳"
  },
  {
    "code": "420683",
    "name": "枣阳市",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 枣阳市",
    "rank": 3,
    "normalizedName": "枣阳",
    "normalizedValue": "湖北襄阳枣阳",
    "normalizedSearchText": "湖北襄阳枣阳枣阳湖北襄阳"
  },
  {
    "code": "420684",
    "name": "宜城市",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 宜城市",
    "rank": 3,
    "normalizedName": "宜城",
    "normalizedValue": "湖北襄阳宜城",
    "normalizedSearchText": "湖北襄阳宜城宜城湖北襄阳"
  },
  {
    "code": "420601",
    "name": "市辖区",
    "detail": "湖北省 / 襄阳市",
    "value": "湖北省 / 襄阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北襄阳辖",
    "normalizedSearchText": "湖北襄阳辖辖湖北襄阳"
  },
  {
    "code": "420700",
    "name": "鄂州市",
    "detail": "湖北省",
    "value": "湖北省 / 鄂州市",
    "rank": 2,
    "normalizedName": "鄂州",
    "normalizedValue": "湖北鄂州",
    "normalizedSearchText": "湖北鄂州鄂州湖北"
  },
  {
    "code": "420702",
    "name": "梁子湖区",
    "detail": "湖北省 / 鄂州市",
    "value": "湖北省 / 鄂州市 / 梁子湖区",
    "rank": 3,
    "normalizedName": "梁子湖",
    "normalizedValue": "湖北鄂州梁子湖",
    "normalizedSearchText": "湖北鄂州梁子湖梁子湖湖北鄂州"
  },
  {
    "code": "420703",
    "name": "华容区",
    "detail": "湖北省 / 鄂州市",
    "value": "湖北省 / 鄂州市 / 华容区",
    "rank": 3,
    "normalizedName": "华容",
    "normalizedValue": "湖北鄂州华容",
    "normalizedSearchText": "湖北鄂州华容华容湖北鄂州"
  },
  {
    "code": "420704",
    "name": "鄂城区",
    "detail": "湖北省 / 鄂州市",
    "value": "湖北省 / 鄂州市 / 鄂城区",
    "rank": 3,
    "normalizedName": "鄂城",
    "normalizedValue": "湖北鄂州鄂城",
    "normalizedSearchText": "湖北鄂州鄂城鄂城湖北鄂州"
  },
  {
    "code": "420701",
    "name": "市辖区",
    "detail": "湖北省 / 鄂州市",
    "value": "湖北省 / 鄂州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北鄂州辖",
    "normalizedSearchText": "湖北鄂州辖辖湖北鄂州"
  },
  {
    "code": "420800",
    "name": "荆门市",
    "detail": "湖北省",
    "value": "湖北省 / 荆门市",
    "rank": 2,
    "normalizedName": "荆门",
    "normalizedValue": "湖北荆门",
    "normalizedSearchText": "湖北荆门荆门湖北"
  },
  {
    "code": "420802",
    "name": "东宝区",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 东宝区",
    "rank": 3,
    "normalizedName": "东宝",
    "normalizedValue": "湖北荆门东宝",
    "normalizedSearchText": "湖北荆门东宝东宝湖北荆门"
  },
  {
    "code": "420804",
    "name": "掇刀区",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 掇刀区",
    "rank": 3,
    "normalizedName": "掇刀",
    "normalizedValue": "湖北荆门掇刀",
    "normalizedSearchText": "湖北荆门掇刀掇刀湖北荆门"
  },
  {
    "code": "420822",
    "name": "沙洋县",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 沙洋县",
    "rank": 3,
    "normalizedName": "沙洋",
    "normalizedValue": "湖北荆门沙洋",
    "normalizedSearchText": "湖北荆门沙洋沙洋湖北荆门"
  },
  {
    "code": "420881",
    "name": "钟祥市",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 钟祥市",
    "rank": 3,
    "normalizedName": "钟祥",
    "normalizedValue": "湖北荆门钟祥",
    "normalizedSearchText": "湖北荆门钟祥钟祥湖北荆门"
  },
  {
    "code": "420882",
    "name": "京山市",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 京山市",
    "rank": 3,
    "normalizedName": "京山",
    "normalizedValue": "湖北荆门京山",
    "normalizedSearchText": "湖北荆门京山京山湖北荆门"
  },
  {
    "code": "420801",
    "name": "市辖区",
    "detail": "湖北省 / 荆门市",
    "value": "湖北省 / 荆门市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北荆门辖",
    "normalizedSearchText": "湖北荆门辖辖湖北荆门"
  },
  {
    "code": "420900",
    "name": "孝感市",
    "detail": "湖北省",
    "value": "湖北省 / 孝感市",
    "rank": 2,
    "normalizedName": "孝感",
    "normalizedValue": "湖北孝感",
    "normalizedSearchText": "湖北孝感孝感湖北"
  },
  {
    "code": "420902",
    "name": "孝南区",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 孝南区",
    "rank": 3,
    "normalizedName": "孝南",
    "normalizedValue": "湖北孝感孝南",
    "normalizedSearchText": "湖北孝感孝南孝南湖北孝感"
  },
  {
    "code": "420921",
    "name": "孝昌县",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 孝昌县",
    "rank": 3,
    "normalizedName": "孝昌",
    "normalizedValue": "湖北孝感孝昌",
    "normalizedSearchText": "湖北孝感孝昌孝昌湖北孝感"
  },
  {
    "code": "420922",
    "name": "大悟县",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 大悟县",
    "rank": 3,
    "normalizedName": "大悟",
    "normalizedValue": "湖北孝感大悟",
    "normalizedSearchText": "湖北孝感大悟大悟湖北孝感"
  },
  {
    "code": "420923",
    "name": "云梦县",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 云梦县",
    "rank": 3,
    "normalizedName": "云梦",
    "normalizedValue": "湖北孝感云梦",
    "normalizedSearchText": "湖北孝感云梦云梦湖北孝感"
  },
  {
    "code": "420981",
    "name": "应城市",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 应城市",
    "rank": 3,
    "normalizedName": "应城",
    "normalizedValue": "湖北孝感应城",
    "normalizedSearchText": "湖北孝感应城应城湖北孝感"
  },
  {
    "code": "420982",
    "name": "安陆市",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 安陆市",
    "rank": 3,
    "normalizedName": "安陆",
    "normalizedValue": "湖北孝感安陆",
    "normalizedSearchText": "湖北孝感安陆安陆湖北孝感"
  },
  {
    "code": "420984",
    "name": "汉川市",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 汉川市",
    "rank": 3,
    "normalizedName": "汉川",
    "normalizedValue": "湖北孝感汉川",
    "normalizedSearchText": "湖北孝感汉川汉川湖北孝感"
  },
  {
    "code": "420901",
    "name": "市辖区",
    "detail": "湖北省 / 孝感市",
    "value": "湖北省 / 孝感市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北孝感辖",
    "normalizedSearchText": "湖北孝感辖辖湖北孝感"
  },
  {
    "code": "421000",
    "name": "荆州市",
    "detail": "湖北省",
    "value": "湖北省 / 荆州市",
    "rank": 2,
    "normalizedName": "荆州",
    "normalizedValue": "湖北荆州",
    "normalizedSearchText": "湖北荆州荆州湖北"
  },
  {
    "code": "421002",
    "name": "沙市区",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 沙市区",
    "rank": 3,
    "normalizedName": "沙",
    "normalizedValue": "湖北荆州沙",
    "normalizedSearchText": "湖北荆州沙沙湖北荆州"
  },
  {
    "code": "421003",
    "name": "荆州区",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 荆州区",
    "rank": 3,
    "normalizedName": "荆州",
    "normalizedValue": "湖北荆州荆州",
    "normalizedSearchText": "湖北荆州荆州荆州湖北荆州"
  },
  {
    "code": "421022",
    "name": "公安县",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 公安县",
    "rank": 3,
    "normalizedName": "公安",
    "normalizedValue": "湖北荆州公安",
    "normalizedSearchText": "湖北荆州公安公安湖北荆州"
  },
  {
    "code": "421024",
    "name": "江陵县",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 江陵县",
    "rank": 3,
    "normalizedName": "江陵",
    "normalizedValue": "湖北荆州江陵",
    "normalizedSearchText": "湖北荆州江陵江陵湖北荆州"
  },
  {
    "code": "421081",
    "name": "石首市",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 石首市",
    "rank": 3,
    "normalizedName": "石首",
    "normalizedValue": "湖北荆州石首",
    "normalizedSearchText": "湖北荆州石首石首湖北荆州"
  },
  {
    "code": "421083",
    "name": "洪湖市",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 洪湖市",
    "rank": 3,
    "normalizedName": "洪湖",
    "normalizedValue": "湖北荆州洪湖",
    "normalizedSearchText": "湖北荆州洪湖洪湖湖北荆州"
  },
  {
    "code": "421087",
    "name": "松滋市",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 松滋市",
    "rank": 3,
    "normalizedName": "松滋",
    "normalizedValue": "湖北荆州松滋",
    "normalizedSearchText": "湖北荆州松滋松滋湖北荆州"
  },
  {
    "code": "421088",
    "name": "监利市",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 监利市",
    "rank": 3,
    "normalizedName": "监利",
    "normalizedValue": "湖北荆州监利",
    "normalizedSearchText": "湖北荆州监利监利湖北荆州"
  },
  {
    "code": "421001",
    "name": "市辖区",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北荆州辖",
    "normalizedSearchText": "湖北荆州辖辖湖北荆州"
  },
  {
    "code": "421071",
    "name": "荆州经济技术开发区",
    "detail": "湖北省 / 荆州市",
    "value": "湖北省 / 荆州市 / 荆州经济技术开发区",
    "rank": 3,
    "normalizedName": "荆州经济技术开发",
    "normalizedValue": "湖北荆州荆州经济技术开发",
    "normalizedSearchText": "湖北荆州荆州经济技术开发荆州经济技术开发湖北荆州"
  },
  {
    "code": "421100",
    "name": "黄冈市",
    "detail": "湖北省",
    "value": "湖北省 / 黄冈市",
    "rank": 2,
    "normalizedName": "黄冈",
    "normalizedValue": "湖北黄冈",
    "normalizedSearchText": "湖北黄冈黄冈湖北"
  },
  {
    "code": "421102",
    "name": "黄州区",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 黄州区",
    "rank": 3,
    "normalizedName": "黄州",
    "normalizedValue": "湖北黄冈黄州",
    "normalizedSearchText": "湖北黄冈黄州黄州湖北黄冈"
  },
  {
    "code": "421121",
    "name": "团风县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 团风县",
    "rank": 3,
    "normalizedName": "团风",
    "normalizedValue": "湖北黄冈团风",
    "normalizedSearchText": "湖北黄冈团风团风湖北黄冈"
  },
  {
    "code": "421122",
    "name": "红安县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 红安县",
    "rank": 3,
    "normalizedName": "红安",
    "normalizedValue": "湖北黄冈红安",
    "normalizedSearchText": "湖北黄冈红安红安湖北黄冈"
  },
  {
    "code": "421123",
    "name": "罗田县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 罗田县",
    "rank": 3,
    "normalizedName": "罗田",
    "normalizedValue": "湖北黄冈罗田",
    "normalizedSearchText": "湖北黄冈罗田罗田湖北黄冈"
  },
  {
    "code": "421124",
    "name": "英山县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 英山县",
    "rank": 3,
    "normalizedName": "英山",
    "normalizedValue": "湖北黄冈英山",
    "normalizedSearchText": "湖北黄冈英山英山湖北黄冈"
  },
  {
    "code": "421125",
    "name": "浠水县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 浠水县",
    "rank": 3,
    "normalizedName": "浠水",
    "normalizedValue": "湖北黄冈浠水",
    "normalizedSearchText": "湖北黄冈浠水浠水湖北黄冈"
  },
  {
    "code": "421126",
    "name": "蕲春县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 蕲春县",
    "rank": 3,
    "normalizedName": "蕲春",
    "normalizedValue": "湖北黄冈蕲春",
    "normalizedSearchText": "湖北黄冈蕲春蕲春湖北黄冈"
  },
  {
    "code": "421127",
    "name": "黄梅县",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 黄梅县",
    "rank": 3,
    "normalizedName": "黄梅",
    "normalizedValue": "湖北黄冈黄梅",
    "normalizedSearchText": "湖北黄冈黄梅黄梅湖北黄冈"
  },
  {
    "code": "421181",
    "name": "麻城市",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 麻城市",
    "rank": 3,
    "normalizedName": "麻城",
    "normalizedValue": "湖北黄冈麻城",
    "normalizedSearchText": "湖北黄冈麻城麻城湖北黄冈"
  },
  {
    "code": "421182",
    "name": "武穴市",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 武穴市",
    "rank": 3,
    "normalizedName": "武穴",
    "normalizedValue": "湖北黄冈武穴",
    "normalizedSearchText": "湖北黄冈武穴武穴湖北黄冈"
  },
  {
    "code": "421101",
    "name": "市辖区",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北黄冈辖",
    "normalizedSearchText": "湖北黄冈辖辖湖北黄冈"
  },
  {
    "code": "421171",
    "name": "龙感湖管理区",
    "detail": "湖北省 / 黄冈市",
    "value": "湖北省 / 黄冈市 / 龙感湖管理区",
    "rank": 3,
    "normalizedName": "龙感湖管理",
    "normalizedValue": "湖北黄冈龙感湖管理",
    "normalizedSearchText": "湖北黄冈龙感湖管理龙感湖管理湖北黄冈"
  },
  {
    "code": "421200",
    "name": "咸宁市",
    "detail": "湖北省",
    "value": "湖北省 / 咸宁市",
    "rank": 2,
    "normalizedName": "咸宁",
    "normalizedValue": "湖北咸宁",
    "normalizedSearchText": "湖北咸宁咸宁湖北"
  },
  {
    "code": "421202",
    "name": "咸安区",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 咸安区",
    "rank": 3,
    "normalizedName": "咸安",
    "normalizedValue": "湖北咸宁咸安",
    "normalizedSearchText": "湖北咸宁咸安咸安湖北咸宁"
  },
  {
    "code": "421221",
    "name": "嘉鱼县",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 嘉鱼县",
    "rank": 3,
    "normalizedName": "嘉鱼",
    "normalizedValue": "湖北咸宁嘉鱼",
    "normalizedSearchText": "湖北咸宁嘉鱼嘉鱼湖北咸宁"
  },
  {
    "code": "421222",
    "name": "通城县",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 通城县",
    "rank": 3,
    "normalizedName": "通城",
    "normalizedValue": "湖北咸宁通城",
    "normalizedSearchText": "湖北咸宁通城通城湖北咸宁"
  },
  {
    "code": "421223",
    "name": "崇阳县",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 崇阳县",
    "rank": 3,
    "normalizedName": "崇阳",
    "normalizedValue": "湖北咸宁崇阳",
    "normalizedSearchText": "湖北咸宁崇阳崇阳湖北咸宁"
  },
  {
    "code": "421224",
    "name": "通山县",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 通山县",
    "rank": 3,
    "normalizedName": "通山",
    "normalizedValue": "湖北咸宁通山",
    "normalizedSearchText": "湖北咸宁通山通山湖北咸宁"
  },
  {
    "code": "421281",
    "name": "赤壁市",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 赤壁市",
    "rank": 3,
    "normalizedName": "赤壁",
    "normalizedValue": "湖北咸宁赤壁",
    "normalizedSearchText": "湖北咸宁赤壁赤壁湖北咸宁"
  },
  {
    "code": "421201",
    "name": "市辖区",
    "detail": "湖北省 / 咸宁市",
    "value": "湖北省 / 咸宁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北咸宁辖",
    "normalizedSearchText": "湖北咸宁辖辖湖北咸宁"
  },
  {
    "code": "421300",
    "name": "随州市",
    "detail": "湖北省",
    "value": "湖北省 / 随州市",
    "rank": 2,
    "normalizedName": "随州",
    "normalizedValue": "湖北随州",
    "normalizedSearchText": "湖北随州随州湖北"
  },
  {
    "code": "421303",
    "name": "曾都区",
    "detail": "湖北省 / 随州市",
    "value": "湖北省 / 随州市 / 曾都区",
    "rank": 3,
    "normalizedName": "曾都",
    "normalizedValue": "湖北随州曾都",
    "normalizedSearchText": "湖北随州曾都曾都湖北随州"
  },
  {
    "code": "421321",
    "name": "随县",
    "detail": "湖北省 / 随州市",
    "value": "湖北省 / 随州市 / 随县",
    "rank": 3,
    "normalizedName": "随",
    "normalizedValue": "湖北随州随",
    "normalizedSearchText": "湖北随州随随湖北随州"
  },
  {
    "code": "421381",
    "name": "广水市",
    "detail": "湖北省 / 随州市",
    "value": "湖北省 / 随州市 / 广水市",
    "rank": 3,
    "normalizedName": "广水",
    "normalizedValue": "湖北随州广水",
    "normalizedSearchText": "湖北随州广水广水湖北随州"
  },
  {
    "code": "421301",
    "name": "市辖区",
    "detail": "湖北省 / 随州市",
    "value": "湖北省 / 随州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖北随州辖",
    "normalizedSearchText": "湖北随州辖辖湖北随州"
  },
  {
    "code": "422800",
    "name": "恩施土家族苗族自治州",
    "detail": "湖北省",
    "value": "湖北省 / 恩施土家族苗族自治州",
    "rank": 2,
    "normalizedName": "恩施土家族苗族",
    "normalizedValue": "湖北恩施土家族苗族",
    "normalizedSearchText": "湖北恩施土家族苗族恩施土家族苗族湖北"
  },
  {
    "code": "422801",
    "name": "恩施市",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 恩施市",
    "rank": 3,
    "normalizedName": "恩施",
    "normalizedValue": "湖北恩施土家族苗族恩施",
    "normalizedSearchText": "湖北恩施土家族苗族恩施恩施湖北恩施土家族苗族"
  },
  {
    "code": "422802",
    "name": "利川市",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 利川市",
    "rank": 3,
    "normalizedName": "利川",
    "normalizedValue": "湖北恩施土家族苗族利川",
    "normalizedSearchText": "湖北恩施土家族苗族利川利川湖北恩施土家族苗族"
  },
  {
    "code": "422822",
    "name": "建始县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 建始县",
    "rank": 3,
    "normalizedName": "建始",
    "normalizedValue": "湖北恩施土家族苗族建始",
    "normalizedSearchText": "湖北恩施土家族苗族建始建始湖北恩施土家族苗族"
  },
  {
    "code": "422823",
    "name": "巴东县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 巴东县",
    "rank": 3,
    "normalizedName": "巴东",
    "normalizedValue": "湖北恩施土家族苗族巴东",
    "normalizedSearchText": "湖北恩施土家族苗族巴东巴东湖北恩施土家族苗族"
  },
  {
    "code": "422825",
    "name": "宣恩县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 宣恩县",
    "rank": 3,
    "normalizedName": "宣恩",
    "normalizedValue": "湖北恩施土家族苗族宣恩",
    "normalizedSearchText": "湖北恩施土家族苗族宣恩宣恩湖北恩施土家族苗族"
  },
  {
    "code": "422826",
    "name": "咸丰县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 咸丰县",
    "rank": 3,
    "normalizedName": "咸丰",
    "normalizedValue": "湖北恩施土家族苗族咸丰",
    "normalizedSearchText": "湖北恩施土家族苗族咸丰咸丰湖北恩施土家族苗族"
  },
  {
    "code": "422827",
    "name": "来凤县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 来凤县",
    "rank": 3,
    "normalizedName": "来凤",
    "normalizedValue": "湖北恩施土家族苗族来凤",
    "normalizedSearchText": "湖北恩施土家族苗族来凤来凤湖北恩施土家族苗族"
  },
  {
    "code": "422828",
    "name": "鹤峰县",
    "detail": "湖北省 / 恩施土家族苗族自治州",
    "value": "湖北省 / 恩施土家族苗族自治州 / 鹤峰县",
    "rank": 3,
    "normalizedName": "鹤峰",
    "normalizedValue": "湖北恩施土家族苗族鹤峰",
    "normalizedSearchText": "湖北恩施土家族苗族鹤峰鹤峰湖北恩施土家族苗族"
  },
  {
    "code": "429000",
    "name": "湖北省-自治区直辖县级行政区划",
    "detail": "湖北省",
    "value": "湖北省 / 湖北省-自治区直辖县级行政区划",
    "rank": 2,
    "normalizedName": "湖北直辖级行政划",
    "normalizedValue": "湖北湖北直辖级行政划",
    "normalizedSearchText": "湖北湖北直辖级行政划湖北直辖级行政划湖北"
  },
  {
    "code": "429004",
    "name": "仙桃市",
    "detail": "湖北省 / 湖北省-自治区直辖县级行政区划",
    "value": "湖北省 / 湖北省-自治区直辖县级行政区划 / 仙桃市",
    "rank": 3,
    "normalizedName": "仙桃",
    "normalizedValue": "湖北湖北直辖级行政划仙桃",
    "normalizedSearchText": "湖北湖北直辖级行政划仙桃仙桃湖北湖北直辖级行政划"
  },
  {
    "code": "429005",
    "name": "潜江市",
    "detail": "湖北省 / 湖北省-自治区直辖县级行政区划",
    "value": "湖北省 / 湖北省-自治区直辖县级行政区划 / 潜江市",
    "rank": 3,
    "normalizedName": "潜江",
    "normalizedValue": "湖北湖北直辖级行政划潜江",
    "normalizedSearchText": "湖北湖北直辖级行政划潜江潜江湖北湖北直辖级行政划"
  },
  {
    "code": "429006",
    "name": "天门市",
    "detail": "湖北省 / 湖北省-自治区直辖县级行政区划",
    "value": "湖北省 / 湖北省-自治区直辖县级行政区划 / 天门市",
    "rank": 3,
    "normalizedName": "天门",
    "normalizedValue": "湖北湖北直辖级行政划天门",
    "normalizedSearchText": "湖北湖北直辖级行政划天门天门湖北湖北直辖级行政划"
  },
  {
    "code": "429021",
    "name": "神农架林区",
    "detail": "湖北省 / 湖北省-自治区直辖县级行政区划",
    "value": "湖北省 / 湖北省-自治区直辖县级行政区划 / 神农架林区",
    "rank": 3,
    "normalizedName": "神农架林",
    "normalizedValue": "湖北湖北直辖级行政划神农架林",
    "normalizedSearchText": "湖北湖北直辖级行政划神农架林神农架林湖北湖北直辖级行政划"
  },
  {
    "code": "430000",
    "name": "湖南省",
    "detail": "?????",
    "value": "湖南省",
    "rank": 1,
    "normalizedName": "湖南",
    "normalizedValue": "湖南",
    "normalizedSearchText": "湖南湖南"
  },
  {
    "code": "430100",
    "name": "长沙市",
    "detail": "湖南省",
    "value": "湖南省 / 长沙市",
    "rank": 2,
    "normalizedName": "长沙",
    "normalizedValue": "湖南长沙",
    "normalizedSearchText": "湖南长沙长沙湖南"
  },
  {
    "code": "430102",
    "name": "芙蓉区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 芙蓉区",
    "rank": 3,
    "normalizedName": "芙蓉",
    "normalizedValue": "湖南长沙芙蓉",
    "normalizedSearchText": "湖南长沙芙蓉芙蓉湖南长沙"
  },
  {
    "code": "430103",
    "name": "天心区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 天心区",
    "rank": 3,
    "normalizedName": "天心",
    "normalizedValue": "湖南长沙天心",
    "normalizedSearchText": "湖南长沙天心天心湖南长沙"
  },
  {
    "code": "430104",
    "name": "岳麓区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 岳麓区",
    "rank": 3,
    "normalizedName": "岳麓",
    "normalizedValue": "湖南长沙岳麓",
    "normalizedSearchText": "湖南长沙岳麓岳麓湖南长沙"
  },
  {
    "code": "430105",
    "name": "开福区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 开福区",
    "rank": 3,
    "normalizedName": "开福",
    "normalizedValue": "湖南长沙开福",
    "normalizedSearchText": "湖南长沙开福开福湖南长沙"
  },
  {
    "code": "430111",
    "name": "雨花区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 雨花区",
    "rank": 3,
    "normalizedName": "雨花",
    "normalizedValue": "湖南长沙雨花",
    "normalizedSearchText": "湖南长沙雨花雨花湖南长沙"
  },
  {
    "code": "430112",
    "name": "望城区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 望城区",
    "rank": 3,
    "normalizedName": "望城",
    "normalizedValue": "湖南长沙望城",
    "normalizedSearchText": "湖南长沙望城望城湖南长沙"
  },
  {
    "code": "430121",
    "name": "长沙县",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 长沙县",
    "rank": 3,
    "normalizedName": "长沙",
    "normalizedValue": "湖南长沙长沙",
    "normalizedSearchText": "湖南长沙长沙长沙湖南长沙"
  },
  {
    "code": "430181",
    "name": "浏阳市",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 浏阳市",
    "rank": 3,
    "normalizedName": "浏阳",
    "normalizedValue": "湖南长沙浏阳",
    "normalizedSearchText": "湖南长沙浏阳浏阳湖南长沙"
  },
  {
    "code": "430182",
    "name": "宁乡市",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 宁乡市",
    "rank": 3,
    "normalizedName": "宁",
    "normalizedValue": "湖南长沙宁",
    "normalizedSearchText": "湖南长沙宁宁湖南长沙"
  },
  {
    "code": "430101",
    "name": "市辖区",
    "detail": "湖南省 / 长沙市",
    "value": "湖南省 / 长沙市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南长沙辖",
    "normalizedSearchText": "湖南长沙辖辖湖南长沙"
  },
  {
    "code": "430200",
    "name": "株洲市",
    "detail": "湖南省",
    "value": "湖南省 / 株洲市",
    "rank": 2,
    "normalizedName": "株洲",
    "normalizedValue": "湖南株洲",
    "normalizedSearchText": "湖南株洲株洲湖南"
  },
  {
    "code": "430202",
    "name": "荷塘区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 荷塘区",
    "rank": 3,
    "normalizedName": "荷塘",
    "normalizedValue": "湖南株洲荷塘",
    "normalizedSearchText": "湖南株洲荷塘荷塘湖南株洲"
  },
  {
    "code": "430203",
    "name": "芦淞区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 芦淞区",
    "rank": 3,
    "normalizedName": "芦淞",
    "normalizedValue": "湖南株洲芦淞",
    "normalizedSearchText": "湖南株洲芦淞芦淞湖南株洲"
  },
  {
    "code": "430204",
    "name": "石峰区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 石峰区",
    "rank": 3,
    "normalizedName": "石峰",
    "normalizedValue": "湖南株洲石峰",
    "normalizedSearchText": "湖南株洲石峰石峰湖南株洲"
  },
  {
    "code": "430211",
    "name": "天元区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 天元区",
    "rank": 3,
    "normalizedName": "天元",
    "normalizedValue": "湖南株洲天元",
    "normalizedSearchText": "湖南株洲天元天元湖南株洲"
  },
  {
    "code": "430212",
    "name": "渌口区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 渌口区",
    "rank": 3,
    "normalizedName": "渌口",
    "normalizedValue": "湖南株洲渌口",
    "normalizedSearchText": "湖南株洲渌口渌口湖南株洲"
  },
  {
    "code": "430223",
    "name": "攸县",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 攸县",
    "rank": 3,
    "normalizedName": "攸",
    "normalizedValue": "湖南株洲攸",
    "normalizedSearchText": "湖南株洲攸攸湖南株洲"
  },
  {
    "code": "430224",
    "name": "茶陵县",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 茶陵县",
    "rank": 3,
    "normalizedName": "茶陵",
    "normalizedValue": "湖南株洲茶陵",
    "normalizedSearchText": "湖南株洲茶陵茶陵湖南株洲"
  },
  {
    "code": "430225",
    "name": "炎陵县",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 炎陵县",
    "rank": 3,
    "normalizedName": "炎陵",
    "normalizedValue": "湖南株洲炎陵",
    "normalizedSearchText": "湖南株洲炎陵炎陵湖南株洲"
  },
  {
    "code": "430281",
    "name": "醴陵市",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 醴陵市",
    "rank": 3,
    "normalizedName": "醴陵",
    "normalizedValue": "湖南株洲醴陵",
    "normalizedSearchText": "湖南株洲醴陵醴陵湖南株洲"
  },
  {
    "code": "430201",
    "name": "市辖区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南株洲辖",
    "normalizedSearchText": "湖南株洲辖辖湖南株洲"
  },
  {
    "code": "430271",
    "name": "云龙示范区",
    "detail": "湖南省 / 株洲市",
    "value": "湖南省 / 株洲市 / 云龙示范区",
    "rank": 3,
    "normalizedName": "云龙示范",
    "normalizedValue": "湖南株洲云龙示范",
    "normalizedSearchText": "湖南株洲云龙示范云龙示范湖南株洲"
  },
  {
    "code": "430300",
    "name": "湘潭市",
    "detail": "湖南省",
    "value": "湖南省 / 湘潭市",
    "rank": 2,
    "normalizedName": "湘潭",
    "normalizedValue": "湖南湘潭",
    "normalizedSearchText": "湖南湘潭湘潭湖南"
  },
  {
    "code": "430302",
    "name": "雨湖区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 雨湖区",
    "rank": 3,
    "normalizedName": "雨湖",
    "normalizedValue": "湖南湘潭雨湖",
    "normalizedSearchText": "湖南湘潭雨湖雨湖湖南湘潭"
  },
  {
    "code": "430304",
    "name": "岳塘区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 岳塘区",
    "rank": 3,
    "normalizedName": "岳塘",
    "normalizedValue": "湖南湘潭岳塘",
    "normalizedSearchText": "湖南湘潭岳塘岳塘湖南湘潭"
  },
  {
    "code": "430321",
    "name": "湘潭县",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 湘潭县",
    "rank": 3,
    "normalizedName": "湘潭",
    "normalizedValue": "湖南湘潭湘潭",
    "normalizedSearchText": "湖南湘潭湘潭湘潭湖南湘潭"
  },
  {
    "code": "430381",
    "name": "湘乡市",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 湘乡市",
    "rank": 3,
    "normalizedName": "湘",
    "normalizedValue": "湖南湘潭湘",
    "normalizedSearchText": "湖南湘潭湘湘湖南湘潭"
  },
  {
    "code": "430382",
    "name": "韶山市",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 韶山市",
    "rank": 3,
    "normalizedName": "韶山",
    "normalizedValue": "湖南湘潭韶山",
    "normalizedSearchText": "湖南湘潭韶山韶山湖南湘潭"
  },
  {
    "code": "430301",
    "name": "市辖区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南湘潭辖",
    "normalizedSearchText": "湖南湘潭辖辖湖南湘潭"
  },
  {
    "code": "430371",
    "name": "湖南湘潭高新技术产业园区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 湖南湘潭高新技术产业园区",
    "rank": 3,
    "normalizedName": "湖南湘潭高新技术产业园",
    "normalizedValue": "湖南湘潭湖南湘潭高新技术产业园",
    "normalizedSearchText": "湖南湘潭湖南湘潭高新技术产业园湖南湘潭高新技术产业园湖南湘潭"
  },
  {
    "code": "430372",
    "name": "湘潭昭山示范区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 湘潭昭山示范区",
    "rank": 3,
    "normalizedName": "湘潭昭山示范",
    "normalizedValue": "湖南湘潭湘潭昭山示范",
    "normalizedSearchText": "湖南湘潭湘潭昭山示范湘潭昭山示范湖南湘潭"
  },
  {
    "code": "430373",
    "name": "湘潭九华示范区",
    "detail": "湖南省 / 湘潭市",
    "value": "湖南省 / 湘潭市 / 湘潭九华示范区",
    "rank": 3,
    "normalizedName": "湘潭九华示范",
    "normalizedValue": "湖南湘潭湘潭九华示范",
    "normalizedSearchText": "湖南湘潭湘潭九华示范湘潭九华示范湖南湘潭"
  },
  {
    "code": "430400",
    "name": "衡阳市",
    "detail": "湖南省",
    "value": "湖南省 / 衡阳市",
    "rank": 2,
    "normalizedName": "衡阳",
    "normalizedValue": "湖南衡阳",
    "normalizedSearchText": "湖南衡阳衡阳湖南"
  },
  {
    "code": "430405",
    "name": "珠晖区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 珠晖区",
    "rank": 3,
    "normalizedName": "珠晖",
    "normalizedValue": "湖南衡阳珠晖",
    "normalizedSearchText": "湖南衡阳珠晖珠晖湖南衡阳"
  },
  {
    "code": "430406",
    "name": "雁峰区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 雁峰区",
    "rank": 3,
    "normalizedName": "雁峰",
    "normalizedValue": "湖南衡阳雁峰",
    "normalizedSearchText": "湖南衡阳雁峰雁峰湖南衡阳"
  },
  {
    "code": "430407",
    "name": "石鼓区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 石鼓区",
    "rank": 3,
    "normalizedName": "石鼓",
    "normalizedValue": "湖南衡阳石鼓",
    "normalizedSearchText": "湖南衡阳石鼓石鼓湖南衡阳"
  },
  {
    "code": "430408",
    "name": "蒸湘区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 蒸湘区",
    "rank": 3,
    "normalizedName": "蒸湘",
    "normalizedValue": "湖南衡阳蒸湘",
    "normalizedSearchText": "湖南衡阳蒸湘蒸湘湖南衡阳"
  },
  {
    "code": "430412",
    "name": "南岳区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 南岳区",
    "rank": 3,
    "normalizedName": "南岳",
    "normalizedValue": "湖南衡阳南岳",
    "normalizedSearchText": "湖南衡阳南岳南岳湖南衡阳"
  },
  {
    "code": "430421",
    "name": "衡阳县",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 衡阳县",
    "rank": 3,
    "normalizedName": "衡阳",
    "normalizedValue": "湖南衡阳衡阳",
    "normalizedSearchText": "湖南衡阳衡阳衡阳湖南衡阳"
  },
  {
    "code": "430422",
    "name": "衡南县",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 衡南县",
    "rank": 3,
    "normalizedName": "衡南",
    "normalizedValue": "湖南衡阳衡南",
    "normalizedSearchText": "湖南衡阳衡南衡南湖南衡阳"
  },
  {
    "code": "430423",
    "name": "衡山县",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 衡山县",
    "rank": 3,
    "normalizedName": "衡山",
    "normalizedValue": "湖南衡阳衡山",
    "normalizedSearchText": "湖南衡阳衡山衡山湖南衡阳"
  },
  {
    "code": "430424",
    "name": "衡东县",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 衡东县",
    "rank": 3,
    "normalizedName": "衡东",
    "normalizedValue": "湖南衡阳衡东",
    "normalizedSearchText": "湖南衡阳衡东衡东湖南衡阳"
  },
  {
    "code": "430426",
    "name": "祁东县",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 祁东县",
    "rank": 3,
    "normalizedName": "祁东",
    "normalizedValue": "湖南衡阳祁东",
    "normalizedSearchText": "湖南衡阳祁东祁东湖南衡阳"
  },
  {
    "code": "430481",
    "name": "耒阳市",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 耒阳市",
    "rank": 3,
    "normalizedName": "耒阳",
    "normalizedValue": "湖南衡阳耒阳",
    "normalizedSearchText": "湖南衡阳耒阳耒阳湖南衡阳"
  },
  {
    "code": "430482",
    "name": "常宁市",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 常宁市",
    "rank": 3,
    "normalizedName": "常宁",
    "normalizedValue": "湖南衡阳常宁",
    "normalizedSearchText": "湖南衡阳常宁常宁湖南衡阳"
  },
  {
    "code": "430401",
    "name": "市辖区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南衡阳辖",
    "normalizedSearchText": "湖南衡阳辖辖湖南衡阳"
  },
  {
    "code": "430471",
    "name": "衡阳综合保税区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 衡阳综合保税区",
    "rank": 3,
    "normalizedName": "衡阳综合保税",
    "normalizedValue": "湖南衡阳衡阳综合保税",
    "normalizedSearchText": "湖南衡阳衡阳综合保税衡阳综合保税湖南衡阳"
  },
  {
    "code": "430472",
    "name": "湖南衡阳高新技术产业园区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 湖南衡阳高新技术产业园区",
    "rank": 3,
    "normalizedName": "湖南衡阳高新技术产业园",
    "normalizedValue": "湖南衡阳湖南衡阳高新技术产业园",
    "normalizedSearchText": "湖南衡阳湖南衡阳高新技术产业园湖南衡阳高新技术产业园湖南衡阳"
  },
  {
    "code": "430473",
    "name": "湖南衡阳松木经济开发区",
    "detail": "湖南省 / 衡阳市",
    "value": "湖南省 / 衡阳市 / 湖南衡阳松木经济开发区",
    "rank": 3,
    "normalizedName": "湖南衡阳松木经济开发",
    "normalizedValue": "湖南衡阳湖南衡阳松木经济开发",
    "normalizedSearchText": "湖南衡阳湖南衡阳松木经济开发湖南衡阳松木经济开发湖南衡阳"
  },
  {
    "code": "430500",
    "name": "邵阳市",
    "detail": "湖南省",
    "value": "湖南省 / 邵阳市",
    "rank": 2,
    "normalizedName": "邵阳",
    "normalizedValue": "湖南邵阳",
    "normalizedSearchText": "湖南邵阳邵阳湖南"
  },
  {
    "code": "430502",
    "name": "双清区",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 双清区",
    "rank": 3,
    "normalizedName": "双清",
    "normalizedValue": "湖南邵阳双清",
    "normalizedSearchText": "湖南邵阳双清双清湖南邵阳"
  },
  {
    "code": "430503",
    "name": "大祥区",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 大祥区",
    "rank": 3,
    "normalizedName": "大祥",
    "normalizedValue": "湖南邵阳大祥",
    "normalizedSearchText": "湖南邵阳大祥大祥湖南邵阳"
  },
  {
    "code": "430511",
    "name": "北塔区",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 北塔区",
    "rank": 3,
    "normalizedName": "北塔",
    "normalizedValue": "湖南邵阳北塔",
    "normalizedSearchText": "湖南邵阳北塔北塔湖南邵阳"
  },
  {
    "code": "430522",
    "name": "新邵县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 新邵县",
    "rank": 3,
    "normalizedName": "新邵",
    "normalizedValue": "湖南邵阳新邵",
    "normalizedSearchText": "湖南邵阳新邵新邵湖南邵阳"
  },
  {
    "code": "430523",
    "name": "邵阳县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 邵阳县",
    "rank": 3,
    "normalizedName": "邵阳",
    "normalizedValue": "湖南邵阳邵阳",
    "normalizedSearchText": "湖南邵阳邵阳邵阳湖南邵阳"
  },
  {
    "code": "430524",
    "name": "隆回县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 隆回县",
    "rank": 3,
    "normalizedName": "隆回",
    "normalizedValue": "湖南邵阳隆回",
    "normalizedSearchText": "湖南邵阳隆回隆回湖南邵阳"
  },
  {
    "code": "430525",
    "name": "洞口县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 洞口县",
    "rank": 3,
    "normalizedName": "洞口",
    "normalizedValue": "湖南邵阳洞口",
    "normalizedSearchText": "湖南邵阳洞口洞口湖南邵阳"
  },
  {
    "code": "430527",
    "name": "绥宁县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 绥宁县",
    "rank": 3,
    "normalizedName": "绥宁",
    "normalizedValue": "湖南邵阳绥宁",
    "normalizedSearchText": "湖南邵阳绥宁绥宁湖南邵阳"
  },
  {
    "code": "430528",
    "name": "新宁县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 新宁县",
    "rank": 3,
    "normalizedName": "新宁",
    "normalizedValue": "湖南邵阳新宁",
    "normalizedSearchText": "湖南邵阳新宁新宁湖南邵阳"
  },
  {
    "code": "430529",
    "name": "城步苗族自治县",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 城步苗族自治县",
    "rank": 3,
    "normalizedName": "城步苗族自治",
    "normalizedValue": "湖南邵阳城步苗族自治",
    "normalizedSearchText": "湖南邵阳城步苗族自治城步苗族自治湖南邵阳"
  },
  {
    "code": "430581",
    "name": "武冈市",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 武冈市",
    "rank": 3,
    "normalizedName": "武冈",
    "normalizedValue": "湖南邵阳武冈",
    "normalizedSearchText": "湖南邵阳武冈武冈湖南邵阳"
  },
  {
    "code": "430582",
    "name": "邵东市",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 邵东市",
    "rank": 3,
    "normalizedName": "邵东",
    "normalizedValue": "湖南邵阳邵东",
    "normalizedSearchText": "湖南邵阳邵东邵东湖南邵阳"
  },
  {
    "code": "430501",
    "name": "市辖区",
    "detail": "湖南省 / 邵阳市",
    "value": "湖南省 / 邵阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南邵阳辖",
    "normalizedSearchText": "湖南邵阳辖辖湖南邵阳"
  },
  {
    "code": "430600",
    "name": "岳阳市",
    "detail": "湖南省",
    "value": "湖南省 / 岳阳市",
    "rank": 2,
    "normalizedName": "岳阳",
    "normalizedValue": "湖南岳阳",
    "normalizedSearchText": "湖南岳阳岳阳湖南"
  },
  {
    "code": "430602",
    "name": "岳阳楼区",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 岳阳楼区",
    "rank": 3,
    "normalizedName": "岳阳楼",
    "normalizedValue": "湖南岳阳岳阳楼",
    "normalizedSearchText": "湖南岳阳岳阳楼岳阳楼湖南岳阳"
  },
  {
    "code": "430603",
    "name": "云溪区",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 云溪区",
    "rank": 3,
    "normalizedName": "云溪",
    "normalizedValue": "湖南岳阳云溪",
    "normalizedSearchText": "湖南岳阳云溪云溪湖南岳阳"
  },
  {
    "code": "430611",
    "name": "君山区",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 君山区",
    "rank": 3,
    "normalizedName": "君山",
    "normalizedValue": "湖南岳阳君山",
    "normalizedSearchText": "湖南岳阳君山君山湖南岳阳"
  },
  {
    "code": "430621",
    "name": "岳阳县",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 岳阳县",
    "rank": 3,
    "normalizedName": "岳阳",
    "normalizedValue": "湖南岳阳岳阳",
    "normalizedSearchText": "湖南岳阳岳阳岳阳湖南岳阳"
  },
  {
    "code": "430623",
    "name": "华容县",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 华容县",
    "rank": 3,
    "normalizedName": "华容",
    "normalizedValue": "湖南岳阳华容",
    "normalizedSearchText": "湖南岳阳华容华容湖南岳阳"
  },
  {
    "code": "430624",
    "name": "湘阴县",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 湘阴县",
    "rank": 3,
    "normalizedName": "湘阴",
    "normalizedValue": "湖南岳阳湘阴",
    "normalizedSearchText": "湖南岳阳湘阴湘阴湖南岳阳"
  },
  {
    "code": "430626",
    "name": "平江县",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 平江县",
    "rank": 3,
    "normalizedName": "平江",
    "normalizedValue": "湖南岳阳平江",
    "normalizedSearchText": "湖南岳阳平江平江湖南岳阳"
  },
  {
    "code": "430681",
    "name": "汨罗市",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 汨罗市",
    "rank": 3,
    "normalizedName": "汨罗",
    "normalizedValue": "湖南岳阳汨罗",
    "normalizedSearchText": "湖南岳阳汨罗汨罗湖南岳阳"
  },
  {
    "code": "430682",
    "name": "临湘市",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 临湘市",
    "rank": 3,
    "normalizedName": "临湘",
    "normalizedValue": "湖南岳阳临湘",
    "normalizedSearchText": "湖南岳阳临湘临湘湖南岳阳"
  },
  {
    "code": "430601",
    "name": "市辖区",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南岳阳辖",
    "normalizedSearchText": "湖南岳阳辖辖湖南岳阳"
  },
  {
    "code": "430671",
    "name": "岳阳市屈原管理区",
    "detail": "湖南省 / 岳阳市",
    "value": "湖南省 / 岳阳市 / 岳阳市屈原管理区",
    "rank": 3,
    "normalizedName": "岳阳屈原管理",
    "normalizedValue": "湖南岳阳岳阳屈原管理",
    "normalizedSearchText": "湖南岳阳岳阳屈原管理岳阳屈原管理湖南岳阳"
  },
  {
    "code": "430700",
    "name": "常德市",
    "detail": "湖南省",
    "value": "湖南省 / 常德市",
    "rank": 2,
    "normalizedName": "常德",
    "normalizedValue": "湖南常德",
    "normalizedSearchText": "湖南常德常德湖南"
  },
  {
    "code": "430702",
    "name": "武陵区",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 武陵区",
    "rank": 3,
    "normalizedName": "武陵",
    "normalizedValue": "湖南常德武陵",
    "normalizedSearchText": "湖南常德武陵武陵湖南常德"
  },
  {
    "code": "430703",
    "name": "鼎城区",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 鼎城区",
    "rank": 3,
    "normalizedName": "鼎城",
    "normalizedValue": "湖南常德鼎城",
    "normalizedSearchText": "湖南常德鼎城鼎城湖南常德"
  },
  {
    "code": "430721",
    "name": "安乡县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 安乡县",
    "rank": 3,
    "normalizedName": "安",
    "normalizedValue": "湖南常德安",
    "normalizedSearchText": "湖南常德安安湖南常德"
  },
  {
    "code": "430722",
    "name": "汉寿县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 汉寿县",
    "rank": 3,
    "normalizedName": "汉寿",
    "normalizedValue": "湖南常德汉寿",
    "normalizedSearchText": "湖南常德汉寿汉寿湖南常德"
  },
  {
    "code": "430723",
    "name": "澧县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 澧县",
    "rank": 3,
    "normalizedName": "澧",
    "normalizedValue": "湖南常德澧",
    "normalizedSearchText": "湖南常德澧澧湖南常德"
  },
  {
    "code": "430724",
    "name": "临澧县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 临澧县",
    "rank": 3,
    "normalizedName": "临澧",
    "normalizedValue": "湖南常德临澧",
    "normalizedSearchText": "湖南常德临澧临澧湖南常德"
  },
  {
    "code": "430725",
    "name": "桃源县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 桃源县",
    "rank": 3,
    "normalizedName": "桃源",
    "normalizedValue": "湖南常德桃源",
    "normalizedSearchText": "湖南常德桃源桃源湖南常德"
  },
  {
    "code": "430726",
    "name": "石门县",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 石门县",
    "rank": 3,
    "normalizedName": "石门",
    "normalizedValue": "湖南常德石门",
    "normalizedSearchText": "湖南常德石门石门湖南常德"
  },
  {
    "code": "430781",
    "name": "津市市",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 津市市",
    "rank": 3,
    "normalizedName": "津",
    "normalizedValue": "湖南常德津",
    "normalizedSearchText": "湖南常德津津湖南常德"
  },
  {
    "code": "430701",
    "name": "市辖区",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南常德辖",
    "normalizedSearchText": "湖南常德辖辖湖南常德"
  },
  {
    "code": "430771",
    "name": "常德市西洞庭管理区",
    "detail": "湖南省 / 常德市",
    "value": "湖南省 / 常德市 / 常德市西洞庭管理区",
    "rank": 3,
    "normalizedName": "常德西洞庭管理",
    "normalizedValue": "湖南常德常德西洞庭管理",
    "normalizedSearchText": "湖南常德常德西洞庭管理常德西洞庭管理湖南常德"
  },
  {
    "code": "430800",
    "name": "张家界市",
    "detail": "湖南省",
    "value": "湖南省 / 张家界市",
    "rank": 2,
    "normalizedName": "张家界",
    "normalizedValue": "湖南张家界",
    "normalizedSearchText": "湖南张家界张家界湖南"
  },
  {
    "code": "430802",
    "name": "永定区",
    "detail": "湖南省 / 张家界市",
    "value": "湖南省 / 张家界市 / 永定区",
    "rank": 3,
    "normalizedName": "永定",
    "normalizedValue": "湖南张家界永定",
    "normalizedSearchText": "湖南张家界永定永定湖南张家界"
  },
  {
    "code": "430811",
    "name": "武陵源区",
    "detail": "湖南省 / 张家界市",
    "value": "湖南省 / 张家界市 / 武陵源区",
    "rank": 3,
    "normalizedName": "武陵源",
    "normalizedValue": "湖南张家界武陵源",
    "normalizedSearchText": "湖南张家界武陵源武陵源湖南张家界"
  },
  {
    "code": "430821",
    "name": "慈利县",
    "detail": "湖南省 / 张家界市",
    "value": "湖南省 / 张家界市 / 慈利县",
    "rank": 3,
    "normalizedName": "慈利",
    "normalizedValue": "湖南张家界慈利",
    "normalizedSearchText": "湖南张家界慈利慈利湖南张家界"
  },
  {
    "code": "430822",
    "name": "桑植县",
    "detail": "湖南省 / 张家界市",
    "value": "湖南省 / 张家界市 / 桑植县",
    "rank": 3,
    "normalizedName": "桑植",
    "normalizedValue": "湖南张家界桑植",
    "normalizedSearchText": "湖南张家界桑植桑植湖南张家界"
  },
  {
    "code": "430801",
    "name": "市辖区",
    "detail": "湖南省 / 张家界市",
    "value": "湖南省 / 张家界市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南张家界辖",
    "normalizedSearchText": "湖南张家界辖辖湖南张家界"
  },
  {
    "code": "430900",
    "name": "益阳市",
    "detail": "湖南省",
    "value": "湖南省 / 益阳市",
    "rank": 2,
    "normalizedName": "益阳",
    "normalizedValue": "湖南益阳",
    "normalizedSearchText": "湖南益阳益阳湖南"
  },
  {
    "code": "430902",
    "name": "资阳区",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 资阳区",
    "rank": 3,
    "normalizedName": "资阳",
    "normalizedValue": "湖南益阳资阳",
    "normalizedSearchText": "湖南益阳资阳资阳湖南益阳"
  },
  {
    "code": "430903",
    "name": "赫山区",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 赫山区",
    "rank": 3,
    "normalizedName": "赫山",
    "normalizedValue": "湖南益阳赫山",
    "normalizedSearchText": "湖南益阳赫山赫山湖南益阳"
  },
  {
    "code": "430921",
    "name": "南县",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 南县",
    "rank": 3,
    "normalizedName": "南",
    "normalizedValue": "湖南益阳南",
    "normalizedSearchText": "湖南益阳南南湖南益阳"
  },
  {
    "code": "430922",
    "name": "桃江县",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 桃江县",
    "rank": 3,
    "normalizedName": "桃江",
    "normalizedValue": "湖南益阳桃江",
    "normalizedSearchText": "湖南益阳桃江桃江湖南益阳"
  },
  {
    "code": "430923",
    "name": "安化县",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 安化县",
    "rank": 3,
    "normalizedName": "安化",
    "normalizedValue": "湖南益阳安化",
    "normalizedSearchText": "湖南益阳安化安化湖南益阳"
  },
  {
    "code": "430981",
    "name": "沅江市",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 沅江市",
    "rank": 3,
    "normalizedName": "沅江",
    "normalizedValue": "湖南益阳沅江",
    "normalizedSearchText": "湖南益阳沅江沅江湖南益阳"
  },
  {
    "code": "430901",
    "name": "市辖区",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南益阳辖",
    "normalizedSearchText": "湖南益阳辖辖湖南益阳"
  },
  {
    "code": "430971",
    "name": "益阳市大通湖管理区",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 益阳市大通湖管理区",
    "rank": 3,
    "normalizedName": "益阳大通湖管理",
    "normalizedValue": "湖南益阳益阳大通湖管理",
    "normalizedSearchText": "湖南益阳益阳大通湖管理益阳大通湖管理湖南益阳"
  },
  {
    "code": "430972",
    "name": "湖南益阳高新技术产业园区",
    "detail": "湖南省 / 益阳市",
    "value": "湖南省 / 益阳市 / 湖南益阳高新技术产业园区",
    "rank": 3,
    "normalizedName": "湖南益阳高新技术产业园",
    "normalizedValue": "湖南益阳湖南益阳高新技术产业园",
    "normalizedSearchText": "湖南益阳湖南益阳高新技术产业园湖南益阳高新技术产业园湖南益阳"
  },
  {
    "code": "431000",
    "name": "郴州市",
    "detail": "湖南省",
    "value": "湖南省 / 郴州市",
    "rank": 2,
    "normalizedName": "郴州",
    "normalizedValue": "湖南郴州",
    "normalizedSearchText": "湖南郴州郴州湖南"
  },
  {
    "code": "431002",
    "name": "北湖区",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 北湖区",
    "rank": 3,
    "normalizedName": "北湖",
    "normalizedValue": "湖南郴州北湖",
    "normalizedSearchText": "湖南郴州北湖北湖湖南郴州"
  },
  {
    "code": "431003",
    "name": "苏仙区",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 苏仙区",
    "rank": 3,
    "normalizedName": "苏仙",
    "normalizedValue": "湖南郴州苏仙",
    "normalizedSearchText": "湖南郴州苏仙苏仙湖南郴州"
  },
  {
    "code": "431021",
    "name": "桂阳县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 桂阳县",
    "rank": 3,
    "normalizedName": "桂阳",
    "normalizedValue": "湖南郴州桂阳",
    "normalizedSearchText": "湖南郴州桂阳桂阳湖南郴州"
  },
  {
    "code": "431022",
    "name": "宜章县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 宜章县",
    "rank": 3,
    "normalizedName": "宜章",
    "normalizedValue": "湖南郴州宜章",
    "normalizedSearchText": "湖南郴州宜章宜章湖南郴州"
  },
  {
    "code": "431023",
    "name": "永兴县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 永兴县",
    "rank": 3,
    "normalizedName": "永兴",
    "normalizedValue": "湖南郴州永兴",
    "normalizedSearchText": "湖南郴州永兴永兴湖南郴州"
  },
  {
    "code": "431024",
    "name": "嘉禾县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 嘉禾县",
    "rank": 3,
    "normalizedName": "嘉禾",
    "normalizedValue": "湖南郴州嘉禾",
    "normalizedSearchText": "湖南郴州嘉禾嘉禾湖南郴州"
  },
  {
    "code": "431025",
    "name": "临武县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 临武县",
    "rank": 3,
    "normalizedName": "临武",
    "normalizedValue": "湖南郴州临武",
    "normalizedSearchText": "湖南郴州临武临武湖南郴州"
  },
  {
    "code": "431026",
    "name": "汝城县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 汝城县",
    "rank": 3,
    "normalizedName": "汝城",
    "normalizedValue": "湖南郴州汝城",
    "normalizedSearchText": "湖南郴州汝城汝城湖南郴州"
  },
  {
    "code": "431027",
    "name": "桂东县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 桂东县",
    "rank": 3,
    "normalizedName": "桂东",
    "normalizedValue": "湖南郴州桂东",
    "normalizedSearchText": "湖南郴州桂东桂东湖南郴州"
  },
  {
    "code": "431028",
    "name": "安仁县",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 安仁县",
    "rank": 3,
    "normalizedName": "安仁",
    "normalizedValue": "湖南郴州安仁",
    "normalizedSearchText": "湖南郴州安仁安仁湖南郴州"
  },
  {
    "code": "431081",
    "name": "资兴市",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 资兴市",
    "rank": 3,
    "normalizedName": "资兴",
    "normalizedValue": "湖南郴州资兴",
    "normalizedSearchText": "湖南郴州资兴资兴湖南郴州"
  },
  {
    "code": "431001",
    "name": "市辖区",
    "detail": "湖南省 / 郴州市",
    "value": "湖南省 / 郴州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南郴州辖",
    "normalizedSearchText": "湖南郴州辖辖湖南郴州"
  },
  {
    "code": "431100",
    "name": "永州市",
    "detail": "湖南省",
    "value": "湖南省 / 永州市",
    "rank": 2,
    "normalizedName": "永州",
    "normalizedValue": "湖南永州",
    "normalizedSearchText": "湖南永州永州湖南"
  },
  {
    "code": "431102",
    "name": "零陵区",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 零陵区",
    "rank": 3,
    "normalizedName": "零陵",
    "normalizedValue": "湖南永州零陵",
    "normalizedSearchText": "湖南永州零陵零陵湖南永州"
  },
  {
    "code": "431103",
    "name": "冷水滩区",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 冷水滩区",
    "rank": 3,
    "normalizedName": "冷水滩",
    "normalizedValue": "湖南永州冷水滩",
    "normalizedSearchText": "湖南永州冷水滩冷水滩湖南永州"
  },
  {
    "code": "431121",
    "name": "祁阳县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 祁阳县",
    "rank": 3,
    "normalizedName": "祁阳",
    "normalizedValue": "湖南永州祁阳",
    "normalizedSearchText": "湖南永州祁阳祁阳湖南永州"
  },
  {
    "code": "431122",
    "name": "东安县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 东安县",
    "rank": 3,
    "normalizedName": "东安",
    "normalizedValue": "湖南永州东安",
    "normalizedSearchText": "湖南永州东安东安湖南永州"
  },
  {
    "code": "431123",
    "name": "双牌县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 双牌县",
    "rank": 3,
    "normalizedName": "双牌",
    "normalizedValue": "湖南永州双牌",
    "normalizedSearchText": "湖南永州双牌双牌湖南永州"
  },
  {
    "code": "431124",
    "name": "道县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 道县",
    "rank": 3,
    "normalizedName": "道",
    "normalizedValue": "湖南永州道",
    "normalizedSearchText": "湖南永州道道湖南永州"
  },
  {
    "code": "431125",
    "name": "江永县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 江永县",
    "rank": 3,
    "normalizedName": "江永",
    "normalizedValue": "湖南永州江永",
    "normalizedSearchText": "湖南永州江永江永湖南永州"
  },
  {
    "code": "431126",
    "name": "宁远县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 宁远县",
    "rank": 3,
    "normalizedName": "宁远",
    "normalizedValue": "湖南永州宁远",
    "normalizedSearchText": "湖南永州宁远宁远湖南永州"
  },
  {
    "code": "431127",
    "name": "蓝山县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 蓝山县",
    "rank": 3,
    "normalizedName": "蓝山",
    "normalizedValue": "湖南永州蓝山",
    "normalizedSearchText": "湖南永州蓝山蓝山湖南永州"
  },
  {
    "code": "431128",
    "name": "新田县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 新田县",
    "rank": 3,
    "normalizedName": "新田",
    "normalizedValue": "湖南永州新田",
    "normalizedSearchText": "湖南永州新田新田湖南永州"
  },
  {
    "code": "431129",
    "name": "江华瑶族自治县",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 江华瑶族自治县",
    "rank": 3,
    "normalizedName": "江华瑶族自治",
    "normalizedValue": "湖南永州江华瑶族自治",
    "normalizedSearchText": "湖南永州江华瑶族自治江华瑶族自治湖南永州"
  },
  {
    "code": "431101",
    "name": "市辖区",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南永州辖",
    "normalizedSearchText": "湖南永州辖辖湖南永州"
  },
  {
    "code": "431171",
    "name": "永州经济技术开发区",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 永州经济技术开发区",
    "rank": 3,
    "normalizedName": "永州经济技术开发",
    "normalizedValue": "湖南永州永州经济技术开发",
    "normalizedSearchText": "湖南永州永州经济技术开发永州经济技术开发湖南永州"
  },
  {
    "code": "431173",
    "name": "永州市回龙圩管理区",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 永州市回龙圩管理区",
    "rank": 3,
    "normalizedName": "永州回龙圩管理",
    "normalizedValue": "湖南永州永州回龙圩管理",
    "normalizedSearchText": "湖南永州永州回龙圩管理永州回龙圩管理湖南永州"
  },
  {
    "code": "431181",
    "name": "祁阳市",
    "detail": "湖南省 / 永州市",
    "value": "湖南省 / 永州市 / 祁阳市",
    "rank": 3,
    "normalizedName": "祁阳",
    "normalizedValue": "湖南永州祁阳",
    "normalizedSearchText": "湖南永州祁阳祁阳湖南永州"
  },
  {
    "code": "431200",
    "name": "怀化市",
    "detail": "湖南省",
    "value": "湖南省 / 怀化市",
    "rank": 2,
    "normalizedName": "怀化",
    "normalizedValue": "湖南怀化",
    "normalizedSearchText": "湖南怀化怀化湖南"
  },
  {
    "code": "431202",
    "name": "鹤城区",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 鹤城区",
    "rank": 3,
    "normalizedName": "鹤城",
    "normalizedValue": "湖南怀化鹤城",
    "normalizedSearchText": "湖南怀化鹤城鹤城湖南怀化"
  },
  {
    "code": "431221",
    "name": "中方县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 中方县",
    "rank": 3,
    "normalizedName": "中方",
    "normalizedValue": "湖南怀化中方",
    "normalizedSearchText": "湖南怀化中方中方湖南怀化"
  },
  {
    "code": "431222",
    "name": "沅陵县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 沅陵县",
    "rank": 3,
    "normalizedName": "沅陵",
    "normalizedValue": "湖南怀化沅陵",
    "normalizedSearchText": "湖南怀化沅陵沅陵湖南怀化"
  },
  {
    "code": "431223",
    "name": "辰溪县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 辰溪县",
    "rank": 3,
    "normalizedName": "辰溪",
    "normalizedValue": "湖南怀化辰溪",
    "normalizedSearchText": "湖南怀化辰溪辰溪湖南怀化"
  },
  {
    "code": "431224",
    "name": "溆浦县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 溆浦县",
    "rank": 3,
    "normalizedName": "溆浦",
    "normalizedValue": "湖南怀化溆浦",
    "normalizedSearchText": "湖南怀化溆浦溆浦湖南怀化"
  },
  {
    "code": "431225",
    "name": "会同县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 会同县",
    "rank": 3,
    "normalizedName": "会同",
    "normalizedValue": "湖南怀化会同",
    "normalizedSearchText": "湖南怀化会同会同湖南怀化"
  },
  {
    "code": "431226",
    "name": "麻阳苗族自治县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 麻阳苗族自治县",
    "rank": 3,
    "normalizedName": "麻阳苗族自治",
    "normalizedValue": "湖南怀化麻阳苗族自治",
    "normalizedSearchText": "湖南怀化麻阳苗族自治麻阳苗族自治湖南怀化"
  },
  {
    "code": "431227",
    "name": "新晃侗族自治县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 新晃侗族自治县",
    "rank": 3,
    "normalizedName": "新晃侗族自治",
    "normalizedValue": "湖南怀化新晃侗族自治",
    "normalizedSearchText": "湖南怀化新晃侗族自治新晃侗族自治湖南怀化"
  },
  {
    "code": "431228",
    "name": "芷江侗族自治县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 芷江侗族自治县",
    "rank": 3,
    "normalizedName": "芷江侗族自治",
    "normalizedValue": "湖南怀化芷江侗族自治",
    "normalizedSearchText": "湖南怀化芷江侗族自治芷江侗族自治湖南怀化"
  },
  {
    "code": "431229",
    "name": "靖州苗族侗族自治县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 靖州苗族侗族自治县",
    "rank": 3,
    "normalizedName": "靖州苗族侗族自治",
    "normalizedValue": "湖南怀化靖州苗族侗族自治",
    "normalizedSearchText": "湖南怀化靖州苗族侗族自治靖州苗族侗族自治湖南怀化"
  },
  {
    "code": "431230",
    "name": "通道侗族自治县",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 通道侗族自治县",
    "rank": 3,
    "normalizedName": "通道侗族自治",
    "normalizedValue": "湖南怀化通道侗族自治",
    "normalizedSearchText": "湖南怀化通道侗族自治通道侗族自治湖南怀化"
  },
  {
    "code": "431281",
    "name": "洪江市",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 洪江市",
    "rank": 3,
    "normalizedName": "洪江",
    "normalizedValue": "湖南怀化洪江",
    "normalizedSearchText": "湖南怀化洪江洪江湖南怀化"
  },
  {
    "code": "431201",
    "name": "市辖区",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南怀化辖",
    "normalizedSearchText": "湖南怀化辖辖湖南怀化"
  },
  {
    "code": "431271",
    "name": "怀化市洪江管理区",
    "detail": "湖南省 / 怀化市",
    "value": "湖南省 / 怀化市 / 怀化市洪江管理区",
    "rank": 3,
    "normalizedName": "怀化洪江管理",
    "normalizedValue": "湖南怀化怀化洪江管理",
    "normalizedSearchText": "湖南怀化怀化洪江管理怀化洪江管理湖南怀化"
  },
  {
    "code": "431300",
    "name": "娄底市",
    "detail": "湖南省",
    "value": "湖南省 / 娄底市",
    "rank": 2,
    "normalizedName": "娄底",
    "normalizedValue": "湖南娄底",
    "normalizedSearchText": "湖南娄底娄底湖南"
  },
  {
    "code": "431302",
    "name": "娄星区",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 娄星区",
    "rank": 3,
    "normalizedName": "娄星",
    "normalizedValue": "湖南娄底娄星",
    "normalizedSearchText": "湖南娄底娄星娄星湖南娄底"
  },
  {
    "code": "431321",
    "name": "双峰县",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 双峰县",
    "rank": 3,
    "normalizedName": "双峰",
    "normalizedValue": "湖南娄底双峰",
    "normalizedSearchText": "湖南娄底双峰双峰湖南娄底"
  },
  {
    "code": "431322",
    "name": "新化县",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 新化县",
    "rank": 3,
    "normalizedName": "新化",
    "normalizedValue": "湖南娄底新化",
    "normalizedSearchText": "湖南娄底新化新化湖南娄底"
  },
  {
    "code": "431381",
    "name": "冷水江市",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 冷水江市",
    "rank": 3,
    "normalizedName": "冷水江",
    "normalizedValue": "湖南娄底冷水江",
    "normalizedSearchText": "湖南娄底冷水江冷水江湖南娄底"
  },
  {
    "code": "431382",
    "name": "涟源市",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 涟源市",
    "rank": 3,
    "normalizedName": "涟源",
    "normalizedValue": "湖南娄底涟源",
    "normalizedSearchText": "湖南娄底涟源涟源湖南娄底"
  },
  {
    "code": "431301",
    "name": "市辖区",
    "detail": "湖南省 / 娄底市",
    "value": "湖南省 / 娄底市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "湖南娄底辖",
    "normalizedSearchText": "湖南娄底辖辖湖南娄底"
  },
  {
    "code": "433100",
    "name": "湘西土家族苗族自治州",
    "detail": "湖南省",
    "value": "湖南省 / 湘西土家族苗族自治州",
    "rank": 2,
    "normalizedName": "湘西土家族苗族",
    "normalizedValue": "湖南湘西土家族苗族",
    "normalizedSearchText": "湖南湘西土家族苗族湘西土家族苗族湖南"
  },
  {
    "code": "433101",
    "name": "吉首市",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 吉首市",
    "rank": 3,
    "normalizedName": "吉首",
    "normalizedValue": "湖南湘西土家族苗族吉首",
    "normalizedSearchText": "湖南湘西土家族苗族吉首吉首湖南湘西土家族苗族"
  },
  {
    "code": "433122",
    "name": "泸溪县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 泸溪县",
    "rank": 3,
    "normalizedName": "泸溪",
    "normalizedValue": "湖南湘西土家族苗族泸溪",
    "normalizedSearchText": "湖南湘西土家族苗族泸溪泸溪湖南湘西土家族苗族"
  },
  {
    "code": "433123",
    "name": "凤凰县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 凤凰县",
    "rank": 3,
    "normalizedName": "凤凰",
    "normalizedValue": "湖南湘西土家族苗族凤凰",
    "normalizedSearchText": "湖南湘西土家族苗族凤凰凤凰湖南湘西土家族苗族"
  },
  {
    "code": "433124",
    "name": "花垣县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 花垣县",
    "rank": 3,
    "normalizedName": "花垣",
    "normalizedValue": "湖南湘西土家族苗族花垣",
    "normalizedSearchText": "湖南湘西土家族苗族花垣花垣湖南湘西土家族苗族"
  },
  {
    "code": "433125",
    "name": "保靖县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 保靖县",
    "rank": 3,
    "normalizedName": "保靖",
    "normalizedValue": "湖南湘西土家族苗族保靖",
    "normalizedSearchText": "湖南湘西土家族苗族保靖保靖湖南湘西土家族苗族"
  },
  {
    "code": "433126",
    "name": "古丈县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 古丈县",
    "rank": 3,
    "normalizedName": "古丈",
    "normalizedValue": "湖南湘西土家族苗族古丈",
    "normalizedSearchText": "湖南湘西土家族苗族古丈古丈湖南湘西土家族苗族"
  },
  {
    "code": "433127",
    "name": "永顺县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 永顺县",
    "rank": 3,
    "normalizedName": "永顺",
    "normalizedValue": "湖南湘西土家族苗族永顺",
    "normalizedSearchText": "湖南湘西土家族苗族永顺永顺湖南湘西土家族苗族"
  },
  {
    "code": "433130",
    "name": "龙山县",
    "detail": "湖南省 / 湘西土家族苗族自治州",
    "value": "湖南省 / 湘西土家族苗族自治州 / 龙山县",
    "rank": 3,
    "normalizedName": "龙山",
    "normalizedValue": "湖南湘西土家族苗族龙山",
    "normalizedSearchText": "湖南湘西土家族苗族龙山龙山湖南湘西土家族苗族"
  },
  {
    "code": "440000",
    "name": "广东省",
    "detail": "?????",
    "value": "广东省",
    "rank": 1,
    "normalizedName": "广东",
    "normalizedValue": "广东",
    "normalizedSearchText": "广东广东"
  },
  {
    "code": "440100",
    "name": "广州市",
    "detail": "广东省",
    "value": "广东省 / 广州市",
    "rank": 2,
    "normalizedName": "广州",
    "normalizedValue": "广东广州",
    "normalizedSearchText": "广东广州广州广东"
  },
  {
    "code": "440103",
    "name": "荔湾区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 荔湾区",
    "rank": 3,
    "normalizedName": "荔湾",
    "normalizedValue": "广东广州荔湾",
    "normalizedSearchText": "广东广州荔湾荔湾广东广州"
  },
  {
    "code": "440104",
    "name": "越秀区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 越秀区",
    "rank": 3,
    "normalizedName": "越秀",
    "normalizedValue": "广东广州越秀",
    "normalizedSearchText": "广东广州越秀越秀广东广州"
  },
  {
    "code": "440105",
    "name": "海珠区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 海珠区",
    "rank": 3,
    "normalizedName": "海珠",
    "normalizedValue": "广东广州海珠",
    "normalizedSearchText": "广东广州海珠海珠广东广州"
  },
  {
    "code": "440106",
    "name": "天河区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 天河区",
    "rank": 3,
    "normalizedName": "天河",
    "normalizedValue": "广东广州天河",
    "normalizedSearchText": "广东广州天河天河广东广州"
  },
  {
    "code": "440111",
    "name": "白云区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 白云区",
    "rank": 3,
    "normalizedName": "白云",
    "normalizedValue": "广东广州白云",
    "normalizedSearchText": "广东广州白云白云广东广州"
  },
  {
    "code": "440112",
    "name": "黄埔区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 黄埔区",
    "rank": 3,
    "normalizedName": "黄埔",
    "normalizedValue": "广东广州黄埔",
    "normalizedSearchText": "广东广州黄埔黄埔广东广州"
  },
  {
    "code": "440113",
    "name": "番禺区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 番禺区",
    "rank": 3,
    "normalizedName": "番禺",
    "normalizedValue": "广东广州番禺",
    "normalizedSearchText": "广东广州番禺番禺广东广州"
  },
  {
    "code": "440114",
    "name": "花都区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 花都区",
    "rank": 3,
    "normalizedName": "花都",
    "normalizedValue": "广东广州花都",
    "normalizedSearchText": "广东广州花都花都广东广州"
  },
  {
    "code": "440115",
    "name": "南沙区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 南沙区",
    "rank": 3,
    "normalizedName": "南沙",
    "normalizedValue": "广东广州南沙",
    "normalizedSearchText": "广东广州南沙南沙广东广州"
  },
  {
    "code": "440117",
    "name": "从化区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 从化区",
    "rank": 3,
    "normalizedName": "从化",
    "normalizedValue": "广东广州从化",
    "normalizedSearchText": "广东广州从化从化广东广州"
  },
  {
    "code": "440118",
    "name": "增城区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 增城区",
    "rank": 3,
    "normalizedName": "增城",
    "normalizedValue": "广东广州增城",
    "normalizedSearchText": "广东广州增城增城广东广州"
  },
  {
    "code": "440101",
    "name": "市辖区",
    "detail": "广东省 / 广州市",
    "value": "广东省 / 广州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东广州辖",
    "normalizedSearchText": "广东广州辖辖广东广州"
  },
  {
    "code": "440200",
    "name": "韶关市",
    "detail": "广东省",
    "value": "广东省 / 韶关市",
    "rank": 2,
    "normalizedName": "韶关",
    "normalizedValue": "广东韶关",
    "normalizedSearchText": "广东韶关韶关广东"
  },
  {
    "code": "440203",
    "name": "武江区",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 武江区",
    "rank": 3,
    "normalizedName": "武江",
    "normalizedValue": "广东韶关武江",
    "normalizedSearchText": "广东韶关武江武江广东韶关"
  },
  {
    "code": "440204",
    "name": "浈江区",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 浈江区",
    "rank": 3,
    "normalizedName": "浈江",
    "normalizedValue": "广东韶关浈江",
    "normalizedSearchText": "广东韶关浈江浈江广东韶关"
  },
  {
    "code": "440205",
    "name": "曲江区",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 曲江区",
    "rank": 3,
    "normalizedName": "曲江",
    "normalizedValue": "广东韶关曲江",
    "normalizedSearchText": "广东韶关曲江曲江广东韶关"
  },
  {
    "code": "440222",
    "name": "始兴县",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 始兴县",
    "rank": 3,
    "normalizedName": "始兴",
    "normalizedValue": "广东韶关始兴",
    "normalizedSearchText": "广东韶关始兴始兴广东韶关"
  },
  {
    "code": "440224",
    "name": "仁化县",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 仁化县",
    "rank": 3,
    "normalizedName": "仁化",
    "normalizedValue": "广东韶关仁化",
    "normalizedSearchText": "广东韶关仁化仁化广东韶关"
  },
  {
    "code": "440229",
    "name": "翁源县",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 翁源县",
    "rank": 3,
    "normalizedName": "翁源",
    "normalizedValue": "广东韶关翁源",
    "normalizedSearchText": "广东韶关翁源翁源广东韶关"
  },
  {
    "code": "440232",
    "name": "乳源瑶族自治县",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 乳源瑶族自治县",
    "rank": 3,
    "normalizedName": "乳源瑶族自治",
    "normalizedValue": "广东韶关乳源瑶族自治",
    "normalizedSearchText": "广东韶关乳源瑶族自治乳源瑶族自治广东韶关"
  },
  {
    "code": "440233",
    "name": "新丰县",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 新丰县",
    "rank": 3,
    "normalizedName": "新丰",
    "normalizedValue": "广东韶关新丰",
    "normalizedSearchText": "广东韶关新丰新丰广东韶关"
  },
  {
    "code": "440281",
    "name": "乐昌市",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 乐昌市",
    "rank": 3,
    "normalizedName": "乐昌",
    "normalizedValue": "广东韶关乐昌",
    "normalizedSearchText": "广东韶关乐昌乐昌广东韶关"
  },
  {
    "code": "440282",
    "name": "南雄市",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 南雄市",
    "rank": 3,
    "normalizedName": "南雄",
    "normalizedValue": "广东韶关南雄",
    "normalizedSearchText": "广东韶关南雄南雄广东韶关"
  },
  {
    "code": "440201",
    "name": "市辖区",
    "detail": "广东省 / 韶关市",
    "value": "广东省 / 韶关市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东韶关辖",
    "normalizedSearchText": "广东韶关辖辖广东韶关"
  },
  {
    "code": "440300",
    "name": "深圳市",
    "detail": "广东省",
    "value": "广东省 / 深圳市",
    "rank": 2,
    "normalizedName": "深圳",
    "normalizedValue": "广东深圳",
    "normalizedSearchText": "广东深圳深圳广东"
  },
  {
    "code": "440303",
    "name": "罗湖区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 罗湖区",
    "rank": 3,
    "normalizedName": "罗湖",
    "normalizedValue": "广东深圳罗湖",
    "normalizedSearchText": "广东深圳罗湖罗湖广东深圳"
  },
  {
    "code": "440304",
    "name": "福田区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 福田区",
    "rank": 3,
    "normalizedName": "福田",
    "normalizedValue": "广东深圳福田",
    "normalizedSearchText": "广东深圳福田福田广东深圳"
  },
  {
    "code": "440305",
    "name": "南山区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 南山区",
    "rank": 3,
    "normalizedName": "南山",
    "normalizedValue": "广东深圳南山",
    "normalizedSearchText": "广东深圳南山南山广东深圳"
  },
  {
    "code": "440306",
    "name": "宝安区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 宝安区",
    "rank": 3,
    "normalizedName": "宝安",
    "normalizedValue": "广东深圳宝安",
    "normalizedSearchText": "广东深圳宝安宝安广东深圳"
  },
  {
    "code": "440307",
    "name": "龙岗区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 龙岗区",
    "rank": 3,
    "normalizedName": "龙岗",
    "normalizedValue": "广东深圳龙岗",
    "normalizedSearchText": "广东深圳龙岗龙岗广东深圳"
  },
  {
    "code": "440308",
    "name": "盐田区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 盐田区",
    "rank": 3,
    "normalizedName": "盐田",
    "normalizedValue": "广东深圳盐田",
    "normalizedSearchText": "广东深圳盐田盐田广东深圳"
  },
  {
    "code": "440309",
    "name": "龙华区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 龙华区",
    "rank": 3,
    "normalizedName": "龙华",
    "normalizedValue": "广东深圳龙华",
    "normalizedSearchText": "广东深圳龙华龙华广东深圳"
  },
  {
    "code": "440310",
    "name": "坪山区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 坪山区",
    "rank": 3,
    "normalizedName": "坪山",
    "normalizedValue": "广东深圳坪山",
    "normalizedSearchText": "广东深圳坪山坪山广东深圳"
  },
  {
    "code": "440311",
    "name": "光明区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 光明区",
    "rank": 3,
    "normalizedName": "光明",
    "normalizedValue": "广东深圳光明",
    "normalizedSearchText": "广东深圳光明光明广东深圳"
  },
  {
    "code": "440301",
    "name": "市辖区",
    "detail": "广东省 / 深圳市",
    "value": "广东省 / 深圳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东深圳辖",
    "normalizedSearchText": "广东深圳辖辖广东深圳"
  },
  {
    "code": "440400",
    "name": "珠海市",
    "detail": "广东省",
    "value": "广东省 / 珠海市",
    "rank": 2,
    "normalizedName": "珠海",
    "normalizedValue": "广东珠海",
    "normalizedSearchText": "广东珠海珠海广东"
  },
  {
    "code": "440402",
    "name": "香洲区",
    "detail": "广东省 / 珠海市",
    "value": "广东省 / 珠海市 / 香洲区",
    "rank": 3,
    "normalizedName": "香洲",
    "normalizedValue": "广东珠海香洲",
    "normalizedSearchText": "广东珠海香洲香洲广东珠海"
  },
  {
    "code": "440403",
    "name": "斗门区",
    "detail": "广东省 / 珠海市",
    "value": "广东省 / 珠海市 / 斗门区",
    "rank": 3,
    "normalizedName": "斗门",
    "normalizedValue": "广东珠海斗门",
    "normalizedSearchText": "广东珠海斗门斗门广东珠海"
  },
  {
    "code": "440404",
    "name": "金湾区",
    "detail": "广东省 / 珠海市",
    "value": "广东省 / 珠海市 / 金湾区",
    "rank": 3,
    "normalizedName": "金湾",
    "normalizedValue": "广东珠海金湾",
    "normalizedSearchText": "广东珠海金湾金湾广东珠海"
  },
  {
    "code": "440401",
    "name": "市辖区",
    "detail": "广东省 / 珠海市",
    "value": "广东省 / 珠海市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东珠海辖",
    "normalizedSearchText": "广东珠海辖辖广东珠海"
  },
  {
    "code": "440500",
    "name": "汕头市",
    "detail": "广东省",
    "value": "广东省 / 汕头市",
    "rank": 2,
    "normalizedName": "汕头",
    "normalizedValue": "广东汕头",
    "normalizedSearchText": "广东汕头汕头广东"
  },
  {
    "code": "440507",
    "name": "龙湖区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 龙湖区",
    "rank": 3,
    "normalizedName": "龙湖",
    "normalizedValue": "广东汕头龙湖",
    "normalizedSearchText": "广东汕头龙湖龙湖广东汕头"
  },
  {
    "code": "440511",
    "name": "金平区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 金平区",
    "rank": 3,
    "normalizedName": "金平",
    "normalizedValue": "广东汕头金平",
    "normalizedSearchText": "广东汕头金平金平广东汕头"
  },
  {
    "code": "440512",
    "name": "濠江区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 濠江区",
    "rank": 3,
    "normalizedName": "濠江",
    "normalizedValue": "广东汕头濠江",
    "normalizedSearchText": "广东汕头濠江濠江广东汕头"
  },
  {
    "code": "440513",
    "name": "潮阳区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 潮阳区",
    "rank": 3,
    "normalizedName": "潮阳",
    "normalizedValue": "广东汕头潮阳",
    "normalizedSearchText": "广东汕头潮阳潮阳广东汕头"
  },
  {
    "code": "440514",
    "name": "潮南区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 潮南区",
    "rank": 3,
    "normalizedName": "潮南",
    "normalizedValue": "广东汕头潮南",
    "normalizedSearchText": "广东汕头潮南潮南广东汕头"
  },
  {
    "code": "440515",
    "name": "澄海区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 澄海区",
    "rank": 3,
    "normalizedName": "澄海",
    "normalizedValue": "广东汕头澄海",
    "normalizedSearchText": "广东汕头澄海澄海广东汕头"
  },
  {
    "code": "440523",
    "name": "南澳县",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 南澳县",
    "rank": 3,
    "normalizedName": "南澳",
    "normalizedValue": "广东汕头南澳",
    "normalizedSearchText": "广东汕头南澳南澳广东汕头"
  },
  {
    "code": "440501",
    "name": "市辖区",
    "detail": "广东省 / 汕头市",
    "value": "广东省 / 汕头市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东汕头辖",
    "normalizedSearchText": "广东汕头辖辖广东汕头"
  },
  {
    "code": "440600",
    "name": "佛山市",
    "detail": "广东省",
    "value": "广东省 / 佛山市",
    "rank": 2,
    "normalizedName": "佛山",
    "normalizedValue": "广东佛山",
    "normalizedSearchText": "广东佛山佛山广东"
  },
  {
    "code": "440604",
    "name": "禅城区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 禅城区",
    "rank": 3,
    "normalizedName": "禅城",
    "normalizedValue": "广东佛山禅城",
    "normalizedSearchText": "广东佛山禅城禅城广东佛山"
  },
  {
    "code": "440605",
    "name": "南海区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 南海区",
    "rank": 3,
    "normalizedName": "南海",
    "normalizedValue": "广东佛山南海",
    "normalizedSearchText": "广东佛山南海南海广东佛山"
  },
  {
    "code": "440606",
    "name": "顺德区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 顺德区",
    "rank": 3,
    "normalizedName": "顺德",
    "normalizedValue": "广东佛山顺德",
    "normalizedSearchText": "广东佛山顺德顺德广东佛山"
  },
  {
    "code": "440607",
    "name": "三水区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 三水区",
    "rank": 3,
    "normalizedName": "三水",
    "normalizedValue": "广东佛山三水",
    "normalizedSearchText": "广东佛山三水三水广东佛山"
  },
  {
    "code": "440608",
    "name": "高明区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 高明区",
    "rank": 3,
    "normalizedName": "高明",
    "normalizedValue": "广东佛山高明",
    "normalizedSearchText": "广东佛山高明高明广东佛山"
  },
  {
    "code": "440601",
    "name": "市辖区",
    "detail": "广东省 / 佛山市",
    "value": "广东省 / 佛山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东佛山辖",
    "normalizedSearchText": "广东佛山辖辖广东佛山"
  },
  {
    "code": "440700",
    "name": "江门市",
    "detail": "广东省",
    "value": "广东省 / 江门市",
    "rank": 2,
    "normalizedName": "江门",
    "normalizedValue": "广东江门",
    "normalizedSearchText": "广东江门江门广东"
  },
  {
    "code": "440703",
    "name": "蓬江区",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 蓬江区",
    "rank": 3,
    "normalizedName": "蓬江",
    "normalizedValue": "广东江门蓬江",
    "normalizedSearchText": "广东江门蓬江蓬江广东江门"
  },
  {
    "code": "440704",
    "name": "江海区",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 江海区",
    "rank": 3,
    "normalizedName": "江海",
    "normalizedValue": "广东江门江海",
    "normalizedSearchText": "广东江门江海江海广东江门"
  },
  {
    "code": "440705",
    "name": "新会区",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 新会区",
    "rank": 3,
    "normalizedName": "新会",
    "normalizedValue": "广东江门新会",
    "normalizedSearchText": "广东江门新会新会广东江门"
  },
  {
    "code": "440781",
    "name": "台山市",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 台山市",
    "rank": 3,
    "normalizedName": "台山",
    "normalizedValue": "广东江门台山",
    "normalizedSearchText": "广东江门台山台山广东江门"
  },
  {
    "code": "440783",
    "name": "开平市",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 开平市",
    "rank": 3,
    "normalizedName": "开平",
    "normalizedValue": "广东江门开平",
    "normalizedSearchText": "广东江门开平开平广东江门"
  },
  {
    "code": "440784",
    "name": "鹤山市",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 鹤山市",
    "rank": 3,
    "normalizedName": "鹤山",
    "normalizedValue": "广东江门鹤山",
    "normalizedSearchText": "广东江门鹤山鹤山广东江门"
  },
  {
    "code": "440785",
    "name": "恩平市",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 恩平市",
    "rank": 3,
    "normalizedName": "恩平",
    "normalizedValue": "广东江门恩平",
    "normalizedSearchText": "广东江门恩平恩平广东江门"
  },
  {
    "code": "440701",
    "name": "市辖区",
    "detail": "广东省 / 江门市",
    "value": "广东省 / 江门市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东江门辖",
    "normalizedSearchText": "广东江门辖辖广东江门"
  },
  {
    "code": "440800",
    "name": "湛江市",
    "detail": "广东省",
    "value": "广东省 / 湛江市",
    "rank": 2,
    "normalizedName": "湛江",
    "normalizedValue": "广东湛江",
    "normalizedSearchText": "广东湛江湛江广东"
  },
  {
    "code": "440802",
    "name": "赤坎区",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 赤坎区",
    "rank": 3,
    "normalizedName": "赤坎",
    "normalizedValue": "广东湛江赤坎",
    "normalizedSearchText": "广东湛江赤坎赤坎广东湛江"
  },
  {
    "code": "440803",
    "name": "霞山区",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 霞山区",
    "rank": 3,
    "normalizedName": "霞山",
    "normalizedValue": "广东湛江霞山",
    "normalizedSearchText": "广东湛江霞山霞山广东湛江"
  },
  {
    "code": "440804",
    "name": "坡头区",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 坡头区",
    "rank": 3,
    "normalizedName": "坡头",
    "normalizedValue": "广东湛江坡头",
    "normalizedSearchText": "广东湛江坡头坡头广东湛江"
  },
  {
    "code": "440811",
    "name": "麻章区",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 麻章区",
    "rank": 3,
    "normalizedName": "麻章",
    "normalizedValue": "广东湛江麻章",
    "normalizedSearchText": "广东湛江麻章麻章广东湛江"
  },
  {
    "code": "440823",
    "name": "遂溪县",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 遂溪县",
    "rank": 3,
    "normalizedName": "遂溪",
    "normalizedValue": "广东湛江遂溪",
    "normalizedSearchText": "广东湛江遂溪遂溪广东湛江"
  },
  {
    "code": "440825",
    "name": "徐闻县",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 徐闻县",
    "rank": 3,
    "normalizedName": "徐闻",
    "normalizedValue": "广东湛江徐闻",
    "normalizedSearchText": "广东湛江徐闻徐闻广东湛江"
  },
  {
    "code": "440881",
    "name": "廉江市",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 廉江市",
    "rank": 3,
    "normalizedName": "廉江",
    "normalizedValue": "广东湛江廉江",
    "normalizedSearchText": "广东湛江廉江廉江广东湛江"
  },
  {
    "code": "440882",
    "name": "雷州市",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 雷州市",
    "rank": 3,
    "normalizedName": "雷州",
    "normalizedValue": "广东湛江雷州",
    "normalizedSearchText": "广东湛江雷州雷州广东湛江"
  },
  {
    "code": "440883",
    "name": "吴川市",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 吴川市",
    "rank": 3,
    "normalizedName": "吴川",
    "normalizedValue": "广东湛江吴川",
    "normalizedSearchText": "广东湛江吴川吴川广东湛江"
  },
  {
    "code": "440801",
    "name": "市辖区",
    "detail": "广东省 / 湛江市",
    "value": "广东省 / 湛江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东湛江辖",
    "normalizedSearchText": "广东湛江辖辖广东湛江"
  },
  {
    "code": "440900",
    "name": "茂名市",
    "detail": "广东省",
    "value": "广东省 / 茂名市",
    "rank": 2,
    "normalizedName": "茂名",
    "normalizedValue": "广东茂名",
    "normalizedSearchText": "广东茂名茂名广东"
  },
  {
    "code": "440902",
    "name": "茂南区",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 茂南区",
    "rank": 3,
    "normalizedName": "茂南",
    "normalizedValue": "广东茂名茂南",
    "normalizedSearchText": "广东茂名茂南茂南广东茂名"
  },
  {
    "code": "440904",
    "name": "电白区",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 电白区",
    "rank": 3,
    "normalizedName": "电白",
    "normalizedValue": "广东茂名电白",
    "normalizedSearchText": "广东茂名电白电白广东茂名"
  },
  {
    "code": "440981",
    "name": "高州市",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 高州市",
    "rank": 3,
    "normalizedName": "高州",
    "normalizedValue": "广东茂名高州",
    "normalizedSearchText": "广东茂名高州高州广东茂名"
  },
  {
    "code": "440982",
    "name": "化州市",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 化州市",
    "rank": 3,
    "normalizedName": "化州",
    "normalizedValue": "广东茂名化州",
    "normalizedSearchText": "广东茂名化州化州广东茂名"
  },
  {
    "code": "440983",
    "name": "信宜市",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 信宜市",
    "rank": 3,
    "normalizedName": "信宜",
    "normalizedValue": "广东茂名信宜",
    "normalizedSearchText": "广东茂名信宜信宜广东茂名"
  },
  {
    "code": "440901",
    "name": "市辖区",
    "detail": "广东省 / 茂名市",
    "value": "广东省 / 茂名市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东茂名辖",
    "normalizedSearchText": "广东茂名辖辖广东茂名"
  },
  {
    "code": "441200",
    "name": "肇庆市",
    "detail": "广东省",
    "value": "广东省 / 肇庆市",
    "rank": 2,
    "normalizedName": "肇庆",
    "normalizedValue": "广东肇庆",
    "normalizedSearchText": "广东肇庆肇庆广东"
  },
  {
    "code": "441202",
    "name": "端州区",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 端州区",
    "rank": 3,
    "normalizedName": "端州",
    "normalizedValue": "广东肇庆端州",
    "normalizedSearchText": "广东肇庆端州端州广东肇庆"
  },
  {
    "code": "441203",
    "name": "鼎湖区",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 鼎湖区",
    "rank": 3,
    "normalizedName": "鼎湖",
    "normalizedValue": "广东肇庆鼎湖",
    "normalizedSearchText": "广东肇庆鼎湖鼎湖广东肇庆"
  },
  {
    "code": "441204",
    "name": "高要区",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 高要区",
    "rank": 3,
    "normalizedName": "高要",
    "normalizedValue": "广东肇庆高要",
    "normalizedSearchText": "广东肇庆高要高要广东肇庆"
  },
  {
    "code": "441223",
    "name": "广宁县",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 广宁县",
    "rank": 3,
    "normalizedName": "广宁",
    "normalizedValue": "广东肇庆广宁",
    "normalizedSearchText": "广东肇庆广宁广宁广东肇庆"
  },
  {
    "code": "441224",
    "name": "怀集县",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 怀集县",
    "rank": 3,
    "normalizedName": "怀集",
    "normalizedValue": "广东肇庆怀集",
    "normalizedSearchText": "广东肇庆怀集怀集广东肇庆"
  },
  {
    "code": "441225",
    "name": "封开县",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 封开县",
    "rank": 3,
    "normalizedName": "封开",
    "normalizedValue": "广东肇庆封开",
    "normalizedSearchText": "广东肇庆封开封开广东肇庆"
  },
  {
    "code": "441226",
    "name": "德庆县",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 德庆县",
    "rank": 3,
    "normalizedName": "德庆",
    "normalizedValue": "广东肇庆德庆",
    "normalizedSearchText": "广东肇庆德庆德庆广东肇庆"
  },
  {
    "code": "441284",
    "name": "四会市",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 四会市",
    "rank": 3,
    "normalizedName": "四会",
    "normalizedValue": "广东肇庆四会",
    "normalizedSearchText": "广东肇庆四会四会广东肇庆"
  },
  {
    "code": "441201",
    "name": "市辖区",
    "detail": "广东省 / 肇庆市",
    "value": "广东省 / 肇庆市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东肇庆辖",
    "normalizedSearchText": "广东肇庆辖辖广东肇庆"
  },
  {
    "code": "441300",
    "name": "惠州市",
    "detail": "广东省",
    "value": "广东省 / 惠州市",
    "rank": 2,
    "normalizedName": "惠州",
    "normalizedValue": "广东惠州",
    "normalizedSearchText": "广东惠州惠州广东"
  },
  {
    "code": "441302",
    "name": "惠城区",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 惠城区",
    "rank": 3,
    "normalizedName": "惠城",
    "normalizedValue": "广东惠州惠城",
    "normalizedSearchText": "广东惠州惠城惠城广东惠州"
  },
  {
    "code": "441303",
    "name": "惠阳区",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 惠阳区",
    "rank": 3,
    "normalizedName": "惠阳",
    "normalizedValue": "广东惠州惠阳",
    "normalizedSearchText": "广东惠州惠阳惠阳广东惠州"
  },
  {
    "code": "441322",
    "name": "博罗县",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 博罗县",
    "rank": 3,
    "normalizedName": "博罗",
    "normalizedValue": "广东惠州博罗",
    "normalizedSearchText": "广东惠州博罗博罗广东惠州"
  },
  {
    "code": "441323",
    "name": "惠东县",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 惠东县",
    "rank": 3,
    "normalizedName": "惠东",
    "normalizedValue": "广东惠州惠东",
    "normalizedSearchText": "广东惠州惠东惠东广东惠州"
  },
  {
    "code": "441324",
    "name": "龙门县",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 龙门县",
    "rank": 3,
    "normalizedName": "龙门",
    "normalizedValue": "广东惠州龙门",
    "normalizedSearchText": "广东惠州龙门龙门广东惠州"
  },
  {
    "code": "441301",
    "name": "市辖区",
    "detail": "广东省 / 惠州市",
    "value": "广东省 / 惠州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东惠州辖",
    "normalizedSearchText": "广东惠州辖辖广东惠州"
  },
  {
    "code": "441400",
    "name": "梅州市",
    "detail": "广东省",
    "value": "广东省 / 梅州市",
    "rank": 2,
    "normalizedName": "梅州",
    "normalizedValue": "广东梅州",
    "normalizedSearchText": "广东梅州梅州广东"
  },
  {
    "code": "441402",
    "name": "梅江区",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 梅江区",
    "rank": 3,
    "normalizedName": "梅江",
    "normalizedValue": "广东梅州梅江",
    "normalizedSearchText": "广东梅州梅江梅江广东梅州"
  },
  {
    "code": "441403",
    "name": "梅县区",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 梅县区",
    "rank": 3,
    "normalizedName": "梅",
    "normalizedValue": "广东梅州梅",
    "normalizedSearchText": "广东梅州梅梅广东梅州"
  },
  {
    "code": "441422",
    "name": "大埔县",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 大埔县",
    "rank": 3,
    "normalizedName": "大埔",
    "normalizedValue": "广东梅州大埔",
    "normalizedSearchText": "广东梅州大埔大埔广东梅州"
  },
  {
    "code": "441423",
    "name": "丰顺县",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 丰顺县",
    "rank": 3,
    "normalizedName": "丰顺",
    "normalizedValue": "广东梅州丰顺",
    "normalizedSearchText": "广东梅州丰顺丰顺广东梅州"
  },
  {
    "code": "441424",
    "name": "五华县",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 五华县",
    "rank": 3,
    "normalizedName": "五华",
    "normalizedValue": "广东梅州五华",
    "normalizedSearchText": "广东梅州五华五华广东梅州"
  },
  {
    "code": "441426",
    "name": "平远县",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 平远县",
    "rank": 3,
    "normalizedName": "平远",
    "normalizedValue": "广东梅州平远",
    "normalizedSearchText": "广东梅州平远平远广东梅州"
  },
  {
    "code": "441427",
    "name": "蕉岭县",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 蕉岭县",
    "rank": 3,
    "normalizedName": "蕉岭",
    "normalizedValue": "广东梅州蕉岭",
    "normalizedSearchText": "广东梅州蕉岭蕉岭广东梅州"
  },
  {
    "code": "441481",
    "name": "兴宁市",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 兴宁市",
    "rank": 3,
    "normalizedName": "兴宁",
    "normalizedValue": "广东梅州兴宁",
    "normalizedSearchText": "广东梅州兴宁兴宁广东梅州"
  },
  {
    "code": "441401",
    "name": "市辖区",
    "detail": "广东省 / 梅州市",
    "value": "广东省 / 梅州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东梅州辖",
    "normalizedSearchText": "广东梅州辖辖广东梅州"
  },
  {
    "code": "441500",
    "name": "汕尾市",
    "detail": "广东省",
    "value": "广东省 / 汕尾市",
    "rank": 2,
    "normalizedName": "汕尾",
    "normalizedValue": "广东汕尾",
    "normalizedSearchText": "广东汕尾汕尾广东"
  },
  {
    "code": "441502",
    "name": "城区",
    "detail": "广东省 / 汕尾市",
    "value": "广东省 / 汕尾市 / 城区",
    "rank": 3,
    "normalizedName": "城",
    "normalizedValue": "广东汕尾城",
    "normalizedSearchText": "广东汕尾城城广东汕尾"
  },
  {
    "code": "441521",
    "name": "海丰县",
    "detail": "广东省 / 汕尾市",
    "value": "广东省 / 汕尾市 / 海丰县",
    "rank": 3,
    "normalizedName": "海丰",
    "normalizedValue": "广东汕尾海丰",
    "normalizedSearchText": "广东汕尾海丰海丰广东汕尾"
  },
  {
    "code": "441523",
    "name": "陆河县",
    "detail": "广东省 / 汕尾市",
    "value": "广东省 / 汕尾市 / 陆河县",
    "rank": 3,
    "normalizedName": "陆河",
    "normalizedValue": "广东汕尾陆河",
    "normalizedSearchText": "广东汕尾陆河陆河广东汕尾"
  },
  {
    "code": "441581",
    "name": "陆丰市",
    "detail": "广东省 / 汕尾市",
    "value": "广东省 / 汕尾市 / 陆丰市",
    "rank": 3,
    "normalizedName": "陆丰",
    "normalizedValue": "广东汕尾陆丰",
    "normalizedSearchText": "广东汕尾陆丰陆丰广东汕尾"
  },
  {
    "code": "441501",
    "name": "市辖区",
    "detail": "广东省 / 汕尾市",
    "value": "广东省 / 汕尾市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东汕尾辖",
    "normalizedSearchText": "广东汕尾辖辖广东汕尾"
  },
  {
    "code": "441600",
    "name": "河源市",
    "detail": "广东省",
    "value": "广东省 / 河源市",
    "rank": 2,
    "normalizedName": "河源",
    "normalizedValue": "广东河源",
    "normalizedSearchText": "广东河源河源广东"
  },
  {
    "code": "441602",
    "name": "源城区",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 源城区",
    "rank": 3,
    "normalizedName": "源城",
    "normalizedValue": "广东河源源城",
    "normalizedSearchText": "广东河源源城源城广东河源"
  },
  {
    "code": "441621",
    "name": "紫金县",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 紫金县",
    "rank": 3,
    "normalizedName": "紫金",
    "normalizedValue": "广东河源紫金",
    "normalizedSearchText": "广东河源紫金紫金广东河源"
  },
  {
    "code": "441622",
    "name": "龙川县",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 龙川县",
    "rank": 3,
    "normalizedName": "龙川",
    "normalizedValue": "广东河源龙川",
    "normalizedSearchText": "广东河源龙川龙川广东河源"
  },
  {
    "code": "441623",
    "name": "连平县",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 连平县",
    "rank": 3,
    "normalizedName": "连平",
    "normalizedValue": "广东河源连平",
    "normalizedSearchText": "广东河源连平连平广东河源"
  },
  {
    "code": "441624",
    "name": "和平县",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 和平县",
    "rank": 3,
    "normalizedName": "和平",
    "normalizedValue": "广东河源和平",
    "normalizedSearchText": "广东河源和平和平广东河源"
  },
  {
    "code": "441625",
    "name": "东源县",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 东源县",
    "rank": 3,
    "normalizedName": "东源",
    "normalizedValue": "广东河源东源",
    "normalizedSearchText": "广东河源东源东源广东河源"
  },
  {
    "code": "441601",
    "name": "市辖区",
    "detail": "广东省 / 河源市",
    "value": "广东省 / 河源市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东河源辖",
    "normalizedSearchText": "广东河源辖辖广东河源"
  },
  {
    "code": "441700",
    "name": "阳江市",
    "detail": "广东省",
    "value": "广东省 / 阳江市",
    "rank": 2,
    "normalizedName": "阳江",
    "normalizedValue": "广东阳江",
    "normalizedSearchText": "广东阳江阳江广东"
  },
  {
    "code": "441702",
    "name": "江城区",
    "detail": "广东省 / 阳江市",
    "value": "广东省 / 阳江市 / 江城区",
    "rank": 3,
    "normalizedName": "江城",
    "normalizedValue": "广东阳江江城",
    "normalizedSearchText": "广东阳江江城江城广东阳江"
  },
  {
    "code": "441704",
    "name": "阳东区",
    "detail": "广东省 / 阳江市",
    "value": "广东省 / 阳江市 / 阳东区",
    "rank": 3,
    "normalizedName": "阳东",
    "normalizedValue": "广东阳江阳东",
    "normalizedSearchText": "广东阳江阳东阳东广东阳江"
  },
  {
    "code": "441721",
    "name": "阳西县",
    "detail": "广东省 / 阳江市",
    "value": "广东省 / 阳江市 / 阳西县",
    "rank": 3,
    "normalizedName": "阳西",
    "normalizedValue": "广东阳江阳西",
    "normalizedSearchText": "广东阳江阳西阳西广东阳江"
  },
  {
    "code": "441781",
    "name": "阳春市",
    "detail": "广东省 / 阳江市",
    "value": "广东省 / 阳江市 / 阳春市",
    "rank": 3,
    "normalizedName": "阳春",
    "normalizedValue": "广东阳江阳春",
    "normalizedSearchText": "广东阳江阳春阳春广东阳江"
  },
  {
    "code": "441701",
    "name": "市辖区",
    "detail": "广东省 / 阳江市",
    "value": "广东省 / 阳江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东阳江辖",
    "normalizedSearchText": "广东阳江辖辖广东阳江"
  },
  {
    "code": "441800",
    "name": "清远市",
    "detail": "广东省",
    "value": "广东省 / 清远市",
    "rank": 2,
    "normalizedName": "清远",
    "normalizedValue": "广东清远",
    "normalizedSearchText": "广东清远清远广东"
  },
  {
    "code": "441802",
    "name": "清城区",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 清城区",
    "rank": 3,
    "normalizedName": "清城",
    "normalizedValue": "广东清远清城",
    "normalizedSearchText": "广东清远清城清城广东清远"
  },
  {
    "code": "441803",
    "name": "清新区",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 清新区",
    "rank": 3,
    "normalizedName": "清新",
    "normalizedValue": "广东清远清新",
    "normalizedSearchText": "广东清远清新清新广东清远"
  },
  {
    "code": "441821",
    "name": "佛冈县",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 佛冈县",
    "rank": 3,
    "normalizedName": "佛冈",
    "normalizedValue": "广东清远佛冈",
    "normalizedSearchText": "广东清远佛冈佛冈广东清远"
  },
  {
    "code": "441823",
    "name": "阳山县",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 阳山县",
    "rank": 3,
    "normalizedName": "阳山",
    "normalizedValue": "广东清远阳山",
    "normalizedSearchText": "广东清远阳山阳山广东清远"
  },
  {
    "code": "441825",
    "name": "连山壮族瑶族自治县",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 连山壮族瑶族自治县",
    "rank": 3,
    "normalizedName": "连山壮族瑶族自治",
    "normalizedValue": "广东清远连山壮族瑶族自治",
    "normalizedSearchText": "广东清远连山壮族瑶族自治连山壮族瑶族自治广东清远"
  },
  {
    "code": "441826",
    "name": "连南瑶族自治县",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 连南瑶族自治县",
    "rank": 3,
    "normalizedName": "连南瑶族自治",
    "normalizedValue": "广东清远连南瑶族自治",
    "normalizedSearchText": "广东清远连南瑶族自治连南瑶族自治广东清远"
  },
  {
    "code": "441881",
    "name": "英德市",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 英德市",
    "rank": 3,
    "normalizedName": "英德",
    "normalizedValue": "广东清远英德",
    "normalizedSearchText": "广东清远英德英德广东清远"
  },
  {
    "code": "441882",
    "name": "连州市",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 连州市",
    "rank": 3,
    "normalizedName": "连州",
    "normalizedValue": "广东清远连州",
    "normalizedSearchText": "广东清远连州连州广东清远"
  },
  {
    "code": "441801",
    "name": "市辖区",
    "detail": "广东省 / 清远市",
    "value": "广东省 / 清远市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东清远辖",
    "normalizedSearchText": "广东清远辖辖广东清远"
  },
  {
    "code": "441900",
    "name": "东莞市",
    "detail": "广东省",
    "value": "广东省 / 东莞市",
    "rank": 3,
    "normalizedName": "东莞",
    "normalizedValue": "广东东莞",
    "normalizedSearchText": "广东东莞东莞广东"
  },
  {
    "code": "442000",
    "name": "中山市",
    "detail": "广东省",
    "value": "广东省 / 中山市",
    "rank": 3,
    "normalizedName": "中山",
    "normalizedValue": "广东中山",
    "normalizedSearchText": "广东中山中山广东"
  },
  {
    "code": "445100",
    "name": "潮州市",
    "detail": "广东省",
    "value": "广东省 / 潮州市",
    "rank": 2,
    "normalizedName": "潮州",
    "normalizedValue": "广东潮州",
    "normalizedSearchText": "广东潮州潮州广东"
  },
  {
    "code": "445102",
    "name": "湘桥区",
    "detail": "广东省 / 潮州市",
    "value": "广东省 / 潮州市 / 湘桥区",
    "rank": 3,
    "normalizedName": "湘桥",
    "normalizedValue": "广东潮州湘桥",
    "normalizedSearchText": "广东潮州湘桥湘桥广东潮州"
  },
  {
    "code": "445103",
    "name": "潮安区",
    "detail": "广东省 / 潮州市",
    "value": "广东省 / 潮州市 / 潮安区",
    "rank": 3,
    "normalizedName": "潮安",
    "normalizedValue": "广东潮州潮安",
    "normalizedSearchText": "广东潮州潮安潮安广东潮州"
  },
  {
    "code": "445122",
    "name": "饶平县",
    "detail": "广东省 / 潮州市",
    "value": "广东省 / 潮州市 / 饶平县",
    "rank": 3,
    "normalizedName": "饶平",
    "normalizedValue": "广东潮州饶平",
    "normalizedSearchText": "广东潮州饶平饶平广东潮州"
  },
  {
    "code": "445101",
    "name": "市辖区",
    "detail": "广东省 / 潮州市",
    "value": "广东省 / 潮州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东潮州辖",
    "normalizedSearchText": "广东潮州辖辖广东潮州"
  },
  {
    "code": "445200",
    "name": "揭阳市",
    "detail": "广东省",
    "value": "广东省 / 揭阳市",
    "rank": 2,
    "normalizedName": "揭阳",
    "normalizedValue": "广东揭阳",
    "normalizedSearchText": "广东揭阳揭阳广东"
  },
  {
    "code": "445202",
    "name": "榕城区",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 榕城区",
    "rank": 3,
    "normalizedName": "榕城",
    "normalizedValue": "广东揭阳榕城",
    "normalizedSearchText": "广东揭阳榕城榕城广东揭阳"
  },
  {
    "code": "445203",
    "name": "揭东区",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 揭东区",
    "rank": 3,
    "normalizedName": "揭东",
    "normalizedValue": "广东揭阳揭东",
    "normalizedSearchText": "广东揭阳揭东揭东广东揭阳"
  },
  {
    "code": "445222",
    "name": "揭西县",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 揭西县",
    "rank": 3,
    "normalizedName": "揭西",
    "normalizedValue": "广东揭阳揭西",
    "normalizedSearchText": "广东揭阳揭西揭西广东揭阳"
  },
  {
    "code": "445224",
    "name": "惠来县",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 惠来县",
    "rank": 3,
    "normalizedName": "惠来",
    "normalizedValue": "广东揭阳惠来",
    "normalizedSearchText": "广东揭阳惠来惠来广东揭阳"
  },
  {
    "code": "445281",
    "name": "普宁市",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 普宁市",
    "rank": 3,
    "normalizedName": "普宁",
    "normalizedValue": "广东揭阳普宁",
    "normalizedSearchText": "广东揭阳普宁普宁广东揭阳"
  },
  {
    "code": "445201",
    "name": "市辖区",
    "detail": "广东省 / 揭阳市",
    "value": "广东省 / 揭阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东揭阳辖",
    "normalizedSearchText": "广东揭阳辖辖广东揭阳"
  },
  {
    "code": "445300",
    "name": "云浮市",
    "detail": "广东省",
    "value": "广东省 / 云浮市",
    "rank": 2,
    "normalizedName": "云浮",
    "normalizedValue": "广东云浮",
    "normalizedSearchText": "广东云浮云浮广东"
  },
  {
    "code": "445302",
    "name": "云城区",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 云城区",
    "rank": 3,
    "normalizedName": "云城",
    "normalizedValue": "广东云浮云城",
    "normalizedSearchText": "广东云浮云城云城广东云浮"
  },
  {
    "code": "445303",
    "name": "云安区",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 云安区",
    "rank": 3,
    "normalizedName": "云安",
    "normalizedValue": "广东云浮云安",
    "normalizedSearchText": "广东云浮云安云安广东云浮"
  },
  {
    "code": "445321",
    "name": "新兴县",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 新兴县",
    "rank": 3,
    "normalizedName": "新兴",
    "normalizedValue": "广东云浮新兴",
    "normalizedSearchText": "广东云浮新兴新兴广东云浮"
  },
  {
    "code": "445322",
    "name": "郁南县",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 郁南县",
    "rank": 3,
    "normalizedName": "郁南",
    "normalizedValue": "广东云浮郁南",
    "normalizedSearchText": "广东云浮郁南郁南广东云浮"
  },
  {
    "code": "445381",
    "name": "罗定市",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 罗定市",
    "rank": 3,
    "normalizedName": "罗定",
    "normalizedValue": "广东云浮罗定",
    "normalizedSearchText": "广东云浮罗定罗定广东云浮"
  },
  {
    "code": "445301",
    "name": "市辖区",
    "detail": "广东省 / 云浮市",
    "value": "广东省 / 云浮市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广东云浮辖",
    "normalizedSearchText": "广东云浮辖辖广东云浮"
  },
  {
    "code": "450000",
    "name": "广西壮族自治区",
    "detail": "?????",
    "value": "广西壮族自治区",
    "rank": 1,
    "normalizedName": "广西壮族",
    "normalizedValue": "广西壮族",
    "normalizedSearchText": "广西壮族广西壮族"
  },
  {
    "code": "450100",
    "name": "南宁市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 南宁市",
    "rank": 2,
    "normalizedName": "南宁",
    "normalizedValue": "广西壮族南宁",
    "normalizedSearchText": "广西壮族南宁南宁广西壮族"
  },
  {
    "code": "450102",
    "name": "兴宁区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 兴宁区",
    "rank": 3,
    "normalizedName": "兴宁",
    "normalizedValue": "广西壮族南宁兴宁",
    "normalizedSearchText": "广西壮族南宁兴宁兴宁广西壮族南宁"
  },
  {
    "code": "450103",
    "name": "青秀区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 青秀区",
    "rank": 3,
    "normalizedName": "青秀",
    "normalizedValue": "广西壮族南宁青秀",
    "normalizedSearchText": "广西壮族南宁青秀青秀广西壮族南宁"
  },
  {
    "code": "450105",
    "name": "江南区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 江南区",
    "rank": 3,
    "normalizedName": "江南",
    "normalizedValue": "广西壮族南宁江南",
    "normalizedSearchText": "广西壮族南宁江南江南广西壮族南宁"
  },
  {
    "code": "450107",
    "name": "西乡塘区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 西乡塘区",
    "rank": 3,
    "normalizedName": "西塘",
    "normalizedValue": "广西壮族南宁西塘",
    "normalizedSearchText": "广西壮族南宁西塘西塘广西壮族南宁"
  },
  {
    "code": "450108",
    "name": "良庆区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 良庆区",
    "rank": 3,
    "normalizedName": "良庆",
    "normalizedValue": "广西壮族南宁良庆",
    "normalizedSearchText": "广西壮族南宁良庆良庆广西壮族南宁"
  },
  {
    "code": "450109",
    "name": "邕宁区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 邕宁区",
    "rank": 3,
    "normalizedName": "邕宁",
    "normalizedValue": "广西壮族南宁邕宁",
    "normalizedSearchText": "广西壮族南宁邕宁邕宁广西壮族南宁"
  },
  {
    "code": "450110",
    "name": "武鸣区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 武鸣区",
    "rank": 3,
    "normalizedName": "武鸣",
    "normalizedValue": "广西壮族南宁武鸣",
    "normalizedSearchText": "广西壮族南宁武鸣武鸣广西壮族南宁"
  },
  {
    "code": "450123",
    "name": "隆安县",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 隆安县",
    "rank": 3,
    "normalizedName": "隆安",
    "normalizedValue": "广西壮族南宁隆安",
    "normalizedSearchText": "广西壮族南宁隆安隆安广西壮族南宁"
  },
  {
    "code": "450124",
    "name": "马山县",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 马山县",
    "rank": 3,
    "normalizedName": "马山",
    "normalizedValue": "广西壮族南宁马山",
    "normalizedSearchText": "广西壮族南宁马山马山广西壮族南宁"
  },
  {
    "code": "450125",
    "name": "上林县",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 上林县",
    "rank": 3,
    "normalizedName": "上林",
    "normalizedValue": "广西壮族南宁上林",
    "normalizedSearchText": "广西壮族南宁上林上林广西壮族南宁"
  },
  {
    "code": "450126",
    "name": "宾阳县",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 宾阳县",
    "rank": 3,
    "normalizedName": "宾阳",
    "normalizedValue": "广西壮族南宁宾阳",
    "normalizedSearchText": "广西壮族南宁宾阳宾阳广西壮族南宁"
  },
  {
    "code": "450127",
    "name": "横县",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 横县",
    "rank": 3,
    "normalizedName": "横",
    "normalizedValue": "广西壮族南宁横",
    "normalizedSearchText": "广西壮族南宁横横广西壮族南宁"
  },
  {
    "code": "450101",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族南宁辖",
    "normalizedSearchText": "广西壮族南宁辖辖广西壮族南宁"
  },
  {
    "code": "450181",
    "name": "横州市",
    "detail": "广西壮族自治区 / 南宁市",
    "value": "广西壮族自治区 / 南宁市 / 横州市",
    "rank": 3,
    "normalizedName": "横州",
    "normalizedValue": "广西壮族南宁横州",
    "normalizedSearchText": "广西壮族南宁横州横州广西壮族南宁"
  },
  {
    "code": "450200",
    "name": "柳州市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 柳州市",
    "rank": 2,
    "normalizedName": "柳州",
    "normalizedValue": "广西壮族柳州",
    "normalizedSearchText": "广西壮族柳州柳州广西壮族"
  },
  {
    "code": "450202",
    "name": "城中区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 城中区",
    "rank": 3,
    "normalizedName": "城中",
    "normalizedValue": "广西壮族柳州城中",
    "normalizedSearchText": "广西壮族柳州城中城中广西壮族柳州"
  },
  {
    "code": "450203",
    "name": "鱼峰区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 鱼峰区",
    "rank": 3,
    "normalizedName": "鱼峰",
    "normalizedValue": "广西壮族柳州鱼峰",
    "normalizedSearchText": "广西壮族柳州鱼峰鱼峰广西壮族柳州"
  },
  {
    "code": "450204",
    "name": "柳南区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 柳南区",
    "rank": 3,
    "normalizedName": "柳南",
    "normalizedValue": "广西壮族柳州柳南",
    "normalizedSearchText": "广西壮族柳州柳南柳南广西壮族柳州"
  },
  {
    "code": "450205",
    "name": "柳北区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 柳北区",
    "rank": 3,
    "normalizedName": "柳北",
    "normalizedValue": "广西壮族柳州柳北",
    "normalizedSearchText": "广西壮族柳州柳北柳北广西壮族柳州"
  },
  {
    "code": "450206",
    "name": "柳江区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 柳江区",
    "rank": 3,
    "normalizedName": "柳江",
    "normalizedValue": "广西壮族柳州柳江",
    "normalizedSearchText": "广西壮族柳州柳江柳江广西壮族柳州"
  },
  {
    "code": "450222",
    "name": "柳城县",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 柳城县",
    "rank": 3,
    "normalizedName": "柳城",
    "normalizedValue": "广西壮族柳州柳城",
    "normalizedSearchText": "广西壮族柳州柳城柳城广西壮族柳州"
  },
  {
    "code": "450223",
    "name": "鹿寨县",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 鹿寨县",
    "rank": 3,
    "normalizedName": "鹿寨",
    "normalizedValue": "广西壮族柳州鹿寨",
    "normalizedSearchText": "广西壮族柳州鹿寨鹿寨广西壮族柳州"
  },
  {
    "code": "450224",
    "name": "融安县",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 融安县",
    "rank": 3,
    "normalizedName": "融安",
    "normalizedValue": "广西壮族柳州融安",
    "normalizedSearchText": "广西壮族柳州融安融安广西壮族柳州"
  },
  {
    "code": "450225",
    "name": "融水苗族自治县",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 融水苗族自治县",
    "rank": 3,
    "normalizedName": "融水苗族自治",
    "normalizedValue": "广西壮族柳州融水苗族自治",
    "normalizedSearchText": "广西壮族柳州融水苗族自治融水苗族自治广西壮族柳州"
  },
  {
    "code": "450226",
    "name": "三江侗族自治县",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 三江侗族自治县",
    "rank": 3,
    "normalizedName": "三江侗族自治",
    "normalizedValue": "广西壮族柳州三江侗族自治",
    "normalizedSearchText": "广西壮族柳州三江侗族自治三江侗族自治广西壮族柳州"
  },
  {
    "code": "450201",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 柳州市",
    "value": "广西壮族自治区 / 柳州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族柳州辖",
    "normalizedSearchText": "广西壮族柳州辖辖广西壮族柳州"
  },
  {
    "code": "450300",
    "name": "桂林市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 桂林市",
    "rank": 2,
    "normalizedName": "桂林",
    "normalizedValue": "广西壮族桂林",
    "normalizedSearchText": "广西壮族桂林桂林广西壮族"
  },
  {
    "code": "450302",
    "name": "秀峰区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 秀峰区",
    "rank": 3,
    "normalizedName": "秀峰",
    "normalizedValue": "广西壮族桂林秀峰",
    "normalizedSearchText": "广西壮族桂林秀峰秀峰广西壮族桂林"
  },
  {
    "code": "450303",
    "name": "叠彩区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 叠彩区",
    "rank": 3,
    "normalizedName": "叠彩",
    "normalizedValue": "广西壮族桂林叠彩",
    "normalizedSearchText": "广西壮族桂林叠彩叠彩广西壮族桂林"
  },
  {
    "code": "450304",
    "name": "象山区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 象山区",
    "rank": 3,
    "normalizedName": "象山",
    "normalizedValue": "广西壮族桂林象山",
    "normalizedSearchText": "广西壮族桂林象山象山广西壮族桂林"
  },
  {
    "code": "450305",
    "name": "七星区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 七星区",
    "rank": 3,
    "normalizedName": "七星",
    "normalizedValue": "广西壮族桂林七星",
    "normalizedSearchText": "广西壮族桂林七星七星广西壮族桂林"
  },
  {
    "code": "450311",
    "name": "雁山区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 雁山区",
    "rank": 3,
    "normalizedName": "雁山",
    "normalizedValue": "广西壮族桂林雁山",
    "normalizedSearchText": "广西壮族桂林雁山雁山广西壮族桂林"
  },
  {
    "code": "450312",
    "name": "临桂区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 临桂区",
    "rank": 3,
    "normalizedName": "临桂",
    "normalizedValue": "广西壮族桂林临桂",
    "normalizedSearchText": "广西壮族桂林临桂临桂广西壮族桂林"
  },
  {
    "code": "450321",
    "name": "阳朔县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 阳朔县",
    "rank": 3,
    "normalizedName": "阳朔",
    "normalizedValue": "广西壮族桂林阳朔",
    "normalizedSearchText": "广西壮族桂林阳朔阳朔广西壮族桂林"
  },
  {
    "code": "450323",
    "name": "灵川县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 灵川县",
    "rank": 3,
    "normalizedName": "灵川",
    "normalizedValue": "广西壮族桂林灵川",
    "normalizedSearchText": "广西壮族桂林灵川灵川广西壮族桂林"
  },
  {
    "code": "450324",
    "name": "全州县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 全州县",
    "rank": 3,
    "normalizedName": "全州",
    "normalizedValue": "广西壮族桂林全州",
    "normalizedSearchText": "广西壮族桂林全州全州广西壮族桂林"
  },
  {
    "code": "450325",
    "name": "兴安县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 兴安县",
    "rank": 3,
    "normalizedName": "兴安",
    "normalizedValue": "广西壮族桂林兴安",
    "normalizedSearchText": "广西壮族桂林兴安兴安广西壮族桂林"
  },
  {
    "code": "450326",
    "name": "永福县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 永福县",
    "rank": 3,
    "normalizedName": "永福",
    "normalizedValue": "广西壮族桂林永福",
    "normalizedSearchText": "广西壮族桂林永福永福广西壮族桂林"
  },
  {
    "code": "450327",
    "name": "灌阳县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 灌阳县",
    "rank": 3,
    "normalizedName": "灌阳",
    "normalizedValue": "广西壮族桂林灌阳",
    "normalizedSearchText": "广西壮族桂林灌阳灌阳广西壮族桂林"
  },
  {
    "code": "450328",
    "name": "龙胜各族自治县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 龙胜各族自治县",
    "rank": 3,
    "normalizedName": "龙胜各族自治",
    "normalizedValue": "广西壮族桂林龙胜各族自治",
    "normalizedSearchText": "广西壮族桂林龙胜各族自治龙胜各族自治广西壮族桂林"
  },
  {
    "code": "450329",
    "name": "资源县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 资源县",
    "rank": 3,
    "normalizedName": "资源",
    "normalizedValue": "广西壮族桂林资源",
    "normalizedSearchText": "广西壮族桂林资源资源广西壮族桂林"
  },
  {
    "code": "450330",
    "name": "平乐县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 平乐县",
    "rank": 3,
    "normalizedName": "平乐",
    "normalizedValue": "广西壮族桂林平乐",
    "normalizedSearchText": "广西壮族桂林平乐平乐广西壮族桂林"
  },
  {
    "code": "450332",
    "name": "恭城瑶族自治县",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 恭城瑶族自治县",
    "rank": 3,
    "normalizedName": "恭城瑶族自治",
    "normalizedValue": "广西壮族桂林恭城瑶族自治",
    "normalizedSearchText": "广西壮族桂林恭城瑶族自治恭城瑶族自治广西壮族桂林"
  },
  {
    "code": "450381",
    "name": "荔浦市",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 荔浦市",
    "rank": 3,
    "normalizedName": "荔浦",
    "normalizedValue": "广西壮族桂林荔浦",
    "normalizedSearchText": "广西壮族桂林荔浦荔浦广西壮族桂林"
  },
  {
    "code": "450301",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 桂林市",
    "value": "广西壮族自治区 / 桂林市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族桂林辖",
    "normalizedSearchText": "广西壮族桂林辖辖广西壮族桂林"
  },
  {
    "code": "450400",
    "name": "梧州市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 梧州市",
    "rank": 2,
    "normalizedName": "梧州",
    "normalizedValue": "广西壮族梧州",
    "normalizedSearchText": "广西壮族梧州梧州广西壮族"
  },
  {
    "code": "450403",
    "name": "万秀区",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 万秀区",
    "rank": 3,
    "normalizedName": "万秀",
    "normalizedValue": "广西壮族梧州万秀",
    "normalizedSearchText": "广西壮族梧州万秀万秀广西壮族梧州"
  },
  {
    "code": "450405",
    "name": "长洲区",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 长洲区",
    "rank": 3,
    "normalizedName": "长洲",
    "normalizedValue": "广西壮族梧州长洲",
    "normalizedSearchText": "广西壮族梧州长洲长洲广西壮族梧州"
  },
  {
    "code": "450406",
    "name": "龙圩区",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 龙圩区",
    "rank": 3,
    "normalizedName": "龙圩",
    "normalizedValue": "广西壮族梧州龙圩",
    "normalizedSearchText": "广西壮族梧州龙圩龙圩广西壮族梧州"
  },
  {
    "code": "450421",
    "name": "苍梧县",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 苍梧县",
    "rank": 3,
    "normalizedName": "苍梧",
    "normalizedValue": "广西壮族梧州苍梧",
    "normalizedSearchText": "广西壮族梧州苍梧苍梧广西壮族梧州"
  },
  {
    "code": "450422",
    "name": "藤县",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 藤县",
    "rank": 3,
    "normalizedName": "藤",
    "normalizedValue": "广西壮族梧州藤",
    "normalizedSearchText": "广西壮族梧州藤藤广西壮族梧州"
  },
  {
    "code": "450423",
    "name": "蒙山县",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 蒙山县",
    "rank": 3,
    "normalizedName": "蒙山",
    "normalizedValue": "广西壮族梧州蒙山",
    "normalizedSearchText": "广西壮族梧州蒙山蒙山广西壮族梧州"
  },
  {
    "code": "450481",
    "name": "岑溪市",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 岑溪市",
    "rank": 3,
    "normalizedName": "岑溪",
    "normalizedValue": "广西壮族梧州岑溪",
    "normalizedSearchText": "广西壮族梧州岑溪岑溪广西壮族梧州"
  },
  {
    "code": "450401",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 梧州市",
    "value": "广西壮族自治区 / 梧州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族梧州辖",
    "normalizedSearchText": "广西壮族梧州辖辖广西壮族梧州"
  },
  {
    "code": "450500",
    "name": "北海市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 北海市",
    "rank": 2,
    "normalizedName": "北海",
    "normalizedValue": "广西壮族北海",
    "normalizedSearchText": "广西壮族北海北海广西壮族"
  },
  {
    "code": "450502",
    "name": "海城区",
    "detail": "广西壮族自治区 / 北海市",
    "value": "广西壮族自治区 / 北海市 / 海城区",
    "rank": 3,
    "normalizedName": "海城",
    "normalizedValue": "广西壮族北海海城",
    "normalizedSearchText": "广西壮族北海海城海城广西壮族北海"
  },
  {
    "code": "450503",
    "name": "银海区",
    "detail": "广西壮族自治区 / 北海市",
    "value": "广西壮族自治区 / 北海市 / 银海区",
    "rank": 3,
    "normalizedName": "银海",
    "normalizedValue": "广西壮族北海银海",
    "normalizedSearchText": "广西壮族北海银海银海广西壮族北海"
  },
  {
    "code": "450512",
    "name": "铁山港区",
    "detail": "广西壮族自治区 / 北海市",
    "value": "广西壮族自治区 / 北海市 / 铁山港区",
    "rank": 3,
    "normalizedName": "铁山港",
    "normalizedValue": "广西壮族北海铁山港",
    "normalizedSearchText": "广西壮族北海铁山港铁山港广西壮族北海"
  },
  {
    "code": "450521",
    "name": "合浦县",
    "detail": "广西壮族自治区 / 北海市",
    "value": "广西壮族自治区 / 北海市 / 合浦县",
    "rank": 3,
    "normalizedName": "合浦",
    "normalizedValue": "广西壮族北海合浦",
    "normalizedSearchText": "广西壮族北海合浦合浦广西壮族北海"
  },
  {
    "code": "450501",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 北海市",
    "value": "广西壮族自治区 / 北海市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族北海辖",
    "normalizedSearchText": "广西壮族北海辖辖广西壮族北海"
  },
  {
    "code": "450600",
    "name": "防城港市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 防城港市",
    "rank": 2,
    "normalizedName": "防城港",
    "normalizedValue": "广西壮族防城港",
    "normalizedSearchText": "广西壮族防城港防城港广西壮族"
  },
  {
    "code": "450602",
    "name": "港口区",
    "detail": "广西壮族自治区 / 防城港市",
    "value": "广西壮族自治区 / 防城港市 / 港口区",
    "rank": 3,
    "normalizedName": "港口",
    "normalizedValue": "广西壮族防城港港口",
    "normalizedSearchText": "广西壮族防城港港口港口广西壮族防城港"
  },
  {
    "code": "450603",
    "name": "防城区",
    "detail": "广西壮族自治区 / 防城港市",
    "value": "广西壮族自治区 / 防城港市 / 防城区",
    "rank": 3,
    "normalizedName": "防城",
    "normalizedValue": "广西壮族防城港防城",
    "normalizedSearchText": "广西壮族防城港防城防城广西壮族防城港"
  },
  {
    "code": "450621",
    "name": "上思县",
    "detail": "广西壮族自治区 / 防城港市",
    "value": "广西壮族自治区 / 防城港市 / 上思县",
    "rank": 3,
    "normalizedName": "上思",
    "normalizedValue": "广西壮族防城港上思",
    "normalizedSearchText": "广西壮族防城港上思上思广西壮族防城港"
  },
  {
    "code": "450681",
    "name": "东兴市",
    "detail": "广西壮族自治区 / 防城港市",
    "value": "广西壮族自治区 / 防城港市 / 东兴市",
    "rank": 3,
    "normalizedName": "东兴",
    "normalizedValue": "广西壮族防城港东兴",
    "normalizedSearchText": "广西壮族防城港东兴东兴广西壮族防城港"
  },
  {
    "code": "450601",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 防城港市",
    "value": "广西壮族自治区 / 防城港市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族防城港辖",
    "normalizedSearchText": "广西壮族防城港辖辖广西壮族防城港"
  },
  {
    "code": "450700",
    "name": "钦州市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 钦州市",
    "rank": 2,
    "normalizedName": "钦州",
    "normalizedValue": "广西壮族钦州",
    "normalizedSearchText": "广西壮族钦州钦州广西壮族"
  },
  {
    "code": "450702",
    "name": "钦南区",
    "detail": "广西壮族自治区 / 钦州市",
    "value": "广西壮族自治区 / 钦州市 / 钦南区",
    "rank": 3,
    "normalizedName": "钦南",
    "normalizedValue": "广西壮族钦州钦南",
    "normalizedSearchText": "广西壮族钦州钦南钦南广西壮族钦州"
  },
  {
    "code": "450703",
    "name": "钦北区",
    "detail": "广西壮族自治区 / 钦州市",
    "value": "广西壮族自治区 / 钦州市 / 钦北区",
    "rank": 3,
    "normalizedName": "钦北",
    "normalizedValue": "广西壮族钦州钦北",
    "normalizedSearchText": "广西壮族钦州钦北钦北广西壮族钦州"
  },
  {
    "code": "450721",
    "name": "灵山县",
    "detail": "广西壮族自治区 / 钦州市",
    "value": "广西壮族自治区 / 钦州市 / 灵山县",
    "rank": 3,
    "normalizedName": "灵山",
    "normalizedValue": "广西壮族钦州灵山",
    "normalizedSearchText": "广西壮族钦州灵山灵山广西壮族钦州"
  },
  {
    "code": "450722",
    "name": "浦北县",
    "detail": "广西壮族自治区 / 钦州市",
    "value": "广西壮族自治区 / 钦州市 / 浦北县",
    "rank": 3,
    "normalizedName": "浦北",
    "normalizedValue": "广西壮族钦州浦北",
    "normalizedSearchText": "广西壮族钦州浦北浦北广西壮族钦州"
  },
  {
    "code": "450701",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 钦州市",
    "value": "广西壮族自治区 / 钦州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族钦州辖",
    "normalizedSearchText": "广西壮族钦州辖辖广西壮族钦州"
  },
  {
    "code": "450800",
    "name": "贵港市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 贵港市",
    "rank": 2,
    "normalizedName": "贵港",
    "normalizedValue": "广西壮族贵港",
    "normalizedSearchText": "广西壮族贵港贵港广西壮族"
  },
  {
    "code": "450802",
    "name": "港北区",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 港北区",
    "rank": 3,
    "normalizedName": "港北",
    "normalizedValue": "广西壮族贵港港北",
    "normalizedSearchText": "广西壮族贵港港北港北广西壮族贵港"
  },
  {
    "code": "450803",
    "name": "港南区",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 港南区",
    "rank": 3,
    "normalizedName": "港南",
    "normalizedValue": "广西壮族贵港港南",
    "normalizedSearchText": "广西壮族贵港港南港南广西壮族贵港"
  },
  {
    "code": "450804",
    "name": "覃塘区",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 覃塘区",
    "rank": 3,
    "normalizedName": "覃塘",
    "normalizedValue": "广西壮族贵港覃塘",
    "normalizedSearchText": "广西壮族贵港覃塘覃塘广西壮族贵港"
  },
  {
    "code": "450821",
    "name": "平南县",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 平南县",
    "rank": 3,
    "normalizedName": "平南",
    "normalizedValue": "广西壮族贵港平南",
    "normalizedSearchText": "广西壮族贵港平南平南广西壮族贵港"
  },
  {
    "code": "450881",
    "name": "桂平市",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 桂平市",
    "rank": 3,
    "normalizedName": "桂平",
    "normalizedValue": "广西壮族贵港桂平",
    "normalizedSearchText": "广西壮族贵港桂平桂平广西壮族贵港"
  },
  {
    "code": "450801",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 贵港市",
    "value": "广西壮族自治区 / 贵港市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族贵港辖",
    "normalizedSearchText": "广西壮族贵港辖辖广西壮族贵港"
  },
  {
    "code": "450900",
    "name": "玉林市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 玉林市",
    "rank": 2,
    "normalizedName": "玉林",
    "normalizedValue": "广西壮族玉林",
    "normalizedSearchText": "广西壮族玉林玉林广西壮族"
  },
  {
    "code": "450902",
    "name": "玉州区",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 玉州区",
    "rank": 3,
    "normalizedName": "玉州",
    "normalizedValue": "广西壮族玉林玉州",
    "normalizedSearchText": "广西壮族玉林玉州玉州广西壮族玉林"
  },
  {
    "code": "450903",
    "name": "福绵区",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 福绵区",
    "rank": 3,
    "normalizedName": "福绵",
    "normalizedValue": "广西壮族玉林福绵",
    "normalizedSearchText": "广西壮族玉林福绵福绵广西壮族玉林"
  },
  {
    "code": "450921",
    "name": "容县",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 容县",
    "rank": 3,
    "normalizedName": "容",
    "normalizedValue": "广西壮族玉林容",
    "normalizedSearchText": "广西壮族玉林容容广西壮族玉林"
  },
  {
    "code": "450922",
    "name": "陆川县",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 陆川县",
    "rank": 3,
    "normalizedName": "陆川",
    "normalizedValue": "广西壮族玉林陆川",
    "normalizedSearchText": "广西壮族玉林陆川陆川广西壮族玉林"
  },
  {
    "code": "450923",
    "name": "博白县",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 博白县",
    "rank": 3,
    "normalizedName": "博白",
    "normalizedValue": "广西壮族玉林博白",
    "normalizedSearchText": "广西壮族玉林博白博白广西壮族玉林"
  },
  {
    "code": "450924",
    "name": "兴业县",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 兴业县",
    "rank": 3,
    "normalizedName": "兴业",
    "normalizedValue": "广西壮族玉林兴业",
    "normalizedSearchText": "广西壮族玉林兴业兴业广西壮族玉林"
  },
  {
    "code": "450981",
    "name": "北流市",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 北流市",
    "rank": 3,
    "normalizedName": "北流",
    "normalizedValue": "广西壮族玉林北流",
    "normalizedSearchText": "广西壮族玉林北流北流广西壮族玉林"
  },
  {
    "code": "450901",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 玉林市",
    "value": "广西壮族自治区 / 玉林市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族玉林辖",
    "normalizedSearchText": "广西壮族玉林辖辖广西壮族玉林"
  },
  {
    "code": "451000",
    "name": "百色市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 百色市",
    "rank": 2,
    "normalizedName": "百色",
    "normalizedValue": "广西壮族百色",
    "normalizedSearchText": "广西壮族百色百色广西壮族"
  },
  {
    "code": "451002",
    "name": "右江区",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 右江区",
    "rank": 3,
    "normalizedName": "右江",
    "normalizedValue": "广西壮族百色右江",
    "normalizedSearchText": "广西壮族百色右江右江广西壮族百色"
  },
  {
    "code": "451003",
    "name": "田阳区",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 田阳区",
    "rank": 3,
    "normalizedName": "田阳",
    "normalizedValue": "广西壮族百色田阳",
    "normalizedSearchText": "广西壮族百色田阳田阳广西壮族百色"
  },
  {
    "code": "451022",
    "name": "田东县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 田东县",
    "rank": 3,
    "normalizedName": "田东",
    "normalizedValue": "广西壮族百色田东",
    "normalizedSearchText": "广西壮族百色田东田东广西壮族百色"
  },
  {
    "code": "451024",
    "name": "德保县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 德保县",
    "rank": 3,
    "normalizedName": "德保",
    "normalizedValue": "广西壮族百色德保",
    "normalizedSearchText": "广西壮族百色德保德保广西壮族百色"
  },
  {
    "code": "451026",
    "name": "那坡县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 那坡县",
    "rank": 3,
    "normalizedName": "那坡",
    "normalizedValue": "广西壮族百色那坡",
    "normalizedSearchText": "广西壮族百色那坡那坡广西壮族百色"
  },
  {
    "code": "451027",
    "name": "凌云县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 凌云县",
    "rank": 3,
    "normalizedName": "凌云",
    "normalizedValue": "广西壮族百色凌云",
    "normalizedSearchText": "广西壮族百色凌云凌云广西壮族百色"
  },
  {
    "code": "451028",
    "name": "乐业县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 乐业县",
    "rank": 3,
    "normalizedName": "乐业",
    "normalizedValue": "广西壮族百色乐业",
    "normalizedSearchText": "广西壮族百色乐业乐业广西壮族百色"
  },
  {
    "code": "451029",
    "name": "田林县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 田林县",
    "rank": 3,
    "normalizedName": "田林",
    "normalizedValue": "广西壮族百色田林",
    "normalizedSearchText": "广西壮族百色田林田林广西壮族百色"
  },
  {
    "code": "451030",
    "name": "西林县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 西林县",
    "rank": 3,
    "normalizedName": "西林",
    "normalizedValue": "广西壮族百色西林",
    "normalizedSearchText": "广西壮族百色西林西林广西壮族百色"
  },
  {
    "code": "451031",
    "name": "隆林各族自治县",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 隆林各族自治县",
    "rank": 3,
    "normalizedName": "隆林各族自治",
    "normalizedValue": "广西壮族百色隆林各族自治",
    "normalizedSearchText": "广西壮族百色隆林各族自治隆林各族自治广西壮族百色"
  },
  {
    "code": "451081",
    "name": "靖西市",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 靖西市",
    "rank": 3,
    "normalizedName": "靖西",
    "normalizedValue": "广西壮族百色靖西",
    "normalizedSearchText": "广西壮族百色靖西靖西广西壮族百色"
  },
  {
    "code": "451082",
    "name": "平果市",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 平果市",
    "rank": 3,
    "normalizedName": "平果",
    "normalizedValue": "广西壮族百色平果",
    "normalizedSearchText": "广西壮族百色平果平果广西壮族百色"
  },
  {
    "code": "451001",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 百色市",
    "value": "广西壮族自治区 / 百色市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族百色辖",
    "normalizedSearchText": "广西壮族百色辖辖广西壮族百色"
  },
  {
    "code": "451100",
    "name": "贺州市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 贺州市",
    "rank": 2,
    "normalizedName": "贺州",
    "normalizedValue": "广西壮族贺州",
    "normalizedSearchText": "广西壮族贺州贺州广西壮族"
  },
  {
    "code": "451102",
    "name": "八步区",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 八步区",
    "rank": 3,
    "normalizedName": "八步",
    "normalizedValue": "广西壮族贺州八步",
    "normalizedSearchText": "广西壮族贺州八步八步广西壮族贺州"
  },
  {
    "code": "451103",
    "name": "平桂区",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 平桂区",
    "rank": 3,
    "normalizedName": "平桂",
    "normalizedValue": "广西壮族贺州平桂",
    "normalizedSearchText": "广西壮族贺州平桂平桂广西壮族贺州"
  },
  {
    "code": "451121",
    "name": "昭平县",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 昭平县",
    "rank": 3,
    "normalizedName": "昭平",
    "normalizedValue": "广西壮族贺州昭平",
    "normalizedSearchText": "广西壮族贺州昭平昭平广西壮族贺州"
  },
  {
    "code": "451122",
    "name": "钟山县",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 钟山县",
    "rank": 3,
    "normalizedName": "钟山",
    "normalizedValue": "广西壮族贺州钟山",
    "normalizedSearchText": "广西壮族贺州钟山钟山广西壮族贺州"
  },
  {
    "code": "451123",
    "name": "富川瑶族自治县",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 富川瑶族自治县",
    "rank": 3,
    "normalizedName": "富川瑶族自治",
    "normalizedValue": "广西壮族贺州富川瑶族自治",
    "normalizedSearchText": "广西壮族贺州富川瑶族自治富川瑶族自治广西壮族贺州"
  },
  {
    "code": "451101",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 贺州市",
    "value": "广西壮族自治区 / 贺州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族贺州辖",
    "normalizedSearchText": "广西壮族贺州辖辖广西壮族贺州"
  },
  {
    "code": "451200",
    "name": "河池市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 河池市",
    "rank": 2,
    "normalizedName": "河池",
    "normalizedValue": "广西壮族河池",
    "normalizedSearchText": "广西壮族河池河池广西壮族"
  },
  {
    "code": "451202",
    "name": "金城江区",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 金城江区",
    "rank": 3,
    "normalizedName": "金城江",
    "normalizedValue": "广西壮族河池金城江",
    "normalizedSearchText": "广西壮族河池金城江金城江广西壮族河池"
  },
  {
    "code": "451203",
    "name": "宜州区",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 宜州区",
    "rank": 3,
    "normalizedName": "宜州",
    "normalizedValue": "广西壮族河池宜州",
    "normalizedSearchText": "广西壮族河池宜州宜州广西壮族河池"
  },
  {
    "code": "451221",
    "name": "南丹县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 南丹县",
    "rank": 3,
    "normalizedName": "南丹",
    "normalizedValue": "广西壮族河池南丹",
    "normalizedSearchText": "广西壮族河池南丹南丹广西壮族河池"
  },
  {
    "code": "451222",
    "name": "天峨县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 天峨县",
    "rank": 3,
    "normalizedName": "天峨",
    "normalizedValue": "广西壮族河池天峨",
    "normalizedSearchText": "广西壮族河池天峨天峨广西壮族河池"
  },
  {
    "code": "451223",
    "name": "凤山县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 凤山县",
    "rank": 3,
    "normalizedName": "凤山",
    "normalizedValue": "广西壮族河池凤山",
    "normalizedSearchText": "广西壮族河池凤山凤山广西壮族河池"
  },
  {
    "code": "451224",
    "name": "东兰县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 东兰县",
    "rank": 3,
    "normalizedName": "东兰",
    "normalizedValue": "广西壮族河池东兰",
    "normalizedSearchText": "广西壮族河池东兰东兰广西壮族河池"
  },
  {
    "code": "451225",
    "name": "罗城仫佬族自治县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 罗城仫佬族自治县",
    "rank": 3,
    "normalizedName": "罗城仫佬族自治",
    "normalizedValue": "广西壮族河池罗城仫佬族自治",
    "normalizedSearchText": "广西壮族河池罗城仫佬族自治罗城仫佬族自治广西壮族河池"
  },
  {
    "code": "451226",
    "name": "环江毛南族自治县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 环江毛南族自治县",
    "rank": 3,
    "normalizedName": "环江毛南族自治",
    "normalizedValue": "广西壮族河池环江毛南族自治",
    "normalizedSearchText": "广西壮族河池环江毛南族自治环江毛南族自治广西壮族河池"
  },
  {
    "code": "451227",
    "name": "巴马瑶族自治县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 巴马瑶族自治县",
    "rank": 3,
    "normalizedName": "巴马瑶族自治",
    "normalizedValue": "广西壮族河池巴马瑶族自治",
    "normalizedSearchText": "广西壮族河池巴马瑶族自治巴马瑶族自治广西壮族河池"
  },
  {
    "code": "451228",
    "name": "都安瑶族自治县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 都安瑶族自治县",
    "rank": 3,
    "normalizedName": "都安瑶族自治",
    "normalizedValue": "广西壮族河池都安瑶族自治",
    "normalizedSearchText": "广西壮族河池都安瑶族自治都安瑶族自治广西壮族河池"
  },
  {
    "code": "451229",
    "name": "大化瑶族自治县",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 大化瑶族自治县",
    "rank": 3,
    "normalizedName": "大化瑶族自治",
    "normalizedValue": "广西壮族河池大化瑶族自治",
    "normalizedSearchText": "广西壮族河池大化瑶族自治大化瑶族自治广西壮族河池"
  },
  {
    "code": "451201",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 河池市",
    "value": "广西壮族自治区 / 河池市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族河池辖",
    "normalizedSearchText": "广西壮族河池辖辖广西壮族河池"
  },
  {
    "code": "451300",
    "name": "来宾市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 来宾市",
    "rank": 2,
    "normalizedName": "来宾",
    "normalizedValue": "广西壮族来宾",
    "normalizedSearchText": "广西壮族来宾来宾广西壮族"
  },
  {
    "code": "451302",
    "name": "兴宾区",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 兴宾区",
    "rank": 3,
    "normalizedName": "兴宾",
    "normalizedValue": "广西壮族来宾兴宾",
    "normalizedSearchText": "广西壮族来宾兴宾兴宾广西壮族来宾"
  },
  {
    "code": "451321",
    "name": "忻城县",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 忻城县",
    "rank": 3,
    "normalizedName": "忻城",
    "normalizedValue": "广西壮族来宾忻城",
    "normalizedSearchText": "广西壮族来宾忻城忻城广西壮族来宾"
  },
  {
    "code": "451322",
    "name": "象州县",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 象州县",
    "rank": 3,
    "normalizedName": "象州",
    "normalizedValue": "广西壮族来宾象州",
    "normalizedSearchText": "广西壮族来宾象州象州广西壮族来宾"
  },
  {
    "code": "451323",
    "name": "武宣县",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 武宣县",
    "rank": 3,
    "normalizedName": "武宣",
    "normalizedValue": "广西壮族来宾武宣",
    "normalizedSearchText": "广西壮族来宾武宣武宣广西壮族来宾"
  },
  {
    "code": "451324",
    "name": "金秀瑶族自治县",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 金秀瑶族自治县",
    "rank": 3,
    "normalizedName": "金秀瑶族自治",
    "normalizedValue": "广西壮族来宾金秀瑶族自治",
    "normalizedSearchText": "广西壮族来宾金秀瑶族自治金秀瑶族自治广西壮族来宾"
  },
  {
    "code": "451381",
    "name": "合山市",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 合山市",
    "rank": 3,
    "normalizedName": "合山",
    "normalizedValue": "广西壮族来宾合山",
    "normalizedSearchText": "广西壮族来宾合山合山广西壮族来宾"
  },
  {
    "code": "451301",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 来宾市",
    "value": "广西壮族自治区 / 来宾市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族来宾辖",
    "normalizedSearchText": "广西壮族来宾辖辖广西壮族来宾"
  },
  {
    "code": "451400",
    "name": "崇左市",
    "detail": "广西壮族自治区",
    "value": "广西壮族自治区 / 崇左市",
    "rank": 2,
    "normalizedName": "崇左",
    "normalizedValue": "广西壮族崇左",
    "normalizedSearchText": "广西壮族崇左崇左广西壮族"
  },
  {
    "code": "451402",
    "name": "江州区",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 江州区",
    "rank": 3,
    "normalizedName": "江州",
    "normalizedValue": "广西壮族崇左江州",
    "normalizedSearchText": "广西壮族崇左江州江州广西壮族崇左"
  },
  {
    "code": "451421",
    "name": "扶绥县",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 扶绥县",
    "rank": 3,
    "normalizedName": "扶绥",
    "normalizedValue": "广西壮族崇左扶绥",
    "normalizedSearchText": "广西壮族崇左扶绥扶绥广西壮族崇左"
  },
  {
    "code": "451422",
    "name": "宁明县",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 宁明县",
    "rank": 3,
    "normalizedName": "宁明",
    "normalizedValue": "广西壮族崇左宁明",
    "normalizedSearchText": "广西壮族崇左宁明宁明广西壮族崇左"
  },
  {
    "code": "451423",
    "name": "龙州县",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 龙州县",
    "rank": 3,
    "normalizedName": "龙州",
    "normalizedValue": "广西壮族崇左龙州",
    "normalizedSearchText": "广西壮族崇左龙州龙州广西壮族崇左"
  },
  {
    "code": "451424",
    "name": "大新县",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 大新县",
    "rank": 3,
    "normalizedName": "大新",
    "normalizedValue": "广西壮族崇左大新",
    "normalizedSearchText": "广西壮族崇左大新大新广西壮族崇左"
  },
  {
    "code": "451425",
    "name": "天等县",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 天等县",
    "rank": 3,
    "normalizedName": "天等",
    "normalizedValue": "广西壮族崇左天等",
    "normalizedSearchText": "广西壮族崇左天等天等广西壮族崇左"
  },
  {
    "code": "451481",
    "name": "凭祥市",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 凭祥市",
    "rank": 3,
    "normalizedName": "凭祥",
    "normalizedValue": "广西壮族崇左凭祥",
    "normalizedSearchText": "广西壮族崇左凭祥凭祥广西壮族崇左"
  },
  {
    "code": "451401",
    "name": "市辖区",
    "detail": "广西壮族自治区 / 崇左市",
    "value": "广西壮族自治区 / 崇左市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "广西壮族崇左辖",
    "normalizedSearchText": "广西壮族崇左辖辖广西壮族崇左"
  },
  {
    "code": "460000",
    "name": "海南省",
    "detail": "?????",
    "value": "海南省",
    "rank": 1,
    "normalizedName": "海南",
    "normalizedValue": "海南",
    "normalizedSearchText": "海南海南"
  },
  {
    "code": "460100",
    "name": "海口市",
    "detail": "海南省",
    "value": "海南省 / 海口市",
    "rank": 2,
    "normalizedName": "海口",
    "normalizedValue": "海南海口",
    "normalizedSearchText": "海南海口海口海南"
  },
  {
    "code": "460105",
    "name": "秀英区",
    "detail": "海南省 / 海口市",
    "value": "海南省 / 海口市 / 秀英区",
    "rank": 3,
    "normalizedName": "秀英",
    "normalizedValue": "海南海口秀英",
    "normalizedSearchText": "海南海口秀英秀英海南海口"
  },
  {
    "code": "460106",
    "name": "龙华区",
    "detail": "海南省 / 海口市",
    "value": "海南省 / 海口市 / 龙华区",
    "rank": 3,
    "normalizedName": "龙华",
    "normalizedValue": "海南海口龙华",
    "normalizedSearchText": "海南海口龙华龙华海南海口"
  },
  {
    "code": "460107",
    "name": "琼山区",
    "detail": "海南省 / 海口市",
    "value": "海南省 / 海口市 / 琼山区",
    "rank": 3,
    "normalizedName": "琼山",
    "normalizedValue": "海南海口琼山",
    "normalizedSearchText": "海南海口琼山琼山海南海口"
  },
  {
    "code": "460108",
    "name": "美兰区",
    "detail": "海南省 / 海口市",
    "value": "海南省 / 海口市 / 美兰区",
    "rank": 3,
    "normalizedName": "美兰",
    "normalizedValue": "海南海口美兰",
    "normalizedSearchText": "海南海口美兰美兰海南海口"
  },
  {
    "code": "460101",
    "name": "市辖区",
    "detail": "海南省 / 海口市",
    "value": "海南省 / 海口市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "海南海口辖",
    "normalizedSearchText": "海南海口辖辖海南海口"
  },
  {
    "code": "460200",
    "name": "三亚市",
    "detail": "海南省",
    "value": "海南省 / 三亚市",
    "rank": 2,
    "normalizedName": "三亚",
    "normalizedValue": "海南三亚",
    "normalizedSearchText": "海南三亚三亚海南"
  },
  {
    "code": "460202",
    "name": "海棠区",
    "detail": "海南省 / 三亚市",
    "value": "海南省 / 三亚市 / 海棠区",
    "rank": 3,
    "normalizedName": "海棠",
    "normalizedValue": "海南三亚海棠",
    "normalizedSearchText": "海南三亚海棠海棠海南三亚"
  },
  {
    "code": "460203",
    "name": "吉阳区",
    "detail": "海南省 / 三亚市",
    "value": "海南省 / 三亚市 / 吉阳区",
    "rank": 3,
    "normalizedName": "吉阳",
    "normalizedValue": "海南三亚吉阳",
    "normalizedSearchText": "海南三亚吉阳吉阳海南三亚"
  },
  {
    "code": "460204",
    "name": "天涯区",
    "detail": "海南省 / 三亚市",
    "value": "海南省 / 三亚市 / 天涯区",
    "rank": 3,
    "normalizedName": "天涯",
    "normalizedValue": "海南三亚天涯",
    "normalizedSearchText": "海南三亚天涯天涯海南三亚"
  },
  {
    "code": "460205",
    "name": "崖州区",
    "detail": "海南省 / 三亚市",
    "value": "海南省 / 三亚市 / 崖州区",
    "rank": 3,
    "normalizedName": "崖州",
    "normalizedValue": "海南三亚崖州",
    "normalizedSearchText": "海南三亚崖州崖州海南三亚"
  },
  {
    "code": "460201",
    "name": "市辖区",
    "detail": "海南省 / 三亚市",
    "value": "海南省 / 三亚市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "海南三亚辖",
    "normalizedSearchText": "海南三亚辖辖海南三亚"
  },
  {
    "code": "460300",
    "name": "三沙市",
    "detail": "海南省",
    "value": "海南省 / 三沙市",
    "rank": 2,
    "normalizedName": "三沙",
    "normalizedValue": "海南三沙",
    "normalizedSearchText": "海南三沙三沙海南"
  },
  {
    "code": "460321",
    "name": "西沙群岛",
    "detail": "海南省 / 三沙市",
    "value": "海南省 / 三沙市 / 西沙群岛",
    "rank": 3,
    "normalizedName": "西沙群岛",
    "normalizedValue": "海南三沙西沙群岛",
    "normalizedSearchText": "海南三沙西沙群岛西沙群岛海南三沙"
  },
  {
    "code": "460322",
    "name": "南沙群岛",
    "detail": "海南省 / 三沙市",
    "value": "海南省 / 三沙市 / 南沙群岛",
    "rank": 3,
    "normalizedName": "南沙群岛",
    "normalizedValue": "海南三沙南沙群岛",
    "normalizedSearchText": "海南三沙南沙群岛南沙群岛海南三沙"
  },
  {
    "code": "460323",
    "name": "中沙群岛的岛礁及其海域",
    "detail": "海南省 / 三沙市",
    "value": "海南省 / 三沙市 / 中沙群岛的岛礁及其海域",
    "rank": 3,
    "normalizedName": "中沙群岛的岛礁及其海域",
    "normalizedValue": "海南三沙中沙群岛的岛礁及其海域",
    "normalizedSearchText": "海南三沙中沙群岛的岛礁及其海域中沙群岛的岛礁及其海域海南三沙"
  },
  {
    "code": "460400",
    "name": "儋州市",
    "detail": "海南省",
    "value": "海南省 / 儋州市",
    "rank": 3,
    "normalizedName": "儋州",
    "normalizedValue": "海南儋州",
    "normalizedSearchText": "海南儋州儋州海南"
  },
  {
    "code": "469000",
    "name": "海南省-自治区直辖县级行政区划",
    "detail": "海南省",
    "value": "海南省 / 海南省-自治区直辖县级行政区划",
    "rank": 2,
    "normalizedName": "海南直辖级行政划",
    "normalizedValue": "海南海南直辖级行政划",
    "normalizedSearchText": "海南海南直辖级行政划海南直辖级行政划海南"
  },
  {
    "code": "469001",
    "name": "五指山市",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 五指山市",
    "rank": 3,
    "normalizedName": "五指山",
    "normalizedValue": "海南海南直辖级行政划五指山",
    "normalizedSearchText": "海南海南直辖级行政划五指山五指山海南海南直辖级行政划"
  },
  {
    "code": "469002",
    "name": "琼海市",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 琼海市",
    "rank": 3,
    "normalizedName": "琼海",
    "normalizedValue": "海南海南直辖级行政划琼海",
    "normalizedSearchText": "海南海南直辖级行政划琼海琼海海南海南直辖级行政划"
  },
  {
    "code": "469005",
    "name": "文昌市",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 文昌市",
    "rank": 3,
    "normalizedName": "文昌",
    "normalizedValue": "海南海南直辖级行政划文昌",
    "normalizedSearchText": "海南海南直辖级行政划文昌文昌海南海南直辖级行政划"
  },
  {
    "code": "469006",
    "name": "万宁市",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 万宁市",
    "rank": 3,
    "normalizedName": "万宁",
    "normalizedValue": "海南海南直辖级行政划万宁",
    "normalizedSearchText": "海南海南直辖级行政划万宁万宁海南海南直辖级行政划"
  },
  {
    "code": "469007",
    "name": "东方市",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 东方市",
    "rank": 3,
    "normalizedName": "东方",
    "normalizedValue": "海南海南直辖级行政划东方",
    "normalizedSearchText": "海南海南直辖级行政划东方东方海南海南直辖级行政划"
  },
  {
    "code": "469021",
    "name": "定安县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 定安县",
    "rank": 3,
    "normalizedName": "定安",
    "normalizedValue": "海南海南直辖级行政划定安",
    "normalizedSearchText": "海南海南直辖级行政划定安定安海南海南直辖级行政划"
  },
  {
    "code": "469022",
    "name": "屯昌县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 屯昌县",
    "rank": 3,
    "normalizedName": "屯昌",
    "normalizedValue": "海南海南直辖级行政划屯昌",
    "normalizedSearchText": "海南海南直辖级行政划屯昌屯昌海南海南直辖级行政划"
  },
  {
    "code": "469023",
    "name": "澄迈县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 澄迈县",
    "rank": 3,
    "normalizedName": "澄迈",
    "normalizedValue": "海南海南直辖级行政划澄迈",
    "normalizedSearchText": "海南海南直辖级行政划澄迈澄迈海南海南直辖级行政划"
  },
  {
    "code": "469024",
    "name": "临高县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 临高县",
    "rank": 3,
    "normalizedName": "临高",
    "normalizedValue": "海南海南直辖级行政划临高",
    "normalizedSearchText": "海南海南直辖级行政划临高临高海南海南直辖级行政划"
  },
  {
    "code": "469025",
    "name": "白沙黎族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 白沙黎族自治县",
    "rank": 3,
    "normalizedName": "白沙黎族自治",
    "normalizedValue": "海南海南直辖级行政划白沙黎族自治",
    "normalizedSearchText": "海南海南直辖级行政划白沙黎族自治白沙黎族自治海南海南直辖级行政划"
  },
  {
    "code": "469026",
    "name": "昌江黎族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 昌江黎族自治县",
    "rank": 3,
    "normalizedName": "昌江黎族自治",
    "normalizedValue": "海南海南直辖级行政划昌江黎族自治",
    "normalizedSearchText": "海南海南直辖级行政划昌江黎族自治昌江黎族自治海南海南直辖级行政划"
  },
  {
    "code": "469027",
    "name": "乐东黎族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 乐东黎族自治县",
    "rank": 3,
    "normalizedName": "乐东黎族自治",
    "normalizedValue": "海南海南直辖级行政划乐东黎族自治",
    "normalizedSearchText": "海南海南直辖级行政划乐东黎族自治乐东黎族自治海南海南直辖级行政划"
  },
  {
    "code": "469028",
    "name": "陵水黎族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 陵水黎族自治县",
    "rank": 3,
    "normalizedName": "陵水黎族自治",
    "normalizedValue": "海南海南直辖级行政划陵水黎族自治",
    "normalizedSearchText": "海南海南直辖级行政划陵水黎族自治陵水黎族自治海南海南直辖级行政划"
  },
  {
    "code": "469029",
    "name": "保亭黎族苗族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 保亭黎族苗族自治县",
    "rank": 3,
    "normalizedName": "保亭黎族苗族自治",
    "normalizedValue": "海南海南直辖级行政划保亭黎族苗族自治",
    "normalizedSearchText": "海南海南直辖级行政划保亭黎族苗族自治保亭黎族苗族自治海南海南直辖级行政划"
  },
  {
    "code": "469030",
    "name": "琼中黎族苗族自治县",
    "detail": "海南省 / 海南省-自治区直辖县级行政区划",
    "value": "海南省 / 海南省-自治区直辖县级行政区划 / 琼中黎族苗族自治县",
    "rank": 3,
    "normalizedName": "琼中黎族苗族自治",
    "normalizedValue": "海南海南直辖级行政划琼中黎族苗族自治",
    "normalizedSearchText": "海南海南直辖级行政划琼中黎族苗族自治琼中黎族苗族自治海南海南直辖级行政划"
  },
  {
    "code": "500000",
    "name": "重庆市",
    "detail": "?????",
    "value": "重庆市",
    "rank": 1,
    "normalizedName": "重庆",
    "normalizedValue": "重庆",
    "normalizedSearchText": "重庆重庆"
  },
  {
    "code": "500101",
    "name": "万州区",
    "detail": "重庆市",
    "value": "重庆市 / 万州区",
    "rank": 3,
    "normalizedName": "万州",
    "normalizedValue": "重庆万州",
    "normalizedSearchText": "重庆万州万州重庆"
  },
  {
    "code": "500102",
    "name": "涪陵区",
    "detail": "重庆市",
    "value": "重庆市 / 涪陵区",
    "rank": 3,
    "normalizedName": "涪陵",
    "normalizedValue": "重庆涪陵",
    "normalizedSearchText": "重庆涪陵涪陵重庆"
  },
  {
    "code": "500103",
    "name": "渝中区",
    "detail": "重庆市",
    "value": "重庆市 / 渝中区",
    "rank": 3,
    "normalizedName": "渝中",
    "normalizedValue": "重庆渝中",
    "normalizedSearchText": "重庆渝中渝中重庆"
  },
  {
    "code": "500104",
    "name": "大渡口区",
    "detail": "重庆市",
    "value": "重庆市 / 大渡口区",
    "rank": 3,
    "normalizedName": "大渡口",
    "normalizedValue": "重庆大渡口",
    "normalizedSearchText": "重庆大渡口大渡口重庆"
  },
  {
    "code": "500105",
    "name": "江北区",
    "detail": "重庆市",
    "value": "重庆市 / 江北区",
    "rank": 3,
    "normalizedName": "江北",
    "normalizedValue": "重庆江北",
    "normalizedSearchText": "重庆江北江北重庆"
  },
  {
    "code": "500106",
    "name": "沙坪坝区",
    "detail": "重庆市",
    "value": "重庆市 / 沙坪坝区",
    "rank": 3,
    "normalizedName": "沙坪坝",
    "normalizedValue": "重庆沙坪坝",
    "normalizedSearchText": "重庆沙坪坝沙坪坝重庆"
  },
  {
    "code": "500107",
    "name": "九龙坡区",
    "detail": "重庆市",
    "value": "重庆市 / 九龙坡区",
    "rank": 3,
    "normalizedName": "九龙坡",
    "normalizedValue": "重庆九龙坡",
    "normalizedSearchText": "重庆九龙坡九龙坡重庆"
  },
  {
    "code": "500108",
    "name": "南岸区",
    "detail": "重庆市",
    "value": "重庆市 / 南岸区",
    "rank": 3,
    "normalizedName": "南岸",
    "normalizedValue": "重庆南岸",
    "normalizedSearchText": "重庆南岸南岸重庆"
  },
  {
    "code": "500109",
    "name": "北碚区",
    "detail": "重庆市",
    "value": "重庆市 / 北碚区",
    "rank": 3,
    "normalizedName": "北碚",
    "normalizedValue": "重庆北碚",
    "normalizedSearchText": "重庆北碚北碚重庆"
  },
  {
    "code": "500110",
    "name": "綦江区",
    "detail": "重庆市",
    "value": "重庆市 / 綦江区",
    "rank": 3,
    "normalizedName": "綦江",
    "normalizedValue": "重庆綦江",
    "normalizedSearchText": "重庆綦江綦江重庆"
  },
  {
    "code": "500111",
    "name": "大足区",
    "detail": "重庆市",
    "value": "重庆市 / 大足区",
    "rank": 3,
    "normalizedName": "大足",
    "normalizedValue": "重庆大足",
    "normalizedSearchText": "重庆大足大足重庆"
  },
  {
    "code": "500112",
    "name": "渝北区",
    "detail": "重庆市",
    "value": "重庆市 / 渝北区",
    "rank": 3,
    "normalizedName": "渝北",
    "normalizedValue": "重庆渝北",
    "normalizedSearchText": "重庆渝北渝北重庆"
  },
  {
    "code": "500113",
    "name": "巴南区",
    "detail": "重庆市",
    "value": "重庆市 / 巴南区",
    "rank": 3,
    "normalizedName": "巴南",
    "normalizedValue": "重庆巴南",
    "normalizedSearchText": "重庆巴南巴南重庆"
  },
  {
    "code": "500114",
    "name": "黔江区",
    "detail": "重庆市",
    "value": "重庆市 / 黔江区",
    "rank": 3,
    "normalizedName": "黔江",
    "normalizedValue": "重庆黔江",
    "normalizedSearchText": "重庆黔江黔江重庆"
  },
  {
    "code": "500115",
    "name": "长寿区",
    "detail": "重庆市",
    "value": "重庆市 / 长寿区",
    "rank": 3,
    "normalizedName": "长寿",
    "normalizedValue": "重庆长寿",
    "normalizedSearchText": "重庆长寿长寿重庆"
  },
  {
    "code": "500116",
    "name": "江津区",
    "detail": "重庆市",
    "value": "重庆市 / 江津区",
    "rank": 3,
    "normalizedName": "江津",
    "normalizedValue": "重庆江津",
    "normalizedSearchText": "重庆江津江津重庆"
  },
  {
    "code": "500117",
    "name": "合川区",
    "detail": "重庆市",
    "value": "重庆市 / 合川区",
    "rank": 3,
    "normalizedName": "合川",
    "normalizedValue": "重庆合川",
    "normalizedSearchText": "重庆合川合川重庆"
  },
  {
    "code": "500118",
    "name": "永川区",
    "detail": "重庆市",
    "value": "重庆市 / 永川区",
    "rank": 3,
    "normalizedName": "永川",
    "normalizedValue": "重庆永川",
    "normalizedSearchText": "重庆永川永川重庆"
  },
  {
    "code": "500119",
    "name": "南川区",
    "detail": "重庆市",
    "value": "重庆市 / 南川区",
    "rank": 3,
    "normalizedName": "南川",
    "normalizedValue": "重庆南川",
    "normalizedSearchText": "重庆南川南川重庆"
  },
  {
    "code": "500120",
    "name": "璧山区",
    "detail": "重庆市",
    "value": "重庆市 / 璧山区",
    "rank": 3,
    "normalizedName": "璧山",
    "normalizedValue": "重庆璧山",
    "normalizedSearchText": "重庆璧山璧山重庆"
  },
  {
    "code": "500151",
    "name": "铜梁区",
    "detail": "重庆市",
    "value": "重庆市 / 铜梁区",
    "rank": 3,
    "normalizedName": "铜梁",
    "normalizedValue": "重庆铜梁",
    "normalizedSearchText": "重庆铜梁铜梁重庆"
  },
  {
    "code": "500152",
    "name": "潼南区",
    "detail": "重庆市",
    "value": "重庆市 / 潼南区",
    "rank": 3,
    "normalizedName": "潼南",
    "normalizedValue": "重庆潼南",
    "normalizedSearchText": "重庆潼南潼南重庆"
  },
  {
    "code": "500153",
    "name": "荣昌区",
    "detail": "重庆市",
    "value": "重庆市 / 荣昌区",
    "rank": 3,
    "normalizedName": "荣昌",
    "normalizedValue": "重庆荣昌",
    "normalizedSearchText": "重庆荣昌荣昌重庆"
  },
  {
    "code": "500154",
    "name": "开州区",
    "detail": "重庆市",
    "value": "重庆市 / 开州区",
    "rank": 3,
    "normalizedName": "开州",
    "normalizedValue": "重庆开州",
    "normalizedSearchText": "重庆开州开州重庆"
  },
  {
    "code": "500155",
    "name": "梁平区",
    "detail": "重庆市",
    "value": "重庆市 / 梁平区",
    "rank": 3,
    "normalizedName": "梁平",
    "normalizedValue": "重庆梁平",
    "normalizedSearchText": "重庆梁平梁平重庆"
  },
  {
    "code": "500156",
    "name": "武隆区",
    "detail": "重庆市",
    "value": "重庆市 / 武隆区",
    "rank": 3,
    "normalizedName": "武隆",
    "normalizedValue": "重庆武隆",
    "normalizedSearchText": "重庆武隆武隆重庆"
  },
  {
    "code": "500229",
    "name": "城口县",
    "detail": "重庆市",
    "value": "重庆市 / 城口县",
    "rank": 3,
    "normalizedName": "城口",
    "normalizedValue": "重庆城口",
    "normalizedSearchText": "重庆城口城口重庆"
  },
  {
    "code": "500230",
    "name": "丰都县",
    "detail": "重庆市",
    "value": "重庆市 / 丰都县",
    "rank": 3,
    "normalizedName": "丰都",
    "normalizedValue": "重庆丰都",
    "normalizedSearchText": "重庆丰都丰都重庆"
  },
  {
    "code": "500231",
    "name": "垫江县",
    "detail": "重庆市",
    "value": "重庆市 / 垫江县",
    "rank": 3,
    "normalizedName": "垫江",
    "normalizedValue": "重庆垫江",
    "normalizedSearchText": "重庆垫江垫江重庆"
  },
  {
    "code": "500233",
    "name": "忠县",
    "detail": "重庆市",
    "value": "重庆市 / 忠县",
    "rank": 3,
    "normalizedName": "忠",
    "normalizedValue": "重庆忠",
    "normalizedSearchText": "重庆忠忠重庆"
  },
  {
    "code": "500235",
    "name": "云阳县",
    "detail": "重庆市",
    "value": "重庆市 / 云阳县",
    "rank": 3,
    "normalizedName": "云阳",
    "normalizedValue": "重庆云阳",
    "normalizedSearchText": "重庆云阳云阳重庆"
  },
  {
    "code": "500236",
    "name": "奉节县",
    "detail": "重庆市",
    "value": "重庆市 / 奉节县",
    "rank": 3,
    "normalizedName": "奉节",
    "normalizedValue": "重庆奉节",
    "normalizedSearchText": "重庆奉节奉节重庆"
  },
  {
    "code": "500237",
    "name": "巫山县",
    "detail": "重庆市",
    "value": "重庆市 / 巫山县",
    "rank": 3,
    "normalizedName": "巫山",
    "normalizedValue": "重庆巫山",
    "normalizedSearchText": "重庆巫山巫山重庆"
  },
  {
    "code": "500238",
    "name": "巫溪县",
    "detail": "重庆市",
    "value": "重庆市 / 巫溪县",
    "rank": 3,
    "normalizedName": "巫溪",
    "normalizedValue": "重庆巫溪",
    "normalizedSearchText": "重庆巫溪巫溪重庆"
  },
  {
    "code": "500240",
    "name": "石柱土家族自治县",
    "detail": "重庆市",
    "value": "重庆市 / 石柱土家族自治县",
    "rank": 3,
    "normalizedName": "石柱土家族自治",
    "normalizedValue": "重庆石柱土家族自治",
    "normalizedSearchText": "重庆石柱土家族自治石柱土家族自治重庆"
  },
  {
    "code": "500241",
    "name": "秀山土家族苗族自治县",
    "detail": "重庆市",
    "value": "重庆市 / 秀山土家族苗族自治县",
    "rank": 3,
    "normalizedName": "秀山土家族苗族自治",
    "normalizedValue": "重庆秀山土家族苗族自治",
    "normalizedSearchText": "重庆秀山土家族苗族自治秀山土家族苗族自治重庆"
  },
  {
    "code": "500242",
    "name": "酉阳土家族苗族自治县",
    "detail": "重庆市",
    "value": "重庆市 / 酉阳土家族苗族自治县",
    "rank": 3,
    "normalizedName": "酉阳土家族苗族自治",
    "normalizedValue": "重庆酉阳土家族苗族自治",
    "normalizedSearchText": "重庆酉阳土家族苗族自治酉阳土家族苗族自治重庆"
  },
  {
    "code": "500243",
    "name": "彭水苗族土家族自治县",
    "detail": "重庆市",
    "value": "重庆市 / 彭水苗族土家族自治县",
    "rank": 3,
    "normalizedName": "彭水苗族土家族自治",
    "normalizedValue": "重庆彭水苗族土家族自治",
    "normalizedSearchText": "重庆彭水苗族土家族自治彭水苗族土家族自治重庆"
  },
  {
    "code": "510000",
    "name": "四川省",
    "detail": "?????",
    "value": "四川省",
    "rank": 1,
    "normalizedName": "四川",
    "normalizedValue": "四川",
    "normalizedSearchText": "四川四川"
  },
  {
    "code": "510100",
    "name": "成都市",
    "detail": "四川省",
    "value": "四川省 / 成都市",
    "rank": 2,
    "normalizedName": "成都",
    "normalizedValue": "四川成都",
    "normalizedSearchText": "四川成都成都四川"
  },
  {
    "code": "510104",
    "name": "锦江区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 锦江区",
    "rank": 3,
    "normalizedName": "锦江",
    "normalizedValue": "四川成都锦江",
    "normalizedSearchText": "四川成都锦江锦江四川成都"
  },
  {
    "code": "510105",
    "name": "青羊区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 青羊区",
    "rank": 3,
    "normalizedName": "青羊",
    "normalizedValue": "四川成都青羊",
    "normalizedSearchText": "四川成都青羊青羊四川成都"
  },
  {
    "code": "510106",
    "name": "金牛区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 金牛区",
    "rank": 3,
    "normalizedName": "金牛",
    "normalizedValue": "四川成都金牛",
    "normalizedSearchText": "四川成都金牛金牛四川成都"
  },
  {
    "code": "510107",
    "name": "武侯区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 武侯区",
    "rank": 3,
    "normalizedName": "武侯",
    "normalizedValue": "四川成都武侯",
    "normalizedSearchText": "四川成都武侯武侯四川成都"
  },
  {
    "code": "510108",
    "name": "成华区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 成华区",
    "rank": 3,
    "normalizedName": "成华",
    "normalizedValue": "四川成都成华",
    "normalizedSearchText": "四川成都成华成华四川成都"
  },
  {
    "code": "510112",
    "name": "龙泉驿区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 龙泉驿区",
    "rank": 3,
    "normalizedName": "龙泉驿",
    "normalizedValue": "四川成都龙泉驿",
    "normalizedSearchText": "四川成都龙泉驿龙泉驿四川成都"
  },
  {
    "code": "510113",
    "name": "青白江区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 青白江区",
    "rank": 3,
    "normalizedName": "青白江",
    "normalizedValue": "四川成都青白江",
    "normalizedSearchText": "四川成都青白江青白江四川成都"
  },
  {
    "code": "510114",
    "name": "新都区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 新都区",
    "rank": 3,
    "normalizedName": "新都",
    "normalizedValue": "四川成都新都",
    "normalizedSearchText": "四川成都新都新都四川成都"
  },
  {
    "code": "510115",
    "name": "温江区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 温江区",
    "rank": 3,
    "normalizedName": "温江",
    "normalizedValue": "四川成都温江",
    "normalizedSearchText": "四川成都温江温江四川成都"
  },
  {
    "code": "510116",
    "name": "双流区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 双流区",
    "rank": 3,
    "normalizedName": "双流",
    "normalizedValue": "四川成都双流",
    "normalizedSearchText": "四川成都双流双流四川成都"
  },
  {
    "code": "510117",
    "name": "郫都区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 郫都区",
    "rank": 3,
    "normalizedName": "郫都",
    "normalizedValue": "四川成都郫都",
    "normalizedSearchText": "四川成都郫都郫都四川成都"
  },
  {
    "code": "510118",
    "name": "新津区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 新津区",
    "rank": 3,
    "normalizedName": "新津",
    "normalizedValue": "四川成都新津",
    "normalizedSearchText": "四川成都新津新津四川成都"
  },
  {
    "code": "510121",
    "name": "金堂县",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 金堂县",
    "rank": 3,
    "normalizedName": "金堂",
    "normalizedValue": "四川成都金堂",
    "normalizedSearchText": "四川成都金堂金堂四川成都"
  },
  {
    "code": "510129",
    "name": "大邑县",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 大邑县",
    "rank": 3,
    "normalizedName": "大邑",
    "normalizedValue": "四川成都大邑",
    "normalizedSearchText": "四川成都大邑大邑四川成都"
  },
  {
    "code": "510131",
    "name": "蒲江县",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 蒲江县",
    "rank": 3,
    "normalizedName": "蒲江",
    "normalizedValue": "四川成都蒲江",
    "normalizedSearchText": "四川成都蒲江蒲江四川成都"
  },
  {
    "code": "510181",
    "name": "都江堰市",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 都江堰市",
    "rank": 3,
    "normalizedName": "都江堰",
    "normalizedValue": "四川成都都江堰",
    "normalizedSearchText": "四川成都都江堰都江堰四川成都"
  },
  {
    "code": "510182",
    "name": "彭州市",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 彭州市",
    "rank": 3,
    "normalizedName": "彭州",
    "normalizedValue": "四川成都彭州",
    "normalizedSearchText": "四川成都彭州彭州四川成都"
  },
  {
    "code": "510183",
    "name": "邛崃市",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 邛崃市",
    "rank": 3,
    "normalizedName": "邛崃",
    "normalizedValue": "四川成都邛崃",
    "normalizedSearchText": "四川成都邛崃邛崃四川成都"
  },
  {
    "code": "510184",
    "name": "崇州市",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 崇州市",
    "rank": 3,
    "normalizedName": "崇州",
    "normalizedValue": "四川成都崇州",
    "normalizedSearchText": "四川成都崇州崇州四川成都"
  },
  {
    "code": "510185",
    "name": "简阳市",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 简阳市",
    "rank": 3,
    "normalizedName": "简阳",
    "normalizedValue": "四川成都简阳",
    "normalizedSearchText": "四川成都简阳简阳四川成都"
  },
  {
    "code": "510101",
    "name": "市辖区",
    "detail": "四川省 / 成都市",
    "value": "四川省 / 成都市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川成都辖",
    "normalizedSearchText": "四川成都辖辖四川成都"
  },
  {
    "code": "510300",
    "name": "自贡市",
    "detail": "四川省",
    "value": "四川省 / 自贡市",
    "rank": 2,
    "normalizedName": "自贡",
    "normalizedValue": "四川自贡",
    "normalizedSearchText": "四川自贡自贡四川"
  },
  {
    "code": "510302",
    "name": "自流井区",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 自流井区",
    "rank": 3,
    "normalizedName": "自流井",
    "normalizedValue": "四川自贡自流井",
    "normalizedSearchText": "四川自贡自流井自流井四川自贡"
  },
  {
    "code": "510303",
    "name": "贡井区",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 贡井区",
    "rank": 3,
    "normalizedName": "贡井",
    "normalizedValue": "四川自贡贡井",
    "normalizedSearchText": "四川自贡贡井贡井四川自贡"
  },
  {
    "code": "510304",
    "name": "大安区",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 大安区",
    "rank": 3,
    "normalizedName": "大安",
    "normalizedValue": "四川自贡大安",
    "normalizedSearchText": "四川自贡大安大安四川自贡"
  },
  {
    "code": "510311",
    "name": "沿滩区",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 沿滩区",
    "rank": 3,
    "normalizedName": "沿滩",
    "normalizedValue": "四川自贡沿滩",
    "normalizedSearchText": "四川自贡沿滩沿滩四川自贡"
  },
  {
    "code": "510321",
    "name": "荣县",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 荣县",
    "rank": 3,
    "normalizedName": "荣",
    "normalizedValue": "四川自贡荣",
    "normalizedSearchText": "四川自贡荣荣四川自贡"
  },
  {
    "code": "510322",
    "name": "富顺县",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 富顺县",
    "rank": 3,
    "normalizedName": "富顺",
    "normalizedValue": "四川自贡富顺",
    "normalizedSearchText": "四川自贡富顺富顺四川自贡"
  },
  {
    "code": "510301",
    "name": "市辖区",
    "detail": "四川省 / 自贡市",
    "value": "四川省 / 自贡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川自贡辖",
    "normalizedSearchText": "四川自贡辖辖四川自贡"
  },
  {
    "code": "510400",
    "name": "攀枝花市",
    "detail": "四川省",
    "value": "四川省 / 攀枝花市",
    "rank": 2,
    "normalizedName": "攀枝花",
    "normalizedValue": "四川攀枝花",
    "normalizedSearchText": "四川攀枝花攀枝花四川"
  },
  {
    "code": "510402",
    "name": "东区",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 东区",
    "rank": 3,
    "normalizedName": "东",
    "normalizedValue": "四川攀枝花东",
    "normalizedSearchText": "四川攀枝花东东四川攀枝花"
  },
  {
    "code": "510403",
    "name": "西区",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 西区",
    "rank": 3,
    "normalizedName": "西",
    "normalizedValue": "四川攀枝花西",
    "normalizedSearchText": "四川攀枝花西西四川攀枝花"
  },
  {
    "code": "510411",
    "name": "仁和区",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 仁和区",
    "rank": 3,
    "normalizedName": "仁和",
    "normalizedValue": "四川攀枝花仁和",
    "normalizedSearchText": "四川攀枝花仁和仁和四川攀枝花"
  },
  {
    "code": "510421",
    "name": "米易县",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 米易县",
    "rank": 3,
    "normalizedName": "米易",
    "normalizedValue": "四川攀枝花米易",
    "normalizedSearchText": "四川攀枝花米易米易四川攀枝花"
  },
  {
    "code": "510422",
    "name": "盐边县",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 盐边县",
    "rank": 3,
    "normalizedName": "盐边",
    "normalizedValue": "四川攀枝花盐边",
    "normalizedSearchText": "四川攀枝花盐边盐边四川攀枝花"
  },
  {
    "code": "510401",
    "name": "市辖区",
    "detail": "四川省 / 攀枝花市",
    "value": "四川省 / 攀枝花市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川攀枝花辖",
    "normalizedSearchText": "四川攀枝花辖辖四川攀枝花"
  },
  {
    "code": "510500",
    "name": "泸州市",
    "detail": "四川省",
    "value": "四川省 / 泸州市",
    "rank": 2,
    "normalizedName": "泸州",
    "normalizedValue": "四川泸州",
    "normalizedSearchText": "四川泸州泸州四川"
  },
  {
    "code": "510502",
    "name": "江阳区",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 江阳区",
    "rank": 3,
    "normalizedName": "江阳",
    "normalizedValue": "四川泸州江阳",
    "normalizedSearchText": "四川泸州江阳江阳四川泸州"
  },
  {
    "code": "510503",
    "name": "纳溪区",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 纳溪区",
    "rank": 3,
    "normalizedName": "纳溪",
    "normalizedValue": "四川泸州纳溪",
    "normalizedSearchText": "四川泸州纳溪纳溪四川泸州"
  },
  {
    "code": "510504",
    "name": "龙马潭区",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 龙马潭区",
    "rank": 3,
    "normalizedName": "龙马潭",
    "normalizedValue": "四川泸州龙马潭",
    "normalizedSearchText": "四川泸州龙马潭龙马潭四川泸州"
  },
  {
    "code": "510521",
    "name": "泸县",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 泸县",
    "rank": 3,
    "normalizedName": "泸",
    "normalizedValue": "四川泸州泸",
    "normalizedSearchText": "四川泸州泸泸四川泸州"
  },
  {
    "code": "510522",
    "name": "合江县",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 合江县",
    "rank": 3,
    "normalizedName": "合江",
    "normalizedValue": "四川泸州合江",
    "normalizedSearchText": "四川泸州合江合江四川泸州"
  },
  {
    "code": "510524",
    "name": "叙永县",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 叙永县",
    "rank": 3,
    "normalizedName": "叙永",
    "normalizedValue": "四川泸州叙永",
    "normalizedSearchText": "四川泸州叙永叙永四川泸州"
  },
  {
    "code": "510525",
    "name": "古蔺县",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 古蔺县",
    "rank": 3,
    "normalizedName": "古蔺",
    "normalizedValue": "四川泸州古蔺",
    "normalizedSearchText": "四川泸州古蔺古蔺四川泸州"
  },
  {
    "code": "510501",
    "name": "市辖区",
    "detail": "四川省 / 泸州市",
    "value": "四川省 / 泸州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川泸州辖",
    "normalizedSearchText": "四川泸州辖辖四川泸州"
  },
  {
    "code": "510600",
    "name": "德阳市",
    "detail": "四川省",
    "value": "四川省 / 德阳市",
    "rank": 2,
    "normalizedName": "德阳",
    "normalizedValue": "四川德阳",
    "normalizedSearchText": "四川德阳德阳四川"
  },
  {
    "code": "510603",
    "name": "旌阳区",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 旌阳区",
    "rank": 3,
    "normalizedName": "旌阳",
    "normalizedValue": "四川德阳旌阳",
    "normalizedSearchText": "四川德阳旌阳旌阳四川德阳"
  },
  {
    "code": "510604",
    "name": "罗江区",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 罗江区",
    "rank": 3,
    "normalizedName": "罗江",
    "normalizedValue": "四川德阳罗江",
    "normalizedSearchText": "四川德阳罗江罗江四川德阳"
  },
  {
    "code": "510623",
    "name": "中江县",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 中江县",
    "rank": 3,
    "normalizedName": "中江",
    "normalizedValue": "四川德阳中江",
    "normalizedSearchText": "四川德阳中江中江四川德阳"
  },
  {
    "code": "510681",
    "name": "广汉市",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 广汉市",
    "rank": 3,
    "normalizedName": "广汉",
    "normalizedValue": "四川德阳广汉",
    "normalizedSearchText": "四川德阳广汉广汉四川德阳"
  },
  {
    "code": "510682",
    "name": "什邡市",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 什邡市",
    "rank": 3,
    "normalizedName": "什邡",
    "normalizedValue": "四川德阳什邡",
    "normalizedSearchText": "四川德阳什邡什邡四川德阳"
  },
  {
    "code": "510683",
    "name": "绵竹市",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 绵竹市",
    "rank": 3,
    "normalizedName": "绵竹",
    "normalizedValue": "四川德阳绵竹",
    "normalizedSearchText": "四川德阳绵竹绵竹四川德阳"
  },
  {
    "code": "510601",
    "name": "市辖区",
    "detail": "四川省 / 德阳市",
    "value": "四川省 / 德阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川德阳辖",
    "normalizedSearchText": "四川德阳辖辖四川德阳"
  },
  {
    "code": "510700",
    "name": "绵阳市",
    "detail": "四川省",
    "value": "四川省 / 绵阳市",
    "rank": 2,
    "normalizedName": "绵阳",
    "normalizedValue": "四川绵阳",
    "normalizedSearchText": "四川绵阳绵阳四川"
  },
  {
    "code": "510703",
    "name": "涪城区",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 涪城区",
    "rank": 3,
    "normalizedName": "涪城",
    "normalizedValue": "四川绵阳涪城",
    "normalizedSearchText": "四川绵阳涪城涪城四川绵阳"
  },
  {
    "code": "510704",
    "name": "游仙区",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 游仙区",
    "rank": 3,
    "normalizedName": "游仙",
    "normalizedValue": "四川绵阳游仙",
    "normalizedSearchText": "四川绵阳游仙游仙四川绵阳"
  },
  {
    "code": "510705",
    "name": "安州区",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 安州区",
    "rank": 3,
    "normalizedName": "安州",
    "normalizedValue": "四川绵阳安州",
    "normalizedSearchText": "四川绵阳安州安州四川绵阳"
  },
  {
    "code": "510722",
    "name": "三台县",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 三台县",
    "rank": 3,
    "normalizedName": "三台",
    "normalizedValue": "四川绵阳三台",
    "normalizedSearchText": "四川绵阳三台三台四川绵阳"
  },
  {
    "code": "510723",
    "name": "盐亭县",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 盐亭县",
    "rank": 3,
    "normalizedName": "盐亭",
    "normalizedValue": "四川绵阳盐亭",
    "normalizedSearchText": "四川绵阳盐亭盐亭四川绵阳"
  },
  {
    "code": "510725",
    "name": "梓潼县",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 梓潼县",
    "rank": 3,
    "normalizedName": "梓潼",
    "normalizedValue": "四川绵阳梓潼",
    "normalizedSearchText": "四川绵阳梓潼梓潼四川绵阳"
  },
  {
    "code": "510726",
    "name": "北川羌族自治县",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 北川羌族自治县",
    "rank": 3,
    "normalizedName": "北川羌族自治",
    "normalizedValue": "四川绵阳北川羌族自治",
    "normalizedSearchText": "四川绵阳北川羌族自治北川羌族自治四川绵阳"
  },
  {
    "code": "510727",
    "name": "平武县",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 平武县",
    "rank": 3,
    "normalizedName": "平武",
    "normalizedValue": "四川绵阳平武",
    "normalizedSearchText": "四川绵阳平武平武四川绵阳"
  },
  {
    "code": "510781",
    "name": "江油市",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 江油市",
    "rank": 3,
    "normalizedName": "江油",
    "normalizedValue": "四川绵阳江油",
    "normalizedSearchText": "四川绵阳江油江油四川绵阳"
  },
  {
    "code": "510701",
    "name": "市辖区",
    "detail": "四川省 / 绵阳市",
    "value": "四川省 / 绵阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川绵阳辖",
    "normalizedSearchText": "四川绵阳辖辖四川绵阳"
  },
  {
    "code": "510800",
    "name": "广元市",
    "detail": "四川省",
    "value": "四川省 / 广元市",
    "rank": 2,
    "normalizedName": "广元",
    "normalizedValue": "四川广元",
    "normalizedSearchText": "四川广元广元四川"
  },
  {
    "code": "510802",
    "name": "利州区",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 利州区",
    "rank": 3,
    "normalizedName": "利州",
    "normalizedValue": "四川广元利州",
    "normalizedSearchText": "四川广元利州利州四川广元"
  },
  {
    "code": "510811",
    "name": "昭化区",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 昭化区",
    "rank": 3,
    "normalizedName": "昭化",
    "normalizedValue": "四川广元昭化",
    "normalizedSearchText": "四川广元昭化昭化四川广元"
  },
  {
    "code": "510812",
    "name": "朝天区",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 朝天区",
    "rank": 3,
    "normalizedName": "朝天",
    "normalizedValue": "四川广元朝天",
    "normalizedSearchText": "四川广元朝天朝天四川广元"
  },
  {
    "code": "510821",
    "name": "旺苍县",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 旺苍县",
    "rank": 3,
    "normalizedName": "旺苍",
    "normalizedValue": "四川广元旺苍",
    "normalizedSearchText": "四川广元旺苍旺苍四川广元"
  },
  {
    "code": "510822",
    "name": "青川县",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 青川县",
    "rank": 3,
    "normalizedName": "青川",
    "normalizedValue": "四川广元青川",
    "normalizedSearchText": "四川广元青川青川四川广元"
  },
  {
    "code": "510823",
    "name": "剑阁县",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 剑阁县",
    "rank": 3,
    "normalizedName": "剑阁",
    "normalizedValue": "四川广元剑阁",
    "normalizedSearchText": "四川广元剑阁剑阁四川广元"
  },
  {
    "code": "510824",
    "name": "苍溪县",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 苍溪县",
    "rank": 3,
    "normalizedName": "苍溪",
    "normalizedValue": "四川广元苍溪",
    "normalizedSearchText": "四川广元苍溪苍溪四川广元"
  },
  {
    "code": "510801",
    "name": "市辖区",
    "detail": "四川省 / 广元市",
    "value": "四川省 / 广元市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川广元辖",
    "normalizedSearchText": "四川广元辖辖四川广元"
  },
  {
    "code": "510900",
    "name": "遂宁市",
    "detail": "四川省",
    "value": "四川省 / 遂宁市",
    "rank": 2,
    "normalizedName": "遂宁",
    "normalizedValue": "四川遂宁",
    "normalizedSearchText": "四川遂宁遂宁四川"
  },
  {
    "code": "510903",
    "name": "船山区",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 船山区",
    "rank": 3,
    "normalizedName": "船山",
    "normalizedValue": "四川遂宁船山",
    "normalizedSearchText": "四川遂宁船山船山四川遂宁"
  },
  {
    "code": "510904",
    "name": "安居区",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 安居区",
    "rank": 3,
    "normalizedName": "安居",
    "normalizedValue": "四川遂宁安居",
    "normalizedSearchText": "四川遂宁安居安居四川遂宁"
  },
  {
    "code": "510921",
    "name": "蓬溪县",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 蓬溪县",
    "rank": 3,
    "normalizedName": "蓬溪",
    "normalizedValue": "四川遂宁蓬溪",
    "normalizedSearchText": "四川遂宁蓬溪蓬溪四川遂宁"
  },
  {
    "code": "510923",
    "name": "大英县",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 大英县",
    "rank": 3,
    "normalizedName": "大英",
    "normalizedValue": "四川遂宁大英",
    "normalizedSearchText": "四川遂宁大英大英四川遂宁"
  },
  {
    "code": "510981",
    "name": "射洪市",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 射洪市",
    "rank": 3,
    "normalizedName": "射洪",
    "normalizedValue": "四川遂宁射洪",
    "normalizedSearchText": "四川遂宁射洪射洪四川遂宁"
  },
  {
    "code": "510901",
    "name": "市辖区",
    "detail": "四川省 / 遂宁市",
    "value": "四川省 / 遂宁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川遂宁辖",
    "normalizedSearchText": "四川遂宁辖辖四川遂宁"
  },
  {
    "code": "511000",
    "name": "内江市",
    "detail": "四川省",
    "value": "四川省 / 内江市",
    "rank": 2,
    "normalizedName": "内江",
    "normalizedValue": "四川内江",
    "normalizedSearchText": "四川内江内江四川"
  },
  {
    "code": "511002",
    "name": "市中区",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 市中区",
    "rank": 3,
    "normalizedName": "中",
    "normalizedValue": "四川内江中",
    "normalizedSearchText": "四川内江中中四川内江"
  },
  {
    "code": "511011",
    "name": "东兴区",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 东兴区",
    "rank": 3,
    "normalizedName": "东兴",
    "normalizedValue": "四川内江东兴",
    "normalizedSearchText": "四川内江东兴东兴四川内江"
  },
  {
    "code": "511024",
    "name": "威远县",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 威远县",
    "rank": 3,
    "normalizedName": "威远",
    "normalizedValue": "四川内江威远",
    "normalizedSearchText": "四川内江威远威远四川内江"
  },
  {
    "code": "511025",
    "name": "资中县",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 资中县",
    "rank": 3,
    "normalizedName": "资中",
    "normalizedValue": "四川内江资中",
    "normalizedSearchText": "四川内江资中资中四川内江"
  },
  {
    "code": "511083",
    "name": "隆昌市",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 隆昌市",
    "rank": 3,
    "normalizedName": "隆昌",
    "normalizedValue": "四川内江隆昌",
    "normalizedSearchText": "四川内江隆昌隆昌四川内江"
  },
  {
    "code": "511001",
    "name": "市辖区",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川内江辖",
    "normalizedSearchText": "四川内江辖辖四川内江"
  },
  {
    "code": "511071",
    "name": "内江经济开发区",
    "detail": "四川省 / 内江市",
    "value": "四川省 / 内江市 / 内江经济开发区",
    "rank": 3,
    "normalizedName": "内江经济开发",
    "normalizedValue": "四川内江内江经济开发",
    "normalizedSearchText": "四川内江内江经济开发内江经济开发四川内江"
  },
  {
    "code": "511100",
    "name": "乐山市",
    "detail": "四川省",
    "value": "四川省 / 乐山市",
    "rank": 2,
    "normalizedName": "乐山",
    "normalizedValue": "四川乐山",
    "normalizedSearchText": "四川乐山乐山四川"
  },
  {
    "code": "511102",
    "name": "市中区",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 市中区",
    "rank": 3,
    "normalizedName": "中",
    "normalizedValue": "四川乐山中",
    "normalizedSearchText": "四川乐山中中四川乐山"
  },
  {
    "code": "511111",
    "name": "沙湾区",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 沙湾区",
    "rank": 3,
    "normalizedName": "沙湾",
    "normalizedValue": "四川乐山沙湾",
    "normalizedSearchText": "四川乐山沙湾沙湾四川乐山"
  },
  {
    "code": "511112",
    "name": "五通桥区",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 五通桥区",
    "rank": 3,
    "normalizedName": "五通桥",
    "normalizedValue": "四川乐山五通桥",
    "normalizedSearchText": "四川乐山五通桥五通桥四川乐山"
  },
  {
    "code": "511113",
    "name": "金口河区",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 金口河区",
    "rank": 3,
    "normalizedName": "金口河",
    "normalizedValue": "四川乐山金口河",
    "normalizedSearchText": "四川乐山金口河金口河四川乐山"
  },
  {
    "code": "511123",
    "name": "犍为县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 犍为县",
    "rank": 3,
    "normalizedName": "犍为",
    "normalizedValue": "四川乐山犍为",
    "normalizedSearchText": "四川乐山犍为犍为四川乐山"
  },
  {
    "code": "511124",
    "name": "井研县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 井研县",
    "rank": 3,
    "normalizedName": "井研",
    "normalizedValue": "四川乐山井研",
    "normalizedSearchText": "四川乐山井研井研四川乐山"
  },
  {
    "code": "511126",
    "name": "夹江县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 夹江县",
    "rank": 3,
    "normalizedName": "夹江",
    "normalizedValue": "四川乐山夹江",
    "normalizedSearchText": "四川乐山夹江夹江四川乐山"
  },
  {
    "code": "511129",
    "name": "沐川县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 沐川县",
    "rank": 3,
    "normalizedName": "沐川",
    "normalizedValue": "四川乐山沐川",
    "normalizedSearchText": "四川乐山沐川沐川四川乐山"
  },
  {
    "code": "511132",
    "name": "峨边彝族自治县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 峨边彝族自治县",
    "rank": 3,
    "normalizedName": "峨边彝族自治",
    "normalizedValue": "四川乐山峨边彝族自治",
    "normalizedSearchText": "四川乐山峨边彝族自治峨边彝族自治四川乐山"
  },
  {
    "code": "511133",
    "name": "马边彝族自治县",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 马边彝族自治县",
    "rank": 3,
    "normalizedName": "马边彝族自治",
    "normalizedValue": "四川乐山马边彝族自治",
    "normalizedSearchText": "四川乐山马边彝族自治马边彝族自治四川乐山"
  },
  {
    "code": "511181",
    "name": "峨眉山市",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 峨眉山市",
    "rank": 3,
    "normalizedName": "峨眉山",
    "normalizedValue": "四川乐山峨眉山",
    "normalizedSearchText": "四川乐山峨眉山峨眉山四川乐山"
  },
  {
    "code": "511101",
    "name": "市辖区",
    "detail": "四川省 / 乐山市",
    "value": "四川省 / 乐山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川乐山辖",
    "normalizedSearchText": "四川乐山辖辖四川乐山"
  },
  {
    "code": "511300",
    "name": "南充市",
    "detail": "四川省",
    "value": "四川省 / 南充市",
    "rank": 2,
    "normalizedName": "南充",
    "normalizedValue": "四川南充",
    "normalizedSearchText": "四川南充南充四川"
  },
  {
    "code": "511302",
    "name": "顺庆区",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 顺庆区",
    "rank": 3,
    "normalizedName": "顺庆",
    "normalizedValue": "四川南充顺庆",
    "normalizedSearchText": "四川南充顺庆顺庆四川南充"
  },
  {
    "code": "511303",
    "name": "高坪区",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 高坪区",
    "rank": 3,
    "normalizedName": "高坪",
    "normalizedValue": "四川南充高坪",
    "normalizedSearchText": "四川南充高坪高坪四川南充"
  },
  {
    "code": "511304",
    "name": "嘉陵区",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 嘉陵区",
    "rank": 3,
    "normalizedName": "嘉陵",
    "normalizedValue": "四川南充嘉陵",
    "normalizedSearchText": "四川南充嘉陵嘉陵四川南充"
  },
  {
    "code": "511321",
    "name": "南部县",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 南部县",
    "rank": 3,
    "normalizedName": "南部",
    "normalizedValue": "四川南充南部",
    "normalizedSearchText": "四川南充南部南部四川南充"
  },
  {
    "code": "511322",
    "name": "营山县",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 营山县",
    "rank": 3,
    "normalizedName": "营山",
    "normalizedValue": "四川南充营山",
    "normalizedSearchText": "四川南充营山营山四川南充"
  },
  {
    "code": "511323",
    "name": "蓬安县",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 蓬安县",
    "rank": 3,
    "normalizedName": "蓬安",
    "normalizedValue": "四川南充蓬安",
    "normalizedSearchText": "四川南充蓬安蓬安四川南充"
  },
  {
    "code": "511324",
    "name": "仪陇县",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 仪陇县",
    "rank": 3,
    "normalizedName": "仪陇",
    "normalizedValue": "四川南充仪陇",
    "normalizedSearchText": "四川南充仪陇仪陇四川南充"
  },
  {
    "code": "511325",
    "name": "西充县",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 西充县",
    "rank": 3,
    "normalizedName": "西充",
    "normalizedValue": "四川南充西充",
    "normalizedSearchText": "四川南充西充西充四川南充"
  },
  {
    "code": "511381",
    "name": "阆中市",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 阆中市",
    "rank": 3,
    "normalizedName": "阆中",
    "normalizedValue": "四川南充阆中",
    "normalizedSearchText": "四川南充阆中阆中四川南充"
  },
  {
    "code": "511301",
    "name": "市辖区",
    "detail": "四川省 / 南充市",
    "value": "四川省 / 南充市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川南充辖",
    "normalizedSearchText": "四川南充辖辖四川南充"
  },
  {
    "code": "511400",
    "name": "眉山市",
    "detail": "四川省",
    "value": "四川省 / 眉山市",
    "rank": 2,
    "normalizedName": "眉山",
    "normalizedValue": "四川眉山",
    "normalizedSearchText": "四川眉山眉山四川"
  },
  {
    "code": "511402",
    "name": "东坡区",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 东坡区",
    "rank": 3,
    "normalizedName": "东坡",
    "normalizedValue": "四川眉山东坡",
    "normalizedSearchText": "四川眉山东坡东坡四川眉山"
  },
  {
    "code": "511403",
    "name": "彭山区",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 彭山区",
    "rank": 3,
    "normalizedName": "彭山",
    "normalizedValue": "四川眉山彭山",
    "normalizedSearchText": "四川眉山彭山彭山四川眉山"
  },
  {
    "code": "511421",
    "name": "仁寿县",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 仁寿县",
    "rank": 3,
    "normalizedName": "仁寿",
    "normalizedValue": "四川眉山仁寿",
    "normalizedSearchText": "四川眉山仁寿仁寿四川眉山"
  },
  {
    "code": "511423",
    "name": "洪雅县",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 洪雅县",
    "rank": 3,
    "normalizedName": "洪雅",
    "normalizedValue": "四川眉山洪雅",
    "normalizedSearchText": "四川眉山洪雅洪雅四川眉山"
  },
  {
    "code": "511424",
    "name": "丹棱县",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 丹棱县",
    "rank": 3,
    "normalizedName": "丹棱",
    "normalizedValue": "四川眉山丹棱",
    "normalizedSearchText": "四川眉山丹棱丹棱四川眉山"
  },
  {
    "code": "511425",
    "name": "青神县",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 青神县",
    "rank": 3,
    "normalizedName": "青神",
    "normalizedValue": "四川眉山青神",
    "normalizedSearchText": "四川眉山青神青神四川眉山"
  },
  {
    "code": "511401",
    "name": "市辖区",
    "detail": "四川省 / 眉山市",
    "value": "四川省 / 眉山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川眉山辖",
    "normalizedSearchText": "四川眉山辖辖四川眉山"
  },
  {
    "code": "511500",
    "name": "宜宾市",
    "detail": "四川省",
    "value": "四川省 / 宜宾市",
    "rank": 2,
    "normalizedName": "宜宾",
    "normalizedValue": "四川宜宾",
    "normalizedSearchText": "四川宜宾宜宾四川"
  },
  {
    "code": "511502",
    "name": "翠屏区",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 翠屏区",
    "rank": 3,
    "normalizedName": "翠屏",
    "normalizedValue": "四川宜宾翠屏",
    "normalizedSearchText": "四川宜宾翠屏翠屏四川宜宾"
  },
  {
    "code": "511503",
    "name": "南溪区",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 南溪区",
    "rank": 3,
    "normalizedName": "南溪",
    "normalizedValue": "四川宜宾南溪",
    "normalizedSearchText": "四川宜宾南溪南溪四川宜宾"
  },
  {
    "code": "511504",
    "name": "叙州区",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 叙州区",
    "rank": 3,
    "normalizedName": "叙州",
    "normalizedValue": "四川宜宾叙州",
    "normalizedSearchText": "四川宜宾叙州叙州四川宜宾"
  },
  {
    "code": "511523",
    "name": "江安县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 江安县",
    "rank": 3,
    "normalizedName": "江安",
    "normalizedValue": "四川宜宾江安",
    "normalizedSearchText": "四川宜宾江安江安四川宜宾"
  },
  {
    "code": "511524",
    "name": "长宁县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 长宁县",
    "rank": 3,
    "normalizedName": "长宁",
    "normalizedValue": "四川宜宾长宁",
    "normalizedSearchText": "四川宜宾长宁长宁四川宜宾"
  },
  {
    "code": "511525",
    "name": "高县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 高县",
    "rank": 3,
    "normalizedName": "高",
    "normalizedValue": "四川宜宾高",
    "normalizedSearchText": "四川宜宾高高四川宜宾"
  },
  {
    "code": "511526",
    "name": "珙县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 珙县",
    "rank": 3,
    "normalizedName": "珙",
    "normalizedValue": "四川宜宾珙",
    "normalizedSearchText": "四川宜宾珙珙四川宜宾"
  },
  {
    "code": "511527",
    "name": "筠连县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 筠连县",
    "rank": 3,
    "normalizedName": "筠连",
    "normalizedValue": "四川宜宾筠连",
    "normalizedSearchText": "四川宜宾筠连筠连四川宜宾"
  },
  {
    "code": "511528",
    "name": "兴文县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 兴文县",
    "rank": 3,
    "normalizedName": "兴文",
    "normalizedValue": "四川宜宾兴文",
    "normalizedSearchText": "四川宜宾兴文兴文四川宜宾"
  },
  {
    "code": "511529",
    "name": "屏山县",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 屏山县",
    "rank": 3,
    "normalizedName": "屏山",
    "normalizedValue": "四川宜宾屏山",
    "normalizedSearchText": "四川宜宾屏山屏山四川宜宾"
  },
  {
    "code": "511501",
    "name": "市辖区",
    "detail": "四川省 / 宜宾市",
    "value": "四川省 / 宜宾市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川宜宾辖",
    "normalizedSearchText": "四川宜宾辖辖四川宜宾"
  },
  {
    "code": "511600",
    "name": "广安市",
    "detail": "四川省",
    "value": "四川省 / 广安市",
    "rank": 2,
    "normalizedName": "广安",
    "normalizedValue": "四川广安",
    "normalizedSearchText": "四川广安广安四川"
  },
  {
    "code": "511602",
    "name": "广安区",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 广安区",
    "rank": 3,
    "normalizedName": "广安",
    "normalizedValue": "四川广安广安",
    "normalizedSearchText": "四川广安广安广安四川广安"
  },
  {
    "code": "511603",
    "name": "前锋区",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 前锋区",
    "rank": 3,
    "normalizedName": "前锋",
    "normalizedValue": "四川广安前锋",
    "normalizedSearchText": "四川广安前锋前锋四川广安"
  },
  {
    "code": "511621",
    "name": "岳池县",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 岳池县",
    "rank": 3,
    "normalizedName": "岳池",
    "normalizedValue": "四川广安岳池",
    "normalizedSearchText": "四川广安岳池岳池四川广安"
  },
  {
    "code": "511622",
    "name": "武胜县",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 武胜县",
    "rank": 3,
    "normalizedName": "武胜",
    "normalizedValue": "四川广安武胜",
    "normalizedSearchText": "四川广安武胜武胜四川广安"
  },
  {
    "code": "511623",
    "name": "邻水县",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 邻水县",
    "rank": 3,
    "normalizedName": "邻水",
    "normalizedValue": "四川广安邻水",
    "normalizedSearchText": "四川广安邻水邻水四川广安"
  },
  {
    "code": "511681",
    "name": "华蓥市",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 华蓥市",
    "rank": 3,
    "normalizedName": "华蓥",
    "normalizedValue": "四川广安华蓥",
    "normalizedSearchText": "四川广安华蓥华蓥四川广安"
  },
  {
    "code": "511601",
    "name": "市辖区",
    "detail": "四川省 / 广安市",
    "value": "四川省 / 广安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川广安辖",
    "normalizedSearchText": "四川广安辖辖四川广安"
  },
  {
    "code": "511700",
    "name": "达州市",
    "detail": "四川省",
    "value": "四川省 / 达州市",
    "rank": 2,
    "normalizedName": "达州",
    "normalizedValue": "四川达州",
    "normalizedSearchText": "四川达州达州四川"
  },
  {
    "code": "511702",
    "name": "通川区",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 通川区",
    "rank": 3,
    "normalizedName": "通川",
    "normalizedValue": "四川达州通川",
    "normalizedSearchText": "四川达州通川通川四川达州"
  },
  {
    "code": "511703",
    "name": "达川区",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 达川区",
    "rank": 3,
    "normalizedName": "达川",
    "normalizedValue": "四川达州达川",
    "normalizedSearchText": "四川达州达川达川四川达州"
  },
  {
    "code": "511722",
    "name": "宣汉县",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 宣汉县",
    "rank": 3,
    "normalizedName": "宣汉",
    "normalizedValue": "四川达州宣汉",
    "normalizedSearchText": "四川达州宣汉宣汉四川达州"
  },
  {
    "code": "511723",
    "name": "开江县",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 开江县",
    "rank": 3,
    "normalizedName": "开江",
    "normalizedValue": "四川达州开江",
    "normalizedSearchText": "四川达州开江开江四川达州"
  },
  {
    "code": "511724",
    "name": "大竹县",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 大竹县",
    "rank": 3,
    "normalizedName": "大竹",
    "normalizedValue": "四川达州大竹",
    "normalizedSearchText": "四川达州大竹大竹四川达州"
  },
  {
    "code": "511725",
    "name": "渠县",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 渠县",
    "rank": 3,
    "normalizedName": "渠",
    "normalizedValue": "四川达州渠",
    "normalizedSearchText": "四川达州渠渠四川达州"
  },
  {
    "code": "511781",
    "name": "万源市",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 万源市",
    "rank": 3,
    "normalizedName": "万源",
    "normalizedValue": "四川达州万源",
    "normalizedSearchText": "四川达州万源万源四川达州"
  },
  {
    "code": "511701",
    "name": "市辖区",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川达州辖",
    "normalizedSearchText": "四川达州辖辖四川达州"
  },
  {
    "code": "511771",
    "name": "达州经济开发区",
    "detail": "四川省 / 达州市",
    "value": "四川省 / 达州市 / 达州经济开发区",
    "rank": 3,
    "normalizedName": "达州经济开发",
    "normalizedValue": "四川达州达州经济开发",
    "normalizedSearchText": "四川达州达州经济开发达州经济开发四川达州"
  },
  {
    "code": "511800",
    "name": "雅安市",
    "detail": "四川省",
    "value": "四川省 / 雅安市",
    "rank": 2,
    "normalizedName": "雅安",
    "normalizedValue": "四川雅安",
    "normalizedSearchText": "四川雅安雅安四川"
  },
  {
    "code": "511802",
    "name": "雨城区",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 雨城区",
    "rank": 3,
    "normalizedName": "雨城",
    "normalizedValue": "四川雅安雨城",
    "normalizedSearchText": "四川雅安雨城雨城四川雅安"
  },
  {
    "code": "511803",
    "name": "名山区",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 名山区",
    "rank": 3,
    "normalizedName": "名山",
    "normalizedValue": "四川雅安名山",
    "normalizedSearchText": "四川雅安名山名山四川雅安"
  },
  {
    "code": "511822",
    "name": "荥经县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 荥经县",
    "rank": 3,
    "normalizedName": "荥经",
    "normalizedValue": "四川雅安荥经",
    "normalizedSearchText": "四川雅安荥经荥经四川雅安"
  },
  {
    "code": "511823",
    "name": "汉源县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 汉源县",
    "rank": 3,
    "normalizedName": "汉源",
    "normalizedValue": "四川雅安汉源",
    "normalizedSearchText": "四川雅安汉源汉源四川雅安"
  },
  {
    "code": "511824",
    "name": "石棉县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 石棉县",
    "rank": 3,
    "normalizedName": "石棉",
    "normalizedValue": "四川雅安石棉",
    "normalizedSearchText": "四川雅安石棉石棉四川雅安"
  },
  {
    "code": "511825",
    "name": "天全县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 天全县",
    "rank": 3,
    "normalizedName": "天全",
    "normalizedValue": "四川雅安天全",
    "normalizedSearchText": "四川雅安天全天全四川雅安"
  },
  {
    "code": "511826",
    "name": "芦山县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 芦山县",
    "rank": 3,
    "normalizedName": "芦山",
    "normalizedValue": "四川雅安芦山",
    "normalizedSearchText": "四川雅安芦山芦山四川雅安"
  },
  {
    "code": "511827",
    "name": "宝兴县",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 宝兴县",
    "rank": 3,
    "normalizedName": "宝兴",
    "normalizedValue": "四川雅安宝兴",
    "normalizedSearchText": "四川雅安宝兴宝兴四川雅安"
  },
  {
    "code": "511801",
    "name": "市辖区",
    "detail": "四川省 / 雅安市",
    "value": "四川省 / 雅安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川雅安辖",
    "normalizedSearchText": "四川雅安辖辖四川雅安"
  },
  {
    "code": "511900",
    "name": "巴中市",
    "detail": "四川省",
    "value": "四川省 / 巴中市",
    "rank": 2,
    "normalizedName": "巴中",
    "normalizedValue": "四川巴中",
    "normalizedSearchText": "四川巴中巴中四川"
  },
  {
    "code": "511902",
    "name": "巴州区",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 巴州区",
    "rank": 3,
    "normalizedName": "巴州",
    "normalizedValue": "四川巴中巴州",
    "normalizedSearchText": "四川巴中巴州巴州四川巴中"
  },
  {
    "code": "511903",
    "name": "恩阳区",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 恩阳区",
    "rank": 3,
    "normalizedName": "恩阳",
    "normalizedValue": "四川巴中恩阳",
    "normalizedSearchText": "四川巴中恩阳恩阳四川巴中"
  },
  {
    "code": "511921",
    "name": "通江县",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 通江县",
    "rank": 3,
    "normalizedName": "通江",
    "normalizedValue": "四川巴中通江",
    "normalizedSearchText": "四川巴中通江通江四川巴中"
  },
  {
    "code": "511922",
    "name": "南江县",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 南江县",
    "rank": 3,
    "normalizedName": "南江",
    "normalizedValue": "四川巴中南江",
    "normalizedSearchText": "四川巴中南江南江四川巴中"
  },
  {
    "code": "511923",
    "name": "平昌县",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 平昌县",
    "rank": 3,
    "normalizedName": "平昌",
    "normalizedValue": "四川巴中平昌",
    "normalizedSearchText": "四川巴中平昌平昌四川巴中"
  },
  {
    "code": "511901",
    "name": "市辖区",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川巴中辖",
    "normalizedSearchText": "四川巴中辖辖四川巴中"
  },
  {
    "code": "511971",
    "name": "巴中经济开发区",
    "detail": "四川省 / 巴中市",
    "value": "四川省 / 巴中市 / 巴中经济开发区",
    "rank": 3,
    "normalizedName": "巴中经济开发",
    "normalizedValue": "四川巴中巴中经济开发",
    "normalizedSearchText": "四川巴中巴中经济开发巴中经济开发四川巴中"
  },
  {
    "code": "512000",
    "name": "资阳市",
    "detail": "四川省",
    "value": "四川省 / 资阳市",
    "rank": 2,
    "normalizedName": "资阳",
    "normalizedValue": "四川资阳",
    "normalizedSearchText": "四川资阳资阳四川"
  },
  {
    "code": "512002",
    "name": "雁江区",
    "detail": "四川省 / 资阳市",
    "value": "四川省 / 资阳市 / 雁江区",
    "rank": 3,
    "normalizedName": "雁江",
    "normalizedValue": "四川资阳雁江",
    "normalizedSearchText": "四川资阳雁江雁江四川资阳"
  },
  {
    "code": "512021",
    "name": "安岳县",
    "detail": "四川省 / 资阳市",
    "value": "四川省 / 资阳市 / 安岳县",
    "rank": 3,
    "normalizedName": "安岳",
    "normalizedValue": "四川资阳安岳",
    "normalizedSearchText": "四川资阳安岳安岳四川资阳"
  },
  {
    "code": "512022",
    "name": "乐至县",
    "detail": "四川省 / 资阳市",
    "value": "四川省 / 资阳市 / 乐至县",
    "rank": 3,
    "normalizedName": "乐至",
    "normalizedValue": "四川资阳乐至",
    "normalizedSearchText": "四川资阳乐至乐至四川资阳"
  },
  {
    "code": "512001",
    "name": "市辖区",
    "detail": "四川省 / 资阳市",
    "value": "四川省 / 资阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "四川资阳辖",
    "normalizedSearchText": "四川资阳辖辖四川资阳"
  },
  {
    "code": "513200",
    "name": "阿坝藏族羌族自治州",
    "detail": "四川省",
    "value": "四川省 / 阿坝藏族羌族自治州",
    "rank": 2,
    "normalizedName": "阿坝藏族羌族",
    "normalizedValue": "四川阿坝藏族羌族",
    "normalizedSearchText": "四川阿坝藏族羌族阿坝藏族羌族四川"
  },
  {
    "code": "513201",
    "name": "马尔康市",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 马尔康市",
    "rank": 3,
    "normalizedName": "马尔康",
    "normalizedValue": "四川阿坝藏族羌族马尔康",
    "normalizedSearchText": "四川阿坝藏族羌族马尔康马尔康四川阿坝藏族羌族"
  },
  {
    "code": "513221",
    "name": "汶川县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 汶川县",
    "rank": 3,
    "normalizedName": "汶川",
    "normalizedValue": "四川阿坝藏族羌族汶川",
    "normalizedSearchText": "四川阿坝藏族羌族汶川汶川四川阿坝藏族羌族"
  },
  {
    "code": "513222",
    "name": "理县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 理县",
    "rank": 3,
    "normalizedName": "理",
    "normalizedValue": "四川阿坝藏族羌族理",
    "normalizedSearchText": "四川阿坝藏族羌族理理四川阿坝藏族羌族"
  },
  {
    "code": "513223",
    "name": "茂县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 茂县",
    "rank": 3,
    "normalizedName": "茂",
    "normalizedValue": "四川阿坝藏族羌族茂",
    "normalizedSearchText": "四川阿坝藏族羌族茂茂四川阿坝藏族羌族"
  },
  {
    "code": "513224",
    "name": "松潘县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 松潘县",
    "rank": 3,
    "normalizedName": "松潘",
    "normalizedValue": "四川阿坝藏族羌族松潘",
    "normalizedSearchText": "四川阿坝藏族羌族松潘松潘四川阿坝藏族羌族"
  },
  {
    "code": "513225",
    "name": "九寨沟县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 九寨沟县",
    "rank": 3,
    "normalizedName": "九寨沟",
    "normalizedValue": "四川阿坝藏族羌族九寨沟",
    "normalizedSearchText": "四川阿坝藏族羌族九寨沟九寨沟四川阿坝藏族羌族"
  },
  {
    "code": "513226",
    "name": "金川县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 金川县",
    "rank": 3,
    "normalizedName": "金川",
    "normalizedValue": "四川阿坝藏族羌族金川",
    "normalizedSearchText": "四川阿坝藏族羌族金川金川四川阿坝藏族羌族"
  },
  {
    "code": "513227",
    "name": "小金县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 小金县",
    "rank": 3,
    "normalizedName": "小金",
    "normalizedValue": "四川阿坝藏族羌族小金",
    "normalizedSearchText": "四川阿坝藏族羌族小金小金四川阿坝藏族羌族"
  },
  {
    "code": "513228",
    "name": "黑水县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 黑水县",
    "rank": 3,
    "normalizedName": "黑水",
    "normalizedValue": "四川阿坝藏族羌族黑水",
    "normalizedSearchText": "四川阿坝藏族羌族黑水黑水四川阿坝藏族羌族"
  },
  {
    "code": "513230",
    "name": "壤塘县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 壤塘县",
    "rank": 3,
    "normalizedName": "壤塘",
    "normalizedValue": "四川阿坝藏族羌族壤塘",
    "normalizedSearchText": "四川阿坝藏族羌族壤塘壤塘四川阿坝藏族羌族"
  },
  {
    "code": "513231",
    "name": "阿坝县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 阿坝县",
    "rank": 3,
    "normalizedName": "阿坝",
    "normalizedValue": "四川阿坝藏族羌族阿坝",
    "normalizedSearchText": "四川阿坝藏族羌族阿坝阿坝四川阿坝藏族羌族"
  },
  {
    "code": "513232",
    "name": "若尔盖县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 若尔盖县",
    "rank": 3,
    "normalizedName": "若尔盖",
    "normalizedValue": "四川阿坝藏族羌族若尔盖",
    "normalizedSearchText": "四川阿坝藏族羌族若尔盖若尔盖四川阿坝藏族羌族"
  },
  {
    "code": "513233",
    "name": "红原县",
    "detail": "四川省 / 阿坝藏族羌族自治州",
    "value": "四川省 / 阿坝藏族羌族自治州 / 红原县",
    "rank": 3,
    "normalizedName": "红原",
    "normalizedValue": "四川阿坝藏族羌族红原",
    "normalizedSearchText": "四川阿坝藏族羌族红原红原四川阿坝藏族羌族"
  },
  {
    "code": "513300",
    "name": "甘孜藏族自治州",
    "detail": "四川省",
    "value": "四川省 / 甘孜藏族自治州",
    "rank": 2,
    "normalizedName": "甘孜藏族",
    "normalizedValue": "四川甘孜藏族",
    "normalizedSearchText": "四川甘孜藏族甘孜藏族四川"
  },
  {
    "code": "513301",
    "name": "康定市",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 康定市",
    "rank": 3,
    "normalizedName": "康定",
    "normalizedValue": "四川甘孜藏族康定",
    "normalizedSearchText": "四川甘孜藏族康定康定四川甘孜藏族"
  },
  {
    "code": "513322",
    "name": "泸定县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 泸定县",
    "rank": 3,
    "normalizedName": "泸定",
    "normalizedValue": "四川甘孜藏族泸定",
    "normalizedSearchText": "四川甘孜藏族泸定泸定四川甘孜藏族"
  },
  {
    "code": "513323",
    "name": "丹巴县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 丹巴县",
    "rank": 3,
    "normalizedName": "丹巴",
    "normalizedValue": "四川甘孜藏族丹巴",
    "normalizedSearchText": "四川甘孜藏族丹巴丹巴四川甘孜藏族"
  },
  {
    "code": "513324",
    "name": "九龙县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 九龙县",
    "rank": 3,
    "normalizedName": "九龙",
    "normalizedValue": "四川甘孜藏族九龙",
    "normalizedSearchText": "四川甘孜藏族九龙九龙四川甘孜藏族"
  },
  {
    "code": "513325",
    "name": "雅江县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 雅江县",
    "rank": 3,
    "normalizedName": "雅江",
    "normalizedValue": "四川甘孜藏族雅江",
    "normalizedSearchText": "四川甘孜藏族雅江雅江四川甘孜藏族"
  },
  {
    "code": "513326",
    "name": "道孚县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 道孚县",
    "rank": 3,
    "normalizedName": "道孚",
    "normalizedValue": "四川甘孜藏族道孚",
    "normalizedSearchText": "四川甘孜藏族道孚道孚四川甘孜藏族"
  },
  {
    "code": "513327",
    "name": "炉霍县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 炉霍县",
    "rank": 3,
    "normalizedName": "炉霍",
    "normalizedValue": "四川甘孜藏族炉霍",
    "normalizedSearchText": "四川甘孜藏族炉霍炉霍四川甘孜藏族"
  },
  {
    "code": "513328",
    "name": "甘孜县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 甘孜县",
    "rank": 3,
    "normalizedName": "甘孜",
    "normalizedValue": "四川甘孜藏族甘孜",
    "normalizedSearchText": "四川甘孜藏族甘孜甘孜四川甘孜藏族"
  },
  {
    "code": "513329",
    "name": "新龙县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 新龙县",
    "rank": 3,
    "normalizedName": "新龙",
    "normalizedValue": "四川甘孜藏族新龙",
    "normalizedSearchText": "四川甘孜藏族新龙新龙四川甘孜藏族"
  },
  {
    "code": "513330",
    "name": "德格县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 德格县",
    "rank": 3,
    "normalizedName": "德格",
    "normalizedValue": "四川甘孜藏族德格",
    "normalizedSearchText": "四川甘孜藏族德格德格四川甘孜藏族"
  },
  {
    "code": "513331",
    "name": "白玉县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 白玉县",
    "rank": 3,
    "normalizedName": "白玉",
    "normalizedValue": "四川甘孜藏族白玉",
    "normalizedSearchText": "四川甘孜藏族白玉白玉四川甘孜藏族"
  },
  {
    "code": "513332",
    "name": "石渠县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 石渠县",
    "rank": 3,
    "normalizedName": "石渠",
    "normalizedValue": "四川甘孜藏族石渠",
    "normalizedSearchText": "四川甘孜藏族石渠石渠四川甘孜藏族"
  },
  {
    "code": "513333",
    "name": "色达县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 色达县",
    "rank": 3,
    "normalizedName": "色达",
    "normalizedValue": "四川甘孜藏族色达",
    "normalizedSearchText": "四川甘孜藏族色达色达四川甘孜藏族"
  },
  {
    "code": "513334",
    "name": "理塘县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 理塘县",
    "rank": 3,
    "normalizedName": "理塘",
    "normalizedValue": "四川甘孜藏族理塘",
    "normalizedSearchText": "四川甘孜藏族理塘理塘四川甘孜藏族"
  },
  {
    "code": "513335",
    "name": "巴塘县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 巴塘县",
    "rank": 3,
    "normalizedName": "巴塘",
    "normalizedValue": "四川甘孜藏族巴塘",
    "normalizedSearchText": "四川甘孜藏族巴塘巴塘四川甘孜藏族"
  },
  {
    "code": "513336",
    "name": "乡城县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 乡城县",
    "rank": 3,
    "normalizedName": "城",
    "normalizedValue": "四川甘孜藏族城",
    "normalizedSearchText": "四川甘孜藏族城城四川甘孜藏族"
  },
  {
    "code": "513337",
    "name": "稻城县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 稻城县",
    "rank": 3,
    "normalizedName": "稻城",
    "normalizedValue": "四川甘孜藏族稻城",
    "normalizedSearchText": "四川甘孜藏族稻城稻城四川甘孜藏族"
  },
  {
    "code": "513338",
    "name": "得荣县",
    "detail": "四川省 / 甘孜藏族自治州",
    "value": "四川省 / 甘孜藏族自治州 / 得荣县",
    "rank": 3,
    "normalizedName": "得荣",
    "normalizedValue": "四川甘孜藏族得荣",
    "normalizedSearchText": "四川甘孜藏族得荣得荣四川甘孜藏族"
  },
  {
    "code": "513400",
    "name": "凉山彝族自治州",
    "detail": "四川省",
    "value": "四川省 / 凉山彝族自治州",
    "rank": 2,
    "normalizedName": "凉山彝族",
    "normalizedValue": "四川凉山彝族",
    "normalizedSearchText": "四川凉山彝族凉山彝族四川"
  },
  {
    "code": "513401",
    "name": "西昌市",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 西昌市",
    "rank": 3,
    "normalizedName": "西昌",
    "normalizedValue": "四川凉山彝族西昌",
    "normalizedSearchText": "四川凉山彝族西昌西昌四川凉山彝族"
  },
  {
    "code": "513422",
    "name": "木里藏族自治县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 木里藏族自治县",
    "rank": 3,
    "normalizedName": "木里藏族自治",
    "normalizedValue": "四川凉山彝族木里藏族自治",
    "normalizedSearchText": "四川凉山彝族木里藏族自治木里藏族自治四川凉山彝族"
  },
  {
    "code": "513423",
    "name": "盐源县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 盐源县",
    "rank": 3,
    "normalizedName": "盐源",
    "normalizedValue": "四川凉山彝族盐源",
    "normalizedSearchText": "四川凉山彝族盐源盐源四川凉山彝族"
  },
  {
    "code": "513424",
    "name": "德昌县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 德昌县",
    "rank": 3,
    "normalizedName": "德昌",
    "normalizedValue": "四川凉山彝族德昌",
    "normalizedSearchText": "四川凉山彝族德昌德昌四川凉山彝族"
  },
  {
    "code": "513425",
    "name": "会理县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 会理县",
    "rank": 3,
    "normalizedName": "会理",
    "normalizedValue": "四川凉山彝族会理",
    "normalizedSearchText": "四川凉山彝族会理会理四川凉山彝族"
  },
  {
    "code": "513426",
    "name": "会东县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 会东县",
    "rank": 3,
    "normalizedName": "会东",
    "normalizedValue": "四川凉山彝族会东",
    "normalizedSearchText": "四川凉山彝族会东会东四川凉山彝族"
  },
  {
    "code": "513427",
    "name": "宁南县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 宁南县",
    "rank": 3,
    "normalizedName": "宁南",
    "normalizedValue": "四川凉山彝族宁南",
    "normalizedSearchText": "四川凉山彝族宁南宁南四川凉山彝族"
  },
  {
    "code": "513428",
    "name": "普格县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 普格县",
    "rank": 3,
    "normalizedName": "普格",
    "normalizedValue": "四川凉山彝族普格",
    "normalizedSearchText": "四川凉山彝族普格普格四川凉山彝族"
  },
  {
    "code": "513429",
    "name": "布拖县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 布拖县",
    "rank": 3,
    "normalizedName": "布拖",
    "normalizedValue": "四川凉山彝族布拖",
    "normalizedSearchText": "四川凉山彝族布拖布拖四川凉山彝族"
  },
  {
    "code": "513430",
    "name": "金阳县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 金阳县",
    "rank": 3,
    "normalizedName": "金阳",
    "normalizedValue": "四川凉山彝族金阳",
    "normalizedSearchText": "四川凉山彝族金阳金阳四川凉山彝族"
  },
  {
    "code": "513431",
    "name": "昭觉县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 昭觉县",
    "rank": 3,
    "normalizedName": "昭觉",
    "normalizedValue": "四川凉山彝族昭觉",
    "normalizedSearchText": "四川凉山彝族昭觉昭觉四川凉山彝族"
  },
  {
    "code": "513432",
    "name": "喜德县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 喜德县",
    "rank": 3,
    "normalizedName": "喜德",
    "normalizedValue": "四川凉山彝族喜德",
    "normalizedSearchText": "四川凉山彝族喜德喜德四川凉山彝族"
  },
  {
    "code": "513433",
    "name": "冕宁县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 冕宁县",
    "rank": 3,
    "normalizedName": "冕宁",
    "normalizedValue": "四川凉山彝族冕宁",
    "normalizedSearchText": "四川凉山彝族冕宁冕宁四川凉山彝族"
  },
  {
    "code": "513434",
    "name": "越西县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 越西县",
    "rank": 3,
    "normalizedName": "越西",
    "normalizedValue": "四川凉山彝族越西",
    "normalizedSearchText": "四川凉山彝族越西越西四川凉山彝族"
  },
  {
    "code": "513435",
    "name": "甘洛县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 甘洛县",
    "rank": 3,
    "normalizedName": "甘洛",
    "normalizedValue": "四川凉山彝族甘洛",
    "normalizedSearchText": "四川凉山彝族甘洛甘洛四川凉山彝族"
  },
  {
    "code": "513436",
    "name": "美姑县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 美姑县",
    "rank": 3,
    "normalizedName": "美姑",
    "normalizedValue": "四川凉山彝族美姑",
    "normalizedSearchText": "四川凉山彝族美姑美姑四川凉山彝族"
  },
  {
    "code": "513437",
    "name": "雷波县",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 雷波县",
    "rank": 3,
    "normalizedName": "雷波",
    "normalizedValue": "四川凉山彝族雷波",
    "normalizedSearchText": "四川凉山彝族雷波雷波四川凉山彝族"
  },
  {
    "code": "513402",
    "name": "会理市",
    "detail": "四川省 / 凉山彝族自治州",
    "value": "四川省 / 凉山彝族自治州 / 会理市",
    "rank": 3,
    "normalizedName": "会理",
    "normalizedValue": "四川凉山彝族会理",
    "normalizedSearchText": "四川凉山彝族会理会理四川凉山彝族"
  },
  {
    "code": "520000",
    "name": "贵州省",
    "detail": "?????",
    "value": "贵州省",
    "rank": 1,
    "normalizedName": "贵州",
    "normalizedValue": "贵州",
    "normalizedSearchText": "贵州贵州"
  },
  {
    "code": "520100",
    "name": "贵阳市",
    "detail": "贵州省",
    "value": "贵州省 / 贵阳市",
    "rank": 2,
    "normalizedName": "贵阳",
    "normalizedValue": "贵州贵阳",
    "normalizedSearchText": "贵州贵阳贵阳贵州"
  },
  {
    "code": "520102",
    "name": "南明区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 南明区",
    "rank": 3,
    "normalizedName": "南明",
    "normalizedValue": "贵州贵阳南明",
    "normalizedSearchText": "贵州贵阳南明南明贵州贵阳"
  },
  {
    "code": "520103",
    "name": "云岩区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 云岩区",
    "rank": 3,
    "normalizedName": "云岩",
    "normalizedValue": "贵州贵阳云岩",
    "normalizedSearchText": "贵州贵阳云岩云岩贵州贵阳"
  },
  {
    "code": "520111",
    "name": "花溪区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 花溪区",
    "rank": 3,
    "normalizedName": "花溪",
    "normalizedValue": "贵州贵阳花溪",
    "normalizedSearchText": "贵州贵阳花溪花溪贵州贵阳"
  },
  {
    "code": "520112",
    "name": "乌当区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 乌当区",
    "rank": 3,
    "normalizedName": "乌当",
    "normalizedValue": "贵州贵阳乌当",
    "normalizedSearchText": "贵州贵阳乌当乌当贵州贵阳"
  },
  {
    "code": "520113",
    "name": "白云区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 白云区",
    "rank": 3,
    "normalizedName": "白云",
    "normalizedValue": "贵州贵阳白云",
    "normalizedSearchText": "贵州贵阳白云白云贵州贵阳"
  },
  {
    "code": "520115",
    "name": "观山湖区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 观山湖区",
    "rank": 3,
    "normalizedName": "观山湖",
    "normalizedValue": "贵州贵阳观山湖",
    "normalizedSearchText": "贵州贵阳观山湖观山湖贵州贵阳"
  },
  {
    "code": "520121",
    "name": "开阳县",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 开阳县",
    "rank": 3,
    "normalizedName": "开阳",
    "normalizedValue": "贵州贵阳开阳",
    "normalizedSearchText": "贵州贵阳开阳开阳贵州贵阳"
  },
  {
    "code": "520122",
    "name": "息烽县",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 息烽县",
    "rank": 3,
    "normalizedName": "息烽",
    "normalizedValue": "贵州贵阳息烽",
    "normalizedSearchText": "贵州贵阳息烽息烽贵州贵阳"
  },
  {
    "code": "520123",
    "name": "修文县",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 修文县",
    "rank": 3,
    "normalizedName": "修文",
    "normalizedValue": "贵州贵阳修文",
    "normalizedSearchText": "贵州贵阳修文修文贵州贵阳"
  },
  {
    "code": "520181",
    "name": "清镇市",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 清镇市",
    "rank": 3,
    "normalizedName": "清",
    "normalizedValue": "贵州贵阳清",
    "normalizedSearchText": "贵州贵阳清清贵州贵阳"
  },
  {
    "code": "520101",
    "name": "市辖区",
    "detail": "贵州省 / 贵阳市",
    "value": "贵州省 / 贵阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "贵州贵阳辖",
    "normalizedSearchText": "贵州贵阳辖辖贵州贵阳"
  },
  {
    "code": "520200",
    "name": "六盘水市",
    "detail": "贵州省",
    "value": "贵州省 / 六盘水市",
    "rank": 2,
    "normalizedName": "六盘水",
    "normalizedValue": "贵州六盘水",
    "normalizedSearchText": "贵州六盘水六盘水贵州"
  },
  {
    "code": "520201",
    "name": "钟山区",
    "detail": "贵州省 / 六盘水市",
    "value": "贵州省 / 六盘水市 / 钟山区",
    "rank": 3,
    "normalizedName": "钟山",
    "normalizedValue": "贵州六盘水钟山",
    "normalizedSearchText": "贵州六盘水钟山钟山贵州六盘水"
  },
  {
    "code": "520203",
    "name": "六枝特区",
    "detail": "贵州省 / 六盘水市",
    "value": "贵州省 / 六盘水市 / 六枝特区",
    "rank": 3,
    "normalizedName": "六枝特",
    "normalizedValue": "贵州六盘水六枝特",
    "normalizedSearchText": "贵州六盘水六枝特六枝特贵州六盘水"
  },
  {
    "code": "520204",
    "name": "水城区",
    "detail": "贵州省 / 六盘水市",
    "value": "贵州省 / 六盘水市 / 水城区",
    "rank": 3,
    "normalizedName": "水城",
    "normalizedValue": "贵州六盘水水城",
    "normalizedSearchText": "贵州六盘水水城水城贵州六盘水"
  },
  {
    "code": "520281",
    "name": "盘州市",
    "detail": "贵州省 / 六盘水市",
    "value": "贵州省 / 六盘水市 / 盘州市",
    "rank": 3,
    "normalizedName": "盘州",
    "normalizedValue": "贵州六盘水盘州",
    "normalizedSearchText": "贵州六盘水盘州盘州贵州六盘水"
  },
  {
    "code": "520300",
    "name": "遵义市",
    "detail": "贵州省",
    "value": "贵州省 / 遵义市",
    "rank": 2,
    "normalizedName": "遵义",
    "normalizedValue": "贵州遵义",
    "normalizedSearchText": "贵州遵义遵义贵州"
  },
  {
    "code": "520302",
    "name": "红花岗区",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 红花岗区",
    "rank": 3,
    "normalizedName": "红花岗",
    "normalizedValue": "贵州遵义红花岗",
    "normalizedSearchText": "贵州遵义红花岗红花岗贵州遵义"
  },
  {
    "code": "520303",
    "name": "汇川区",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 汇川区",
    "rank": 3,
    "normalizedName": "汇川",
    "normalizedValue": "贵州遵义汇川",
    "normalizedSearchText": "贵州遵义汇川汇川贵州遵义"
  },
  {
    "code": "520304",
    "name": "播州区",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 播州区",
    "rank": 3,
    "normalizedName": "播州",
    "normalizedValue": "贵州遵义播州",
    "normalizedSearchText": "贵州遵义播州播州贵州遵义"
  },
  {
    "code": "520322",
    "name": "桐梓县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 桐梓县",
    "rank": 3,
    "normalizedName": "桐梓",
    "normalizedValue": "贵州遵义桐梓",
    "normalizedSearchText": "贵州遵义桐梓桐梓贵州遵义"
  },
  {
    "code": "520323",
    "name": "绥阳县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 绥阳县",
    "rank": 3,
    "normalizedName": "绥阳",
    "normalizedValue": "贵州遵义绥阳",
    "normalizedSearchText": "贵州遵义绥阳绥阳贵州遵义"
  },
  {
    "code": "520324",
    "name": "正安县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 正安县",
    "rank": 3,
    "normalizedName": "正安",
    "normalizedValue": "贵州遵义正安",
    "normalizedSearchText": "贵州遵义正安正安贵州遵义"
  },
  {
    "code": "520325",
    "name": "道真仡佬族苗族自治县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 道真仡佬族苗族自治县",
    "rank": 3,
    "normalizedName": "道真仡佬族苗族自治",
    "normalizedValue": "贵州遵义道真仡佬族苗族自治",
    "normalizedSearchText": "贵州遵义道真仡佬族苗族自治道真仡佬族苗族自治贵州遵义"
  },
  {
    "code": "520326",
    "name": "务川仡佬族苗族自治县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 务川仡佬族苗族自治县",
    "rank": 3,
    "normalizedName": "务川仡佬族苗族自治",
    "normalizedValue": "贵州遵义务川仡佬族苗族自治",
    "normalizedSearchText": "贵州遵义务川仡佬族苗族自治务川仡佬族苗族自治贵州遵义"
  },
  {
    "code": "520327",
    "name": "凤冈县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 凤冈县",
    "rank": 3,
    "normalizedName": "凤冈",
    "normalizedValue": "贵州遵义凤冈",
    "normalizedSearchText": "贵州遵义凤冈凤冈贵州遵义"
  },
  {
    "code": "520328",
    "name": "湄潭县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 湄潭县",
    "rank": 3,
    "normalizedName": "湄潭",
    "normalizedValue": "贵州遵义湄潭",
    "normalizedSearchText": "贵州遵义湄潭湄潭贵州遵义"
  },
  {
    "code": "520329",
    "name": "余庆县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 余庆县",
    "rank": 3,
    "normalizedName": "余庆",
    "normalizedValue": "贵州遵义余庆",
    "normalizedSearchText": "贵州遵义余庆余庆贵州遵义"
  },
  {
    "code": "520330",
    "name": "习水县",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 习水县",
    "rank": 3,
    "normalizedName": "习水",
    "normalizedValue": "贵州遵义习水",
    "normalizedSearchText": "贵州遵义习水习水贵州遵义"
  },
  {
    "code": "520381",
    "name": "赤水市",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 赤水市",
    "rank": 3,
    "normalizedName": "赤水",
    "normalizedValue": "贵州遵义赤水",
    "normalizedSearchText": "贵州遵义赤水赤水贵州遵义"
  },
  {
    "code": "520382",
    "name": "仁怀市",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 仁怀市",
    "rank": 3,
    "normalizedName": "仁怀",
    "normalizedValue": "贵州遵义仁怀",
    "normalizedSearchText": "贵州遵义仁怀仁怀贵州遵义"
  },
  {
    "code": "520301",
    "name": "市辖区",
    "detail": "贵州省 / 遵义市",
    "value": "贵州省 / 遵义市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "贵州遵义辖",
    "normalizedSearchText": "贵州遵义辖辖贵州遵义"
  },
  {
    "code": "520400",
    "name": "安顺市",
    "detail": "贵州省",
    "value": "贵州省 / 安顺市",
    "rank": 2,
    "normalizedName": "安顺",
    "normalizedValue": "贵州安顺",
    "normalizedSearchText": "贵州安顺安顺贵州"
  },
  {
    "code": "520402",
    "name": "西秀区",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 西秀区",
    "rank": 3,
    "normalizedName": "西秀",
    "normalizedValue": "贵州安顺西秀",
    "normalizedSearchText": "贵州安顺西秀西秀贵州安顺"
  },
  {
    "code": "520403",
    "name": "平坝区",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 平坝区",
    "rank": 3,
    "normalizedName": "平坝",
    "normalizedValue": "贵州安顺平坝",
    "normalizedSearchText": "贵州安顺平坝平坝贵州安顺"
  },
  {
    "code": "520422",
    "name": "普定县",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 普定县",
    "rank": 3,
    "normalizedName": "普定",
    "normalizedValue": "贵州安顺普定",
    "normalizedSearchText": "贵州安顺普定普定贵州安顺"
  },
  {
    "code": "520423",
    "name": "镇宁布依族苗族自治县",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 镇宁布依族苗族自治县",
    "rank": 3,
    "normalizedName": "宁布依族苗族自治",
    "normalizedValue": "贵州安顺宁布依族苗族自治",
    "normalizedSearchText": "贵州安顺宁布依族苗族自治宁布依族苗族自治贵州安顺"
  },
  {
    "code": "520424",
    "name": "关岭布依族苗族自治县",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 关岭布依族苗族自治县",
    "rank": 3,
    "normalizedName": "关岭布依族苗族自治",
    "normalizedValue": "贵州安顺关岭布依族苗族自治",
    "normalizedSearchText": "贵州安顺关岭布依族苗族自治关岭布依族苗族自治贵州安顺"
  },
  {
    "code": "520425",
    "name": "紫云苗族布依族自治县",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 紫云苗族布依族自治县",
    "rank": 3,
    "normalizedName": "紫云苗族布依族自治",
    "normalizedValue": "贵州安顺紫云苗族布依族自治",
    "normalizedSearchText": "贵州安顺紫云苗族布依族自治紫云苗族布依族自治贵州安顺"
  },
  {
    "code": "520401",
    "name": "市辖区",
    "detail": "贵州省 / 安顺市",
    "value": "贵州省 / 安顺市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "贵州安顺辖",
    "normalizedSearchText": "贵州安顺辖辖贵州安顺"
  },
  {
    "code": "520500",
    "name": "毕节市",
    "detail": "贵州省",
    "value": "贵州省 / 毕节市",
    "rank": 2,
    "normalizedName": "毕节",
    "normalizedValue": "贵州毕节",
    "normalizedSearchText": "贵州毕节毕节贵州"
  },
  {
    "code": "520502",
    "name": "七星关区",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 七星关区",
    "rank": 3,
    "normalizedName": "七星关",
    "normalizedValue": "贵州毕节七星关",
    "normalizedSearchText": "贵州毕节七星关七星关贵州毕节"
  },
  {
    "code": "520521",
    "name": "大方县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 大方县",
    "rank": 3,
    "normalizedName": "大方",
    "normalizedValue": "贵州毕节大方",
    "normalizedSearchText": "贵州毕节大方大方贵州毕节"
  },
  {
    "code": "520522",
    "name": "黔西县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 黔西县",
    "rank": 3,
    "normalizedName": "黔西",
    "normalizedValue": "贵州毕节黔西",
    "normalizedSearchText": "贵州毕节黔西黔西贵州毕节"
  },
  {
    "code": "520523",
    "name": "金沙县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 金沙县",
    "rank": 3,
    "normalizedName": "金沙",
    "normalizedValue": "贵州毕节金沙",
    "normalizedSearchText": "贵州毕节金沙金沙贵州毕节"
  },
  {
    "code": "520524",
    "name": "织金县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 织金县",
    "rank": 3,
    "normalizedName": "织金",
    "normalizedValue": "贵州毕节织金",
    "normalizedSearchText": "贵州毕节织金织金贵州毕节"
  },
  {
    "code": "520525",
    "name": "纳雍县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 纳雍县",
    "rank": 3,
    "normalizedName": "纳雍",
    "normalizedValue": "贵州毕节纳雍",
    "normalizedSearchText": "贵州毕节纳雍纳雍贵州毕节"
  },
  {
    "code": "520526",
    "name": "威宁彝族回族苗族自治县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 威宁彝族回族苗族自治县",
    "rank": 3,
    "normalizedName": "威宁彝族回族苗族自治",
    "normalizedValue": "贵州毕节威宁彝族回族苗族自治",
    "normalizedSearchText": "贵州毕节威宁彝族回族苗族自治威宁彝族回族苗族自治贵州毕节"
  },
  {
    "code": "520527",
    "name": "赫章县",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 赫章县",
    "rank": 3,
    "normalizedName": "赫章",
    "normalizedValue": "贵州毕节赫章",
    "normalizedSearchText": "贵州毕节赫章赫章贵州毕节"
  },
  {
    "code": "520501",
    "name": "市辖区",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "贵州毕节辖",
    "normalizedSearchText": "贵州毕节辖辖贵州毕节"
  },
  {
    "code": "520581",
    "name": "黔西市",
    "detail": "贵州省 / 毕节市",
    "value": "贵州省 / 毕节市 / 黔西市",
    "rank": 3,
    "normalizedName": "黔西",
    "normalizedValue": "贵州毕节黔西",
    "normalizedSearchText": "贵州毕节黔西黔西贵州毕节"
  },
  {
    "code": "520600",
    "name": "铜仁市",
    "detail": "贵州省",
    "value": "贵州省 / 铜仁市",
    "rank": 2,
    "normalizedName": "铜仁",
    "normalizedValue": "贵州铜仁",
    "normalizedSearchText": "贵州铜仁铜仁贵州"
  },
  {
    "code": "520602",
    "name": "碧江区",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 碧江区",
    "rank": 3,
    "normalizedName": "碧江",
    "normalizedValue": "贵州铜仁碧江",
    "normalizedSearchText": "贵州铜仁碧江碧江贵州铜仁"
  },
  {
    "code": "520603",
    "name": "万山区",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 万山区",
    "rank": 3,
    "normalizedName": "万山",
    "normalizedValue": "贵州铜仁万山",
    "normalizedSearchText": "贵州铜仁万山万山贵州铜仁"
  },
  {
    "code": "520621",
    "name": "江口县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 江口县",
    "rank": 3,
    "normalizedName": "江口",
    "normalizedValue": "贵州铜仁江口",
    "normalizedSearchText": "贵州铜仁江口江口贵州铜仁"
  },
  {
    "code": "520622",
    "name": "玉屏侗族自治县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 玉屏侗族自治县",
    "rank": 3,
    "normalizedName": "玉屏侗族自治",
    "normalizedValue": "贵州铜仁玉屏侗族自治",
    "normalizedSearchText": "贵州铜仁玉屏侗族自治玉屏侗族自治贵州铜仁"
  },
  {
    "code": "520623",
    "name": "石阡县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 石阡县",
    "rank": 3,
    "normalizedName": "石阡",
    "normalizedValue": "贵州铜仁石阡",
    "normalizedSearchText": "贵州铜仁石阡石阡贵州铜仁"
  },
  {
    "code": "520624",
    "name": "思南县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 思南县",
    "rank": 3,
    "normalizedName": "思南",
    "normalizedValue": "贵州铜仁思南",
    "normalizedSearchText": "贵州铜仁思南思南贵州铜仁"
  },
  {
    "code": "520625",
    "name": "印江土家族苗族自治县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 印江土家族苗族自治县",
    "rank": 3,
    "normalizedName": "印江土家族苗族自治",
    "normalizedValue": "贵州铜仁印江土家族苗族自治",
    "normalizedSearchText": "贵州铜仁印江土家族苗族自治印江土家族苗族自治贵州铜仁"
  },
  {
    "code": "520626",
    "name": "德江县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 德江县",
    "rank": 3,
    "normalizedName": "德江",
    "normalizedValue": "贵州铜仁德江",
    "normalizedSearchText": "贵州铜仁德江德江贵州铜仁"
  },
  {
    "code": "520627",
    "name": "沿河土家族自治县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 沿河土家族自治县",
    "rank": 3,
    "normalizedName": "沿河土家族自治",
    "normalizedValue": "贵州铜仁沿河土家族自治",
    "normalizedSearchText": "贵州铜仁沿河土家族自治沿河土家族自治贵州铜仁"
  },
  {
    "code": "520628",
    "name": "松桃苗族自治县",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 松桃苗族自治县",
    "rank": 3,
    "normalizedName": "松桃苗族自治",
    "normalizedValue": "贵州铜仁松桃苗族自治",
    "normalizedSearchText": "贵州铜仁松桃苗族自治松桃苗族自治贵州铜仁"
  },
  {
    "code": "520601",
    "name": "市辖区",
    "detail": "贵州省 / 铜仁市",
    "value": "贵州省 / 铜仁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "贵州铜仁辖",
    "normalizedSearchText": "贵州铜仁辖辖贵州铜仁"
  },
  {
    "code": "522300",
    "name": "黔西南布依族苗族自治州",
    "detail": "贵州省",
    "value": "贵州省 / 黔西南布依族苗族自治州",
    "rank": 2,
    "normalizedName": "黔西南布依族苗族",
    "normalizedValue": "贵州黔西南布依族苗族",
    "normalizedSearchText": "贵州黔西南布依族苗族黔西南布依族苗族贵州"
  },
  {
    "code": "522301",
    "name": "兴义市",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 兴义市",
    "rank": 3,
    "normalizedName": "兴义",
    "normalizedValue": "贵州黔西南布依族苗族兴义",
    "normalizedSearchText": "贵州黔西南布依族苗族兴义兴义贵州黔西南布依族苗族"
  },
  {
    "code": "522302",
    "name": "兴仁市",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 兴仁市",
    "rank": 3,
    "normalizedName": "兴仁",
    "normalizedValue": "贵州黔西南布依族苗族兴仁",
    "normalizedSearchText": "贵州黔西南布依族苗族兴仁兴仁贵州黔西南布依族苗族"
  },
  {
    "code": "522323",
    "name": "普安县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 普安县",
    "rank": 3,
    "normalizedName": "普安",
    "normalizedValue": "贵州黔西南布依族苗族普安",
    "normalizedSearchText": "贵州黔西南布依族苗族普安普安贵州黔西南布依族苗族"
  },
  {
    "code": "522324",
    "name": "晴隆县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 晴隆县",
    "rank": 3,
    "normalizedName": "晴隆",
    "normalizedValue": "贵州黔西南布依族苗族晴隆",
    "normalizedSearchText": "贵州黔西南布依族苗族晴隆晴隆贵州黔西南布依族苗族"
  },
  {
    "code": "522325",
    "name": "贞丰县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 贞丰县",
    "rank": 3,
    "normalizedName": "贞丰",
    "normalizedValue": "贵州黔西南布依族苗族贞丰",
    "normalizedSearchText": "贵州黔西南布依族苗族贞丰贞丰贵州黔西南布依族苗族"
  },
  {
    "code": "522326",
    "name": "望谟县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 望谟县",
    "rank": 3,
    "normalizedName": "望谟",
    "normalizedValue": "贵州黔西南布依族苗族望谟",
    "normalizedSearchText": "贵州黔西南布依族苗族望谟望谟贵州黔西南布依族苗族"
  },
  {
    "code": "522327",
    "name": "册亨县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 册亨县",
    "rank": 3,
    "normalizedName": "册亨",
    "normalizedValue": "贵州黔西南布依族苗族册亨",
    "normalizedSearchText": "贵州黔西南布依族苗族册亨册亨贵州黔西南布依族苗族"
  },
  {
    "code": "522328",
    "name": "安龙县",
    "detail": "贵州省 / 黔西南布依族苗族自治州",
    "value": "贵州省 / 黔西南布依族苗族自治州 / 安龙县",
    "rank": 3,
    "normalizedName": "安龙",
    "normalizedValue": "贵州黔西南布依族苗族安龙",
    "normalizedSearchText": "贵州黔西南布依族苗族安龙安龙贵州黔西南布依族苗族"
  },
  {
    "code": "522600",
    "name": "黔东南苗族侗族自治州",
    "detail": "贵州省",
    "value": "贵州省 / 黔东南苗族侗族自治州",
    "rank": 2,
    "normalizedName": "黔东南苗族侗族",
    "normalizedValue": "贵州黔东南苗族侗族",
    "normalizedSearchText": "贵州黔东南苗族侗族黔东南苗族侗族贵州"
  },
  {
    "code": "522601",
    "name": "凯里市",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 凯里市",
    "rank": 3,
    "normalizedName": "凯里",
    "normalizedValue": "贵州黔东南苗族侗族凯里",
    "normalizedSearchText": "贵州黔东南苗族侗族凯里凯里贵州黔东南苗族侗族"
  },
  {
    "code": "522622",
    "name": "黄平县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 黄平县",
    "rank": 3,
    "normalizedName": "黄平",
    "normalizedValue": "贵州黔东南苗族侗族黄平",
    "normalizedSearchText": "贵州黔东南苗族侗族黄平黄平贵州黔东南苗族侗族"
  },
  {
    "code": "522623",
    "name": "施秉县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 施秉县",
    "rank": 3,
    "normalizedName": "施秉",
    "normalizedValue": "贵州黔东南苗族侗族施秉",
    "normalizedSearchText": "贵州黔东南苗族侗族施秉施秉贵州黔东南苗族侗族"
  },
  {
    "code": "522624",
    "name": "三穗县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 三穗县",
    "rank": 3,
    "normalizedName": "三穗",
    "normalizedValue": "贵州黔东南苗族侗族三穗",
    "normalizedSearchText": "贵州黔东南苗族侗族三穗三穗贵州黔东南苗族侗族"
  },
  {
    "code": "522625",
    "name": "镇远县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 镇远县",
    "rank": 3,
    "normalizedName": "远",
    "normalizedValue": "贵州黔东南苗族侗族远",
    "normalizedSearchText": "贵州黔东南苗族侗族远远贵州黔东南苗族侗族"
  },
  {
    "code": "522626",
    "name": "岑巩县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 岑巩县",
    "rank": 3,
    "normalizedName": "岑巩",
    "normalizedValue": "贵州黔东南苗族侗族岑巩",
    "normalizedSearchText": "贵州黔东南苗族侗族岑巩岑巩贵州黔东南苗族侗族"
  },
  {
    "code": "522627",
    "name": "天柱县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 天柱县",
    "rank": 3,
    "normalizedName": "天柱",
    "normalizedValue": "贵州黔东南苗族侗族天柱",
    "normalizedSearchText": "贵州黔东南苗族侗族天柱天柱贵州黔东南苗族侗族"
  },
  {
    "code": "522628",
    "name": "锦屏县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 锦屏县",
    "rank": 3,
    "normalizedName": "锦屏",
    "normalizedValue": "贵州黔东南苗族侗族锦屏",
    "normalizedSearchText": "贵州黔东南苗族侗族锦屏锦屏贵州黔东南苗族侗族"
  },
  {
    "code": "522629",
    "name": "剑河县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 剑河县",
    "rank": 3,
    "normalizedName": "剑河",
    "normalizedValue": "贵州黔东南苗族侗族剑河",
    "normalizedSearchText": "贵州黔东南苗族侗族剑河剑河贵州黔东南苗族侗族"
  },
  {
    "code": "522630",
    "name": "台江县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 台江县",
    "rank": 3,
    "normalizedName": "台江",
    "normalizedValue": "贵州黔东南苗族侗族台江",
    "normalizedSearchText": "贵州黔东南苗族侗族台江台江贵州黔东南苗族侗族"
  },
  {
    "code": "522631",
    "name": "黎平县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 黎平县",
    "rank": 3,
    "normalizedName": "黎平",
    "normalizedValue": "贵州黔东南苗族侗族黎平",
    "normalizedSearchText": "贵州黔东南苗族侗族黎平黎平贵州黔东南苗族侗族"
  },
  {
    "code": "522632",
    "name": "榕江县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 榕江县",
    "rank": 3,
    "normalizedName": "榕江",
    "normalizedValue": "贵州黔东南苗族侗族榕江",
    "normalizedSearchText": "贵州黔东南苗族侗族榕江榕江贵州黔东南苗族侗族"
  },
  {
    "code": "522633",
    "name": "从江县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 从江县",
    "rank": 3,
    "normalizedName": "从江",
    "normalizedValue": "贵州黔东南苗族侗族从江",
    "normalizedSearchText": "贵州黔东南苗族侗族从江从江贵州黔东南苗族侗族"
  },
  {
    "code": "522634",
    "name": "雷山县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 雷山县",
    "rank": 3,
    "normalizedName": "雷山",
    "normalizedValue": "贵州黔东南苗族侗族雷山",
    "normalizedSearchText": "贵州黔东南苗族侗族雷山雷山贵州黔东南苗族侗族"
  },
  {
    "code": "522635",
    "name": "麻江县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 麻江县",
    "rank": 3,
    "normalizedName": "麻江",
    "normalizedValue": "贵州黔东南苗族侗族麻江",
    "normalizedSearchText": "贵州黔东南苗族侗族麻江麻江贵州黔东南苗族侗族"
  },
  {
    "code": "522636",
    "name": "丹寨县",
    "detail": "贵州省 / 黔东南苗族侗族自治州",
    "value": "贵州省 / 黔东南苗族侗族自治州 / 丹寨县",
    "rank": 3,
    "normalizedName": "丹寨",
    "normalizedValue": "贵州黔东南苗族侗族丹寨",
    "normalizedSearchText": "贵州黔东南苗族侗族丹寨丹寨贵州黔东南苗族侗族"
  },
  {
    "code": "522700",
    "name": "黔南布依族苗族自治州",
    "detail": "贵州省",
    "value": "贵州省 / 黔南布依族苗族自治州",
    "rank": 2,
    "normalizedName": "黔南布依族苗族",
    "normalizedValue": "贵州黔南布依族苗族",
    "normalizedSearchText": "贵州黔南布依族苗族黔南布依族苗族贵州"
  },
  {
    "code": "522701",
    "name": "都匀市",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 都匀市",
    "rank": 3,
    "normalizedName": "都匀",
    "normalizedValue": "贵州黔南布依族苗族都匀",
    "normalizedSearchText": "贵州黔南布依族苗族都匀都匀贵州黔南布依族苗族"
  },
  {
    "code": "522702",
    "name": "福泉市",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 福泉市",
    "rank": 3,
    "normalizedName": "福泉",
    "normalizedValue": "贵州黔南布依族苗族福泉",
    "normalizedSearchText": "贵州黔南布依族苗族福泉福泉贵州黔南布依族苗族"
  },
  {
    "code": "522722",
    "name": "荔波县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 荔波县",
    "rank": 3,
    "normalizedName": "荔波",
    "normalizedValue": "贵州黔南布依族苗族荔波",
    "normalizedSearchText": "贵州黔南布依族苗族荔波荔波贵州黔南布依族苗族"
  },
  {
    "code": "522723",
    "name": "贵定县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 贵定县",
    "rank": 3,
    "normalizedName": "贵定",
    "normalizedValue": "贵州黔南布依族苗族贵定",
    "normalizedSearchText": "贵州黔南布依族苗族贵定贵定贵州黔南布依族苗族"
  },
  {
    "code": "522725",
    "name": "瓮安县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 瓮安县",
    "rank": 3,
    "normalizedName": "瓮安",
    "normalizedValue": "贵州黔南布依族苗族瓮安",
    "normalizedSearchText": "贵州黔南布依族苗族瓮安瓮安贵州黔南布依族苗族"
  },
  {
    "code": "522726",
    "name": "独山县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 独山县",
    "rank": 3,
    "normalizedName": "独山",
    "normalizedValue": "贵州黔南布依族苗族独山",
    "normalizedSearchText": "贵州黔南布依族苗族独山独山贵州黔南布依族苗族"
  },
  {
    "code": "522727",
    "name": "平塘县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 平塘县",
    "rank": 3,
    "normalizedName": "平塘",
    "normalizedValue": "贵州黔南布依族苗族平塘",
    "normalizedSearchText": "贵州黔南布依族苗族平塘平塘贵州黔南布依族苗族"
  },
  {
    "code": "522728",
    "name": "罗甸县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 罗甸县",
    "rank": 3,
    "normalizedName": "罗甸",
    "normalizedValue": "贵州黔南布依族苗族罗甸",
    "normalizedSearchText": "贵州黔南布依族苗族罗甸罗甸贵州黔南布依族苗族"
  },
  {
    "code": "522729",
    "name": "长顺县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 长顺县",
    "rank": 3,
    "normalizedName": "长顺",
    "normalizedValue": "贵州黔南布依族苗族长顺",
    "normalizedSearchText": "贵州黔南布依族苗族长顺长顺贵州黔南布依族苗族"
  },
  {
    "code": "522730",
    "name": "龙里县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 龙里县",
    "rank": 3,
    "normalizedName": "龙里",
    "normalizedValue": "贵州黔南布依族苗族龙里",
    "normalizedSearchText": "贵州黔南布依族苗族龙里龙里贵州黔南布依族苗族"
  },
  {
    "code": "522731",
    "name": "惠水县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 惠水县",
    "rank": 3,
    "normalizedName": "惠水",
    "normalizedValue": "贵州黔南布依族苗族惠水",
    "normalizedSearchText": "贵州黔南布依族苗族惠水惠水贵州黔南布依族苗族"
  },
  {
    "code": "522732",
    "name": "三都水族自治县",
    "detail": "贵州省 / 黔南布依族苗族自治州",
    "value": "贵州省 / 黔南布依族苗族自治州 / 三都水族自治县",
    "rank": 3,
    "normalizedName": "三都水族自治",
    "normalizedValue": "贵州黔南布依族苗族三都水族自治",
    "normalizedSearchText": "贵州黔南布依族苗族三都水族自治三都水族自治贵州黔南布依族苗族"
  },
  {
    "code": "530000",
    "name": "云南省",
    "detail": "?????",
    "value": "云南省",
    "rank": 1,
    "normalizedName": "云南",
    "normalizedValue": "云南",
    "normalizedSearchText": "云南云南"
  },
  {
    "code": "530100",
    "name": "昆明市",
    "detail": "云南省",
    "value": "云南省 / 昆明市",
    "rank": 2,
    "normalizedName": "昆明",
    "normalizedValue": "云南昆明",
    "normalizedSearchText": "云南昆明昆明云南"
  },
  {
    "code": "530102",
    "name": "五华区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 五华区",
    "rank": 3,
    "normalizedName": "五华",
    "normalizedValue": "云南昆明五华",
    "normalizedSearchText": "云南昆明五华五华云南昆明"
  },
  {
    "code": "530103",
    "name": "盘龙区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 盘龙区",
    "rank": 3,
    "normalizedName": "盘龙",
    "normalizedValue": "云南昆明盘龙",
    "normalizedSearchText": "云南昆明盘龙盘龙云南昆明"
  },
  {
    "code": "530111",
    "name": "官渡区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 官渡区",
    "rank": 3,
    "normalizedName": "官渡",
    "normalizedValue": "云南昆明官渡",
    "normalizedSearchText": "云南昆明官渡官渡云南昆明"
  },
  {
    "code": "530112",
    "name": "西山区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 西山区",
    "rank": 3,
    "normalizedName": "西山",
    "normalizedValue": "云南昆明西山",
    "normalizedSearchText": "云南昆明西山西山云南昆明"
  },
  {
    "code": "530113",
    "name": "东川区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 东川区",
    "rank": 3,
    "normalizedName": "东川",
    "normalizedValue": "云南昆明东川",
    "normalizedSearchText": "云南昆明东川东川云南昆明"
  },
  {
    "code": "530114",
    "name": "呈贡区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 呈贡区",
    "rank": 3,
    "normalizedName": "呈贡",
    "normalizedValue": "云南昆明呈贡",
    "normalizedSearchText": "云南昆明呈贡呈贡云南昆明"
  },
  {
    "code": "530115",
    "name": "晋宁区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 晋宁区",
    "rank": 3,
    "normalizedName": "晋宁",
    "normalizedValue": "云南昆明晋宁",
    "normalizedSearchText": "云南昆明晋宁晋宁云南昆明"
  },
  {
    "code": "530124",
    "name": "富民县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 富民县",
    "rank": 3,
    "normalizedName": "富民",
    "normalizedValue": "云南昆明富民",
    "normalizedSearchText": "云南昆明富民富民云南昆明"
  },
  {
    "code": "530125",
    "name": "宜良县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 宜良县",
    "rank": 3,
    "normalizedName": "宜良",
    "normalizedValue": "云南昆明宜良",
    "normalizedSearchText": "云南昆明宜良宜良云南昆明"
  },
  {
    "code": "530126",
    "name": "石林彝族自治县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 石林彝族自治县",
    "rank": 3,
    "normalizedName": "石林彝族自治",
    "normalizedValue": "云南昆明石林彝族自治",
    "normalizedSearchText": "云南昆明石林彝族自治石林彝族自治云南昆明"
  },
  {
    "code": "530127",
    "name": "嵩明县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 嵩明县",
    "rank": 3,
    "normalizedName": "嵩明",
    "normalizedValue": "云南昆明嵩明",
    "normalizedSearchText": "云南昆明嵩明嵩明云南昆明"
  },
  {
    "code": "530128",
    "name": "禄劝彝族苗族自治县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 禄劝彝族苗族自治县",
    "rank": 3,
    "normalizedName": "禄劝彝族苗族自治",
    "normalizedValue": "云南昆明禄劝彝族苗族自治",
    "normalizedSearchText": "云南昆明禄劝彝族苗族自治禄劝彝族苗族自治云南昆明"
  },
  {
    "code": "530129",
    "name": "寻甸回族彝族自治县",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 寻甸回族彝族自治县",
    "rank": 3,
    "normalizedName": "寻甸回族彝族自治",
    "normalizedValue": "云南昆明寻甸回族彝族自治",
    "normalizedSearchText": "云南昆明寻甸回族彝族自治寻甸回族彝族自治云南昆明"
  },
  {
    "code": "530181",
    "name": "安宁市",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 安宁市",
    "rank": 3,
    "normalizedName": "安宁",
    "normalizedValue": "云南昆明安宁",
    "normalizedSearchText": "云南昆明安宁安宁云南昆明"
  },
  {
    "code": "530101",
    "name": "市辖区",
    "detail": "云南省 / 昆明市",
    "value": "云南省 / 昆明市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南昆明辖",
    "normalizedSearchText": "云南昆明辖辖云南昆明"
  },
  {
    "code": "530300",
    "name": "曲靖市",
    "detail": "云南省",
    "value": "云南省 / 曲靖市",
    "rank": 2,
    "normalizedName": "曲靖",
    "normalizedValue": "云南曲靖",
    "normalizedSearchText": "云南曲靖曲靖云南"
  },
  {
    "code": "530302",
    "name": "麒麟区",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 麒麟区",
    "rank": 3,
    "normalizedName": "麒麟",
    "normalizedValue": "云南曲靖麒麟",
    "normalizedSearchText": "云南曲靖麒麟麒麟云南曲靖"
  },
  {
    "code": "530303",
    "name": "沾益区",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 沾益区",
    "rank": 3,
    "normalizedName": "沾益",
    "normalizedValue": "云南曲靖沾益",
    "normalizedSearchText": "云南曲靖沾益沾益云南曲靖"
  },
  {
    "code": "530304",
    "name": "马龙区",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 马龙区",
    "rank": 3,
    "normalizedName": "马龙",
    "normalizedValue": "云南曲靖马龙",
    "normalizedSearchText": "云南曲靖马龙马龙云南曲靖"
  },
  {
    "code": "530322",
    "name": "陆良县",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 陆良县",
    "rank": 3,
    "normalizedName": "陆良",
    "normalizedValue": "云南曲靖陆良",
    "normalizedSearchText": "云南曲靖陆良陆良云南曲靖"
  },
  {
    "code": "530323",
    "name": "师宗县",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 师宗县",
    "rank": 3,
    "normalizedName": "师宗",
    "normalizedValue": "云南曲靖师宗",
    "normalizedSearchText": "云南曲靖师宗师宗云南曲靖"
  },
  {
    "code": "530324",
    "name": "罗平县",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 罗平县",
    "rank": 3,
    "normalizedName": "罗平",
    "normalizedValue": "云南曲靖罗平",
    "normalizedSearchText": "云南曲靖罗平罗平云南曲靖"
  },
  {
    "code": "530325",
    "name": "富源县",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 富源县",
    "rank": 3,
    "normalizedName": "富源",
    "normalizedValue": "云南曲靖富源",
    "normalizedSearchText": "云南曲靖富源富源云南曲靖"
  },
  {
    "code": "530326",
    "name": "会泽县",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 会泽县",
    "rank": 3,
    "normalizedName": "会泽",
    "normalizedValue": "云南曲靖会泽",
    "normalizedSearchText": "云南曲靖会泽会泽云南曲靖"
  },
  {
    "code": "530381",
    "name": "宣威市",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 宣威市",
    "rank": 3,
    "normalizedName": "宣威",
    "normalizedValue": "云南曲靖宣威",
    "normalizedSearchText": "云南曲靖宣威宣威云南曲靖"
  },
  {
    "code": "530301",
    "name": "市辖区",
    "detail": "云南省 / 曲靖市",
    "value": "云南省 / 曲靖市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南曲靖辖",
    "normalizedSearchText": "云南曲靖辖辖云南曲靖"
  },
  {
    "code": "530400",
    "name": "玉溪市",
    "detail": "云南省",
    "value": "云南省 / 玉溪市",
    "rank": 2,
    "normalizedName": "玉溪",
    "normalizedValue": "云南玉溪",
    "normalizedSearchText": "云南玉溪玉溪云南"
  },
  {
    "code": "530402",
    "name": "红塔区",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 红塔区",
    "rank": 3,
    "normalizedName": "红塔",
    "normalizedValue": "云南玉溪红塔",
    "normalizedSearchText": "云南玉溪红塔红塔云南玉溪"
  },
  {
    "code": "530403",
    "name": "江川区",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 江川区",
    "rank": 3,
    "normalizedName": "江川",
    "normalizedValue": "云南玉溪江川",
    "normalizedSearchText": "云南玉溪江川江川云南玉溪"
  },
  {
    "code": "530423",
    "name": "通海县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 通海县",
    "rank": 3,
    "normalizedName": "通海",
    "normalizedValue": "云南玉溪通海",
    "normalizedSearchText": "云南玉溪通海通海云南玉溪"
  },
  {
    "code": "530424",
    "name": "华宁县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 华宁县",
    "rank": 3,
    "normalizedName": "华宁",
    "normalizedValue": "云南玉溪华宁",
    "normalizedSearchText": "云南玉溪华宁华宁云南玉溪"
  },
  {
    "code": "530425",
    "name": "易门县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 易门县",
    "rank": 3,
    "normalizedName": "易门",
    "normalizedValue": "云南玉溪易门",
    "normalizedSearchText": "云南玉溪易门易门云南玉溪"
  },
  {
    "code": "530426",
    "name": "峨山彝族自治县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 峨山彝族自治县",
    "rank": 3,
    "normalizedName": "峨山彝族自治",
    "normalizedValue": "云南玉溪峨山彝族自治",
    "normalizedSearchText": "云南玉溪峨山彝族自治峨山彝族自治云南玉溪"
  },
  {
    "code": "530427",
    "name": "新平彝族傣族自治县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 新平彝族傣族自治县",
    "rank": 3,
    "normalizedName": "新平彝族傣族自治",
    "normalizedValue": "云南玉溪新平彝族傣族自治",
    "normalizedSearchText": "云南玉溪新平彝族傣族自治新平彝族傣族自治云南玉溪"
  },
  {
    "code": "530428",
    "name": "元江哈尼族彝族傣族自治县",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 元江哈尼族彝族傣族自治县",
    "rank": 3,
    "normalizedName": "元江哈尼族彝族傣族自治",
    "normalizedValue": "云南玉溪元江哈尼族彝族傣族自治",
    "normalizedSearchText": "云南玉溪元江哈尼族彝族傣族自治元江哈尼族彝族傣族自治云南玉溪"
  },
  {
    "code": "530481",
    "name": "澄江市",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 澄江市",
    "rank": 3,
    "normalizedName": "澄江",
    "normalizedValue": "云南玉溪澄江",
    "normalizedSearchText": "云南玉溪澄江澄江云南玉溪"
  },
  {
    "code": "530401",
    "name": "市辖区",
    "detail": "云南省 / 玉溪市",
    "value": "云南省 / 玉溪市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南玉溪辖",
    "normalizedSearchText": "云南玉溪辖辖云南玉溪"
  },
  {
    "code": "530500",
    "name": "保山市",
    "detail": "云南省",
    "value": "云南省 / 保山市",
    "rank": 2,
    "normalizedName": "保山",
    "normalizedValue": "云南保山",
    "normalizedSearchText": "云南保山保山云南"
  },
  {
    "code": "530502",
    "name": "隆阳区",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 隆阳区",
    "rank": 3,
    "normalizedName": "隆阳",
    "normalizedValue": "云南保山隆阳",
    "normalizedSearchText": "云南保山隆阳隆阳云南保山"
  },
  {
    "code": "530521",
    "name": "施甸县",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 施甸县",
    "rank": 3,
    "normalizedName": "施甸",
    "normalizedValue": "云南保山施甸",
    "normalizedSearchText": "云南保山施甸施甸云南保山"
  },
  {
    "code": "530523",
    "name": "龙陵县",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 龙陵县",
    "rank": 3,
    "normalizedName": "龙陵",
    "normalizedValue": "云南保山龙陵",
    "normalizedSearchText": "云南保山龙陵龙陵云南保山"
  },
  {
    "code": "530524",
    "name": "昌宁县",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 昌宁县",
    "rank": 3,
    "normalizedName": "昌宁",
    "normalizedValue": "云南保山昌宁",
    "normalizedSearchText": "云南保山昌宁昌宁云南保山"
  },
  {
    "code": "530581",
    "name": "腾冲市",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 腾冲市",
    "rank": 3,
    "normalizedName": "腾冲",
    "normalizedValue": "云南保山腾冲",
    "normalizedSearchText": "云南保山腾冲腾冲云南保山"
  },
  {
    "code": "530501",
    "name": "市辖区",
    "detail": "云南省 / 保山市",
    "value": "云南省 / 保山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南保山辖",
    "normalizedSearchText": "云南保山辖辖云南保山"
  },
  {
    "code": "530600",
    "name": "昭通市",
    "detail": "云南省",
    "value": "云南省 / 昭通市",
    "rank": 2,
    "normalizedName": "昭通",
    "normalizedValue": "云南昭通",
    "normalizedSearchText": "云南昭通昭通云南"
  },
  {
    "code": "530602",
    "name": "昭阳区",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 昭阳区",
    "rank": 3,
    "normalizedName": "昭阳",
    "normalizedValue": "云南昭通昭阳",
    "normalizedSearchText": "云南昭通昭阳昭阳云南昭通"
  },
  {
    "code": "530621",
    "name": "鲁甸县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 鲁甸县",
    "rank": 3,
    "normalizedName": "鲁甸",
    "normalizedValue": "云南昭通鲁甸",
    "normalizedSearchText": "云南昭通鲁甸鲁甸云南昭通"
  },
  {
    "code": "530622",
    "name": "巧家县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 巧家县",
    "rank": 3,
    "normalizedName": "巧家",
    "normalizedValue": "云南昭通巧家",
    "normalizedSearchText": "云南昭通巧家巧家云南昭通"
  },
  {
    "code": "530623",
    "name": "盐津县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 盐津县",
    "rank": 3,
    "normalizedName": "盐津",
    "normalizedValue": "云南昭通盐津",
    "normalizedSearchText": "云南昭通盐津盐津云南昭通"
  },
  {
    "code": "530624",
    "name": "大关县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 大关县",
    "rank": 3,
    "normalizedName": "大关",
    "normalizedValue": "云南昭通大关",
    "normalizedSearchText": "云南昭通大关大关云南昭通"
  },
  {
    "code": "530625",
    "name": "永善县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 永善县",
    "rank": 3,
    "normalizedName": "永善",
    "normalizedValue": "云南昭通永善",
    "normalizedSearchText": "云南昭通永善永善云南昭通"
  },
  {
    "code": "530626",
    "name": "绥江县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 绥江县",
    "rank": 3,
    "normalizedName": "绥江",
    "normalizedValue": "云南昭通绥江",
    "normalizedSearchText": "云南昭通绥江绥江云南昭通"
  },
  {
    "code": "530627",
    "name": "镇雄县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 镇雄县",
    "rank": 3,
    "normalizedName": "雄",
    "normalizedValue": "云南昭通雄",
    "normalizedSearchText": "云南昭通雄雄云南昭通"
  },
  {
    "code": "530628",
    "name": "彝良县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 彝良县",
    "rank": 3,
    "normalizedName": "彝良",
    "normalizedValue": "云南昭通彝良",
    "normalizedSearchText": "云南昭通彝良彝良云南昭通"
  },
  {
    "code": "530629",
    "name": "威信县",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 威信县",
    "rank": 3,
    "normalizedName": "威信",
    "normalizedValue": "云南昭通威信",
    "normalizedSearchText": "云南昭通威信威信云南昭通"
  },
  {
    "code": "530681",
    "name": "水富市",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 水富市",
    "rank": 3,
    "normalizedName": "水富",
    "normalizedValue": "云南昭通水富",
    "normalizedSearchText": "云南昭通水富水富云南昭通"
  },
  {
    "code": "530601",
    "name": "市辖区",
    "detail": "云南省 / 昭通市",
    "value": "云南省 / 昭通市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南昭通辖",
    "normalizedSearchText": "云南昭通辖辖云南昭通"
  },
  {
    "code": "530700",
    "name": "丽江市",
    "detail": "云南省",
    "value": "云南省 / 丽江市",
    "rank": 2,
    "normalizedName": "丽江",
    "normalizedValue": "云南丽江",
    "normalizedSearchText": "云南丽江丽江云南"
  },
  {
    "code": "530702",
    "name": "古城区",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 古城区",
    "rank": 3,
    "normalizedName": "古城",
    "normalizedValue": "云南丽江古城",
    "normalizedSearchText": "云南丽江古城古城云南丽江"
  },
  {
    "code": "530721",
    "name": "玉龙纳西族自治县",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 玉龙纳西族自治县",
    "rank": 3,
    "normalizedName": "玉龙纳西族自治",
    "normalizedValue": "云南丽江玉龙纳西族自治",
    "normalizedSearchText": "云南丽江玉龙纳西族自治玉龙纳西族自治云南丽江"
  },
  {
    "code": "530722",
    "name": "永胜县",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 永胜县",
    "rank": 3,
    "normalizedName": "永胜",
    "normalizedValue": "云南丽江永胜",
    "normalizedSearchText": "云南丽江永胜永胜云南丽江"
  },
  {
    "code": "530723",
    "name": "华坪县",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 华坪县",
    "rank": 3,
    "normalizedName": "华坪",
    "normalizedValue": "云南丽江华坪",
    "normalizedSearchText": "云南丽江华坪华坪云南丽江"
  },
  {
    "code": "530724",
    "name": "宁蒗彝族自治县",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 宁蒗彝族自治县",
    "rank": 3,
    "normalizedName": "宁蒗彝族自治",
    "normalizedValue": "云南丽江宁蒗彝族自治",
    "normalizedSearchText": "云南丽江宁蒗彝族自治宁蒗彝族自治云南丽江"
  },
  {
    "code": "530701",
    "name": "市辖区",
    "detail": "云南省 / 丽江市",
    "value": "云南省 / 丽江市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南丽江辖",
    "normalizedSearchText": "云南丽江辖辖云南丽江"
  },
  {
    "code": "530800",
    "name": "普洱市",
    "detail": "云南省",
    "value": "云南省 / 普洱市",
    "rank": 2,
    "normalizedName": "普洱",
    "normalizedValue": "云南普洱",
    "normalizedSearchText": "云南普洱普洱云南"
  },
  {
    "code": "530802",
    "name": "思茅区",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 思茅区",
    "rank": 3,
    "normalizedName": "思茅",
    "normalizedValue": "云南普洱思茅",
    "normalizedSearchText": "云南普洱思茅思茅云南普洱"
  },
  {
    "code": "530821",
    "name": "宁洱哈尼族彝族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 宁洱哈尼族彝族自治县",
    "rank": 3,
    "normalizedName": "宁洱哈尼族彝族自治",
    "normalizedValue": "云南普洱宁洱哈尼族彝族自治",
    "normalizedSearchText": "云南普洱宁洱哈尼族彝族自治宁洱哈尼族彝族自治云南普洱"
  },
  {
    "code": "530822",
    "name": "墨江哈尼族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 墨江哈尼族自治县",
    "rank": 3,
    "normalizedName": "墨江哈尼族自治",
    "normalizedValue": "云南普洱墨江哈尼族自治",
    "normalizedSearchText": "云南普洱墨江哈尼族自治墨江哈尼族自治云南普洱"
  },
  {
    "code": "530823",
    "name": "景东彝族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 景东彝族自治县",
    "rank": 3,
    "normalizedName": "景东彝族自治",
    "normalizedValue": "云南普洱景东彝族自治",
    "normalizedSearchText": "云南普洱景东彝族自治景东彝族自治云南普洱"
  },
  {
    "code": "530824",
    "name": "景谷傣族彝族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 景谷傣族彝族自治县",
    "rank": 3,
    "normalizedName": "景谷傣族彝族自治",
    "normalizedValue": "云南普洱景谷傣族彝族自治",
    "normalizedSearchText": "云南普洱景谷傣族彝族自治景谷傣族彝族自治云南普洱"
  },
  {
    "code": "530825",
    "name": "镇沅彝族哈尼族拉祜族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 镇沅彝族哈尼族拉祜族自治县",
    "rank": 3,
    "normalizedName": "沅彝族哈尼族拉祜族自治",
    "normalizedValue": "云南普洱沅彝族哈尼族拉祜族自治",
    "normalizedSearchText": "云南普洱沅彝族哈尼族拉祜族自治沅彝族哈尼族拉祜族自治云南普洱"
  },
  {
    "code": "530826",
    "name": "江城哈尼族彝族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 江城哈尼族彝族自治县",
    "rank": 3,
    "normalizedName": "江城哈尼族彝族自治",
    "normalizedValue": "云南普洱江城哈尼族彝族自治",
    "normalizedSearchText": "云南普洱江城哈尼族彝族自治江城哈尼族彝族自治云南普洱"
  },
  {
    "code": "530827",
    "name": "孟连傣族拉祜族佤族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 孟连傣族拉祜族佤族自治县",
    "rank": 3,
    "normalizedName": "孟连傣族拉祜族佤族自治",
    "normalizedValue": "云南普洱孟连傣族拉祜族佤族自治",
    "normalizedSearchText": "云南普洱孟连傣族拉祜族佤族自治孟连傣族拉祜族佤族自治云南普洱"
  },
  {
    "code": "530828",
    "name": "澜沧拉祜族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 澜沧拉祜族自治县",
    "rank": 3,
    "normalizedName": "澜沧拉祜族自治",
    "normalizedValue": "云南普洱澜沧拉祜族自治",
    "normalizedSearchText": "云南普洱澜沧拉祜族自治澜沧拉祜族自治云南普洱"
  },
  {
    "code": "530829",
    "name": "西盟佤族自治县",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 西盟佤族自治县",
    "rank": 3,
    "normalizedName": "西佤族自治",
    "normalizedValue": "云南普洱西佤族自治",
    "normalizedSearchText": "云南普洱西佤族自治西佤族自治云南普洱"
  },
  {
    "code": "530801",
    "name": "市辖区",
    "detail": "云南省 / 普洱市",
    "value": "云南省 / 普洱市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南普洱辖",
    "normalizedSearchText": "云南普洱辖辖云南普洱"
  },
  {
    "code": "530900",
    "name": "临沧市",
    "detail": "云南省",
    "value": "云南省 / 临沧市",
    "rank": 2,
    "normalizedName": "临沧",
    "normalizedValue": "云南临沧",
    "normalizedSearchText": "云南临沧临沧云南"
  },
  {
    "code": "530902",
    "name": "临翔区",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 临翔区",
    "rank": 3,
    "normalizedName": "临翔",
    "normalizedValue": "云南临沧临翔",
    "normalizedSearchText": "云南临沧临翔临翔云南临沧"
  },
  {
    "code": "530921",
    "name": "凤庆县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 凤庆县",
    "rank": 3,
    "normalizedName": "凤庆",
    "normalizedValue": "云南临沧凤庆",
    "normalizedSearchText": "云南临沧凤庆凤庆云南临沧"
  },
  {
    "code": "530922",
    "name": "云县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 云县",
    "rank": 3,
    "normalizedName": "云",
    "normalizedValue": "云南临沧云",
    "normalizedSearchText": "云南临沧云云云南临沧"
  },
  {
    "code": "530923",
    "name": "永德县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 永德县",
    "rank": 3,
    "normalizedName": "永德",
    "normalizedValue": "云南临沧永德",
    "normalizedSearchText": "云南临沧永德永德云南临沧"
  },
  {
    "code": "530924",
    "name": "镇康县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 镇康县",
    "rank": 3,
    "normalizedName": "康",
    "normalizedValue": "云南临沧康",
    "normalizedSearchText": "云南临沧康康云南临沧"
  },
  {
    "code": "530925",
    "name": "双江拉祜族佤族布朗族傣族自治县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 双江拉祜族佤族布朗族傣族自治县",
    "rank": 3,
    "normalizedName": "双江拉祜族佤族布朗族傣族自治",
    "normalizedValue": "云南临沧双江拉祜族佤族布朗族傣族自治",
    "normalizedSearchText": "云南临沧双江拉祜族佤族布朗族傣族自治双江拉祜族佤族布朗族傣族自治云南临沧"
  },
  {
    "code": "530926",
    "name": "耿马傣族佤族自治县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 耿马傣族佤族自治县",
    "rank": 3,
    "normalizedName": "耿马傣族佤族自治",
    "normalizedValue": "云南临沧耿马傣族佤族自治",
    "normalizedSearchText": "云南临沧耿马傣族佤族自治耿马傣族佤族自治云南临沧"
  },
  {
    "code": "530927",
    "name": "沧源佤族自治县",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 沧源佤族自治县",
    "rank": 3,
    "normalizedName": "沧源佤族自治",
    "normalizedValue": "云南临沧沧源佤族自治",
    "normalizedSearchText": "云南临沧沧源佤族自治沧源佤族自治云南临沧"
  },
  {
    "code": "530901",
    "name": "市辖区",
    "detail": "云南省 / 临沧市",
    "value": "云南省 / 临沧市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "云南临沧辖",
    "normalizedSearchText": "云南临沧辖辖云南临沧"
  },
  {
    "code": "532300",
    "name": "楚雄彝族自治州",
    "detail": "云南省",
    "value": "云南省 / 楚雄彝族自治州",
    "rank": 2,
    "normalizedName": "楚雄彝族",
    "normalizedValue": "云南楚雄彝族",
    "normalizedSearchText": "云南楚雄彝族楚雄彝族云南"
  },
  {
    "code": "532301",
    "name": "楚雄市",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 楚雄市",
    "rank": 3,
    "normalizedName": "楚雄",
    "normalizedValue": "云南楚雄彝族楚雄",
    "normalizedSearchText": "云南楚雄彝族楚雄楚雄云南楚雄彝族"
  },
  {
    "code": "532322",
    "name": "双柏县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 双柏县",
    "rank": 3,
    "normalizedName": "双柏",
    "normalizedValue": "云南楚雄彝族双柏",
    "normalizedSearchText": "云南楚雄彝族双柏双柏云南楚雄彝族"
  },
  {
    "code": "532323",
    "name": "牟定县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 牟定县",
    "rank": 3,
    "normalizedName": "牟定",
    "normalizedValue": "云南楚雄彝族牟定",
    "normalizedSearchText": "云南楚雄彝族牟定牟定云南楚雄彝族"
  },
  {
    "code": "532324",
    "name": "南华县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 南华县",
    "rank": 3,
    "normalizedName": "南华",
    "normalizedValue": "云南楚雄彝族南华",
    "normalizedSearchText": "云南楚雄彝族南华南华云南楚雄彝族"
  },
  {
    "code": "532325",
    "name": "姚安县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 姚安县",
    "rank": 3,
    "normalizedName": "姚安",
    "normalizedValue": "云南楚雄彝族姚安",
    "normalizedSearchText": "云南楚雄彝族姚安姚安云南楚雄彝族"
  },
  {
    "code": "532326",
    "name": "大姚县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 大姚县",
    "rank": 3,
    "normalizedName": "大姚",
    "normalizedValue": "云南楚雄彝族大姚",
    "normalizedSearchText": "云南楚雄彝族大姚大姚云南楚雄彝族"
  },
  {
    "code": "532327",
    "name": "永仁县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 永仁县",
    "rank": 3,
    "normalizedName": "永仁",
    "normalizedValue": "云南楚雄彝族永仁",
    "normalizedSearchText": "云南楚雄彝族永仁永仁云南楚雄彝族"
  },
  {
    "code": "532328",
    "name": "元谋县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 元谋县",
    "rank": 3,
    "normalizedName": "元谋",
    "normalizedValue": "云南楚雄彝族元谋",
    "normalizedSearchText": "云南楚雄彝族元谋元谋云南楚雄彝族"
  },
  {
    "code": "532329",
    "name": "武定县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 武定县",
    "rank": 3,
    "normalizedName": "武定",
    "normalizedValue": "云南楚雄彝族武定",
    "normalizedSearchText": "云南楚雄彝族武定武定云南楚雄彝族"
  },
  {
    "code": "532331",
    "name": "禄丰县",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 禄丰县",
    "rank": 3,
    "normalizedName": "禄丰",
    "normalizedValue": "云南楚雄彝族禄丰",
    "normalizedSearchText": "云南楚雄彝族禄丰禄丰云南楚雄彝族"
  },
  {
    "code": "532302",
    "name": "禄丰市",
    "detail": "云南省 / 楚雄彝族自治州",
    "value": "云南省 / 楚雄彝族自治州 / 禄丰市",
    "rank": 3,
    "normalizedName": "禄丰",
    "normalizedValue": "云南楚雄彝族禄丰",
    "normalizedSearchText": "云南楚雄彝族禄丰禄丰云南楚雄彝族"
  },
  {
    "code": "532500",
    "name": "红河哈尼族彝族自治州",
    "detail": "云南省",
    "value": "云南省 / 红河哈尼族彝族自治州",
    "rank": 2,
    "normalizedName": "红河哈尼族彝族",
    "normalizedValue": "云南红河哈尼族彝族",
    "normalizedSearchText": "云南红河哈尼族彝族红河哈尼族彝族云南"
  },
  {
    "code": "532501",
    "name": "个旧市",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 个旧市",
    "rank": 3,
    "normalizedName": "个旧",
    "normalizedValue": "云南红河哈尼族彝族个旧",
    "normalizedSearchText": "云南红河哈尼族彝族个旧个旧云南红河哈尼族彝族"
  },
  {
    "code": "532502",
    "name": "开远市",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 开远市",
    "rank": 3,
    "normalizedName": "开远",
    "normalizedValue": "云南红河哈尼族彝族开远",
    "normalizedSearchText": "云南红河哈尼族彝族开远开远云南红河哈尼族彝族"
  },
  {
    "code": "532503",
    "name": "蒙自市",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 蒙自市",
    "rank": 3,
    "normalizedName": "蒙自",
    "normalizedValue": "云南红河哈尼族彝族蒙自",
    "normalizedSearchText": "云南红河哈尼族彝族蒙自蒙自云南红河哈尼族彝族"
  },
  {
    "code": "532504",
    "name": "弥勒市",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 弥勒市",
    "rank": 3,
    "normalizedName": "弥勒",
    "normalizedValue": "云南红河哈尼族彝族弥勒",
    "normalizedSearchText": "云南红河哈尼族彝族弥勒弥勒云南红河哈尼族彝族"
  },
  {
    "code": "532523",
    "name": "屏边苗族自治县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 屏边苗族自治县",
    "rank": 3,
    "normalizedName": "屏边苗族自治",
    "normalizedValue": "云南红河哈尼族彝族屏边苗族自治",
    "normalizedSearchText": "云南红河哈尼族彝族屏边苗族自治屏边苗族自治云南红河哈尼族彝族"
  },
  {
    "code": "532524",
    "name": "建水县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 建水县",
    "rank": 3,
    "normalizedName": "建水",
    "normalizedValue": "云南红河哈尼族彝族建水",
    "normalizedSearchText": "云南红河哈尼族彝族建水建水云南红河哈尼族彝族"
  },
  {
    "code": "532525",
    "name": "石屏县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 石屏县",
    "rank": 3,
    "normalizedName": "石屏",
    "normalizedValue": "云南红河哈尼族彝族石屏",
    "normalizedSearchText": "云南红河哈尼族彝族石屏石屏云南红河哈尼族彝族"
  },
  {
    "code": "532527",
    "name": "泸西县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 泸西县",
    "rank": 3,
    "normalizedName": "泸西",
    "normalizedValue": "云南红河哈尼族彝族泸西",
    "normalizedSearchText": "云南红河哈尼族彝族泸西泸西云南红河哈尼族彝族"
  },
  {
    "code": "532528",
    "name": "元阳县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 元阳县",
    "rank": 3,
    "normalizedName": "元阳",
    "normalizedValue": "云南红河哈尼族彝族元阳",
    "normalizedSearchText": "云南红河哈尼族彝族元阳元阳云南红河哈尼族彝族"
  },
  {
    "code": "532529",
    "name": "红河县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 红河县",
    "rank": 3,
    "normalizedName": "红河",
    "normalizedValue": "云南红河哈尼族彝族红河",
    "normalizedSearchText": "云南红河哈尼族彝族红河红河云南红河哈尼族彝族"
  },
  {
    "code": "532530",
    "name": "金平苗族瑶族傣族自治县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 金平苗族瑶族傣族自治县",
    "rank": 3,
    "normalizedName": "金平苗族瑶族傣族自治",
    "normalizedValue": "云南红河哈尼族彝族金平苗族瑶族傣族自治",
    "normalizedSearchText": "云南红河哈尼族彝族金平苗族瑶族傣族自治金平苗族瑶族傣族自治云南红河哈尼族彝族"
  },
  {
    "code": "532531",
    "name": "绿春县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 绿春县",
    "rank": 3,
    "normalizedName": "绿春",
    "normalizedValue": "云南红河哈尼族彝族绿春",
    "normalizedSearchText": "云南红河哈尼族彝族绿春绿春云南红河哈尼族彝族"
  },
  {
    "code": "532532",
    "name": "河口瑶族自治县",
    "detail": "云南省 / 红河哈尼族彝族自治州",
    "value": "云南省 / 红河哈尼族彝族自治州 / 河口瑶族自治县",
    "rank": 3,
    "normalizedName": "河口瑶族自治",
    "normalizedValue": "云南红河哈尼族彝族河口瑶族自治",
    "normalizedSearchText": "云南红河哈尼族彝族河口瑶族自治河口瑶族自治云南红河哈尼族彝族"
  },
  {
    "code": "532600",
    "name": "文山壮族苗族自治州",
    "detail": "云南省",
    "value": "云南省 / 文山壮族苗族自治州",
    "rank": 2,
    "normalizedName": "文山壮族苗族",
    "normalizedValue": "云南文山壮族苗族",
    "normalizedSearchText": "云南文山壮族苗族文山壮族苗族云南"
  },
  {
    "code": "532601",
    "name": "文山市",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 文山市",
    "rank": 3,
    "normalizedName": "文山",
    "normalizedValue": "云南文山壮族苗族文山",
    "normalizedSearchText": "云南文山壮族苗族文山文山云南文山壮族苗族"
  },
  {
    "code": "532622",
    "name": "砚山县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 砚山县",
    "rank": 3,
    "normalizedName": "砚山",
    "normalizedValue": "云南文山壮族苗族砚山",
    "normalizedSearchText": "云南文山壮族苗族砚山砚山云南文山壮族苗族"
  },
  {
    "code": "532623",
    "name": "西畴县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 西畴县",
    "rank": 3,
    "normalizedName": "西畴",
    "normalizedValue": "云南文山壮族苗族西畴",
    "normalizedSearchText": "云南文山壮族苗族西畴西畴云南文山壮族苗族"
  },
  {
    "code": "532624",
    "name": "麻栗坡县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 麻栗坡县",
    "rank": 3,
    "normalizedName": "麻栗坡",
    "normalizedValue": "云南文山壮族苗族麻栗坡",
    "normalizedSearchText": "云南文山壮族苗族麻栗坡麻栗坡云南文山壮族苗族"
  },
  {
    "code": "532625",
    "name": "马关县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 马关县",
    "rank": 3,
    "normalizedName": "马关",
    "normalizedValue": "云南文山壮族苗族马关",
    "normalizedSearchText": "云南文山壮族苗族马关马关云南文山壮族苗族"
  },
  {
    "code": "532626",
    "name": "丘北县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 丘北县",
    "rank": 3,
    "normalizedName": "丘北",
    "normalizedValue": "云南文山壮族苗族丘北",
    "normalizedSearchText": "云南文山壮族苗族丘北丘北云南文山壮族苗族"
  },
  {
    "code": "532627",
    "name": "广南县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 广南县",
    "rank": 3,
    "normalizedName": "广南",
    "normalizedValue": "云南文山壮族苗族广南",
    "normalizedSearchText": "云南文山壮族苗族广南广南云南文山壮族苗族"
  },
  {
    "code": "532628",
    "name": "富宁县",
    "detail": "云南省 / 文山壮族苗族自治州",
    "value": "云南省 / 文山壮族苗族自治州 / 富宁县",
    "rank": 3,
    "normalizedName": "富宁",
    "normalizedValue": "云南文山壮族苗族富宁",
    "normalizedSearchText": "云南文山壮族苗族富宁富宁云南文山壮族苗族"
  },
  {
    "code": "532800",
    "name": "西双版纳傣族自治州",
    "detail": "云南省",
    "value": "云南省 / 西双版纳傣族自治州",
    "rank": 2,
    "normalizedName": "西双版纳傣族",
    "normalizedValue": "云南西双版纳傣族",
    "normalizedSearchText": "云南西双版纳傣族西双版纳傣族云南"
  },
  {
    "code": "532801",
    "name": "景洪市",
    "detail": "云南省 / 西双版纳傣族自治州",
    "value": "云南省 / 西双版纳傣族自治州 / 景洪市",
    "rank": 3,
    "normalizedName": "景洪",
    "normalizedValue": "云南西双版纳傣族景洪",
    "normalizedSearchText": "云南西双版纳傣族景洪景洪云南西双版纳傣族"
  },
  {
    "code": "532822",
    "name": "勐海县",
    "detail": "云南省 / 西双版纳傣族自治州",
    "value": "云南省 / 西双版纳傣族自治州 / 勐海县",
    "rank": 3,
    "normalizedName": "勐海",
    "normalizedValue": "云南西双版纳傣族勐海",
    "normalizedSearchText": "云南西双版纳傣族勐海勐海云南西双版纳傣族"
  },
  {
    "code": "532823",
    "name": "勐腊县",
    "detail": "云南省 / 西双版纳傣族自治州",
    "value": "云南省 / 西双版纳傣族自治州 / 勐腊县",
    "rank": 3,
    "normalizedName": "勐腊",
    "normalizedValue": "云南西双版纳傣族勐腊",
    "normalizedSearchText": "云南西双版纳傣族勐腊勐腊云南西双版纳傣族"
  },
  {
    "code": "532900",
    "name": "大理白族自治州",
    "detail": "云南省",
    "value": "云南省 / 大理白族自治州",
    "rank": 2,
    "normalizedName": "大理白族",
    "normalizedValue": "云南大理白族",
    "normalizedSearchText": "云南大理白族大理白族云南"
  },
  {
    "code": "532901",
    "name": "大理市",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 大理市",
    "rank": 3,
    "normalizedName": "大理",
    "normalizedValue": "云南大理白族大理",
    "normalizedSearchText": "云南大理白族大理大理云南大理白族"
  },
  {
    "code": "532922",
    "name": "漾濞彝族自治县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 漾濞彝族自治县",
    "rank": 3,
    "normalizedName": "漾濞彝族自治",
    "normalizedValue": "云南大理白族漾濞彝族自治",
    "normalizedSearchText": "云南大理白族漾濞彝族自治漾濞彝族自治云南大理白族"
  },
  {
    "code": "532923",
    "name": "祥云县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 祥云县",
    "rank": 3,
    "normalizedName": "祥云",
    "normalizedValue": "云南大理白族祥云",
    "normalizedSearchText": "云南大理白族祥云祥云云南大理白族"
  },
  {
    "code": "532924",
    "name": "宾川县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 宾川县",
    "rank": 3,
    "normalizedName": "宾川",
    "normalizedValue": "云南大理白族宾川",
    "normalizedSearchText": "云南大理白族宾川宾川云南大理白族"
  },
  {
    "code": "532925",
    "name": "弥渡县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 弥渡县",
    "rank": 3,
    "normalizedName": "弥渡",
    "normalizedValue": "云南大理白族弥渡",
    "normalizedSearchText": "云南大理白族弥渡弥渡云南大理白族"
  },
  {
    "code": "532926",
    "name": "南涧彝族自治县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 南涧彝族自治县",
    "rank": 3,
    "normalizedName": "南涧彝族自治",
    "normalizedValue": "云南大理白族南涧彝族自治",
    "normalizedSearchText": "云南大理白族南涧彝族自治南涧彝族自治云南大理白族"
  },
  {
    "code": "532927",
    "name": "巍山彝族回族自治县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 巍山彝族回族自治县",
    "rank": 3,
    "normalizedName": "巍山彝族回族自治",
    "normalizedValue": "云南大理白族巍山彝族回族自治",
    "normalizedSearchText": "云南大理白族巍山彝族回族自治巍山彝族回族自治云南大理白族"
  },
  {
    "code": "532928",
    "name": "永平县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 永平县",
    "rank": 3,
    "normalizedName": "永平",
    "normalizedValue": "云南大理白族永平",
    "normalizedSearchText": "云南大理白族永平永平云南大理白族"
  },
  {
    "code": "532929",
    "name": "云龙县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 云龙县",
    "rank": 3,
    "normalizedName": "云龙",
    "normalizedValue": "云南大理白族云龙",
    "normalizedSearchText": "云南大理白族云龙云龙云南大理白族"
  },
  {
    "code": "532930",
    "name": "洱源县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 洱源县",
    "rank": 3,
    "normalizedName": "洱源",
    "normalizedValue": "云南大理白族洱源",
    "normalizedSearchText": "云南大理白族洱源洱源云南大理白族"
  },
  {
    "code": "532931",
    "name": "剑川县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 剑川县",
    "rank": 3,
    "normalizedName": "剑川",
    "normalizedValue": "云南大理白族剑川",
    "normalizedSearchText": "云南大理白族剑川剑川云南大理白族"
  },
  {
    "code": "532932",
    "name": "鹤庆县",
    "detail": "云南省 / 大理白族自治州",
    "value": "云南省 / 大理白族自治州 / 鹤庆县",
    "rank": 3,
    "normalizedName": "鹤庆",
    "normalizedValue": "云南大理白族鹤庆",
    "normalizedSearchText": "云南大理白族鹤庆鹤庆云南大理白族"
  },
  {
    "code": "533100",
    "name": "德宏傣族景颇族自治州",
    "detail": "云南省",
    "value": "云南省 / 德宏傣族景颇族自治州",
    "rank": 2,
    "normalizedName": "德宏傣族景颇族",
    "normalizedValue": "云南德宏傣族景颇族",
    "normalizedSearchText": "云南德宏傣族景颇族德宏傣族景颇族云南"
  },
  {
    "code": "533102",
    "name": "瑞丽市",
    "detail": "云南省 / 德宏傣族景颇族自治州",
    "value": "云南省 / 德宏傣族景颇族自治州 / 瑞丽市",
    "rank": 3,
    "normalizedName": "瑞丽",
    "normalizedValue": "云南德宏傣族景颇族瑞丽",
    "normalizedSearchText": "云南德宏傣族景颇族瑞丽瑞丽云南德宏傣族景颇族"
  },
  {
    "code": "533103",
    "name": "芒市",
    "detail": "云南省 / 德宏傣族景颇族自治州",
    "value": "云南省 / 德宏傣族景颇族自治州 / 芒市",
    "rank": 3,
    "normalizedName": "芒",
    "normalizedValue": "云南德宏傣族景颇族芒",
    "normalizedSearchText": "云南德宏傣族景颇族芒芒云南德宏傣族景颇族"
  },
  {
    "code": "533122",
    "name": "梁河县",
    "detail": "云南省 / 德宏傣族景颇族自治州",
    "value": "云南省 / 德宏傣族景颇族自治州 / 梁河县",
    "rank": 3,
    "normalizedName": "梁河",
    "normalizedValue": "云南德宏傣族景颇族梁河",
    "normalizedSearchText": "云南德宏傣族景颇族梁河梁河云南德宏傣族景颇族"
  },
  {
    "code": "533123",
    "name": "盈江县",
    "detail": "云南省 / 德宏傣族景颇族自治州",
    "value": "云南省 / 德宏傣族景颇族自治州 / 盈江县",
    "rank": 3,
    "normalizedName": "盈江",
    "normalizedValue": "云南德宏傣族景颇族盈江",
    "normalizedSearchText": "云南德宏傣族景颇族盈江盈江云南德宏傣族景颇族"
  },
  {
    "code": "533124",
    "name": "陇川县",
    "detail": "云南省 / 德宏傣族景颇族自治州",
    "value": "云南省 / 德宏傣族景颇族自治州 / 陇川县",
    "rank": 3,
    "normalizedName": "陇川",
    "normalizedValue": "云南德宏傣族景颇族陇川",
    "normalizedSearchText": "云南德宏傣族景颇族陇川陇川云南德宏傣族景颇族"
  },
  {
    "code": "533300",
    "name": "怒江傈僳族自治州",
    "detail": "云南省",
    "value": "云南省 / 怒江傈僳族自治州",
    "rank": 2,
    "normalizedName": "怒江傈僳族",
    "normalizedValue": "云南怒江傈僳族",
    "normalizedSearchText": "云南怒江傈僳族怒江傈僳族云南"
  },
  {
    "code": "533301",
    "name": "泸水市",
    "detail": "云南省 / 怒江傈僳族自治州",
    "value": "云南省 / 怒江傈僳族自治州 / 泸水市",
    "rank": 3,
    "normalizedName": "泸水",
    "normalizedValue": "云南怒江傈僳族泸水",
    "normalizedSearchText": "云南怒江傈僳族泸水泸水云南怒江傈僳族"
  },
  {
    "code": "533323",
    "name": "福贡县",
    "detail": "云南省 / 怒江傈僳族自治州",
    "value": "云南省 / 怒江傈僳族自治州 / 福贡县",
    "rank": 3,
    "normalizedName": "福贡",
    "normalizedValue": "云南怒江傈僳族福贡",
    "normalizedSearchText": "云南怒江傈僳族福贡福贡云南怒江傈僳族"
  },
  {
    "code": "533324",
    "name": "贡山独龙族怒族自治县",
    "detail": "云南省 / 怒江傈僳族自治州",
    "value": "云南省 / 怒江傈僳族自治州 / 贡山独龙族怒族自治县",
    "rank": 3,
    "normalizedName": "贡山独龙族怒族自治",
    "normalizedValue": "云南怒江傈僳族贡山独龙族怒族自治",
    "normalizedSearchText": "云南怒江傈僳族贡山独龙族怒族自治贡山独龙族怒族自治云南怒江傈僳族"
  },
  {
    "code": "533325",
    "name": "兰坪白族普米族自治县",
    "detail": "云南省 / 怒江傈僳族自治州",
    "value": "云南省 / 怒江傈僳族自治州 / 兰坪白族普米族自治县",
    "rank": 3,
    "normalizedName": "兰坪白族普米族自治",
    "normalizedValue": "云南怒江傈僳族兰坪白族普米族自治",
    "normalizedSearchText": "云南怒江傈僳族兰坪白族普米族自治兰坪白族普米族自治云南怒江傈僳族"
  },
  {
    "code": "533400",
    "name": "迪庆藏族自治州",
    "detail": "云南省",
    "value": "云南省 / 迪庆藏族自治州",
    "rank": 2,
    "normalizedName": "迪庆藏族",
    "normalizedValue": "云南迪庆藏族",
    "normalizedSearchText": "云南迪庆藏族迪庆藏族云南"
  },
  {
    "code": "533401",
    "name": "香格里拉市",
    "detail": "云南省 / 迪庆藏族自治州",
    "value": "云南省 / 迪庆藏族自治州 / 香格里拉市",
    "rank": 3,
    "normalizedName": "香格里拉",
    "normalizedValue": "云南迪庆藏族香格里拉",
    "normalizedSearchText": "云南迪庆藏族香格里拉香格里拉云南迪庆藏族"
  },
  {
    "code": "533422",
    "name": "德钦县",
    "detail": "云南省 / 迪庆藏族自治州",
    "value": "云南省 / 迪庆藏族自治州 / 德钦县",
    "rank": 3,
    "normalizedName": "德钦",
    "normalizedValue": "云南迪庆藏族德钦",
    "normalizedSearchText": "云南迪庆藏族德钦德钦云南迪庆藏族"
  },
  {
    "code": "533423",
    "name": "维西傈僳族自治县",
    "detail": "云南省 / 迪庆藏族自治州",
    "value": "云南省 / 迪庆藏族自治州 / 维西傈僳族自治县",
    "rank": 3,
    "normalizedName": "维西傈僳族自治",
    "normalizedValue": "云南迪庆藏族维西傈僳族自治",
    "normalizedSearchText": "云南迪庆藏族维西傈僳族自治维西傈僳族自治云南迪庆藏族"
  },
  {
    "code": "540000",
    "name": "西藏自治区",
    "detail": "?????",
    "value": "西藏自治区",
    "rank": 1,
    "normalizedName": "西藏",
    "normalizedValue": "西藏",
    "normalizedSearchText": "西藏西藏"
  },
  {
    "code": "540100",
    "name": "拉萨市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 拉萨市",
    "rank": 2,
    "normalizedName": "拉萨",
    "normalizedValue": "西藏拉萨",
    "normalizedSearchText": "西藏拉萨拉萨西藏"
  },
  {
    "code": "540102",
    "name": "城关区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 城关区",
    "rank": 3,
    "normalizedName": "城关",
    "normalizedValue": "西藏拉萨城关",
    "normalizedSearchText": "西藏拉萨城关城关西藏拉萨"
  },
  {
    "code": "540103",
    "name": "堆龙德庆区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 堆龙德庆区",
    "rank": 3,
    "normalizedName": "堆龙德庆",
    "normalizedValue": "西藏拉萨堆龙德庆",
    "normalizedSearchText": "西藏拉萨堆龙德庆堆龙德庆西藏拉萨"
  },
  {
    "code": "540104",
    "name": "达孜区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 达孜区",
    "rank": 3,
    "normalizedName": "达孜",
    "normalizedValue": "西藏拉萨达孜",
    "normalizedSearchText": "西藏拉萨达孜达孜西藏拉萨"
  },
  {
    "code": "540121",
    "name": "林周县",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 林周县",
    "rank": 3,
    "normalizedName": "林周",
    "normalizedValue": "西藏拉萨林周",
    "normalizedSearchText": "西藏拉萨林周林周西藏拉萨"
  },
  {
    "code": "540122",
    "name": "当雄县",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 当雄县",
    "rank": 3,
    "normalizedName": "当雄",
    "normalizedValue": "西藏拉萨当雄",
    "normalizedSearchText": "西藏拉萨当雄当雄西藏拉萨"
  },
  {
    "code": "540123",
    "name": "尼木县",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 尼木县",
    "rank": 3,
    "normalizedName": "尼木",
    "normalizedValue": "西藏拉萨尼木",
    "normalizedSearchText": "西藏拉萨尼木尼木西藏拉萨"
  },
  {
    "code": "540124",
    "name": "曲水县",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 曲水县",
    "rank": 3,
    "normalizedName": "曲水",
    "normalizedValue": "西藏拉萨曲水",
    "normalizedSearchText": "西藏拉萨曲水曲水西藏拉萨"
  },
  {
    "code": "540127",
    "name": "墨竹工卡县",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 墨竹工卡县",
    "rank": 3,
    "normalizedName": "墨竹工卡",
    "normalizedValue": "西藏拉萨墨竹工卡",
    "normalizedSearchText": "西藏拉萨墨竹工卡墨竹工卡西藏拉萨"
  },
  {
    "code": "540101",
    "name": "市辖区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "西藏拉萨辖",
    "normalizedSearchText": "西藏拉萨辖辖西藏拉萨"
  },
  {
    "code": "540171",
    "name": "格尔木藏青工业园区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 格尔木藏青工业园区",
    "rank": 3,
    "normalizedName": "格尔木藏青工业园",
    "normalizedValue": "西藏拉萨格尔木藏青工业园",
    "normalizedSearchText": "西藏拉萨格尔木藏青工业园格尔木藏青工业园西藏拉萨"
  },
  {
    "code": "540172",
    "name": "拉萨经济技术开发区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 拉萨经济技术开发区",
    "rank": 3,
    "normalizedName": "拉萨经济技术开发",
    "normalizedValue": "西藏拉萨拉萨经济技术开发",
    "normalizedSearchText": "西藏拉萨拉萨经济技术开发拉萨经济技术开发西藏拉萨"
  },
  {
    "code": "540173",
    "name": "西藏文化旅游创意园区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 西藏文化旅游创意园区",
    "rank": 3,
    "normalizedName": "西藏文化旅游创意园",
    "normalizedValue": "西藏拉萨西藏文化旅游创意园",
    "normalizedSearchText": "西藏拉萨西藏文化旅游创意园西藏文化旅游创意园西藏拉萨"
  },
  {
    "code": "540174",
    "name": "达孜工业园区",
    "detail": "西藏自治区 / 拉萨市",
    "value": "西藏自治区 / 拉萨市 / 达孜工业园区",
    "rank": 3,
    "normalizedName": "达孜工业园",
    "normalizedValue": "西藏拉萨达孜工业园",
    "normalizedSearchText": "西藏拉萨达孜工业园达孜工业园西藏拉萨"
  },
  {
    "code": "540200",
    "name": "日喀则市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 日喀则市",
    "rank": 2,
    "normalizedName": "日喀则",
    "normalizedValue": "西藏日喀则",
    "normalizedSearchText": "西藏日喀则日喀则西藏"
  },
  {
    "code": "540202",
    "name": "桑珠孜区",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 桑珠孜区",
    "rank": 3,
    "normalizedName": "桑珠孜",
    "normalizedValue": "西藏日喀则桑珠孜",
    "normalizedSearchText": "西藏日喀则桑珠孜桑珠孜西藏日喀则"
  },
  {
    "code": "540221",
    "name": "南木林县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 南木林县",
    "rank": 3,
    "normalizedName": "南木林",
    "normalizedValue": "西藏日喀则南木林",
    "normalizedSearchText": "西藏日喀则南木林南木林西藏日喀则"
  },
  {
    "code": "540222",
    "name": "江孜县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 江孜县",
    "rank": 3,
    "normalizedName": "江孜",
    "normalizedValue": "西藏日喀则江孜",
    "normalizedSearchText": "西藏日喀则江孜江孜西藏日喀则"
  },
  {
    "code": "540223",
    "name": "定日县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 定日县",
    "rank": 3,
    "normalizedName": "定日",
    "normalizedValue": "西藏日喀则定日",
    "normalizedSearchText": "西藏日喀则定日定日西藏日喀则"
  },
  {
    "code": "540224",
    "name": "萨迦县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 萨迦县",
    "rank": 3,
    "normalizedName": "萨迦",
    "normalizedValue": "西藏日喀则萨迦",
    "normalizedSearchText": "西藏日喀则萨迦萨迦西藏日喀则"
  },
  {
    "code": "540225",
    "name": "拉孜县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 拉孜县",
    "rank": 3,
    "normalizedName": "拉孜",
    "normalizedValue": "西藏日喀则拉孜",
    "normalizedSearchText": "西藏日喀则拉孜拉孜西藏日喀则"
  },
  {
    "code": "540226",
    "name": "昂仁县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 昂仁县",
    "rank": 3,
    "normalizedName": "昂仁",
    "normalizedValue": "西藏日喀则昂仁",
    "normalizedSearchText": "西藏日喀则昂仁昂仁西藏日喀则"
  },
  {
    "code": "540227",
    "name": "谢通门县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 谢通门县",
    "rank": 3,
    "normalizedName": "谢通门",
    "normalizedValue": "西藏日喀则谢通门",
    "normalizedSearchText": "西藏日喀则谢通门谢通门西藏日喀则"
  },
  {
    "code": "540228",
    "name": "白朗县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 白朗县",
    "rank": 3,
    "normalizedName": "白朗",
    "normalizedValue": "西藏日喀则白朗",
    "normalizedSearchText": "西藏日喀则白朗白朗西藏日喀则"
  },
  {
    "code": "540229",
    "name": "仁布县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 仁布县",
    "rank": 3,
    "normalizedName": "仁布",
    "normalizedValue": "西藏日喀则仁布",
    "normalizedSearchText": "西藏日喀则仁布仁布西藏日喀则"
  },
  {
    "code": "540230",
    "name": "康马县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 康马县",
    "rank": 3,
    "normalizedName": "康马",
    "normalizedValue": "西藏日喀则康马",
    "normalizedSearchText": "西藏日喀则康马康马西藏日喀则"
  },
  {
    "code": "540231",
    "name": "定结县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 定结县",
    "rank": 3,
    "normalizedName": "定结",
    "normalizedValue": "西藏日喀则定结",
    "normalizedSearchText": "西藏日喀则定结定结西藏日喀则"
  },
  {
    "code": "540232",
    "name": "仲巴县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 仲巴县",
    "rank": 3,
    "normalizedName": "仲巴",
    "normalizedValue": "西藏日喀则仲巴",
    "normalizedSearchText": "西藏日喀则仲巴仲巴西藏日喀则"
  },
  {
    "code": "540233",
    "name": "亚东县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 亚东县",
    "rank": 3,
    "normalizedName": "亚东",
    "normalizedValue": "西藏日喀则亚东",
    "normalizedSearchText": "西藏日喀则亚东亚东西藏日喀则"
  },
  {
    "code": "540234",
    "name": "吉隆县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 吉隆县",
    "rank": 3,
    "normalizedName": "吉隆",
    "normalizedValue": "西藏日喀则吉隆",
    "normalizedSearchText": "西藏日喀则吉隆吉隆西藏日喀则"
  },
  {
    "code": "540235",
    "name": "聂拉木县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 聂拉木县",
    "rank": 3,
    "normalizedName": "聂拉木",
    "normalizedValue": "西藏日喀则聂拉木",
    "normalizedSearchText": "西藏日喀则聂拉木聂拉木西藏日喀则"
  },
  {
    "code": "540236",
    "name": "萨嘎县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 萨嘎县",
    "rank": 3,
    "normalizedName": "萨嘎",
    "normalizedValue": "西藏日喀则萨嘎",
    "normalizedSearchText": "西藏日喀则萨嘎萨嘎西藏日喀则"
  },
  {
    "code": "540237",
    "name": "岗巴县",
    "detail": "西藏自治区 / 日喀则市",
    "value": "西藏自治区 / 日喀则市 / 岗巴县",
    "rank": 3,
    "normalizedName": "岗巴",
    "normalizedValue": "西藏日喀则岗巴",
    "normalizedSearchText": "西藏日喀则岗巴岗巴西藏日喀则"
  },
  {
    "code": "540300",
    "name": "昌都市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 昌都市",
    "rank": 2,
    "normalizedName": "昌都",
    "normalizedValue": "西藏昌都",
    "normalizedSearchText": "西藏昌都昌都西藏"
  },
  {
    "code": "540302",
    "name": "卡若区",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 卡若区",
    "rank": 3,
    "normalizedName": "卡若",
    "normalizedValue": "西藏昌都卡若",
    "normalizedSearchText": "西藏昌都卡若卡若西藏昌都"
  },
  {
    "code": "540321",
    "name": "江达县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 江达县",
    "rank": 3,
    "normalizedName": "江达",
    "normalizedValue": "西藏昌都江达",
    "normalizedSearchText": "西藏昌都江达江达西藏昌都"
  },
  {
    "code": "540322",
    "name": "贡觉县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 贡觉县",
    "rank": 3,
    "normalizedName": "贡觉",
    "normalizedValue": "西藏昌都贡觉",
    "normalizedSearchText": "西藏昌都贡觉贡觉西藏昌都"
  },
  {
    "code": "540323",
    "name": "类乌齐县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 类乌齐县",
    "rank": 3,
    "normalizedName": "类乌齐",
    "normalizedValue": "西藏昌都类乌齐",
    "normalizedSearchText": "西藏昌都类乌齐类乌齐西藏昌都"
  },
  {
    "code": "540324",
    "name": "丁青县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 丁青县",
    "rank": 3,
    "normalizedName": "丁青",
    "normalizedValue": "西藏昌都丁青",
    "normalizedSearchText": "西藏昌都丁青丁青西藏昌都"
  },
  {
    "code": "540325",
    "name": "察雅县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 察雅县",
    "rank": 3,
    "normalizedName": "察雅",
    "normalizedValue": "西藏昌都察雅",
    "normalizedSearchText": "西藏昌都察雅察雅西藏昌都"
  },
  {
    "code": "540326",
    "name": "八宿县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 八宿县",
    "rank": 3,
    "normalizedName": "八宿",
    "normalizedValue": "西藏昌都八宿",
    "normalizedSearchText": "西藏昌都八宿八宿西藏昌都"
  },
  {
    "code": "540327",
    "name": "左贡县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 左贡县",
    "rank": 3,
    "normalizedName": "左贡",
    "normalizedValue": "西藏昌都左贡",
    "normalizedSearchText": "西藏昌都左贡左贡西藏昌都"
  },
  {
    "code": "540328",
    "name": "芒康县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 芒康县",
    "rank": 3,
    "normalizedName": "芒康",
    "normalizedValue": "西藏昌都芒康",
    "normalizedSearchText": "西藏昌都芒康芒康西藏昌都"
  },
  {
    "code": "540329",
    "name": "洛隆县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 洛隆县",
    "rank": 3,
    "normalizedName": "洛隆",
    "normalizedValue": "西藏昌都洛隆",
    "normalizedSearchText": "西藏昌都洛隆洛隆西藏昌都"
  },
  {
    "code": "540330",
    "name": "边坝县",
    "detail": "西藏自治区 / 昌都市",
    "value": "西藏自治区 / 昌都市 / 边坝县",
    "rank": 3,
    "normalizedName": "边坝",
    "normalizedValue": "西藏昌都边坝",
    "normalizedSearchText": "西藏昌都边坝边坝西藏昌都"
  },
  {
    "code": "540400",
    "name": "林芝市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 林芝市",
    "rank": 2,
    "normalizedName": "林芝",
    "normalizedValue": "西藏林芝",
    "normalizedSearchText": "西藏林芝林芝西藏"
  },
  {
    "code": "540402",
    "name": "巴宜区",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 巴宜区",
    "rank": 3,
    "normalizedName": "巴宜",
    "normalizedValue": "西藏林芝巴宜",
    "normalizedSearchText": "西藏林芝巴宜巴宜西藏林芝"
  },
  {
    "code": "540421",
    "name": "工布江达县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 工布江达县",
    "rank": 3,
    "normalizedName": "工布江达",
    "normalizedValue": "西藏林芝工布江达",
    "normalizedSearchText": "西藏林芝工布江达工布江达西藏林芝"
  },
  {
    "code": "540422",
    "name": "米林县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 米林县",
    "rank": 3,
    "normalizedName": "米林",
    "normalizedValue": "西藏林芝米林",
    "normalizedSearchText": "西藏林芝米林米林西藏林芝"
  },
  {
    "code": "540423",
    "name": "墨脱县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 墨脱县",
    "rank": 3,
    "normalizedName": "墨脱",
    "normalizedValue": "西藏林芝墨脱",
    "normalizedSearchText": "西藏林芝墨脱墨脱西藏林芝"
  },
  {
    "code": "540424",
    "name": "波密县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 波密县",
    "rank": 3,
    "normalizedName": "波密",
    "normalizedValue": "西藏林芝波密",
    "normalizedSearchText": "西藏林芝波密波密西藏林芝"
  },
  {
    "code": "540425",
    "name": "察隅县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 察隅县",
    "rank": 3,
    "normalizedName": "察隅",
    "normalizedValue": "西藏林芝察隅",
    "normalizedSearchText": "西藏林芝察隅察隅西藏林芝"
  },
  {
    "code": "540426",
    "name": "朗县",
    "detail": "西藏自治区 / 林芝市",
    "value": "西藏自治区 / 林芝市 / 朗县",
    "rank": 3,
    "normalizedName": "朗",
    "normalizedValue": "西藏林芝朗",
    "normalizedSearchText": "西藏林芝朗朗西藏林芝"
  },
  {
    "code": "540500",
    "name": "山南市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 山南市",
    "rank": 2,
    "normalizedName": "山南",
    "normalizedValue": "西藏山南",
    "normalizedSearchText": "西藏山南山南西藏"
  },
  {
    "code": "540502",
    "name": "乃东区",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 乃东区",
    "rank": 3,
    "normalizedName": "乃东",
    "normalizedValue": "西藏山南乃东",
    "normalizedSearchText": "西藏山南乃东乃东西藏山南"
  },
  {
    "code": "540521",
    "name": "扎囊县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 扎囊县",
    "rank": 3,
    "normalizedName": "扎囊",
    "normalizedValue": "西藏山南扎囊",
    "normalizedSearchText": "西藏山南扎囊扎囊西藏山南"
  },
  {
    "code": "540522",
    "name": "贡嘎县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 贡嘎县",
    "rank": 3,
    "normalizedName": "贡嘎",
    "normalizedValue": "西藏山南贡嘎",
    "normalizedSearchText": "西藏山南贡嘎贡嘎西藏山南"
  },
  {
    "code": "540523",
    "name": "桑日县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 桑日县",
    "rank": 3,
    "normalizedName": "桑日",
    "normalizedValue": "西藏山南桑日",
    "normalizedSearchText": "西藏山南桑日桑日西藏山南"
  },
  {
    "code": "540524",
    "name": "琼结县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 琼结县",
    "rank": 3,
    "normalizedName": "琼结",
    "normalizedValue": "西藏山南琼结",
    "normalizedSearchText": "西藏山南琼结琼结西藏山南"
  },
  {
    "code": "540525",
    "name": "曲松县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 曲松县",
    "rank": 3,
    "normalizedName": "曲松",
    "normalizedValue": "西藏山南曲松",
    "normalizedSearchText": "西藏山南曲松曲松西藏山南"
  },
  {
    "code": "540526",
    "name": "措美县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 措美县",
    "rank": 3,
    "normalizedName": "措美",
    "normalizedValue": "西藏山南措美",
    "normalizedSearchText": "西藏山南措美措美西藏山南"
  },
  {
    "code": "540527",
    "name": "洛扎县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 洛扎县",
    "rank": 3,
    "normalizedName": "洛扎",
    "normalizedValue": "西藏山南洛扎",
    "normalizedSearchText": "西藏山南洛扎洛扎西藏山南"
  },
  {
    "code": "540528",
    "name": "加查县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 加查县",
    "rank": 3,
    "normalizedName": "加查",
    "normalizedValue": "西藏山南加查",
    "normalizedSearchText": "西藏山南加查加查西藏山南"
  },
  {
    "code": "540529",
    "name": "隆子县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 隆子县",
    "rank": 3,
    "normalizedName": "隆子",
    "normalizedValue": "西藏山南隆子",
    "normalizedSearchText": "西藏山南隆子隆子西藏山南"
  },
  {
    "code": "540530",
    "name": "错那县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 错那县",
    "rank": 3,
    "normalizedName": "错那",
    "normalizedValue": "西藏山南错那",
    "normalizedSearchText": "西藏山南错那错那西藏山南"
  },
  {
    "code": "540531",
    "name": "浪卡子县",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 浪卡子县",
    "rank": 3,
    "normalizedName": "浪卡子",
    "normalizedValue": "西藏山南浪卡子",
    "normalizedSearchText": "西藏山南浪卡子浪卡子西藏山南"
  },
  {
    "code": "540501",
    "name": "市辖区",
    "detail": "西藏自治区 / 山南市",
    "value": "西藏自治区 / 山南市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "西藏山南辖",
    "normalizedSearchText": "西藏山南辖辖西藏山南"
  },
  {
    "code": "540600",
    "name": "那曲市",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 那曲市",
    "rank": 2,
    "normalizedName": "那曲",
    "normalizedValue": "西藏那曲",
    "normalizedSearchText": "西藏那曲那曲西藏"
  },
  {
    "code": "540602",
    "name": "色尼区",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 色尼区",
    "rank": 3,
    "normalizedName": "色尼",
    "normalizedValue": "西藏那曲色尼",
    "normalizedSearchText": "西藏那曲色尼色尼西藏那曲"
  },
  {
    "code": "540621",
    "name": "嘉黎县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 嘉黎县",
    "rank": 3,
    "normalizedName": "嘉黎",
    "normalizedValue": "西藏那曲嘉黎",
    "normalizedSearchText": "西藏那曲嘉黎嘉黎西藏那曲"
  },
  {
    "code": "540622",
    "name": "比如县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 比如县",
    "rank": 3,
    "normalizedName": "比如",
    "normalizedValue": "西藏那曲比如",
    "normalizedSearchText": "西藏那曲比如比如西藏那曲"
  },
  {
    "code": "540623",
    "name": "聂荣县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 聂荣县",
    "rank": 3,
    "normalizedName": "聂荣",
    "normalizedValue": "西藏那曲聂荣",
    "normalizedSearchText": "西藏那曲聂荣聂荣西藏那曲"
  },
  {
    "code": "540624",
    "name": "安多县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 安多县",
    "rank": 3,
    "normalizedName": "安多",
    "normalizedValue": "西藏那曲安多",
    "normalizedSearchText": "西藏那曲安多安多西藏那曲"
  },
  {
    "code": "540625",
    "name": "申扎县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 申扎县",
    "rank": 3,
    "normalizedName": "申扎",
    "normalizedValue": "西藏那曲申扎",
    "normalizedSearchText": "西藏那曲申扎申扎西藏那曲"
  },
  {
    "code": "540626",
    "name": "索县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 索县",
    "rank": 3,
    "normalizedName": "索",
    "normalizedValue": "西藏那曲索",
    "normalizedSearchText": "西藏那曲索索西藏那曲"
  },
  {
    "code": "540627",
    "name": "班戈县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 班戈县",
    "rank": 3,
    "normalizedName": "班戈",
    "normalizedValue": "西藏那曲班戈",
    "normalizedSearchText": "西藏那曲班戈班戈西藏那曲"
  },
  {
    "code": "540628",
    "name": "巴青县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 巴青县",
    "rank": 3,
    "normalizedName": "巴青",
    "normalizedValue": "西藏那曲巴青",
    "normalizedSearchText": "西藏那曲巴青巴青西藏那曲"
  },
  {
    "code": "540629",
    "name": "尼玛县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 尼玛县",
    "rank": 3,
    "normalizedName": "尼玛",
    "normalizedValue": "西藏那曲尼玛",
    "normalizedSearchText": "西藏那曲尼玛尼玛西藏那曲"
  },
  {
    "code": "540630",
    "name": "双湖县",
    "detail": "西藏自治区 / 那曲市",
    "value": "西藏自治区 / 那曲市 / 双湖县",
    "rank": 3,
    "normalizedName": "双湖",
    "normalizedValue": "西藏那曲双湖",
    "normalizedSearchText": "西藏那曲双湖双湖西藏那曲"
  },
  {
    "code": "542500",
    "name": "阿里地区",
    "detail": "西藏自治区",
    "value": "西藏自治区 / 阿里地区",
    "rank": 2,
    "normalizedName": "阿里",
    "normalizedValue": "西藏阿里",
    "normalizedSearchText": "西藏阿里阿里西藏"
  },
  {
    "code": "542521",
    "name": "普兰县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 普兰县",
    "rank": 3,
    "normalizedName": "普兰",
    "normalizedValue": "西藏阿里普兰",
    "normalizedSearchText": "西藏阿里普兰普兰西藏阿里"
  },
  {
    "code": "542522",
    "name": "札达县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 札达县",
    "rank": 3,
    "normalizedName": "札达",
    "normalizedValue": "西藏阿里札达",
    "normalizedSearchText": "西藏阿里札达札达西藏阿里"
  },
  {
    "code": "542523",
    "name": "噶尔县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 噶尔县",
    "rank": 3,
    "normalizedName": "噶尔",
    "normalizedValue": "西藏阿里噶尔",
    "normalizedSearchText": "西藏阿里噶尔噶尔西藏阿里"
  },
  {
    "code": "542524",
    "name": "日土县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 日土县",
    "rank": 3,
    "normalizedName": "日土",
    "normalizedValue": "西藏阿里日土",
    "normalizedSearchText": "西藏阿里日土日土西藏阿里"
  },
  {
    "code": "542525",
    "name": "革吉县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 革吉县",
    "rank": 3,
    "normalizedName": "革吉",
    "normalizedValue": "西藏阿里革吉",
    "normalizedSearchText": "西藏阿里革吉革吉西藏阿里"
  },
  {
    "code": "542526",
    "name": "改则县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 改则县",
    "rank": 3,
    "normalizedName": "改则",
    "normalizedValue": "西藏阿里改则",
    "normalizedSearchText": "西藏阿里改则改则西藏阿里"
  },
  {
    "code": "542527",
    "name": "措勤县",
    "detail": "西藏自治区 / 阿里地区",
    "value": "西藏自治区 / 阿里地区 / 措勤县",
    "rank": 3,
    "normalizedName": "措勤",
    "normalizedValue": "西藏阿里措勤",
    "normalizedSearchText": "西藏阿里措勤措勤西藏阿里"
  },
  {
    "code": "610000",
    "name": "陕西省",
    "detail": "?????",
    "value": "陕西省",
    "rank": 1,
    "normalizedName": "陕西",
    "normalizedValue": "陕西",
    "normalizedSearchText": "陕西陕西"
  },
  {
    "code": "610100",
    "name": "西安市",
    "detail": "陕西省",
    "value": "陕西省 / 西安市",
    "rank": 2,
    "normalizedName": "西安",
    "normalizedValue": "陕西西安",
    "normalizedSearchText": "陕西西安西安陕西"
  },
  {
    "code": "610102",
    "name": "新城区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 新城区",
    "rank": 3,
    "normalizedName": "新城",
    "normalizedValue": "陕西西安新城",
    "normalizedSearchText": "陕西西安新城新城陕西西安"
  },
  {
    "code": "610103",
    "name": "碑林区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 碑林区",
    "rank": 3,
    "normalizedName": "碑林",
    "normalizedValue": "陕西西安碑林",
    "normalizedSearchText": "陕西西安碑林碑林陕西西安"
  },
  {
    "code": "610104",
    "name": "莲湖区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 莲湖区",
    "rank": 3,
    "normalizedName": "莲湖",
    "normalizedValue": "陕西西安莲湖",
    "normalizedSearchText": "陕西西安莲湖莲湖陕西西安"
  },
  {
    "code": "610111",
    "name": "灞桥区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 灞桥区",
    "rank": 3,
    "normalizedName": "灞桥",
    "normalizedValue": "陕西西安灞桥",
    "normalizedSearchText": "陕西西安灞桥灞桥陕西西安"
  },
  {
    "code": "610112",
    "name": "未央区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 未央区",
    "rank": 3,
    "normalizedName": "未央",
    "normalizedValue": "陕西西安未央",
    "normalizedSearchText": "陕西西安未央未央陕西西安"
  },
  {
    "code": "610113",
    "name": "雁塔区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 雁塔区",
    "rank": 3,
    "normalizedName": "雁塔",
    "normalizedValue": "陕西西安雁塔",
    "normalizedSearchText": "陕西西安雁塔雁塔陕西西安"
  },
  {
    "code": "610114",
    "name": "阎良区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 阎良区",
    "rank": 3,
    "normalizedName": "阎良",
    "normalizedValue": "陕西西安阎良",
    "normalizedSearchText": "陕西西安阎良阎良陕西西安"
  },
  {
    "code": "610115",
    "name": "临潼区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 临潼区",
    "rank": 3,
    "normalizedName": "临潼",
    "normalizedValue": "陕西西安临潼",
    "normalizedSearchText": "陕西西安临潼临潼陕西西安"
  },
  {
    "code": "610116",
    "name": "长安区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 长安区",
    "rank": 3,
    "normalizedName": "长安",
    "normalizedValue": "陕西西安长安",
    "normalizedSearchText": "陕西西安长安长安陕西西安"
  },
  {
    "code": "610117",
    "name": "高陵区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 高陵区",
    "rank": 3,
    "normalizedName": "高陵",
    "normalizedValue": "陕西西安高陵",
    "normalizedSearchText": "陕西西安高陵高陵陕西西安"
  },
  {
    "code": "610118",
    "name": "鄠邑区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 鄠邑区",
    "rank": 3,
    "normalizedName": "鄠邑",
    "normalizedValue": "陕西西安鄠邑",
    "normalizedSearchText": "陕西西安鄠邑鄠邑陕西西安"
  },
  {
    "code": "610122",
    "name": "蓝田县",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 蓝田县",
    "rank": 3,
    "normalizedName": "蓝田",
    "normalizedValue": "陕西西安蓝田",
    "normalizedSearchText": "陕西西安蓝田蓝田陕西西安"
  },
  {
    "code": "610124",
    "name": "周至县",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 周至县",
    "rank": 3,
    "normalizedName": "周至",
    "normalizedValue": "陕西西安周至",
    "normalizedSearchText": "陕西西安周至周至陕西西安"
  },
  {
    "code": "610101",
    "name": "市辖区",
    "detail": "陕西省 / 西安市",
    "value": "陕西省 / 西安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西西安辖",
    "normalizedSearchText": "陕西西安辖辖陕西西安"
  },
  {
    "code": "610200",
    "name": "铜川市",
    "detail": "陕西省",
    "value": "陕西省 / 铜川市",
    "rank": 2,
    "normalizedName": "铜川",
    "normalizedValue": "陕西铜川",
    "normalizedSearchText": "陕西铜川铜川陕西"
  },
  {
    "code": "610202",
    "name": "王益区",
    "detail": "陕西省 / 铜川市",
    "value": "陕西省 / 铜川市 / 王益区",
    "rank": 3,
    "normalizedName": "王益",
    "normalizedValue": "陕西铜川王益",
    "normalizedSearchText": "陕西铜川王益王益陕西铜川"
  },
  {
    "code": "610203",
    "name": "印台区",
    "detail": "陕西省 / 铜川市",
    "value": "陕西省 / 铜川市 / 印台区",
    "rank": 3,
    "normalizedName": "印台",
    "normalizedValue": "陕西铜川印台",
    "normalizedSearchText": "陕西铜川印台印台陕西铜川"
  },
  {
    "code": "610204",
    "name": "耀州区",
    "detail": "陕西省 / 铜川市",
    "value": "陕西省 / 铜川市 / 耀州区",
    "rank": 3,
    "normalizedName": "耀州",
    "normalizedValue": "陕西铜川耀州",
    "normalizedSearchText": "陕西铜川耀州耀州陕西铜川"
  },
  {
    "code": "610222",
    "name": "宜君县",
    "detail": "陕西省 / 铜川市",
    "value": "陕西省 / 铜川市 / 宜君县",
    "rank": 3,
    "normalizedName": "宜君",
    "normalizedValue": "陕西铜川宜君",
    "normalizedSearchText": "陕西铜川宜君宜君陕西铜川"
  },
  {
    "code": "610201",
    "name": "市辖区",
    "detail": "陕西省 / 铜川市",
    "value": "陕西省 / 铜川市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西铜川辖",
    "normalizedSearchText": "陕西铜川辖辖陕西铜川"
  },
  {
    "code": "610300",
    "name": "宝鸡市",
    "detail": "陕西省",
    "value": "陕西省 / 宝鸡市",
    "rank": 2,
    "normalizedName": "宝鸡",
    "normalizedValue": "陕西宝鸡",
    "normalizedSearchText": "陕西宝鸡宝鸡陕西"
  },
  {
    "code": "610302",
    "name": "渭滨区",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 渭滨区",
    "rank": 3,
    "normalizedName": "渭滨",
    "normalizedValue": "陕西宝鸡渭滨",
    "normalizedSearchText": "陕西宝鸡渭滨渭滨陕西宝鸡"
  },
  {
    "code": "610303",
    "name": "金台区",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 金台区",
    "rank": 3,
    "normalizedName": "金台",
    "normalizedValue": "陕西宝鸡金台",
    "normalizedSearchText": "陕西宝鸡金台金台陕西宝鸡"
  },
  {
    "code": "610304",
    "name": "陈仓区",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 陈仓区",
    "rank": 3,
    "normalizedName": "陈仓",
    "normalizedValue": "陕西宝鸡陈仓",
    "normalizedSearchText": "陕西宝鸡陈仓陈仓陕西宝鸡"
  },
  {
    "code": "610322",
    "name": "凤翔县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 凤翔县",
    "rank": 3,
    "normalizedName": "凤翔",
    "normalizedValue": "陕西宝鸡凤翔",
    "normalizedSearchText": "陕西宝鸡凤翔凤翔陕西宝鸡"
  },
  {
    "code": "610323",
    "name": "岐山县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 岐山县",
    "rank": 3,
    "normalizedName": "岐山",
    "normalizedValue": "陕西宝鸡岐山",
    "normalizedSearchText": "陕西宝鸡岐山岐山陕西宝鸡"
  },
  {
    "code": "610324",
    "name": "扶风县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 扶风县",
    "rank": 3,
    "normalizedName": "扶风",
    "normalizedValue": "陕西宝鸡扶风",
    "normalizedSearchText": "陕西宝鸡扶风扶风陕西宝鸡"
  },
  {
    "code": "610326",
    "name": "眉县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 眉县",
    "rank": 3,
    "normalizedName": "眉",
    "normalizedValue": "陕西宝鸡眉",
    "normalizedSearchText": "陕西宝鸡眉眉陕西宝鸡"
  },
  {
    "code": "610327",
    "name": "陇县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 陇县",
    "rank": 3,
    "normalizedName": "陇",
    "normalizedValue": "陕西宝鸡陇",
    "normalizedSearchText": "陕西宝鸡陇陇陕西宝鸡"
  },
  {
    "code": "610328",
    "name": "千阳县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 千阳县",
    "rank": 3,
    "normalizedName": "千阳",
    "normalizedValue": "陕西宝鸡千阳",
    "normalizedSearchText": "陕西宝鸡千阳千阳陕西宝鸡"
  },
  {
    "code": "610329",
    "name": "麟游县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 麟游县",
    "rank": 3,
    "normalizedName": "麟游",
    "normalizedValue": "陕西宝鸡麟游",
    "normalizedSearchText": "陕西宝鸡麟游麟游陕西宝鸡"
  },
  {
    "code": "610330",
    "name": "凤县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 凤县",
    "rank": 3,
    "normalizedName": "凤",
    "normalizedValue": "陕西宝鸡凤",
    "normalizedSearchText": "陕西宝鸡凤凤陕西宝鸡"
  },
  {
    "code": "610331",
    "name": "太白县",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 太白县",
    "rank": 3,
    "normalizedName": "太白",
    "normalizedValue": "陕西宝鸡太白",
    "normalizedSearchText": "陕西宝鸡太白太白陕西宝鸡"
  },
  {
    "code": "610301",
    "name": "市辖区",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西宝鸡辖",
    "normalizedSearchText": "陕西宝鸡辖辖陕西宝鸡"
  },
  {
    "code": "610305",
    "name": "凤翔区",
    "detail": "陕西省 / 宝鸡市",
    "value": "陕西省 / 宝鸡市 / 凤翔区",
    "rank": 3,
    "normalizedName": "凤翔",
    "normalizedValue": "陕西宝鸡凤翔",
    "normalizedSearchText": "陕西宝鸡凤翔凤翔陕西宝鸡"
  },
  {
    "code": "610400",
    "name": "咸阳市",
    "detail": "陕西省",
    "value": "陕西省 / 咸阳市",
    "rank": 2,
    "normalizedName": "咸阳",
    "normalizedValue": "陕西咸阳",
    "normalizedSearchText": "陕西咸阳咸阳陕西"
  },
  {
    "code": "610402",
    "name": "秦都区",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 秦都区",
    "rank": 3,
    "normalizedName": "秦都",
    "normalizedValue": "陕西咸阳秦都",
    "normalizedSearchText": "陕西咸阳秦都秦都陕西咸阳"
  },
  {
    "code": "610403",
    "name": "杨陵区",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 杨陵区",
    "rank": 3,
    "normalizedName": "杨陵",
    "normalizedValue": "陕西咸阳杨陵",
    "normalizedSearchText": "陕西咸阳杨陵杨陵陕西咸阳"
  },
  {
    "code": "610404",
    "name": "渭城区",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 渭城区",
    "rank": 3,
    "normalizedName": "渭城",
    "normalizedValue": "陕西咸阳渭城",
    "normalizedSearchText": "陕西咸阳渭城渭城陕西咸阳"
  },
  {
    "code": "610422",
    "name": "三原县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 三原县",
    "rank": 3,
    "normalizedName": "三原",
    "normalizedValue": "陕西咸阳三原",
    "normalizedSearchText": "陕西咸阳三原三原陕西咸阳"
  },
  {
    "code": "610423",
    "name": "泾阳县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 泾阳县",
    "rank": 3,
    "normalizedName": "泾阳",
    "normalizedValue": "陕西咸阳泾阳",
    "normalizedSearchText": "陕西咸阳泾阳泾阳陕西咸阳"
  },
  {
    "code": "610424",
    "name": "乾县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 乾县",
    "rank": 3,
    "normalizedName": "乾",
    "normalizedValue": "陕西咸阳乾",
    "normalizedSearchText": "陕西咸阳乾乾陕西咸阳"
  },
  {
    "code": "610425",
    "name": "礼泉县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 礼泉县",
    "rank": 3,
    "normalizedName": "礼泉",
    "normalizedValue": "陕西咸阳礼泉",
    "normalizedSearchText": "陕西咸阳礼泉礼泉陕西咸阳"
  },
  {
    "code": "610426",
    "name": "永寿县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 永寿县",
    "rank": 3,
    "normalizedName": "永寿",
    "normalizedValue": "陕西咸阳永寿",
    "normalizedSearchText": "陕西咸阳永寿永寿陕西咸阳"
  },
  {
    "code": "610428",
    "name": "长武县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 长武县",
    "rank": 3,
    "normalizedName": "长武",
    "normalizedValue": "陕西咸阳长武",
    "normalizedSearchText": "陕西咸阳长武长武陕西咸阳"
  },
  {
    "code": "610429",
    "name": "旬邑县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 旬邑县",
    "rank": 3,
    "normalizedName": "旬邑",
    "normalizedValue": "陕西咸阳旬邑",
    "normalizedSearchText": "陕西咸阳旬邑旬邑陕西咸阳"
  },
  {
    "code": "610430",
    "name": "淳化县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 淳化县",
    "rank": 3,
    "normalizedName": "淳化",
    "normalizedValue": "陕西咸阳淳化",
    "normalizedSearchText": "陕西咸阳淳化淳化陕西咸阳"
  },
  {
    "code": "610431",
    "name": "武功县",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 武功县",
    "rank": 3,
    "normalizedName": "武功",
    "normalizedValue": "陕西咸阳武功",
    "normalizedSearchText": "陕西咸阳武功武功陕西咸阳"
  },
  {
    "code": "610481",
    "name": "兴平市",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 兴平市",
    "rank": 3,
    "normalizedName": "兴平",
    "normalizedValue": "陕西咸阳兴平",
    "normalizedSearchText": "陕西咸阳兴平兴平陕西咸阳"
  },
  {
    "code": "610482",
    "name": "彬州市",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 彬州市",
    "rank": 3,
    "normalizedName": "彬州",
    "normalizedValue": "陕西咸阳彬州",
    "normalizedSearchText": "陕西咸阳彬州彬州陕西咸阳"
  },
  {
    "code": "610401",
    "name": "市辖区",
    "detail": "陕西省 / 咸阳市",
    "value": "陕西省 / 咸阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西咸阳辖",
    "normalizedSearchText": "陕西咸阳辖辖陕西咸阳"
  },
  {
    "code": "610500",
    "name": "渭南市",
    "detail": "陕西省",
    "value": "陕西省 / 渭南市",
    "rank": 2,
    "normalizedName": "渭南",
    "normalizedValue": "陕西渭南",
    "normalizedSearchText": "陕西渭南渭南陕西"
  },
  {
    "code": "610502",
    "name": "临渭区",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 临渭区",
    "rank": 3,
    "normalizedName": "临渭",
    "normalizedValue": "陕西渭南临渭",
    "normalizedSearchText": "陕西渭南临渭临渭陕西渭南"
  },
  {
    "code": "610503",
    "name": "华州区",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 华州区",
    "rank": 3,
    "normalizedName": "华州",
    "normalizedValue": "陕西渭南华州",
    "normalizedSearchText": "陕西渭南华州华州陕西渭南"
  },
  {
    "code": "610522",
    "name": "潼关县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 潼关县",
    "rank": 3,
    "normalizedName": "潼关",
    "normalizedValue": "陕西渭南潼关",
    "normalizedSearchText": "陕西渭南潼关潼关陕西渭南"
  },
  {
    "code": "610523",
    "name": "大荔县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 大荔县",
    "rank": 3,
    "normalizedName": "大荔",
    "normalizedValue": "陕西渭南大荔",
    "normalizedSearchText": "陕西渭南大荔大荔陕西渭南"
  },
  {
    "code": "610524",
    "name": "合阳县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 合阳县",
    "rank": 3,
    "normalizedName": "合阳",
    "normalizedValue": "陕西渭南合阳",
    "normalizedSearchText": "陕西渭南合阳合阳陕西渭南"
  },
  {
    "code": "610525",
    "name": "澄城县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 澄城县",
    "rank": 3,
    "normalizedName": "澄城",
    "normalizedValue": "陕西渭南澄城",
    "normalizedSearchText": "陕西渭南澄城澄城陕西渭南"
  },
  {
    "code": "610526",
    "name": "蒲城县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 蒲城县",
    "rank": 3,
    "normalizedName": "蒲城",
    "normalizedValue": "陕西渭南蒲城",
    "normalizedSearchText": "陕西渭南蒲城蒲城陕西渭南"
  },
  {
    "code": "610527",
    "name": "白水县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 白水县",
    "rank": 3,
    "normalizedName": "白水",
    "normalizedValue": "陕西渭南白水",
    "normalizedSearchText": "陕西渭南白水白水陕西渭南"
  },
  {
    "code": "610528",
    "name": "富平县",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 富平县",
    "rank": 3,
    "normalizedName": "富平",
    "normalizedValue": "陕西渭南富平",
    "normalizedSearchText": "陕西渭南富平富平陕西渭南"
  },
  {
    "code": "610581",
    "name": "韩城市",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 韩城市",
    "rank": 3,
    "normalizedName": "韩城",
    "normalizedValue": "陕西渭南韩城",
    "normalizedSearchText": "陕西渭南韩城韩城陕西渭南"
  },
  {
    "code": "610582",
    "name": "华阴市",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 华阴市",
    "rank": 3,
    "normalizedName": "华阴",
    "normalizedValue": "陕西渭南华阴",
    "normalizedSearchText": "陕西渭南华阴华阴陕西渭南"
  },
  {
    "code": "610501",
    "name": "市辖区",
    "detail": "陕西省 / 渭南市",
    "value": "陕西省 / 渭南市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西渭南辖",
    "normalizedSearchText": "陕西渭南辖辖陕西渭南"
  },
  {
    "code": "610600",
    "name": "延安市",
    "detail": "陕西省",
    "value": "陕西省 / 延安市",
    "rank": 2,
    "normalizedName": "延安",
    "normalizedValue": "陕西延安",
    "normalizedSearchText": "陕西延安延安陕西"
  },
  {
    "code": "610602",
    "name": "宝塔区",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 宝塔区",
    "rank": 3,
    "normalizedName": "宝塔",
    "normalizedValue": "陕西延安宝塔",
    "normalizedSearchText": "陕西延安宝塔宝塔陕西延安"
  },
  {
    "code": "610603",
    "name": "安塞区",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 安塞区",
    "rank": 3,
    "normalizedName": "安塞",
    "normalizedValue": "陕西延安安塞",
    "normalizedSearchText": "陕西延安安塞安塞陕西延安"
  },
  {
    "code": "610621",
    "name": "延长县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 延长县",
    "rank": 3,
    "normalizedName": "延长",
    "normalizedValue": "陕西延安延长",
    "normalizedSearchText": "陕西延安延长延长陕西延安"
  },
  {
    "code": "610622",
    "name": "延川县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 延川县",
    "rank": 3,
    "normalizedName": "延川",
    "normalizedValue": "陕西延安延川",
    "normalizedSearchText": "陕西延安延川延川陕西延安"
  },
  {
    "code": "610625",
    "name": "志丹县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 志丹县",
    "rank": 3,
    "normalizedName": "志丹",
    "normalizedValue": "陕西延安志丹",
    "normalizedSearchText": "陕西延安志丹志丹陕西延安"
  },
  {
    "code": "610626",
    "name": "吴起县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 吴起县",
    "rank": 3,
    "normalizedName": "吴起",
    "normalizedValue": "陕西延安吴起",
    "normalizedSearchText": "陕西延安吴起吴起陕西延安"
  },
  {
    "code": "610627",
    "name": "甘泉县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 甘泉县",
    "rank": 3,
    "normalizedName": "甘泉",
    "normalizedValue": "陕西延安甘泉",
    "normalizedSearchText": "陕西延安甘泉甘泉陕西延安"
  },
  {
    "code": "610628",
    "name": "富县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 富县",
    "rank": 3,
    "normalizedName": "富",
    "normalizedValue": "陕西延安富",
    "normalizedSearchText": "陕西延安富富陕西延安"
  },
  {
    "code": "610629",
    "name": "洛川县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 洛川县",
    "rank": 3,
    "normalizedName": "洛川",
    "normalizedValue": "陕西延安洛川",
    "normalizedSearchText": "陕西延安洛川洛川陕西延安"
  },
  {
    "code": "610630",
    "name": "宜川县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 宜川县",
    "rank": 3,
    "normalizedName": "宜川",
    "normalizedValue": "陕西延安宜川",
    "normalizedSearchText": "陕西延安宜川宜川陕西延安"
  },
  {
    "code": "610631",
    "name": "黄龙县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 黄龙县",
    "rank": 3,
    "normalizedName": "黄龙",
    "normalizedValue": "陕西延安黄龙",
    "normalizedSearchText": "陕西延安黄龙黄龙陕西延安"
  },
  {
    "code": "610632",
    "name": "黄陵县",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 黄陵县",
    "rank": 3,
    "normalizedName": "黄陵",
    "normalizedValue": "陕西延安黄陵",
    "normalizedSearchText": "陕西延安黄陵黄陵陕西延安"
  },
  {
    "code": "610681",
    "name": "子长市",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 子长市",
    "rank": 3,
    "normalizedName": "子长",
    "normalizedValue": "陕西延安子长",
    "normalizedSearchText": "陕西延安子长子长陕西延安"
  },
  {
    "code": "610601",
    "name": "市辖区",
    "detail": "陕西省 / 延安市",
    "value": "陕西省 / 延安市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西延安辖",
    "normalizedSearchText": "陕西延安辖辖陕西延安"
  },
  {
    "code": "610700",
    "name": "汉中市",
    "detail": "陕西省",
    "value": "陕西省 / 汉中市",
    "rank": 2,
    "normalizedName": "汉中",
    "normalizedValue": "陕西汉中",
    "normalizedSearchText": "陕西汉中汉中陕西"
  },
  {
    "code": "610702",
    "name": "汉台区",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 汉台区",
    "rank": 3,
    "normalizedName": "汉台",
    "normalizedValue": "陕西汉中汉台",
    "normalizedSearchText": "陕西汉中汉台汉台陕西汉中"
  },
  {
    "code": "610703",
    "name": "南郑区",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 南郑区",
    "rank": 3,
    "normalizedName": "南郑",
    "normalizedValue": "陕西汉中南郑",
    "normalizedSearchText": "陕西汉中南郑南郑陕西汉中"
  },
  {
    "code": "610722",
    "name": "城固县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 城固县",
    "rank": 3,
    "normalizedName": "城固",
    "normalizedValue": "陕西汉中城固",
    "normalizedSearchText": "陕西汉中城固城固陕西汉中"
  },
  {
    "code": "610723",
    "name": "洋县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 洋县",
    "rank": 3,
    "normalizedName": "洋",
    "normalizedValue": "陕西汉中洋",
    "normalizedSearchText": "陕西汉中洋洋陕西汉中"
  },
  {
    "code": "610724",
    "name": "西乡县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 西乡县",
    "rank": 3,
    "normalizedName": "西",
    "normalizedValue": "陕西汉中西",
    "normalizedSearchText": "陕西汉中西西陕西汉中"
  },
  {
    "code": "610725",
    "name": "勉县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 勉县",
    "rank": 3,
    "normalizedName": "勉",
    "normalizedValue": "陕西汉中勉",
    "normalizedSearchText": "陕西汉中勉勉陕西汉中"
  },
  {
    "code": "610726",
    "name": "宁强县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 宁强县",
    "rank": 3,
    "normalizedName": "宁强",
    "normalizedValue": "陕西汉中宁强",
    "normalizedSearchText": "陕西汉中宁强宁强陕西汉中"
  },
  {
    "code": "610727",
    "name": "略阳县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 略阳县",
    "rank": 3,
    "normalizedName": "略阳",
    "normalizedValue": "陕西汉中略阳",
    "normalizedSearchText": "陕西汉中略阳略阳陕西汉中"
  },
  {
    "code": "610728",
    "name": "镇巴县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 镇巴县",
    "rank": 3,
    "normalizedName": "巴",
    "normalizedValue": "陕西汉中巴",
    "normalizedSearchText": "陕西汉中巴巴陕西汉中"
  },
  {
    "code": "610729",
    "name": "留坝县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 留坝县",
    "rank": 3,
    "normalizedName": "留坝",
    "normalizedValue": "陕西汉中留坝",
    "normalizedSearchText": "陕西汉中留坝留坝陕西汉中"
  },
  {
    "code": "610730",
    "name": "佛坪县",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 佛坪县",
    "rank": 3,
    "normalizedName": "佛坪",
    "normalizedValue": "陕西汉中佛坪",
    "normalizedSearchText": "陕西汉中佛坪佛坪陕西汉中"
  },
  {
    "code": "610701",
    "name": "市辖区",
    "detail": "陕西省 / 汉中市",
    "value": "陕西省 / 汉中市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西汉中辖",
    "normalizedSearchText": "陕西汉中辖辖陕西汉中"
  },
  {
    "code": "610800",
    "name": "榆林市",
    "detail": "陕西省",
    "value": "陕西省 / 榆林市",
    "rank": 2,
    "normalizedName": "榆林",
    "normalizedValue": "陕西榆林",
    "normalizedSearchText": "陕西榆林榆林陕西"
  },
  {
    "code": "610802",
    "name": "榆阳区",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 榆阳区",
    "rank": 3,
    "normalizedName": "榆阳",
    "normalizedValue": "陕西榆林榆阳",
    "normalizedSearchText": "陕西榆林榆阳榆阳陕西榆林"
  },
  {
    "code": "610803",
    "name": "横山区",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 横山区",
    "rank": 3,
    "normalizedName": "横山",
    "normalizedValue": "陕西榆林横山",
    "normalizedSearchText": "陕西榆林横山横山陕西榆林"
  },
  {
    "code": "610822",
    "name": "府谷县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 府谷县",
    "rank": 3,
    "normalizedName": "府谷",
    "normalizedValue": "陕西榆林府谷",
    "normalizedSearchText": "陕西榆林府谷府谷陕西榆林"
  },
  {
    "code": "610824",
    "name": "靖边县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 靖边县",
    "rank": 3,
    "normalizedName": "靖边",
    "normalizedValue": "陕西榆林靖边",
    "normalizedSearchText": "陕西榆林靖边靖边陕西榆林"
  },
  {
    "code": "610825",
    "name": "定边县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 定边县",
    "rank": 3,
    "normalizedName": "定边",
    "normalizedValue": "陕西榆林定边",
    "normalizedSearchText": "陕西榆林定边定边陕西榆林"
  },
  {
    "code": "610826",
    "name": "绥德县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 绥德县",
    "rank": 3,
    "normalizedName": "绥德",
    "normalizedValue": "陕西榆林绥德",
    "normalizedSearchText": "陕西榆林绥德绥德陕西榆林"
  },
  {
    "code": "610827",
    "name": "米脂县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 米脂县",
    "rank": 3,
    "normalizedName": "米脂",
    "normalizedValue": "陕西榆林米脂",
    "normalizedSearchText": "陕西榆林米脂米脂陕西榆林"
  },
  {
    "code": "610828",
    "name": "佳县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 佳县",
    "rank": 3,
    "normalizedName": "佳",
    "normalizedValue": "陕西榆林佳",
    "normalizedSearchText": "陕西榆林佳佳陕西榆林"
  },
  {
    "code": "610829",
    "name": "吴堡县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 吴堡县",
    "rank": 3,
    "normalizedName": "吴堡",
    "normalizedValue": "陕西榆林吴堡",
    "normalizedSearchText": "陕西榆林吴堡吴堡陕西榆林"
  },
  {
    "code": "610830",
    "name": "清涧县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 清涧县",
    "rank": 3,
    "normalizedName": "清涧",
    "normalizedValue": "陕西榆林清涧",
    "normalizedSearchText": "陕西榆林清涧清涧陕西榆林"
  },
  {
    "code": "610831",
    "name": "子洲县",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 子洲县",
    "rank": 3,
    "normalizedName": "子洲",
    "normalizedValue": "陕西榆林子洲",
    "normalizedSearchText": "陕西榆林子洲子洲陕西榆林"
  },
  {
    "code": "610881",
    "name": "神木市",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 神木市",
    "rank": 3,
    "normalizedName": "神木",
    "normalizedValue": "陕西榆林神木",
    "normalizedSearchText": "陕西榆林神木神木陕西榆林"
  },
  {
    "code": "610801",
    "name": "市辖区",
    "detail": "陕西省 / 榆林市",
    "value": "陕西省 / 榆林市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西榆林辖",
    "normalizedSearchText": "陕西榆林辖辖陕西榆林"
  },
  {
    "code": "610900",
    "name": "安康市",
    "detail": "陕西省",
    "value": "陕西省 / 安康市",
    "rank": 2,
    "normalizedName": "安康",
    "normalizedValue": "陕西安康",
    "normalizedSearchText": "陕西安康安康陕西"
  },
  {
    "code": "610902",
    "name": "汉滨区",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 汉滨区",
    "rank": 3,
    "normalizedName": "汉滨",
    "normalizedValue": "陕西安康汉滨",
    "normalizedSearchText": "陕西安康汉滨汉滨陕西安康"
  },
  {
    "code": "610921",
    "name": "汉阴县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 汉阴县",
    "rank": 3,
    "normalizedName": "汉阴",
    "normalizedValue": "陕西安康汉阴",
    "normalizedSearchText": "陕西安康汉阴汉阴陕西安康"
  },
  {
    "code": "610922",
    "name": "石泉县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 石泉县",
    "rank": 3,
    "normalizedName": "石泉",
    "normalizedValue": "陕西安康石泉",
    "normalizedSearchText": "陕西安康石泉石泉陕西安康"
  },
  {
    "code": "610923",
    "name": "宁陕县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 宁陕县",
    "rank": 3,
    "normalizedName": "宁陕",
    "normalizedValue": "陕西安康宁陕",
    "normalizedSearchText": "陕西安康宁陕宁陕陕西安康"
  },
  {
    "code": "610924",
    "name": "紫阳县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 紫阳县",
    "rank": 3,
    "normalizedName": "紫阳",
    "normalizedValue": "陕西安康紫阳",
    "normalizedSearchText": "陕西安康紫阳紫阳陕西安康"
  },
  {
    "code": "610925",
    "name": "岚皋县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 岚皋县",
    "rank": 3,
    "normalizedName": "岚皋",
    "normalizedValue": "陕西安康岚皋",
    "normalizedSearchText": "陕西安康岚皋岚皋陕西安康"
  },
  {
    "code": "610926",
    "name": "平利县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 平利县",
    "rank": 3,
    "normalizedName": "平利",
    "normalizedValue": "陕西安康平利",
    "normalizedSearchText": "陕西安康平利平利陕西安康"
  },
  {
    "code": "610927",
    "name": "镇坪县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 镇坪县",
    "rank": 3,
    "normalizedName": "坪",
    "normalizedValue": "陕西安康坪",
    "normalizedSearchText": "陕西安康坪坪陕西安康"
  },
  {
    "code": "610928",
    "name": "旬阳县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 旬阳县",
    "rank": 3,
    "normalizedName": "旬阳",
    "normalizedValue": "陕西安康旬阳",
    "normalizedSearchText": "陕西安康旬阳旬阳陕西安康"
  },
  {
    "code": "610929",
    "name": "白河县",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 白河县",
    "rank": 3,
    "normalizedName": "白河",
    "normalizedValue": "陕西安康白河",
    "normalizedSearchText": "陕西安康白河白河陕西安康"
  },
  {
    "code": "610901",
    "name": "市辖区",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西安康辖",
    "normalizedSearchText": "陕西安康辖辖陕西安康"
  },
  {
    "code": "610981",
    "name": "旬阳市",
    "detail": "陕西省 / 安康市",
    "value": "陕西省 / 安康市 / 旬阳市",
    "rank": 3,
    "normalizedName": "旬阳",
    "normalizedValue": "陕西安康旬阳",
    "normalizedSearchText": "陕西安康旬阳旬阳陕西安康"
  },
  {
    "code": "611000",
    "name": "商洛市",
    "detail": "陕西省",
    "value": "陕西省 / 商洛市",
    "rank": 2,
    "normalizedName": "商洛",
    "normalizedValue": "陕西商洛",
    "normalizedSearchText": "陕西商洛商洛陕西"
  },
  {
    "code": "611002",
    "name": "商州区",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 商州区",
    "rank": 3,
    "normalizedName": "商州",
    "normalizedValue": "陕西商洛商州",
    "normalizedSearchText": "陕西商洛商州商州陕西商洛"
  },
  {
    "code": "611021",
    "name": "洛南县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 洛南县",
    "rank": 3,
    "normalizedName": "洛南",
    "normalizedValue": "陕西商洛洛南",
    "normalizedSearchText": "陕西商洛洛南洛南陕西商洛"
  },
  {
    "code": "611022",
    "name": "丹凤县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 丹凤县",
    "rank": 3,
    "normalizedName": "丹凤",
    "normalizedValue": "陕西商洛丹凤",
    "normalizedSearchText": "陕西商洛丹凤丹凤陕西商洛"
  },
  {
    "code": "611023",
    "name": "商南县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 商南县",
    "rank": 3,
    "normalizedName": "商南",
    "normalizedValue": "陕西商洛商南",
    "normalizedSearchText": "陕西商洛商南商南陕西商洛"
  },
  {
    "code": "611024",
    "name": "山阳县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 山阳县",
    "rank": 3,
    "normalizedName": "山阳",
    "normalizedValue": "陕西商洛山阳",
    "normalizedSearchText": "陕西商洛山阳山阳陕西商洛"
  },
  {
    "code": "611025",
    "name": "镇安县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 镇安县",
    "rank": 3,
    "normalizedName": "安",
    "normalizedValue": "陕西商洛安",
    "normalizedSearchText": "陕西商洛安安陕西商洛"
  },
  {
    "code": "611026",
    "name": "柞水县",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 柞水县",
    "rank": 3,
    "normalizedName": "柞水",
    "normalizedValue": "陕西商洛柞水",
    "normalizedSearchText": "陕西商洛柞水柞水陕西商洛"
  },
  {
    "code": "611001",
    "name": "市辖区",
    "detail": "陕西省 / 商洛市",
    "value": "陕西省 / 商洛市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "陕西商洛辖",
    "normalizedSearchText": "陕西商洛辖辖陕西商洛"
  },
  {
    "code": "620000",
    "name": "甘肃省",
    "detail": "?????",
    "value": "甘肃省",
    "rank": 1,
    "normalizedName": "甘肃",
    "normalizedValue": "甘肃",
    "normalizedSearchText": "甘肃甘肃"
  },
  {
    "code": "620100",
    "name": "兰州市",
    "detail": "甘肃省",
    "value": "甘肃省 / 兰州市",
    "rank": 2,
    "normalizedName": "兰州",
    "normalizedValue": "甘肃兰州",
    "normalizedSearchText": "甘肃兰州兰州甘肃"
  },
  {
    "code": "620102",
    "name": "城关区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 城关区",
    "rank": 3,
    "normalizedName": "城关",
    "normalizedValue": "甘肃兰州城关",
    "normalizedSearchText": "甘肃兰州城关城关甘肃兰州"
  },
  {
    "code": "620103",
    "name": "七里河区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 七里河区",
    "rank": 3,
    "normalizedName": "七里河",
    "normalizedValue": "甘肃兰州七里河",
    "normalizedSearchText": "甘肃兰州七里河七里河甘肃兰州"
  },
  {
    "code": "620104",
    "name": "西固区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 西固区",
    "rank": 3,
    "normalizedName": "西固",
    "normalizedValue": "甘肃兰州西固",
    "normalizedSearchText": "甘肃兰州西固西固甘肃兰州"
  },
  {
    "code": "620105",
    "name": "安宁区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 安宁区",
    "rank": 3,
    "normalizedName": "安宁",
    "normalizedValue": "甘肃兰州安宁",
    "normalizedSearchText": "甘肃兰州安宁安宁甘肃兰州"
  },
  {
    "code": "620111",
    "name": "红古区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 红古区",
    "rank": 3,
    "normalizedName": "红古",
    "normalizedValue": "甘肃兰州红古",
    "normalizedSearchText": "甘肃兰州红古红古甘肃兰州"
  },
  {
    "code": "620121",
    "name": "永登县",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 永登县",
    "rank": 3,
    "normalizedName": "永登",
    "normalizedValue": "甘肃兰州永登",
    "normalizedSearchText": "甘肃兰州永登永登甘肃兰州"
  },
  {
    "code": "620122",
    "name": "皋兰县",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 皋兰县",
    "rank": 3,
    "normalizedName": "皋兰",
    "normalizedValue": "甘肃兰州皋兰",
    "normalizedSearchText": "甘肃兰州皋兰皋兰甘肃兰州"
  },
  {
    "code": "620123",
    "name": "榆中县",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 榆中县",
    "rank": 3,
    "normalizedName": "榆中",
    "normalizedValue": "甘肃兰州榆中",
    "normalizedSearchText": "甘肃兰州榆中榆中甘肃兰州"
  },
  {
    "code": "620101",
    "name": "市辖区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃兰州辖",
    "normalizedSearchText": "甘肃兰州辖辖甘肃兰州"
  },
  {
    "code": "620171",
    "name": "兰州新区",
    "detail": "甘肃省 / 兰州市",
    "value": "甘肃省 / 兰州市 / 兰州新区",
    "rank": 3,
    "normalizedName": "兰州新",
    "normalizedValue": "甘肃兰州兰州新",
    "normalizedSearchText": "甘肃兰州兰州新兰州新甘肃兰州"
  },
  {
    "code": "620200",
    "name": "嘉峪关市",
    "detail": "甘肃省",
    "value": "甘肃省 / 嘉峪关市",
    "rank": 2,
    "normalizedName": "嘉峪关",
    "normalizedValue": "甘肃嘉峪关",
    "normalizedSearchText": "甘肃嘉峪关嘉峪关甘肃"
  },
  {
    "code": "620201",
    "name": "市辖区",
    "detail": "甘肃省 / 嘉峪关市",
    "value": "甘肃省 / 嘉峪关市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃嘉峪关辖",
    "normalizedSearchText": "甘肃嘉峪关辖辖甘肃嘉峪关"
  },
  {
    "code": "620300",
    "name": "金昌市",
    "detail": "甘肃省",
    "value": "甘肃省 / 金昌市",
    "rank": 2,
    "normalizedName": "金昌",
    "normalizedValue": "甘肃金昌",
    "normalizedSearchText": "甘肃金昌金昌甘肃"
  },
  {
    "code": "620302",
    "name": "金川区",
    "detail": "甘肃省 / 金昌市",
    "value": "甘肃省 / 金昌市 / 金川区",
    "rank": 3,
    "normalizedName": "金川",
    "normalizedValue": "甘肃金昌金川",
    "normalizedSearchText": "甘肃金昌金川金川甘肃金昌"
  },
  {
    "code": "620321",
    "name": "永昌县",
    "detail": "甘肃省 / 金昌市",
    "value": "甘肃省 / 金昌市 / 永昌县",
    "rank": 3,
    "normalizedName": "永昌",
    "normalizedValue": "甘肃金昌永昌",
    "normalizedSearchText": "甘肃金昌永昌永昌甘肃金昌"
  },
  {
    "code": "620301",
    "name": "市辖区",
    "detail": "甘肃省 / 金昌市",
    "value": "甘肃省 / 金昌市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃金昌辖",
    "normalizedSearchText": "甘肃金昌辖辖甘肃金昌"
  },
  {
    "code": "620400",
    "name": "白银市",
    "detail": "甘肃省",
    "value": "甘肃省 / 白银市",
    "rank": 2,
    "normalizedName": "白银",
    "normalizedValue": "甘肃白银",
    "normalizedSearchText": "甘肃白银白银甘肃"
  },
  {
    "code": "620402",
    "name": "白银区",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 白银区",
    "rank": 3,
    "normalizedName": "白银",
    "normalizedValue": "甘肃白银白银",
    "normalizedSearchText": "甘肃白银白银白银甘肃白银"
  },
  {
    "code": "620403",
    "name": "平川区",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 平川区",
    "rank": 3,
    "normalizedName": "平川",
    "normalizedValue": "甘肃白银平川",
    "normalizedSearchText": "甘肃白银平川平川甘肃白银"
  },
  {
    "code": "620421",
    "name": "靖远县",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 靖远县",
    "rank": 3,
    "normalizedName": "靖远",
    "normalizedValue": "甘肃白银靖远",
    "normalizedSearchText": "甘肃白银靖远靖远甘肃白银"
  },
  {
    "code": "620422",
    "name": "会宁县",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 会宁县",
    "rank": 3,
    "normalizedName": "会宁",
    "normalizedValue": "甘肃白银会宁",
    "normalizedSearchText": "甘肃白银会宁会宁甘肃白银"
  },
  {
    "code": "620423",
    "name": "景泰县",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 景泰县",
    "rank": 3,
    "normalizedName": "景泰",
    "normalizedValue": "甘肃白银景泰",
    "normalizedSearchText": "甘肃白银景泰景泰甘肃白银"
  },
  {
    "code": "620401",
    "name": "市辖区",
    "detail": "甘肃省 / 白银市",
    "value": "甘肃省 / 白银市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃白银辖",
    "normalizedSearchText": "甘肃白银辖辖甘肃白银"
  },
  {
    "code": "620500",
    "name": "天水市",
    "detail": "甘肃省",
    "value": "甘肃省 / 天水市",
    "rank": 2,
    "normalizedName": "天水",
    "normalizedValue": "甘肃天水",
    "normalizedSearchText": "甘肃天水天水甘肃"
  },
  {
    "code": "620502",
    "name": "秦州区",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 秦州区",
    "rank": 3,
    "normalizedName": "秦州",
    "normalizedValue": "甘肃天水秦州",
    "normalizedSearchText": "甘肃天水秦州秦州甘肃天水"
  },
  {
    "code": "620503",
    "name": "麦积区",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 麦积区",
    "rank": 3,
    "normalizedName": "麦积",
    "normalizedValue": "甘肃天水麦积",
    "normalizedSearchText": "甘肃天水麦积麦积甘肃天水"
  },
  {
    "code": "620521",
    "name": "清水县",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 清水县",
    "rank": 3,
    "normalizedName": "清水",
    "normalizedValue": "甘肃天水清水",
    "normalizedSearchText": "甘肃天水清水清水甘肃天水"
  },
  {
    "code": "620522",
    "name": "秦安县",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 秦安县",
    "rank": 3,
    "normalizedName": "秦安",
    "normalizedValue": "甘肃天水秦安",
    "normalizedSearchText": "甘肃天水秦安秦安甘肃天水"
  },
  {
    "code": "620523",
    "name": "甘谷县",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 甘谷县",
    "rank": 3,
    "normalizedName": "甘谷",
    "normalizedValue": "甘肃天水甘谷",
    "normalizedSearchText": "甘肃天水甘谷甘谷甘肃天水"
  },
  {
    "code": "620524",
    "name": "武山县",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 武山县",
    "rank": 3,
    "normalizedName": "武山",
    "normalizedValue": "甘肃天水武山",
    "normalizedSearchText": "甘肃天水武山武山甘肃天水"
  },
  {
    "code": "620525",
    "name": "张家川回族自治县",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 张家川回族自治县",
    "rank": 3,
    "normalizedName": "张家川回族自治",
    "normalizedValue": "甘肃天水张家川回族自治",
    "normalizedSearchText": "甘肃天水张家川回族自治张家川回族自治甘肃天水"
  },
  {
    "code": "620501",
    "name": "市辖区",
    "detail": "甘肃省 / 天水市",
    "value": "甘肃省 / 天水市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃天水辖",
    "normalizedSearchText": "甘肃天水辖辖甘肃天水"
  },
  {
    "code": "620600",
    "name": "武威市",
    "detail": "甘肃省",
    "value": "甘肃省 / 武威市",
    "rank": 2,
    "normalizedName": "武威",
    "normalizedValue": "甘肃武威",
    "normalizedSearchText": "甘肃武威武威甘肃"
  },
  {
    "code": "620602",
    "name": "凉州区",
    "detail": "甘肃省 / 武威市",
    "value": "甘肃省 / 武威市 / 凉州区",
    "rank": 3,
    "normalizedName": "凉州",
    "normalizedValue": "甘肃武威凉州",
    "normalizedSearchText": "甘肃武威凉州凉州甘肃武威"
  },
  {
    "code": "620621",
    "name": "民勤县",
    "detail": "甘肃省 / 武威市",
    "value": "甘肃省 / 武威市 / 民勤县",
    "rank": 3,
    "normalizedName": "民勤",
    "normalizedValue": "甘肃武威民勤",
    "normalizedSearchText": "甘肃武威民勤民勤甘肃武威"
  },
  {
    "code": "620622",
    "name": "古浪县",
    "detail": "甘肃省 / 武威市",
    "value": "甘肃省 / 武威市 / 古浪县",
    "rank": 3,
    "normalizedName": "古浪",
    "normalizedValue": "甘肃武威古浪",
    "normalizedSearchText": "甘肃武威古浪古浪甘肃武威"
  },
  {
    "code": "620623",
    "name": "天祝藏族自治县",
    "detail": "甘肃省 / 武威市",
    "value": "甘肃省 / 武威市 / 天祝藏族自治县",
    "rank": 3,
    "normalizedName": "天祝藏族自治",
    "normalizedValue": "甘肃武威天祝藏族自治",
    "normalizedSearchText": "甘肃武威天祝藏族自治天祝藏族自治甘肃武威"
  },
  {
    "code": "620601",
    "name": "市辖区",
    "detail": "甘肃省 / 武威市",
    "value": "甘肃省 / 武威市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃武威辖",
    "normalizedSearchText": "甘肃武威辖辖甘肃武威"
  },
  {
    "code": "620700",
    "name": "张掖市",
    "detail": "甘肃省",
    "value": "甘肃省 / 张掖市",
    "rank": 2,
    "normalizedName": "张掖",
    "normalizedValue": "甘肃张掖",
    "normalizedSearchText": "甘肃张掖张掖甘肃"
  },
  {
    "code": "620702",
    "name": "甘州区",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 甘州区",
    "rank": 3,
    "normalizedName": "甘州",
    "normalizedValue": "甘肃张掖甘州",
    "normalizedSearchText": "甘肃张掖甘州甘州甘肃张掖"
  },
  {
    "code": "620721",
    "name": "肃南裕固族自治县",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 肃南裕固族自治县",
    "rank": 3,
    "normalizedName": "肃南裕固族自治",
    "normalizedValue": "甘肃张掖肃南裕固族自治",
    "normalizedSearchText": "甘肃张掖肃南裕固族自治肃南裕固族自治甘肃张掖"
  },
  {
    "code": "620722",
    "name": "民乐县",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 民乐县",
    "rank": 3,
    "normalizedName": "民乐",
    "normalizedValue": "甘肃张掖民乐",
    "normalizedSearchText": "甘肃张掖民乐民乐甘肃张掖"
  },
  {
    "code": "620723",
    "name": "临泽县",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 临泽县",
    "rank": 3,
    "normalizedName": "临泽",
    "normalizedValue": "甘肃张掖临泽",
    "normalizedSearchText": "甘肃张掖临泽临泽甘肃张掖"
  },
  {
    "code": "620724",
    "name": "高台县",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 高台县",
    "rank": 3,
    "normalizedName": "高台",
    "normalizedValue": "甘肃张掖高台",
    "normalizedSearchText": "甘肃张掖高台高台甘肃张掖"
  },
  {
    "code": "620725",
    "name": "山丹县",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 山丹县",
    "rank": 3,
    "normalizedName": "山丹",
    "normalizedValue": "甘肃张掖山丹",
    "normalizedSearchText": "甘肃张掖山丹山丹甘肃张掖"
  },
  {
    "code": "620701",
    "name": "市辖区",
    "detail": "甘肃省 / 张掖市",
    "value": "甘肃省 / 张掖市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃张掖辖",
    "normalizedSearchText": "甘肃张掖辖辖甘肃张掖"
  },
  {
    "code": "620800",
    "name": "平凉市",
    "detail": "甘肃省",
    "value": "甘肃省 / 平凉市",
    "rank": 2,
    "normalizedName": "平凉",
    "normalizedValue": "甘肃平凉",
    "normalizedSearchText": "甘肃平凉平凉甘肃"
  },
  {
    "code": "620802",
    "name": "崆峒区",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 崆峒区",
    "rank": 3,
    "normalizedName": "崆峒",
    "normalizedValue": "甘肃平凉崆峒",
    "normalizedSearchText": "甘肃平凉崆峒崆峒甘肃平凉"
  },
  {
    "code": "620821",
    "name": "泾川县",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 泾川县",
    "rank": 3,
    "normalizedName": "泾川",
    "normalizedValue": "甘肃平凉泾川",
    "normalizedSearchText": "甘肃平凉泾川泾川甘肃平凉"
  },
  {
    "code": "620822",
    "name": "灵台县",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 灵台县",
    "rank": 3,
    "normalizedName": "灵台",
    "normalizedValue": "甘肃平凉灵台",
    "normalizedSearchText": "甘肃平凉灵台灵台甘肃平凉"
  },
  {
    "code": "620823",
    "name": "崇信县",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 崇信县",
    "rank": 3,
    "normalizedName": "崇信",
    "normalizedValue": "甘肃平凉崇信",
    "normalizedSearchText": "甘肃平凉崇信崇信甘肃平凉"
  },
  {
    "code": "620825",
    "name": "庄浪县",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 庄浪县",
    "rank": 3,
    "normalizedName": "庄浪",
    "normalizedValue": "甘肃平凉庄浪",
    "normalizedSearchText": "甘肃平凉庄浪庄浪甘肃平凉"
  },
  {
    "code": "620826",
    "name": "静宁县",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 静宁县",
    "rank": 3,
    "normalizedName": "静宁",
    "normalizedValue": "甘肃平凉静宁",
    "normalizedSearchText": "甘肃平凉静宁静宁甘肃平凉"
  },
  {
    "code": "620881",
    "name": "华亭市",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 华亭市",
    "rank": 3,
    "normalizedName": "华亭",
    "normalizedValue": "甘肃平凉华亭",
    "normalizedSearchText": "甘肃平凉华亭华亭甘肃平凉"
  },
  {
    "code": "620801",
    "name": "市辖区",
    "detail": "甘肃省 / 平凉市",
    "value": "甘肃省 / 平凉市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃平凉辖",
    "normalizedSearchText": "甘肃平凉辖辖甘肃平凉"
  },
  {
    "code": "620900",
    "name": "酒泉市",
    "detail": "甘肃省",
    "value": "甘肃省 / 酒泉市",
    "rank": 2,
    "normalizedName": "酒泉",
    "normalizedValue": "甘肃酒泉",
    "normalizedSearchText": "甘肃酒泉酒泉甘肃"
  },
  {
    "code": "620902",
    "name": "肃州区",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 肃州区",
    "rank": 3,
    "normalizedName": "肃州",
    "normalizedValue": "甘肃酒泉肃州",
    "normalizedSearchText": "甘肃酒泉肃州肃州甘肃酒泉"
  },
  {
    "code": "620921",
    "name": "金塔县",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 金塔县",
    "rank": 3,
    "normalizedName": "金塔",
    "normalizedValue": "甘肃酒泉金塔",
    "normalizedSearchText": "甘肃酒泉金塔金塔甘肃酒泉"
  },
  {
    "code": "620922",
    "name": "瓜州县",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 瓜州县",
    "rank": 3,
    "normalizedName": "瓜州",
    "normalizedValue": "甘肃酒泉瓜州",
    "normalizedSearchText": "甘肃酒泉瓜州瓜州甘肃酒泉"
  },
  {
    "code": "620923",
    "name": "肃北蒙古族自治县",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 肃北蒙古族自治县",
    "rank": 3,
    "normalizedName": "肃北蒙古族自治",
    "normalizedValue": "甘肃酒泉肃北蒙古族自治",
    "normalizedSearchText": "甘肃酒泉肃北蒙古族自治肃北蒙古族自治甘肃酒泉"
  },
  {
    "code": "620924",
    "name": "阿克塞哈萨克族自治县",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 阿克塞哈萨克族自治县",
    "rank": 3,
    "normalizedName": "阿克塞哈萨克族自治",
    "normalizedValue": "甘肃酒泉阿克塞哈萨克族自治",
    "normalizedSearchText": "甘肃酒泉阿克塞哈萨克族自治阿克塞哈萨克族自治甘肃酒泉"
  },
  {
    "code": "620981",
    "name": "玉门市",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 玉门市",
    "rank": 3,
    "normalizedName": "玉门",
    "normalizedValue": "甘肃酒泉玉门",
    "normalizedSearchText": "甘肃酒泉玉门玉门甘肃酒泉"
  },
  {
    "code": "620982",
    "name": "敦煌市",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 敦煌市",
    "rank": 3,
    "normalizedName": "敦煌",
    "normalizedValue": "甘肃酒泉敦煌",
    "normalizedSearchText": "甘肃酒泉敦煌敦煌甘肃酒泉"
  },
  {
    "code": "620901",
    "name": "市辖区",
    "detail": "甘肃省 / 酒泉市",
    "value": "甘肃省 / 酒泉市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃酒泉辖",
    "normalizedSearchText": "甘肃酒泉辖辖甘肃酒泉"
  },
  {
    "code": "621000",
    "name": "庆阳市",
    "detail": "甘肃省",
    "value": "甘肃省 / 庆阳市",
    "rank": 2,
    "normalizedName": "庆阳",
    "normalizedValue": "甘肃庆阳",
    "normalizedSearchText": "甘肃庆阳庆阳甘肃"
  },
  {
    "code": "621002",
    "name": "西峰区",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 西峰区",
    "rank": 3,
    "normalizedName": "西峰",
    "normalizedValue": "甘肃庆阳西峰",
    "normalizedSearchText": "甘肃庆阳西峰西峰甘肃庆阳"
  },
  {
    "code": "621021",
    "name": "庆城县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 庆城县",
    "rank": 3,
    "normalizedName": "庆城",
    "normalizedValue": "甘肃庆阳庆城",
    "normalizedSearchText": "甘肃庆阳庆城庆城甘肃庆阳"
  },
  {
    "code": "621022",
    "name": "环县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 环县",
    "rank": 3,
    "normalizedName": "环",
    "normalizedValue": "甘肃庆阳环",
    "normalizedSearchText": "甘肃庆阳环环甘肃庆阳"
  },
  {
    "code": "621023",
    "name": "华池县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 华池县",
    "rank": 3,
    "normalizedName": "华池",
    "normalizedValue": "甘肃庆阳华池",
    "normalizedSearchText": "甘肃庆阳华池华池甘肃庆阳"
  },
  {
    "code": "621024",
    "name": "合水县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 合水县",
    "rank": 3,
    "normalizedName": "合水",
    "normalizedValue": "甘肃庆阳合水",
    "normalizedSearchText": "甘肃庆阳合水合水甘肃庆阳"
  },
  {
    "code": "621025",
    "name": "正宁县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 正宁县",
    "rank": 3,
    "normalizedName": "正宁",
    "normalizedValue": "甘肃庆阳正宁",
    "normalizedSearchText": "甘肃庆阳正宁正宁甘肃庆阳"
  },
  {
    "code": "621026",
    "name": "宁县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 宁县",
    "rank": 3,
    "normalizedName": "宁",
    "normalizedValue": "甘肃庆阳宁",
    "normalizedSearchText": "甘肃庆阳宁宁甘肃庆阳"
  },
  {
    "code": "621027",
    "name": "镇原县",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 镇原县",
    "rank": 3,
    "normalizedName": "原",
    "normalizedValue": "甘肃庆阳原",
    "normalizedSearchText": "甘肃庆阳原原甘肃庆阳"
  },
  {
    "code": "621001",
    "name": "市辖区",
    "detail": "甘肃省 / 庆阳市",
    "value": "甘肃省 / 庆阳市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃庆阳辖",
    "normalizedSearchText": "甘肃庆阳辖辖甘肃庆阳"
  },
  {
    "code": "621100",
    "name": "定西市",
    "detail": "甘肃省",
    "value": "甘肃省 / 定西市",
    "rank": 2,
    "normalizedName": "定西",
    "normalizedValue": "甘肃定西",
    "normalizedSearchText": "甘肃定西定西甘肃"
  },
  {
    "code": "621102",
    "name": "安定区",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 安定区",
    "rank": 3,
    "normalizedName": "安定",
    "normalizedValue": "甘肃定西安定",
    "normalizedSearchText": "甘肃定西安定安定甘肃定西"
  },
  {
    "code": "621121",
    "name": "通渭县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 通渭县",
    "rank": 3,
    "normalizedName": "通渭",
    "normalizedValue": "甘肃定西通渭",
    "normalizedSearchText": "甘肃定西通渭通渭甘肃定西"
  },
  {
    "code": "621122",
    "name": "陇西县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 陇西县",
    "rank": 3,
    "normalizedName": "陇西",
    "normalizedValue": "甘肃定西陇西",
    "normalizedSearchText": "甘肃定西陇西陇西甘肃定西"
  },
  {
    "code": "621123",
    "name": "渭源县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 渭源县",
    "rank": 3,
    "normalizedName": "渭源",
    "normalizedValue": "甘肃定西渭源",
    "normalizedSearchText": "甘肃定西渭源渭源甘肃定西"
  },
  {
    "code": "621124",
    "name": "临洮县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 临洮县",
    "rank": 3,
    "normalizedName": "临洮",
    "normalizedValue": "甘肃定西临洮",
    "normalizedSearchText": "甘肃定西临洮临洮甘肃定西"
  },
  {
    "code": "621125",
    "name": "漳县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 漳县",
    "rank": 3,
    "normalizedName": "漳",
    "normalizedValue": "甘肃定西漳",
    "normalizedSearchText": "甘肃定西漳漳甘肃定西"
  },
  {
    "code": "621126",
    "name": "岷县",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 岷县",
    "rank": 3,
    "normalizedName": "岷",
    "normalizedValue": "甘肃定西岷",
    "normalizedSearchText": "甘肃定西岷岷甘肃定西"
  },
  {
    "code": "621101",
    "name": "市辖区",
    "detail": "甘肃省 / 定西市",
    "value": "甘肃省 / 定西市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃定西辖",
    "normalizedSearchText": "甘肃定西辖辖甘肃定西"
  },
  {
    "code": "621200",
    "name": "陇南市",
    "detail": "甘肃省",
    "value": "甘肃省 / 陇南市",
    "rank": 2,
    "normalizedName": "陇南",
    "normalizedValue": "甘肃陇南",
    "normalizedSearchText": "甘肃陇南陇南甘肃"
  },
  {
    "code": "621202",
    "name": "武都区",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 武都区",
    "rank": 3,
    "normalizedName": "武都",
    "normalizedValue": "甘肃陇南武都",
    "normalizedSearchText": "甘肃陇南武都武都甘肃陇南"
  },
  {
    "code": "621221",
    "name": "成县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 成县",
    "rank": 3,
    "normalizedName": "成",
    "normalizedValue": "甘肃陇南成",
    "normalizedSearchText": "甘肃陇南成成甘肃陇南"
  },
  {
    "code": "621222",
    "name": "文县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 文县",
    "rank": 3,
    "normalizedName": "文",
    "normalizedValue": "甘肃陇南文",
    "normalizedSearchText": "甘肃陇南文文甘肃陇南"
  },
  {
    "code": "621223",
    "name": "宕昌县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 宕昌县",
    "rank": 3,
    "normalizedName": "宕昌",
    "normalizedValue": "甘肃陇南宕昌",
    "normalizedSearchText": "甘肃陇南宕昌宕昌甘肃陇南"
  },
  {
    "code": "621224",
    "name": "康县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 康县",
    "rank": 3,
    "normalizedName": "康",
    "normalizedValue": "甘肃陇南康",
    "normalizedSearchText": "甘肃陇南康康甘肃陇南"
  },
  {
    "code": "621225",
    "name": "西和县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 西和县",
    "rank": 3,
    "normalizedName": "西和",
    "normalizedValue": "甘肃陇南西和",
    "normalizedSearchText": "甘肃陇南西和西和甘肃陇南"
  },
  {
    "code": "621226",
    "name": "礼县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 礼县",
    "rank": 3,
    "normalizedName": "礼",
    "normalizedValue": "甘肃陇南礼",
    "normalizedSearchText": "甘肃陇南礼礼甘肃陇南"
  },
  {
    "code": "621227",
    "name": "徽县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 徽县",
    "rank": 3,
    "normalizedName": "徽",
    "normalizedValue": "甘肃陇南徽",
    "normalizedSearchText": "甘肃陇南徽徽甘肃陇南"
  },
  {
    "code": "621228",
    "name": "两当县",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 两当县",
    "rank": 3,
    "normalizedName": "两当",
    "normalizedValue": "甘肃陇南两当",
    "normalizedSearchText": "甘肃陇南两当两当甘肃陇南"
  },
  {
    "code": "621201",
    "name": "市辖区",
    "detail": "甘肃省 / 陇南市",
    "value": "甘肃省 / 陇南市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "甘肃陇南辖",
    "normalizedSearchText": "甘肃陇南辖辖甘肃陇南"
  },
  {
    "code": "622900",
    "name": "临夏回族自治州",
    "detail": "甘肃省",
    "value": "甘肃省 / 临夏回族自治州",
    "rank": 2,
    "normalizedName": "临夏回族",
    "normalizedValue": "甘肃临夏回族",
    "normalizedSearchText": "甘肃临夏回族临夏回族甘肃"
  },
  {
    "code": "622901",
    "name": "临夏市",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 临夏市",
    "rank": 3,
    "normalizedName": "临夏",
    "normalizedValue": "甘肃临夏回族临夏",
    "normalizedSearchText": "甘肃临夏回族临夏临夏甘肃临夏回族"
  },
  {
    "code": "622921",
    "name": "临夏县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 临夏县",
    "rank": 3,
    "normalizedName": "临夏",
    "normalizedValue": "甘肃临夏回族临夏",
    "normalizedSearchText": "甘肃临夏回族临夏临夏甘肃临夏回族"
  },
  {
    "code": "622922",
    "name": "康乐县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 康乐县",
    "rank": 3,
    "normalizedName": "康乐",
    "normalizedValue": "甘肃临夏回族康乐",
    "normalizedSearchText": "甘肃临夏回族康乐康乐甘肃临夏回族"
  },
  {
    "code": "622923",
    "name": "永靖县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 永靖县",
    "rank": 3,
    "normalizedName": "永靖",
    "normalizedValue": "甘肃临夏回族永靖",
    "normalizedSearchText": "甘肃临夏回族永靖永靖甘肃临夏回族"
  },
  {
    "code": "622924",
    "name": "广河县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 广河县",
    "rank": 3,
    "normalizedName": "广河",
    "normalizedValue": "甘肃临夏回族广河",
    "normalizedSearchText": "甘肃临夏回族广河广河甘肃临夏回族"
  },
  {
    "code": "622925",
    "name": "和政县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 和政县",
    "rank": 3,
    "normalizedName": "和政",
    "normalizedValue": "甘肃临夏回族和政",
    "normalizedSearchText": "甘肃临夏回族和政和政甘肃临夏回族"
  },
  {
    "code": "622926",
    "name": "东乡族自治县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 东乡族自治县",
    "rank": 3,
    "normalizedName": "东族自治",
    "normalizedValue": "甘肃临夏回族东族自治",
    "normalizedSearchText": "甘肃临夏回族东族自治东族自治甘肃临夏回族"
  },
  {
    "code": "622927",
    "name": "积石山保安族东乡族撒拉族自治县",
    "detail": "甘肃省 / 临夏回族自治州",
    "value": "甘肃省 / 临夏回族自治州 / 积石山保安族东乡族撒拉族自治县",
    "rank": 3,
    "normalizedName": "积石山保安族东族撒拉族自治",
    "normalizedValue": "甘肃临夏回族积石山保安族东族撒拉族自治",
    "normalizedSearchText": "甘肃临夏回族积石山保安族东族撒拉族自治积石山保安族东族撒拉族自治甘肃临夏回族"
  },
  {
    "code": "623000",
    "name": "甘南藏族自治州",
    "detail": "甘肃省",
    "value": "甘肃省 / 甘南藏族自治州",
    "rank": 2,
    "normalizedName": "甘南藏族",
    "normalizedValue": "甘肃甘南藏族",
    "normalizedSearchText": "甘肃甘南藏族甘南藏族甘肃"
  },
  {
    "code": "623001",
    "name": "合作市",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 合作市",
    "rank": 3,
    "normalizedName": "合作",
    "normalizedValue": "甘肃甘南藏族合作",
    "normalizedSearchText": "甘肃甘南藏族合作合作甘肃甘南藏族"
  },
  {
    "code": "623021",
    "name": "临潭县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 临潭县",
    "rank": 3,
    "normalizedName": "临潭",
    "normalizedValue": "甘肃甘南藏族临潭",
    "normalizedSearchText": "甘肃甘南藏族临潭临潭甘肃甘南藏族"
  },
  {
    "code": "623022",
    "name": "卓尼县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 卓尼县",
    "rank": 3,
    "normalizedName": "卓尼",
    "normalizedValue": "甘肃甘南藏族卓尼",
    "normalizedSearchText": "甘肃甘南藏族卓尼卓尼甘肃甘南藏族"
  },
  {
    "code": "623023",
    "name": "舟曲县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 舟曲县",
    "rank": 3,
    "normalizedName": "舟曲",
    "normalizedValue": "甘肃甘南藏族舟曲",
    "normalizedSearchText": "甘肃甘南藏族舟曲舟曲甘肃甘南藏族"
  },
  {
    "code": "623024",
    "name": "迭部县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 迭部县",
    "rank": 3,
    "normalizedName": "迭部",
    "normalizedValue": "甘肃甘南藏族迭部",
    "normalizedSearchText": "甘肃甘南藏族迭部迭部甘肃甘南藏族"
  },
  {
    "code": "623025",
    "name": "玛曲县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 玛曲县",
    "rank": 3,
    "normalizedName": "玛曲",
    "normalizedValue": "甘肃甘南藏族玛曲",
    "normalizedSearchText": "甘肃甘南藏族玛曲玛曲甘肃甘南藏族"
  },
  {
    "code": "623026",
    "name": "碌曲县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 碌曲县",
    "rank": 3,
    "normalizedName": "碌曲",
    "normalizedValue": "甘肃甘南藏族碌曲",
    "normalizedSearchText": "甘肃甘南藏族碌曲碌曲甘肃甘南藏族"
  },
  {
    "code": "623027",
    "name": "夏河县",
    "detail": "甘肃省 / 甘南藏族自治州",
    "value": "甘肃省 / 甘南藏族自治州 / 夏河县",
    "rank": 3,
    "normalizedName": "夏河",
    "normalizedValue": "甘肃甘南藏族夏河",
    "normalizedSearchText": "甘肃甘南藏族夏河夏河甘肃甘南藏族"
  },
  {
    "code": "630000",
    "name": "青海省",
    "detail": "?????",
    "value": "青海省",
    "rank": 1,
    "normalizedName": "青海",
    "normalizedValue": "青海",
    "normalizedSearchText": "青海青海"
  },
  {
    "code": "630100",
    "name": "西宁市",
    "detail": "青海省",
    "value": "青海省 / 西宁市",
    "rank": 2,
    "normalizedName": "西宁",
    "normalizedValue": "青海西宁",
    "normalizedSearchText": "青海西宁西宁青海"
  },
  {
    "code": "630102",
    "name": "城东区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 城东区",
    "rank": 3,
    "normalizedName": "城东",
    "normalizedValue": "青海西宁城东",
    "normalizedSearchText": "青海西宁城东城东青海西宁"
  },
  {
    "code": "630103",
    "name": "城中区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 城中区",
    "rank": 3,
    "normalizedName": "城中",
    "normalizedValue": "青海西宁城中",
    "normalizedSearchText": "青海西宁城中城中青海西宁"
  },
  {
    "code": "630104",
    "name": "城西区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 城西区",
    "rank": 3,
    "normalizedName": "城西",
    "normalizedValue": "青海西宁城西",
    "normalizedSearchText": "青海西宁城西城西青海西宁"
  },
  {
    "code": "630105",
    "name": "城北区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 城北区",
    "rank": 3,
    "normalizedName": "城北",
    "normalizedValue": "青海西宁城北",
    "normalizedSearchText": "青海西宁城北城北青海西宁"
  },
  {
    "code": "630106",
    "name": "湟中区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 湟中区",
    "rank": 3,
    "normalizedName": "湟中",
    "normalizedValue": "青海西宁湟中",
    "normalizedSearchText": "青海西宁湟中湟中青海西宁"
  },
  {
    "code": "630121",
    "name": "大通回族土族自治县",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 大通回族土族自治县",
    "rank": 3,
    "normalizedName": "大通回族土族自治",
    "normalizedValue": "青海西宁大通回族土族自治",
    "normalizedSearchText": "青海西宁大通回族土族自治大通回族土族自治青海西宁"
  },
  {
    "code": "630123",
    "name": "湟源县",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 湟源县",
    "rank": 3,
    "normalizedName": "湟源",
    "normalizedValue": "青海西宁湟源",
    "normalizedSearchText": "青海西宁湟源湟源青海西宁"
  },
  {
    "code": "630101",
    "name": "市辖区",
    "detail": "青海省 / 西宁市",
    "value": "青海省 / 西宁市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "青海西宁辖",
    "normalizedSearchText": "青海西宁辖辖青海西宁"
  },
  {
    "code": "630200",
    "name": "海东市",
    "detail": "青海省",
    "value": "青海省 / 海东市",
    "rank": 2,
    "normalizedName": "海东",
    "normalizedValue": "青海海东",
    "normalizedSearchText": "青海海东海东青海"
  },
  {
    "code": "630202",
    "name": "乐都区",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 乐都区",
    "rank": 3,
    "normalizedName": "乐都",
    "normalizedValue": "青海海东乐都",
    "normalizedSearchText": "青海海东乐都乐都青海海东"
  },
  {
    "code": "630203",
    "name": "平安区",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 平安区",
    "rank": 3,
    "normalizedName": "平安",
    "normalizedValue": "青海海东平安",
    "normalizedSearchText": "青海海东平安平安青海海东"
  },
  {
    "code": "630222",
    "name": "民和回族土族自治县",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 民和回族土族自治县",
    "rank": 3,
    "normalizedName": "民和回族土族自治",
    "normalizedValue": "青海海东民和回族土族自治",
    "normalizedSearchText": "青海海东民和回族土族自治民和回族土族自治青海海东"
  },
  {
    "code": "630223",
    "name": "互助土族自治县",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 互助土族自治县",
    "rank": 3,
    "normalizedName": "互助土族自治",
    "normalizedValue": "青海海东互助土族自治",
    "normalizedSearchText": "青海海东互助土族自治互助土族自治青海海东"
  },
  {
    "code": "630224",
    "name": "化隆回族自治县",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 化隆回族自治县",
    "rank": 3,
    "normalizedName": "化隆回族自治",
    "normalizedValue": "青海海东化隆回族自治",
    "normalizedSearchText": "青海海东化隆回族自治化隆回族自治青海海东"
  },
  {
    "code": "630225",
    "name": "循化撒拉族自治县",
    "detail": "青海省 / 海东市",
    "value": "青海省 / 海东市 / 循化撒拉族自治县",
    "rank": 3,
    "normalizedName": "循化撒拉族自治",
    "normalizedValue": "青海海东循化撒拉族自治",
    "normalizedSearchText": "青海海东循化撒拉族自治循化撒拉族自治青海海东"
  },
  {
    "code": "632200",
    "name": "海北藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 海北藏族自治州",
    "rank": 2,
    "normalizedName": "海北藏族",
    "normalizedValue": "青海海北藏族",
    "normalizedSearchText": "青海海北藏族海北藏族青海"
  },
  {
    "code": "632221",
    "name": "门源回族自治县",
    "detail": "青海省 / 海北藏族自治州",
    "value": "青海省 / 海北藏族自治州 / 门源回族自治县",
    "rank": 3,
    "normalizedName": "门源回族自治",
    "normalizedValue": "青海海北藏族门源回族自治",
    "normalizedSearchText": "青海海北藏族门源回族自治门源回族自治青海海北藏族"
  },
  {
    "code": "632222",
    "name": "祁连县",
    "detail": "青海省 / 海北藏族自治州",
    "value": "青海省 / 海北藏族自治州 / 祁连县",
    "rank": 3,
    "normalizedName": "祁连",
    "normalizedValue": "青海海北藏族祁连",
    "normalizedSearchText": "青海海北藏族祁连祁连青海海北藏族"
  },
  {
    "code": "632223",
    "name": "海晏县",
    "detail": "青海省 / 海北藏族自治州",
    "value": "青海省 / 海北藏族自治州 / 海晏县",
    "rank": 3,
    "normalizedName": "海晏",
    "normalizedValue": "青海海北藏族海晏",
    "normalizedSearchText": "青海海北藏族海晏海晏青海海北藏族"
  },
  {
    "code": "632224",
    "name": "刚察县",
    "detail": "青海省 / 海北藏族自治州",
    "value": "青海省 / 海北藏族自治州 / 刚察县",
    "rank": 3,
    "normalizedName": "刚察",
    "normalizedValue": "青海海北藏族刚察",
    "normalizedSearchText": "青海海北藏族刚察刚察青海海北藏族"
  },
  {
    "code": "632300",
    "name": "黄南藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 黄南藏族自治州",
    "rank": 2,
    "normalizedName": "黄南藏族",
    "normalizedValue": "青海黄南藏族",
    "normalizedSearchText": "青海黄南藏族黄南藏族青海"
  },
  {
    "code": "632301",
    "name": "同仁市",
    "detail": "青海省 / 黄南藏族自治州",
    "value": "青海省 / 黄南藏族自治州 / 同仁市",
    "rank": 3,
    "normalizedName": "同仁",
    "normalizedValue": "青海黄南藏族同仁",
    "normalizedSearchText": "青海黄南藏族同仁同仁青海黄南藏族"
  },
  {
    "code": "632322",
    "name": "尖扎县",
    "detail": "青海省 / 黄南藏族自治州",
    "value": "青海省 / 黄南藏族自治州 / 尖扎县",
    "rank": 3,
    "normalizedName": "尖扎",
    "normalizedValue": "青海黄南藏族尖扎",
    "normalizedSearchText": "青海黄南藏族尖扎尖扎青海黄南藏族"
  },
  {
    "code": "632323",
    "name": "泽库县",
    "detail": "青海省 / 黄南藏族自治州",
    "value": "青海省 / 黄南藏族自治州 / 泽库县",
    "rank": 3,
    "normalizedName": "泽库",
    "normalizedValue": "青海黄南藏族泽库",
    "normalizedSearchText": "青海黄南藏族泽库泽库青海黄南藏族"
  },
  {
    "code": "632324",
    "name": "河南蒙古族自治县",
    "detail": "青海省 / 黄南藏族自治州",
    "value": "青海省 / 黄南藏族自治州 / 河南蒙古族自治县",
    "rank": 3,
    "normalizedName": "河南蒙古族自治",
    "normalizedValue": "青海黄南藏族河南蒙古族自治",
    "normalizedSearchText": "青海黄南藏族河南蒙古族自治河南蒙古族自治青海黄南藏族"
  },
  {
    "code": "632500",
    "name": "海南藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 海南藏族自治州",
    "rank": 2,
    "normalizedName": "海南藏族",
    "normalizedValue": "青海海南藏族",
    "normalizedSearchText": "青海海南藏族海南藏族青海"
  },
  {
    "code": "632521",
    "name": "共和县",
    "detail": "青海省 / 海南藏族自治州",
    "value": "青海省 / 海南藏族自治州 / 共和县",
    "rank": 3,
    "normalizedName": "共和",
    "normalizedValue": "青海海南藏族共和",
    "normalizedSearchText": "青海海南藏族共和共和青海海南藏族"
  },
  {
    "code": "632522",
    "name": "同德县",
    "detail": "青海省 / 海南藏族自治州",
    "value": "青海省 / 海南藏族自治州 / 同德县",
    "rank": 3,
    "normalizedName": "同德",
    "normalizedValue": "青海海南藏族同德",
    "normalizedSearchText": "青海海南藏族同德同德青海海南藏族"
  },
  {
    "code": "632523",
    "name": "贵德县",
    "detail": "青海省 / 海南藏族自治州",
    "value": "青海省 / 海南藏族自治州 / 贵德县",
    "rank": 3,
    "normalizedName": "贵德",
    "normalizedValue": "青海海南藏族贵德",
    "normalizedSearchText": "青海海南藏族贵德贵德青海海南藏族"
  },
  {
    "code": "632524",
    "name": "兴海县",
    "detail": "青海省 / 海南藏族自治州",
    "value": "青海省 / 海南藏族自治州 / 兴海县",
    "rank": 3,
    "normalizedName": "兴海",
    "normalizedValue": "青海海南藏族兴海",
    "normalizedSearchText": "青海海南藏族兴海兴海青海海南藏族"
  },
  {
    "code": "632525",
    "name": "贵南县",
    "detail": "青海省 / 海南藏族自治州",
    "value": "青海省 / 海南藏族自治州 / 贵南县",
    "rank": 3,
    "normalizedName": "贵南",
    "normalizedValue": "青海海南藏族贵南",
    "normalizedSearchText": "青海海南藏族贵南贵南青海海南藏族"
  },
  {
    "code": "632600",
    "name": "果洛藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 果洛藏族自治州",
    "rank": 2,
    "normalizedName": "果洛藏族",
    "normalizedValue": "青海果洛藏族",
    "normalizedSearchText": "青海果洛藏族果洛藏族青海"
  },
  {
    "code": "632621",
    "name": "玛沁县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 玛沁县",
    "rank": 3,
    "normalizedName": "玛沁",
    "normalizedValue": "青海果洛藏族玛沁",
    "normalizedSearchText": "青海果洛藏族玛沁玛沁青海果洛藏族"
  },
  {
    "code": "632622",
    "name": "班玛县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 班玛县",
    "rank": 3,
    "normalizedName": "班玛",
    "normalizedValue": "青海果洛藏族班玛",
    "normalizedSearchText": "青海果洛藏族班玛班玛青海果洛藏族"
  },
  {
    "code": "632623",
    "name": "甘德县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 甘德县",
    "rank": 3,
    "normalizedName": "甘德",
    "normalizedValue": "青海果洛藏族甘德",
    "normalizedSearchText": "青海果洛藏族甘德甘德青海果洛藏族"
  },
  {
    "code": "632624",
    "name": "达日县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 达日县",
    "rank": 3,
    "normalizedName": "达日",
    "normalizedValue": "青海果洛藏族达日",
    "normalizedSearchText": "青海果洛藏族达日达日青海果洛藏族"
  },
  {
    "code": "632625",
    "name": "久治县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 久治县",
    "rank": 3,
    "normalizedName": "久治",
    "normalizedValue": "青海果洛藏族久治",
    "normalizedSearchText": "青海果洛藏族久治久治青海果洛藏族"
  },
  {
    "code": "632626",
    "name": "玛多县",
    "detail": "青海省 / 果洛藏族自治州",
    "value": "青海省 / 果洛藏族自治州 / 玛多县",
    "rank": 3,
    "normalizedName": "玛多",
    "normalizedValue": "青海果洛藏族玛多",
    "normalizedSearchText": "青海果洛藏族玛多玛多青海果洛藏族"
  },
  {
    "code": "632700",
    "name": "玉树藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 玉树藏族自治州",
    "rank": 2,
    "normalizedName": "玉树藏族",
    "normalizedValue": "青海玉树藏族",
    "normalizedSearchText": "青海玉树藏族玉树藏族青海"
  },
  {
    "code": "632701",
    "name": "玉树市",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 玉树市",
    "rank": 3,
    "normalizedName": "玉树",
    "normalizedValue": "青海玉树藏族玉树",
    "normalizedSearchText": "青海玉树藏族玉树玉树青海玉树藏族"
  },
  {
    "code": "632722",
    "name": "杂多县",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 杂多县",
    "rank": 3,
    "normalizedName": "杂多",
    "normalizedValue": "青海玉树藏族杂多",
    "normalizedSearchText": "青海玉树藏族杂多杂多青海玉树藏族"
  },
  {
    "code": "632723",
    "name": "称多县",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 称多县",
    "rank": 3,
    "normalizedName": "称多",
    "normalizedValue": "青海玉树藏族称多",
    "normalizedSearchText": "青海玉树藏族称多称多青海玉树藏族"
  },
  {
    "code": "632724",
    "name": "治多县",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 治多县",
    "rank": 3,
    "normalizedName": "治多",
    "normalizedValue": "青海玉树藏族治多",
    "normalizedSearchText": "青海玉树藏族治多治多青海玉树藏族"
  },
  {
    "code": "632725",
    "name": "囊谦县",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 囊谦县",
    "rank": 3,
    "normalizedName": "囊谦",
    "normalizedValue": "青海玉树藏族囊谦",
    "normalizedSearchText": "青海玉树藏族囊谦囊谦青海玉树藏族"
  },
  {
    "code": "632726",
    "name": "曲麻莱县",
    "detail": "青海省 / 玉树藏族自治州",
    "value": "青海省 / 玉树藏族自治州 / 曲麻莱县",
    "rank": 3,
    "normalizedName": "曲麻莱",
    "normalizedValue": "青海玉树藏族曲麻莱",
    "normalizedSearchText": "青海玉树藏族曲麻莱曲麻莱青海玉树藏族"
  },
  {
    "code": "632800",
    "name": "海西蒙古族藏族自治州",
    "detail": "青海省",
    "value": "青海省 / 海西蒙古族藏族自治州",
    "rank": 2,
    "normalizedName": "海西蒙古族藏族",
    "normalizedValue": "青海海西蒙古族藏族",
    "normalizedSearchText": "青海海西蒙古族藏族海西蒙古族藏族青海"
  },
  {
    "code": "632801",
    "name": "格尔木市",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 格尔木市",
    "rank": 3,
    "normalizedName": "格尔木",
    "normalizedValue": "青海海西蒙古族藏族格尔木",
    "normalizedSearchText": "青海海西蒙古族藏族格尔木格尔木青海海西蒙古族藏族"
  },
  {
    "code": "632802",
    "name": "德令哈市",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 德令哈市",
    "rank": 3,
    "normalizedName": "德令哈",
    "normalizedValue": "青海海西蒙古族藏族德令哈",
    "normalizedSearchText": "青海海西蒙古族藏族德令哈德令哈青海海西蒙古族藏族"
  },
  {
    "code": "632803",
    "name": "茫崖市",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 茫崖市",
    "rank": 3,
    "normalizedName": "茫崖",
    "normalizedValue": "青海海西蒙古族藏族茫崖",
    "normalizedSearchText": "青海海西蒙古族藏族茫崖茫崖青海海西蒙古族藏族"
  },
  {
    "code": "632821",
    "name": "乌兰县",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 乌兰县",
    "rank": 3,
    "normalizedName": "乌兰",
    "normalizedValue": "青海海西蒙古族藏族乌兰",
    "normalizedSearchText": "青海海西蒙古族藏族乌兰乌兰青海海西蒙古族藏族"
  },
  {
    "code": "632822",
    "name": "都兰县",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 都兰县",
    "rank": 3,
    "normalizedName": "都兰",
    "normalizedValue": "青海海西蒙古族藏族都兰",
    "normalizedSearchText": "青海海西蒙古族藏族都兰都兰青海海西蒙古族藏族"
  },
  {
    "code": "632823",
    "name": "天峻县",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 天峻县",
    "rank": 3,
    "normalizedName": "天峻",
    "normalizedValue": "青海海西蒙古族藏族天峻",
    "normalizedSearchText": "青海海西蒙古族藏族天峻天峻青海海西蒙古族藏族"
  },
  {
    "code": "632857",
    "name": "大柴旦行政委员会",
    "detail": "青海省 / 海西蒙古族藏族自治州",
    "value": "青海省 / 海西蒙古族藏族自治州 / 大柴旦行政委员会",
    "rank": 3,
    "normalizedName": "大柴旦行政委员会",
    "normalizedValue": "青海海西蒙古族藏族大柴旦行政委员会",
    "normalizedSearchText": "青海海西蒙古族藏族大柴旦行政委员会大柴旦行政委员会青海海西蒙古族藏族"
  },
  {
    "code": "640000",
    "name": "宁夏回族自治区",
    "detail": "?????",
    "value": "宁夏回族自治区",
    "rank": 1,
    "normalizedName": "宁夏回族",
    "normalizedValue": "宁夏回族",
    "normalizedSearchText": "宁夏回族宁夏回族"
  },
  {
    "code": "640100",
    "name": "银川市",
    "detail": "宁夏回族自治区",
    "value": "宁夏回族自治区 / 银川市",
    "rank": 2,
    "normalizedName": "银川",
    "normalizedValue": "宁夏回族银川",
    "normalizedSearchText": "宁夏回族银川银川宁夏回族"
  },
  {
    "code": "640104",
    "name": "兴庆区",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 兴庆区",
    "rank": 3,
    "normalizedName": "兴庆",
    "normalizedValue": "宁夏回族银川兴庆",
    "normalizedSearchText": "宁夏回族银川兴庆兴庆宁夏回族银川"
  },
  {
    "code": "640105",
    "name": "西夏区",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 西夏区",
    "rank": 3,
    "normalizedName": "西夏",
    "normalizedValue": "宁夏回族银川西夏",
    "normalizedSearchText": "宁夏回族银川西夏西夏宁夏回族银川"
  },
  {
    "code": "640106",
    "name": "金凤区",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 金凤区",
    "rank": 3,
    "normalizedName": "金凤",
    "normalizedValue": "宁夏回族银川金凤",
    "normalizedSearchText": "宁夏回族银川金凤金凤宁夏回族银川"
  },
  {
    "code": "640121",
    "name": "永宁县",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 永宁县",
    "rank": 3,
    "normalizedName": "永宁",
    "normalizedValue": "宁夏回族银川永宁",
    "normalizedSearchText": "宁夏回族银川永宁永宁宁夏回族银川"
  },
  {
    "code": "640122",
    "name": "贺兰县",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 贺兰县",
    "rank": 3,
    "normalizedName": "贺兰",
    "normalizedValue": "宁夏回族银川贺兰",
    "normalizedSearchText": "宁夏回族银川贺兰贺兰宁夏回族银川"
  },
  {
    "code": "640181",
    "name": "灵武市",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 灵武市",
    "rank": 3,
    "normalizedName": "灵武",
    "normalizedValue": "宁夏回族银川灵武",
    "normalizedSearchText": "宁夏回族银川灵武灵武宁夏回族银川"
  },
  {
    "code": "640101",
    "name": "市辖区",
    "detail": "宁夏回族自治区 / 银川市",
    "value": "宁夏回族自治区 / 银川市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "宁夏回族银川辖",
    "normalizedSearchText": "宁夏回族银川辖辖宁夏回族银川"
  },
  {
    "code": "640200",
    "name": "石嘴山市",
    "detail": "宁夏回族自治区",
    "value": "宁夏回族自治区 / 石嘴山市",
    "rank": 2,
    "normalizedName": "石嘴山",
    "normalizedValue": "宁夏回族石嘴山",
    "normalizedSearchText": "宁夏回族石嘴山石嘴山宁夏回族"
  },
  {
    "code": "640202",
    "name": "大武口区",
    "detail": "宁夏回族自治区 / 石嘴山市",
    "value": "宁夏回族自治区 / 石嘴山市 / 大武口区",
    "rank": 3,
    "normalizedName": "大武口",
    "normalizedValue": "宁夏回族石嘴山大武口",
    "normalizedSearchText": "宁夏回族石嘴山大武口大武口宁夏回族石嘴山"
  },
  {
    "code": "640205",
    "name": "惠农区",
    "detail": "宁夏回族自治区 / 石嘴山市",
    "value": "宁夏回族自治区 / 石嘴山市 / 惠农区",
    "rank": 3,
    "normalizedName": "惠农",
    "normalizedValue": "宁夏回族石嘴山惠农",
    "normalizedSearchText": "宁夏回族石嘴山惠农惠农宁夏回族石嘴山"
  },
  {
    "code": "640221",
    "name": "平罗县",
    "detail": "宁夏回族自治区 / 石嘴山市",
    "value": "宁夏回族自治区 / 石嘴山市 / 平罗县",
    "rank": 3,
    "normalizedName": "平罗",
    "normalizedValue": "宁夏回族石嘴山平罗",
    "normalizedSearchText": "宁夏回族石嘴山平罗平罗宁夏回族石嘴山"
  },
  {
    "code": "640201",
    "name": "市辖区",
    "detail": "宁夏回族自治区 / 石嘴山市",
    "value": "宁夏回族自治区 / 石嘴山市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "宁夏回族石嘴山辖",
    "normalizedSearchText": "宁夏回族石嘴山辖辖宁夏回族石嘴山"
  },
  {
    "code": "640300",
    "name": "吴忠市",
    "detail": "宁夏回族自治区",
    "value": "宁夏回族自治区 / 吴忠市",
    "rank": 2,
    "normalizedName": "吴忠",
    "normalizedValue": "宁夏回族吴忠",
    "normalizedSearchText": "宁夏回族吴忠吴忠宁夏回族"
  },
  {
    "code": "640302",
    "name": "利通区",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 利通区",
    "rank": 3,
    "normalizedName": "利通",
    "normalizedValue": "宁夏回族吴忠利通",
    "normalizedSearchText": "宁夏回族吴忠利通利通宁夏回族吴忠"
  },
  {
    "code": "640303",
    "name": "红寺堡区",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 红寺堡区",
    "rank": 3,
    "normalizedName": "红寺堡",
    "normalizedValue": "宁夏回族吴忠红寺堡",
    "normalizedSearchText": "宁夏回族吴忠红寺堡红寺堡宁夏回族吴忠"
  },
  {
    "code": "640323",
    "name": "盐池县",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 盐池县",
    "rank": 3,
    "normalizedName": "盐池",
    "normalizedValue": "宁夏回族吴忠盐池",
    "normalizedSearchText": "宁夏回族吴忠盐池盐池宁夏回族吴忠"
  },
  {
    "code": "640324",
    "name": "同心县",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 同心县",
    "rank": 3,
    "normalizedName": "同心",
    "normalizedValue": "宁夏回族吴忠同心",
    "normalizedSearchText": "宁夏回族吴忠同心同心宁夏回族吴忠"
  },
  {
    "code": "640381",
    "name": "青铜峡市",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 青铜峡市",
    "rank": 3,
    "normalizedName": "青铜峡",
    "normalizedValue": "宁夏回族吴忠青铜峡",
    "normalizedSearchText": "宁夏回族吴忠青铜峡青铜峡宁夏回族吴忠"
  },
  {
    "code": "640301",
    "name": "市辖区",
    "detail": "宁夏回族自治区 / 吴忠市",
    "value": "宁夏回族自治区 / 吴忠市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "宁夏回族吴忠辖",
    "normalizedSearchText": "宁夏回族吴忠辖辖宁夏回族吴忠"
  },
  {
    "code": "640400",
    "name": "固原市",
    "detail": "宁夏回族自治区",
    "value": "宁夏回族自治区 / 固原市",
    "rank": 2,
    "normalizedName": "固原",
    "normalizedValue": "宁夏回族固原",
    "normalizedSearchText": "宁夏回族固原固原宁夏回族"
  },
  {
    "code": "640402",
    "name": "原州区",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 原州区",
    "rank": 3,
    "normalizedName": "原州",
    "normalizedValue": "宁夏回族固原原州",
    "normalizedSearchText": "宁夏回族固原原州原州宁夏回族固原"
  },
  {
    "code": "640422",
    "name": "西吉县",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 西吉县",
    "rank": 3,
    "normalizedName": "西吉",
    "normalizedValue": "宁夏回族固原西吉",
    "normalizedSearchText": "宁夏回族固原西吉西吉宁夏回族固原"
  },
  {
    "code": "640423",
    "name": "隆德县",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 隆德县",
    "rank": 3,
    "normalizedName": "隆德",
    "normalizedValue": "宁夏回族固原隆德",
    "normalizedSearchText": "宁夏回族固原隆德隆德宁夏回族固原"
  },
  {
    "code": "640424",
    "name": "泾源县",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 泾源县",
    "rank": 3,
    "normalizedName": "泾源",
    "normalizedValue": "宁夏回族固原泾源",
    "normalizedSearchText": "宁夏回族固原泾源泾源宁夏回族固原"
  },
  {
    "code": "640425",
    "name": "彭阳县",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 彭阳县",
    "rank": 3,
    "normalizedName": "彭阳",
    "normalizedValue": "宁夏回族固原彭阳",
    "normalizedSearchText": "宁夏回族固原彭阳彭阳宁夏回族固原"
  },
  {
    "code": "640401",
    "name": "市辖区",
    "detail": "宁夏回族自治区 / 固原市",
    "value": "宁夏回族自治区 / 固原市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "宁夏回族固原辖",
    "normalizedSearchText": "宁夏回族固原辖辖宁夏回族固原"
  },
  {
    "code": "640500",
    "name": "中卫市",
    "detail": "宁夏回族自治区",
    "value": "宁夏回族自治区 / 中卫市",
    "rank": 2,
    "normalizedName": "中卫",
    "normalizedValue": "宁夏回族中卫",
    "normalizedSearchText": "宁夏回族中卫中卫宁夏回族"
  },
  {
    "code": "640502",
    "name": "沙坡头区",
    "detail": "宁夏回族自治区 / 中卫市",
    "value": "宁夏回族自治区 / 中卫市 / 沙坡头区",
    "rank": 3,
    "normalizedName": "沙坡头",
    "normalizedValue": "宁夏回族中卫沙坡头",
    "normalizedSearchText": "宁夏回族中卫沙坡头沙坡头宁夏回族中卫"
  },
  {
    "code": "640521",
    "name": "中宁县",
    "detail": "宁夏回族自治区 / 中卫市",
    "value": "宁夏回族自治区 / 中卫市 / 中宁县",
    "rank": 3,
    "normalizedName": "中宁",
    "normalizedValue": "宁夏回族中卫中宁",
    "normalizedSearchText": "宁夏回族中卫中宁中宁宁夏回族中卫"
  },
  {
    "code": "640522",
    "name": "海原县",
    "detail": "宁夏回族自治区 / 中卫市",
    "value": "宁夏回族自治区 / 中卫市 / 海原县",
    "rank": 3,
    "normalizedName": "海原",
    "normalizedValue": "宁夏回族中卫海原",
    "normalizedSearchText": "宁夏回族中卫海原海原宁夏回族中卫"
  },
  {
    "code": "640501",
    "name": "市辖区",
    "detail": "宁夏回族自治区 / 中卫市",
    "value": "宁夏回族自治区 / 中卫市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "宁夏回族中卫辖",
    "normalizedSearchText": "宁夏回族中卫辖辖宁夏回族中卫"
  },
  {
    "code": "650000",
    "name": "新疆维吾尔自治区",
    "detail": "?????",
    "value": "新疆维吾尔自治区",
    "rank": 1,
    "normalizedName": "新疆维吾尔",
    "normalizedValue": "新疆维吾尔",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔"
  },
  {
    "code": "650100",
    "name": "乌鲁木齐市",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市",
    "rank": 2,
    "normalizedName": "乌鲁木齐",
    "normalizedValue": "新疆维吾尔乌鲁木齐",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐乌鲁木齐新疆维吾尔"
  },
  {
    "code": "650102",
    "name": "天山区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 天山区",
    "rank": 3,
    "normalizedName": "天山",
    "normalizedValue": "新疆维吾尔乌鲁木齐天山",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐天山天山新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650103",
    "name": "沙依巴克区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 沙依巴克区",
    "rank": 3,
    "normalizedName": "沙依巴克",
    "normalizedValue": "新疆维吾尔乌鲁木齐沙依巴克",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐沙依巴克沙依巴克新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650104",
    "name": "新市区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 新市区",
    "rank": 3,
    "normalizedName": "新",
    "normalizedValue": "新疆维吾尔乌鲁木齐新",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐新新新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650105",
    "name": "水磨沟区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 水磨沟区",
    "rank": 3,
    "normalizedName": "水磨沟",
    "normalizedValue": "新疆维吾尔乌鲁木齐水磨沟",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐水磨沟水磨沟新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650106",
    "name": "头屯河区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 头屯河区",
    "rank": 3,
    "normalizedName": "头屯河",
    "normalizedValue": "新疆维吾尔乌鲁木齐头屯河",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐头屯河头屯河新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650107",
    "name": "达坂城区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 达坂城区",
    "rank": 3,
    "normalizedName": "达坂城",
    "normalizedValue": "新疆维吾尔乌鲁木齐达坂城",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐达坂城达坂城新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650109",
    "name": "米东区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 米东区",
    "rank": 3,
    "normalizedName": "米东",
    "normalizedValue": "新疆维吾尔乌鲁木齐米东",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐米东米东新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650121",
    "name": "乌鲁木齐县",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 乌鲁木齐县",
    "rank": 3,
    "normalizedName": "乌鲁木齐",
    "normalizedValue": "新疆维吾尔乌鲁木齐乌鲁木齐",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐乌鲁木齐乌鲁木齐新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650101",
    "name": "市辖区",
    "detail": "新疆维吾尔自治区 / 乌鲁木齐市",
    "value": "新疆维吾尔自治区 / 乌鲁木齐市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "新疆维吾尔乌鲁木齐辖",
    "normalizedSearchText": "新疆维吾尔乌鲁木齐辖辖新疆维吾尔乌鲁木齐"
  },
  {
    "code": "650200",
    "name": "克拉玛依市",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 克拉玛依市",
    "rank": 2,
    "normalizedName": "克拉玛依",
    "normalizedValue": "新疆维吾尔克拉玛依",
    "normalizedSearchText": "新疆维吾尔克拉玛依克拉玛依新疆维吾尔"
  },
  {
    "code": "650202",
    "name": "独山子区",
    "detail": "新疆维吾尔自治区 / 克拉玛依市",
    "value": "新疆维吾尔自治区 / 克拉玛依市 / 独山子区",
    "rank": 3,
    "normalizedName": "独山子",
    "normalizedValue": "新疆维吾尔克拉玛依独山子",
    "normalizedSearchText": "新疆维吾尔克拉玛依独山子独山子新疆维吾尔克拉玛依"
  },
  {
    "code": "650203",
    "name": "克拉玛依区",
    "detail": "新疆维吾尔自治区 / 克拉玛依市",
    "value": "新疆维吾尔自治区 / 克拉玛依市 / 克拉玛依区",
    "rank": 3,
    "normalizedName": "克拉玛依",
    "normalizedValue": "新疆维吾尔克拉玛依克拉玛依",
    "normalizedSearchText": "新疆维吾尔克拉玛依克拉玛依克拉玛依新疆维吾尔克拉玛依"
  },
  {
    "code": "650204",
    "name": "白碱滩区",
    "detail": "新疆维吾尔自治区 / 克拉玛依市",
    "value": "新疆维吾尔自治区 / 克拉玛依市 / 白碱滩区",
    "rank": 3,
    "normalizedName": "白碱滩",
    "normalizedValue": "新疆维吾尔克拉玛依白碱滩",
    "normalizedSearchText": "新疆维吾尔克拉玛依白碱滩白碱滩新疆维吾尔克拉玛依"
  },
  {
    "code": "650205",
    "name": "乌尔禾区",
    "detail": "新疆维吾尔自治区 / 克拉玛依市",
    "value": "新疆维吾尔自治区 / 克拉玛依市 / 乌尔禾区",
    "rank": 3,
    "normalizedName": "乌尔禾",
    "normalizedValue": "新疆维吾尔克拉玛依乌尔禾",
    "normalizedSearchText": "新疆维吾尔克拉玛依乌尔禾乌尔禾新疆维吾尔克拉玛依"
  },
  {
    "code": "650201",
    "name": "市辖区",
    "detail": "新疆维吾尔自治区 / 克拉玛依市",
    "value": "新疆维吾尔自治区 / 克拉玛依市 / 市辖区",
    "rank": 3,
    "normalizedName": "辖",
    "normalizedValue": "新疆维吾尔克拉玛依辖",
    "normalizedSearchText": "新疆维吾尔克拉玛依辖辖新疆维吾尔克拉玛依"
  },
  {
    "code": "650400",
    "name": "吐鲁番市",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 吐鲁番市",
    "rank": 2,
    "normalizedName": "吐鲁番",
    "normalizedValue": "新疆维吾尔吐鲁番",
    "normalizedSearchText": "新疆维吾尔吐鲁番吐鲁番新疆维吾尔"
  },
  {
    "code": "650402",
    "name": "高昌区",
    "detail": "新疆维吾尔自治区 / 吐鲁番市",
    "value": "新疆维吾尔自治区 / 吐鲁番市 / 高昌区",
    "rank": 3,
    "normalizedName": "高昌",
    "normalizedValue": "新疆维吾尔吐鲁番高昌",
    "normalizedSearchText": "新疆维吾尔吐鲁番高昌高昌新疆维吾尔吐鲁番"
  },
  {
    "code": "650421",
    "name": "鄯善县",
    "detail": "新疆维吾尔自治区 / 吐鲁番市",
    "value": "新疆维吾尔自治区 / 吐鲁番市 / 鄯善县",
    "rank": 3,
    "normalizedName": "鄯善",
    "normalizedValue": "新疆维吾尔吐鲁番鄯善",
    "normalizedSearchText": "新疆维吾尔吐鲁番鄯善鄯善新疆维吾尔吐鲁番"
  },
  {
    "code": "650422",
    "name": "托克逊县",
    "detail": "新疆维吾尔自治区 / 吐鲁番市",
    "value": "新疆维吾尔自治区 / 吐鲁番市 / 托克逊县",
    "rank": 3,
    "normalizedName": "托克逊",
    "normalizedValue": "新疆维吾尔吐鲁番托克逊",
    "normalizedSearchText": "新疆维吾尔吐鲁番托克逊托克逊新疆维吾尔吐鲁番"
  },
  {
    "code": "650500",
    "name": "哈密市",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 哈密市",
    "rank": 2,
    "normalizedName": "哈密",
    "normalizedValue": "新疆维吾尔哈密",
    "normalizedSearchText": "新疆维吾尔哈密哈密新疆维吾尔"
  },
  {
    "code": "650502",
    "name": "伊州区",
    "detail": "新疆维吾尔自治区 / 哈密市",
    "value": "新疆维吾尔自治区 / 哈密市 / 伊州区",
    "rank": 3,
    "normalizedName": "伊州",
    "normalizedValue": "新疆维吾尔哈密伊州",
    "normalizedSearchText": "新疆维吾尔哈密伊州伊州新疆维吾尔哈密"
  },
  {
    "code": "650521",
    "name": "巴里坤哈萨克自治县",
    "detail": "新疆维吾尔自治区 / 哈密市",
    "value": "新疆维吾尔自治区 / 哈密市 / 巴里坤哈萨克自治县",
    "rank": 3,
    "normalizedName": "巴里坤哈萨克自治",
    "normalizedValue": "新疆维吾尔哈密巴里坤哈萨克自治",
    "normalizedSearchText": "新疆维吾尔哈密巴里坤哈萨克自治巴里坤哈萨克自治新疆维吾尔哈密"
  },
  {
    "code": "650522",
    "name": "伊吾县",
    "detail": "新疆维吾尔自治区 / 哈密市",
    "value": "新疆维吾尔自治区 / 哈密市 / 伊吾县",
    "rank": 3,
    "normalizedName": "伊吾",
    "normalizedValue": "新疆维吾尔哈密伊吾",
    "normalizedSearchText": "新疆维吾尔哈密伊吾伊吾新疆维吾尔哈密"
  },
  {
    "code": "652300",
    "name": "昌吉回族自治州",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州",
    "rank": 2,
    "normalizedName": "昌吉回族",
    "normalizedValue": "新疆维吾尔昌吉回族",
    "normalizedSearchText": "新疆维吾尔昌吉回族昌吉回族新疆维吾尔"
  },
  {
    "code": "652301",
    "name": "昌吉市",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 昌吉市",
    "rank": 3,
    "normalizedName": "昌吉",
    "normalizedValue": "新疆维吾尔昌吉回族昌吉",
    "normalizedSearchText": "新疆维吾尔昌吉回族昌吉昌吉新疆维吾尔昌吉回族"
  },
  {
    "code": "652302",
    "name": "阜康市",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 阜康市",
    "rank": 3,
    "normalizedName": "阜康",
    "normalizedValue": "新疆维吾尔昌吉回族阜康",
    "normalizedSearchText": "新疆维吾尔昌吉回族阜康阜康新疆维吾尔昌吉回族"
  },
  {
    "code": "652323",
    "name": "呼图壁县",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 呼图壁县",
    "rank": 3,
    "normalizedName": "呼图壁",
    "normalizedValue": "新疆维吾尔昌吉回族呼图壁",
    "normalizedSearchText": "新疆维吾尔昌吉回族呼图壁呼图壁新疆维吾尔昌吉回族"
  },
  {
    "code": "652324",
    "name": "玛纳斯县",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 玛纳斯县",
    "rank": 3,
    "normalizedName": "玛纳斯",
    "normalizedValue": "新疆维吾尔昌吉回族玛纳斯",
    "normalizedSearchText": "新疆维吾尔昌吉回族玛纳斯玛纳斯新疆维吾尔昌吉回族"
  },
  {
    "code": "652325",
    "name": "奇台县",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 奇台县",
    "rank": 3,
    "normalizedName": "奇台",
    "normalizedValue": "新疆维吾尔昌吉回族奇台",
    "normalizedSearchText": "新疆维吾尔昌吉回族奇台奇台新疆维吾尔昌吉回族"
  },
  {
    "code": "652327",
    "name": "吉木萨尔县",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 吉木萨尔县",
    "rank": 3,
    "normalizedName": "吉木萨尔",
    "normalizedValue": "新疆维吾尔昌吉回族吉木萨尔",
    "normalizedSearchText": "新疆维吾尔昌吉回族吉木萨尔吉木萨尔新疆维吾尔昌吉回族"
  },
  {
    "code": "652328",
    "name": "木垒哈萨克自治县",
    "detail": "新疆维吾尔自治区 / 昌吉回族自治州",
    "value": "新疆维吾尔自治区 / 昌吉回族自治州 / 木垒哈萨克自治县",
    "rank": 3,
    "normalizedName": "木垒哈萨克自治",
    "normalizedValue": "新疆维吾尔昌吉回族木垒哈萨克自治",
    "normalizedSearchText": "新疆维吾尔昌吉回族木垒哈萨克自治木垒哈萨克自治新疆维吾尔昌吉回族"
  },
  {
    "code": "652700",
    "name": "博尔塔拉蒙古自治州",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州",
    "rank": 2,
    "normalizedName": "博尔塔拉蒙古",
    "normalizedValue": "新疆维吾尔博尔塔拉蒙古",
    "normalizedSearchText": "新疆维吾尔博尔塔拉蒙古博尔塔拉蒙古新疆维吾尔"
  },
  {
    "code": "652701",
    "name": "博乐市",
    "detail": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州",
    "value": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州 / 博乐市",
    "rank": 3,
    "normalizedName": "博乐",
    "normalizedValue": "新疆维吾尔博尔塔拉蒙古博乐",
    "normalizedSearchText": "新疆维吾尔博尔塔拉蒙古博乐博乐新疆维吾尔博尔塔拉蒙古"
  },
  {
    "code": "652702",
    "name": "阿拉山口市",
    "detail": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州",
    "value": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州 / 阿拉山口市",
    "rank": 3,
    "normalizedName": "阿拉山口",
    "normalizedValue": "新疆维吾尔博尔塔拉蒙古阿拉山口",
    "normalizedSearchText": "新疆维吾尔博尔塔拉蒙古阿拉山口阿拉山口新疆维吾尔博尔塔拉蒙古"
  },
  {
    "code": "652722",
    "name": "精河县",
    "detail": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州",
    "value": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州 / 精河县",
    "rank": 3,
    "normalizedName": "精河",
    "normalizedValue": "新疆维吾尔博尔塔拉蒙古精河",
    "normalizedSearchText": "新疆维吾尔博尔塔拉蒙古精河精河新疆维吾尔博尔塔拉蒙古"
  },
  {
    "code": "652723",
    "name": "温泉县",
    "detail": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州",
    "value": "新疆维吾尔自治区 / 博尔塔拉蒙古自治州 / 温泉县",
    "rank": 3,
    "normalizedName": "温泉",
    "normalizedValue": "新疆维吾尔博尔塔拉蒙古温泉",
    "normalizedSearchText": "新疆维吾尔博尔塔拉蒙古温泉温泉新疆维吾尔博尔塔拉蒙古"
  },
  {
    "code": "652800",
    "name": "巴音郭楞蒙古自治州",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "rank": 2,
    "normalizedName": "巴音郭楞蒙古",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古巴音郭楞蒙古新疆维吾尔"
  },
  {
    "code": "652801",
    "name": "库尔勒市",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 库尔勒市",
    "rank": 3,
    "normalizedName": "库尔勒",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古库尔勒",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古库尔勒库尔勒新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652822",
    "name": "轮台县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 轮台县",
    "rank": 3,
    "normalizedName": "轮台",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古轮台",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古轮台轮台新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652823",
    "name": "尉犁县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 尉犁县",
    "rank": 3,
    "normalizedName": "尉犁",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古尉犁",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古尉犁尉犁新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652824",
    "name": "若羌县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 若羌县",
    "rank": 3,
    "normalizedName": "若羌",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古若羌",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古若羌若羌新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652825",
    "name": "且末县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 且末县",
    "rank": 3,
    "normalizedName": "且末",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古且末",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古且末且末新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652826",
    "name": "焉耆回族自治县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 焉耆回族自治县",
    "rank": 3,
    "normalizedName": "焉耆回族自治",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古焉耆回族自治",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古焉耆回族自治焉耆回族自治新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652827",
    "name": "和静县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 和静县",
    "rank": 3,
    "normalizedName": "和静",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古和静",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古和静和静新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652828",
    "name": "和硕县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 和硕县",
    "rank": 3,
    "normalizedName": "和硕",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古和硕",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古和硕和硕新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652829",
    "name": "博湖县",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 博湖县",
    "rank": 3,
    "normalizedName": "博湖",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古博湖",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古博湖博湖新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652871",
    "name": "库尔勒经济技术开发区",
    "detail": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州",
    "value": "新疆维吾尔自治区 / 巴音郭楞蒙古自治州 / 库尔勒经济技术开发区",
    "rank": 3,
    "normalizedName": "库尔勒经济技术开发",
    "normalizedValue": "新疆维吾尔巴音郭楞蒙古库尔勒经济技术开发",
    "normalizedSearchText": "新疆维吾尔巴音郭楞蒙古库尔勒经济技术开发库尔勒经济技术开发新疆维吾尔巴音郭楞蒙古"
  },
  {
    "code": "652900",
    "name": "阿克苏地区",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 阿克苏地区",
    "rank": 2,
    "normalizedName": "阿克苏",
    "normalizedValue": "新疆维吾尔阿克苏",
    "normalizedSearchText": "新疆维吾尔阿克苏阿克苏新疆维吾尔"
  },
  {
    "code": "652901",
    "name": "阿克苏市",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 阿克苏市",
    "rank": 3,
    "normalizedName": "阿克苏",
    "normalizedValue": "新疆维吾尔阿克苏阿克苏",
    "normalizedSearchText": "新疆维吾尔阿克苏阿克苏阿克苏新疆维吾尔阿克苏"
  },
  {
    "code": "652902",
    "name": "库车市",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 库车市",
    "rank": 3,
    "normalizedName": "库车",
    "normalizedValue": "新疆维吾尔阿克苏库车",
    "normalizedSearchText": "新疆维吾尔阿克苏库车库车新疆维吾尔阿克苏"
  },
  {
    "code": "652922",
    "name": "温宿县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 温宿县",
    "rank": 3,
    "normalizedName": "温宿",
    "normalizedValue": "新疆维吾尔阿克苏温宿",
    "normalizedSearchText": "新疆维吾尔阿克苏温宿温宿新疆维吾尔阿克苏"
  },
  {
    "code": "652924",
    "name": "沙雅县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 沙雅县",
    "rank": 3,
    "normalizedName": "沙雅",
    "normalizedValue": "新疆维吾尔阿克苏沙雅",
    "normalizedSearchText": "新疆维吾尔阿克苏沙雅沙雅新疆维吾尔阿克苏"
  },
  {
    "code": "652925",
    "name": "新和县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 新和县",
    "rank": 3,
    "normalizedName": "新和",
    "normalizedValue": "新疆维吾尔阿克苏新和",
    "normalizedSearchText": "新疆维吾尔阿克苏新和新和新疆维吾尔阿克苏"
  },
  {
    "code": "652926",
    "name": "拜城县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 拜城县",
    "rank": 3,
    "normalizedName": "拜城",
    "normalizedValue": "新疆维吾尔阿克苏拜城",
    "normalizedSearchText": "新疆维吾尔阿克苏拜城拜城新疆维吾尔阿克苏"
  },
  {
    "code": "652927",
    "name": "乌什县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 乌什县",
    "rank": 3,
    "normalizedName": "乌什",
    "normalizedValue": "新疆维吾尔阿克苏乌什",
    "normalizedSearchText": "新疆维吾尔阿克苏乌什乌什新疆维吾尔阿克苏"
  },
  {
    "code": "652928",
    "name": "阿瓦提县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 阿瓦提县",
    "rank": 3,
    "normalizedName": "阿瓦提",
    "normalizedValue": "新疆维吾尔阿克苏阿瓦提",
    "normalizedSearchText": "新疆维吾尔阿克苏阿瓦提阿瓦提新疆维吾尔阿克苏"
  },
  {
    "code": "652929",
    "name": "柯坪县",
    "detail": "新疆维吾尔自治区 / 阿克苏地区",
    "value": "新疆维吾尔自治区 / 阿克苏地区 / 柯坪县",
    "rank": 3,
    "normalizedName": "柯坪",
    "normalizedValue": "新疆维吾尔阿克苏柯坪",
    "normalizedSearchText": "新疆维吾尔阿克苏柯坪柯坪新疆维吾尔阿克苏"
  },
  {
    "code": "653000",
    "name": "克孜勒苏柯尔克孜自治州",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州",
    "rank": 2,
    "normalizedName": "克孜勒苏柯尔克孜",
    "normalizedValue": "新疆维吾尔克孜勒苏柯尔克孜",
    "normalizedSearchText": "新疆维吾尔克孜勒苏柯尔克孜克孜勒苏柯尔克孜新疆维吾尔"
  },
  {
    "code": "653001",
    "name": "阿图什市",
    "detail": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州",
    "value": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州 / 阿图什市",
    "rank": 3,
    "normalizedName": "阿图什",
    "normalizedValue": "新疆维吾尔克孜勒苏柯尔克孜阿图什",
    "normalizedSearchText": "新疆维吾尔克孜勒苏柯尔克孜阿图什阿图什新疆维吾尔克孜勒苏柯尔克孜"
  },
  {
    "code": "653022",
    "name": "阿克陶县",
    "detail": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州",
    "value": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州 / 阿克陶县",
    "rank": 3,
    "normalizedName": "阿克陶",
    "normalizedValue": "新疆维吾尔克孜勒苏柯尔克孜阿克陶",
    "normalizedSearchText": "新疆维吾尔克孜勒苏柯尔克孜阿克陶阿克陶新疆维吾尔克孜勒苏柯尔克孜"
  },
  {
    "code": "653023",
    "name": "阿合奇县",
    "detail": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州",
    "value": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州 / 阿合奇县",
    "rank": 3,
    "normalizedName": "阿合奇",
    "normalizedValue": "新疆维吾尔克孜勒苏柯尔克孜阿合奇",
    "normalizedSearchText": "新疆维吾尔克孜勒苏柯尔克孜阿合奇阿合奇新疆维吾尔克孜勒苏柯尔克孜"
  },
  {
    "code": "653024",
    "name": "乌恰县",
    "detail": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州",
    "value": "新疆维吾尔自治区 / 克孜勒苏柯尔克孜自治州 / 乌恰县",
    "rank": 3,
    "normalizedName": "乌恰",
    "normalizedValue": "新疆维吾尔克孜勒苏柯尔克孜乌恰",
    "normalizedSearchText": "新疆维吾尔克孜勒苏柯尔克孜乌恰乌恰新疆维吾尔克孜勒苏柯尔克孜"
  },
  {
    "code": "653100",
    "name": "喀什地区",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 喀什地区",
    "rank": 2,
    "normalizedName": "喀什",
    "normalizedValue": "新疆维吾尔喀什",
    "normalizedSearchText": "新疆维吾尔喀什喀什新疆维吾尔"
  },
  {
    "code": "653101",
    "name": "喀什市",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 喀什市",
    "rank": 3,
    "normalizedName": "喀什",
    "normalizedValue": "新疆维吾尔喀什喀什",
    "normalizedSearchText": "新疆维吾尔喀什喀什喀什新疆维吾尔喀什"
  },
  {
    "code": "653121",
    "name": "疏附县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 疏附县",
    "rank": 3,
    "normalizedName": "疏附",
    "normalizedValue": "新疆维吾尔喀什疏附",
    "normalizedSearchText": "新疆维吾尔喀什疏附疏附新疆维吾尔喀什"
  },
  {
    "code": "653122",
    "name": "疏勒县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 疏勒县",
    "rank": 3,
    "normalizedName": "疏勒",
    "normalizedValue": "新疆维吾尔喀什疏勒",
    "normalizedSearchText": "新疆维吾尔喀什疏勒疏勒新疆维吾尔喀什"
  },
  {
    "code": "653123",
    "name": "英吉沙县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 英吉沙县",
    "rank": 3,
    "normalizedName": "英吉沙",
    "normalizedValue": "新疆维吾尔喀什英吉沙",
    "normalizedSearchText": "新疆维吾尔喀什英吉沙英吉沙新疆维吾尔喀什"
  },
  {
    "code": "653124",
    "name": "泽普县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 泽普县",
    "rank": 3,
    "normalizedName": "泽普",
    "normalizedValue": "新疆维吾尔喀什泽普",
    "normalizedSearchText": "新疆维吾尔喀什泽普泽普新疆维吾尔喀什"
  },
  {
    "code": "653125",
    "name": "莎车县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 莎车县",
    "rank": 3,
    "normalizedName": "莎车",
    "normalizedValue": "新疆维吾尔喀什莎车",
    "normalizedSearchText": "新疆维吾尔喀什莎车莎车新疆维吾尔喀什"
  },
  {
    "code": "653126",
    "name": "叶城县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 叶城县",
    "rank": 3,
    "normalizedName": "叶城",
    "normalizedValue": "新疆维吾尔喀什叶城",
    "normalizedSearchText": "新疆维吾尔喀什叶城叶城新疆维吾尔喀什"
  },
  {
    "code": "653127",
    "name": "麦盖提县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 麦盖提县",
    "rank": 3,
    "normalizedName": "麦盖提",
    "normalizedValue": "新疆维吾尔喀什麦盖提",
    "normalizedSearchText": "新疆维吾尔喀什麦盖提麦盖提新疆维吾尔喀什"
  },
  {
    "code": "653128",
    "name": "岳普湖县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 岳普湖县",
    "rank": 3,
    "normalizedName": "岳普湖",
    "normalizedValue": "新疆维吾尔喀什岳普湖",
    "normalizedSearchText": "新疆维吾尔喀什岳普湖岳普湖新疆维吾尔喀什"
  },
  {
    "code": "653129",
    "name": "伽师县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 伽师县",
    "rank": 3,
    "normalizedName": "伽师",
    "normalizedValue": "新疆维吾尔喀什伽师",
    "normalizedSearchText": "新疆维吾尔喀什伽师伽师新疆维吾尔喀什"
  },
  {
    "code": "653130",
    "name": "巴楚县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 巴楚县",
    "rank": 3,
    "normalizedName": "巴楚",
    "normalizedValue": "新疆维吾尔喀什巴楚",
    "normalizedSearchText": "新疆维吾尔喀什巴楚巴楚新疆维吾尔喀什"
  },
  {
    "code": "653131",
    "name": "塔什库尔干塔吉克自治县",
    "detail": "新疆维吾尔自治区 / 喀什地区",
    "value": "新疆维吾尔自治区 / 喀什地区 / 塔什库尔干塔吉克自治县",
    "rank": 3,
    "normalizedName": "塔什库尔干塔吉克自治",
    "normalizedValue": "新疆维吾尔喀什塔什库尔干塔吉克自治",
    "normalizedSearchText": "新疆维吾尔喀什塔什库尔干塔吉克自治塔什库尔干塔吉克自治新疆维吾尔喀什"
  },
  {
    "code": "653200",
    "name": "和田地区",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 和田地区",
    "rank": 2,
    "normalizedName": "和田",
    "normalizedValue": "新疆维吾尔和田",
    "normalizedSearchText": "新疆维吾尔和田和田新疆维吾尔"
  },
  {
    "code": "653201",
    "name": "和田市",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 和田市",
    "rank": 3,
    "normalizedName": "和田",
    "normalizedValue": "新疆维吾尔和田和田",
    "normalizedSearchText": "新疆维吾尔和田和田和田新疆维吾尔和田"
  },
  {
    "code": "653221",
    "name": "和田县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 和田县",
    "rank": 3,
    "normalizedName": "和田",
    "normalizedValue": "新疆维吾尔和田和田",
    "normalizedSearchText": "新疆维吾尔和田和田和田新疆维吾尔和田"
  },
  {
    "code": "653222",
    "name": "墨玉县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 墨玉县",
    "rank": 3,
    "normalizedName": "墨玉",
    "normalizedValue": "新疆维吾尔和田墨玉",
    "normalizedSearchText": "新疆维吾尔和田墨玉墨玉新疆维吾尔和田"
  },
  {
    "code": "653223",
    "name": "皮山县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 皮山县",
    "rank": 3,
    "normalizedName": "皮山",
    "normalizedValue": "新疆维吾尔和田皮山",
    "normalizedSearchText": "新疆维吾尔和田皮山皮山新疆维吾尔和田"
  },
  {
    "code": "653224",
    "name": "洛浦县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 洛浦县",
    "rank": 3,
    "normalizedName": "洛浦",
    "normalizedValue": "新疆维吾尔和田洛浦",
    "normalizedSearchText": "新疆维吾尔和田洛浦洛浦新疆维吾尔和田"
  },
  {
    "code": "653225",
    "name": "策勒县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 策勒县",
    "rank": 3,
    "normalizedName": "策勒",
    "normalizedValue": "新疆维吾尔和田策勒",
    "normalizedSearchText": "新疆维吾尔和田策勒策勒新疆维吾尔和田"
  },
  {
    "code": "653226",
    "name": "于田县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 于田县",
    "rank": 3,
    "normalizedName": "于田",
    "normalizedValue": "新疆维吾尔和田于田",
    "normalizedSearchText": "新疆维吾尔和田于田于田新疆维吾尔和田"
  },
  {
    "code": "653227",
    "name": "民丰县",
    "detail": "新疆维吾尔自治区 / 和田地区",
    "value": "新疆维吾尔自治区 / 和田地区 / 民丰县",
    "rank": 3,
    "normalizedName": "民丰",
    "normalizedValue": "新疆维吾尔和田民丰",
    "normalizedSearchText": "新疆维吾尔和田民丰民丰新疆维吾尔和田"
  },
  {
    "code": "654000",
    "name": "伊犁哈萨克自治州",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "rank": 2,
    "normalizedName": "伊犁哈萨克",
    "normalizedValue": "新疆维吾尔伊犁哈萨克",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克伊犁哈萨克新疆维吾尔"
  },
  {
    "code": "654002",
    "name": "伊宁市",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 伊宁市",
    "rank": 3,
    "normalizedName": "伊宁",
    "normalizedValue": "新疆维吾尔伊犁哈萨克伊宁",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克伊宁伊宁新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654003",
    "name": "奎屯市",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 奎屯市",
    "rank": 3,
    "normalizedName": "奎屯",
    "normalizedValue": "新疆维吾尔伊犁哈萨克奎屯",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克奎屯奎屯新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654004",
    "name": "霍尔果斯市",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 霍尔果斯市",
    "rank": 3,
    "normalizedName": "霍尔果斯",
    "normalizedValue": "新疆维吾尔伊犁哈萨克霍尔果斯",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克霍尔果斯霍尔果斯新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654021",
    "name": "伊宁县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 伊宁县",
    "rank": 3,
    "normalizedName": "伊宁",
    "normalizedValue": "新疆维吾尔伊犁哈萨克伊宁",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克伊宁伊宁新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654022",
    "name": "察布查尔锡伯自治县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 察布查尔锡伯自治县",
    "rank": 3,
    "normalizedName": "察布查尔锡伯自治",
    "normalizedValue": "新疆维吾尔伊犁哈萨克察布查尔锡伯自治",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克察布查尔锡伯自治察布查尔锡伯自治新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654023",
    "name": "霍城县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 霍城县",
    "rank": 3,
    "normalizedName": "霍城",
    "normalizedValue": "新疆维吾尔伊犁哈萨克霍城",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克霍城霍城新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654024",
    "name": "巩留县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 巩留县",
    "rank": 3,
    "normalizedName": "巩留",
    "normalizedValue": "新疆维吾尔伊犁哈萨克巩留",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克巩留巩留新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654025",
    "name": "新源县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 新源县",
    "rank": 3,
    "normalizedName": "新源",
    "normalizedValue": "新疆维吾尔伊犁哈萨克新源",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克新源新源新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654026",
    "name": "昭苏县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 昭苏县",
    "rank": 3,
    "normalizedName": "昭苏",
    "normalizedValue": "新疆维吾尔伊犁哈萨克昭苏",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克昭苏昭苏新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654027",
    "name": "特克斯县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 特克斯县",
    "rank": 3,
    "normalizedName": "特克斯",
    "normalizedValue": "新疆维吾尔伊犁哈萨克特克斯",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克特克斯特克斯新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654028",
    "name": "尼勒克县",
    "detail": "新疆维吾尔自治区 / 伊犁哈萨克自治州",
    "value": "新疆维吾尔自治区 / 伊犁哈萨克自治州 / 尼勒克县",
    "rank": 3,
    "normalizedName": "尼勒克",
    "normalizedValue": "新疆维吾尔伊犁哈萨克尼勒克",
    "normalizedSearchText": "新疆维吾尔伊犁哈萨克尼勒克尼勒克新疆维吾尔伊犁哈萨克"
  },
  {
    "code": "654200",
    "name": "塔城地区",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 塔城地区",
    "rank": 2,
    "normalizedName": "塔城",
    "normalizedValue": "新疆维吾尔塔城",
    "normalizedSearchText": "新疆维吾尔塔城塔城新疆维吾尔"
  },
  {
    "code": "654201",
    "name": "塔城市",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 塔城市",
    "rank": 3,
    "normalizedName": "塔城",
    "normalizedValue": "新疆维吾尔塔城塔城",
    "normalizedSearchText": "新疆维吾尔塔城塔城塔城新疆维吾尔塔城"
  },
  {
    "code": "654202",
    "name": "乌苏市",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 乌苏市",
    "rank": 3,
    "normalizedName": "乌苏",
    "normalizedValue": "新疆维吾尔塔城乌苏",
    "normalizedSearchText": "新疆维吾尔塔城乌苏乌苏新疆维吾尔塔城"
  },
  {
    "code": "654221",
    "name": "额敏县",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 额敏县",
    "rank": 3,
    "normalizedName": "额敏",
    "normalizedValue": "新疆维吾尔塔城额敏",
    "normalizedSearchText": "新疆维吾尔塔城额敏额敏新疆维吾尔塔城"
  },
  {
    "code": "654223",
    "name": "沙湾县",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 沙湾县",
    "rank": 3,
    "normalizedName": "沙湾",
    "normalizedValue": "新疆维吾尔塔城沙湾",
    "normalizedSearchText": "新疆维吾尔塔城沙湾沙湾新疆维吾尔塔城"
  },
  {
    "code": "654224",
    "name": "托里县",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 托里县",
    "rank": 3,
    "normalizedName": "托里",
    "normalizedValue": "新疆维吾尔塔城托里",
    "normalizedSearchText": "新疆维吾尔塔城托里托里新疆维吾尔塔城"
  },
  {
    "code": "654225",
    "name": "裕民县",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 裕民县",
    "rank": 3,
    "normalizedName": "裕民",
    "normalizedValue": "新疆维吾尔塔城裕民",
    "normalizedSearchText": "新疆维吾尔塔城裕民裕民新疆维吾尔塔城"
  },
  {
    "code": "654226",
    "name": "和布克赛尔蒙古自治县",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 和布克赛尔蒙古自治县",
    "rank": 3,
    "normalizedName": "和布克赛尔蒙古自治",
    "normalizedValue": "新疆维吾尔塔城和布克赛尔蒙古自治",
    "normalizedSearchText": "新疆维吾尔塔城和布克赛尔蒙古自治和布克赛尔蒙古自治新疆维吾尔塔城"
  },
  {
    "code": "654203",
    "name": "沙湾市",
    "detail": "新疆维吾尔自治区 / 塔城地区",
    "value": "新疆维吾尔自治区 / 塔城地区 / 沙湾市",
    "rank": 3,
    "normalizedName": "沙湾",
    "normalizedValue": "新疆维吾尔塔城沙湾",
    "normalizedSearchText": "新疆维吾尔塔城沙湾沙湾新疆维吾尔塔城"
  },
  {
    "code": "654300",
    "name": "阿勒泰地区",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区",
    "rank": 2,
    "normalizedName": "阿勒泰",
    "normalizedValue": "新疆维吾尔阿勒泰",
    "normalizedSearchText": "新疆维吾尔阿勒泰阿勒泰新疆维吾尔"
  },
  {
    "code": "654301",
    "name": "阿勒泰市",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 阿勒泰市",
    "rank": 3,
    "normalizedName": "阿勒泰",
    "normalizedValue": "新疆维吾尔阿勒泰阿勒泰",
    "normalizedSearchText": "新疆维吾尔阿勒泰阿勒泰阿勒泰新疆维吾尔阿勒泰"
  },
  {
    "code": "654321",
    "name": "布尔津县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 布尔津县",
    "rank": 3,
    "normalizedName": "布尔津",
    "normalizedValue": "新疆维吾尔阿勒泰布尔津",
    "normalizedSearchText": "新疆维吾尔阿勒泰布尔津布尔津新疆维吾尔阿勒泰"
  },
  {
    "code": "654322",
    "name": "富蕴县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 富蕴县",
    "rank": 3,
    "normalizedName": "富蕴",
    "normalizedValue": "新疆维吾尔阿勒泰富蕴",
    "normalizedSearchText": "新疆维吾尔阿勒泰富蕴富蕴新疆维吾尔阿勒泰"
  },
  {
    "code": "654323",
    "name": "福海县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 福海县",
    "rank": 3,
    "normalizedName": "福海",
    "normalizedValue": "新疆维吾尔阿勒泰福海",
    "normalizedSearchText": "新疆维吾尔阿勒泰福海福海新疆维吾尔阿勒泰"
  },
  {
    "code": "654324",
    "name": "哈巴河县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 哈巴河县",
    "rank": 3,
    "normalizedName": "哈巴河",
    "normalizedValue": "新疆维吾尔阿勒泰哈巴河",
    "normalizedSearchText": "新疆维吾尔阿勒泰哈巴河哈巴河新疆维吾尔阿勒泰"
  },
  {
    "code": "654325",
    "name": "青河县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 青河县",
    "rank": 3,
    "normalizedName": "青河",
    "normalizedValue": "新疆维吾尔阿勒泰青河",
    "normalizedSearchText": "新疆维吾尔阿勒泰青河青河新疆维吾尔阿勒泰"
  },
  {
    "code": "654326",
    "name": "吉木乃县",
    "detail": "新疆维吾尔自治区 / 阿勒泰地区",
    "value": "新疆维吾尔自治区 / 阿勒泰地区 / 吉木乃县",
    "rank": 3,
    "normalizedName": "吉木乃",
    "normalizedValue": "新疆维吾尔阿勒泰吉木乃",
    "normalizedSearchText": "新疆维吾尔阿勒泰吉木乃吉木乃新疆维吾尔阿勒泰"
  },
  {
    "code": "659000",
    "name": "新疆维吾尔自治区-自治区直辖县级行政区划",
    "detail": "新疆维吾尔自治区",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "rank": 2,
    "normalizedName": "新疆维吾尔直辖级行政划",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划新疆维吾尔直辖级行政划新疆维吾尔"
  },
  {
    "code": "659001",
    "name": "石河子市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 石河子市",
    "rank": 3,
    "normalizedName": "石河子",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划石河子",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划石河子石河子新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659002",
    "name": "阿拉尔市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 阿拉尔市",
    "rank": 3,
    "normalizedName": "阿拉尔",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划阿拉尔",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划阿拉尔阿拉尔新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659003",
    "name": "图木舒克市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 图木舒克市",
    "rank": 3,
    "normalizedName": "图木舒克",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划图木舒克",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划图木舒克图木舒克新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659004",
    "name": "五家渠市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 五家渠市",
    "rank": 3,
    "normalizedName": "五家渠",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划五家渠",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划五家渠五家渠新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659005",
    "name": "北屯市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 北屯市",
    "rank": 3,
    "normalizedName": "北屯",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划北屯",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划北屯北屯新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659006",
    "name": "铁门关市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 铁门关市",
    "rank": 3,
    "normalizedName": "铁门关",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划铁门关",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划铁门关铁门关新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659007",
    "name": "双河市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 双河市",
    "rank": 3,
    "normalizedName": "双河",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划双河",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划双河双河新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659008",
    "name": "可克达拉市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 可克达拉市",
    "rank": 3,
    "normalizedName": "可克达拉",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划可克达拉",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划可克达拉可克达拉新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659009",
    "name": "昆玉市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 昆玉市",
    "rank": 3,
    "normalizedName": "昆玉",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划昆玉",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划昆玉昆玉新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659010",
    "name": "胡杨河市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 胡杨河市",
    "rank": 3,
    "normalizedName": "胡杨河",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划胡杨河",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划胡杨河胡杨河新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "659011",
    "name": "新星市",
    "detail": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划",
    "value": "新疆维吾尔自治区 / 新疆维吾尔自治区-自治区直辖县级行政区划 / 新星市",
    "rank": 3,
    "normalizedName": "新星",
    "normalizedValue": "新疆维吾尔新疆维吾尔直辖级行政划新星",
    "normalizedSearchText": "新疆维吾尔新疆维吾尔直辖级行政划新星新星新疆维吾尔新疆维吾尔直辖级行政划"
  },
  {
    "code": "710000",
    "name": "台湾省",
    "detail": "?????",
    "value": "台湾省",
    "rank": 1,
    "normalizedName": "台湾",
    "normalizedValue": "台湾",
    "normalizedSearchText": "台湾台湾"
  },
  {
    "code": "810000",
    "name": "香港特别行政区",
    "detail": "?????",
    "value": "香港特别行政区",
    "rank": 1,
    "normalizedName": "香港",
    "normalizedValue": "香港",
    "normalizedSearchText": "香港香港"
  },
  {
    "code": "810001",
    "name": "中西区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 中西区",
    "rank": 3,
    "normalizedName": "中西",
    "normalizedValue": "香港中西",
    "normalizedSearchText": "香港中西中西香港"
  },
  {
    "code": "810002",
    "name": "湾仔区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 湾仔区",
    "rank": 3,
    "normalizedName": "湾仔",
    "normalizedValue": "香港湾仔",
    "normalizedSearchText": "香港湾仔湾仔香港"
  },
  {
    "code": "810003",
    "name": "东区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 东区",
    "rank": 3,
    "normalizedName": "东",
    "normalizedValue": "香港东",
    "normalizedSearchText": "香港东东香港"
  },
  {
    "code": "810004",
    "name": "南区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 南区",
    "rank": 3,
    "normalizedName": "南",
    "normalizedValue": "香港南",
    "normalizedSearchText": "香港南南香港"
  },
  {
    "code": "810005",
    "name": "油尖旺区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 油尖旺区",
    "rank": 3,
    "normalizedName": "油尖旺",
    "normalizedValue": "香港油尖旺",
    "normalizedSearchText": "香港油尖旺油尖旺香港"
  },
  {
    "code": "810006",
    "name": "深水埗区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 深水埗区",
    "rank": 3,
    "normalizedName": "深水埗",
    "normalizedValue": "香港深水埗",
    "normalizedSearchText": "香港深水埗深水埗香港"
  },
  {
    "code": "810007",
    "name": "九龙城区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 九龙城区",
    "rank": 3,
    "normalizedName": "九龙城",
    "normalizedValue": "香港九龙城",
    "normalizedSearchText": "香港九龙城九龙城香港"
  },
  {
    "code": "810008",
    "name": "黄大仙区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 黄大仙区",
    "rank": 3,
    "normalizedName": "黄大仙",
    "normalizedValue": "香港黄大仙",
    "normalizedSearchText": "香港黄大仙黄大仙香港"
  },
  {
    "code": "810009",
    "name": "观塘区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 观塘区",
    "rank": 3,
    "normalizedName": "观塘",
    "normalizedValue": "香港观塘",
    "normalizedSearchText": "香港观塘观塘香港"
  },
  {
    "code": "810010",
    "name": "荃湾区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 荃湾区",
    "rank": 3,
    "normalizedName": "荃湾",
    "normalizedValue": "香港荃湾",
    "normalizedSearchText": "香港荃湾荃湾香港"
  },
  {
    "code": "810011",
    "name": "屯门区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 屯门区",
    "rank": 3,
    "normalizedName": "屯门",
    "normalizedValue": "香港屯门",
    "normalizedSearchText": "香港屯门屯门香港"
  },
  {
    "code": "810012",
    "name": "元朗区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 元朗区",
    "rank": 3,
    "normalizedName": "元朗",
    "normalizedValue": "香港元朗",
    "normalizedSearchText": "香港元朗元朗香港"
  },
  {
    "code": "810013",
    "name": "北区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 北区",
    "rank": 3,
    "normalizedName": "北",
    "normalizedValue": "香港北",
    "normalizedSearchText": "香港北北香港"
  },
  {
    "code": "810014",
    "name": "大埔区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 大埔区",
    "rank": 3,
    "normalizedName": "大埔",
    "normalizedValue": "香港大埔",
    "normalizedSearchText": "香港大埔大埔香港"
  },
  {
    "code": "810015",
    "name": "西贡区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 西贡区",
    "rank": 3,
    "normalizedName": "西贡",
    "normalizedValue": "香港西贡",
    "normalizedSearchText": "香港西贡西贡香港"
  },
  {
    "code": "810016",
    "name": "沙田区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 沙田区",
    "rank": 3,
    "normalizedName": "沙田",
    "normalizedValue": "香港沙田",
    "normalizedSearchText": "香港沙田沙田香港"
  },
  {
    "code": "810017",
    "name": "葵青区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 葵青区",
    "rank": 3,
    "normalizedName": "葵青",
    "normalizedValue": "香港葵青",
    "normalizedSearchText": "香港葵青葵青香港"
  },
  {
    "code": "810018",
    "name": "离岛区",
    "detail": "香港特别行政区",
    "value": "香港特别行政区 / 离岛区",
    "rank": 3,
    "normalizedName": "离岛",
    "normalizedValue": "香港离岛",
    "normalizedSearchText": "香港离岛离岛香港"
  },
  {
    "code": "820000",
    "name": "澳门特别行政区",
    "detail": "?????",
    "value": "澳门特别行政区",
    "rank": 1,
    "normalizedName": "澳门",
    "normalizedValue": "澳门",
    "normalizedSearchText": "澳门澳门"
  },
  {
    "code": "820001",
    "name": "花地玛堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 花地玛堂区",
    "rank": 3,
    "normalizedName": "花地玛堂",
    "normalizedValue": "澳门花地玛堂",
    "normalizedSearchText": "澳门花地玛堂花地玛堂澳门"
  },
  {
    "code": "820002",
    "name": "花王堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 花王堂区",
    "rank": 3,
    "normalizedName": "花王堂",
    "normalizedValue": "澳门花王堂",
    "normalizedSearchText": "澳门花王堂花王堂澳门"
  },
  {
    "code": "820003",
    "name": "望德堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 望德堂区",
    "rank": 3,
    "normalizedName": "望德堂",
    "normalizedValue": "澳门望德堂",
    "normalizedSearchText": "澳门望德堂望德堂澳门"
  },
  {
    "code": "820004",
    "name": "大堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 大堂区",
    "rank": 3,
    "normalizedName": "大堂",
    "normalizedValue": "澳门大堂",
    "normalizedSearchText": "澳门大堂大堂澳门"
  },
  {
    "code": "820005",
    "name": "风顺堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 风顺堂区",
    "rank": 3,
    "normalizedName": "风顺堂",
    "normalizedValue": "澳门风顺堂",
    "normalizedSearchText": "澳门风顺堂风顺堂澳门"
  },
  {
    "code": "820006",
    "name": "嘉模堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 嘉模堂区",
    "rank": 3,
    "normalizedName": "嘉模堂",
    "normalizedValue": "澳门嘉模堂",
    "normalizedSearchText": "澳门嘉模堂嘉模堂澳门"
  },
  {
    "code": "820007",
    "name": "路凼填海区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 路凼填海区",
    "rank": 3,
    "normalizedName": "路凼填海",
    "normalizedValue": "澳门路凼填海",
    "normalizedSearchText": "澳门路凼填海路凼填海澳门"
  },
  {
    "code": "820008",
    "name": "圣方济各堂区",
    "detail": "澳门特别行政区",
    "value": "澳门特别行政区 / 圣方济各堂区",
    "rank": 3,
    "normalizedName": "圣方济各堂",
    "normalizedValue": "澳门圣方济各堂",
    "normalizedSearchText": "澳门圣方济各堂圣方济各堂澳门"
  }
];

module.exports = { defaultLocations, entries };
