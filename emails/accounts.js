const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendInvitationEmail = (name, email, locationId, invite) => {
  sgMail
    .send({
      to: email,
      from: 'ksmfou98@naver.com',
      subject: '알바로그: 직원초대',
      html: `<img src="https://user-images.githubusercontent.com/64634992/122313912-13b79b80-cf52-11eb-900a-a1d50bb073f9.png" /> <br> 안녕하세요, ${name}님. <br> <a href="https://albalog.netlify.app/parttime/${locationId}/${invite._id}/signup" to=_blank>링크</a>를 눌러 회원가입을 완료하세요 `,
    })
    .then(() => {
      console.log('message sent');
    })
    .catch((e) => {
      console.log(e.response.body);
    });
};

const sendLocationAddedEmail = (name, email, location) => {
  sgMail
    .send({
      to: email,
      from: 'ksmfou98@naver.com',
      subject: '알바로그: 직원초대',
      html: `안녕하세요, ${name}님. ${location.name} 매장에 정상적으로 등록되었습니다.`,
    })
    .then(() => {
      console.log('message sent');
    })
    .catch((e) => {
      console.log(e.response.body);
    });
};

const sendResetPasswordEmail = (name, email, tokenId) => {
  sgMail
    .send({
      to: email,
      from: 'ksmfou98@naver.com',
      subject: '알바로그: 비밀번호 변경',
      html: `안녕하세요, ${name}님. <br> <a href="https://albalog.netlify.app/reset_password/${tokenId}" to=_blank>링크</a>를 눌러 비밀번호를 변경하세요`,
    })
    .then(() => {
      console.log('message sent');
    })
    .catch((e) => {
      console.log(e.response.body);
    });
};
const sendAskLocationAddEmail = (name, email, location, invite) => {
  sgMail
    .send({
      to: email,
      from: 'ksmfou98@naver.com',
      subject: '알바로그: 직원초대',
      html: `안녕하세요, ${name}님. ${location.name} 매장에 등록을 원하시면 <a href="https://albalog.netlify.app/parttime/${location._id}/${invite._id}/join" to=_blank>링크</a>를 눌러 확인하세요.`,
    })
    .then(() => {
      console.log('message sent');
    })
    .catch((e) => {
      console.log(e.response.body);
    });
};

module.exports = {
  sendInvitationEmail,
  sendLocationAddedEmail,
  sendResetPasswordEmail,
  sendAskLocationAddEmail,
};
