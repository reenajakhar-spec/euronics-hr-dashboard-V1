const TYPE_BREAKDOWN_TABLE = { title:'Request Type Breakdown — Is Each Root Cause Actually Falling? (monthly view, all toggles)', cols:['Type','Apr','May','Jun','Jul (MTD)','Apr→Jul Δ','Assessment'], rows:[
  ['Missing KEKA Identifier Punch Source','38','32','25','19','−50.0%','Strong decline — identifier mapping fix holding'],
  ['Real-Time Attendance Sync Mistakes (Review Required)','22','24','21','20','−9.1%','Flat — needs the flagged review, not just monitoring'],
  ['Late Punch / Missed Punch / Syncing Gap','45','40','38','32','−28.9%','Steady improvement — largest contributor'],
  ['Manual Attendance — Employee-wise Checks','25','20','19','17','−32.0%','Improving — manual-check load on HR easing'],
  ['Others','12','12','12','10','−16.7%','Stable — no action needed unless it grows']
]};

const MODAL_DATA = {
  headcount: {
    title: 'Total Headcount — Trend',
    note: 'Illustrative sample data — replace with live HRMS export.',
    periods: {
      monthly: {
        sub: 'April 2025 – July 2026',
        labels: ['Apr-25','Jun-25','Aug-25','Oct-25','Dec-25','Feb-26','Apr-26','Jun-26','Jul-26'],
        datasets: [{ label:'Headcount', data:[571,579,586,592,598,601,605,606,612], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.35, fill:true }],
        tables: [{ title:'Monthly Movement', cols:['Month','Headcount','Joiners','Exits','Net'], rows:[
          ['May-26','606','8','5','+3'],['Jun-26','606','7','7','0'],['Jul-26 (MTD)','612','9','6','+3']
        ]}]
      },
      weekly: {
        sub: 'Last 8 weeks — Jun 1 to Jul 28, 2026',
        labels: ['Jun1','Jun2','Jun3','Jun4','Jul1','Jul2','Jul3','Jul4'],
        datasets: [{ label:'Headcount', data:[606,607,608,609,610,610,611,612], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.3, fill:true }],
        tables: [{ title:'Weekly Movement', cols:['Week','Headcount','Net Change'], rows:[
          ['Jun1','606','—'],['Jun2','607','+1'],['Jun3','608','+1'],['Jun4','609','+1'],
          ['Jul1','610','+1'],['Jul2','610','0'],['Jul3','611','+1'],['Jul4','612','+1']
        ]}]
      },
      cfy: {
        sub: 'Current FY 2026-27 (Apr – Jul)',
        labels: ['Apr-26','May-26','Jun-26','Jul-26'],
        datasets: [{ label:'Headcount', data:[605,606,606,612], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.3, fill:true }],
        tables: [{ title:'FY26-27 Monthly Movement', cols:['Month','Headcount','Joiners','Exits','Net'], rows:[
          ['Apr-26','605','6','4','+2'],['May-26','606','8','7','+1'],['Jun-26','606','7','7','0'],['Jul-26 (MTD)','612','9','6','+3']
        ]}]
      }
    }
  },
  attendanceRate: {
    title: 'Attendance Rate — Trend',
    note: 'Illustrative sample data — replace with live biometric/KEKA export.',
    periods: {
      monthly: {
        sub: 'April 2025 – July 2026',
        labels: ['Apr-25','Jun-25','Aug-25','Oct-25','Dec-25','Feb-26','Apr-26','Jun-26','Jul-26'],
        datasets: [{ label:'Attendance %', data:[91.2,91.8,92.0,92.4,90.8,92.6,93.0,93.2,93.4], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.35, fill:true }],
        tables: [{ title:'HO vs Plant Split', cols:['Month','HO %','Plant %','Company %'], rows:[
          ['May-26','96.0%','89.5%','93.0%'],['Jun-26','96.1%','89.8%','93.2%'],['Jul-26 (MTD)','96.2%','89.1%','93.4%']
        ]}]
      },
      weekly: {
        sub: 'Last 8 weeks — Jun 1 to Jul 28, 2026',
        labels: ['Jun1','Jun2','Jun3','Jun4','Jul1','Jul2','Jul3','Jul4'],
        datasets: [{ label:'Attendance %', data:[93.6,92.8,93.5,93.0,93.9,92.5,93.6,93.4], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.3, fill:true }],
        tables: [{ title:'Weekly HO vs Plant Split', cols:['Week','HO %','Plant %','Company %'], rows:[
          ['Jun1','96.3%','89.9%','93.6%'],['Jun2','95.8%','89.0%','92.8%'],['Jun3','96.2%','89.7%','93.5%'],['Jun4','95.9%','89.2%','93.0%'],
          ['Jul1','96.4%','90.1%','93.9%'],['Jul2','95.7%','88.6%','92.5%'],['Jul3','96.3%','89.9%','93.6%'],['Jul4','96.2%','89.1%','93.4%']
        ]}]
      },
      cfy: {
        sub: 'Current FY 2026-27 (Apr – Jul)',
        labels: ['Apr-26','May-26','Jun-26','Jul-26'],
        datasets: [{ label:'Attendance %', data:[93.0,93.1,93.2,93.4], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointRadius:4, tension:.3, fill:true }],
        tables: [{ title:'FY26-27 HO vs Plant Split', cols:['Month','HO %','Plant %','Company %'], rows:[
          ['Apr-26','95.8%','89.3%','93.0%'],['May-26','95.9%','89.4%','93.1%'],['Jun-26','96.1%','89.8%','93.2%'],['Jul-26 (MTD)','96.2%','89.1%','93.4%']
        ]}]
      }
    }
  },
  regularisation: {
    title: 'Attendance Regularisation — Trend & Root-Cause Breakdown',
    note: 'Illustrative sample data — replace with the live KEKA regularisation export. Overall requests are trending down; the one bucket not falling meaningfully is "Real-Time Attendance Sync Mistakes," which is flagged for review.',
    periods: {
      monthly: {
        sub: 'April 2026 – July 2026 (MTD)',
        labels: ['April','May','June','July (MTD)'],
        datasets: [{ label:'Regularisation Requests', data:[142,128,115,98], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointBackgroundColor:'#1a6372', pointRadius:5, pointHoverRadius:7, tension:.35, fill:true }],
        tables: [
          { title:'MoM Summary', cols:['Month','Requests','MoM Δ','Trend'], rows:[
            ['April 2026','142','—','Baseline'],
            ['May 2026','128','−9.9%','↓ Improving'],
            ['June 2026','115','−10.2%','↓ Improving'],
            ['July 2026 (MTD)','98','−14.8%','↓ Improving']
          ]},
          TYPE_BREAKDOWN_TABLE
        ]
      },
      weekly: {
        sub: 'Last 8 weeks — Jun 1 to Jul 28, 2026',
        labels: ['Jun1','Jun2','Jun3','Jun4','Jul1','Jul2','Jul3','Jul4'],
        datasets: [{ label:'Regularisation Requests', data:[30,29,28,28,26,25,24,23], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointBackgroundColor:'#1a6372', pointRadius:5, pointHoverRadius:7, tension:.3, fill:true }],
        tables: [
          { title:'Weekly Summary', cols:['Week','Requests','WoW Δ','Trend'], rows:[
            ['Jun1','30','—','Baseline'],['Jun2','29','−3.3%','↓'],['Jun3','28','−3.4%','↓'],['Jun4','28','0%','→'],
            ['Jul1','26','−7.1%','↓'],['Jul2','25','−3.8%','↓'],['Jul3','24','−4.0%','↓'],['Jul4','23','−4.2%','↓']
          ]},
          TYPE_BREAKDOWN_TABLE
        ]
      },
      cfy: {
        sub: 'Current FY 2026-27 (Apr – Jul, MTD)',
        labels: ['April','May','June','July (MTD)'],
        datasets: [{ label:'Regularisation Requests', data:[142,128,115,98], borderColor:'#1a6372', backgroundColor:'rgba(26,99,114,0.10)', borderWidth:3, pointBackgroundColor:'#1a6372', pointRadius:5, pointHoverRadius:7, tension:.35, fill:true }],
        tables: [
          { title:'FY26-27 MoM Summary', cols:['Month','Requests','MoM Δ','Trend'], rows:[
            ['April 2026','142','—','Baseline'],
            ['May 2026','128','−9.9%','↓ Improving'],
            ['June 2026','115','−10.2%','↓ Improving'],
            ['July 2026 (MTD)','98','−14.8%','↓ Improving']
          ]},
          TYPE_BREAKDOWN_TABLE
        ]
      }
    }
  }
};

