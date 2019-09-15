countCharsInRepo() {
  for file in $1;
    do
      if [ -d "$file" ]; then
        path="$file/*"
        countCharsInRepo "$path"
      else
        sed 's/\(.\)/\1\n/g' "$file" | sort | uniq -ic;
      fi
    done
}

countCharsInRepo "./*"