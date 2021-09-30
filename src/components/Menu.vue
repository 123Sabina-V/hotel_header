<template>
    <b-navbar>
        <template #start>
            <b-navbar-item href="#">
                Best tour plan
                <span class="mdi mdi-format-align-justify"></span>
                <div class="block">
            <b-icon icon="account">mdi-format-align-justify</b-icon>
            <b-icon icon="home"></b-icon>
            <b-icon icon="view-dashboard"></b-icon>
        </div>
            </b-navbar-item>
            <b-field message="What do you want to search?">
            <b-input placeholder="Search..."
                type="search"
                icon="magnify">
            </b-input>
            <p class="control">
                <b-button type="is-primary" label="Search" />
            </p>
        </b-field>
        
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>