package com.dta32.taliku.controller;

import com.dta32.taliku.MainStage;
import javafx.event.ActionEvent;
import javafx.scene.Parent;

import java.io.IOException;

public class Pilih {
    private static Pilih pilih;
    private Parent parent;
    public static Pilih getInstance() {
        return pilih = pilih == null ? new Pilih() : pilih;
    }
    public Pilih(){}
    public void show(){
        try{
            MainStage mainStage = MainStage.getInstance();
            parent = mainStage.replaceSceneContent("pilih", parent);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public void kembaliBtnClicked(ActionEvent actionEvent) {
        MainMenu mainMenu = MainMenu.getInstance();
        mainMenu.show();
    }
}