let modalChartInstance = null;
let currentModalKey = null;
let currentPeriod = 'monthly';

function openModal(key){
  const d = MODAL_DATA[key];
  if(!d) return;
  currentModalKey = key;
  currentPeriod = 'monthly';
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalNote').textContent = d.note || '';
  document.querySelectorAll('.period-btn').forEach(b=> b.classList.toggle('active', b.dataset.period === 'monthly'));
  renderModalPeriod();
  document.getElementById('modalOverlay').classList.add('open');
}

function setPeriod(period){
  if(!currentModalKey) return;
  currentPeriod = period;
  document.querySelectorAll('.period-btn').forEach(b=> b.classList.toggle('active', b.dataset.period === period));
  renderModalPeriod();
}

function renderModalPeriod(){
  const d = MODAL_DATA[currentModalKey];
  const pd = d.periods[currentPeriod];
  if(!pd) return;

  document.getElementById('modalSub').textContent = pd.sub || '';

  if(modalChartInstance){ modalChartInstance.destroy(); }
  const ctx = document.getElementById('modalChart').getContext('2d');
  modalChartInstance = new Chart(ctx, {
    type: 'line',
    data: { labels: pd.labels, datasets: pd.datasets },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{ backgroundColor:'#1a6372' } },
      scales:{
        y:{ grid:{color:'rgba(26,99,114,0.08)'}, ticks:{color:'#6b7280', font:{family:'Montserrat', size:11}} },
        x:{ grid:{display:false}, ticks:{color:'#1a6372', font:{family:'Montserrat', size:11, weight:'600'}} }
      }
    }
  });

  const wrap = document.getElementById('modalTables');
  wrap.innerHTML = '';
  (pd.tables||[]).forEach(t=>{
    let html = `<div class="modal-table-title">${t.title}</div><table class="data-table"><thead><tr>`;
    t.cols.forEach(c=> html += `<th>${c}</th>`);
    html += '</tr></thead><tbody>';
    t.rows.forEach(r=>{
      html += '<tr>' + r.map((cell,i)=> i===0 ? `<td>${cell}</td>` : `<td class="num">${cell}</td>`).join('') + '</tr>';
    });
    html += '</tbody></table>';
    wrap.insertAdjacentHTML('beforeend', html);
  });
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
}

function showTab(id){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  document.getElementById('tabbtn-'+id).classList.add('active');
}

document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
