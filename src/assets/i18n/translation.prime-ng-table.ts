export const translationsPrimeNgTable:any = {
    ar: {
      startsWith: "يبدأ بـ",
      contains: "يحتوي على",
      notContains: "لا يحتوي على",
      endsWith: "ينتهي بـ",
      equals: "يساوي",
      notEquals: "لا يساوي",
      clear: "مسح",
      apply: "تطبيق",
      matchAll: "مطابقة الكل",
      matchAny: "مطابقة أي",
      addRule: "إضافة قاعدة",
      removeRule: "إزالة قاعدة",
      lt: "أقل من",
      lte: "أقل أو يساوي",
      gt: "أكبر من",
      gte: "أكبر أو يساوي",
      dateIs: "التاريخ هو",
      dateIsNot: "التاريخ ليس",
      dateBefore: "التاريخ قبل",
      dateAfter: "التاريخ بعد",
      custom: "مخصص",
      first: "الأول",
      last: "الأخير",
      next: "التالي",
      previous: "السابق",
      page: (pageNumber: number) => `صفحة ${convertToArabicNumbers(pageNumber)}`,
      of: (totalPages: number) => `من ${convertToArabicNumbers(totalPages)}`,
      rowsPerPage: "عدد الصفوف لكل صفحة"
    },
    en: {
      startsWith: "Starts with",
      contains: "Contains",
      notContains: "Not contains",
      endsWith: "Ends with",
      equals: "Equals",
      notEquals: "Not equals",
      clear: "Clear",
      apply: "Apply",
      matchAll: "Match all",
      matchAny: "Match any",
      addRule: "Add rule",
      removeRule: "Remove rule",
      lt: "Less than",
      lte: "Less or equal to",
      gt: "Greater than",
      gte: "Greater or equal to",
      dateIs: "Date is",
      dateIsNot: "Date is not",
      dateBefore: "Date before",
      dateAfter: "Date after",
      custom: "Custom",
      first: "First",
      last: "Last",
      next: "Next",
      previous: "Previous",
      page: (pageNumber: number) => `Page ${pageNumber}`,
      of: (totalPages: number) => `of ${totalPages}`,
      rowsPerPage: "Rows per page"
    }
  };

  function convertToArabicNumbers(input: string | number): string {
    const westernArabicNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const easternArabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    
    return input.toString().split('').map(char => {
      const index = westernArabicNumerals.indexOf(char);
      return index > -1 ? easternArabicNumerals[index] : char;
    }).join('');
  }