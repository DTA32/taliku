package com.dta32.taliku.controller;

import com.dta32.taliku.MainStage;
import javafx.event.ActionEvent;
import javafx.scene.Parent;
import javafx.scene.input.MouseEvent;

import java.io.IOException;

public class MainMenu {
    private static MainMenu mainMenu;
    private Parent parent;
    public static MainMenu getInstance() { return mainMenu = mainMenu == null ? new MainMenu() : mainMenu; }
    public MainMenu() {}
    public void show(){
        try{
            MainStage mainStage = MainStage.getInstance();
            parent = mainStage.replaceSceneContent("main-menu", parent);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public void mainBtnClicked(MouseEvent mouseEvent) {
        Pilih pilih = Pilih.getInstance();
        pilih.show();
    }
    public void btnCaraMainClicked(ActionEvent actionEvent) {
        CaraMain caraMain = CaraMain.getInstance();
        caraMain.show();
    }
    public void btnTentangClicked(ActionEvent actionEvent) {
        TentangGame tentangGame = TentangGame.getInstance();
        tentangGame.show();
    }
}
