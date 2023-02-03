// export default () => {
//   console.log("talking");
// };
// بیشتر از یک مورد را نمی توان export default کرد
// هرجایی را که اکسپورت دیفالت کردیم، هنگام ایمپورت کردن لزومی ندارد آن را داخل کرلی بریس های باز و بسته بنویسیم
export default function Talk() {
  console.log("talking");
};
export const Walk = () => {
  console.log("walking");
};
