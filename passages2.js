// passages2.js — passages 26–50

const PASSAGES2 = [
// ==================== 26-30: EMAIL ====================
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Invoice Payment Reminder",
  meta:"Accounts Receivable — Solaris Business Solutions",
  body:`<div class="email-header"><div><b>From:</b> accounts@solaris-biz.com</div><div><b>To:</b> Mr. Kevin Marsh</div><div><b>Subject:</b> Reminder: Invoice #SB-3391 Payment Due</div></div>
<p>Dear Mr. Marsh,</p>
<p>This is a friendly reminder that <b>Invoice #SB-3391</b> for $4,250.00 was due on <b>June 1</b>. Our records show that payment has not yet been received.</p>
<p>Please arrange payment at your earliest convenience. You may pay by <b>bank transfer, credit card, or check</b>. Bank details are included in the original invoice.</p>
<p>If payment has already been made, please disregard this notice and forward your remittance advice to accounts@solaris-biz.com.</p>
<p>Should you have any questions or wish to discuss a payment arrangement, contact us at 555-0166.</p>`,
  questions:[
    {q:"この請求書の金額はいくらですか？",options:["$2,500","$3,391","$4,250","$5,000"],answer:2,explanation:"「Invoice #SB-3391 for $4,250.00」とあります。"},
    {q:"受け取り側がすでに支払い済みの場合、何をすべきですか？",options:["再度振込みを行う","このメールを無視して振込証明を転送する","電話で確認する","請求書を返送する"],answer:1,explanation:"「please disregard this notice and forward your remittance advice」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Product Recall Notice",
  meta:"Customer Relations — NutriFresh Foods",
  body:`<div class="email-header"><div><b>From:</b> safety@nutrifresh.com</div><div><b>To:</b> Registered Customers</div><div><b>Subject:</b> URGENT: Voluntary Product Recall — NutriFresh Protein Bars</div></div>
<p>Dear Valued Customer,</p>
<p>NutriFresh Foods is issuing a <b>voluntary recall</b> of our <b>Chocolate Almond Protein Bars (Batch #NAB-220)</b> due to potential undeclared almond content that may pose a risk to customers with <b>nut allergies</b>.</p>
<p>If you have purchased this product, please <b>do not consume it</b>. Return it to any store where NutriFresh products are sold for a <b>full refund</b>, or mail it to us with your receipt for a replacement.</p>
<p>Customers with questions may call our hotline: <b>1-800-555-0199</b>, available 24 hours.</p>`,
  questions:[
    {q:"このリコールの理由は何ですか？",options:["パッケージの欠陥","未申告のアーモンド成分","賞味期限の誤記","製造ラインの不具合"],answer:1,explanation:"「potential undeclared almond content」とあります。"},
    {q:"購入した商品はどうすれば返金を受けられますか？",options:["メーカーに直送する","製品を購入した店舗に持参する","購入店舗かNutriFreshに返送する","公式サイトから申請する"],answer:2,explanation:"「Return it to any store... or mail it to us」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Conference Room Booking Confirmation",
  meta:"Administrative Services — Apex Coworking",
  body:`<div class="email-header"><div><b>From:</b> bookings@apexcowork.com</div><div><b>To:</b> Laura Bennett</div><div><b>Subject:</b> Booking Confirmed — Boardroom B</div></div>
<p>Dear Ms. Bennett,</p>
<p>Your booking has been confirmed:</p>
<p><b>Room:</b> Boardroom B (capacity: 12)<br><b>Date:</b> Thursday, June 19, 2026<br><b>Time:</b> 2:00 PM – 5:00 PM<br><b>Extras:</b> Projector, whiteboard, catering (afternoon tea for 10)</p>
<p>Please check in at the reception desk upon arrival. A 24-hour cancellation notice is required to avoid a cancellation fee of <b>$75</b>.</p>
<p>If you need to make changes, reply to this email or call 555-0142.</p>`,
  questions:[
    {q:"予約した会議室の定員は何名ですか？",options:["8名","10名","12名","15名"],answer:2,explanation:"「Boardroom B (capacity: 12)」とあります。"},
    {q:"キャンセル料を避けるには何時間前に通知が必要ですか？",options:["12時間","24時間","48時間","72時間"],answer:1,explanation:"「A 24-hour cancellation notice is required」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Subscription Renewal Confirmation",
  meta:"Customer Success — CloudDesk Software",
  body:`<div class="email-header"><div><b>From:</b> billing@clouddesk.io</div><div><b>To:</b> Marco Vitale</div><div><b>Subject:</b> Your CloudDesk Subscription Has Been Renewed</div></div>
<p>Dear Mr. Vitale,</p>
<p>Thank you — your <b>CloudDesk Professional plan</b> has been automatically renewed for another <b>12 months</b> starting <b>June 1, 2026</b>.</p>
<p><b>Amount charged:</b> $348.00 to Visa ending in 4821.</p>
<p>Your plan includes: unlimited cloud storage, priority support, and up to <b>5 user accounts</b>. To add more users or upgrade, visit your account dashboard.</p>
<p>To cancel auto-renewal, go to Settings → Billing → Cancel Renewal. Cancellations take effect at the end of the current billing period.</p>`,
  questions:[
    {q:"このプランに含まれるユーザーアカウント数は最大何ですか？",options:["3","5","10","無制限"],answer:1,explanation:"「up to 5 user accounts」とあります。"},
    {q:"自動更新をキャンセルした場合、いつ有効になりますか？",options:["即時","翌月から","現在の請求期間終了時","翌年から"],answer:2,explanation:"「Cancellations take effect at the end of the current billing period」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Job Application Acknowledgment",
  meta:"HR — Meridian Health Network",
  body:`<div class="email-header"><div><b>From:</b> careers@meridian-health.com</div><div><b>To:</b> Applicant</div><div><b>Subject:</b> We've Received Your Application — Nurse Practitioner</div></div>
<p>Dear Applicant,</p>
<p>Thank you for applying for the <b>Nurse Practitioner</b> position at Meridian Health Network. We have received your application and it is currently under review.</p>
<p>Our hiring team will review all applications by <b>June 27</b>. Shortlisted candidates will be contacted for a <b>phone screening</b> within the following week.</p>
<p>Please do not contact the HR department to follow up on your application status, as this may delay the review process.</p>
<p>We appreciate your interest and will be in touch if your qualifications match our needs.</p>`,
  questions:[
    {q:"書類選考の完了予定日はいつですか？",options:["6月15日","6月20日","6月27日","7月5日"],answer:2,explanation:"「review all applications by June 27」とあります。"},
    {q:"応募者はなぜ人事部にフォローアップ連絡をしてはいけないのですか？",options:["別のメールアドレスに連絡すべきだから","選考プロセスを遅らせる可能性があるから","すでに採否が決定しているから","電話のみ受け付けているから"],answer:1,explanation:"「this may delay the review process」とあります。"}
  ]
},
// ==================== 31-35: FLYER / AD ====================
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Riverdale Farmers Market — Opening Day",
  meta:"Community Event — Riverdale Recreation Department",
  body:`<div class="flyer-center"><div class="flyer-big">🌿 RIVERDALE FARMERS MARKET 🌿</div><div style="font-size:0.9rem;color:#555;margin-bottom:10px;">Fresh, Local, Seasonal — Every Saturday</div></div>
<p>We are thrilled to announce the <b>opening of Riverdale Farmers Market</b> for the 2026 season, starting <b>Saturday, June 7, from 8:00 AM to 1:00 PM</b> at Central Park Pavilion.</p>
<p>Featuring over <b>40 local vendors</b> selling fresh produce, artisan bread, honey, dairy products, handmade crafts, and more. Free entry for all visitors.</p>
<p>Opening day highlights: live folk music, cooking demonstration by Chef Haruto Sato at <b>10:00 AM</b>, and free seed packets for the first 100 visitors.</p>`,
  questions:[
    {q:"ファーマーズマーケットの開催時間はいつですか？",options:["7:00 AM – 12:00 PM","8:00 AM – 1:00 PM","9:00 AM – 2:00 PM","10:00 AM – 3:00 PM"],answer:1,explanation:"「8:00 AM to 1:00 PM」とあります。"},
    {q:"最初の100名の来場者がもらえるものは何ですか？",options:["無料の野菜","割引クーポン","無料の種パケット","記念品"],answer:2,explanation:"「free seed packets for the first 100 visitors」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"TechPro Online Courses — Year-End Sale",
  meta:"E-Learning — TechPro Academy",
  body:`<div class="flyer-center"><div class="flyer-big">📚 LEARN. GROW. SUCCEED.</div><div style="color:#1a5c8a;font-size:1rem;font-weight:700;margin-bottom:8px;">TechPro Academy Online Courses</div></div>
<p>Advance your career with industry-recognized certifications in <b>data science, project management, cybersecurity</b>, and more.</p>
<p><b>Mid-Year Sale:</b> Get <b>40% off</b> all courses with code <b>MIDYEAR40</b> — valid until June 30.</p>
<p class="bullet">Self-paced learning — study anytime, anywhere</p>
<p class="bullet">Certificate of completion included</p>
<p class="bullet">Access valid for <b>12 months</b> from purchase</p>
<p>Over 50,000 students enrolled worldwide. Start today at <b>techpro-academy.com</b>.</p>`,
  questions:[
    {q:"割引コードを使った場合の割引率は？",options:["20%","30%","40%","50%"],answer:2,explanation:"「40% off all courses with code MIDYEAR40」とあります。"},
    {q:"コース購入後のアクセス有効期間はどのくらいですか？",options:["3ヶ月","6ヶ月","12ヶ月","無期限"],answer:2,explanation:"「Access valid for 12 months from purchase」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Community Theater — Summer Production",
  meta:"Arts & Culture — Lakeside Community Theater",
  body:`<div class="flyer-center"><div class="flyer-big">🎭 LAKESIDE COMMUNITY THEATER</div><div style="font-size:1rem;font-weight:700;color:#5c1a8a;margin-bottom:8px;">Presents: "THE LAST SUMMER"</div><div style="font-size:0.85rem;color:#555;margin-bottom:10px;">A heartwarming original drama in two acts</div></div>
<p><b>Performances:</b> July 18, 19, 25, 26 at 7:30 PM | July 20, 27 (matinée) at 2:00 PM<br><b>Venue:</b> Lakeside Civic Auditorium, Main Stage</p>
<p><b>Tickets:</b> Adults $22 | Seniors/Students $16 | Children under 12 $10</p>
<p>Group discounts available for parties of <b>10 or more</b> (20% off). Book online at lakesidetheater.org or call 555-0277. Doors open <b>30 minutes</b> before each performance.</p>`,
  questions:[
    {q:"シニア・学生チケットの料金はいくらですか？",options:["$10","$16","$22","$28"],answer:1,explanation:"「Seniors/Students $16」とあります。"},
    {q:"グループ割引の条件は何ですか？",options:["5名以上","8名以上","10名以上","15名以上"],answer:2,explanation:"「parties of 10 or more (20% off)」とあります。"}
  ]
},
{
  genre:"ad", genreLabel:"広告",
  title:"Prestige Car Rental — Business Account",
  meta:"Transportation — Prestige Mobility Solutions",
  body:`<div class="flyer-center"><div class="flyer-big">🚗 DRIVE IN STYLE. PAY LESS.</div><div style="color:#1a3a5c;font-size:1rem;font-weight:700;margin-bottom:8px;">Prestige Car Rental — Corporate Accounts</div></div>
<p>Open a <b>Corporate Account</b> with Prestige and enjoy exclusive benefits:</p>
<p class="bullet">Rates from <b>$55/day</b> for standard vehicles</p>
<p class="bullet"><b>15% discount</b> on all rentals for account holders</p>
<p class="bullet">Free GPS unit with every booking</p>
<p class="bullet">24/7 roadside assistance</p>
<p>No minimum monthly spend. Invoiced monthly for easy expense management. Contact our business team at <b>corporate@prestigerental.com</b> or call <b>1-800-555-0130</b>.</p>`,
  questions:[
    {q:"法人アカウント会員が受ける割引は何%ですか？",options:["10%","15%","20%","25%"],answer:1,explanation:"「15% discount on all rentals for account holders」とあります。"},
    {q:"全予約に無料でつくオプションは何ですか？",options:["チャイルドシート","GPSユニット","保険","燃料補給サービス"],answer:1,explanation:"「Free GPS unit with every booking」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Annual Charity Fun Run",
  meta:"Non-Profit Event — Hope Foundation",
  body:`<div class="flyer-center"><div class="flyer-big">🏃 HOPE FOUNDATION FUN RUN 2026</div><div style="font-size:0.9rem;color:#1a6b3a;font-weight:700;margin-bottom:8px;">Run for a Cause — Every Step Counts!</div></div>
<p><b>Date:</b> Sunday, July 6 | <b>Start:</b> 7:30 AM at Riverside Park Bandstand<br><b>Distances:</b> 5K, 10K, or Family Walk (2K)</p>
<p><b>Registration fees:</b> Adults $30 | Children (under 16) $15 | Family pack (2 adults + 2 children) $70</p>
<p>All proceeds support local youth education programs. Register at hopefoundation.org by <b>June 28</b>. T-shirt included with registration (sizes limited — register early!).</p>`,
  questions:[
    {q:"ファミリーパックの価格はいくらですか？",options:["$60","$70","$80","$90"],answer:1,explanation:"「Family pack (2 adults + 2 children) $70」とあります。"},
    {q:"参加登録の締め切りはいつですか？",options:["6月20日","6月28日","7月1日","7月6日"],answer:1,explanation:"「Register... by June 28」とあります。"}
  ]
},
// ==================== 36-40: NOTICE / MEMO ====================
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Parking Lot Closure",
  meta:"Facilities — Summit Corporate Center",
  body:`<div class="notice-box"><div class="notice-title">NOTICE: TEMPORARY PARKING LOT CLOSURE</div></div>
<p><b>Parking Lot C</b> (west side) will be <b>closed from Monday, June 23 through Friday, June 27</b> for resurfacing and line repainting.</p>
<p>During this period, tenants are encouraged to use <b>Parking Lot A</b> (north side, capacity 280 vehicles) or the <b>municipal parking garage</b> on Elm Street (3-minute walk, $5/day for Summit tenants with validation).</b></p>
<p>Lot C will reopen with <b>new EV charging stations</b> (8 total) on Monday, June 30.</p>`,
  questions:[
    {q:"駐車場Cが閉鎖される理由は何ですか？",options:["建設工事","再舗装とラインの塗り直し","EVステーション設置のみ","セキュリティアップグレード"],answer:1,explanation:"「for resurfacing and line repainting」とあります。"},
    {q:"駐車場Cが再開した後、新しく追加されるものは何ですか？",options:["屋根付き駐車スペース","EVチャージングステーション","警備員の常駐","バイク専用スペース"],answer:1,explanation:"「new EV charging stations (8 total)」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"New Dress Code Policy",
  meta:"HR — Waverly Communications",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Updated Dress Code Policy (Effective Immediately)</div></div>
<p>Following employee feedback, Waverly Communications is updating its dress code policy:</p>
<p class="bullet"><b>Monday–Thursday:</b> Business casual (slacks, blouse, collared shirt)</p>
<p class="bullet"><b>Friday:</b> Casual dress permitted (no torn clothing, flip-flops, or graphic T-shirts)</p>
<p class="bullet">Client-facing days: <b>Business professional</b> required regardless of day</p>
<p>The full dress code guide with photo examples is available on the company intranet. Employees with questions should speak with their department manager.</p>`,
  questions:[
    {q:"金曜日の服装として許可されていないものはどれですか？",options:["ジーンズ","スニーカー","グラフィックTシャツ","カジュアルシャツ"],answer:2,explanation:"「no torn clothing, flip-flops, or graphic T-shirts」とあります。"},
    {q:"クライアント対応の日には何が求められますか？",options:["ビジネスカジュアル","スマートカジュアル","ビジネスプロフェッショナル","制服の着用"],answer:2,explanation:"「Client-facing days: Business professional required regardless of day」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Year-End Performance Review Schedule",
  meta:"Human Resources — Fairmont Asset Management",
  body:`<div class="notice-box"><div class="notice-title">MEMO — Mid-Year Performance Reviews</div></div>
<p>Mid-year performance reviews will take place from <b>June 23–July 4</b>. All managers must schedule 30-minute one-on-one sessions with each direct report.</p>
<p class="bullet">Employees: complete your <b>self-assessment form</b> by June 20 (available on HR portal)</p>
<p class="bullet">Managers: submit completed review forms by <b>July 7</b></p>
<p class="bullet">Salary adjustment notifications will be sent by <b>July 31</b></p>
<p>Contact HR at ext. 3300 with questions.</p>`,
  questions:[
    {q:"自己評価フォームの提出期限はいつですか？",options:["6月15日","6月20日","6月23日","7月4日"],answer:1,explanation:"「complete your self-assessment form by June 20」とあります。"},
    {q:"給与調整の通知はいつ送られますか？",options:["7月7日","7月15日","7月31日","8月1日"],answer:2,explanation:"「Salary adjustment notifications will be sent by July 31」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Library Summer Hours",
  meta:"Public Services — Maplewood Public Library",
  body:`<div class="notice-box"><div class="notice-title">📚 SUMMER HOURS — June 15 to August 31</div></div>
<p>Please note the following adjusted operating hours for summer:</p>
<p><b>Monday–Thursday:</b> 9:00 AM – 8:00 PM<br><b>Friday–Saturday:</b> 9:00 AM – 5:00 PM<br><b>Sunday:</b> 12:00 PM – 5:00 PM</p>
<p>The library will be <b>closed on July 4</b> (Independence Day).</p>
<p>New this summer: <b>Digital Resource Workshops</b> every Tuesday at 3:00 PM (no registration required). Children's Summer Reading Program begins June 22.</p>`,
  questions:[
    {q:"土曜日の閉館時間は何時ですか？",options:["5:00 PM","6:00 PM","7:00 PM","8:00 PM"],answer:0,explanation:"「Friday–Saturday: 9:00 AM – 5:00 PM」とあります。"},
    {q:"子供向けサマーリーディングプログラムはいつ始まりますか？",options:["6月15日","6月22日","7月1日","7月4日"],answer:1,explanation:"「Children's Summer Reading Program begins June 22」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Gym Equipment Upgrade Notice",
  meta:"Amenities — Harborview Residential Tower",
  body:`<div class="notice-box"><div class="notice-title">GYM UPGRADE — TEMPORARY CLOSURE</div></div>
<p>The 4th-floor fitness center will be <b>closed from July 1–14</b> for a major equipment upgrade. New additions include:</p>
<p class="bullet">5 new treadmills with touchscreen displays</p>
<p class="bullet">Updated free weights section (up to 50kg)</p>
<p class="bullet">2 new rowing machines</p>
<p>During closure, residents may use the <b>partner gym at Harbor Sports Club</b> (2 blocks away) at <b>no charge</b> — show your resident ID card at the front desk.</p>
<p>The upgraded gym reopens on <b>July 15</b>.</p>`,
  questions:[
    {q:"フィットネスセンターが閉鎖される期間はいつですか？",options:["6月15日〜30日","7月1日〜14日","7月1日〜20日","7月15日〜31日"],answer:1,explanation:"「closed from July 1–14」とあります。"},
    {q:"閉鎖期間中、住民はどうすれば無料でジムを使えますか？",options:["オンラインで申請する","居住者IDを提携ジムで提示する","管理事務所で許可書をもらう","特定の時間のみ使用可"],answer:1,explanation:"「show your resident ID card at the front desk」とあります。"}
  ]
},
// ==================== 41-45: JOB / SCHEDULE ====================
{
  genre:"job", genreLabel:"求人広告",
  title:"Receptionist — Medical Clinic",
  meta:"Healthcare — Sunnyside Family Health Clinic",
  body:`<p><b>Sunnyside Family Health Clinic</b> has an opening for a <b>full-time Receptionist</b>.</p>
<table class="job-table"><tr><td>Hours</td><td>Mon–Fri, 8:00 AM–4:30 PM</td></tr><tr><td>Pay</td><td>$20–$23/hour</td></tr><tr><td>Start</td><td>As soon as possible</td></tr></table>
<p style="margin-top:10px;"><b>Duties:</b></p>
<p class="bullet">Greet patients and manage appointments</p>
<p class="bullet">Handle phone inquiries and medical record requests</p>
<p class="bullet">Process billing and insurance forms</p>
<p><b>Requirements:</b> Previous medical office experience preferred; strong computer skills; must complete a background check before starting.</p>
<p>Email résumé to <b>admin@sunnysidefhc.com</b>.</p>`,
  questions:[
    {q:"この求人の勤務時間はいつですか？",options:["月〜金 8:00–16:00","月〜金 8:00–16:30","月〜土 9:00–17:00","月〜金 9:00–17:30"],answer:1,explanation:"「Mon–Fri, 8:00 AM–4:30 PM」とあります。"},
    {q:"採用前に必要なことは何ですか？",options:["健康診断","身元調査","研修の受講","英語テスト"],answer:1,explanation:"「must complete a background check before starting」とあります。"}
  ]
},
{
  genre:"job", genreLabel:"求人広告",
  title:"Graphic Designer — Freelance",
  meta:"Creative — DesignHive Studio",
  body:`<p><b>DesignHive Studio</b> is seeking a talented <b>Freelance Graphic Designer</b> for ongoing project work.</p>
<table class="job-table"><tr><td>Type</td><td>Freelance / Project-based</td></tr><tr><td>Rate</td><td>$40–$60/hour (DOE)</td></tr><tr><td>Location</td><td>Remote</td></tr></table>
<p style="margin-top:10px;"><b>Projects include:</b></p>
<p class="bullet">Brand identity and logo design</p>
<p class="bullet">Marketing collateral (brochures, banners)</p>
<p class="bullet">Social media graphics</p>
<p><b>Requirements:</b> Portfolio required; proficiency in Adobe Creative Suite; ability to meet tight deadlines; minimum 3 years of professional design experience.</p>
<p>Submit portfolio and hourly rate expectations to <b>hello@designhive.com</b>.</p>`,
  questions:[
    {q:"この求人の時給レートはどのくらいですか？",options:["$25–$35","$30–$50","$40–$60","$50–$80"],answer:2,explanation:"「$40–$60/hour」とあります。"},
    {q:"応募に必要なものは何ですか？",options:["推薦状","資格証明書","ポートフォリオ","試験の合格証"],answer:2,explanation:"「Portfolio required」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Annual General Meeting Rescheduled",
  meta:"Corporate — Vantage Holdings Ltd.",
  body:`<div class="email-header"><div><b>To:</b> All Shareholders</div><div><b>Subject:</b> Notice of Rescheduled Annual General Meeting</div></div>
<p>Dear Shareholder,</p>
<p>We regret to inform you that the <b>Annual General Meeting (AGM)</b> originally scheduled for <b>June 12</b> has been postponed to <b>Thursday, June 26, at 3:00 PM</b>.</p>
<p>The meeting will be held at <b>Vantage Tower, 22nd Floor Boardroom</b>. Virtual attendance via our investor portal will also be available.</p>
<p>The postponement is due to the need for additional time to finalize the <b>audited financial statements</b>. All agenda items remain unchanged.</p>
<p>Please RSVP (in-person or virtual) to ir@vantage-holdings.com by <b>June 23</b>.</p>`,
  questions:[
    {q:"AGMが延期された理由は何ですか？",options:["会場の都合","監査済み財務諸表の最終化が必要","主要株主が出席できない","システムトラブル"],answer:1,explanation:"「need for additional time to finalize the audited financial statements」とあります。"},
    {q:"RSVPの期限はいつですか？",options:["6月15日","6月20日","6月23日","6月26日"],answer:2,explanation:"「RSVP... by June 23」とあります。"}
  ]
},
{
  genre:"schedule", genreLabel:"スケジュール変更",
  title:"Product Launch Event — Updated Agenda",
  meta:"Marketing — Quantum Devices Inc.",
  body:`<div class="notice-box"><div class="notice-title">UPDATED AGENDA — Quantum X1 Launch Event</div></div>
<p>Thank you for registering for the <b>Quantum X1 Product Launch</b> on June 20. Please note the following agenda update:</p>
<p class="bullet">9:30 AM — Registration & Coffee (previously 9:00 AM)</p>
<p class="bullet">10:00 AM — Welcome remarks by CEO (unchanged)</p>
<p class="bullet">10:30 AM — <b>Live product demo</b> (NEW — added to program)</p>
<p class="bullet">12:00 PM — Networking lunch</p>
<p class="bullet">2:00 PM — Breakout sessions (Room assignments to follow)</p>
<p>Parking is complimentary in Lot B. Please show your registration email at the venue entrance.</p>`,
  questions:[
    {q:"受付開始時刻は何時に変更されましたか？",options:["8:30 AM","9:00 AM","9:30 AM","10:00 AM"],answer:2,explanation:"「Registration & Coffee (previously 9:00 AM)」→変更後は9:30 AMです。"},
    {q:"今回のアジェンダに新しく追加されたのは何ですか？",options:["基調講演","ライブ製品デモ","ランチ","CEO挨拶"],answer:1,explanation:"「Live product demo (NEW — added to program)」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Seminar Registration Confirmation",
  meta:"Events — Institute of Business Excellence",
  body:`<div class="email-header"><div><b>From:</b> events@ibe-global.com</div><div><b>To:</b> Hiroshi Tanaka</div><div><b>Subject:</b> Registration Confirmed — Strategic Leadership Seminar</div></div>
<p>Dear Mr. Tanaka,</p>
<p>Your registration for the <b>Strategic Leadership Seminar</b> has been confirmed.</p>
<p><b>Date:</b> June 28–29, 2026 | <b>Venue:</b> IBE Conference Center, Room 12 | <b>Time:</b> 9:00 AM – 5:00 PM both days</p>
<p><b>Fee paid:</b> $495.00 (early-bird rate). Includes all materials, lunches, and a certificate of completion.</p>
<p>Please bring this confirmation email and a valid photo ID. Parking is available at $12/day in the adjacent lot.</p>`,
  questions:[
    {q:"セミナーの参加費はいくらでしたか？",options:["$350","$450","$495","$550"],answer:2,explanation:"「Fee paid: $495.00」とあります。"},
    {q:"参加費に含まれていないものはどれですか？",options:["教材","昼食","修了証","駐車場代"],answer:3,explanation:"「Parking is available at $12/day」とあります。駐車場は別途料金です。"}
  ]
},
// ==================== 46-50: MIXED ====================
{
  genre:"ad", genreLabel:"広告",
  title:"Rooftop Restaurant — Grand Opening",
  meta:"Hospitality — Sky Garden Dining",
  body:`<div class="flyer-center"><div class="flyer-big">🌆 OPENING SOON — SKY GARDEN</div><div style="color:#8a4a1a;font-size:1rem;font-weight:700;margin-bottom:8px;">Rooftop Dining on the 28th Floor</div></div>
<p>Experience the city from above at <b>Sky Garden</b>, Riverside Tower's newest rooftop restaurant and bar. Opening <b>July 1, 2026</b>.</p>
<p><b>Preview Dinner:</b> June 28 — exclusive seating for the first 40 guests. Reservations: <b>sky@riversidetower.com</b>.</p>
<p class="bullet">Lunch: Mon–Fri 12:00–2:30 PM</p>
<p class="bullet">Dinner: Daily 6:00–10:30 PM</p>
<p class="bullet">Weekend Brunch: Sat–Sun 10:00 AM–2:00 PM</p>
<p>Smart casual dress code. Reservations recommended. Views of the harbor guaranteed.</p>`,
  questions:[
    {q:"プレビューディナーに参加できる最大人数は？",options:["20人","30人","40人","50人"],answer:2,explanation:"「exclusive seating for the first 40 guests」とあります。"},
    {q:"レストランの正式オープン日はいつですか？",options:["6月28日","7月1日","7月4日","7月15日"],answer:1,explanation:"「Opening July 1, 2026」とあります。"}
  ]
},
{
  genre:"memo", genreLabel:"社内メモ",
  title:"Office Supply Ordering Process Change",
  meta:"Administration — Brightstone Group",
  body:`<div class="notice-box"><div class="notice-title">MEMO — New Office Supply Ordering Process</div></div>
<p>Effective June 16, all office supply orders must be placed through the new <b>online procurement portal</b> at supplies.brightstone-internal.com.</p>
<p class="bullet">Log in with your employee ID and password</p>
<p class="bullet">Orders under <b>$100</b> do not require manager approval</p>
<p class="bullet">Orders of <b>$100 or more</b> require your manager's digital signature</p>
<p class="bullet">Standard delivery: <b>3–5 business days</b></p>
<p>The previous paper-based ordering system will be discontinued after June 15. Training materials are available on the intranet.</p>`,
  questions:[
    {q:"上司の承認が不要な注文の上限金額はいくらですか？",options:["$50未満","$100未満","$150未満","$200未満"],answer:1,explanation:"「Orders under $100 do not require manager approval」とあります。"},
    {q:"標準的な配達にかかる日数は？",options:["1〜2営業日","2〜3営業日","3〜5営業日","5〜7営業日"],answer:2,explanation:"「Standard delivery: 3–5 business days」とあります。"}
  ]
},
{
  genre:"flyer", genreLabel:"宣伝チラシ",
  title:"Hotel — Weekend Getaway Package",
  meta:"Hospitality — The Harborview Hotel",
  body:`<div class="flyer-center"><div class="flyer-big">🏨 WEEKEND ESCAPE PACKAGE</div><div style="color:#1a3a5c;font-size:1rem;font-weight:700;margin-bottom:8px;">The Harborview Hotel</div></div>
<p>Escape the city with our <b>Weekend Escape Package</b>, available Friday–Sunday throughout June and July.</p>
<p><b>Package includes (from $189/night):</b></p>
<p class="bullet">Deluxe room with harbor view</p>
<p class="bullet">Complimentary breakfast for two</p>
<p class="bullet">Late checkout until 2:00 PM</p>
<p class="bullet">20% off spa treatments</p>
<p>Book directly at harborviewhotel.com with code <b>ESCAPE26</b> to get the package rate. Minimum 2-night stay required. Subject to availability.</p>`,
  questions:[
    {q:"このパッケージに含まれるもので正しいのはどれですか？",options:["空港送迎","2名分の無料朝食","フリードリンク","無料ルームサービス"],answer:1,explanation:"「Complimentary breakfast for two」とあります。"},
    {q:"このパッケージを利用するための条件は何ですか？",options:["会員登録","最低2泊の宿泊","事前電話予約","3名以上の宿泊"],answer:1,explanation:"「Minimum 2-night stay required」とあります。"}
  ]
},
{
  genre:"notice", genreLabel:"お知らせ",
  title:"Free Wi-Fi Upgrade Announcement",
  meta:"Tenant Services — Oakwood Business Center",
  body:`<div class="notice-box"><div class="notice-title">📡 COMPLIMENTARY WI-FI UPGRADE NOTICE</div></div>
<p>Oakwood Business Center is pleased to announce a <b>complimentary upgrade</b> to our building-wide Wi-Fi infrastructure, scheduled for <b>June 21–22</b> (Saturday–Sunday).</p>
<p>The upgrade will provide <b>speeds up to 1Gbps</b> (10x current speeds) in all common areas, meeting rooms, and individual suites.</p>
<p>Internet service will be <b>intermittently unavailable</b> during the upgrade window. We recommend planning accordingly.</p>
<p>New network name: <b>OakwoodBiz-Pro</b> | Password will be distributed to all tenants by June 20.</p>`,
  questions:[
    {q:"Wi-Fiアップグレードはいつ実施されますか？",options:["6月19日〜20日","6月21日〜22日","6月23日〜24日","7月1日〜2日"],answer:1,explanation:"「scheduled for June 21–22」とあります。"},
    {q:"新しいWi-Fiの速度は現在の何倍になりますか？",options:["3倍","5倍","10倍","20倍"],answer:2,explanation:"「10x current speeds」とあります。"}
  ]
},
{
  genre:"email", genreLabel:"ビジネスメール",
  title:"Vendor Contract Renewal Request",
  meta:"Procurement — Halston Manufacturing",
  body:`<div class="email-header"><div><b>From:</b> procurement@halston-mfg.com</div><div><b>To:</b> Apex Packaging Solutions</div><div><b>Subject:</b> Contract Renewal — Reference #HPM-2024-08</div></div>
<p>Dear Ms. Okonkwo,</p>
<p>Our current supply contract (Ref. #HPM-2024-08) expires on <b>July 31, 2026</b>. We would like to <b>renew for an additional 24 months</b>.</p>
<p>We request your updated pricing schedule by <b>June 20</b> to allow sufficient time for internal review and sign-off. Last year's pricing was $0.48/unit for standard packaging.</p>
<p>If the renewed terms are acceptable, we anticipate a <b>15% increase in order volume</b> starting Q3 2026.</p>
<p>Please confirm receipt of this request at your earliest convenience.</p>`,
  questions:[
    {q:"現在の契約はいつ終了しますか？",options:["6月30日","7月1日","7月31日","8月31日"],answer:2,explanation:"「expires on July 31, 2026」とあります。"},
    {q:"Halstonは注文量をどのくらい増やす予定ですか？",options:["10%","15%","20%","25%"],answer:1,explanation:"「15% increase in order volume」とあります。"}
  ]
}
]; // END passages 26–50
