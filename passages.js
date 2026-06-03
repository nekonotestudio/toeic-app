// passages.js — TOEIC Speed Reader passage bank
// To add more: copy a passage object and append to the array.

const PASSAGES = [
// ==================== 1-5: EMAIL ====================
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Meeting Reschedule Notice",
  meta:"Internal — Thornfield & Associates",
  body:`<div class="email-header"><div><b>From:</b> Sarah Mitchells</div><div><b>To:</b> Project Team</div><div><b>Subject:</b> Rescheduling of Thursday's Strategy Meeting</div></div>
<p>Dear Team,</p>
<p>I am writing to inform you that the strategy meeting originally scheduled for <b>Thursday, June 5, at 2:00 PM</b> will need to be postponed. Due to an unexpected conflict with our overseas client visit, the conference room will not be available.</p>
<p>The meeting has been rescheduled to <b>Friday, June 6, at 10:00 AM</b> in Meeting Room B on the third floor. The agenda remains unchanged. Please bring your updated project reports.</p>
<p>If you cannot attend, please notify me by <b>Wednesday</b> so we can make alternative arrangements. A video conference option will be available for remote workers.</p>
<p>Best regards,<br>Sarah Mitchells, Project Manager</p>`,
  questions:[
    {q:"なぜ会議が変更されたのですか？",options:["会議室が工事中","海外クライアントの来訪と重なった","参加者が不在","システムトラブル"],answer:1,explanation:"「unexpected conflict with our overseas client visit」とあります。"},
    {q:"新しい会議はいつ・どこで開催されますか？",options:["木曜午後2時・会議室A","金曜午前10時・3階会議室B","金曜午後2時・会議室B","木曜午前10時・3階"],answer:1,explanation:"「Friday, June 6, at 10:00 AM in Meeting Room B on the third floor」とあります。"},
    {q:"出席できない場合、何をすべきですか？",options:["月曜までに代理人を立てる","水曜までにSarahに連絡する","アジェンダを提出する","木曜までにレポートを送る"],answer:1,explanation:"「please notify me by Wednesday」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Order Confirmation & Shipping Update",
  meta:"Customer Service — Brightfield Office Supplies",
  body:`<div class="email-header"><div><b>From:</b> orders@brightfield-supplies.com</div><div><b>To:</b> Daniel Okafor</div><div><b>Subject:</b> Your Order #BFS-20482 Has Shipped</div></div>
<p>Dear Mr. Okafor,</p>
<p>We are pleased to confirm that your order has been <b>dispatched</b>.</p>
<p><b>Order Summary:</b><br>• Premium Ergonomic Chair (x2) — $348.00<br>• Adjustable Standing Desk (x1) — $219.00<br>• Delivery Fee — $25.00<br><b>Total: $592.00</b></p>
<p>Shipped via <b>FastTrack Logistics</b>. Estimated delivery: <b>June 6–8</b>. Track with code <b>FTL-884921</b>.</p>
<p>Someone must be present to sign for the delivery. If unavailable, redelivery will be attempted the <b>following business day</b>.</p>`,
  questions:[
    {q:"注文の合計金額はいくらですか？",options:["$348.00","$567.00","$592.00","$219.00"],answer:2,explanation:"「Total: $592.00」とあります。"},
    {q:"配送時に不在の場合はどうなりますか？",options:["注文キャンセル","翌営業日に再配達","コンビニに届く","追加料金発生"],answer:1,explanation:"「redelivery will be attempted the following business day」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Invitation to Annual Client Dinner",
  meta:"Sales Department — Hartwell & Partners",
  body:`<div class="email-header"><div><b>From:</b> events@hartwell.com</div><div><b>To:</b> Valued Clients</div><div><b>Subject:</b> You're Invited — Annual Client Appreciation Dinner</div></div>
<p>Dear Valued Client,</p>
<p>We are delighted to invite you to our <b>Annual Client Appreciation Dinner</b> on <b>Friday, July 11</b> at the Grand Meridian Hotel, Ballroom A, starting at <b>7:00 PM</b>.</p>
<p>The evening will feature a three-course dinner, live music, and a brief presentation of our upcoming products for the next fiscal year. Dress code is <b>business formal</b>.</p>
<p>Please RSVP by <b>June 28</b> by replying to this email or calling 555-0188. We can accommodate up to <b>two guests</b> per invitation.</p>
<p>We look forward to your company!</p>`,
  questions:[
    {q:"このイベントはいつ開催されますか？",options:["6月28日","7月1日","7月11日","7月18日"],answer:2,explanation:"「Friday, July 11」とあります。"},
    {q:"1枚の招待状で何名まで参加できますか？",options:["1名","2名","3名","4名"],answer:1,explanation:"「accommodate up to two guests per invitation」とあります。"},
    {q:"RSVPの締め切りはいつですか？",options:["6月20日","6月25日","6月28日","7月5日"],answer:2,explanation:"「RSVP by June 28」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Software Update Notification",
  meta:"IT Department — Crestline Corporation",
  body:`<div class="email-header"><div><b>From:</b> it-support@crestline.com</div><div><b>To:</b> All Staff</div><div><b>Subject:</b> Scheduled System Maintenance — Action Required</div></div>
<p>Dear All,</p>
<p>The IT Department will be performing a <b>mandatory software update</b> on all company computers this coming <b>Saturday, June 14, from 8:00 PM to 11:00 PM</b>.</p>
<p>Please ensure your computer is <b>left on and connected to the company network</b> before leaving the office on Friday. Updates will install automatically overnight.</p>
<p>Do <b>not</b> save files to your desktop — move all important documents to your <b>OneDrive folder</b> before Friday to prevent data loss.</p>
<p>Contact the helpdesk at ext. <b>4400</b> with any questions.</p>`,
  questions:[
    {q:"アップデートはいつ実施されますか？",options:["金曜午後8時〜11時","土曜午後8時〜11時","日曜午前8時〜11時","土曜午前8時〜11時"],answer:1,explanation:"「Saturday, June 14, from 8:00 PM to 11:00 PM」とあります。"},
    {q:"金曜退社前に従業員がすべきことは何ですか？",options:["コンピュータをシャットダウンする","デスクトップにファイルを保存する","OneDriveにファイルを移動する","パスワードを変更する"],answer:2,explanation:"「move all important documents to your OneDrive folder before Friday」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Welcome to the Team",
  meta:"Human Resources — BluePeak Technologies",
  body:`<div class="email-header"><div><b>From:</b> hr@bluepeak.com</div><div><b>To:</b> Emma Lawson</div><div><b>Subject:</b> Welcome to BluePeak Technologies!</div></div>
<p>Dear Emma,</p>
<p>On behalf of everyone at BluePeak Technologies, we are thrilled to welcome you as our new <b>Senior UX Designer</b>.</p>
<p>Your first day is <b>Monday, June 9</b>. Please arrive at the reception desk on the <b>2nd floor by 9:00 AM</b>. You will be greeted by your onboarding coordinator, James Patel.</p>
<p>During your first week, you will attend an orientation session, meet your team, and complete required compliance training. Your laptop and access credentials will be ready upon arrival.</p>
<p>Please bring a <b>government-issued photo ID</b> and your signed contract on your first day.</p>
<p>We look forward to working with you!</p>`,
  questions:[
    {q:"Emmaの入社日はいつですか？",options:["6月2日","6月6日","6月9日","6月16日"],answer:2,explanation:"「Your first day is Monday, June 9」とあります。"},
    {q:"初日に何を持参する必要がありますか？",options:["ノートパソコン","名刺","写真付き身分証と署名済み契約書","健康診断書"],answer:2,explanation:"「bring a government-issued photo ID and your signed contract」とあります。"}
  ]
},
// ==================== 6-10: FLYER ====================
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Grand Opening Sale — Kensington Home & Living",
  meta:"Retail Promotion — Westside Mall",
  body:`<div class="flyer-center"><div class="flyer-big">🎉 GRAND OPENING CELEBRATION 🎉</div><div style="font-size:0.85rem;color:#555;margin-bottom:10px;">Kensington Home & Living — Westside Mall, Level 2</div><div class="flyer-price">UP TO 50% OFF</div><div style="margin:8px 0;font-size:0.82rem;">on furniture, kitchenware, and home décor</div><div><span class="flyer-tag">OPENING WEEK ONLY</span><span class="flyer-tag">June 7–13</span></div><hr style="margin:12px 0;border-color:#ddd;"></div>
<p>Visit us during the opening week and receive a <b>complimentary gift bag</b> with any purchase over <b>$80</b>.</p>
<p>On <b>Saturday, June 8</b>, join our <b>Interior Design Workshop</b> at 2:00 PM — free admission, no registration required.</p>
<p style="font-size:0.78rem;color:#888;">*In-store purchases only. Cannot be combined with other offers.</p>`,
  questions:[
    {q:"セール期間はいつですか？",options:["6月1日〜7日","6月7日〜13日","6月8日〜14日","6月2日〜8日"],answer:1,explanation:"「June 7–13」とあります。"},
    {q:"$80以上購入した場合、何がもらえますか？",options:["割引クーポン","ギフトバッグ","無料デリバリー","次回10%オフ"],answer:1,explanation:"「complimentary gift bag with any purchase over $80」とあります。"},
    {q:"ワークショップへの参加に必要なことは？",options:["事前予約","参加費の支払い","何も不要（無料・予約不要）","会員登録"],answer:2,explanation:"「free admission, no registration required」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Summer Clearance — FashionForward",
  meta:"Apparel — Downtown Flagship Store",
  body:`<div class="flyer-center"><div class="flyer-big">☀ SUMMER CLEARANCE EVENT ☀</div><div class="flyer-price">30–70% OFF</div><div style="margin:8px 0;font-size:0.82rem;">All summer collections, shoes, and accessories</div><div><span class="flyer-tag">THIS WEEKEND ONLY</span><span class="flyer-tag">Sat–Sun, June 14–15</span></div><hr style="margin:12px 0;border-color:#ddd;"></div>
<p>Shop our biggest sale of the year at <b>FashionForward Downtown</b>, 88 King Street. Doors open at <b>9:00 AM</b> both days.</p>
<p>Members of our <b>Loyalty Club</b> receive an <b>additional 10% off</b> all clearance items. Not a member? Sign up in-store for free.</p>
<p>Alterations service available at no extra charge for purchases over $150. No returns or exchanges on clearance items.</p>`,
  questions:[
    {q:"セールはいつ開催されますか？",options:["6月7日〜8日","6月14日〜15日","6月21日〜22日","6月28日〜29日"],answer:1,explanation:"「Sat–Sun, June 14–15」とあります。"},
    {q:"ロイヤルティクラブ会員が受ける追加特典は何ですか？",options:["送料無料","追加10%オフ","ギフトカード$20","優先入場"],answer:1,explanation:"「additional 10% off all clearance items」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Westfield Brasserie — Weekday Lunch Special",
  meta:"Food & Beverage — Business District",
  body:`<div class="flyer-center"><div class="flyer-big">🍽 WEEKDAY LUNCH SPECIAL</div><div style="color:#8a4a1a;font-size:0.95rem;margin-bottom:8px;">The Westfield Brasserie</div></div>
<p>Available <b>Monday through Friday, 11:30 AM – 2:30 PM</b>.</p>
<p><b>Two-Course Lunch: $22</b> — Starter + main course<br><b>Three-Course Lunch: $30</b> — Starter + main + dessert</p>
<p>All sets include freshly baked bread, water, and coffee or tea.</p>
<p>For groups of <b>6 or more</b>: <b>private dining room at no additional charge</b>. Reservation required — call <b>555-0321</b>.</p>
<p style="font-size:0.78rem;color:#888;">*Prices exclude taxes and gratuity.</p>`,
  questions:[
    {q:"ランチスペシャルの提供時間はいつですか？",options:["月〜土 11:30–14:30","月〜金 11:30–14:30","月〜金 12:00–15:00","毎日 11:00–15:00"],answer:1,explanation:"「Monday through Friday, 11:30 AM – 2:30 PM」とあります。"},
    {q:"6名以上のグループ向けの特典は何ですか？",options:["10%割引","無料デザート","追加料金なしのプライベートダイニング","専任ウェイター"],answer:2,explanation:"「private dining room at no additional charge」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Yoga & Wellness Studio — New Member Offer",
  meta:"Health & Fitness — Serenity Wellness Center",
  body:`<div class="flyer-center"><div class="flyer-big">🧘 BEGIN YOUR WELLNESS JOURNEY</div><div style="color:#1a6b6b;font-size:1rem;font-weight:700;margin-bottom:8px;">Serenity Wellness Center</div></div>
<p>New to Serenity? Try our <b>30-Day Introductory Pass</b> for just <b>$49</b> (regular price $120). Includes unlimited access to all yoga, pilates, and meditation classes.</p>
<p>Classes run <b>daily from 6:00 AM to 9:00 PM</b>. All levels welcome. Mats and equipment provided.</p>
<p>Sign up this month and receive a <b>free one-on-one consultation</b> with a certified wellness coach (valued at $80).</p>
<p>Location: 14 Harbor Lane, Suite 200 | Tel: 555-0244</p>`,
  questions:[
    {q:"30日間イントロパスの価格はいくらですか？",options:["$29","$49","$80","$120"],answer:1,explanation:"「30-Day Introductory Pass for just $49」とあります。"},
    {q:"今月入会すると何が無料でもらえますか？",options:["1ヶ月延長","ウェルネスコーチとの1対1相談","ヨガマット","グループレッスン10回"],answer:1,explanation:"「free one-on-one consultation with a certified wellness coach」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Global Speak Academy — Language Courses",
  meta:"Education Services",
  body:`<div class="flyer-center"><div class="flyer-big">Speak the World's Language</div><div style="color:#1a6b6b;font-size:1rem;font-weight:700;margin-bottom:8px;">Global Speak Academy</div></div>
<p>Flexible, results-driven language courses for business professionals.</p>
<p class="bullet">Business English (Beginner to Advanced)</p>
<p class="bullet">TOEIC Intensive Preparation (8 weeks)</p>
<p class="bullet">One-on-One Executive Coaching</p>
<p><b>Special Offer:</b> Enroll before June 30 for a <b>15% discount</b> plus free study materials (valued at $60).</p>
<p>Class size limited to <b>8 students</b>. Online options available.</p>`,
  questions:[
    {q:"6月30日までの申し込み特典は何ですか？",options:["全額免除","15%割引＋無料教材","無料体験授業","2コース目半額"],answer:1,explanation:"「15% discount plus free study materials」とあります。"},
    {q:"クラスの最大人数は何人ですか？",options:["5人","8人","10人","15人"],answer:1,explanation:"「limited to 8 students」とあります。"}
  ]
},
// ==================== 11-15: NOTICE ====================
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Building Maintenance — Water Supply Interruption",
  meta:"Facility Management — Clearwater Office Tower",
  body:`<div class="notice-box"><div class="notice-title">⚠ NOTICE TO ALL TENANTS</div><p>Scheduled Maintenance — Water Supply Interruption</p></div>
<p><b>Date:</b> Saturday, June 14 | <b>Time:</b> 8:00 AM – 4:00 PM | <b>Floors:</b> 1–18</p>
<p>Water will <b>not be available</b> in restrooms, kitchens, and common areas. We recommend storing an adequate water supply in advance.</p>
<p>The fire suppression system and emergency services will remain operational.</p>
<p class="bullet">Tenants needing special assistance: contact management by June 10.</p>
<p class="bullet">Parking garage remains open throughout.</p>`,
  questions:[
    {q:"メンテナンス中に使えなくなるものは？",options:["エレベーター","駐車場","水道","非常口"],answer:2,explanation:"「Water will not be available in restrooms, kitchens, and common areas」とあります。"},
    {q:"特別な支援が必要な場合、いつまでに連絡すべきですか？",options:["6月8日","6月10日","6月12日","6月14日"],answer:1,explanation:"「contact management by June 10」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Annual Staff Development Day",
  meta:"Corporate Training — Pinnacle Financial Services",
  body:`<div class="notice-box"><div class="notice-title">ANNUAL STAFF DEVELOPMENT DAY — MANDATORY ATTENDANCE</div></div>
<p>All full-time employees must attend on <b>Friday, June 27</b> at the <b>Grand Harbor Convention Center, Room 4A</b>.</p>
<p class="bullet">9:00 AM — CEO Welcome Address</p>
<p class="bullet">10:00 AM — Workshop: Effective Communication</p>
<p class="bullet">12:00 PM — Company-provided lunch</p>
<p class="bullet">1:30 PM — Workshop: Data Security</p>
<p class="bullet">3:30 PM — Outdoor team-building activity</p>
<p>If you cannot attend, obtain written approval from your department head by <b>June 20</b>. Please arrive by <b>8:45 AM</b>.</p>`,
  questions:[
    {q:"参加義務があるのは誰ですか？",options:["全従業員","フルタイム従業員のみ","マネージャー以上","新入社員のみ"],answer:1,explanation:"「All full-time employees must attend」とあります。"},
    {q:"欠席する場合のデッドラインはいつですか？",options:["6月15日","6月20日","6月25日","6月27日"],answer:1,explanation:"「written approval from your department head by June 20」とあります。"},
    {q:"何時までに会場に到着すべきですか？",options:["8:30 AM","8:45 AM","9:00 AM","9:15 AM"],answer:1,explanation:"「Please arrive by 8:45 AM」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Elevator Inspection Notice",
  meta:"Property Management — Riverside Business Park",
  body:`<div class="notice-box"><div class="notice-title">NOTICE: ELEVATOR OUT OF SERVICE</div></div>
<p>Please be advised that <b>Elevator No. 2</b> in the North Tower will be <b>out of service</b> from <b>Monday, June 9 through Wednesday, June 11</b> for its annual safety inspection.</p>
<p>During this period, please use <b>Elevator No. 1</b> or the stairwell located near the main lobby. We apologize for any inconvenience.</p>
<p>Tenants requiring accessibility assistance should contact the building office at <b>555-0155</b> to arrange alternative support.</p>
<p>Elevator No. 2 is expected to resume normal operation on <b>Thursday, June 12</b>.</p>`,
  questions:[
    {q:"エレベーターが使用できない期間はいつですか？",options:["6月6日〜8日","6月9日〜11日","6月10日〜12日","6月12日〜14日"],answer:1,explanation:"「Monday, June 9 through Wednesday, June 11」とあります。"},
    {q:"エレベーター運転再開はいつですか？",options:["6月11日","6月12日","6月13日","6月14日"],answer:1,explanation:"「expected to resume normal operation on Thursday, June 12」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Office Relocation Announcement",
  meta:"Administration — Greenfield Consulting Group",
  body:`<div class="notice-box"><div class="notice-title">📦 OFFICE RELOCATION NOTICE</div></div>
<p>We are pleased to announce that <b>Greenfield Consulting Group</b> will be relocating to a new, larger office space effective <b>July 1, 2026</b>.</p>
<p><b>New Address:</b> 250 Commerce Boulevard, Suite 800, 8th Floor</p>
<p>Our phone numbers and email addresses will remain the same. Please update your records accordingly.</p>
<p>The office will be <b>closed on June 30</b> to facilitate the move. Normal business hours will resume on July 1.</p>
<p>Please direct any inquiries to admin@greenfield.com.</p>`,
  questions:[
    {q:"引越し完了日はいつですか？",options:["6月1日","6月30日","7月1日","7月15日"],answer:2,explanation:"「relocating... effective July 1, 2026」とあります。"},
    {q:"引越しにあたって変わらないものは何ですか？",options:["住所","フロア","電話番号とメールアドレス","オフィスの広さ"],answer:2,explanation:"「Our phone numbers and email addresses will remain the same」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Cafeteria Renovation Closure",
  meta:"Facilities — Northgate Corporate Campus",
  body:`<div class="notice-box"><div class="notice-title">CAFETERIA TEMPORARILY CLOSED</div></div>
<p>The main cafeteria on the <b>ground floor</b> will be closed from <b>June 16 to June 27</b> for renovation. We apologize for the inconvenience.</p>
<p>During this period, the following alternatives are available:</p>
<p class="bullet"><b>Pop-up food stalls</b> will operate in the east courtyard, Monday–Friday, 11:00 AM–2:00 PM.</p>
<p class="bullet">The <b>3rd floor lounge</b> will be open for employees to eat brought-in meals.</p>
<p class="bullet">A list of nearby restaurants is available at the reception desk.</p>
<p>The renovated cafeteria will reopen on <b>Monday, June 30</b>.</p>`,
  questions:[
    {q:"カフェテリアが閉鎖される期間はいつですか？",options:["6月9日〜20日","6月16日〜27日","6月20日〜30日","6月23日〜7月3日"],answer:1,explanation:"「closed from June 16 to June 27」とあります。"},
    {q:"閉鎖期間中の代替として正しいのはどれですか？",options:["外部ケータリングがオフィスに来る","東のコートヤードでフードスタンドが営業","1階ラウンジが利用可能","近隣のレストランで割引が受けられる"],answer:1,explanation:"「Pop-up food stalls will operate in the east courtyard」とあります。"}
  ]
},
// ==================== 16-20: JOB ADS ====================
{
  genre:"job", genreLabel:"求人広告",
  title:"Marketing Coordinator — Nexora Digital",
  meta:"Recruitment — Nexora Digital Solutions",
  body:`<p><b>Nexora Digital Solutions</b> seeks a motivated <b>Marketing Coordinator</b>.</p>
<table class="job-table"><tr><td>Position</td><td>Marketing Coordinator (Full-time)</td></tr><tr><td>Location</td><td>Vancouver, BC (Hybrid)</td></tr><tr><td>Salary</td><td>$52,000–$65,000/year</td></tr><tr><td>Start Date</td><td>August 1, 2026</td></tr><tr><td>Deadline</td><td>June 30, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Requirements:</b></p>
<p class="bullet">Bachelor's degree in Marketing or related field</p>
<p class="bullet">Minimum 2 years of experience</p>
<p class="bullet">Proficiency in Microsoft Office and analytics tools</p>
<p style="margin-top:8px;">Send résumé and cover letter to <b>careers@nexora.com</b> — subject: "Marketing Coordinator Application."</p>`,
  questions:[
    {q:"応募締め切りはいつですか？",options:["6月15日","6月30日","7月1日","8月1日"],answer:1,explanation:"「Deadline: June 30, 2026」とあります。"},
    {q:"必要な経験年数は？",options:["経験不問","最低1年","最低2年","最低5年"],answer:2,explanation:"「Minimum 2 years of experience」とあります。"},
    {q:"応募方法は？",options:["オンラインフォーム","電話","履歴書とカバーレターをメールで送る","直接持参"],answer:2,explanation:"「Send résumé and cover letter to careers@nexora.com」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Customer Service Representative",
  meta:"Recruitment — ClearPath Insurance Group",
  body:`<p><b>ClearPath Insurance Group</b> is hiring a <b>Customer Service Representative</b> to join our support center.</p>
<table class="job-table"><tr><td>Employment</td><td>Full-time, Permanent</td></tr><tr><td>Hours</td><td>Monday–Friday, 9:00 AM–5:30 PM</td></tr><tr><td>Salary</td><td>$38,000–$44,000/year</td></tr><tr><td>Location</td><td>On-site, Toronto, ON</td></tr></table>
<p style="margin-top:10px;"><b>Responsibilities:</b></p>
<p class="bullet">Handle inbound customer calls and emails</p>
<p class="bullet">Process policy updates and renewals</p>
<p class="bullet">Resolve billing inquiries</p>
<p><b>Requirements:</b> High school diploma or equivalent; excellent communication skills; experience with CRM software preferred. Bilingual (English/French) candidates will be given preference.</p>
<p style="margin-top:8px;">Apply at: clearpath.com/careers by <b>June 20</b>.</p>`,
  questions:[
    {q:"この求人の勤務形態はどれですか？",options:["パートタイム","フルタイム・正社員","契約社員","リモートワーク専用"],answer:1,explanation:"「Full-time, Permanent」とあります。"},
    {q:"バイリンガル候補者はどう扱われますか？",options:["給与が高くなる","採用が優先される","別の部署に配属される","面接が免除される"],answer:1,explanation:"「Bilingual candidates will be given preference」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Part-Time Bookstore Associate",
  meta:"Retail Hiring — Chapters & Pages Bookstore",
  body:`<p><b>Chapters & Pages Bookstore</b> is looking for a friendly and enthusiastic <b>Part-Time Sales Associate</b>.</p>
<table class="job-table"><tr><td>Hours</td><td>20–25 hours/week (weekends required)</td></tr><tr><td>Pay</td><td>$17.50/hour</td></tr><tr><td>Location</td><td>Midtown Mall, Level 1</td></tr><tr><td>Start</td><td>Immediate</td></tr></table>
<p style="margin-top:10px;"><b>What we're looking for:</b></p>
<p class="bullet">Passion for books and customer service</p>
<p class="bullet">Availability on weekends</p>
<p class="bullet">Previous retail experience is an asset, not required</p>
<p>Pick up an application form in-store or email your résumé to <b>jobs@chaptersandpages.com</b>.</p>`,
  questions:[
    {q:"この求人の時給はいくらですか？",options:["$15.00","$16.50","$17.50","$20.00"],answer:2,explanation:"「$17.50/hour」とあります。"},
    {q:"週末の勤務はどのように扱われますか？",options:["任意","必須","追加手当が付く","月2回のみ"],answer:1,explanation:"「weekends required」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Junior Software Developer",
  meta:"Tech Recruitment — Pinnacle Systems Inc.",
  body:`<p><b>Pinnacle Systems Inc.</b> is growing and we want you! We are seeking a motivated <b>Junior Software Developer</b>.</p>
<table class="job-table"><tr><td>Position</td><td>Junior Developer (Full-time)</td></tr><tr><td>Salary</td><td>$65,000–$75,000/year</td></tr><tr><td>Location</td><td>Hybrid — Seattle, WA</td></tr><tr><td>Deadline</td><td>July 15, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Requirements:</b></p>
<p class="bullet">Bachelor's degree in Computer Science or related field</p>
<p class="bullet">Proficiency in Python or JavaScript</p>
<p class="bullet">Strong problem-solving skills</p>
<p>We offer comprehensive benefits, flexible hours, and strong career development support. Apply via our website at <b>pinnaclesystems.com/jobs</b>.</p>`,
  questions:[
    {q:"応募締め切りはいつですか？",options:["6月30日","7月1日","7月15日","8月1日"],answer:2,explanation:"「Deadline: July 15, 2026」とあります。"},
    {q:"必要なプログラミングスキルはどれですか？",options:["JavaまたはC++","PythonまたはJavaScript","RubyまたはSwift","PHPまたはPerl"],answer:1,explanation:"「Proficiency in Python or JavaScript」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Event Coordinator — Luxury Hotel",
  meta:"Hospitality — The Marquette Grand Hotel",
  body:`<p><b>The Marquette Grand Hotel</b> is seeking an experienced <b>Event Coordinator</b> to plan and execute events at our 5-star property.</p>
<table class="job-table"><tr><td>Position</td><td>Event Coordinator (Full-time)</td></tr><tr><td>Salary</td><td>$48,000–$58,000 + bonuses</td></tr><tr><td>Location</td><td>On-site, Chicago, IL</td></tr><tr><td>Deadline</td><td>June 25, 2026</td></tr></table>
<p style="margin-top:10px;"><b>Requirements:</b></p>
<p class="bullet">Minimum 3 years of event planning experience</p>
<p class="bullet">Excellent organizational and communication skills</p>
<p class="bullet">Ability to work evenings and weekends as required</p>
<p>Send applications to <b>hr@marquettegrand.com</b>. Shortlisted candidates will be contacted for an interview within two weeks.</p>`,
  questions:[
    {q:"必要な経験年数は最低何年ですか？",options:["1年","2年","3年","5年"],answer:2,explanation:"「Minimum 3 years of event planning experience」とあります。"},
    {q:"選考通過者への連絡はいつ来ますか？",options:["1週間以内","2週間以内","1ヶ月以内","応募後すぐ"],answer:1,explanation:"「contacted for an interview within two weeks」とあります。"}
  ]
},
// ==================== 21-25: MEMO / SCHEDULE ====================
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Updated Remote Work Policy",
  meta:"Human Resources — Evergreen Technology Group",
  body:`<div class="notice-box"><div class="notice-title">MEMORANDUM — Updated Remote Work Policy (Effective July 1)</div></div>
<p class="bullet">Remote work allowed up to <b>3 days/week</b> (previously 2 days)</p>
<p class="bullet">Mandatory office days: <b>Tuesdays and Thursdays</b></p>
<p class="bullet">Home office equipment allowance: increased to <b>$450/year</b></p>
<p class="bullet">Core hours: <b>10:00 AM – 3:00 PM</b> regardless of location</p>
<p>A detailed policy document will be distributed by June 15. Questions: hr@evergreentech.com or ext. 2210.</p>`,
  questions:[
    {q:"新ポリシーでは週何日まで在宅勤務できますか？",options:["1日","2日","3日","5日"],answer:2,explanation:"「Remote work allowed up to 3 days/week」とあります。"},
    {q:"機器手当の新しい金額は？",options:["$300","$350","$400","$450"],answer:3,explanation:"「increased to $450/year」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"New Expense Reimbursement Policy",
  meta:"Finance Department — Alderton Group",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Expense Reimbursement Policy Update</div></div>
<p>Effective <b>July 1, 2026</b>, the following changes to the expense reimbursement policy apply:</p>
<p class="bullet">Receipts required for all expenses over <b>$25</b> (previously $50)</p>
<p class="bullet">Claims must be submitted within <b>30 days</b> of the expense date</p>
<p class="bullet">Meal allowance per diem increased to <b>$75</b> for domestic travel</p>
<p class="bullet">All claims must be approved by your <b>direct manager</b> before submission to Finance</p>
<p>Download the updated expense form from the intranet. Contact finance@alderton.com with questions.</p>`,
  questions:[
    {q:"領収書が必要になるのはいくら以上の支出からですか？",options:["$10","$25","$50","$100"],answer:1,explanation:"「Receipts required for all expenses over $25」とあります。"},
    {q:"経費申請の提出期限は支出日から何日以内ですか？",options:["7日","14日","30日","60日"],answer:2,explanation:"「Claims must be submitted within 30 days」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Pacific Business Forum — Schedule Update",
  meta:"Event Management — Pacific Business Forum 2026",
  body:`<p>Dear Registered Attendees,</p>
<p>Important updates to the <b>Pacific Business Forum 2026</b> program (Day 1, June 20):</p>
<p class="bullet">Keynote by Dr. Amelia Torres moved from <b>9:00 AM to 10:00 AM</b> (A/V setup required)</p>
<p class="bullet">Networking lunch extended 30 minutes: now <b>12:30 PM – 2:00 PM</b></p>
<p class="bullet">New: <b>Panel Discussion on Sustainable Business</b> added at <b>4:30 PM, Hall C</b></p>
<p>All other sessions unchanged. Registration badge grants access to general sessions. <b>Workshop tickets</b> sold separately at the registration desk.</p>`,
  questions:[
    {q:"基調講演の新しい開始時間は何時ですか？",options:["9:00 AM","10:00 AM","11:00 AM","10:30 AM"],answer:1,explanation:"「moved from 9:00 AM to 10:00 AM」とあります。"},
    {q:"ワークショップへの参加に必要なものは？",options:["登録バッジのみ","別途チケット","招待状","名刺"],answer:1,explanation:"「Workshop tickets sold separately」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Flight Itinerary Change",
  meta:"Travel Services — Horizon Corporate Travel",
  body:`<div class="email-header"><div><b>To:</b> Ms. Patricia Kwan</div><div><b>Subject:</b> Important: Your Flight Itinerary Has Changed</div></div>
<p>Dear Ms. Kwan,</p>
<p>Please be advised that your outbound flight has been changed by the airline:</p>
<p><b>Original:</b> Flight GX-441, June 15, departs 8:30 AM, arrives 11:45 AM<br><b>New:</b> Flight GX-447, June 15, departs <b>11:00 AM</b>, arrives <b>2:15 PM</b></p>
<p>Your hotel check-in and return flight are unaffected. We recommend arriving at the airport at least <b>2 hours before departure</b>.</p>
<p>If you have any concerns, contact your travel agent at 555-0178.</p>`,
  questions:[
    {q:"変更後のフライト出発時刻は何時ですか？",options:["8:30 AM","9:30 AM","11:00 AM","12:00 PM"],answer:2,explanation:"「departs 11:00 AM」とあります。"},
    {q:"変更の影響を受けていないものはどれですか？",options:["出発便","出発時刻","ホテルのチェックイン","到着時刻"],answer:2,explanation:"「Your hotel check-in and return flight are unaffected」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Training Workshop Postponement",
  meta:"Learning & Development — Orion Financial",
  body:`<div class="email-header"><div><b>From:</b> learning@orion-financial.com</div><div><b>To:</b> Registered Participants</div><div><b>Subject:</b> Postponement of Leadership Training Workshop</div></div>
<p>Dear Participants,</p>
<p>Due to the trainer's unforeseen medical emergency, the <b>Leadership & Communication Workshop</b> originally scheduled for <b>June 18–19</b> has been postponed.</p>
<p>The new dates are <b>July 9–10</b>, same venue: <b>Conference Room 5B</b>, same start time: <b>9:00 AM</b>.</p>
<p>All registrations will be automatically transferred to the new dates. If you cannot attend the rescheduled session, please contact us by <b>June 30</b> to receive a full refund or transfer to a future session.</b></p>`,
  questions:[
    {q:"ワークショップが延期された理由は何ですか？",options:["会場の問題","トレーナーの急病","参加者の不足","予算の問題"],answer:1,explanation:"「trainer's unforeseen medical emergency」とあります。"},
    {q:"新しい開催日はいつですか？",options:["6月25日〜26日","7月2日〜3日","7月9日〜10日","7月16日〜17日"],answer:2,explanation:"「The new dates are July 9–10」とあります。"},
    {q:"新日程に参加できない場合の期限はいつですか？",options:["6月20日","6月30日","7月1日","7月9日"],answer:1,explanation:"「please contact us by June 30」とあります。"}
  ]
}
]; // END of first 25 passages
