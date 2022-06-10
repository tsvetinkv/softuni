function formatGrade(grade) {
  let description;
  let formatGrade = grade.toFixed(2);

  if (grade < 3.0) {
    description = "Fail";
    formatGrade = 2;
  } else if (grade >= 3.0 && grade < 3.5) {
    description = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    description = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    description = "Very good";
  } else if (grade >= 5.5) {
    description = "Excellent";
  }
  console.log(`${description} (${formatGrade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
formatGrade(5.5);

// < 3.00 - "Fail"

// · >= 3.00 and < 3.50 - "Poor"

// · >= 3.50 and < 4.50 - "Good"

// · >= 4.50 and < 5.50 - "Very good"

// · >= 5.50 - "Excellent"
