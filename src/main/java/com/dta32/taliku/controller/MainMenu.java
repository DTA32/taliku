package com.dta32.taliku.controller;

import com.dta32.taliku.Main;
import com.dta32.taliku.MainStage;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.input.MouseEvent;

import java.io.IOException;

public class MainMenu {
    public void mainBtnClicked(MouseEvent mouseEvent) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("fxml/pilih.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 600, 450);
        MainStage.stage.setScene(scene);
    }
}
