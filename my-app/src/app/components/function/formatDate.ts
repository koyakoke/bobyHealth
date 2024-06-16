
//日時の定義
  //型定義
  type dateArray = {
    year: number;
    month: number;
    date: number;
    dayOfWeek: number;
    currentWeekDay : string;
  }

export const makeDatePart = (): dateArray => {

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dayOfWeek = now.getDay();
  const currentWeekDay = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

  return {
    year : year
    ,month : month
    ,date : date
    ,dayOfWeek : dayOfWeek
    ,currentWeekDay : currentWeekDay
  };

};