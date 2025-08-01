// Script para testar webhook IKV360
const fetch = require('node-fetch');

const testData = {
  name: "Hospital Teste Ltda",
  contact_email: "teste@hospital.com", 
  contact_name: "João Silva",
  contact_job: "CTO",
  contact_cel: "(11) 99999-9999",
  marketing_request: "Preciso integrar sistemas legados com FHIR\n\n--- Dados Adicionais ---\nInteresse: Integrações FHIR\nUTM Source: google\nUTM Campaign: fhir-integration\nUTM Medium: cpc\nDispositivo: desktop\nTempo na página: 120s\nTracking ID: lp_1234567890"
};

async function testWebhook() {
  try {
    console.log('🚀 Testando webhook IKV360...');
    console.log('📤 Payload:', JSON.stringify(testData, null, 2));
    
    const response = await fetch('https://homolog.ikv360.com.br/api/marketings/fastcomm-lp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|Kw2OufmIYWWvKFWtVKvOGlxcXgA6MJ1XLJHVTqrA6f19d826',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const responseText = await response.text();
    
    console.log('📥 Status:', response.status);
    console.log('📥 Headers:', response.headers);
    console.log('📥 Response:', responseText);
    
    if (response.ok) {
      console.log('✅ Webhook funcionando!');
    } else {
      console.log('❌ Erro no webhook:', response.status, responseText);
    }
    
  } catch (error) {
    console.error('💥 Erro na requisição:', error.message);
  }
}

testWebhook();