# # Install and load the readr package if not already installed
if (!requireNamespace("readr", quietly = TRUE)) {
  install.packages("readr")
}
library(readr)

# Load the RData file
# mydata <- 
load("C:\\Users\\ammar\\Documents\\HACKX_2023\\5v_cleandf.RData")

# # Convert the data to a data frame (if needed)
mydata <- as.data.frame(df)

# Write the data frame to a CSV file
write_csv(mydata, "esi_triage_dataset.csv")

print("hello")

# install.packages("readr")
# library(readr)


# setwd("C:/Users/Zack-PC/Desktop/Study/Data Sets/pdCluster/")
# signalList <- load("C:\\Users\\ammar\\Documents\\HACKX_2023\\5v_cleandf.RData")
# write.csv(signalList, "esi_triage_dataset.csv")