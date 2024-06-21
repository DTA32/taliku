package com.dta32.taliku.controller;

import com.dta32.taliku.MainStage;
import javafx.event.ActionEvent;
import javafx.scene.Parent;

import java.io.IOException;

public class TentangGame {
    private static TentangGame tentangGame;
    private Parent parent;
    public static TentangGame getInstance() {
        return tentangGame = tentangGame == null ? new TentangGame() : tentangGame;
    }
    public TentangGame(){}
    public void show(){
        try{
            MainStage mainStage = MainStage.getInstance();
            parent = mainStage.replaceSceneContent("tentanggame", parent);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public void kembaliBtnClicked(ActionEvent actionEvent) {
        MainMenu mainMenu = MainMenu.getInstance();
        mainMenu.show();
    }
}
