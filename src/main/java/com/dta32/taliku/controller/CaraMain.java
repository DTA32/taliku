package com.dta32.taliku.controller;

import com.dta32.taliku.MainStage;
import javafx.event.ActionEvent;
import javafx.scene.Parent;

import java.io.IOException;

public class CaraMain {
    private static CaraMain caraMain;
    private Parent parent;
    public static CaraMain getInstance() {
        return caraMain = caraMain == null ? new CaraMain() : caraMain;
    }
    public CaraMain(){}
    public void show(){
        try{
            MainStage mainStage = MainStage.getInstance();
            parent = mainStage.replaceSceneContent("caramain", parent);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public void kembaliBtnClicked(ActionEvent actionEvent) {
        MainMenu mainMenu = MainMenu.getInstance();
        mainMenu.show();
    }
}
