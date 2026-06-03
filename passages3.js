// passages3.js — passages 51–100

const PASSAGES3 = [
// ==================== 51-55 ====================
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Community Cooking Class",
  meta:"Recreation — Maplewood Community Center",
  body:`<div class="flyer-center"><div class="flyer-big">🍳 COOKING CLASSES FOR ALL LEVELS</div><div style="color:#8a4a1a;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Maplewood Community Center</div></div>
<p>Learn to cook delicious meals with our <b>6-week cooking course</b> led by professional chef Amara Diallo.</p>
<p><b>Course dates:</b> Every Wednesday, July 2 – August 6 | <b>Time:</b> 6:30 PM – 8:30 PM<br><b>Fee:</b> $180/person (all ingredients included)</p>
<p class="bullet">Week 1–2: Fundamentals and knife skills</p>
<p class="bullet">Week 3–4: International cuisines</p>
<p class="bullet">Week 5–6: Baking and desserts</p>
<p>Class size limited to <b>12 participants</b>. Register at the front desk or call 555-0233. Early registration discount: <b>$20 off</b> if booked before June 25.</p>`,
  questions:[
    {q:"コースの授業料はいくらですか？",options:["$150","$160","$180","$200"],answer:2,explanation:"「Fee: $180/person」とあります。"},
    {q:"早期登録割引を受けるための期限はいつですか？",options:["6月20日","6月25日","7月1日","7月2日"],answer:1,explanation:"「$20 off if booked before June 25」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Survey Request — Employee Satisfaction",
  meta:"HR — Lakeland Financial Group",
  body:`<div class="email-header"><div><b>From:</b> hr@lakeland-fg.com</div><div><b>To:</b> All Employees</div><div><b>Subject:</b> Please Take Our Annual Employee Satisfaction Survey</div></div>
<p>Dear Team,</p>
<p>We invite you to participate in our <b>Annual Employee Satisfaction Survey</b>. Your honest feedback helps us improve the workplace for everyone.</p>
<p>The survey takes approximately <b>10 minutes</b> and is completely <b>anonymous</b>. Please complete it by <b>June 19</b>.</p>
<p>Access the survey at: hr.lakeland-fg.com/survey2026</p>
<p>Results will be shared company-wide in August. Departments with a <b>90% or higher</b> response rate will receive a team lunch sponsored by leadership.</p>`,
  questions:[
    {q:"このアンケートにかかる時間はどのくらいですか？",options:["5分","10分","15分","20分"],answer:1,explanation:"「approximately 10 minutes」とあります。"},
    {q:"回答率90%以上の部署が受ける特典は何ですか？",options:["ボーナス支給","チームランチ","追加有給休暇","ギフト券"],answer:1,explanation:"「team lunch sponsored by leadership」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Warehouse Associate",
  meta:"Logistics — Speedline Distribution Center",
  body:`<p><b>Speedline Distribution Center</b> is hiring <b>full-time Warehouse Associates</b>.</p>
<table class="job-table"><tr><td>Shift</td><td>Night shift: 10:00 PM – 6:00 AM</td></tr><tr><td>Pay</td><td>$19.00/hour + $2.00 night differential</td></tr><tr><td>Location</td><td>Industrial Park, Unit 7</td></tr><tr><td>Start</td><td>Immediate openings</td></tr></table>
<p style="margin-top:10px;"><b>Duties:</b> picking, packing, inventory scanning, forklift operation (training provided)</p>
<p><b>Requirements:</b> ability to lift up to 25kg; reliable transportation to site; steel-toed boots required on first day.</p>
<p>Apply in person at the site office, Monday–Friday 8:00 AM–4:00 PM, or email <b>recruit@speedline.com</b>.</p>`,
  questions:[
    {q:"夜間勤務手当を含めた時給はいくらですか？",options:["$19.00","$20.00","$21.00","$22.00"],answer:2,explanation:"「$19.00/hour + $2.00 night differential」で合計$21.00です。"},
    {q:"初日に必要な装備は何ですか？",options:["ヘルメット","手袋","スチールトゥーブーツ","反射ベスト"],answer:2,explanation:"「steel-toed boots required on first day」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Condominium AGM Notice",
  meta:"Property Management — Lakeview Condo Association",
  body:`<div class="notice-box"><div class="notice-title">NOTICE OF ANNUAL GENERAL MEETING</div></div>
<p>The <b>Annual General Meeting</b> of the Lakeview Condominium Association will be held on <b>Tuesday, July 8, at 7:00 PM</b> in the Community Room (Ground Floor).</p>
<p><b>Agenda:</b></p>
<p class="bullet">Review and approval of 2025 financial statements</p>
<p class="bullet">Election of two Board members</p>
<p class="bullet">Approval of 2026–2027 operating budget</p>
<p class="bullet">Open forum for resident questions</p>
<p>All unit owners are encouraged to attend. Proxy forms are available at the management office for owners unable to attend in person. Deadline to submit proxies: <b>July 6</b>.</p>`,
  questions:[
    {q:"AGMはいつ開催されますか？",options:["7月1日","7月6日","7月8日","7月15日"],answer:2,explanation:"「Tuesday, July 8, at 7:00 PM」とあります。"},
    {q:"出席できない場合、オーナーはどうすることができますか？",options:["電話で議決権を行使する","委任状を提出する","書面で意見を送る","代理人に部屋を貸す"],answer:1,explanation:"「Proxy forms are available... for owners unable to attend」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Accounting Software — Free Trial",
  meta:"SaaS — ClearBooks Pro",
  body:`<div class="flyer-center"><div class="flyer-big">💼 SMARTER ACCOUNTING STARTS HERE</div><div style="color:#1a5c8a;font-size:1rem;font-weight:700;margin-bottom:8px;">ClearBooks Pro</div></div>
<p>Manage invoices, expenses, and payroll all in one place. Trusted by over <b>80,000 small businesses</b>.</p>
<p class="bullet">Automatic bank reconciliation</p>
<p class="bullet">Multi-currency support</p>
<p class="bullet">Real-time tax reports</p>
<p class="bullet">Integrates with 200+ apps</p>
<p><b>Try free for 30 days</b> — no credit card required. After the trial, plans start at <b>$29/month</b>. Annual billing saves 20%. Visit <b>clearbookspro.com</b>.</p>`,
  questions:[
    {q:"無料トライアル期間はどのくらいですか？",options:["7日","14日","30日","60日"],answer:2,explanation:"「Try free for 30 days」とあります。"},
    {q:"年間一括払いにするとどのくらいお得になりますか？",options:["10%","15%","20%","25%"],answer:2,explanation:"「Annual billing saves 20%」とあります。"}
  ]
},
// ==================== 56-60 ====================
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Project Status Update",
  meta:"Project Management — Clover Construction",
  body:`<div class="email-header"><div><b>From:</b> p.newton@clover-construction.com</div><div><b>To:</b> Stakeholders</div><div><b>Subject:</b> Riverside Office Park — Phase 2 Update</div></div>
<p>Dear Stakeholders,</p>
<p>I am pleased to report that <b>Phase 2</b> of the Riverside Office Park project is currently <b>on schedule</b> and within budget.</p>
<p>Key milestones achieved this month: foundation work completed (100%); structural steel installation (75% complete).</p>
<p>The <b>Phase 2 completion date remains November 30, 2026</b>. Phase 3 planning meetings will begin in September.</p>
<p>Our next site inspection is scheduled for <b>June 19</b>. Stakeholders wishing to attend should confirm with the site manager by June 16.</p>`,
  questions:[
    {q:"Phase 2の完成予定日はいつですか？",options:["9月30日","10月31日","11月30日","12月31日"],answer:2,explanation:"「Phase 2 completion date remains November 30, 2026」とあります。"},
    {q:"現場視察への参加を希望する関係者はいつまでに確認すべきですか？",options:["6月14日","6月16日","6月19日","6月20日"],answer:1,explanation:"「confirm with the site manager by June 16」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Back-to-School Supplies Sale",
  meta:"Retail — OfficeWorld Superstore",
  body:`<div class="flyer-center"><div class="flyer-big">✏ BACK-TO-SCHOOL SALE</div><div style="font-size:0.85rem;color:#555;margin-bottom:10px;">OfficeWorld Superstore — All Locations</div><div class="flyer-price">UP TO 40% OFF</div></div>
<p>Stock up on everything you need for the new school year! Sale runs <b>August 1–15</b>.</p>
<p class="bullet">Notebooks, folders, and binders — from $0.99</p>
<p class="bullet">Backpacks — 30% off all brands</p>
<p class="bullet">Calculators and tech accessories — up to 40% off</p>
<p><b>Teacher Appreciation Bonus:</b> Educators with a valid school ID receive an <b>additional 10% off</b> the sale price on all items.</p>
<p>Shop online at officeworld.com for exclusive web-only deals.</p>`,
  questions:[
    {q:"このセールの開催期間はいつですか？",options:["7月1日〜15日","8月1日〜15日","8月15日〜31日","7月15日〜8月1日"],answer:1,explanation:"「Sale runs August 1–15」とあります。"},
    {q:"教師が追加で受ける割引は何%ですか？",options:["5%","10%","15%","20%"],answer:1,explanation:"「Educators... receive an additional 10% off」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Parking Permit Renewal",
  meta:"Administration — Bayside Corporate Tower",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Annual Parking Permit Renewal</div></div>
<p>All employee parking permits will expire on <b>June 30, 2026</b>. Renewals are now open.</p>
<p class="bullet">Renew online at: parking.bayside-corp.com/renew</p>
<p class="bullet">Annual fee: <b>$480</b> (monthly installments available: $42/month)</p>
<p class="bullet">Submit payment by <b>June 20</b> to avoid a lapse in access</p>
<p class="bullet">New applicants: applications are currently on a <b>waitlist</b> due to limited spaces</p>
<p>Contact facilities@bayside-corp.com or ext. 1150 for assistance.</p>`,
  questions:[
    {q:"駐車許可証の年間費用はいくらですか？",options:["$420","$450","$480","$510"],answer:2,explanation:"「Annual fee: $480」とあります。"},
    {q:"アクセスの中断を避けるために支払いはいつまでにすべきですか？",options:["6月15日","6月20日","6月25日","6月30日"],answer:1,explanation:"「Submit payment by June 20」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Fire Safety Drill Notice",
  meta:"Safety & Compliance — Orion Tower",
  body:`<div class="notice-box"><div class="notice-title">🔥 FIRE SAFETY DRILL — MANDATORY PARTICIPATION</div></div>
<p>An <b>unannounced fire safety drill</b> will be conducted sometime during the week of <b>June 16–20</b>. All building occupants are required to participate.</p>
<p>When the alarm sounds:</p>
<p class="bullet">Exit immediately via the <b>nearest stairwell</b> (do not use elevators)</p>
<p class="bullet">Proceed to your designated <b>assembly point</b> (see floor map by each stairwell)</p>
<p class="bullet">Floor wardens will conduct a headcount — remain at the assembly point until cleared</p>
<p>Tenants with mobility concerns should register with building management by <b>June 13</b> for evacuation assistance.</p>`,
  questions:[
    {q:"避難訓練はいつ行われますか？",options:["6月9日〜13日","6月16日〜20日","6月23日〜27日","事前告知あり"],answer:1,explanation:"「during the week of June 16–20」とあります。"},
    {q:"アラームが鳴った際にしてはいけないことは何ですか？",options:["階段を使う","集合場所に向かう","エレベーターを使う","人数確認に参加する"],answer:2,explanation:"「do not use elevators」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Real Estate — New Condo Development",
  meta:"Real Estate — Vertex Property Group",
  body:`<div class="flyer-center"><div class="flyer-big">🏙 HORIZON RESIDENCES</div><div style="color:#1a3a5c;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Premium Condominiums — Downtown Waterfront</div></div>
<p>Now pre-selling Phase 1 of <b>Horizon Residences</b> — 180 units of modern downtown living.</p>
<p class="bullet">1-bedroom from <b>$420,000</b></p>
<p class="bullet">2-bedroom from <b>$595,000</b></p>
<p class="bullet">Penthouse suites from <b>$1.2M</b></p>
<p>Amenities: rooftop pool, concierge, fitness center, underground parking. Estimated completion: <b>Spring 2028</b>.</p>
<p>Register for a <b>VIP Preview Event</b> on June 21 at our sales center — 88 Harbor Drive. Early registrants receive <b>priority unit selection</b>.</p>`,
  questions:[
    {q:"1ベッドルームの最低価格はいくらですか？",options:["$380,000","$420,000","$450,000","$595,000"],answer:1,explanation:"「1-bedroom from $420,000」とあります。"},
    {q:"早期登録者が受けられる特典は何ですか？",options:["価格の割引","優先ユニット選択権","家具付きオプション","引越し費用補助"],answer:1,explanation:"「Early registrants receive priority unit selection」とあります。"}
  ]
},
// ==================== 61-65 ====================
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Expense Report Reminder",
  meta:"Finance — Crossroads Consulting",
  body:`<div class="email-header"><div><b>From:</b> finance@crossroads-consulting.com</div><div><b>To:</b> All Staff</div><div><b>Subject:</b> Reminder: Q2 Expense Reports Due June 30</div></div>
<p>Dear Team,</p>
<p>This is a reminder that all <b>Q2 expense reports</b> (April–June) must be submitted by <b>Monday, June 30</b>. Late submissions will be processed in the following month's payroll cycle.</p>
<p>Please ensure all receipts are attached and expenses are correctly categorized. Reports submitted without receipts will be returned for correction.</p>
<p>Submit via the finance portal at: finance.crossroads.internal. For help with the portal, contact Jamie at ext. 2205.</p>`,
  questions:[
    {q:"Q2経費精算書の提出期限はいつですか？",options:["6月15日","6月25日","6月30日","7月5日"],answer:2,explanation:"「submitted by Monday, June 30」とあります。"},
    {q:"期限後に提出された経費はいつ処理されますか？",options:["即時処理","翌月の給与サイクル","翌四半期","年末精算"],answer:1,explanation:"「processed in the following month's payroll cycle」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Hotel Front Desk Agent",
  meta:"Hospitality — Grand Pacific Hotel",
  body:`<p><b>Grand Pacific Hotel</b> is seeking a <b>Front Desk Agent</b> to join our front-of-house team.</p>
<table class="job-table"><tr><td>Type</td><td>Full-time, rotating shifts</td></tr><tr><td>Pay</td><td>$22–$26/hour</td></tr><tr><td>Location</td><td>On-site, Vancouver</td></tr><tr><td>Deadline</td><td>June 22, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Requirements:</b></p>
<p class="bullet">1+ years of hotel or customer service experience</p>
<p class="bullet">Proficiency in hotel management software (Opera preferred)</p>
<p class="bullet">Excellent presentation and communication skills</p>
<p class="bullet">Availability for early morning, evening, and weekend shifts</p>
<p>Email résumé to <b>hr@grandpacific.com</b>. Only shortlisted candidates will be contacted.</p>`,
  questions:[
    {q:"このポジションの勤務体制はどれですか？",options:["固定シフト・月〜金","ローテーションシフト","週末のみ","夜勤専従"],answer:1,explanation:"「Full-time, rotating shifts」とあります。"},
    {q:"選考通過者に対してどのような連絡がありますか？",options:["全員に結果を通知","選考通過者のみ連絡","1週間以内に全員に通知","メールで一斉通知"],answer:1,explanation:"「Only shortlisted candidates will be contacted」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Maintenance Window — IT Systems",
  meta:"IT Operations — Vertex Tech Solutions",
  body:`<div class="notice-box"><div class="notice-title">PLANNED SYSTEM MAINTENANCE WINDOW</div></div>
<p>Vertex Tech Solutions will perform <b>critical infrastructure maintenance</b> on the following systems:</p>
<p><b>Date:</b> Sunday, June 22 | <b>Time:</b> 2:00 AM – 6:00 AM</p>
<p><b>Affected services:</b></p>
<p class="bullet">Email and calendar (Outlook)</p>
<p class="bullet">Internal file sharing (SharePoint)</p>
<p class="bullet">VPN access</p>
<p>The company website and customer portal will remain <b>fully operational</b>. Please save and close all active work before midnight on June 21. Systems will be restored by 6:00 AM.</p>`,
  questions:[
    {q:"メンテナンスの実施時間帯はいつですか？",options:["土曜午前2時〜6時","日曜午前2時〜6時","日曜午後2時〜6時","月曜午前2時〜6時"],answer:1,explanation:"「Sunday, June 22, 2:00 AM – 6:00 AM」とあります。"},
    {q:"メンテナンス中も通常通り使えるサービスはどれですか？",options:["メール","VPN","会社のウェブサイト","SharePoint"],answer:2,explanation:"「The company website and customer portal will remain fully operational」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"New Meeting Room Booking Policy",
  meta:"Administration — Fairview Group",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Meeting Room Booking Policy Update</div></div>
<p>Effective June 9, the following rules apply to all meeting room bookings:</p>
<p class="bullet">Rooms may be booked up to <b>2 weeks in advance</b> through the online calendar</p>
<p class="bullet">Bookings of <b>3 hours or more</b> require approval from your department head</p>
<p class="bullet"><b>No-show policy:</b> if a booked room is not used within 15 minutes, it will be released for others</p>
<p class="bullet">Recurring weekly bookings are limited to <b>1 hour per team</b></p>
<p>Questions: admin@fairview.com or ext. 1010.</p>`,
  questions:[
    {q:"何週間前まで会議室を予約できますか？",options:["1週間","2週間","3週間","1ヶ月"],answer:1,explanation:"「booked up to 2 weeks in advance」とあります。"},
    {q:"ノーショーポリシーによると、部屋はいつ解放されますか？",options:["予約時刻の5分後","10分後","15分後","30分後"],answer:2,explanation:"「not used within 15 minutes, it will be released」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Photography Workshop",
  meta:"Arts — Focus & Frame Studio",
  body:`<div class="flyer-center"><div class="flyer-big">📷 URBAN PHOTOGRAPHY WORKSHOP</div><div style="color:#1a3a5c;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Focus & Frame Studio</div></div>
<p>Join award-winning photographer <b>Elena Voss</b> for a hands-on full-day urban photography workshop.</p>
<p><b>Date:</b> Saturday, July 12 | <b>Time:</b> 9:00 AM – 5:00 PM<br><b>Fee:</b> $195 (includes printed photo book of your best shots)</p>
<p>Limited to <b>15 participants</b>. All skill levels welcome. Bring your own camera (DSLR or mirrorless recommended; smartphones acceptable).</p>
<p>Register at focusandframe.com. <b>$30 deposit</b> required to hold your spot. Balance due one week before the event.</p>`,
  questions:[
    {q:"ワークショップの参加費に含まれているものは何ですか？",options:["カメラレンタル","プリント写真集","昼食","交通費"],answer:1,explanation:"「includes printed photo book of your best shots」とあります。"},
    {q:"予約を確保するために事前に必要なものは何ですか？",options:["全額支払い","$30の前払い金","カメラの登録","写真の提出"],answer:1,explanation:"「$30 deposit required to hold your spot」とあります。"}
  ]
},
// ==================== 66-70 ====================
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Pool Closure for Maintenance",
  meta:"Amenities — Seaview Apartment Complex",
  body:`<div class="notice-box"><div class="notice-title">NOTICE: POOL TEMPORARILY CLOSED</div></div>
<p>The outdoor pool will be <b>closed from June 9–16</b> for annual maintenance, including:</p>
<p class="bullet">Resurfacing of pool deck</p>
<p class="bullet">Replacement of filtration system</p>
<p class="bullet">Water chemical rebalancing</p>
<p>The <b>indoor fitness pool</b> on Level B1 remains open during this period (hours: 6:00 AM – 9:00 PM).</p>
<p>The outdoor pool will reopen on <b>June 17</b>, with an extended summer schedule: <b>7:00 AM – 10:00 PM daily</b>.</p>`,
  questions:[
    {q:"屋外プールはいつ再開しますか？",options:["6月14日","6月16日","6月17日","6月20日"],answer:2,explanation:"「The outdoor pool will reopen on June 17」とあります。"},
    {q:"閉鎖期間中に利用できる代替施設はどれですか？",options:["近隣のスポーツクラブ","B1階の屋内フィットネスプール","コミュニティセンターのプール","ジャグジー"],answer:1,explanation:"「The indoor fitness pool on Level B1 remains open」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Partnership Proposal Follow-Up",
  meta:"Business Development — Starfield Media",
  body:`<div class="email-header"><div><b>From:</b> a.chen@starfield-media.com</div><div><b>To:</b> Ms. Rachel Ito</div><div><b>Subject:</b> Follow-Up: Co-Marketing Partnership Proposal</div></div>
<p>Dear Ms. Ito,</p>
<p>Thank you for meeting with us last Tuesday to discuss the proposed co-marketing partnership. We very much enjoyed the conversation and are enthusiastic about the potential collaboration.</p>
<p>As discussed, we are proposing a <b>6-month pilot</b> starting August 1, with a shared budget of <b>$30,000</b> ($15,000 per company).</p>
<p>Could you confirm your team's interest by <b>June 18</b>? We would then proceed to draft a formal agreement. Please don't hesitate to reach out with any questions.</p>`,
  questions:[
    {q:"提案されているパイロット期間はどのくらいですか？",options:["3ヶ月","6ヶ月","12ヶ月","18ヶ月"],answer:1,explanation:"「6-month pilot」とあります。"},
    {q:"各社の負担する予算はいくらですか？",options:["$10,000","$15,000","$20,000","$30,000"],answer:1,explanation:"「$15,000 per company」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Bilingual Administrative Assistant",
  meta:"Corporate — Pacific Rim Trading Co.",
  body:`<p><b>Pacific Rim Trading Co.</b> is hiring a <b>Bilingual Administrative Assistant</b> (English/Japanese).</p>
<table class="job-table"><tr><td>Type</td><td>Full-time</td></tr><tr><td>Salary</td><td>$48,000–$55,000/year</td></tr><tr><td>Location</td><td>Downtown, Hybrid option after 3 months</td></tr><tr><td>Deadline</td><td>July 10, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Key duties:</b> scheduling meetings, handling Japanese/English correspondence, preparing reports, coordinating with overseas offices.</p>
<p><b>Requirements:</b> Business-level Japanese and English; proficiency in Microsoft Office; 2+ years administrative experience.</p>
<p>Apply with CV and a cover letter in both English and Japanese to <b>hr@pacificrimtrading.com</b>.</p>`,
  questions:[
    {q:"リモートワークのオプションはいつから利用できますか？",options:["入社初日から","3ヶ月後から","6ヶ月後から","1年後から"],answer:1,explanation:"「Hybrid option after 3 months」とあります。"},
    {q:"カバーレターはどのように提出する必要がありますか？",options:["英語のみ","日本語のみ","英語と日本語の両方","どちらかの言語で"],answer:2,explanation:"「cover letter in both English and Japanese」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Business Travel Insurance",
  meta:"Insurance — SafeJourney International",
  body:`<div class="flyer-center"><div class="flyer-big">✈ TRAVEL WITH CONFIDENCE</div><div style="color:#1a5c8a;font-size:1rem;font-weight:700;margin-bottom:8px;">SafeJourney Business Travel Insurance</div></div>
<p>Comprehensive coverage designed for frequent business travelers.</p>
<p class="bullet">Medical coverage up to <b>$2 million</b></p>
<p class="bullet">Trip cancellation and interruption coverage</p>
<p class="bullet">Lost luggage: up to <b>$3,000</b></p>
<p class="bullet">24/7 emergency assistance hotline</p>
<p><b>Annual Multi-Trip Plan:</b> from <b>$299/year</b> — covers unlimited trips up to 30 days each. Corporate group rates available for 5+ employees. Request a quote at safejourney.com.</p>`,
  questions:[
    {q:"年間マルチトリッププランの最低価格はいくらですか？",options:["$199/年","$249/年","$299/年","$349/年"],answer:2,explanation:"「from $299/year」とあります。"},
    {q:"手荷物紛失の補償上限はいくらですか？",options:["$1,000","$2,000","$3,000","$5,000"],answer:2,explanation:"「Lost luggage: up to $3,000」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Quarterly All-Hands Meeting",
  meta:"Leadership — Beacon Financial Group",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Q2 All-Hands Meeting</div></div>
<p>Please join us for the <b>Q2 All-Hands Meeting</b> on <b>Friday, June 27, from 3:00 PM to 4:30 PM</b>.</p>
<p><b>Format:</b> In-person at Head Office Auditorium + live stream for remote employees</p>
<p><b>Agenda:</b></p>
<p class="bullet">Q2 financial performance review</p>
<p class="bullet">Strategic initiatives for H2 2026</p>
<p class="bullet">Q&A session with leadership</p>
<p>Submit questions in advance at: allhands.beacon.internal (deadline: June 25). All sessions will be recorded and posted on the intranet within 48 hours.</p>`,
  questions:[
    {q:"全社ミーティングはいつ開催されますか？",options:["6月20日","6月25日","6月27日","7月1日"],answer:2,explanation:"「Friday, June 27, from 3:00 PM to 4:30 PM」とあります。"},
    {q:"事前に質問を送る期限はいつですか？",options:["6月20日","6月23日","6月25日","6月27日"],answer:2,explanation:"「deadline: June 25」とあります。"}
  ]
},
// ==================== 71-75 ====================
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Dry Cleaning & Alterations",
  meta:"Services — Premier Care Cleaners",
  body:`<div class="flyer-center"><div class="flyer-big">👔 LOOK YOUR BEST</div><div style="color:#1a3a5c;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Premier Care Cleaners</div></div>
<p><b>New Customer Special:</b> Bring this flyer and receive <b>50% off your first order</b> (up to $30 value).</p>
<p class="bullet">Same-day service available for drop-off before <b>9:00 AM</b></p>
<p class="bullet">Expert alterations and repairs</p>
<p class="bullet">Free pickup & delivery for orders over <b>$50</b></p>
<p class="bullet">Open 7 days: Mon–Fri 7:30 AM–7:00 PM | Sat–Sun 9:00 AM–5:00 PM</p>
<p>Location: 33 Commerce Street | Tel: 555-0312 | Free parking available.</p>`,
  questions:[
    {q:"初回注文の新規顧客割引は何%ですか？",options:["20%","30%","40%","50%"],answer:3,explanation:"「50% off your first order」とあります。"},
    {q:"当日仕上げサービスを利用するには、何時までに持ち込む必要がありますか？",options:["8:00 AM","9:00 AM","10:00 AM","11:00 AM"],answer:1,explanation:"「Same-day service available for drop-off before 9:00 AM」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Catering Order Confirmation",
  meta:"Food Services — Harvest Catering Co.",
  body:`<div class="email-header"><div><b>From:</b> orders@harvestcatering.com</div><div><b>To:</b> Sandra Kim</div><div><b>Subject:</b> Catering Order Confirmed — Ref #HC-5541</div></div>
<p>Dear Ms. Kim,</p>
<p>Your catering order for <b>June 20, 2026</b> has been confirmed.</p>
<p><b>Order details:</b><br>• Continental breakfast for 30 — $270<br>• Sandwich lunch buffet for 30 — $480<br>• Non-alcoholic beverages package — $90<br><b>Total: $840</b></p>
<p>Delivery and setup: <b>7:30 AM</b> at your venue. Please ensure access to the kitchen area. Our team will return to clear up by <b>3:00 PM</b>.</p>
<p>Final headcount changes must be made by <b>June 17</b> (3 business days before the event).</p>`,
  questions:[
    {q:"ケータリングの合計金額はいくらですか？",options:["$750","$800","$840","$900"],answer:2,explanation:"「Total: $840」とあります。"},
    {q:"最終的な参加人数の変更はいつまでに連絡すべきですか？",options:["6月15日","6月17日","6月19日","6月20日"],answer:1,explanation:"「Final headcount changes must be made by June 17」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"New Visitor Sign-In Policy",
  meta:"Security — Centurion Tower",
  body:`<div class="notice-box"><div class="notice-title">SECURITY NOTICE — Updated Visitor Policy</div></div>
<p>Effective <b>June 16</b>, all visitors to Centurion Tower must follow the updated sign-in procedure:</p>
<p class="bullet">All visitors must <b>pre-register online</b> at centurion-security.com at least <b>2 hours before arrival</b></p>
<p class="bullet">A <b>government-issued photo ID</b> must be presented at the security desk</p>
<p class="bullet">Visitor badges must be worn <b>visibly</b> at all times and returned upon departure</p>
<p class="bullet">Unregistered visitors will not be granted access under any circumstances</p>
<p>Tenants are responsible for registering their expected visitors.</p>`,
  questions:[
    {q:"訪問者は来館の何時間前までに事前登録する必要がありますか？",options:["1時間前","2時間前","3時間前","24時間前"],answer:1,explanation:"「at least 2 hours before arrival」とあります。"},
    {q:"訪問者バッジについて正しいのはどれですか？",options:["カバンの中に入れて携帯する","退館時に返却不要","常に見える場所に着用し退館時に返却する","フロアごとに異なるバッジを使用"],answer:2,explanation:"「worn visibly at all times and returned upon departure」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Online MBA Program",
  meta:"Education — Northridge Business School",
  body:`<div class="flyer-center"><div class="flyer-big">🎓 ADVANCE YOUR CAREER</div><div style="color:#1a5c8a;font-size:1rem;font-weight:700;margin-bottom:8px;">Northridge Online MBA</div></div>
<p>Earn your <b>MBA in 18 months</b> while working full-time. Fully accredited, 100% online.</p>
<p class="bullet">Specializations: Finance, Marketing, Operations, Entrepreneurship</p>
<p class="bullet">Classes run asynchronously — study on your schedule</p>
<p class="bullet">Tuition: <b>$24,500 total</b> (payment plans available)</p>
<p class="bullet">Cohort starts: September 2026 — applications due <b>July 31</b></p>
<p>Information sessions every Tuesday at 7:00 PM (online). Register at northridge-mba.com.</p>`,
  questions:[
    {q:"このMBAプログラムの総費用はいくらですか？",options:["$18,000","$21,500","$24,500","$28,000"],answer:2,explanation:"「Tuition: $24,500 total」とあります。"},
    {q:"出願の締め切りはいつですか？",options:["6月30日","7月15日","7月31日","8月15日"],answer:2,explanation:"「applications due July 31」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Customer Complaint Response",
  meta:"Customer Relations — Brightwave Electronics",
  body:`<div class="email-header"><div><b>From:</b> support@brightwave.com</div><div><b>To:</b> Mr. Thomas Geller</div><div><b>Subject:</b> Re: Your Recent Service Experience — Case #BW-10482</div></div>
<p>Dear Mr. Geller,</p>
<p>Thank you for bringing your recent experience to our attention. We sincerely apologize for the delay in your repair service.</p>
<p>Upon reviewing your case, we have identified a processing error on our end that caused the <b>2-week delay</b>. As compensation, we are pleased to offer:</p>
<p class="bullet">A full <b>refund of the repair fee</b> ($185)</p>
<p class="bullet">A <b>$50 store credit</b> valid for 12 months</p>
<p>Your repaired device will be shipped by <b>June 11</b>. We value your business and hope to restore your confidence in Brightwave.</p>`,
  questions:[
    {q:"修理の遅延の原因は何でしたか？",options:["部品の不足","担当者の病欠","社内の処理エラー","配送業者の問題"],answer:2,explanation:"「a processing error on our end」とあります。"},
    {q:"補償として提供されているものはどれですか？",options:["新品との交換","修理費の返金と$50ストアクレジット","1年間の延長保証","無料のアップグレード"],answer:1,explanation:"「refund of the repair fee ($185)」と「$50 store credit」が提供されています。"}
  ]
},
// ==================== 76-80 ====================
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Bookstore Author Reading Event",
  meta:"Events — Inkwell Books & Stationery",
  body:`<div class="flyer-center"><div class="flyer-big">📖 AUTHOR READING & SIGNING</div><div style="color:#5c1a8a;font-size:1rem;font-weight:700;margin-bottom:8px;">Inkwell Books & Stationery</div></div>
<p>Join us for an exclusive evening with bestselling author <b>Caroline Merritt</b>, presenting her new novel <i>The Glass Horizon</i>.</p>
<p><b>Date:</b> Thursday, June 26 | <b>Time:</b> 6:30 PM (doors open 6:00 PM)<br><b>Venue:</b> Inkwell Books, 55 Garden Street</p>
<p>Tickets: <b>$15</b> (includes a signed copy of the book — regular price $28). Limited to <b>60 seats</b>.</p>
<p>Book tickets online at inkwellbooks.com or in-store. Cash, card, and gift cards accepted.</p>`,
  questions:[
    {q:"チケット価格に含まれているものは何ですか？",options:["軽食と飲み物","サイン入り書籍","著者との写真撮影","次回イベントの無料招待"],answer:1,explanation:"「includes a signed copy of the book」とあります。"},
    {q:"このイベントの座席数は最大何席ですか？",options:["40席","50席","60席","80席"],answer:2,explanation:"「Limited to 60 seats」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Email Archiving Policy",
  meta:"IT Compliance — Granite Consulting",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Email Retention and Archiving Policy</div></div>
<p>Effective July 1, Granite Consulting's email retention policy will be as follows:</p>
<p class="bullet">Emails in your inbox will be <b>automatically archived after 90 days</b></p>
<p class="bullet">Archived emails are stored securely and remain searchable</p>
<p class="bullet">Emails in the <b>Deleted Items</b> folder will be permanently deleted after <b>30 days</b></p>
<p class="bullet">Client-related emails must be saved to the relevant <b>client folder</b> in SharePoint before archiving</p>
<p>Questions: it-compliance@granite.com. Training sessions on June 18 and 20 (sign up on the portal).</p>`,
  questions:[
    {q:"受信トレイのメールは何日後に自動アーカイブされますか？",options:["30日","60日","90日","120日"],answer:2,explanation:"「automatically archived after 90 days」とあります。"},
    {q:"削除済みアイテムは何日後に完全削除されますか？",options:["7日","14日","30日","60日"],answer:2,explanation:"「permanently deleted after 30 days」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Street Festival Road Closure",
  meta:"City Services — Maplewood City Council",
  body:`<div class="notice-box"><div class="notice-title">ROAD CLOSURE NOTICE — Maplewood Street Festival</div></div>
<p>Please be advised that the following streets will be <b>closed to vehicle traffic</b> during the Maplewood Street Festival:</p>
<p><b>Date:</b> Saturday, July 5 | <b>Time:</b> 9:00 AM – 10:00 PM<br><b>Closed streets:</b> Main Street (Oak Ave to Elm Ave), Harbor Boulevard (1st–3rd St)</p>
<p>Public transit route 14 will be <b>detoured</b> via Commerce Street. Alternative parking available at the Civic Center lot (free on event day).</p>
<p>For more information: maplewood.gov/events or call 555-0100.</p>`,
  questions:[
    {q:"道路閉鎖はいつ終了しますか？",options:["午後6時","午後8時","午後10時","翌朝6時"],answer:2,explanation:"「9:00 AM – 10:00 PM」とあります。"},
    {q:"イベント当日の代替駐車場はどこですか？",options:["Main Street駐車場","Harbor駐車場","Civic Center駐車場","Oak Ave駐車場"],answer:2,explanation:"「Alternative parking available at the Civic Center lot」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"New Employee Onboarding Schedule",
  meta:"HR — Cascade Innovations",
  body:`<div class="email-header"><div><b>From:</b> hr@cascade-innovations.com</div><div><b>To:</b> New Hire Group (June 2026)</div><div><b>Subject:</b> Your Onboarding Schedule — Week 1</div></div>
<p>Dear New Team Members,</p>
<p>Welcome to Cascade Innovations! Below is your <b>first-week schedule</b>:</p>
<p class="bullet"><b>Monday:</b> 9:00 AM — HR orientation, Boardroom A</p>
<p class="bullet"><b>Tuesday:</b> IT setup and systems training (full day)</p>
<p class="bullet"><b>Wednesday–Thursday:</b> Department-specific training with your manager</p>
<p class="bullet"><b>Friday:</b> 2:00 PM — Welcome lunch with leadership team</p>
<p>Please bring your ID documents on Monday for payroll processing. Your building access card will be issued after the Monday orientation.</p>`,
  questions:[
    {q:"建物のアクセスカードはいつ発行されますか？",options:["事前に郵送される","月曜のオリエンテーション後","火曜のIT研修後","初週の最終日"],answer:1,explanation:"「Your building access card will be issued after the Monday orientation」とあります。"},
    {q:"金曜日の午後2時に予定されているイベントは何ですか？",options:["部門研修","IT設定","リーダーシップチームとのランチ","HR面談"],answer:2,explanation:"「Friday: 2:00 PM — Welcome lunch with leadership team」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Shipping Delay Notification",
  meta:"Logistics — ProShip Delivery Services",
  body:`<div class="email-header"><div><b>From:</b> notifications@proship.com</div><div><b>To:</b> Customer</div><div><b>Subject:</b> Update on Your Delivery — Shipment #PS-77420</div></div>
<p>Dear Customer,</p>
<p>We regret to inform you that your shipment <b>#PS-77420</b> has been delayed due to <b>severe weather conditions</b> affecting our regional hub.</p>
<p><b>Original estimated delivery:</b> June 12<br><b>Revised estimated delivery:</b> June 15–16</p>
<p>Your package is currently at our <b>sorting facility in Portland</b> and will resume transit as soon as conditions permit. No action is required on your part.</p>
<p>For updates, track your shipment at proship.com using your tracking number. We apologize for the inconvenience.</p>`,
  questions:[
    {q:"配送が遅延した原因は何ですか？",options:["倉庫の火災","システム障害","悪天候","ストライキ"],answer:2,explanation:"「due to severe weather conditions」とあります。"},
    {q:"荷物は現在どこにありますか？",options:["目的地の近く","PortlandのソーティングFacility","トラックの中","顧客の近所の配送センター"],answer:1,explanation:"「currently at our sorting facility in Portland」とあります。"}
  ]
},
// ==================== 81-85 ====================
{
  genre:"job", genreLabel:"求人広告",
  title:"Head Chef — New Restaurant",
  meta:"Hospitality — The Copper Spoon Restaurant",
  body:`<p><b>The Copper Spoon</b>, a new upscale dining concept opening Fall 2026, seeks a creative and experienced <b>Head Chef</b>.</p>
<table class="job-table"><tr><td>Salary</td><td>$75,000–$90,000 + performance bonus</td></tr><tr><td>Type</td><td>Full-time (evenings & weekends required)</td></tr><tr><td>Location</td><td>Portland, OR</td></tr><tr><td>Deadline</td><td>July 20, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Requirements:</b></p>
<p class="bullet">Minimum 5 years as a head or sous chef in a fine dining environment</p>
<p class="bullet">Ability to create seasonal menus and manage food costs</p>
<p class="bullet">Strong team leadership skills</p>
<p>Send portfolio (including sample menus) and CV to <b>hiring@copperspoon.com</b>.</p>`,
  questions:[
    {q:"このポジションの最低経験年数は？",options:["3年","5年","7年","10年"],answer:1,explanation:"「Minimum 5 years as a head or sous chef」とあります。"},
    {q:"応募時に提出が必要なものはどれですか？",options:["推薦状のみ","CVのみ","サンプルメニューを含むポートフォリオとCV","資格証明書"],answer:2,explanation:"「Send portfolio (including sample menus) and CV」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Holiday Schedule Announcement",
  meta:"HR — Sterling Logistics",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Company Holiday Schedule: July 2026</div></div>
<p>Please note the following office closures for July 2026:</p>
<p class="bullet"><b>July 4 (Friday):</b> Independence Day — office closed</p>
<p class="bullet"><b>July 7 (Monday):</b> Company Wellness Day — office closed (new benefit)</p>
<p>All employees will receive <b>two additional paid days</b>. Employees who must work on these days should arrange this with their manager and will receive <b>compensatory time off</b> to be used within 60 days.</p>
<p>The on-call support team will remain available for urgent client needs. Contact information will be circulated by June 27.</p>`,
  questions:[
    {q:"7月の休業日は合計何日ですか？",options:["1日","2日","3日","4日"],answer:1,explanation:"「July 4」と「July 7」の2日間です。"},
    {q:"休業日に勤務した場合、代替措置はどれですか？",options:["時間外手当の支給","60日以内に使用可能な代替休暇","翌月の給与に上乗せ","翌年の有給に繰越"],answer:1,explanation:"「compensatory time off to be used within 60 days」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Networking Event for Entrepreneurs",
  meta:"Business Events — Innovate Hub",
  body:`<div class="flyer-center"><div class="flyer-big">💡 INNOVATE HUB NETWORKING NIGHT</div><div style="color:#1a5c8a;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Connect. Collaborate. Create.</div></div>
<p><b>Date:</b> Wednesday, July 9 | <b>Time:</b> 6:00 PM – 9:00 PM<br><b>Venue:</b> Innovate Hub, 120 Tech Boulevard, 3rd Floor</p>
<p>Join <b>100+ entrepreneurs, investors, and innovators</b> for an evening of structured networking, lightning pitch presentations, and panel Q&A.</p>
<p><b>Early Bird Tickets:</b> $25 (until June 25) | Regular: $40 | Includes refreshments</p>
<p>Register at innovatehub.com/networknight. Table sponsorship available — email <b>sponsor@innovatehub.com</b>.</p>`,
  questions:[
    {q:"早期割引チケットの期限はいつですか？",options:["6月20日","6月25日","7月1日","7月9日"],answer:1,explanation:"「Early Bird Tickets... until June 25」とあります。"},
    {q:"通常チケットの価格はいくらですか？",options:["$25","$30","$35","$40"],answer:3,explanation:"「Regular: $40」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Lease Renewal Offer",
  meta:"Property Management — Cornerstone Properties",
  body:`<div class="email-header"><div><b>From:</b> leasing@cornerstone-prop.com</div><div><b>To:</b> Tenant — Suite 402</div><div><b>Subject:</b> Lease Renewal Offer — Suite 402, Cornerstone Tower</div></div>
<p>Dear Tenant,</p>
<p>Your current lease for <b>Suite 402</b> expires on <b>August 31, 2026</b>. We would like to offer you a renewal.</p>
<p><b>Renewal options:</b><br>• 1-year term: <b>$3,800/month</b> (current rate: $3,600)<br>• 2-year term: <b>$3,700/month</b> (locked-in rate)</p>
<p>Please let us know your decision by <b>July 15</b>. If we do not receive a response by this date, we will begin marketing the suite to new tenants.</p>
<p>Contact our leasing office at 555-0180 or leasing@cornerstone-prop.com.</p>`,
  questions:[
    {q:"2年間の契約を選んだ場合の月額賃料はいくらですか？",options:["$3,600","$3,700","$3,800","$4,000"],answer:1,explanation:"「2-year term: $3,700/month」とあります。"},
    {q:"返事をしない場合、何が起こりますか？",options:["現在の賃貸条件で自動更新される","1ヶ月の猶予期間が与えられる","他のテナントへの募集が開始される","立退き費用が請求される"],answer:2,explanation:"「we will begin marketing the suite to new tenants」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Executive Coaching Services",
  meta:"Professional Development — Summit Leadership Group",
  body:`<div class="flyer-center"><div class="flyer-big">🏆 UNLOCK YOUR LEADERSHIP POTENTIAL</div><div style="color:#1a3a5c;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Summit Leadership Group</div></div>
<p>Our certified executive coaches work with <b>managers and senior leaders</b> to enhance performance, communication, and strategic thinking.</p>
<p class="bullet">1-on-1 coaching: <b>6-session package from $1,200</b></p>
<p class="bullet">Group leadership workshops: from <b>$3,500</b> for teams of up to 10</p>
<p class="bullet">360-degree feedback assessments available</p>
<p>Schedule a <b>free 30-minute discovery call</b> at summitleadership.com. New client discount: <b>10% off</b> first package when booked before July 31.</p>`,
  questions:[
    {q:"1対1コーチングの6セッションパッケージの最低価格はいくらですか？",options:["$800","$1,000","$1,200","$1,500"],answer:2,explanation:"「6-session package from $1,200」とあります。"},
    {q:"新規クライアント向けの割引を受けるための期限はいつですか？",options:["6月30日","7月15日","7月31日","8月31日"],answer:2,explanation:"「booked before July 31」とあります。"}
  ]
},
// ==================== 86-90 ====================
{
  genre:"notice", genreLabel:"お知らせ",
  title:"New Recycling Guidelines",
  meta:"Sustainability — Greenfield Office Campus",
  body:`<div class="notice-box"><div class="notice-title">♻ UPDATED RECYCLING GUIDELINES</div></div>
<p>Effective July 1, please follow the updated recycling guidelines in all common areas:</p>
<p class="bullet"><b>Blue bins:</b> paper, cardboard, newspapers (clean and dry only)</p>
<p class="bullet"><b>Green bins:</b> glass bottles and jars, metal cans</p>
<p class="bullet"><b>Yellow bins:</b> plastic bottles (caps removed)</p>
<p class="bullet"><b>Grey bins:</b> general waste (no food waste)</p>
<p class="bullet"><b>Compost bins (kitchen only):</b> food scraps and compostable packaging</p>
<p>Incorrectly sorted waste will result in the entire bin being sent to landfill. Training posters are posted in all kitchens.</p>`,
  questions:[
    {q:"金属缶はどのビンに入れるべきですか？",options:["青いビン","緑のビン","黄色いビン","灰色のビン"],answer:1,explanation:"「Green bins: glass bottles and jars, metal cans」とあります。"},
    {q:"間違ったビンに捨てた場合、何が起こりますか？",options:["後で仕分けされる","ビン全体が埋め立て処理される","警告書が発行される","清掃スタッフが対応する"],answer:1,explanation:"「the entire bin being sent to landfill」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Return Policy Clarification",
  meta:"E-commerce — ShopDirect Online",
  body:`<div class="email-header"><div><b>From:</b> support@shopdirect.com</div><div><b>To:</b> Ms. Yuki Tanaka</div><div><b>Subject:</b> Re: Your Return Request — Order #SD-88291</div></div>
<p>Dear Ms. Tanaka,</p>
<p>Thank you for contacting us regarding your return request for Order #SD-88291.</p>
<p>Our return policy allows returns within <b>30 days of delivery</b> for unused, unopened items. Based on our records, your order was delivered on <b>May 8</b>, which means the return window expires on <b>June 7</b>.</p>
<p>Since today is within the return period, we are happy to process your return. Please use the prepaid return label attached to this email. Once we receive the item, a <b>full refund</b> will be issued to your original payment method within <b>5–7 business days</b>.</p>`,
  questions:[
    {q:"返品可能な期間は配達日から何日以内ですか？",options:["14日","21日","30日","60日"],answer:2,explanation:"「returns within 30 days of delivery」とあります。"},
    {q:"返金が処理されるまでどのくらいかかりますか？",options:["1〜2営業日","3〜4営業日","5〜7営業日","10〜14営業日"],answer:2,explanation:"「within 5–7 business days」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Corporate Training — Public Workshop",
  meta:"Professional Development — Excel Training Institute",
  body:`<div class="flyer-center"><div class="flyer-big">📊 EXCEL MASTERY WORKSHOP</div><div style="color:#1a5c8a;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Excel Training Institute</div></div>
<p>Take your spreadsheet skills to the next level with our intensive <b>2-day Excel workshop</b>.</p>
<p><b>Dates:</b> July 17–18 | <b>Time:</b> 9:00 AM – 5:00 PM | <b>Venue:</b> ETI Training Center, Room 6</p>
<p><b>Fee:</b> $350/person (group rate: $300/person for 3 or more from the same company)</p>
<p class="bullet">Day 1: Advanced formulas, pivot tables, data validation</p>
<p class="bullet">Day 2: Macros, dashboards, and data visualization</p>
<p>Lunch and materials included. Certificate of completion provided. Register at eti-training.com by <b>July 10</b>.</p>`,
  questions:[
    {q:"同じ会社から3名以上参加する場合の1人当たりの料金はいくらですか？",options:["$250","$300","$350","$400"],answer:1,explanation:"「group rate: $300/person for 3 or more from the same company」とあります。"},
    {q:"受講料に含まれていないものはどれですか？",options:["昼食","教材","修了証","宿泊費"],answer:3,explanation:"「Lunch and materials included. Certificate of completion provided」とありますが、宿泊費の記載はありません。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Updated Travel Booking Policy",
  meta:"Finance & Operations — Westgate Industries",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Business Travel Booking Policy Update</div></div>
<p>Effective June 23, all business travel must be booked through our <b>approved corporate travel portal</b> at travel.westgate.internal.</p>
<p class="bullet">Flights must be booked at least <b>7 days in advance</b> (exceptions require VP approval)</p>
<p class="bullet">Economy class only for flights under <b>6 hours</b></p>
<p class="bullet">Business class permitted for flights <b>6 hours or longer</b></p>
<p class="bullet">Hotel budget: maximum <b>$200/night</b> (major cities: $250/night)</p>
<p>Personal bookings reimbursed only if travel portal was unavailable. Retain all receipts.</p>`,
  questions:[
    {q:"フライトを何日前までに予約する必要がありますか？",options:["3日前","5日前","7日前","14日前"],answer:2,explanation:"「at least 7 days in advance」とあります。"},
    {q:"ビジネスクラスが利用可能な条件はどれですか？",options:["4時間以上のフライト","6時間以上のフライト","国際線全て","役員のみ"],answer:1,explanation:"「Business class permitted for flights 6 hours or longer」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Survey — Workplace Wellness Initiatives",
  meta:"HR — Pinnacle Group",
  body:`<div class="notice-box"><div class="notice-title">YOUR OPINION MATTERS — Wellness Survey</div></div>
<p>Pinnacle Group is planning new <b>workplace wellness initiatives</b> for Q3 2026 and wants your input.</p>
<p>Please complete the <b>5-minute anonymous survey</b> at wellness.pinnacle.internal by <b>June 19</b>.</p>
<p>Proposed initiatives (rate each 1–5):</p>
<p class="bullet">On-site yoga and meditation sessions</p>
<p class="bullet">Subsidized gym memberships</p>
<p class="bullet">Mental health days (additional paid leave)</p>
<p class="bullet">Healthy snack station in common areas</p>
<p>Results will be shared at the July all-hands meeting. The top 2 voted initiatives will be implemented starting August.</p>`,
  questions:[
    {q:"このアンケートの所要時間はどのくらいですか？",options:["2分","5分","10分","15分"],answer:1,explanation:"「5-minute anonymous survey」とあります。"},
    {q:"投票数上位何位の施策が実施されますか？",options:["1つ","2つ","3つ","全て"],answer:1,explanation:"「The top 2 voted initiatives will be implemented」とあります。"}
  ]
},
// ==================== 91-95 ====================
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Internship Offer Letter",
  meta:"HR — Meridian Consulting Partners",
  body:`<div class="email-header"><div><b>From:</b> hr@meridian-cp.com</div><div><b>To:</b> Sophie Laurent</div><div><b>Subject:</b> Summer Internship Offer — Business Analysis</div></div>
<p>Dear Ms. Laurent,</p>
<p>We are pleased to offer you a <b>Summer Internship</b> in our Business Analysis team.</p>
<p><b>Start date:</b> July 7, 2026 | <b>Duration:</b> 10 weeks | <b>Stipend:</b> $800/week</p>
<p>You will work 40 hours per week, Monday through Friday. A laptop and all necessary tools will be provided. Housing assistance is not included.</p>
<p>Please confirm your acceptance by replying to this email by <b>June 13</b>. Failure to respond by this date may result in the offer being withdrawn.</p>`,
  questions:[
    {q:"インターンシップの週当たりの給与はいくらですか？",options:["$600","$700","$800","$900"],answer:2,explanation:"「Stipend: $800/week」とあります。"},
    {q:"承諾の期限はいつですか？",options:["6月10日","6月13日","6月15日","7月7日"],answer:1,explanation:"「confirm your acceptance... by June 13」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Electronics Recycling Drive",
  meta:"Community Initiative — EcoRecycle Program",
  body:`<div class="flyer-center"><div class="flyer-big">♻ FREE E-WASTE RECYCLING EVENT</div><div style="color:#1a6b3a;font-size:0.95rem;font-weight:700;margin-bottom:8px;">EcoRecycle Community Drive</div></div>
<p>Safely dispose of your old electronics at our free recycling event!</p>
<p><b>Date:</b> Saturday, June 28 | <b>Time:</b> 9:00 AM – 3:00 PM<br><b>Location:</b> Riverside Community Center parking lot</p>
<p><b>Accepted items:</b> computers, laptops, phones, tablets, TVs, printers, cables</p>
<p><b>Not accepted:</b> batteries, light bulbs, appliances (fridges, microwaves)</p>
<p>Bring a valid ID. Data destruction certificates available for business accounts ($10 fee). All data will be wiped per industry standards.</p>`,
  questions:[
    {q:"回収されないアイテムはどれですか？",options:["ラップトップ","プリンター","電池","タブレット"],answer:2,explanation:"「Not accepted: batteries, light bulbs, appliances」とあります。"},
    {q:"ビジネスアカウントのデータ消去証明書の費用はいくらですか？",options:["無料","$5","$10","$20"],answer:2,explanation:"「Data destruction certificates available for business accounts ($10 fee)」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Virtual Assistant Service",
  meta:"Business Services — TaskBridge",
  body:`<div class="flyer-center"><div class="flyer-big">⚡ GET MORE DONE WITH TASKBRIDGE</div><div style="color:#1a3a5c;font-size:0.95rem;font-weight:700;margin-bottom:8px;">Professional Virtual Assistant Services</div></div>
<p>Delegate your admin tasks to a skilled virtual assistant and focus on what matters.</p>
<p class="bullet">Email management and scheduling</p>
<p class="bullet">Data entry and research</p>
<p class="bullet">Travel booking and expense tracking</p>
<p><b>Plans:</b><br>• Starter: 10 hrs/month — <b>$199</b><br>• Professional: 25 hrs/month — <b>$449</b><br>• Executive: 50 hrs/month — <b>$799</b></p>
<p>First month <b>50% off</b> with code <b>LAUNCH50</b>. No contracts. Cancel anytime. Visit taskbridge.io.</p>`,
  questions:[
    {q:"プロフェッショナルプランの月額料金はいくらですか？",options:["$199","$299","$449","$799"],answer:2,explanation:"「Professional: 25 hrs/month — $449」とあります。"},
    {q:"初月割引コードを使うと何%オフになりますか？",options:["20%","30%","40%","50%"],answer:3,explanation:"「First month 50% off with code LAUNCH50」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Annual Report Now Available",
  meta:"Corporate Communications — Atlas Corporation",
  body:`<div class="notice-box"><div class="notice-title">NOTICE: 2025 ANNUAL REPORT PUBLISHED</div></div>
<p>Atlas Corporation is pleased to announce that the <b>2025 Annual Report</b> is now available to all stakeholders.</p>
<p>The report covers:</p>
<p class="bullet">Full-year financial results (revenue up <b>12%</b> year-over-year)</p>
<p class="bullet">Key operational achievements and strategic milestones</p>
<p class="bullet">ESG (Environmental, Social, Governance) performance</p>
<p class="bullet">Outlook and strategy for 2026</p>
<p>Download the full report at atlas-corp.com/investors. Printed copies available upon request from the Investor Relations office. The <b>AGM</b> to review results will be held on <b>July 18</b>.</p>`,
  questions:[
    {q:"前年比の売上増加率はどのくらいですか？",options:["8%","10%","12%","15%"],answer:2,explanation:"「revenue up 12% year-over-year」とあります。"},
    {q:"AGMはいつ開催されますか？",options:["6月30日","7月5日","7月18日","8月1日"],answer:2,explanation:"「AGM... will be held on July 18」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Request for Proposal (RFP)",
  meta:"Procurement — Harrington City Council",
  body:`<div class="email-header"><div><b>From:</b> procurement@harrington-city.gov</div><div><b>To:</b> Registered Vendors</div><div><b>Subject:</b> RFP — City Hall Renovation Project</div></div>
<p>Dear Vendor,</p>
<p>Harrington City Council invites qualified contractors to submit proposals for the <b>City Hall Renovation Project</b> (Ref: HCC-2026-09).</p>
<p><b>Project scope:</b> Interior renovation of Floors 2–5, including electrical upgrades, HVAC installation, and accessibility improvements. Estimated value: <b>$2.4 million</b>.</p>
<p>RFP documents: harrington-city.gov/rfp. Proposals must be submitted by <b>July 14, 5:00 PM</b>. A pre-bid site visit is scheduled for <b>June 24 at 10:00 AM</b>.</p>`,
  questions:[
    {q:"このプロジェクトの推定価値はいくらですか？",options:["$1.8百万","$2.0百万","$2.4百万","$3.0百万"],answer:2,explanation:"「Estimated value: $2.4 million」とあります。"},
    {q:"提案書の提出期限はいつですか？",options:["7月7日","7月10日","7月14日","7月21日"],answer:2,explanation:"「submitted by July 14, 5:00 PM」とあります。"}
  ]
},
// ==================== 96-100 ====================
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Safety Training Completion Reminder",
  meta:"Compliance — Ridgeline Energy",
  body:`<div class="notice-box"><div class="notice-title">URGENT MEMO — Safety Training Deadline</div></div>
<p>All employees are reminded that <b>annual safety training modules</b> must be completed by <b>June 30</b>. Completion is a <b>regulatory requirement</b>.</p>
<p class="bullet">Module 1: Workplace Hazard Awareness (45 min)</p>
<p class="bullet">Module 2: Emergency Response Procedures (30 min)</p>
<p class="bullet">Module 3: Chemical Handling Safety (applicable departments only)</p>
<p>Access via: training.ridgeline.internal. Employees who have not completed all required modules by June 30 will be <b>suspended from site access</b> until completion.</p>
<p>HR will send individual reminders to those with outstanding modules by June 20.</p>`,
  questions:[
    {q:"安全訓練の完了期限はいつですか？",options:["6月15日","6月20日","6月30日","7月1日"],answer:2,explanation:"「must be completed by June 30」とあります。"},
    {q:"期限までに完了しなかった場合の結果は何ですか？",options:["罰金が科される","翌月の給与から天引き","サイトへのアクセスが停止される","上司に報告される"],answer:2,explanation:"「suspended from site access until completion」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Pet-Friendly Hotel — Special Offer",
  meta:"Travel — Paw & Rest Inn",
  body:`<div class="flyer-center"><div class="flyer-big">🐾 YOUR PET IS WELCOME HERE</div><div style="color:#8a4a1a;font-size:1rem;font-weight:700;margin-bottom:8px;">Paw & Rest Inn — Pet-Friendly Boutique Hotel</div></div>
<p>Bring your furry friends! <b>Paw & Rest Inn</b> welcomes pets of all sizes at no extra charge.</p>
<p><b>Summer Special (July 1 – August 31):</b> Book 2 nights, get the <b>3rd night free</b>.</p>
<p class="bullet">Pet amenities: welcome treat bag, dedicated pet lounge, dog-walking service</p>
<p class="bullet">Rooms from <b>$135/night</b></p>
<p class="bullet">Maximum <b>2 pets per room</b></p>
<p>Book at pawandrest.com with code <b>SUMMER3</b>. Advance booking required. Free cancellation up to <b>48 hours</b> before check-in.</p>`,
  questions:[
    {q:"サマースペシャルの内容は何ですか？",options:["2泊で1泊分の料金","2泊予約で3泊目無料","3泊以上で20%割引","連泊割引10%"],answer:1,explanation:"「Book 2 nights, get the 3rd night free」とあります。"},
    {q:"1部屋に宿泊できるペットの最大数は何匹ですか？",options:["1匹","2匹","3匹","制限なし"],answer:1,explanation:"「Maximum 2 pets per room」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Vendor Exhibition Hall Changes",
  meta:"Trade Show — Pacific Tech Expo 2026",
  body:`<p>Dear Exhibitor,</p>
<p>Please review the following updates for <b>Pacific Tech Expo 2026</b> (July 22–24):</p>
<p class="bullet"><b>Hall B</b> has been reassigned — your booth has moved from <b>B-14 to A-22</b> due to a layout change</p>
<p class="bullet">Setup time extended: exhibitors may now set up from <b>6:00 AM</b> (previously 8:00 AM) on July 22</p>
<p class="bullet">Exhibitor badges: collect from the <b>West Entrance registration desk</b> (not the main entrance as previously stated)</p>
<p class="bullet">Wi-Fi code for exhibitors will be emailed on <b>July 20</b></p>
<p>Floor plan updated at pacifictechexpo.com/exhibitors.</p>`,
  questions:[
    {q:"ブースの新しい場所はどこですか？",options:["B-14","A-22","C-8","B-22"],answer:1,explanation:"「booth has moved from B-14 to A-22」とあります。"},
    {q:"出展者バッジはどこで受け取れますか？",options:["メインエントランス","イーストエントランス","ウェストエントランス受付","オンライン事前発行"],answer:2,explanation:"「collect from the West Entrance registration desk」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Company Milestone Celebration",
  meta:"Corporate — Clearwater Holdings",
  body:`<div class="notice-box"><div class="notice-title">🎉 CELEBRATING 25 YEARS OF CLEARWATER HOLDINGS</div></div>
<p>This year marks our <b>25th anniversary</b>! To celebrate, we are hosting a special company event:</p>
<p><b>Date:</b> Friday, July 25 | <b>Time:</b> 5:30 PM – 9:00 PM<br><b>Venue:</b> Clearwater Gardens, 10 Founders Lane</p>
<p>The evening will include a dinner, awards ceremony recognizing <b>long-service employees</b> (10+ years), live entertainment, and remarks from our founder.</p>
<p>All employees and their partners are invited. Please RSVP (including dietary requirements) to events@clearwater.com by <b>July 11</b>. Transportation will be arranged for head office staff.</p>`,
  questions:[
    {q:"このイベントで表彰される対象者はどれですか？",options:["今年入社した新入社員","10年以上勤務した従業員","マネージャー以上の役職者","売上トップの営業社員"],answer:1,explanation:"「awards ceremony recognizing long-service employees (10+ years)」とあります。"},
    {q:"RSVPの締め切りはいつですか？",options:["7月5日","7月11日","7月18日","7月25日"],answer:1,explanation:"「RSVP... by July 11」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Quarterly Newsletter — CEO Message",
  meta:"Corporate Communications — Solaris Group",
  body:`<div class="email-header"><div><b>From:</b> ceo@solaris-group.com</div><div><b>To:</b> All Employees</div><div><b>Subject:</b> Q2 Company Update — Message from the CEO</div></div>
<p>Dear Team,</p>
<p>I am pleased to share that <b>Q2 2026</b> has been our strongest quarter in three years. Revenue grew <b>18%</b> year-on-year, and we exceeded our client retention target with a <b>94% retention rate</b>.</p>
<p>Key highlights: the launch of our new SaaS platform (on time and under budget); expansion into the Australian market; and the successful acquisition of Prism Analytics.</p>
<p>Looking ahead, our Q3 focus will be on <b>talent development</b> and <b>operational efficiency</b>. Details on new training initiatives will be announced at the July all-hands meeting.</p>
<p>Thank you for your dedication.</p>`,
  questions:[
    {q:"Q2の売上成長率はどのくらいですか？",options:["12%","15%","18%","22%"],answer:2,explanation:"「Revenue grew 18% year-on-year」とあります。"},
    {q:"Q3の重点課題として挙げられているのはどれですか？",options:["新市場への参入と買収","製品の値下げと顧客獲得","人材育成と業務効率化","海外オフィスの拡大"],answer:2,explanation:"「Q3 focus will be on talent development and operational efficiency」とあります。"}
  ]
}
]; // END passages 51–100
