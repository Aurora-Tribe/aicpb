const fetch = require('node-fetch');

async function testAPI() {
  try {
    console.log('测试API连接...');
    
    // 测试健康检查
    const healthResponse = await fetch('http://localhost:3001/api/health');
    const healthData = await healthResponse.json();
    console.log('健康检查结果:', healthData);
    
    // 测试公司数据API
    console.log('\n测试公司数据API...');
    const companyResponse = await fetch('http://localhost:3001/api/company/openai/data');
    const companyData = await companyResponse.json();
    console.log('OpenAI数据:', companyData);
    
  } catch (error) {
    console.error('API测试失败:', error.message);
  }
}

testAPI();
