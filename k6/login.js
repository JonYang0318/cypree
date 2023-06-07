import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}


export default function () {
  const url = 'https://qa.telligentbiz.com/oauth2api/connect/login';
  
  // 定义多个账号和密码
  const accounts = [
    { account: 'TPP07026@TELEXPRESS.COM', password: '55665566', corporationId: '75d055f2-5f16-11ed-afa6-00ffaf2156c9' },
    { account: 'superadmin@telexpress.com', password: '55667788', corporationId: '75d055f2-5f16-11ed-afa6-00ffaf2156c9' }
  ];

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // 循环遍历账号列表，并发送请求
  for (let i = 0; i < accounts.length; i++) {
    const payload = accounts[i];
    const response = http.post(url, JSON.stringify(payload), params);

    check(response, {
      'Status is 200': (r) => r.status === 200,
    });

    // 模拟用户之间的间隔时间
    sleep(1);
  }
}