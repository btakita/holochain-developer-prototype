#!/bin/sh
HDP_DIR_DEFAULT=~/work/holochain/holochain-developer-prototype/
HDP_DIR="${HDP_DIR:-$HDP_DIR_DEFAULT}"

tmux rename-session holochain-developer-prototype

cd $HDP_DIR

tmux rename-window holochain-developer-prototype
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $HDP_DIR/packages/ctx-core

tmux new-window
tmux rename-window ctx-core
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $HDP_DIR

tmux new-window
tmux rename-window util
tmux split-window -v
tmux split-window -v
tmux select-layout even-vertical
tmux select-pane -t 0

cd $HDP_DIR/packages/web

tmux new-window
tmux rename-window web
tmux split-window -v
tmux send-keys 'yarn run dev' 'C-m'
tmux select-layout even-vertical
tmux select-pane -t 0

tmux select-window -t 0
