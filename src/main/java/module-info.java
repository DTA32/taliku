module com.dta32.taliku {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.dta32.taliku to javafx.fxml;
    exports com.dta32.taliku;
    exports com.dta32.taliku.controller;
}