directory_name=$1
postDir=./blog/posted
copyToSomewhere() {
	local overTheRainbow="$1"
  if [ -d $overTheRainbow ]; then
    cp -R $postDir $overTheRainbow
    echo "`$postDir` Got Moved to $overTheRainbow"
	else
		echo "ERR:: Directory( $overTheRainbow ) doesn't exists"
  fi
}

copyToSomewhere "$directory_name"