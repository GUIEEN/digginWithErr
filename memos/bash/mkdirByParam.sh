# shell-format
# shift+option+f

directory_name=$1
thisWillMakeDir() {
	local variable="$1"
	if [ -d $variable ]; then
		echo "Directory( $variable ) already exists"
	else
		mkdir $variable
	fi
}

thisWillMakeDir "$directory_name"
# ---------------------------------
#               NOTE
# ---------------------------------
# mkdir -p $directory_name
# -p = --parents
# (no error if existing, make parent directories as needed)
