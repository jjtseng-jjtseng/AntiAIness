(function () {
"use strict";
const KEY="flowstate-pf-coach-v1", RESOLUTION="Resolved: European members of the North Atlantic Treaty Organization should ratify the Treaty on the Prohibition of Nuclear Weapons.";
const speeches=[
{id:"constructive-a",name:"Constructive A",speaker:"First speaker · Team A",minutes:4},{id:"constructive-b",name:"Constructive B",speaker:"First speaker · Team B",minutes:4},{id:"crossfire-1",name:"Crossfire 1",speaker:"First speakers",minutes:3},
{id:"rebuttal-a",name:"Rebuttal A",speaker:"Second speaker · Team A",minutes:4},{id:"rebuttal-b",name:"Rebuttal B",speaker:"Second speaker · Team B + frontline",minutes:4},{id:"crossfire-2",name:"Crossfire 2",speaker:"Second speakers",minutes:3},
{id:"summary-a",name:"Summary A",speaker:"First speaker · Team A",minutes:3},{id:"summary-b",name:"Summary B",speaker:"First speaker · Team B",minutes:3},{id:"grand-crossfire",name:"Grand crossfire",speaker:"All four debaters",minutes:3},{id:"final-a",name:"Final focus A",speaker:"Second speaker · Team A",minutes:2},{id:"final-b",name:"Final focus B",speaker:"Second speaker · Team B",minutes:2},{id:"prep",name:"Prep time",speaker:"Per team · check invitation",minutes:3}];
const qs=[
["Clarify the advocacy","Which European NATO members are you asking to ratify, and what does ratification require them to change?"],
["Test the link","What is the step between ratification and the security outcome you described? Which actor changes behavior first?"],
["Test the warrant","What evidence would distinguish your explanation from the alternative explanation the other team gave?"],
["Compare impacts","Even if both impacts happen, which is more likely in this round and why should the judge prioritize it?"],
["Find the concession","What part of your opponent's position do you agree with, and why does your remaining offense still decide the ballot?"],
["Check treaty text","Can you point to the treaty language that supports your interpretation? What qualifier matters most?"],
["Make it concrete","Who is affected first, on what timeline, and how should that impact compare to ours?"],
["Round strategy","If you could extend only one argument into final focus, which one survives their responses and why?"]];
const checklist=[
{title:"Confirm the tournament resolution",detail:"Use your invitation or league topic if it differs from the national topic.",checked:false},
{title:"Save a complete source for every card",detail:"Keep the full citation, source text, URL, and access date with the card.",checked:false},
{title:"Prepare both sides and both speaking positions",detail:"The coin flip lets teams choose either side or speaking order.",checked:false},
{title:"Share speech documents with your partner",detail:"Agree on case names, card labels, and who owns each frontline.",checked:false},
{title:"Review the judge paradigm",detail:"Check speed, evidence expectations, extension rules, and tournament norms.",checked:false},
{title:"Pack a round-day kit",detail:"Flow sheets, timer, chargers, water, and backup copies of docs.",checked:false}];
function clone(x){return JSON.parse(JSON.stringify(x));}
const base={activeView:"home",profile:{name:"Maya Chen",team:"Northview Debate",partner:"",school:""},topic:{period:"Nov/Dec 2026",resolution:RESOLUTION},preferences:{side:"Pro",position:"First",judge:"Flay",speed:"190"},stats:{sessions:0,minutes:0,speeches:0,lastPractice:"",daily:[]},plan:[false,false,false],activeSpeech:"constructive-a",timer:{running:false,remaining:240,speechId:"constructive-a"},drafts:{},caseSide:"Pro",cases:{Pro:[{name:"Contention 1",claim:"",warrant:"",impact:"",evidence:""},{name:"Contention 2",claim:"",warrant:"",impact:"",evidence:""}],Con:[{name:"Contention 1",claim:"",warrant:"",impact:"",evidence:""},{name:"Contention 2",claim:"",warrant:"",impact:"",evidence:""}]},flow:[
{id:"f1",side:"Pro",title:"Engagement vs. isolation",note:"Research lead: test whether participation creates leverage or mainly signals disapproval.",status:"Open"},
{id:"f2",side:"Pro",title:"Humanitarian norm",note:"Question: what changes in state behavior after a legal commitment?",status:"Open"},
{id:"f3",side:"Con",title:"Deterrence and alliance cohesion",note:"Research lead: identify the causal path to allied coordination.",status:"Open"},
{id:"f4",side:"Con",title:"Credibility and security guarantees",note:"Question: separate symbolic effects from material capability changes.",status:"Open"}],cards:[],cardFilter:"All",questions:{index:0,completed:0,notes:"",timerRemaining:180},checklist:checklist,practiceNotes:""};
function merge(saved){
const s=Object.assign(clone(base),saved||{});
["profile","topic","preferences","stats","timer","questions"].forEach(k=>s[k]=Object.assign(clone(base[k]),(saved&&saved[k])||{}));
s.stats.daily=Array.isArray(s.stats.daily)?s.stats.daily:[];s.plan=Array.isArray(s.plan)?s.plan:clone(base.plan);s.drafts=Object.assign({},s.drafts||{});s.cases=Object.assign(clone(base.cases),s.cases||{});s.cases.Pro=Array.isArray(s.cases.Pro)?s.cases.Pro:clone(base.cases.Pro);s.cases.Con=Array.isArray(s.cases.Con)?s.cases.Con:clone(base.cases.Con);s.flow=Array.isArray(s.flow)?s.flow:clone(base.flow);s.cards=Array.isArray(s.cards)?s.cards:[];s.checklist=Array.isArray(s.checklist)?s.checklist:clone(base.checklist);return s;}
let state;try{state=merge(JSON.parse(localStorage.getItem(KEY)||"null"));}catch(_){state=clone(base);}
let timerId=null,crossfireId=null,toastId=null,searchId=null;
const $=(s,r)=> (r||document).querySelector(s), $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(_){toast("Storage is full. Export a backup.");}chrome();}
function speech(id){return speeches.find(x=>x.id===id)||speeches[0];}
function clock(sec){return String(Math.floor(Math.max(0,sec)/60)).padStart(2,"0")+":"+String(Math.max(0,sec)%60).padStart(2,"0");}
function wc(s){return String(s||"").trim()?String(s).trim().split(/\s+/).length:0;}
function wpm(){const v=Number(state.preferences.speed);return v>=100&&v<=300?v:(state.preferences.judge==="Lay"?160:state.preferences.judge==="Tech"?230:190);}
function eta(s){const sec=Math.round(wc(s)/wpm()*60);return Math.floor(sec/60)+"m "+String(sec%60).padStart(2,"0")+"s";}
function toast(msg){const n=$("#toast");if(!n)return;n.textContent=msg;n.classList.add("show");clearTimeout(toastId);toastId=setTimeout(()=>n.classList.remove("show"),2500);}
function title(id){return({home:"Overview",round:"Round room",cases:"Case lab",flow:"Flow board",evidence:"Evidence library",crossfire:"Crossfire gym",speech:"Speech studio",tournament:"Tournament kit",progress:"Progress"})[id]||"Overview";}
function chrome(){const t=$("#team-name"),p=$("#profile-name"),c=$("#crumb-current");if(t)t.textContent=state.profile.team||"My debate team";if(p)p.textContent=state.profile.name||"Debater";if(c)c.textContent=title(state.activeView);$$(".nav-item[data-page]").forEach(n=>n.classList.toggle("active",n.dataset.page===state.activeView));}
function go(id){state.activeView=id;save();render();$("#sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
function heading(k,t,s,a){return'<div class="page-heading"><div><div class="eyebrow">'+esc(k)+'</div><h1>'+esc(t)+'</h1><p>'+esc(s)+'</p></div><div class="heading-actions">'+(a||"")+'</div></div>';}
function panel(t,s,b){return'<section class="panel"><div class="panel-head"><div><h2>'+t+'</h2>'+(s?'<p>'+s+'</p>':"")+'</div></div>'+b+'</section>';}
function badge(t,c){return'<span class="badge '+(c||"gray")+'">'+esc(t)+'</span>';}
function empty(t,s,b,a){return'<div class="empty-state"><div class="empty-illustration">✳</div><h3>'+esc(t)+'</h3><p>'+esc(s)+'</p>'+(b?'<button class="button soft" data-action="'+a+'">'+esc(b)+'</button>':"")+'</div>';}
const iClock='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>',iTarget='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',iSpeech='<svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 3z"/></svg>',iFile='<svg viewBox="0 0 24 24"><path d="M5 3.5h10l4 4v13H5z"/><path d="M14.5 3.5v4h4"/></svg>';
function stat(label,value,note,icon){return'<div class="stat-card"><div><div class="stat-label">'+label+'</div><div class="stat-value">'+value+'</div><div class="stat-note">'+note+'</div></div><div class="stat-icon">'+icon+'</div></div>';}
function starters(){return'<div class="card-list">'+[
["Treaty text","What obligations follow ratification? Find the primary text.","PRIMARY SOURCE"],
["Alliance policy","How do European NATO members describe deterrence and consultation?","OFFICIAL DOCS"],
["Humanitarian impact","What do credible sources document about nuclear weapon effects?","RESEARCH LEAD"]].map(x=>'<div class="research-card"><div class="file-icon">'+iFile+'</div><div class="research-copy"><strong>'+x[0]+'</strong><small>'+x[1]+'</small></div><div class="research-end"><span class="tag">'+x[2]+'</span></div></div>').join("")+'</div>';}
function home(){
const tasks=[["Warm up your extensions","Pick one contention and carry it through the flow.","8 min"],["Run a crossfire drill","Ask short questions that expose the warrant.","6 min"],["Write the ballot","Practice a comparative final focus.","10 min"]];
const plan=tasks.map((x,i)=>'<div class="plan-item"><button class="plan-check '+(state.plan[i]?"checked":"")+'" data-action="toggle-plan" data-index="'+i+'">'+(state.plan[i]?"✓":"")+'</button><div class="plan-text"><strong>'+x[0]+'</strong><small>'+x[1]+'</small></div><span class="plan-time">'+x[2]+'</span></div>').join("");
const today=new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"}).toUpperCase();return heading(today,"Good afternoon, "+esc((state.profile.name||"debater").split(" ")[0])+".","A focused rep today is better than another hour of unfocused prep.",'<button class="button" data-action="open-settings">Edit workspace</button><button class="button primary" data-action="new-round">＋ Start a practice round</button>')+
'<div class="dashboard-grid"><div class="stack"><section class="hero-card"><div class="hero-copy"><div class="eyebrow">YOUR NOV/DEC TOPIC ROOM</div><h2>Make every speech earn its place on the ballot.</h2><p>Build a clean flow, keep your evidence honest, and give the judge a reason to vote for you.</p><button class="button primary" data-action="navigate" data-page="round">Open round room →</button></div><div class="hero-decoration"><div class="hero-speech"><span></span><span></span><span></span><span></span><span></span><span></span></div></div></section>'+
'<div class="stat-row">'+stat("PRACTICE SESSIONS",state.stats.sessions,"Saved on this device",iTarget)+stat("PRACTICE MINUTES",state.stats.minutes,"Across all logged reps",iClock)+stat("SPEECH REPS",state.stats.speeches,"Completed speech drills",iSpeech)+'</div><div class="grid cols-2">'+
panel("Today's practice plan",state.plan.filter(Boolean).length+" of 3 focus reps complete",'<div class="plan-list">'+plan+'</div>')+
panel("Pick up where you left off","Your next useful rep is ready",'<div class="topic-card"><h3>Final focus · collapse and weigh</h3><p>Choose one offense to extend. Mirror your summary, answer the live flow, and compare impact with a reason the judge can use.</p><div style="margin-top:12px"><button class="button small soft" data-action="open-final-focus">Open final focus draft →</button></div></div>')+'</div></div>'+
'<div class="stack right-stack"><section class="session-card"><div class="session-top"><span>ROUND ROOM</span><div class="live-pill"><i></i> READY WHEN YOU ARE</div></div><h3>Practice the full PF speech order</h3><p>Timed speeches, crossfires, prep blocks, and a place to keep your round notes.</p><div class="session-bottom"><button class="button" data-action="new-round">Set up a round →</button><small>4 / 4 / 3 / 2 min</small></div></section>'+panel("Research starters","Prompts to turn into sourced cards",starters())+
panel("Coach's reminder","",'<div class="coach-note"><strong>Evidence integrity:</strong> a plausible statistic is still not evidence. Save the original source and complete citation before marking a card verified.</div><div style="margin-top:9px"><button class="link-button" data-action="navigate" data-page="evidence">Open evidence library →</button></div>')+'</div></div>'+
'<div class="topic-strip"><div class="topic-mark">✦</div><div class="topic-strip-copy"><span>'+esc(state.topic.period)+' · ACTIVE WORKSPACE RESOLUTION</span><strong>'+esc(state.topic.resolution)+'</strong></div><div class="topic-side">Change in Settings</div></div>';
}
function round(){
const sel=speech(state.activeSpeech),list=speeches.map(x=>'<button class="speech-row '+(x.id===sel.id?"active":"")+'" data-action="select-speech" data-id="'+x.id+'"><span>'+x.name+'</span><small>'+x.minutes+'m</small></button>').join("");
const note=state.drafts[sel.id]||"",time=clock(state.timer.speechId===sel.id?state.timer.remaining:sel.minutes*60);
return heading("PRACTICE ROUND","Round room","Run a timed PF round, or rehearse one speech at a time.",'<button class="button" data-action="reset-round">Reset timers</button><button class="button primary" data-action="log-practice">✓ Finish & log practice</button>')+
'<div class="notice blue" style="margin-bottom:14px"><span class="notice-icon">i</span><span><strong>Default NSDA sequence:</strong> 4 / 4 / 3 / 4 / 4 / 3 / 3 / 3 / 3 / 2 / 2, plus 3 minutes of prep per team. Confirm local changes in your invitation.</span></div>'+
'<div class="speech-grid"><section class="panel"><div class="panel-head"><div><h2>Round flow</h2><p>Choose a speech to load its timer.</p></div><span class="tag">12 segments</span></div><div class="speech-list">'+list+'</div><div class="notice" style="margin-top:12px"><span class="notice-icon">↗</span><span>The first speaker asks first in first crossfire; the first summary speaker asks first in grand crossfire.</span></div></section>'+
'<div class="stack"><section class="panel"><div class="speech-detail-head"><div><h2>'+esc(sel.name)+'</h2><p>'+esc(sel.speaker)+' · '+sel.minutes+':00 default</p></div>'+badge(state.preferences.side+" side",state.preferences.side==="Pro"?"green":"rose")+'</div><div class="timer-face"><strong id="timer-value">'+time+'</strong><span id="timer-status">'+(state.timer.running&&state.timer.speechId===sel.id?"running":"ready")+'</span></div><div class="timer-controls"><button class="button primary" data-action="'+(state.timer.running?"pause-timer":"start-timer")+'">'+(state.timer.running?"Pause timer":"Start timer")+'</button><button class="button" data-action="reset-timer">Reset</button><button class="button" data-action="add-one-minute">＋ 1 min</button></div></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Round notes</h2><p>Keep answers tied to arguments that actually appear on the flow.</p></div><button class="link-button" data-action="navigate" data-page="speech">Open speech studio →</button></div><label class="label">Notes for '+esc(sel.name)+'</label><textarea class="textarea-control" data-field="draft:'+sel.id+'" placeholder="Roadmap, extensions, frontlines, weighing...">'+esc(note)+'</textarea><div class="word-meter"><span><strong>'+wc(note)+'</strong> words</span><span>Approx. '+eta(note)+' at '+wpm()+' wpm</span><span>Autosaved</span></div></section></div></div>';
}

function casesView(){
const side=state.caseSide,items=state.cases[side]||[];
const cards=items.map((x,i)=>'<article class="contention-card"><div class="contention-top"><strong><span class="tag">'+esc(x.name||("Contention "+(i+1)))+'</span></strong><button class="link-button" data-action="remove-contention" data-index="'+i+'">Remove</button></div><div class="contention-grid">'+
'<div><label class="field-label">Claim · what you argue</label><textarea class="textarea-control" data-field="case:'+side+':'+i+':claim" placeholder="Write a concise, debatable claim.">'+esc(x.claim)+'</textarea></div>'+
'<div><label class="field-label">Warrant · why it is true</label><textarea class="textarea-control" data-field="case:'+side+':'+i+':warrant" placeholder="Explain the causal chain; do not skip links.">'+esc(x.warrant)+'</textarea></div>'+
'<div><label class="field-label">Impact · who and why it matters</label><textarea class="textarea-control" data-field="case:'+side+':'+i+':impact" placeholder="Compare likelihood, timeframe, magnitude, reversibility.">'+esc(x.impact)+'</textarea></div>'+
'<div><label class="field-label">Evidence plan · source needed?</label><textarea class="textarea-control" data-field="case:'+side+':'+i+':evidence" placeholder="[CARD NEEDED: source-backed claim + search lead]">'+esc(x.evidence)+'</textarea></div></div></article>').join("");
return heading("BUILD BOTH SIDES","Case lab","Shape arguments as claim → warrant → evidence → impact. Keep research leads separate from verified cards.",'<button class="button" data-action="export-data">Export workspace</button><button class="button primary" data-action="add-contention">＋ Add contention</button>')+
'<div class="grid cols-2" style="align-items:start"><section class="panel"><div class="panel-head"><div><h2>Case outline</h2><p>Store both sides; debate positions, not invented proof.</p></div><div class="case-switch"><button class="'+(side==="Pro"?"active":"")+'" data-action="case-side" data-side="Pro">Pro</button><button class="'+(side==="Con"?"active":"")+'" data-action="case-side" data-side="Con">Con</button></div></div>'+
'<div class="notice" style="margin-bottom:13px"><span class="notice-icon">✳</span><span>PF does not require a value/criterion framework or permit a formalized plan/counterplan. Defend the resolution or status quo with clear advocacy.</span></div>'+cards+'<button class="button soft" data-action="add-contention">＋ Add another contention</button></section>'+
'<div class="stack"><section class="panel"><div class="panel-head"><div><h2>Argument quality check</h2><p>Use before moving a claim into a speech.</p></div></div><div class="plan-list">'+
'<div class="plan-item"><span class="topic-mark">1</span><div class="plan-text"><strong>Claim is specific</strong><small>Could the opponent reasonably disagree?</small></div></div><div class="plan-item"><span class="topic-mark">2</span><div class="plan-text"><strong>Warrant explains the link</strong><small>Do not jump from action to impact in one sentence.</small></div></div><div class="plan-item"><span class="topic-mark">3</span><div class="plan-text"><strong>Evidence is retrievable</strong><small>Save original text, citation, URL, and access date.</small></div></div><div class="plan-item"><span class="topic-mark">4</span><div class="plan-text"><strong>Impact is comparative</strong><small>Name who, when, likelihood, and why the judge should care.</small></div></div></div></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Topic research leads</h2><p>Questions to investigate, not evidence claims.</p></div></div>'+starters()+'<div style="margin-top:11px"><button class="button small" data-action="navigate" data-page="evidence">Add a sourced card →</button></div></section></div></div>';
}
function flowView(){
function col(side){
const list=state.flow.filter(x=>x.side===side);
const body=list.length?list.map(x=>'<article class="flow-argument"><div class="flow-argument-top"><strong>'+esc(x.title)+'</strong>'+badge(x.status,x.status==="Extended"?"green":x.status==="Answered"?"blue":x.status==="Dropped"?"rose":"amber")+'</div><p>'+esc(x.note)+'</p><div class="flow-actions"><button class="flow-status" data-action="cycle-flow" data-id="'+esc(x.id)+'">Cycle status ↻</button><button class="flow-status" data-action="edit-flow" data-id="'+esc(x.id)+'">Edit</button><button class="flow-status" data-action="delete-flow" data-id="'+esc(x.id)+'">Remove</button></div></article>').join(""):empty("No arguments on this side yet","Add the first row from your flow.","Add row","add-flow");
return'<section class="flow-column"><div class="flow-column-head"><div class="side-label '+(side==="Con"?"con":"")+'"><i></i><strong>'+side+' flow</strong></div><button class="link-button" data-action="add-flow" data-side="'+side+'">＋ Add row</button></div><div class="flow-list">'+body+'</div></section>';
}
const count=s=>state.flow.filter(x=>x.status===s).length;
return heading("FOLLOW THE FLOW","Flow board","Track offense, responses, extensions, and what survives to the ballot.",'<button class="button" data-action="clear-flow">Clear board</button><button class="button primary" data-action="add-flow">＋ Add argument</button>')+
'<div class="notice blue" style="margin-bottom:13px"><span class="notice-icon">i</span><span>Starter rows are <strong>research questions and analytic prompts</strong>, not sourced claims. Replace or remove them as the round develops.</span></div>'+
'<div class="stat-row" style="margin-bottom:14px">'+stat("OPEN ISSUES",count("Open"),"Need an answer or decision",iTarget)+stat("EXTENDED",count("Extended"),"Still alive in the round",iSpeech)+stat("DROPPED",count("Dropped"),"Flag for a strategic choice",iClock)+'</div><div class="flow-columns">'+col("Pro")+col("Con")+'</div>'+
'<div class="grid cols-2" style="margin-top:14px"><section class="panel"><div class="panel-head"><div><h2>End-of-round audit</h2><p>Before final focus, check the path to the ballot.</p></div></div><div class="plan-list"><div class="plan-item"><span class="topic-mark">↗</span><div class="plan-text"><strong>Extend offense through summary</strong><small>Extend claim and warrant, not just a card name.</small></div></div><div class="plan-item"><span class="topic-mark">↔</span><div class="plan-text"><strong>Compare against their best impact</strong><small>Use probability, timeframe, magnitude, reversibility, or scope.</small></div></div><div class="plan-item"><span class="topic-mark">✓</span><div class="plan-text"><strong>Mirror the summary in final focus</strong><small>Do not introduce new arguments in the last speech.</small></div></div></div></section><section class="panel"><div class="panel-head"><div><h2>Quick status key</h2><p>Click “Cycle status” to update a row.</p></div></div><div class="chip-row">'+badge("Open","amber")+badge("Answered","blue")+badge("Extended","green")+badge("Dropped","rose")+'</div><p class="footer-note" style="margin-top:12px">Keep each status tied to what was actually said in the round.</p></section></div>';
}
function evidenceView(){
const q=($("#global-search")&&$("#global-search").value||"").trim().toLowerCase();
const cards=state.cards.filter(c=>(state.cardFilter==="All"||c.status===state.cardFilter)&&(!q||[c.tag,c.author,c.title,c.source,c.text,c.url].join(" ").toLowerCase().includes(q)));
const verified=state.cards.filter(c=>c.status==="VERIFIED").length,unverified=state.cards.length-verified;
const rows=cards.map(c=>'<div class="evidence-row"><strong>'+esc(c.tag||"Untitled card")+'</strong><span>'+esc(c.author||"Author needed")+(c.year?" · "+esc(c.year):"")+'</span><span>'+badge(c.status,c.status==="VERIFIED"?"green":"amber")+'</span><span>'+(c.url?'<a href="'+esc(c.url)+'" target="_blank" rel="noopener">Open source ↗</a>':"Source missing")+'</span><div class="evidence-actions"><button class="button small" data-action="view-card" data-id="'+esc(c.id)+'">Open</button><button class="button small danger" data-action="delete-card" data-id="'+esc(c.id)+'">Delete</button></div></div>').join("");
const tabs=["All","UNVERIFIED","VERIFIED"].map(f=>'<button class="chip '+(state.cardFilter===f?"active":"")+'" data-action="card-filter" data-filter="'+f+'">'+(f==="All"?"All cards ("+state.cards.length+")":f+" ("+(f==="VERIFIED"?verified:unverified)+")")+'</button>').join("");
let content=state.cards.length?(rows||empty("No cards match that filter","Choose another status filter.","Show all cards","show-all-cards")):empty(q?"No cards match that search":"Your evidence library is ready",q?"Try another search or change the status filter.":"Add a source-backed card with the full cite and original text. Research leads stay separate until verified.",q?"Clear search":"Add your first card",q?"clear-search":"new-card");
return heading("RESEARCH WITH RECEIPTS","Evidence library","Keep the full source close. Only mark a card verified after checking it against the original.",'<button class="button" data-action="export-data">Export backup</button><button class="button primary" data-action="new-card">＋ Add evidence card</button>')+
'<div class="grid cols-2" style="margin-bottom:14px">'+stat("SAVED CARDS",state.cards.length,"Stored locally in this browser",iFile)+stat("VERIFIED BY YOU",verified,"Manually checked against source",iTarget)+'</div><section class="panel"><div class="filter-row"><div class="chip-row">'+tabs+'</div><button class="link-button" data-action="import-data">Import workspace backup</button></div>'+
'<div class="notice" style="margin-bottom:11px"><span class="notice-icon">!</span><span>Never cite AI or a research lead as evidence. This app does not fetch or verify sources. <strong>UNVERIFIED</strong> is the default; change it only after inspecting the original text and citation.</span></div>'+
'<div class="evidence-table">'+content+'</div><p class="footer-note" style="margin:12px 2px 0">A useful card record includes author qualifications, publication date, source, title, access date, full URL, and complete source text. Keep a copy available if requested.</p></section>';
}
function crossfireView(){
const index=((Number(state.questions.index)%qs.length)+qs.length)%qs.length,q=qs[index];
return heading("ASK TO LEARN, THEN USE THE ANSWER","Crossfire gym","Practice short, respectful questions that test the link and set up later speeches.",'<button class="button" data-action="reset-crossfire">Reset drill</button><button class="button primary" data-action="complete-crossfire">✓ Log drill</button>')+
'<div class="crossfire-layout"><div class="stack"><section class="question-card"><div class="question-meta"><span>'+esc(q[0])+'</span><span>'+(index+1)+' / '+qs.length+'</span></div><blockquote id="question-text">'+esc(q[1])+'</blockquote><div class="question-footer"><small>Prompt bank · adapt to what was actually said</small><div class="question-controls"><button class="button small" data-action="previous-question">←</button><button class="button small" data-action="next-question">Next prompt →</button><button class="button small" data-action="copy-question">Copy</button></div></div></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Question lenses</h2><p>Pick the job your next question should do.</p></div></div><div class="question-bank">'+["Clarify advocacy","Test link","Find the warrant","Compare impacts","Check source","Set up a collapse"].map(x=>'<button class="chip" data-action="question-category" data-category="'+x+'">'+x+'</button>').join("")+'</div></section></div><div class="stack">'+
'<section class="panel"><div class="panel-head"><div><h2>Three-minute crossfire</h2><p>Practice the default PF crossfire length.</p></div>'+badge("3:00 default","blue")+'</div><div class="timer-face"><strong id="crossfire-timer">'+clock(state.questions.timerRemaining==null?180:state.questions.timerRemaining)+'</strong><span>practice timer</span></div><div class="timer-controls"><button class="button primary" data-action="start-crossfire">Start</button><button class="button" data-action="pause-crossfire">Pause</button><button class="button" data-action="reset-crossfire">Reset</button></div></section>'+
'<section class="panel notes-panel"><div class="panel-head"><div><h2>What did you learn?</h2><p>Turn answers into a later speech response.</p></div></div><textarea class="textarea-control" data-field="question-notes" placeholder="Answer → what it concedes → where you will use it in rebuttal or summary...">'+esc(state.questions.notes)+'</textarea><div class="word-meter"><span>Saved on this device</span><span>Completed drills: <strong>'+state.questions.completed+'</strong></span></div></section><div class="notice"><span class="notice-icon">↗</span><span>Crossfire is not the ballot. Bring useful concessions into a later speech so the judge can flow them.</span></div></div></div>';
}
function speechChecklist(id){
const arr=id.indexOf("summary")===0?["Collapse to the offense you can win","Frontline attacks on that offense","Extend the full claim and warrant","Weigh against their best impact"]:id.indexOf("final")===0?["Mirror the summary's arguments","Use only material on the flow","Compare impacts with a clear reason","Write the ballot in the final line"]:id.indexOf("rebuttal")===0?["Signpost to their contention","Answer warrants, not just tags","Second rebuttal: frontline your turns","Prioritize offense for summary"]:["Roadmap the speech","State claim, warrant, evidence, impact","Signpost every response","End with the judge's reason to vote"];
return'<div class="plan-list">'+arr.map((x,i)=>'<div class="plan-item"><span class="topic-mark">'+(i+1)+'</span><div class="plan-text"><strong>'+x+'</strong><small>'+(id.indexOf("final")===0&&i===1?"No new arguments in final focus.":speech(id).minutes+" minute speech default.")+'</small></div></div>').join("")+'</div>';
}
function speechView(){
const id=state.activeSpeech||"constructive-a",sel=speech(id),draft=state.drafts[id]||"",modes=["Lay","Flay","Tech"];
const blurb=state.preferences.judge==="Lay"?"Plain language, conversational pace, one clear story.":state.preferences.judge==="Tech"?"Line-by-line, full extensions, explicit comparative weighing.":"Signposted, lightly technical, with jargon explained once.";
return heading("WRITE FOR THE FLOW","Speech studio","Build a speech from the round, then adapt clarity and speed to the judge.",'<button class="button" data-action="clear-draft">Clear draft</button><button class="button primary" data-action="build-scaffold">Build a speech scaffold</button>')+
'<div class="grid cols-2" style="margin-bottom:14px"><section class="panel"><div class="panel-head"><div><h2>Judge adaptation</h2><p>'+blurb+'</p></div></div><div class="chip-row">'+modes.map(m=>'<button class="chip '+(state.preferences.judge===m?"active":"")+'" data-action="set-judge" data-judge="'+m+'">'+m+'</button>').join("")+'</div><p class="footer-note" style="margin-top:10px">Starting pace estimates only. Prioritize clarity and read the paradigm.</p></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Speech job</h2><p>PF role and default time. Check your invitation.</p></div></div><select class="select-control" data-field="active-speech">'+speeches.map(x=>'<option value="'+x.id+'" '+(x.id===id?"selected":"")+'>'+x.name+' · '+x.minutes+' min · '+x.speaker+'</option>').join("")+'</select></section></div>'+
'<div class="grid cols-2" style="align-items:start"><section class="panel"><div class="panel-head"><div><h2>Draft</h2><p>Keep analytics and evidence visibly separate.</p></div>'+badge(state.preferences.side,state.preferences.side==="Pro"?"green":"rose")+'</div><textarea class="textarea-control speech-editor" id="speech-draft" data-field="draft:'+id+'" placeholder="Start with a signpost. Build only from arguments in your flow.">'+esc(draft)+'</textarea><div class="word-meter"><span><strong id="speech-word-count">'+wc(draft)+'</strong> words</span><span>Approx. <strong id="speech-estimate">'+eta(draft)+'</strong> at '+wpm()+' wpm</span><span>Autosaved</span></div></section>'+
'<div class="stack"><section class="panel"><div class="panel-head"><div><h2>Speech checklist</h2><p>Flow-ready, not public-speaking filler.</p></div></div>'+speechChecklist(id)+'</section><section class="panel"><div class="panel-head"><div><h2>Drafting guardrails</h2></div></div><div class="notice blue"><span class="notice-icon">i</span><span>Use only real source text. If no source is ready, write <strong>[CARD NEEDED: claim + search lead]</strong> and keep moving with honest analytics.</span></div><p class="footer-note" style="margin-top:10px">Final focus mirrors the summary; do not add new arguments or impacts in the last speech.</p></section></div></div>';
}

function tournamentView(){
const done=state.checklist.filter(x=>x.checked).length;
const items=state.checklist.map((x,i)=>'<div class="tournament-item '+(x.checked?"done":"")+'"><button class="check-button '+(x.checked?"checked":"")+'" data-action="toggle-checklist" data-index="'+i+'">'+(x.checked?"✓":"")+'</button><div class="tournament-copy"><strong>'+esc(x.title)+'</strong><p>'+esc(x.detail)+'</p></div><button class="link-button" data-action="edit-checklist" data-index="'+i+'">Edit</button></div>').join("");
return heading("ROUND-DAY SYSTEM","Tournament kit","A reusable checklist for prep, evidence, partner coordination, and tournament logistics.",'<button class="button" data-action="reset-checklist">Reset checklist</button><button class="button primary" data-action="add-checklist">＋ Add item</button>')+
'<div class="grid cols-2" style="align-items:start"><section class="panel"><div class="panel-head"><div><h2>Pre-round checklist</h2><p>'+done+' of '+state.checklist.length+' complete</p></div><span class="tag">'+Math.round(done/Math.max(1,state.checklist.length)*100)+'% ready</span></div><div class="tournament-list">'+items+'</div></section>'+
'<div class="stack"><section class="panel"><div class="panel-head"><div><h2>Current topic</h2><p>'+esc(state.topic.period)+'</p></div><button class="link-button" data-action="open-settings">Edit</button></div><div class="topic-card"><h3>Public Forum resolution</h3><p>'+esc(state.topic.resolution)+'</p></div><div class="notice" style="margin-top:11px"><span class="notice-icon">i</span><span>Topic wording and speech rules can vary by tournament. Confirm the current invitation.</span></div></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Round essentials</h2><p>PF default sequence</p></div></div><div class="chip-row">'+badge("Constructives · 4m","blue")+badge("Rebuttals · 4m","blue")+badge("Summaries · 3m","blue")+badge("Final focus · 2m","blue")+badge("Crossfire · 3m","gray")+badge("Prep · 3m","gray")+'</div><p class="footer-note" style="margin-top:11px">Use the Round room for a full timer sequence and role notes.</p><button class="button small soft" data-action="navigate" data-page="round">Open round room →</button></section>'+
'<section class="panel"><div class="panel-head"><div><h2>Keep a portable backup</h2><p>Your workspace lives in this browser profile.</p></div></div><p class="footer-note">Export a JSON backup before clearing browser data or switching computers. Import it later to restore cards, flows, drafts, settings, and checklist.</p><div style="display:flex;gap:7px;margin-top:11px"><button class="button small" data-action="export-data">Export backup</button><button class="button small" data-action="import-data">Import backup</button></div></section></div></div>';
}
function dayKey(offset){
const d=new Date();d.setDate(d.getDate()-(offset||0));return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function recordPractice(minutes,reps){
state.stats.sessions+=1;state.stats.minutes+=minutes;state.stats.speeches+=reps;
state.stats.lastPractice=new Date().toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
const key=dayKey(0),entry=state.stats.daily.find(x=>x.date===key);
if(entry){entry.minutes+=minutes;entry.sessions+=1;}else state.stats.daily.push({date:key,minutes:minutes,sessions:1});
}
function progressView(){
const goal=4,pct=Math.min(100,Math.round(state.stats.sessions/goal*100));
const days=[];const today=new Date();const day=(today.getDay()+6)%7;const monday=new Date(today);monday.setDate(today.getDate()-day);
for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");const entry=state.stats.daily.find(x=>x.date===key);days.push({key,label:["M","T","W","T","F","S","S"][i],minutes:entry?entry.minutes:0});}
const max=Math.max(20,...days.map(x=>x.minutes));
const bars=days.map(x=>'<div class="chart-col"><div class="chart-bar '+(x.key===dayKey(0)?"today":"")+'" title="'+x.minutes+' minutes" style="height:'+Math.max(3,x.minutes/max*100)+'%"></div><small>'+x.label+'</small></div>').join("");
return heading("SMALL REPS ADD UP","Progress","Track practice you log in this browser. Your record starts at zero.",'<button class="button primary" data-action="log-practice">＋ Log a practice</button>')+
'<div class="grid cols-2" style="align-items:start"><div class="stack"><section class="panel"><div class="progress-hero"><div><div class="eyebrow">WEEKLY PRACTICE GOAL</div><h2>'+state.stats.sessions+' of '+goal+' sessions</h2><p>'+(state.stats.sessions>=goal?"Goal reached. Set a new target for next week.":(goal-state.stats.sessions)+' more session'+(goal-state.stats.sessions===1?"":"s")+' to reach your goal.')+'</p></div><div class="progress-ring" style="--progress:'+pct+'%"><span>'+pct+'%</span></div></div></section>'+
'<section class="panel"><div class="panel-head"><div><h2>This week</h2><p>Practice minutes recorded per day</p></div><span class="tag">Current week</span></div><div class="chart">'+bars+'</div>'+(state.stats.daily.length?"":'<div class="empty-state" style="padding:9px 5px 0"><p>Log a practice to start your activity history. No prior sessions are assumed.</p></div>')+'</section></div>'+
'<div class="stack"><div class="grid cols-2">'+stat("TOTAL SESSIONS",state.stats.sessions,"Logged practice blocks",iTarget)+stat("TOTAL MINUTES",state.stats.minutes,"Time spent practicing",iClock)+'</div>'+
panel("Skills to build","Practice areas to return to",'<div class="plan-list"><div class="plan-item"><span class="topic-mark">01</span><div class="plan-text"><strong>Warrant comparison</strong><small>Explain the causal chain in one clean sentence.</small></div></div><div class="plan-item"><span class="topic-mark">02</span><div class="plan-text"><strong>Summary collapse</strong><small>Choose offense that survives the flow.</small></div></div><div class="plan-item"><span class="topic-mark">03</span><div class="plan-text"><strong>Final focus writing</strong><small>Mirror summary and weigh to the ballot.</small></div></div></div>')+
panel("Your saved record","",'<div class="topic-card"><h3>Practice history</h3><p>'+(state.stats.lastPractice?"Last logged: "+esc(state.stats.lastPractice):"No sessions logged yet. Finish a round or log practice to start.")+'<br>'+state.stats.speeches+' speech reps saved.</p></div>')+'</div></div>';
}
function render(){
chrome();
const fn={home:home,round:round,cases:casesView,flow:flowView,evidence:evidenceView,crossfire:crossfireView,speech:speechView,tournament:tournamentView,progress:progressView}[state.activeView]||home;
$("#page-root").innerHTML=fn();bindFields();timerLabels();
}
function bindFields(){$$("[data-field]").forEach(n=>{n.addEventListener("input",fieldInput);n.addEventListener("change",fieldInput);});}
function fieldInput(e){
const n=e.currentTarget,k=n.dataset.field;if(!k)return;
if(k.startsWith("draft:")){state.drafts[k.slice(6)]=n.value;const c=$("#speech-word-count"),t=$("#speech-estimate");if(c)c.textContent=wc(n.value);if(t)t.textContent=eta(n.value);}
else if(k.startsWith("case:")){const p=k.split(":");if(state.cases[p[1]]&&state.cases[p[1]][Number(p[2])])state.cases[p[1]][Number(p[2])][p[3]]=n.value;}
else if(k==="question-notes")state.questions.notes=n.value;
else if(k==="active-speech"){state.activeSpeech=n.value;save();render();return;}
else if(k.startsWith("profile:"))state.profile[k.slice(8)]=n.value;
else if(k.startsWith("topic:"))state.topic[k.slice(6)]=n.value;
else if(k.startsWith("pref:"))state.preferences[k.slice(5)]=n.value;
else if(k.startsWith("checklist:")){const p=k.split(":");if(state.checklist[Number(p[1])])state.checklist[Number(p[1])][p[2]]=n.value;}
else if(k==="practice-notes")state.practiceNotes=n.value;
save();
}
function timerLabels(){
const s=speech(state.activeSpeech),v=$("#timer-value"),status=$("#timer-status");
if(v)v.textContent=clock(state.timer.speechId===s.id?state.timer.remaining:s.minutes*60);
if(status)status.textContent=state.timer.running&&state.timer.speechId===s.id?"running":"ready";
const c=$("#crossfire-timer");if(c)c.textContent=clock(state.questions.timerRemaining==null?180:state.questions.timerRemaining);
}
function stopTimer(){if(timerId)clearInterval(timerId);timerId=null;state.timer.running=false;}
function startTimer(){
const s=speech(state.activeSpeech);if(state.timer.speechId!==s.id)state.timer={running:false,remaining:s.minutes*60,speechId:s.id};
if(state.timer.remaining<=0)state.timer.remaining=s.minutes*60;state.timer.running=true;save();
if(timerId)clearInterval(timerId);
timerId=setInterval(()=>{if(!state.timer.running)return;state.timer.remaining--;if(state.timer.remaining<=0){state.timer.remaining=0;stopTimer();toast("Speech time. Move to the next segment when ready.");}timerLabels();},1000);render();
}
function pauseTimer(){stopTimer();save();render();}
function resetTimer(){stopTimer();const s=speech(state.activeSpeech);state.timer={running:false,remaining:s.minutes*60,speechId:s.id};save();render();}
function addContention(){const list=state.cases[state.caseSide];list.push({name:"Contention "+(list.length+1),claim:"",warrant:"",impact:"",evidence:""});save();render();}

function openModal(type,data){
const root=$("#modal-root");let title="",sub="",body="";data=data||{};
if(type==="round"){
title="Set up a practice round";sub="Choose your side, speaking position, and judge style.";
body='<div class="modal-grid"><div class="form-field"><label class="label">Your side</label><select class="select-control" id="modal-side"><option '+(state.preferences.side==="Pro"?"selected":"")+'>Pro</option><option '+(state.preferences.side==="Con"?"selected":"")+'>Con</option></select></div><div class="form-field"><label class="label">Speaking position</label><select class="select-control" id="modal-position"><option '+(state.preferences.position==="First"?"selected":"")+'>First</option><option '+(state.preferences.position==="Second"?"selected":"")+'>Second</option></select></div><div class="form-field"><label class="label">Judge adaptation</label><select class="select-control" id="modal-judge"><option>Lay</option><option '+(state.preferences.judge==="Flay"?"selected":"")+'>Flay</option><option '+(state.preferences.judge==="Tech"?"selected":"")+'>Tech</option></select></div><div class="form-field"><label class="label">Round mode</label><select class="select-control" id="modal-mode"><option>Full round</option><option>Single speech drill</option><option>Crossfire drill</option></select></div><div class="form-field full"><label class="label">Round note (optional)</label><input class="input-control" id="modal-round-note" placeholder="Opponent case, judge paradigm, or rep focus"></div><div class="form-field full"><div class="notice blue"><span class="notice-icon">i</span><span>PF teams prep both sides and speaking positions. Confirm local times in your invitation.</span></div></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Cancel</button><button class="button primary" data-action="start-round">Start practice</button></div>';
}else if(type==="settings"){
title="Workspace settings";sub="Your workspace and defaults are saved in this browser.";
body='<div class="modal-grid"><div class="form-field"><label class="label">Your name</label><input class="input-control" data-field="profile:name" value="'+esc(state.profile.name)+'"></div><div class="form-field"><label class="label">Partner name</label><input class="input-control" data-field="profile:partner" value="'+esc(state.profile.partner)+'" placeholder="Partner name"></div><div class="form-field"><label class="label">Team or school</label><input class="input-control" data-field="profile:team" value="'+esc(state.profile.team)+'"></div><div class="form-field"><label class="label">Topic period</label><input class="input-control" data-field="topic:period" value="'+esc(state.topic.period)+'"></div><div class="form-field full"><label class="label">Resolution</label><textarea class="textarea-control" data-field="topic:resolution">'+esc(state.topic.resolution)+'</textarea></div><div class="form-field"><label class="label">Default side</label><select class="select-control" data-field="pref:side"><option '+(state.preferences.side==="Pro"?"selected":"")+'>Pro</option><option '+(state.preferences.side==="Con"?"selected":"")+'>Con</option></select></div><div class="form-field"><label class="label">Default position</label><select class="select-control" data-field="pref:position"><option '+(state.preferences.position==="First"?"selected":"")+'>First</option><option '+(state.preferences.position==="Second"?"selected":"")+'>Second</option></select></div><div class="form-field"><label class="label">Judge style</label><select class="select-control" data-field="pref:judge"><option '+(state.preferences.judge==="Lay"?"selected":"")+'>Lay</option><option '+(state.preferences.judge==="Flay"?"selected":"")+'>Flay</option><option '+(state.preferences.judge==="Tech"?"selected":"")+'>Tech</option></select></div><div class="form-field"><label class="label">Target speaking pace (wpm)</label><input class="input-control" type="number" min="100" max="300" data-field="pref:speed" value="'+esc(state.preferences.speed)+'"></div><div class="form-field full"><div class="notice"><span class="notice-icon">↗</span><span>Data stays in this browser until exported. There is no account sync or cloud backup.</span></div></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Close</button><button class="button primary" data-action="close-save">Done</button></div>';
}else if(type==="card"){
title=data.id?"Edit evidence card":"Add evidence card";sub="Store a traceable source record. The app does not fetch or verify sources.";
body='<div class="modal-grid"><input type="hidden" id="card-id" value="'+esc(data.id||"")+'"><div class="form-field full"><label class="label">Tag · what this card supports</label><input class="input-control" id="card-tag" value="'+esc(data.tag||"")+'" placeholder="Do not overclaim the highlighted text"></div><div class="form-field"><label class="label">Author / organization</label><input class="input-control" id="card-author" value="'+esc(data.author||"")+'"></div><div class="form-field"><label class="label">Author qualifications</label><input class="input-control" id="card-quals" value="'+esc(data.quals||"")+'"></div><div class="form-field"><label class="label">Publication year</label><input class="input-control" id="card-year" value="'+esc(data.year||"")+'"></div><div class="form-field"><label class="label">Publication date</label><input class="input-control" id="card-date" value="'+esc(data.date||"")+'"></div><div class="form-field full"><label class="label">Publication / source</label><input class="input-control" id="card-source" value="'+esc(data.source||"")+'"></div><div class="form-field full"><label class="label">Article or document title</label><input class="input-control" id="card-title" value="'+esc(data.title||"")+'"></div><div class="form-field full"><label class="label">Full URL</label><input class="input-control" id="card-url" type="url" value="'+esc(data.url||"")+'" placeholder="https://..."></div><div class="form-field"><label class="label">Date accessed</label><input class="input-control" id="card-accessed" value="'+esc(data.accessed||"")+'"></div><div class="form-field"><label class="label">Page / section</label><input class="input-control" id="card-pages" value="'+esc(data.pages||"")+'"></div><div class="form-field full"><label class="label">Complete source paragraph(s) · verbatim</label><textarea class="textarea-control" id="card-text" placeholder="Paste the complete passage and preserve surrounding context.">'+esc(data.text||"")+'</textarea></div><div class="form-field full"><label class="label">Read-aloud excerpt / highlighted text</label><textarea class="textarea-control" id="card-highlight" placeholder="Copy exact highlighted words in read order.">'+esc(data.highlight||"")+'</textarea></div><div class="form-field full"><label class="check-line"><input type="checkbox" id="card-verified" '+(data.status==="VERIFIED"?"checked":"")+'><span>I checked the complete citation and quoted text against the original, kept context, and can produce the source if asked.</span></label></div><div class="form-field full"><div class="notice"><span class="notice-icon">!</span><span>Checking this box records your manual review. It does not mean the app verified the card.</span></div></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Cancel</button><button class="button primary" data-action="save-card">Save card</button></div>';
}else if(type==="flow"){
title=data.id?"Edit flow row":"Add a flow row";sub="Record what was argued, or label a prompt as analysis.";
body='<div class="modal-grid"><input type="hidden" id="flow-id" value="'+esc(data.id||"")+'"><div class="form-field"><label class="label">Side</label><select class="select-control" id="flow-side"><option '+((data.side||"Pro")==="Pro"?"selected":"")+'>Pro</option><option '+(data.side==="Con"?"selected":"")+'>Con</option></select></div><div class="form-field"><label class="label">Flow status</label><select class="select-control" id="flow-status"><option '+((data.status||"Open")==="Open"?"selected":"")+'>Open</option><option '+(data.status==="Answered"?"selected":"")+'>Answered</option><option '+(data.status==="Extended"?"selected":"")+'>Extended</option><option '+(data.status==="Dropped"?"selected":"")+'>Dropped</option></select></div><div class="form-field full"><label class="label">Argument tag / question</label><input class="input-control" id="flow-title" value="'+esc(data.title||"")+'" placeholder="Short signpost"></div><div class="form-field full"><label class="label">Warrant, response, or note</label><textarea class="textarea-control" id="flow-note">'+esc(data.note||"")+'</textarea></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Cancel</button><button class="button primary" data-action="save-flow">Save row</button></div>';
}else if(type==="checklist"){
title=data.index!=null?"Edit checklist item":"Add checklist item";sub="Keep tournament prep specific to your team.";
body='<div class="modal-grid"><input type="hidden" id="check-index" value="'+(data.index!=null?data.index:"")+'"><div class="form-field full"><label class="label">Checklist item</label><input class="input-control" id="check-title" value="'+esc(data.item?data.item.title:"")+'"></div><div class="form-field full"><label class="label">Details</label><textarea class="textarea-control" id="check-detail">'+esc(data.item?data.item.detail:"")+'</textarea></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Cancel</button><button class="button primary" data-action="save-checklist">Save item</button></div>';
}else if(type==="practice"){
title="Log a practice";sub="Add a practice block to your local progress record.";
body='<div class="modal-grid"><div class="form-field"><label class="label">Minutes practiced</label><input class="input-control" id="practice-minutes" type="number" min="1" max="600" value="20"></div><div class="form-field"><label class="label">Speech reps completed</label><input class="input-control" id="practice-speeches" type="number" min="0" max="30" value="1"></div><div class="form-field full"><label class="label">Practice focus</label><input class="input-control" id="practice-focus" placeholder="e.g. summary collapse and weighing"></div><div class="form-field full"><label class="label">Reflection</label><textarea class="textarea-control" id="practice-reflection" placeholder="What improved? What is your next rep?"></textarea></div></div><div class="modal-actions"><button class="button" data-action="close-modal">Cancel</button><button class="button primary" data-action="save-practice">Save practice</button></div>';
}else return;
root.innerHTML='<div class="modal-backdrop" data-action="backdrop-close"><section class="modal" role="dialog" aria-modal="true" aria-label="'+esc(title)+'"><div class="modal-head"><div><h2>'+esc(title)+'</h2><p>'+esc(sub)+'</p></div><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body">'+body+'</div></section></div>';
bindFields();
}
function closeModal(){ $("#modal-root").innerHTML="";save();render();}
function saveCard(){
const id=$("#card-id").value||(crypto.randomUUID?crypto.randomUUID():String(Date.now()));
const old=state.cards.find(x=>x.id===id)||{};
const c={id:id,tag:$("#card-tag").value.trim(),author:$("#card-author").value.trim(),quals:$("#card-quals").value.trim(),year:$("#card-year").value.trim(),date:$("#card-date").value.trim(),source:$("#card-source").value.trim(),title:$("#card-title").value.trim(),url:$("#card-url").value.trim(),accessed:$("#card-accessed").value.trim(),pages:$("#card-pages").value.trim(),text:$("#card-text").value,highlight:$("#card-highlight").value,status:"UNVERIFIED",created:old.created||new Date().toISOString()};
if($("#card-verified").checked){
const required=["tag","author","quals","year","date","source","title","url","accessed","text","highlight"];
if(required.some(k=>!String(c[k]||"").trim())){toast("Complete the cite, source text, URL, access date, and excerpt before marking verified.");return;}
c.status="VERIFIED";
}
const ix=state.cards.findIndex(x=>x.id===id);if(ix>=0)state.cards[ix]=c;else state.cards.unshift(c);
closeModal();toast(c.status==="VERIFIED"?"Saved as manually verified by you.":"Saved as UNVERIFIED. Check the source before using it.");
}
function saveFlow(){
const id=$("#flow-id").value||(crypto.randomUUID?crypto.randomUUID():String(Date.now()));
const x={id:id,side:$("#flow-side").value,status:$("#flow-status").value,title:$("#flow-title").value.trim()||"Untitled argument",note:$("#flow-note").value.trim()};
const ix=state.flow.findIndex(y=>y.id===id);if(ix>=0)state.flow[ix]=x;else state.flow.push(x);closeModal();toast("Flow row saved.");
}
function saveChecklist(){
const v=$("#check-index").value,item={title:$("#check-title").value.trim()||"New checklist item",detail:$("#check-detail").value.trim(),checked:v!==""&&state.checklist[Number(v)]?state.checklist[Number(v)].checked:false};
if(v==="")state.checklist.push(item);else state.checklist[Number(v)]=item;closeModal();toast("Checklist updated.");
}
function savePractice(){
const min=Math.max(1,Number($("#practice-minutes").value)||1),reps=Math.max(0,Number($("#practice-speeches").value)||0);
recordPractice(min,reps);state.practiceNotes=[$("#practice-focus").value.trim(),$("#practice-reflection").value.trim()].filter(Boolean).join(" — ");
closeModal();toast("Practice saved to this browser.");
}

function scaffold(){
const s=speech(state.activeSpeech),side=state.preferences.side;let text="";
if(s.id.indexOf("constructive")===0)text="Roadmap: I will make two contentions, then explain the weighing lens.\n\n"+side+" — "+state.topic.resolution+"\n\nContention 1: [claim].\nWarrant: [explain the causal chain].\nEvidence: [CARD NEEDED: source-backed claim + targeted search].\nImpact: [who, timeframe, likelihood, and why it matters].\n\nContention 2: [claim].\nWarrant: [explain the causal chain].\nEvidence: [CARD NEEDED: source-backed claim + targeted search].\nImpact: [who, timeframe, likelihood, and why it matters].\n\nWeighing: [why our impact matters more than theirs].";
else if(s.id.indexOf("rebuttal")===0)text="Roadmap: On their first contention, [number] responses. Then I will [frontline / extend].\n\nOn their C1:\n1. Delink: [which link is missing, with a warrant].\n2. Non-unique: [what happens either way, with proof or clear analytics].\n3. Turn / impact defense: [only if warranted].\n\nOn our case:\n1. Extend [argument name]: [claim + warrant + evidence status].\n2. Frontline [their response]: [answer the warrant].\n\nWeighing: We outweigh on [reason] because [comparison].";
else if(s.id.indexOf("summary")===0)text="Roadmap: The round comes down to [one or two voting issues].\n\nOn their offense: [frontline attacks on the offense we collapse to].\n\nExtend [our contention]: [claim] because [warrant]. Identify the card and its status; explain what it proves.\n\nWeighing: Our impact outweighs theirs on [probability / timeframe / magnitude / reversibility / scope] because [comparative warrant].\n\nThe judge should vote "+side+" because [ballot story].";
else if(s.id.indexOf("final")===0)text="Judge, this round comes down to [voting issue from summary].\n\nFirst, extend [the same offense extended in summary]. [Restate claim, warrant, evidence, and impact; answer the live response.]\n\nWeighing: Prefer our impact on [reason] because [why it matters more than their impact].\n\n[Mirror the summary's second voting issue if needed. No new arguments.]\n\nFor those reasons, vote "+side+".";
else if(s.id.indexOf("crossfire")===0||s.id==="grand-crossfire")text="1. Clarify their advocacy: [short question].\n2. Test the link: [what step connects their claim to the impact?].\n3. Check their source: [what exact text supports the warrant?].\n4. Compare: [which impact is more likely / sooner / larger, and why?].\n\nAfter crossfire, carry useful answers into a later speech. Do not assume the judge flowed the exchange.";
else text="Prep priorities\n\n1. Pick the argument you want to extend.\n2. Write the opponent's strongest response.\n3. Prepare a frontline with a warrant.\n4. Find the comparative weighing sentence.\n5. Confirm every card and citation.";
state.drafts[s.id]=text;save();render();toast("Flow-ready scaffold added. Replace every bracket with round-specific analysis.");
}
function exportData(){
const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
a.href=url;a.download="flowstate-pf-backup-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(url);toast("Workspace backup downloaded.");
}
function importData(){
const input=document.createElement("input");input.type="file";input.accept="application/json,.json";
input.addEventListener("change",()=>{const file=input.files&&input.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{state=merge(JSON.parse(reader.result));save();render();toast("Workspace backup imported.");}catch(_){toast("That file is not a readable Flowstate backup.");}};reader.readAsText(file);});input.click();
}
function startCrossfire(){
if(crossfireId)clearInterval(crossfireId);if(state.questions.timerRemaining==null||state.questions.timerRemaining<=0)state.questions.timerRemaining=180;
crossfireId=setInterval(()=>{state.questions.timerRemaining--;if(state.questions.timerRemaining<=0){state.questions.timerRemaining=0;clearInterval(crossfireId);crossfireId=null;toast("Crossfire time.");}timerLabels();},1000);
}
function addFlow(side){openModal("flow",{side:side||"Pro"});}
document.addEventListener("click",function(ev){
const t=ev.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;
if(a==="navigate"){ev.preventDefault();go(t.dataset.page);}
else if(a==="toggle-menu")$("#sidebar").classList.toggle("open");
else if(a==="open-settings")openModal("settings");
else if(a==="new-round")openModal("round");
else if(a==="close-modal")closeModal();
else if(a==="backdrop-close"&&ev.target===t)closeModal();
else if(a==="close-save")closeModal();
else if(a==="start-round"){
state.preferences.side=$("#modal-side").value;state.preferences.position=$("#modal-position").value;state.preferences.judge=$("#modal-judge").value;
state.preferences.speed=state.preferences.judge==="Lay"?"160":state.preferences.judge==="Tech"?"230":"190";
const mode=$("#modal-mode").value;state.activeSpeech=mode==="Crossfire drill"?"crossfire-1":"constructive-a";
if($("#modal-round-note").value.trim())state.practiceNotes=$("#modal-round-note").value.trim();
stopTimer();const s=speech(state.activeSpeech);state.timer={running:false,remaining:s.minutes*60,speechId:s.id};closeModal();go("round");toast("Round ready. Side and judge settings saved.");
}
else if(a==="reset-round"){stopTimer();state.activeSpeech="constructive-a";resetTimer();toast("Round sequence reset.");}
else if(a==="select-speech"){stopTimer();state.activeSpeech=t.dataset.id;const s=speech(state.activeSpeech);state.timer={running:false,remaining:s.minutes*60,speechId:s.id};save();render();}
else if(a==="start-timer")startTimer();
else if(a==="pause-timer"){stopTimer();save();render();}
else if(a==="reset-timer"){const s=speech(state.activeSpeech);stopTimer();state.timer={running:false,remaining:s.minutes*60,speechId:s.id};save();render();}
else if(a==="add-one-minute"){state.timer.remaining+=60;save();timerLabels();}
else if(a==="toggle-plan"){const i=Number(t.dataset.index);state.plan[i]=!state.plan[i];save();render();}
else if(a==="case-side"){state.caseSide=t.dataset.side;save();render();}
else if(a==="add-contention"){const xs=state.cases[state.caseSide];xs.push({name:"Contention "+(xs.length+1),claim:"",warrant:"",impact:"",evidence:""});save();render();}
else if(a==="remove-contention"){state.cases[state.caseSide].splice(Number(t.dataset.index),1);save();render();toast("Contention removed.");}
else if(a==="new-card")openModal("card");
else if(a==="save-card")saveCard();
else if(a==="view-card"){const c=state.cards.find(x=>x.id===t.dataset.id);if(c)openModal("card",c);}
else if(a==="delete-card"){state.cards=state.cards.filter(x=>x.id!==t.dataset.id);save();render();toast("Card deleted.");}
else if(a==="card-filter"){state.cardFilter=t.dataset.filter;render();}
else if(a==="show-all-cards"){state.cardFilter="All";render();}
else if(a==="clear-search"){$("#global-search").value="";render();}
else if(a==="import-data")importData();
else if(a==="export-data")exportData();
else if(a==="add-flow")addFlow(t.dataset.side);
else if(a==="save-flow")saveFlow();
else if(a==="edit-flow"){const x=state.flow.find(y=>y.id===t.dataset.id);if(x)openModal("flow",x);}
else if(a==="delete-flow"){state.flow=state.flow.filter(x=>x.id!==t.dataset.id);save();render();}
else if(a==="cycle-flow"){const x=state.flow.find(y=>y.id===t.dataset.id),cycle=["Open","Answered","Extended","Dropped"];if(x){x.status=cycle[(cycle.indexOf(x.status)+1)%cycle.length];save();render();}}
else if(a==="clear-flow"){if(confirm("Clear every row from the flow board? Export a backup first if you may need them.")){state.flow=[];save();render();}}
else if(a==="previous-question"){state.questions.index=(state.questions.index+qs.length-1)%qs.length;save();render();}
else if(a==="next-question"){state.questions.index=(state.questions.index+1)%qs.length;save();render();}
else if(a==="copy-question"){const q=qs[state.questions.index];if(navigator.clipboard)navigator.clipboard.writeText(q[1]).then(()=>toast("Question copied.")).catch(()=>toast("Clipboard access is unavailable here."));else toast("Clipboard access is unavailable here.");}
else if(a==="question-category"){const word=t.dataset.category.split(" ")[0].toLowerCase(),i=qs.findIndex(x=>x[0].toLowerCase().includes(word));state.questions.index=i>=0?i:(state.questions.index+1)%qs.length;save();render();}
else if(a==="complete-crossfire"){state.questions.completed++;recordPractice(3,0);save();render();toast("Crossfire drill logged.");}
else if(a==="reset-crossfire"){if(crossfireId)clearInterval(crossfireId);crossfireId=null;state.questions.timerRemaining=180;save();timerLabels();}
else if(a==="start-crossfire")startCrossfire();
else if(a==="pause-crossfire"){if(crossfireId)clearInterval(crossfireId);crossfireId=null;}
else if(a==="set-judge"){state.preferences.judge=t.dataset.judge;state.preferences.speed=state.preferences.judge==="Lay"?"160":state.preferences.judge==="Tech"?"230":"190";save();render();}
else if(a==="build-scaffold")scaffold();
else if(a==="clear-draft"){state.drafts[state.activeSpeech]="";save();render();toast("Draft cleared.");}
else if(a==="open-final-focus"){state.activeSpeech="final-a";go("speech");}
else if(a==="log-practice")openModal("practice");
else if(a==="save-practice")savePractice();
else if(a==="add-checklist")openModal("checklist");
else if(a==="edit-checklist"){const i=Number(t.dataset.index);openModal("checklist",{index:i,item:state.checklist[i]});}
else if(a==="save-checklist")saveChecklist();
else if(a==="toggle-checklist"){const i=Number(t.dataset.index);state.checklist[i].checked=!state.checklist[i].checked;save();render();}
else if(a==="reset-checklist"){state.checklist=clone(checklist);save();render();toast("Checklist reset to the starter list.");}
});
document.addEventListener("input",function(ev){
if(ev.target.id!=="global-search")return;
clearTimeout(searchId);const value=ev.target.value,wasEvidence=state.activeView==="evidence";
searchId=setTimeout(()=>{if(value.trim()&&!wasEvidence)state.activeView="evidence";render();const input=$("#global-search");if(input){input.focus();input.value=value;input.setSelectionRange(value.length,value.length);}},120);
});
document.addEventListener("keydown",function(ev){
if((ev.metaKey||ev.ctrlKey)&&ev.key.toLowerCase()==="k"){ev.preventDefault();const s=$("#global-search");if(s)s.focus();}
if(ev.key==="Escape"){if($("#modal-root").innerHTML)closeModal();else $("#sidebar").classList.remove("open");}
});
state.timer.running=false;
render();
})();

