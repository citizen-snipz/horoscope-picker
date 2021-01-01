//array of horscope objects

let horoscope = [
  {
    sign: "Aquarius",
    symbol: "♒",
    startMonth: "January",
    startDay: "20",
    endMonth: "February",
    endDay: "18",
    item: "Toilet Paper",
    message:
      "Many see you as an important part of their life, yet you are often taken for granted. When you stop being there for people, they will certainly take notice and panic at the idea of losing access to you. It’s important to make yourself available to anyone who needs you, but if you’re feeling depleted, it’s ok to place hard limits on others’ demands of you."
  },
  {
    sign: "Pisces",
    symbol: "♓",
    startMonth: "February",
    startDay: "19",
    endMonth: "March",
    endDay: "20",
    item: "Zoom",
    message:
      "You have a way of easily connecting people to each other, especially in unconventional times. You have modern, creative, and sometimes downright fun solutions that allow you to stay in touch with pretty much anyone. You often complain that you only have 40 minutes to spend with those who chat with you, but because you are built for social situations, you usually let people talk for as long as they want."
  },
  {
    sign: "Aries",
    symbol: "♈",
    startMonth: "March",
    startDay: "21",
    endMonth: "April",
    endDay: "19",
    item: "Pajamas",
    message:
      "You choose comfort over appearance nearly every time, but that doesn’t mean you can’t also be stylish! You don’t worry yourself with the business side of life, so long as people can only see your better half. Many people considered you a night owl before, but in these ever-changing times, you have quickly adapted to being visible at all times of day. You may not be the poster child of productivity, but your casual personality has massive appeal."
  },
  {
    sign: "Taurus",
    symbol: "♉",
    startMonth: "April",
    startDay: "20",
    endMonth: "May",
    endDay: "20",
    item: "Face mask",
    message:
      "All you want is safety for yourself and others. You are willing to sacrifice convenience and comfort if it means protecting people. For those with common sense, you are taken seriously — they know that not all important actions are fun or sexy. However, not everyone appreciates how effective you are at handling dangerous situations and find you to be invasive. Do your best to ignore those people. "
  },
  {
    sign: "Gemini",
    symbol: "♊",
    startMonth: "May",
    startDay: "21",
    endMonth: "June",
    endDay: "20",
    item: "Murder hornets",
    message:
      "Most people have heard of you, but you’re still quite mysterious to most. At first blush, many people find you unapproachable, if not a little scary. It’s important to show people that you are harmless so long as they do not try to aggravate you and give you adequate personal space. "
  },
  {
    sign: "Cancer",
    symbol: "♋",
    startMonth: "June",
    startDay: "21",
    endMonth: "July",
    endDay: "22",
    item: "Mail package",
    message:
      "You work hard to deliver the goods. You are great at giving people what they need, what they want, and what they thought they needed but don’t actually want now that they are sober. Once you have committed to a plan, you rely on others to help you swiftly reach your destination. You almost always follow through, but have a solid plan in place to overcome most mistakes. It is easy to feel important in your position, but don’t forget to share the glory with those that help you along the way!"
  },
  {
    sign: "Leo",
    symbol: "♌",
    startMonth: "July",
    startDay: "23",
    endMonth: "August",
    endDay: "22",
    item: "Ballot",
    message:
      "To the unsuspecting person, you seem innocuous and unexceptional. Your ability to collectivize with others like you makes you incredibly powerful, and sometimes life-changing. While you love gathering with others, you are also quite secretive. Remember that banding together is important, but you also count as an individual! "
  },
  {
    sign: "Virgo",
    symbol: "♍",
    startMonth: "August",
    startDay: "23",
    endMonth: "September",
    endDay: "22",
    item: "Take-out",
    message:
      "There’s a lot to love about you! You go out of your way to satisfy people. You are tasteful (usually) and you are there when people need you (even if you do get there a little later than expected). You allow people to experience things that they can’t/don’t want to make themselves, but you don’t judge people for that. Your presence does come at a price, but many are happy to foot the bill."
  },
  {
    sign: "Libra",
    symbol: "♎",
    startMonth: "September",
    startDay: "23",
    endMonth: "October",
    endDay: "22",
    item: "COVID test",
    message:
      "You are a bringer of truth and a lover of science. You are great at analyzing data and giving people a straight answer once you’ve reached a conclusion. The truth is uncomfortable, so not everyone appreciates the value you bring to society. Despite that, you often make yourself widely available to anyone who needs you, and don’t always ask for something in return."
  },
  {
    sign: "Scorpio",
    symbol: "♏",
    startMonth: "October",
    startDay: "23",
    endMonth: "November",
    endDay: "21",
    item: "Monolith",
    message:
      "No one really knows where you came from and no one really knows what to think of you. You are very bright, intriguing, and upstanding. You have the uncanny ability to show up the weirdest places, but you make a quick exit. Many try to imitate you with varying success."
  },
  {
    sign: "Sagittarius",
    symbol: "♐",
    startMonth: "November",
    startDay: "22",
    endMonth: "December",
    endDay: "21",
    item: "Protest sign",
    message:
      "You are passionate about social justice and are willing to shout it from the streets. You are willing to brave criticism and abuse if it means getting your message across and supporting all members of our society. You have a long history of activism and are effective at finding other passionate and caring people. Some will call you a threat to that status quo, but many others will acknowledge the important role you play in reforming a broken system and inspiring future generations to do the same (just like those who came before you)."
  },
  {
    sign: "Capricorn",
    symbol: "♑",
    startMonth: "December",
    startDay: "22",
    endMonth: "January",
    endDay: "19",
    item: "Netflix",
    message:
      "You only seem to get more popular with time. You thrive at keeping people entertained because you have a lot of interesting stories. Not all your ideas are great, but that doesn’t stop people from paying attention to you. Many people view you as a welcome distraction from a chaotic world and wonder how they coped before they met you. Especially in this time of lock-down, don’t forget to unplug every now and then."
  }
];
/*
1. gather input month and day from user dropdown
2. calculate user's zodiac sign based on day and month values
3. show proper zodiac name and symbol to zodiacSign
4. populate corresponding image to horoscopeImg
5. populate horoscopeDesc
*/

//DOM variables
const zodiacSign = document.getElementById("populateZodiacSign");
const horoscopeImg = document.getElementById("horoscopeImg");
const horoscopeDesc = document.getElementById("populateHoroscopeDescription");
const dropdownBtn = document.querySelector(".dropdownBtn");
let months = document.querySelectorAll(".months");
let days = document.querySelectorAll(".days");

dropdownBtn.addEventlistener("click", calcHoroscope);

function calcHoroscope() {
  months.forEach((month) => {
    days.forEach((day) => {
      if (
        (month.value === "January" && day.value <= 20) ||
        (month.value === "February" && day.value <= 18)
      ) {
        zodiacSign.innerHTML = `You are a ${aquarius.sign} ${aquarius.symbol}!`;
      }
    });
  });
}
