import React , {Component} from "react"
import { NavBar, Icon} from 'antd-mobile';
import "./index.scss"
import {history} from "../../../utils"

export class Xieyi extends Component{
    go(){
        history.go(-1)
    }
    render(){
        return(
            <div>
            <NavBar
                    mode="dark"
                    style={{background:"#FB7299",position:"fixed",top:0,left:0,width:"100%"}}
                    icon={<Icon type="cross-circle" />}
                    onLeftClick={this.go}
                >用户协议</NavBar>
            <div className="content-main">
                <h5>哔哩哔哩弹幕网用户使用协议</h5>
                <p style={{marginBottom: "30px"}}>更新时间：2018年11月9日</p>
                <p>本协议是用户（下称“用户”或“您”）与哔哩哔哩之间的协议，哔哩哔哩将按照本协议约定之内容为您提供服务。“哔哩哔哩”是指哔哩哔哩和/或其相关服务可能存在的运营关联单位。</p>
                <p>本协议内容同时包括《服务条款》和《隐私政策》，一并构成您（个人或者单位、组织、团体等）使用哔哩哔哩提供的相关服务的先决条件。<b>若您不同意本协议中所述任何条款或其后对协议条款的修改，可以暂停使用哔哩哔哩提供的相关服务。您的使用行为将视作对本协议全部条款的完全接受。请您仔细阅读本协议的全部条款与条件，尤其是协议中黑色加粗的条款。如您为未成年人，请在法定监护人的陪同下阅读和判断是否同意本协议。</b></p>

                <h6>第一部分 服务条款</h6>

                <p className="content_grade_1"><span className="content_order">1.</span>服务说明</p>
                <p className="content_grade_2"><span className="content_order">1.1</span>哔哩哔哩向您提供包括但不限于如下服务：</p>
                <p className="content_grade_3"><span className="content_order">1.1.1</span>哔哩哔哩主页 www.bilibili.com（及其他由哔哩哔哩运营的任何网站）；</p>
                <p className="content_grade_3"><span className="content_order">1.1.2</span>哔哩哔哩直接拥有或运营的包括但不限于PC、平板、手机、电视等全部终端客户端产品；</p>
                <p className="content_grade_3"><span className="content_order">1.1.3</span>哔哩哔哩用户个人中心、个人空间、硬币、钱包；</p>
                <p className="content_grade_3"><span className="content_order">1.1.4</span>哔哩哔哩直接拥有或运营的服务器、网络存储空间；</p>
                <p className="content_grade_3"><span className="content_order">1.1.5</span>哔哩哔哩提供给您的各类增值服务；</p>
                <p className="content_grade_3"><span className="content_order">1.1.6</span>哔哩哔哩提供给您的其他技术和/或服务。</p>
                <p className="content_grade_2 font_b"><span className="content_order">1.2</span>哔哩哔哩所提供的服务，均限于在哔哩哔哩平台内使用，任何以恶意破解等非法手段将哔哩哔哩所提供的服务与哔哩哔哩平台分离的行为，皆不属于本协议约定的由哔哩哔哩提供的服务。由此引起的一切后果由行为人负责，哔哩哔哩将保留依法追究行为人法律责任的权利。</p>
                <p className="content_grade_2 font_b"><span className="content_order">1.3</span>哔哩哔哩官方所公布的方式为注册、登录、下载客户端（包括但不限于iOS、Android等智能平台）、使用哔哩哔哩服务的唯一合法方式，用户通过其他任何途径、任何渠道、任何方式获取的哔哩哔哩服务（包括但不限于账号、硬币、客户端下载等）均为非法所得，哔哩哔哩概不承认其效力，且一经发现，哔哩哔哩有权立即作出删除、清零、封号等处理，任何因此导致的一切不利后果均由用户自行承担。请用户妥善保管自己的账号和密码，加强密码安全性，谨防账号泄露或被盗。因用户账号被泄露或被盗而造成的任何损失，哔哩哔哩不承担补偿责任。</p>
                <p className="content_grade_2 font_b"><span className="content_order">1.4</span>用户理解并认可哔哩哔哩享有如下权利，哔哩哔哩行使如下权利不视为违约，用户不追究或者豁免哔哩哔哩的相关法律责任：用户有权长期使用其合法获得的哔哩哔哩账号及其账号下硬币、标识、礼品等，但是用户确认其仅享有上述服务和产品的使用权，上述服务和产品，及其衍生物的所有权及知识产权均归哔哩哔哩所有（用户经合法渠道取得的实体产品所有权除外）。哔哩哔哩有权根据实际情况自行决定收回日期，无需另行通知用户亦无需征得用户同意。</p>
                <p className="content_grade_2"><span className="content_order">1.5</span>哔哩哔哩有权提前向用户公告（包括但不限于弹出公告、网站首页公告、系统消息）以修改、替换、升级与哔哩哔哩服务相关的任何软件。<b>如果用户不同意或者不接受哔哩哔哩相关软件的修改、替代、升级，请直接拒绝、停止、取消使用行为，否则视为用户同意并接受哔哩哔哩相关软件的修改、替代、升级，同时该同意并接受的行为仍受本协议约束。</b></p>

                <p className="content_grade_1"><span className="content_order">2.</span>用户注册</p>
                <p className="content_grade_1_1">如果您使用哔哩哔哩提供的网络存储空间进行视听节目、文字、美术摄影等的上传及传播服务，您需要注册一个账号并设置密码，并确保注册信息的真实性、正确性及完整性，如果上述注册信息发生变化，您应及时更改。在完成本服务的登记程序后，您应维护账号及密码的机密安全。<b>您应对任何人利用您的账号及密码所进行的活动完全负责，哔哩哔哩无法对非法或未经您授权使用您账号及密码的行为作出甄别，因此哔哩哔哩将不承担任何责任。</b>同时您同意并承诺做到：</p>
                <p className="content_grade_2"><span className="content_order">2.1</span>当您的账号或密码遭到未经授权的使用，或者发生任何安全问题时，您会立即有效地通知到哔哩哔哩；</p>
                <p className="content_grade_2"><span className="content_order">2.2</span>当您每次登录哔哩哔哩或使用相关服务后，会将有关账号等安全退出；</p>
                <p className="content_grade_2"><span className="content_order">2.3</span>您同意接受哔哩哔哩通过电子邮件、客户端、网页或其他合法方式向您发送通知信息和其他相关信息；</p>
                <p className="content_grade_2 font_b"><span className="content_order">2.4</span>您承诺不在注册、使用哔哩哔哩账号从事以下行为：</p>

                <p className="content_grade_3"><span className="content_order">2.4.1</span>故意冒用他人信息为自己注册哔哩哔哩账号；</p>
                <p className="content_grade_3"><span className="content_order">2.4.2</span>未经他人合法授权以他人名义注册哔哩哔哩账号；</p>
                <p className="content_grade_3"><span className="content_order">2.4.3</span>窃取、盗用他人的哔哩哔哩账号、硬币、会员标识等；</p>
                <p className="content_grade_3"><span className="content_order">2.4.4</span>使用侮辱、诽谤、色情、政治等违反法律、道德及公序良俗的词语注册哔哩哔哩账号；</p>
                <p className="content_grade_3"><span className="content_order">2.4.5</span>以非法占有哔哩哔哩相关服务资源为目的，通过正当或非正当手段恶意利用网站漏洞；</p>
                <p className="content_grade_3"><span className="content_order">2.4.6</span>侵犯他人合法权益的其他内容。</p>
                <p className="content_grade_2 font_b"><span className="content_order">2.5</span>您在此同意，哔哩哔哩有权对违反上述条款的用户作出禁止注册及/或封号的处理。</p>
                <p className="content_grade_2"><span className="content_order">2.6</span>您了解并知悉，您可以您的哔哩哔哩账号登陆哔哩哔哩及其关联方提供的哔哩哔哩体系下全部产品。</p>

                <p className="content_grade_1"><span className="content_order">3.</span>哔哩哔哩上的内容</p>
                <p className="content_grade_2"><span className="content_order">3.1</span>哔哩哔哩上的内容是指您在哔哩哔哩上传、传播的视频、音频或其他任何形式的内容，包括但不限于图像、文字、链接等。</p>
                <p className="content_grade_2"><span className="content_order">3.2</span>您在哔哩哔哩上传或发布的作品，您保证对其享有合法的著作权或相应授权，哔哩哔哩有权展示、散布及推广前述内容。</p>
                <p className="content_grade_2 font_b"><span className="content_order">3.3</span>为提高您内容曝光量及发布效率，您同意您在哔哩哔哩的账号所发布的全部内容均授权哔哩哔哩以您的账号自动同步发布至哔哩哔哩及/或关联公司运营的全部产品，包括客户端软件及网站。您在哔哩哔哩发布、修改、删除内容的操作，均会同步到上述产品。</p>
                <p className="content_grade_2"><span className="content_order">3.4</span>任何经由哔哩哔哩提供的服务，以上传、张贴、发送电子邮件或任何其他方式传送的资讯、资料、文字、软件、音乐、音讯、照片、图形、视讯、信息或其他资料（以下简称“内容”），无论系公开还是私下传送，均由内容提供者、上传者承担责任。</p>
                <p className="content_grade_2 font_b"><span className="content_order">3.5</span>哔哩哔哩无法预先知晓并合理控制经由哔哩哔哩服务上传之内容，因此，您已预知在使用哔哩哔哩的服务时，可能会接触到部分令您感到不快或不适的内容，您同意放弃由此产生的针对哔哩哔哩的任何追索权。但哔哩哔哩有权依法停止传输任何前述内容并采取相应处理，包括但不限于暂停您继续使用哔哩哔哩的部分或全部服务，保存有关记录并向有关机关报告。</p>
                <p className="content_grade_2 font_b"><span className="content_order">3.6</span>您需独立对自己在哔哩哔哩上实施的行为承担法律责任。若您使用哔哩哔哩服务的行为不符合本协议，哔哩哔哩有权作出独立处理，且在无需事先通知及/或征得用户同意的情况下停用您的账号。您若在哔哩哔哩上散布和传播反动、色情或其他违反国家法律、规定的信息，哔哩哔哩的系统记录可能作为您违反相关法律的证据。</p>

                <p className="content_grade_1"><span className="content_order">4.</span>使用规则</p>
                <p className="content_grade_2"><span className="content_order">4.1</span>用户在使用哔哩哔哩服务的过程中，应遵守以下法律法规：</p>
                <p className="content_grade_3"><span className="content_order">4.1.1</span>《中华人民共和国保守国家秘密法》</p>
                <p className="content_grade_3"><span className="content_order">4.1.2</span>《中华人民共和国著作权法》</p>
                <p className="content_grade_3"><span className="content_order">4.1.3</span>《中华人民共和国计算机信息系统安全保护条例》</p>
                <p className="content_grade_3"><span className="content_order">4.1.4</span>《计算机软件保护条例》</p>
                <p className="content_grade_3"><span className="content_order">4.1.5</span>《互联网电子公告服务管理规定》</p>
                <p className="content_grade_3"><span className="content_order">4.1.6</span>《信息网络传播权保护条例》</p>
                <p className="content_grade_3"><span className="content_order">4.1.7</span>《中华人民共和国网络安全法》</p>
                <p className="content_grade_3"><span className="content_order">4.1.8</span>其他有关计算机及互联网规定的法律、法规。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.2</span>在任何情况下，哔哩哔哩一旦合理地认为用户的行为可能违反上述法律、法规，可以在任何时候，不经事先通知终止向该用户提供服务。</p>
                <p className="content_grade_2"><span className="content_order">4.3</span>禁止用户从事以下行为：</p>
                <p className="content_grade_3"><span className="content_order">4.3.1</span>制作、上传、复制、传送、传播包含任何反对宪法所确定的基本原则、危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一、破坏民族团结、损害国家荣誉和利益、煽动民族仇恨、民族歧视、破坏民族团结、破坏国家宗教政策、宣扬邪教和封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪、侮辱或者诽谤他人，侵害他人合法权益的等法律、行政法规禁止的内容或其他令人反感的包括但不限于资讯、资料、文字、软件、音乐、照片、图形、信息或其他资料；</p>
                <p className="content_grade_3"><span className="content_order">4.3.2</span>以任何方式危害未成年人；</p>
                <p className="content_grade_3"><span className="content_order">4.3.3</span>冒充任何人或机构，或以虚伪不实的方式谎称或使人误认为与任何人或任何机构有关；</p>
                <p className="content_grade_3"><span className="content_order">4.3.4</span>伪造标题或以其他方式操控识别资料，使人误认为该内容为哔哩哔哩所传送；</p>
                <p className="content_grade_3"><span className="content_order">4.3.5</span>将无权传送的内容（例如内部资料、机密资料）进行上载、张贴、发送电子邮件或以其他方式传送；</p>
                <p className="content_grade_3"><span className="content_order">4.3.6</span>将侵犯任何人的专利、商标、著作权、商业秘密等知识产权的内容加以上载、张贴、发送电子邮件或以其他方式传送；</p>
                <p className="content_grade_3"><span className="content_order">4.3.7</span>将广告函件、促销资料、"垃圾邮件"等，加以上载、张贴、发送电子邮件或以其他方式传送；</p>
                <p className="content_grade_3"><span className="content_order">4.3.8</span>跟踪或以其他方式骚扰他人；</p>
                <p className="content_grade_3"><span className="content_order">4.3.9</span>将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料，加以上载、张贴、发送电子邮件或以其他方式传送；</p>
                <p className="content_grade_3"><span className="content_order">4.3.10</span>干扰或破坏哔哩哔哩服务或与哔哩哔哩服务相连的服务器和网络，或不遵守本协议之规定；</p>
                <p className="content_grade_3"><span className="content_order">4.3.11</span>故意或非故意违反任何相关的中国法律、法规、规章、条例等其他具有法律效力的规范；</p>
                <p className="content_grade_3"><span className="content_order">4.3.12</span>用户需保证其上传内容不得违反广电总局的相关规定，包括但不限于《互联网视听节目服务管理规定》（广电总局56号令）等，其上传节目应当符合法律、行政法规、部门规章的规定，上传内容不得含有以下内容：</p>
                <p className="content_grade_4">（1） 反对宪法确定的基本原则的；</p>
                <p className="content_grade_4">（2） 危害国家统一、主权和领土完整的；</p>
                <p className="content_grade_4">（3） 泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；</p>
                <p className="content_grade_4">（4） 煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；</p>
                <p className="content_grade_4">（5） 扰乱社会秩序，破坏社会稳定的；</p>
                <p className="content_grade_4">（6） 诱导未成年人违法犯罪和渲染暴力、色情、赌博、恐怖活动的；</p>
                <p className="content_grade_4">（7） 侮辱或者诽谤他人，侵害公民个人隐私等他人合法权益的；</p>
                <p className="content_grade_4">（8） 危害社会公德，损害民族优秀文化传统的；</p>
                <p className="content_grade_4">（9） 有关法律、行政法规和国家规定禁止的其他内容。</p>
                <p className="content_grade_3 font_b"><span className="content_order">4.3.13</span>如用户提供的上传内容含有以上违反政策法律法规的信息或者内容的，由用户直接承担以上导致的一切不利后果，如因此给哔哩哔哩造成不利后果的，用户应负责消除影响，并且赔偿因此导致的一切损失。</p>
                <p className="content_grade_2"><span className="content_order">4.4</span>用户不得通过任何渠道或媒体（包括但不限于自媒体等）发出“与哔哩哔哩合作”、“与哔哩哔哩共同出品”等任何携带“哔哩哔哩”品牌的字样，如用户需宣传推广合作节目，用户只能在宣传中提及节目本身而不得提及与哔哩哔哩关系或者擅自以哔哩哔哩品牌进行推广，凡是用户的发稿带有“哔哩哔哩”的一切宣传稿件必须通过哔哩哔哩相应合作部门之书面同意，否则因此给哔哩哔哩造成的一切损失用户应予以赔偿。</p>
                <p className="content_grade_2"><span className="content_order">4.5</span>硬币使用规则</p>
                <p className="content_grade_3"><span className="content_order">4.5.1</span>若无特殊说明，用户通过使用硬币服务获得的硬币、兑换物品等虚拟产品，具体使用方法、期限等以哔哩哔哩页面中附带的说明及用户指南或具备以上解说性质的类似官方文档为准。</p>
                <p className="content_grade_3"><span className="content_order">4.5.2</span>硬币系统会因用户需求、网站策略调整、用户接受程度等因素随时进行调整，具体信息请以当时的页面说明为准。</p>
                <p className="content_grade_3"><span className="content_order">4.5.3</span>硬币系统是哔哩哔哩向用户提供的免费服务，硬币的使用、消耗、兑换、抽奖等行为均不提供发票或其他票据证明。</p>
                <p className="content_grade_3"><span className="content_order">4.5.4</span>基于虚拟商品的性质和特征，哔哩哔哩不提供硬币兑换的虚拟商品的退货、换货服务。对于实物产品，因用户原因导致产品出现瑕疵、损坏的，哔哩哔哩不予负责。</p>
                <p className="content_grade_3"><span className="content_order">4.5.5</span>除非得到哔哩哔哩的书面授权，用户不得将硬币服务及硬币用于商业领域，包括但不限于买卖、置换、抵押或以特定方式使用硬币服务获取不当得利等。任何用户都应通过正规渠道获得硬币服务，一切通过非官方公布渠道取得的硬币及其衍生服务均不对哔哩哔哩发生法律效力，哔哩哔哩有权单方面收回相关硬币并终止相应服务，严重者哔哩哔哩有权对其用户采取封号处理。</p>
                <p className="content_grade_3"><span className="content_order">4.5.6</span>如无特殊约定，用户通过正规渠道获得的硬币及其衍生物品均不以任何现金方式退还，仅能通过享用硬币服务进行等值消耗。用户消耗其所获得全部硬币，且不将继续使用硬币服务的，服务终止。</p>

                <p className="content_grade_1 font_b"><span className="content_order">5.</span>第三方链接</p>
                <p className="content_grade_1_1 font_b">哔哩哔哩服务可能会提供与其他国际互联网网站或资源进行链接。除非另有声明，哔哩哔哩无法对第三方网站之服务进行控制，用户因使用或依赖上述网站或资源所产生的损失或损害，哔哩哔哩不承担任何责任。</p>

                <p className="content_grade_1"><span className="content_order">6.</span>知识产权</p>
                <p className="content_grade_2"><span className="content_order">6.1</span>受国际版权公约、中华人民共和国著作权法、专利法、及其他知识产权方面的法律法规的保护，哔哩哔哩服务及本服务所使用的软件、技术、商标、材料等的所有知识产权归哔哩哔哩所有和享有。“知识产权”包括在专利法、版权法、商标法、反不正当竞争法中等法律规定的任何和所有权利、任何和所有其它所有权以及其中的任何和所有应用、更新、扩展和恢复。</p>
                <p className="content_grade_2"><span className="content_order">6.2</span>用户不得修改、改编、翻译哔哩哔哩服务所使用的软件、技术、材料等，或者创作与之相关的派生作品，不得通过反向工程、反编译、反汇编或其他类似行为获得其的源代码，否则由此引起的一切法律后果由用户负责，哔哩哔哩将依法追究违约方的法律责任。</p>
                <p className="content_grade_2"><span className="content_order">6.3</span>用户不得恶意修改、复制、传播哔哩哔哩服务所使用的软件、技术、材料等。否则，用户自行承担因此而造成对其他人的损害，或者造成对哔哩哔哩公司形象损害，要承担相应的法律责任。</p>
                <p className="content_grade_2"><span className="content_order">6.4</span>用户不得擅自删除、掩盖或更改哔哩哔哩的版权声明、商标或其它权利声明。哔哩哔哩平台所有设计图样以及其他图样、产品及服务名称，均为哔哩哔哩及/或其关联公司所享有的商标、标识。任何人不得使用、复制或用作其他用途。</p>
                <p className="content_grade_2"><span className="content_order">6.5</span>哔哩哔哩对其自制内容和其他通过授权取得的独占内容享有完全知识产权，未经哔哩哔哩许可，任何单位和个人不得私自转载、传播和提供观看服务或者有其他侵犯哔哩哔哩知识产权的行为。否则，哔哩哔哩将追究侵权行为人的法律责任。</p>
                <p className="content_grade_2"><span className="content_order">6.6</span>哔哩哔哩所有和享有的知识产权，不因用户的任何使用行为而发生权利转移。</p>

                <p className="content_grade_1 font_b"><span className="content_order">7.</span>免责声明</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.1</span>哔哩哔哩对于任何包含、经由或连接、下载或从任何与有关本网络服务所获得的任何内容、信息或广告，不声明或保证其正确性或可靠性；并且对于用户经本服务上的广告、展示而购买、取得的任何产品、信息或资料，哔哩哔哩不负保证责任。用户自行负担使用本服务的风险。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.2</span>除非另有明确的书面说明，哔哩哔哩提供给您的全部产品和服务，均是在“按现状”和“按现有”的基础上提供的。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.3</span>哔哩哔哩对如下事项不做担保（包括但不限于）：</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.3.1</span>哔哩哔哩提供的网站、客户端等软件虽然均已经过哔哩哔哩测试，但由于技术本身的局限性，哔哩哔哩不能保证其与其他软硬件、系统完全兼容。如果出现不兼容的情况，用户可将情况报告哔哩哔哩，以获得技术支持。如果无法解决问题，用户可以选择卸载、停止使用哔哩哔哩服务。</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.3.2</span>使用哔哩哔哩服务涉及到Internet服务，可能会受到各个环节不稳定因素的影响。因不可抗力、黑客攻击、系统不稳定、网络中断、用户关机、通信线路等原因，均可能造成哔哩哔哩服务中断或不能满足用户要求的情况。哔哩哔哩不保证哔哩哔哩服务适合用户的使用要求。</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.3.3</span>由于哔哩哔哩提供的客户端等软件可以通过网络途径下载、传播，因此对于从非哔哩哔哩指定官方站点下载、非哔哩哔哩指定途径获得的哔哩哔哩服务相关软件，哔哩哔哩无法保证其是否感染计算机病毒、是否隐藏有伪装的木马程序等黑客软件，也不承担用户由此遭受的一切直接或间接损害赔偿等法律责任。</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.3.4</span>哔哩哔哩不做任何与哔哩哔哩服务、产品的安全性、可靠性、及时性和性能有关的担保。</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.3.5</span>哔哩哔哩不保证其提供的任何产品、服务或其他材料符合用户的期望。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.4</span>用户使用经由哔哩哔哩服务下载或取得的任何资料，其风险由用户自行负担，因该使用而导致用户电脑系统损坏或资料流失，用户应负完全责任。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.5</span>基于以下原因而造成的利润、商业信誉、资料损失或其他有形或无形损失，哔哩哔哩不承担任何直接、间接、附带、衍生或惩罚性的赔偿：</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.5.1</span>哔哩哔哩服务全部或部分无法使用；</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.5.2</span>经由哔哩哔哩服务购买或取得的任何产品、资料或服务；</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.5.3</span>用户资料遭到未授权的使用或修改；</p>
                <p className="content_grade_3 font_b"><span className="content_order">7.5.4</span>其他与哔哩哔哩服务相关的事宜。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.6</span>用户应妥善保管自己的账号和密码，加强密码安全性，谨防账号泄露或被盗。因用户账号被泄露或被盗而造成的任何损失，哔哩哔哩不承担补偿责任。用户因电信和网通部门的通讯线路故障、网络或电脑故障、系统不稳定、不可抗力（如服务器宕机）等非哔哩哔哩原因造成账号、账号内财产等丢失、减少的，哔哩哔哩不承担补偿等责任。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.7</span>用户理解并同意自主选择免费下载和使用哔哩哔哩服务，风险自负，包括但不限于用户使用哔哩哔哩服务过程中的行为，以及因使用哔哩哔哩服务产生的一切后果。如因下载或使用哔哩哔哩服务而对计算机系统造成的损坏或数据的丢失等，用户须自行承担全部责任。</p>

                <p className="content_grade_1 font_b"><span className="content_order">8.</span>服务终止</p>
                <p className="content_grade_2 font_b"><span className="content_order">8.1</span>您同意哔哩哔哩有权基于自行考虑，因任何理由，包括但不限于缺乏使用或哔哩哔哩认为您已经违反本协议的条款及精神，而终止您的账号或服务的全部或任何部分，并将您在哔哩哔哩服务内的任何内容进行移除并删除。</p>
                <p className="content_grade_2 font_b"><span className="content_order">8.2</span>您同意本协议任何规定提供之服务，无需进行任何事先通知即可中断或终止。您承认并同意，哔哩哔哩可立即关闭或删除您的账号及账号中所有相关信息及文件，及/或禁止继续使用前述文件或哔哩哔哩的服务。</p>
                <p className="content_grade_2 font_b"><span className="content_order">8.3</span>哔哩哔哩采取以上行为均不需要进行通知，并且对用户和任何第三人均不承担责任。</p>

                <p className="content_grade_1"><span className="content_order">9.</span>注销 </p>
                <p className="content_grade_2"><span className="content_order">9.1</span>除哔哩哔哩根据本协议、各站内规则及相关法律法规注销用户的账号外，用户可向哔哩哔哩提出注销申请，如用户向哔哩哔哩提出账号注销申请的，账号需符合以下条件，并通过人工服务予以注销：</p>
                <p className="content_grade_3"><span className="content_order">9.1.1</span>账号系用户本人的会员账号；</p>
                <p className="content_grade_3"><span className="content_order">9.1.2</span>账号无归属权争议；</p>
                <p className="content_grade_3"><span className="content_order">9.1.2</span>账号未封禁、封停；</p>
                <p className="content_grade_3"><span className="content_order">9.1.2</span>向客服出示其要求您提供的、与该账号相关的其他信息，具体以客服要求为准。</p>
                <p className="content_grade_2 font_b"><span className="content_order">9.2</span>您已充分知晓并确认，账号注销后该UID仍然存在，但您将不再拥有账号相关的权益，包括但不限于：</p>
                <p className="content_grade_3"><span className="content_order">9.2.1</span>账号注销后将无法在哔哩哔哩继续使用该账号，且不可恢复；</p>
                <p className="content_grade_3"><span className="content_order">9.2.2</span>账号信息（头像、昵称、签名等）、账号中的B币、会员权益（含大会员）等将被清空，且无法恢复；</p>
                <p className="content_grade_3"><span className="content_order">9.2.3</span>账号的交易记录将被清空且无法恢复；</p>
                <p className="content_grade_3"><span className="content_order">9.2.4</span>账号注销后，哔哩哔哩有权不再为用户提供任何与账号有关的服务。</p>
                <p className="content_grade_2"><span className="content_order">9.3</span>账号注销通过人工客服方式完成，如您向哔哩哔哩客服提出账号注销申请，经核实存在以下情形的，哔哩哔哩有权拒绝用户的注销申请：</p>
                <p className="content_grade_3"><span className="content_order">9.3.1</span>账号中有您发起的但尚未完成的抽奖活动；</p>
                <p className="content_grade_3"><span className="content_order">9.3.2</span>账号有尚未完成的交易；</p>
                <p className="content_grade_3"><span className="content_order">9.3.3</span>账号有正在进行的业务（如申请找密码、修改手机号等）；</p>
                <p className="content_grade_3"><span className="content_order">9.3.4</span>账号与哔哩哔哩部分业务存在合约关系且尚在合约期的（如签约主播等）；</p>
                <p className="content_grade_3"><span className="content_order">9.3.5</span>账号有其他不符合注销账号的情形。</p>
                <p className="content_grade_2"><span className="content_order">9.4</span>用户注销账号的，应向客服提出申请，经过哔哩哔哩审核确认后，由客服予以操作注销。</p>
                <p className="content_grade_2 font_b"><span className="content_order">9.5</span>因注销账号所带来的不便或不利后果，由用户自行承担。</p>

                <h6>第二部分 隐私政策</h6>
                <p>哔哩哔哩注重保护用户的个人信息及个人隐私。本隐私政策解释了用户（“您”）个人信息收集（以下或称“信息”）和使用的有关情况，本隐私政策适用于哔哩哔哩向您提供的所有服务。<b>如果您不同意本隐私政策的任何内容，您应立即停止使用哔哩哔哩相关服务。当您使用哔哩哔哩提供的任一服务时，即表示您已同意哔哩哔哩按照本隐私政策来使用和保护您的个人信息。</b></p>

                <p className="content_grade_1 font_b"><span className="content_order">1.</span>您个人信息的收集</p>
                <p className="content_grade_1_1">哔哩哔哩提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法注册成为哔哩哔哩的用户或无法享受哔哩哔哩提供的某些服务，或无法达到相关服务拟达到的效果。<b>哔哩哔哩收集信息的种类如下：</b></p>
                <p className="content_grade_2"><span className="content_order">1.1</span>您向哔哩哔哩提供的信息</p>
                <p className="content_grade_2_1"> 当您注册哔哩哔哩账户及您在使用相关哔哩哔哩服务时填写、提交及/或其他任何方式提供的信息，包括您的姓名、性别、出生年月日、身份证号码、护照姓、护照名、护照号码、电话号码、电子邮箱、收货地址或网银在线账号、银行卡信息及相关附加信息（如您地址中的所在的省份和城市、邮政编码等）。</p>
                <p className="content_grade_2 font_b"><span className="content_order">1.2</span>哔哩哔哩在您使用服务过程中获得的信息</p>
                <p className="content_grade_2_1 font_b">为了提高服务质量和用户体验，哔哩哔哩会留存您使用服务以及使用方式的相关信息，这类信息包括：</p>
                <p className="content_grade_3"><span className="content_order">1.2.1</span><b>您的浏览器和计算机上的信息。</b>在您访问哔哩哔哩网站或使用哔哩哔哩服务时，哔哩哔哩系统自动接收并记录的您的浏览器和计算机上的信息（包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据）。</p>
                <p className="content_grade_3"><span className="content_order">1.2.2</span><b>您的位置信息。</b>当您下载或使用哔哩哔哩开发的客户端应用程序，或访问移动网页使用哔哩哔哩服务时，哔哩哔哩可能会读取您的位置（大多数移动设备将允许您关闭定位服务，具体建议您联系您的移动设备的服务商或生产商）。</p>
                <p className="content_grade_3"><span className="content_order">1.2.3</span><b>您的设备信息。</b>包括但不限于您的硬件型号、操作系统版本号、国际移动设备识别码（IMEI）、网络设备硬件地址（MAC）、IP地址、软件版本号、网络接入方式及类型、操作日志等信息。请您了解，这些信息是哔哩哔哩提供服务和保障产品正常运行所必须收集的基本信息。</p>
                <p className="content_grade_3 font_b"><span className="content_order">1.2.4</span>为实现产品功能而收集的相关信息。哔哩哔哩的产品和服务具有众多附加功能，当您选择使用附加功能时，哔哩哔哩可能需要获取您的相关信息，以便为您开通该功能；例如您发布音视频或进行直播时，哔哩哔哩会请求您授权相机、照片、麦克风等敏感权限，您在哔哩哔哩上订购漫展或演唱会等相关票务产品并需要时间提醒服务时，哔哩哔哩可能会请求您授权时钟、日历等权限。您如果拒绝授权提供，将无法使用此功能，但不影响你正常使用哔哩哔哩的其他功能。</p>
                <p className="content_grade_3"><span className="content_order">1.2.5</span><b>您的行为或交易信息。</b>哔哩哔哩可能会记录您访问哔哩哔哩或使用哔哩哔哩服务时所进行的操作以及您在哔哩哔哩网站上进行交易的相关信息。</p>
                <p className="content_grade_3"><span className="content_order">1.2.6</span>除上述信息外，哔哩哔哩还可能为了提供服务及改进服务质量的合理需要而获得的您的其他信息，包括您与哔哩哔哩的客服团队联系时您提供的相关信息，您参与问卷调查时向哔哩哔哩发送的问卷答复信息，以及您与哔哩哔哩之间互动时哔哩哔哩获得的相关信息。</p>
                <p className="content_grade_3"><span className="content_order">1.2.7</span>为提高您使用哔哩哔哩提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，哔哩哔哩可能会通过了解一些您的网络使用习惯、您常用的软件信息等手段来判断您账户的风险，并可能会记录一些哔哩哔哩认为有风险的链接（“URL”）。</p>
                <p className="content_grade_2"><span className="content_order">1.3</span>来自第三方的信息</p>
                <p className="content_grade_2_1">您注册哔哩哔哩账户和使用服务过程中，您授权的哔哩哔哩可向哔哩哔哩的关联方、合作伙伴所收集的相关信息，以及您授权的哔哩哔哩的关联方、合作伙伴可向哔哩哔哩分享相关的信息。这些信息包括但不限于您的身份信息、行为信息、交易信息、设备信息等，哔哩哔哩会将此类信息汇总，用于帮助哔哩哔哩向您提供更好以及更加个性化的服务或更好的预防互联网欺诈。</p>
                <p className="content_grade_2 font_b"><span className="content_order">1.4</span>依法无需征得您的授权而使用您的信息</p>
                <p className="content_grade_2_1">根据相关法律法规规定，以下情形中收集您的个人信息无需征得您的授权同意：</p>
                <p className="content_grade_3"><span className="content_order">1.4.1</span>与国家安全、国防安全有关的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.2</span>与公共安全、公共卫生、重大公共利益有关的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.3</span>与犯罪侦查、起诉、审判和判决执行等有关的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.4</span>出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.5</span>所收集的个人信息是您自行向社会公众公开的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.6</span>从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；</p>
                <p className="content_grade_3"><span className="content_order">1.4.7</span>根据您的要求签订合同所必需的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.8</span>用于维护哔哩哔哩产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；</p>
                <p className="content_grade_3"><span className="content_order">1.4.9</span>为合法的新闻报道所必需的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.10</span>学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</p>
                <p className="content_grade_3"><span className="content_order">1.4.11</span>法律法规规定的其他情形。</p>

                <p className="content_grade_1 font_b">您了解并同意，以下信息不适用本隐私政策：</p>
                <p className="content_grade_2 font_b">（1）您在使用哔哩哔哩提供的搜索服务时输入的关键字信息；</p>
                <p className="content_grade_2 font_b">（2）信用评价、违反法律法规规定或违反哔哩哔哩平台规则行为及哔哩哔哩已对您采取的措施；</p>
                <p className="content_grade_2 font_b">（3）应法律法规要求需公示的企业名称等相关工商注册信息以及自然人的信息。</p>
                <p className="content_grade_2 font_b">（4）其他您与哔哩哔哩所签署的协议以及哔哩哔哩平台规则中明确约定或提示您不适用本隐私政策的与您有关的信息。</p>

                <p className="content_grade_1 font_b"><span className="content_order">2.</span>您个人信息的披露</p>
                <p className="content_grade_2 font_b"><span className="content_order">2.1</span>个人信息的公开披露</p>
                <p className="content_grade_2_1 font_b">除对违规账号、欺诈等行为进行处罚公告时，哔哩哔哩会披露相关账号的必要信息外，哔哩哔哩不会公开披露您的信息，除非遵循国家法律法规规定或者获得您的自主选择同意。哔哩哔哩公开披露您的个人信息会采用符合行业内标准的安全保护措施。</p>
                <p className="content_grade_2 font_b"><span className="content_order">2.2</span>无需征得授权而公开披露您的个人信息</p>
                <p className="content_grade_2_1 font_b">请您理解，在以下情形中，根据法律法规及国家标准，哔哩哔哩公开披露您的个人信息无需征得你的授权同意：</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.1</span>与国家安全、国防安全直接相关的；</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.2</span>与公共安全、公共卫生、重大公共利益直接相关的；</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.3</span>与犯罪侦查、起诉、审判和判决执行等直接相关的；</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.4</span>出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您的同意的；</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.5</span>您已自行向社会公众公开的个人信息；</p>
                <p className="content_grade_3 font_b"><span className="content_order">2.2.6</span>从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</p>

                <p className="content_grade_1 font_b"><span className="content_order">3.</span>哔哩哔哩对您个人信息的使用和保护</p>
                <p className="content_grade_1_1 font_b">为向您提供服务、提升哔哩哔哩的服务质量以及优化您的服务体验，哔哩哔哩会在符合法律规定或根据您授权的情况下使用您的个人信息，并主要用于下列用途：</p>
                <p className="content_grade_2"><span className="content_order">3.1</span>向您提供您使用的各项服务，并维护、改进这些服务。</p>
                <p className="content_grade_2"><span className="content_order">3.2</span>向您推荐您可能感兴趣的内容，或通过系统向您展示个性化的信息，或在征得您同意的情况下与哔哩哔哩的关联方及合作伙伴共享信息以便他们向您发送有关您可能感兴趣的信息。如您不希望接收上述信息，可通过相应的退订功能进行退订。</p>
                <p className="content_grade_2"><span className="content_order">3.3</span>哔哩哔哩可能使用您的个人信息以验证身份、预防、发现、调查欺诈、危害安全、非法或违反与哔哩哔哩或关联方协议、政策或规则的行为，以保护您、其他哔哩哔哩用户，或哔哩哔哩或其关联方的合法权益。</p>
                <p className="content_grade_2"><span className="content_order">3.4</span>哔哩哔哩可能会将来自某项服务的个人信息与来自其他服务所获得的信息结合起来，用于为了给您提供更加个性化的服务使用。</p>
                <p className="content_grade_2"><span className="content_order">3.5</span>哔哩哔哩可能会对提供的服务使用情况进行统计，并可能会与公众或第三方分享这些统计信息，以展示哔哩哔哩的服务的整体使用趋势。但这些统计信息不包含您的任何身份识别信息。</p>
                <p className="content_grade_2"><span className="content_order">3.6</span>邀请您参与有关哔哩哔哩产品及服务的调查。</p>
                <p className="content_grade_2"><span className="content_order">3.7</span>经您同意或授权的其他用途。</p>

                <p className="content_grade_1 font_b"><span className="content_order">4.</span>哔哩哔哩可能分享的信息</p>
                除以下情形外，未经您同意，哔哩哔哩以及哔哩哔哩的关联公司不会与任何第三方分享您的个人信息：
                <p></p>
                <p className="content_grade_2 font_b"><span className="content_order">4.1</span>征得您的同意或授权。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.2</span>根据法律法规的规定或行政或司法机构的要求。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.3</span>出于实现“哔哩哔哩对您个人信息的使用和保护”部分所述目的，或为履行哔哩哔哩在您与哔哩哔哩所签署的协议以及哔哩哔哩平台规则中的义务和行使哔哩哔哩的权利。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.4</span>如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能产生的权利纠纷。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.5</span>只有共享您的信息，才能提供您需要的服务，或处理您与他人的纠纷或争议。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.6</span>您出现违反中国有关法律、法规规定或者违反您与哔哩哔哩签署的相关协议或违反相关哔哩哔哩平台规则时需要向第三方披露的情形。</p>
                <p className="content_grade_2 font_b"><span className="content_order">4.7</span>为维护哔哩哔哩及其关联方及合作伙伴或其他用户的合法权益。</p>
                　　
                <p className="content_grade_1"><span className="content_order">5.</span>您个人信息的安全</p>
                <p className="content_grade_2"><span className="content_order">5.1</span>哔哩哔哩仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。</p>
                <p className="content_grade_2 font_b"><span className="content_order">5.2</span>哔哩哔哩使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，哔哩哔哩将利用加密技术（例如SSL）来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因哔哩哔哩可控范围外的因素而出现问题。</p>
                <p className="content_grade_2 font_b"><span className="content_order">5.3</span>请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是你的账户及密码发生泄露，请您立即联络哔哩哔哩的客服，以便采取相应措施。</p>

                <p className="content_grade_1"><span className="content_order">6.</span>访问和更新您的个人信息</p>
                <p className="content_grade_1_1">您可以查阅或更新您提交给哔哩哔哩的个人信息。一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别的考虑，您可能无法修改注册哔哩哔哩用户或某种特定服务时提供的初始注册信息或其他验证信息。如某种特定服务要求您无法修改您所提供的初始信息，哔哩哔哩会在您注册或准备使用该种服务时给予您相应的提示。</p>

                <p className="content_grade_1"><span className="content_order">7.</span>哔哩哔哩可能如何收集信息</p>
                <p className="content_grade_1_1">哔哩哔哩或哔哩哔哩的关联方及合作伙伴，可能通过cookies和web beacon收集和使用您的信息，并将该等信息储存为日志信息。<b>哔哩哔哩使用自己的cookies和web
                    beacon，目的是为您提供更个性化的用户体验和服务，并用于以下用途：</b></p>
                <p className="content_grade_2"><span className="content_order">7.1</span><b>记住您的身份。</b>例如：cookies和web
                beacon有助于我们辨认您作为哔哩哔哩的注册用户的身份，或保存您向哔哩哔哩提供的有关您的喜好或其他信息；</p>
                <p className="content_grade_2"><span className="content_order">7.2</span><b>分析您使用哔哩哔哩服务的情况。</b>例如，哔哩哔哩可能利用cookies和web
                beacon来了解您使用哔哩哔哩的服务进行什么活动，或哪些内容或服务最受您的欢迎；</p>
                <p className="content_grade_2"><span className="content_order">7.3</span><b>广告优化。</b>Cookies和web
                beacon有助于哔哩哔哩根据您的信息，向您提供与您相关的广告而非进行普遍的广告投放。</p>
                <p className="content_grade_2 font_b"><span className="content_order">7.4</span>哔哩哔哩的产品和服务上可能会有广告商或其他合作方放置的cookies和web
                beacon。这些cookies和web
                beacon可能会收集与您相关的非个人身份信息，以用于分析用户如何使用该等服务、向您发送您可能感兴趣的广告，或用于评估广告服务的效果。这些第三方cookies和web
                beacon收集和使用该等信息，不受本《隐私政策》约束，而是受相关使用者的隐私政策约束，哔哩哔哩不对第三方的cookies或web beacon承担责任。</p>
                <p className="content_grade_2"><span className="content_order">7.5</span>您可以通过浏览器设置拒绝或管理cookies或web beacon。<b>但请注意，如果停用cookies或web
                    beacon，您有可能无法享受最佳的服务体验，某些服务也可能无法正常使用。同时，您还会收到同样数量的广告，但这些广告与您的相关性会降低。</b></p>

                <p className="content_grade_1 font_b"><span className="content_order">8.</span>未成年人使用哔哩哔哩服务</p>
                <p className="content_grade_1_1 font_b">哔哩哔哩鼓励父母或监护人指导未满十八岁的未成年人使用哔哩哔哩的服务。哔哩哔哩建议未成年人鼓励他们的父母或监护人阅读本协议及本隐私政策，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。</p>

                <h6>第三部分 附则</h6>
                <p className="content_grade_1"><span className="content_order">1.</span>法律适用和管辖</p>
                <p className="content_grade_2"><span className="content_order">1.1</span>本协议的生效、履行、解释及争议的解决均适用中华人民共和国法律。本条款因与中华人民共和国现行法律相抵触而导致部分无效，不影响其他部分的效力。</p>
                <p className="content_grade_2"><span className="content_order">1.2</span>如就本协议内容或其执行发生任何争议，应尽量友好协商解决；协商不成时，则争议各方均一致同意将争议提交青岛仲裁委员会按照其仲裁规则在上海进行仲裁。仲裁裁决为一裁终局，对各方均有法律约束力。</p>
                <p className="content_grade_1"><span className="content_order">2.</span>协议的修改与通知</p>
                <p className="content_grade_2"><span className="content_order">2.1</span>哔哩哔哩有权依据国家政策、技术条件、产品功能等变化需要而对本协议进行修改并将修改后的协议予以发布。</p>
                <p className="content_grade_2"><span className="content_order">2.2</span>前述内容一经正式发布，哔哩哔哩将以适当的方式（包括但不限于弹窗、邮件、站内信、网站公告等）提醒您更新的内容，以便您及时了解本协议的最新版本。</p>
                <p className="content_grade_2 font_b"><span className="content_order">2.3</span>修改后的内容将构成本协议不可分割的组成部分，您应同样遵守。您对修改后的协议有异议的，请立即停止登录、使用哔哩哔哩及相关服务，若您登录或继续使用哔哩哔哩及相关服务，则视为您认可修改后的协议。</p>
            </div>
            </div>
        )
    }
}